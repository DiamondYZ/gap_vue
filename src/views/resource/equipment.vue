<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <div style="margin-bottom: 20px;">
        <i class="el-icon-tickets" style="margin-top: 5px;font-size: 22px"/>
        <span style="margin-top: 5px;font-size: 22px">{{ pageInfo.listTitle }}</span>
      </div>
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
                    style="width: 203px"
                    placeholder="编号、描述"
                  />
                </el-form-item>
<!--                <el-form-item label="设备类型">-->
<!--                  <el-input v-model="search_data.equipmentTypeId" style="width: 203px" placeholder="" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="设备型号">-->
<!--                  <el-input v-model="search_data.equipmentModelId" style="width: 203px" placeholder="" />-->
<!--                </el-form-item>-->
<!--                <el-form-item label="设备状态">-->
<!--                  <el-select v-model="search_data.availableStatus" class="item-choose" size="mini">-->
<!--                    <el-option label="" value="" />-->
<!--                    <el-option label="设备状态1" value="0" />-->
<!--                    <el-option label="设备状态2" value="1" />-->
<!--                  </el-select>-->
<!--                </el-form-item>-->
              </el-form>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
      <div style="float: left;margin:20px 30px">
        <el-button type="primary" size="mini" icon="view" @click="add()"><i class="el-icon-plus"/>新增
        </el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete" :disabled="deleteBtnDisabled"
                   @click="deleteSelectedRow()">
          删除
        </el-button>
      </div>

      <div class="fillcontain">
        <div class="table_container">
          <el-table
            ref="handSelect_multipleTable"
            v-loading="loading"
            :data="tableData"
            :cell-style="rowStyle"
            border
            style="width: 100%"
            max-height="500"
            align="center"
            :header-cell-style="setHeaderRowStyle"
            @row-click="showRowDetail"
            @select="selectTable"
            @select-all="selectAll"
          >
            <el-table-column type="selection" align="center" width="60"/>
            <el-table-column
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
        :form-configs="equipmentFormConfigs"
        @getList="getList(nowPage)"
      />
      <dialog-table
        ref="dialogTypeSelectTable"
        :dialog-info="dialogTypeInfo"
        :form-configs="equipmentFormConfigs"
        :table-title="tableTitle"
      />
      <dialog-table
        ref="dialogModelSelectTable"
        :dialog-info="dialogModelInfo"
        :form-configs="equipmentFormConfigs"
        :table-title="tableTitle"
      />
      <dialog-table
        ref="dialogSupplierSelectTable"
        :dialog-info="dialogSupplierInfo"
        :form-configs="equipmentFormConfigs"
        :table-title="tableTitle"
      />
    </el-card>
  </div>
</template>

<script>

    import ShowDetailForm from '@/components/Form/show-detail-form.vue'
    import DialogTable from '@/components/Form/dialog-table.vue'
    import {equipmentFormConfigs} from '../../components/Form/form-configs.js'

    export default {
        components: {
            'show-detail-form': ShowDetailForm,
            'dialog-table': DialogTable
        },
        data() {
            return {
                pageInfo: {
                    interfaceName: 'equipment', // 接口名称
                    listTitle: '设备列表',
                    detailTitle: '设备详细信息'
                }, // 页面信息
                dialogModelInfo: {
                    selectDialogTitle: '设备型号',
                    dialogAxiosName: 'equipmentModel',
                    dialogId: 'equipmentModelId',
                    selectOptions: [],
                    tableTitleList: []
                },
                dialogTypeInfo: {
                    selectDialogTitle: '设备类型',
                    dialogAxiosName: 'equipmentType',
                    dialogId: 'equipmentTypeId',
                    selectOptions: [],
                    tableTitleList: []
                },
                dialogSupplierInfo: {
                    selectDialogTitle: '设备制造商',
                    dialogAxiosName: 'manufacturer',
                    dialogId: 'manufacturerId',
                    selectOptions: [],
                    tableTitleList: []
                },
                search_data: {}, // 搜索条件
                clickLineId: '', // 当前点击行id
                deleteBtnDisabled: true, // 删除id
                showForm: false, // 是否显示表单0
                formStatus: '', // 表单状态  是否可点击
                tableTitleList: [
                    { prop: 'number', name: '编号' },
                    { prop: 'description', name: '描述' },
                    { prop: 'equipmentTypeName', name: '设备类型' },
                    { prop: 'equipmentModelName', name: '设备型号' },
                    { prop: 'sourcesDict', name: '设备来源' },
                    { prop: 'availableStatus', name: '设备状态' }
                ], // 表格头信息
                tableData: [], // 表格数据
                formData: {}, // 表单数据
                loading: false,
                rowIds: [], // 选中的行id数组
                nowPage: 1, // 当前页
                pageSize: 10, // 每页显示多少条
                pageTotal: 0, // 总条数
                activeNames: [],
                equipmentFormConfigs,
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
                    let urlValue
                    if (val === 'equipmentType') {
                        urlValue = 'equipment-type'
                    } else if (val === 'equipmentModel') {
                        urlValue = 'equipment-model'
                    } else if (val === 'manufacturer') {
                        urlValue = 'supplier'
                    } else {
                        urlValue = val
                    }
                    const param = {url: urlValue + '/getPullDownList'}
                    this.$store.dispatch('common/getSelectOptionsList', param).then((res) => {
                        if (val === 'equipmentType') {
                            this.dialogTypeInfo.selectOptions = res.data
                            this.dialogTypeInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'name', name: '名称'},
                                {prop: 'description', name: '描述'}
                            ] // 表格头信息
                            this.$refs.dialogTypeSelectTable.showTable()
                        }
                        if (val === 'equipmentModel') {
                            this.dialogModelInfo.selectOptions = res.data
                            this.dialogModelInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'name', name: '名称'},
                                {prop: 'description', name: '描述'}
                            ] // 表格头信息
                            this.$refs.dialogModelSelectTable.showTable()
                        }
                        if (val === 'manufacturer') {
                            this.dialogSupplierInfo.selectOptions = res.data
                            this.dialogSupplierInfo.tableTitleList = [
                                {prop: 'number', name: '编号'},
                                {prop: 'name', name: '名称'},
                                {prop: 'description', name: '描述'}
                            ] // 表格头信息
                            this.$refs.dialogSupplierSelectTable.showTable()
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
            this.$store.dispatch('common/getPullDownList', { classCode: 'EQUIPMENT_SOURCE' }) // 设备来源
            this.$store.dispatch('common/getPullDownList', { classCode: 'EQUIPMENT_AVAILABLE' }) // 设备状态
            this.$store.dispatch('common/getPullDownList', { classCode: 'DATE_UNIT' }) // 使用寿命单位
            this.$store.dispatch('common/getPullDownList', { classCode: 'DEPRECIATED_METHOD' }) // 折旧方法
            this.$store.dispatch('common/getPullDownList', { classCode: 'AREA_UNIT_DICT' }) // 占地面积单位
            this.$store.dispatch('common/getPullDownList', { classCode: 'IS_VALID' }) // 是否
        },
        methods: {
            formatRole(row, column) {
                if (column.property === 'availableStatus') {
                    const statusArr = JSON.parse(localStorage.getItem('EQUIPMENT_AVAILABLE'))
                    return this.getArrayMapVal(statusArr, row[column.property])
                } else if (column.property === 'sourcesDict') {
                    const statusArr = JSON.parse(localStorage.getItem('EQUIPMENT_SOURCE'))
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
                // this.$refs.handSelect_multipleTable.toggleRowSelection(row);
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
                } else {
                    this.deleteBtnDisabled = false
                }
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
