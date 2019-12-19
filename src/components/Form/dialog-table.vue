<template>
  <div class="content">
    <el-dialog :title="dialogInfo.selectDialogTitle" :visible.sync="dialogTableVisible" :before-close="cancel">
      <div class="table_container">

        <el-table v-loading="loading" :data="dialogInfo.selectOptions" :cell-style="rowStyle" border style="width: 100%"
                  ref="multipleTable" @row-click="showRowDetail">
          <el-table-column label="" width="65">
            <template scope="scope">
              <el-radio :label="scope.row.id" v-model="templateRadio"
                        @change.native="getTemplateRow(scope.$index,scope.row)">&nbsp
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column :prop="item.prop" :label="item.name" v-for="(item,index) in dialogInfo.tableTitleList"
                           align='center'></el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="total,prev, pager, next"
            :total=pageTotal>
          </el-pagination>
        </div>
        <span class="form-btn" style="margin-top: 20px">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>

    export default {
        props: {
            dialogInfo: ''
        },
        data() {
            return {
                clickLineId: '',       //当前点击行id
                clickLineName: '',       //当前点击行名称
                clickLineCode: '',       //当前点击行代码
                tableData: [],    //表格数据
                loading: false,
                nowPage: 1, //当前页
                pageSize: 10, //每页显示多少条
                pageTotal: 0, //总条数
                dialogTableVisible: false,
                templateRadio: "",
            }
        },
        components: {},
        computed: {},
        mounted() {
        },
        created() {

        },
        methods: {
            //设置表头颜色
            setHeaderRowStyle({row, rowIndex}) {
                if (rowIndex === 0) {
                    return 'background:#eef2fe'
                } else {
                    return ''
                }
            },
            //隔行换色
            rowStyle: function ({row, rowIndex}) {
                if (rowIndex % 2 === 1) {
                    return 'background:#ebf1fb'
                } else {
                    return 'background:#fff'
                }
            },
            showTable() {
                this.dialogTableVisible = true
            },
            getTemplateRow(index, row) {                                 //获取选中数据
                this.templateSelection = row;
            },
            //操作完成提示信息  并刷新表格
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
            // 点击row显示详细数据
            showRowDetail(row) {
                this.clickLineId = row.id
                this.clickLineName = row.name
                this.clickLineCode = row.provinceCode
            },
            cancel() {
                this.$store.dispatch('common/set_options_empty_value')
                this.dialogTableVisible = false
            },
            onSubmit() {
                let param = {
                    id: this.clickLineId,
                    name: this.clickLineName,
                    code: this.clickLineCode
                }
                this.$store.dispatch('common/setSelectedValue', param)
                    .then((res) => {
                        this.$store.dispatch('common/set_options_empty_value')
                        this.dialogTableVisible = false
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

