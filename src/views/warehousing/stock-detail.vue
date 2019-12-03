<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <div style="margin-bottom: 20px;">
        <i class="el-icon-tickets" style="margin-top: 5px;font-size: 22px" />
        <span style="margin-top: 5px;font-size: 22px">{{ pageInfo.listTitle }}</span>
      </div>
      <!--      <el-collapse v-model="activeNames">-->
      <!--        <el-collapse-item title="筛选搜索" name="1">-->
      <!--          <el-card class="filter-container" shadow="never">-->
      <!--            <div>-->

      <!--              <el-button-->
      <!--                style="float: right"-->
      <!--                type="primary"-->
      <!--                icon="el-icon-search"-->
      <!--                @click='getList()'-->
      <!--                size="mini">-->
      <!--                查询-->
      <!--              </el-button>-->
      <!--              <el-button-->
      <!--                style="float: right;margin-right: 15px"-->
      <!--                size="mini" @click='refreshSearch()'>-->
      <!--                <i class="el-icon-refresh"></i>-->
      <!--                重置-->
      <!--              </el-button>-->
      <!--            </div>-->
      <!--&lt;!&ndash;            <div style="margin-top: 15px">&ndash;&gt;-->
      <!--&lt;!&ndash;              <el-form :inline="true" :model="search_data" size="mini" label-width="140px">&ndash;&gt;-->
      <!--&lt;!&ndash;                <el-form-item label="库存：">&ndash;&gt;-->
      <!--&lt;!&ndash;                  <el-select class="item-choose" v-model="search_data.stockId" size="mini">&ndash;&gt;-->
      <!--&lt;!&ndash;                    <el-option label="" value=""></el-option>&ndash;&gt;-->
      <!--&lt;!&ndash;                    <el-option label="库存1" value="0"></el-option>&ndash;&gt;-->
      <!--&lt;!&ndash;                    <el-option label="库存2" value="1"></el-option>&ndash;&gt;-->
      <!--&lt;!&ndash;                  </el-select>&ndash;&gt;-->
      <!--&lt;!&ndash;                </el-form-item>&ndash;&gt;-->
      <!--&lt;!&ndash;              </el-form>&ndash;&gt;-->
      <!--&lt;!&ndash;            </div>&ndash;&gt;-->
      <!--          </el-card>-->
      <!--        </el-collapse-item>-->
      <!--      </el-collapse>-->
      <div style="float: left;margin:20px 30px">
        <el-button type="primary" size="mini" icon="view" @click="add()"><i class="el-icon-plus" />新增
        </el-button>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          :disabled="deleteBtnDisabled"
          @click="deleteSelectedRow()"
        >
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
            size="mini"
            :header-cell-style="setHeaderRowStyle"
            @row-click="showRowDetail"
            @select="selectTable"
            @select-all="selectAll"
          >
            <el-table-column type="selection" align="center" width="60" />
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
        :form-configs="stockDetailFormConfigs"
        @getList="getList()"
      />
      <dialog-table
        ref="dialogMaterialSelectTable"
        :dialog-info="dialogMaterialInfo"
        :form-configs="stockDetailFormConfigs"
        :table-title="tableTitle"
      />
      <dialog-table
        ref="dialogWarehouseSelectTable"
        :dialog-info="dialogWarehouseInfo"
        :form-configs="stockDetailFormConfigs"
        :table-title="tableTitle"
      />
    </el-card>
  </div>
</template>

<script>

import ShowDetailForm from '@/components/Form/show-detail-form.vue'
import DialogTable from '@/components/Form/dialog-table.vue'
import { stockDetailFormConfigs, formData } from '../../components/Form/form-configs.js'

