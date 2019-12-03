<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <div style="font-size: larger; margin: 10px 0px">{{ pageInfo.listTitle }}</div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="查询条件" name="1">
          <el-card class="filter-container" shadow="never">
            <div>
              <el-button
                style="float: right"
                type="primary"
                icon="el-icon-search"
                size="mini"
                @click="getList()"
              >
                查询
              </el-button>
              <el-button
                style="float: right;margin-right: 15px"
                size="mini"
                @click="refreshSearch()"
              >
                <i class="el-icon-refresh"/>
                重置
              </el-button>
            </div>
            <div style="margin-top: 15px">
              <el-form :inline="true" :model="search_data" size="mini" label-width="140px">
                <el-form-item label="">
                  <el-input
                    v-model="search_data.customCondition"
                    style="width: 163px"
                    placeholder="编号、描述"
                  />
                </el-form-item>
                <el-form-item label="生产单元">
                  <el-input
                    v-model="search_data.productionCellCondition"
                    style="width: 163px"
                    placeholder="生产单元编号、描述"
                  />
                </el-form-item>
                <el-form-item label="产品">
                  <el-input
                    v-model="search_data.productionCondition"
                    style="width: 163px"
                    placeholder="产品编号、名称、描述"
                  />
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
      <div style="float: left;margin:20px 30px">
        <el-button type="primary" size="mini" icon="view" @click="add()"><i class="el-icon-plus" />
          新增
        </el-button>
        <el-button type="danger" icon="el-icon-delete" @click="deleteSelectedRow()" :disabled="deleteBtnDisabled">
          删除
        </el-button>
      </div>
      <div style="float: inherit;margin:20px 30px">
            <el-button type="success" size="mini" :disabled="statusDict!=='saved'" @click="setStatus('issued')">
              下发</el-button>
            <el-button type="info" size="mini" plain :disabled="statusDict!=='issued'" @click="setStatus('completed')">
              完成</el-button>
      </div>
      <div class="fillcontain">
        <div class="table_container">
          <el-table
            ref="table"
            v-loading="loading"
            :data="tableData"
            :cell-style="rowStyle"
            border
            stripe
            highlight-current-row
            :header-cell-style="setHeaderRowStyle"
            tooltip-effect="light"
            @row-click="showRowDetail"
            @select="selectTable"
            @select-all="selectAll"
          >
            <el-table-column type="selection" align="center" width="60"/>
            <el-table-column
              show-overflow-tooltip
              v-for="(item,index) in tableTitleList"
              :prop="item.prop"
              :label="item.name"
              :formatter="formatRole"
              align="center"
            />
          </el-table>
          <div class="pagination">
            <el-pagination
              background
              layout="total,prev, pager, next"
              :total="pageTotal"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
      <show-detail-form
        ref="detailForm"
        :page-info="pageInfo"
        :form-configs="workOrderFormConfigs"
        @getList="getList(nowPage)"
      />
      <dialog-table
        ref="dialogProductSelectTable"
        :dialog-info="dialogProductInfo"
        :form-configs="workOrderFormConfigs"
        :table-title="tableTitle"
      />
      <dialog-table
        ref="dialogProductionCellSelectTable"
        :dialog-info="dialogProductionCellInfo"
        :form-configs="workOrderFormConfigs"
        :table-title="tableTitle"
      />
      <dialog-table
        ref="dialogProductionOrderSelectTable"
        :dialog-info="dialogProductionOrderInfo"
        :form-configs="workOrderFormConfigs"
        :table-title="tableTitle"
      />
    </el-card>
  </div>
</template>

