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
                <el-form-item label="输入搜索：">
                  <el-input v-model="search_data.customCondition" style="width: 203px" placeholder="账号或公司名称"/>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>

      <div class="fillcontain">
        <div class="table_container">
          <el-table
            ref="handSelect_multipleTable"
            v-loading="loading"
            :data="tableData"
            :cell-style="rowStyle"
            border
            style="width: 100%"
            size="mini"
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
        :form-configs="tracingFormConfigs"
        @getList="getList()"
      />
    </el-card>
  </div>
</template>

<script>

    import ShowDetailForm from '@/components/Form/show-detail-form.vue'
    import {tracingFormConfigs, formData} from '../../components/Form/form-configs.js'

    export default {
        components: {
            'show-detail-form': ShowDetailForm
        },
        data() {
            return {
                pageInfo: {
                    interfaceName: 'tracing', // 接口名称
                    listTitle: '溯源记录列表',
                    detailTitle: '溯源记录详细信息'
                }, // 页面信息
                search_data: {}, // 搜索条件
                clickLineId: '', // 当前点击行id
                deleteBtnDisabled: true, // 删除id
                showForm: false, // 是否显示表单0
                formStatus: '', // 表单状态  是否可点击
                tableTitleList: [
                    {prop: 'productionOrderNumber', name: '生产订单'},
                    {prop: 'workOrderNumber', name: '工单'},
                    {prop: 'taskNumber', name: '任务'},
                    {prop: 'productBaseName', name: '生产基地'},
                    {prop: 'productCellNumber', name: '生产单元'},
                    {prop: 'managerName', name: '负责人'},
                    {prop: 'productName', name: '产品'},
                    {prop: 'quantity', name: '数量'},
                    {prop: 'unitDict', name: '单位'},
                    {prop: 'actionDict', name: '生产行为'},
                    {prop: 'beginTime', name: '开始时间'},
                    {prop: 'endTime', name: '结束时间'}
                ], // 表格头信息
                tableData: [], // 表格数据
                formData: {}, // 表单数据
                loading: false,
                rowIds: [], // 选中的行id数组
                nowPage: 1, // 当前页
                pageSize: 10, // 每页显示多少条
                pageTotal: 0, // 总条数
                activeNames: [],
                tracingFormConfigs
            }
        },
        computed: {},
        created() {
            this.$store.dispatch('common/getPullDownList', {classCode: 'QUANTITY_UNIT_DICT'}) // 数量单位
            this.$store.dispatch('common/getPullDownList', {classCode: 'ACTION_DICT'}) // 生产行为dict
        },
        mounted() {
            this.getList()
        },
        methods: {
            formatRole(row, column) {
                if (column.property === 'unitDict') {
                    const statusArr = JSON.parse(localStorage.getItem('QUANTITY_UNIT_DICT'))
                    return this.getArrayMapVal(statusArr, row[column.property])
                } else if (column.property === 'actionDict') {
                    const statusArr = JSON.parse(localStorage.getItem('ACTION_DICT'))
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
                data.token = '18aad253349dacb94e9ea0863a7d664d'

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