export default {
  components: {
    'show-detail-form': ShowDetailForm,
    'dialog-table': DialogTable
  },
  data() {
    return {
      pageInfo: {
        interfaceName: 'stock-detail', // 接口名称
        listTitle: '库存明细列表',
        detailTitle: '库存明细详细信息'
      }, // 页面信息
      dialogWarehouseInfo: {
        selectDialogTitle: '选择仓库',
        dialogAxiosName: 'warehouse',
        dialogId: 'warehouseId',
        selectOptions: [],
        tableTitleList: [
          { prop: 'number', name: '仓库编号' },
          { prop: 'description', name: '仓库描述' },
          { prop: 'position', name: '数量' }
        ]
      },
      dialogMaterialInfo: {
        selectDialogTitle: '选择物料',
        dialogAxiosName: 'material',
        dialogId: 'materialId',
        selectOptions: [],
        tableTitleList: [
          { prop: 'number', name: '物料编号' },
          { prop: 'name', name: '物料名称' },
          { prop: 'description', name: '物料描述' }
        ]
      },
      search_data: {}, // 搜索条件
      clickLineId: '', // 当前点击行id
      deleteBtnDisabled: true, // 删除id
      showForm: false, // 是否显示表单0
      formStatus: '', // 表单状态  是否可点击
      tableTitleList: [
        { prop: 'warehouseNumber', name: '仓库编号' },
        // {prop: 'warehouseDescription', name: '仓库描述'},
        { prop: 'materialNumber', name: '物料编号' },
        // {prop: 'materialDescription', name: '物料描述'},
        { prop: 'quantity', name: '数量' },
        { prop: 'unitDict', name: '单位' },
        { prop: 'unitPrice', name: '单价' },
        { prop: 'totalPrice', name: '总价' },
        { prop: 'operateTime', name: '操作时间' },
        { prop: 'operateTypeDict', name: '操作类型' }
        // {prop: 'productDate', name: '生产日期'},
        // {prop: 'expireDate', name: '过期日期'},
        // {prop: 'operatorName', name: '操作人'},
        // {prop: 'isFirstEntryRecord', name: '是否首次入库'},
        // {prop: 'availableQuantity', name: '可出库数量'},
        // {prop: 'costQuantity', name: '成本数量'}
      ], // 表格头信息
      tableData: [], // 表格数据
      formData: {}, // 表单数据
      loading: false,
      rowIds: [], // 选中的行id数组
      nowPage: 1, // 当前页
      pageSize: 10, // 每页显示多少条
      pageTotal: 0, // 总条数
      activeNames: [],
      stockDetailFormConfigs,
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
        param = { url: val + '/getPullDownList' }
        this.$store.dispatch('common/getSelectOptionsList', param).then((res) => {
          if (val === 'material') {
            this.dialogMaterialInfo.selectOptions = res.data
            // this.dialogMaterialInfo.tableTitleList = [
            //     { prop: 'number', name: '编号' },
            //     { prop: 'name', name: '名称' },
            //     { prop: 'description', name: '描述' },
            // ] // 表格头信息
            this.$refs.dialogMaterialSelectTable.showTable()
          }
          if (val === 'warehouse') {
            this.dialogWarehouseInfo.selectOptions = res.data
            // this.dialogWarehouseInfo.tableTitleList = [
            //     { prop: 'number', name: '编号' },
            //     { prop: 'name', name: '名称' },
            //     { prop: 'description', name: '描述' },
            // ] // 表格头信息
            this.$refs.dialogWarehouseSelectTable.showTable()
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
    this.$store.dispatch('common/getPullDownList', { classCode: 'QUANTITY_UNIT_DICT' }) // 数量单位
    this.$store.dispatch('common/getPullDownList', { classCode: 'WAREHOUSE_BUSINESS_TYPE' }) // 操作类型(入库、出库、调库)
  },
  methods: {
    formatRole(row, column) {
      if (column.property === 'unitDict') {
        const statusArr = JSON.parse(localStorage.getItem('QUANTITY_UNIT_DICT'))
        return this.getArrayMapVal(statusArr, row[column.property])
      } else if (column.property === 'operateTypeDict') {
        const statusArr = JSON.parse(localStorage.getItem('WAREHOUSE_BUSINESS_TYPE'))
        return this.getArrayMapVal(statusArr, row[column.property])
      } else {
        return row[column.property]
      }
    },
    // 设置表头颜色
    setHeaderRowStyle({ row, rowIndex }) {
      if (rowIndex === 0) {
        return 'background:#eef2fe'
      } else {
        return ''
      }
    },
    // 隔行换色
    rowStyle: function({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'background:#ebf1fb'
      } else {
        return 'background:#fff'
      }
    },
    refreshSearch: function() {
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
      //    this.$refs.handSelect_multipleTable.toggleRowSelection(row);
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