<script>

    import ShowDetailForm from '@/components/Form/show-detail-form.vue'
    import DialogTable from '@/components/Form/dialog-table.vue'
    import Toolbar from '@/components/toolbar/Toolbar'
    import ToolbarGroup from '@/components/toolbar/ToolbarGroup'
    import QueryForm from '@/components/Form/QueryForm'
    import Titlebar from '@/components/titlebar/Index'
    import {workOrderFormConfigs} from '../../components/Form/form-configs.js'

    export default {
        components: {
            Titlebar,
            Toolbar,
            ToolbarGroup,
            'show-detail-form': ShowDetailForm,
            'dialog-table': DialogTable
        },
        data() {
            return {
                pageInfo: {
                    interfaceName: 'work-order', // 接口名称
                    listTitle: '工单列表',
                    detailTitle: '工单详细信息'
                }, // 页面信息
                dialogProductInfo: {
                    selectDialogTitle: '产品',
                    dialogAxiosName: 'product',
                    dialogId: 'productId',
                    selectOptions: [],
                    tableTitleList: []
                },
                dialogProductionCellInfo: {
                    selectDialogTitle: '生产单元',
                    dialogAxiosName: 'productionCell',
                    dialogId: 'productionCellId',
                    selectOptions: [],
                    tableTitleList: []
                },
                dialogProductionOrderInfo: {
                    selectDialogTitle: '生产订单',
                    dialogAxiosName: 'productionOrder',
                    dialogId: 'productionOrderId',
                    selectOptions: [],
                    tableTitleList: []
                },
                search_data: {}, // 搜索条件
                clickLineId: '', // 当前点击行id
                deleteBtnDisabled: true, // 删除id
                showForm: false, // 是否显示表单0
                formStatus: '', // 表单状态  是否可点击
                tableTitleList: [
                    {prop: 'productionOrderNumber', name: '生产订单编号'},
                    {prop: 'number', name: '工单编号'},
                    {prop: 'description', name: '工单描述'},
                    {prop: 'productionCellNumber', name: '生产单元'},
                    {prop: 'productName', name: '产品'},
                    {prop: 'statusDict', name: '状态'}
                ], // 表格头信息
                tableData: [], // 表格数据
                formData: {}, // 表单数据
                loading: false,
                rowIds: [], // 选中的行id数组
                nowPage: 1, // 当前页
                pageSize: 10, // 每页显示多少条
                pageTotal: 0, // 总条数
                statusDict: '', // 控制状态按钮  状态
                activeNames: [],
                workOrderFormConfigs,
                tableTitle: []
            }
        },
        computed: {
            listeningClickDialog() {
                return this.$store.state.common.selectToGetOptionsProp
            }
        },
        watch: {
            listeningClickDialog(val) {
                if (val) {
                    let param
                    let urlValue
                    if (val === 'productionCell') {
                        urlValue = 'production-cell'
                    } else if (val === 'productionOrder') {
                        urlValue = 'production-order'
                    } else {
                        urlValue = val
                    }
                    param = {url: urlValue + '/getPullDownList'}
                    this.$store.dispatch('common/getSelectOptionsList', param).then((res) => {
                        if (val === 'product') {
                            this.dialogProductInfo.selectOptions = res.data
                            this.dialogProductInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'name', name: '名称'},
                                {prop: 'description', name: '描述'}
                            ] // 表格头信息
                            this.$refs.dialogProductSelectTable.showTable()
                        }
                        if (val === 'productionCell') {
                            this.dialogProductionCellInfo.selectOptions = res.data
                            this.dialogProductionCellInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'description', name: '描述'},
                                {prop: 'managerName', name: '负责人'}
                            ] // 表格头信息
                            this.$refs.dialogProductionCellSelectTable.showTable()
                        }
                        if (val === 'productionOrder') {
                            this.dialogProductionOrderInfo.selectOptions = res.data
                            this.dialogProductionOrderInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'description', name: '描述'},
                            ] // 表格头信息
                            this.$refs.dialogProductionOrderSelectTable.showTable()
                        }
                    })
                        .catch(() => {

                        })
                }
            }
        },
        mounted() {
            this.getList()
        },
        created() {
            this.$store.dispatch('common/getPullDownList', {classCode: 'DISPATCH_LIST_STATUS'}) // 工单状态
            this.$store.dispatch('common/getPullDownList', {classCode: 'QUANTITY_UNIT_DICT'}) // 数量单位
        },
        methods: {
            formatRole(row, column) {
                if (column.property === 'statusDict') {
                    const statusArr = JSON.parse(localStorage.getItem('DISPATCH_LIST_STATUS'))
                    return this.getArrayMapVal(statusArr, row[column.property])
                } else if (column.property === 'unitDict') {
                    const statusArr = JSON.parse(localStorage.getItem('QUANTITY_UNIT_DICT'))
                    return this.getArrayMapVal(statusArr, row[column.property])
                } else {
                    return row[column.property]
                }
            },
            // 设置表头颜色
            setHeaderRowStyle({row, rowIndex}) {
                if (rowIndex === 0) {
                    return 'background:#eef2fe'
                } else {
                    return ''
                }
            },
            // 隔行换色
            rowStyle: function ({row, rowIndex}) {
                if (rowIndex % 2 === 1) {
                    return 'background:#ebf1fb'
                } else {
                    return 'background:#fff'
                }
            },
            refreshSearch: function () {
                this.search_data = {}
            },
            // 新增详细
            add() {
                this.$refs.detailForm.add()
            },
            // 获取表格数据
            getList() {
                const data = {
                    'entity': this.search_data,
                    'orders': [{
                        'asc': false,
                        'column': 'crt_time'
                    }],
                    'pageNum': this.nowPage,
                    'pageSize': this.pageSize
                }
                const param = {
                    name: this.pageInfo.interfaceName,
                    data: data
                }
                this.$store.dispatch('common/getList', param)
                    .then((res) => {
                        console.log(res)
                        this.tableData = res.data.records
                        this.pageTotal = res.data.total
                    })
                    .catch(() => {

                    })
            },
            // 点击row显示详细数据
            showRowDetail(row) {
                // 点击选中复选框
                //    	this.$refs.handSelect_multipleTable.toggleRowSelection(row);
                this.clickLineId = row.id
                this.$refs.detailForm.getDetailData(row.id)
            },
            // 获取编辑信息
            editDetail(row) {
                window.event ? window.event.cancelBubble = true : e.stopPropagation()
                const data = {
                    'entity': {
                        'id': this.clickLineId
                    }
                }
                const param = {
                    name: this.pageInfo.interfaceName,
                    data: data
                }
                this.$store.dispatch('common/getDetail', param)
                    .then((res) => {
                        this.showForm = true
                        this.formStatus = 'edit'
                        this.formData = res.data
                    })
                    .catch(() => {

                    })
            },
            // 新增或修改数据
            saveDetail() {
                this.$refs.baseForm.validate(data => {
                    this.formData = data
                    console.log(data)
                })
                const data = this.formData

                if (this.formStatus === 'edit') {
                    data.id = this.clickLineId
                    console.log(data)
                    const param = {
                        name: this.pageInfo.interfaceName,
                        data: data
                    }
                    this.$store.dispatch('common/editDetail', param)
                        .then((res) => {
                            this.refresh('更新成功！')
                            this.formStatus = 'show'
                        })
                        .catch(() => {

                        })
                } else {
                    const param = {
                        name: this.pageInfo.interfaceName,
                        data: data
                    }
                    this.$store.dispatch('common/saveDetail', param)
                        .then((res) => {
                            this.refresh('保存成功！')
                        })
                        .catch(() => {

                        })
                }
            },
            // 操作完成提示信息  并刷新表格
            refresh(info) {
                this.$notify({
                    title: '成功',
                    message: info,
                    type: 'success'
                })
                this.getList()
            },
            // 上下分页
            handleCurrentChange(val) {
                this.nowPage = val
                this.getList()
            },
            deleteSelectedRow() {
                console.log(this.rowIds)
                this.$confirm('确认批量删除记录吗?', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        const data = {
                            'idsList': this.rowIds
                        }
                        const param = {
                            name: this.pageInfo.interfaceName,
                            data: data
                        }
                        this.$store.dispatch('common/deleteDetail', param)
                            .then((res) => {
                                this.deleteBtnDisabled = true
                                this.refresh('删除成功！')
                            })
                            .catch(() => {

                            })
                    })
                    .catch(() => {
                    })
            },
            // 当用户手动勾选数据行的 Checkbox 时触发的事件
            selectTable(rows, row) {
                const selected = rows.length && rows.indexOf(row) !== -1
                if (selected) {
                    this.rowIds.push(row.id)
                    this.statusDict = row.statusDict
                } else {
                    this.rowIds.splice(this.rowIds.indexOf(row.id), 1)
                }
                this.setDeleteBtn()
            },
            // 用户全选checkbox时触发该事件
            selectAll(val) {
                console.log(val)
                if (val.length !== 0) {
                    val.forEach((item) => {
                        this.rowIds.push(item.id)
                    })
                } else {
                    this.rowIds = []
                }

                this.setDeleteBtn()
            },
            setDeleteBtn() {
                if (this.rowIds.length === 0) {
                    this.deleteBtnDisabled = true
                    this.statusDict = ''
                } else {
                    this.deleteBtnDisabled = false
                }
            },
            // 状态管理
            // 发布
            setStatus(state) {
                if (this.rowIds.length !== 1) {
                    this.$message({
                        message: '请更改一条数据转态',
                        type: 'warning'
                    })
                    return
                }
                const data = {
                    'id': this.rowIds[0]
                }
                const param = {
                    url: '/' + this.pageInfo.interfaceName + '/' + state,
                    data: data
                }
                this.$store.dispatch('common/setDataState', param)
                    .then((res) => {
                        this.deleteBtnDisabled = true
                        this.rowIds.length = 0
                        this.refresh('更新成功！')
                    })
                    .catch(() => {

                    })
            }
        }
    }
</script>

<style scoped>
  .el-table thead {
    color: #909399;
    font-weight: 500;
    background: #eef2fe !important;
    background: red !important;
  }

  .table_container {
    padding: 10px;
    background: #fff;
    border-radius: 2px;
  }

  .el-table .warning-row {
    background: #f7faff;
  }

  .el-table .success-row {
    background: #ebf1fb;
  }

  .pagination {
    text-align: left;
    margin-top: 20px;
  }
</style>
