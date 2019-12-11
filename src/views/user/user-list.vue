<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <div style="margin-bottom: 20px;">
        <i class="el-icon-tickets" style="margin-top: 5px;font-size: 22px"></i>
        <span style="margin-top: 5px;font-size: 22px">{{pageInfo.listTitle}}</span>
      </div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="查询条件" name="1">
          <el-card class="filter-container" shadow="never">
            <div>
              <el-button
                style="float: right"
                type="primary"
                icon="el-icon-search"
                @click='getList()'
                size="mini">
                查询
              </el-button>
              <el-button
                style="float: right;margin-right: 15px"
                size="mini" @click='refreshSearch()'>
                <i class="el-icon-refresh"></i>
                重置
              </el-button>
            </div>
            <div style="margin-top: 15px">
              <el-form :inline="true" :model="search_data" size="mini" label-width="140px">
                <el-form-item label="">
                  <el-input style="width: 203px" v-model="search_data.customCondition" placeholder="账号或名称"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
      <div style="float: right;margin:20px 30px">
        <el-button type="success" size="mini" plain :disabled="statusDict!=='inactive'" @click="setStatus('active')">
          启用
        </el-button>
        <el-button type="danger" size="mini" plain :disabled="statusDict==='inactive' && deleteBtnDisabled" @click="setStatus('inactive')">
          禁用
        </el-button>
        <el-button type="warning" size="mini" plain :disabled="deleteBtnDisabled" @click="resetPassword()">
          <i class="el-icon-refresh"/>
          重置密码
        </el-button>
      </div>

      <div class="fillcontain">
        <!--        <div class="table_container">-->
        <!--          <el-table v-loading="loading" :data="tableData" :cell-style="rowStyle" ref="handSelect_multipleTable"-->
        <!--                    border style="width: 100%" max-height="500"-->
        <!--                    @row-click="showRowDetail" align='center' @select="selectTable" @select-all="selectAll"-->
        <!--                    :header-cell-style="setHeaderRowStyle">-->
        <!--            <el-table-column type="selection" align='center' width="60">-->
        <!--            </el-table-column>-->
        <!--            <el-table-column :prop="item.prop" :label="item.name" v-for="(item,index) in tableTitleList"-->
        <!--                             align='center'></el-table-column>-->
        <!--          </el-table>-->
        <!--          <div class="pagination">-->
        <!--            <el-pagination-->
        <!--              background-->
        <!--              @current-change="handleCurrentChange"-->
        <!--              layout="total,prev, pager, next"-->
        <!--              :total=pageTotal>-->
        <!--            </el-pagination>-->
        <!--          </div>-->
        <!--        </div>-->
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
      <show-detail-form ref="detailForm" :pageInfo=pageInfo
                        :formConfigs="usersFormConfigs"
                        @getList="getList()">
      </show-detail-form>
    </el-card>
  </div>
</template>

<script>

  import ShowDetailForm from '@/components/Form/show-detail-form.vue'
  import {usersFormConfigs} from '../../components/Form/form-configs.js'

  export default {
    data() {
      return {
        pageInfo: {
          interfaceName: 'users',   //接口名称
          listTitle: '用户列表',
          detailTitle: '用户详细信息'
        },   //页面信息
        search_data: {},          //搜索条件
        clickLineId: '',       //当前点击行id
        deleteBtnDisabled: true, //删除id
        showForm: false,       //是否显示表单0
        formStatus: '',        //表单状态  是否可点击
        tableTitleList: [
          {prop: 'account', name: '账号'},
          {prop: 'number', name: '编号'},
          {prop: 'name', name: '名称'},
          {prop: 'statusDict', name: '状态'},
        ],  //表格头信息
        tableData: [],    //表格数据
        formData: {},   //表单数据
        loading: false,
        rowIds: [],      //选中的行id数组
        nowPage: 1, //当前页
        pageSize: 10, //每页显示多少条
        pageTotal: 0, //总条数
        statusDict: '', // 控制状态按钮  状态
        activeNames: [],
        usersFormConfigs
      }
    },
    components: {
      'show-detail-form': ShowDetailForm
    },
    computed: {},
    created() {
      this.$store.dispatch('common/getPullDownList', {classCode: 'SYSTEM_USER_STATUS'}) // 用户状态
    },
    mounted() {
      this.getList()
    },
    methods: {
      formatRole(row, column) {
        if (column.property === 'statusDict') {
          const statusArr = JSON.parse(localStorage.getItem('SYSTEM_USER_STATUS'))
          return this.getArrayMapVal(statusArr, row[column.property])
        } else {
          return row[column.property]
        }
      },
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
      refreshSearch: function () {
        this.search_data = {}
      },
      //新增详细
      add() {
        this.$refs.detailForm.add()
      },
      //获取表格数据
      getList() {
        let data = {
          'entity': this.search_data,
          'orders': [{
            'asc': false,
            'column': 'crt_time'
          }],
          'pageNum': this.nowPage,
          'pageSize': this.pageSize
        }
        let param = {
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
        //点击选中复选框
//    	this.$refs.handSelect_multipleTable.toggleRowSelection(row);
        this.clickLineId = row.id
        this.$refs.detailForm.getDetailData(row.id)
      },
      // 获取编辑信息
      editDetail(row) {
        window.event ? window.event.cancelBubble = true : e.stopPropagation()
        let data = {
          'entity': {
            'id': this.clickLineId
          }
        }
        let param = {
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
      //新增或修改数据
      saveDetail() {
        this.$refs.baseForm.validate(data => {
          this.formData = data
          console.log(data)
        })
        let data = this.formData

        if (this.formStatus === 'edit') {
          data.id = this.clickLineId
          console.log(data)
          let param = {
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
          let param = {
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
      deleteSelectedRow() {
        console.log(this.rowIds)
        this.$confirm('确认批量删除记录吗?', '提示', {
          type: 'warning'
        })
          .then(() => {
            let data = {
              'idsList': this.rowIds
            }
            let param = {
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
        let selected = rows.length && rows.indexOf(row) !== -1
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
      // 重置密码
      resetPassword(){
        console.log('要重置密码的id为：'+this.rowIds)
        if (this.rowIds.length !== 1) {
          this.$message({
            message: '请选择一条记录',
            type: 'warning'
          })
        }
        const data = {
          'userId': this.rowIds[0]
        }
        this.$store.dispatch('user/resetPassword', data)
          .then((res) => {
            this.rowIds.length = 0
            this.refresh('重置成功！')
          })
          .catch(() => {

          })
      },
      // 状态管理
      // 发布
      setStatus(state) {
        if (this.rowIds.length !== 1) {
          this.$message({
            message: '请选择一条记录',
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
            this.refresh('状态更新成功！')
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
