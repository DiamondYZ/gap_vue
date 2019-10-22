<template>
  <el-card class="filter-container" shadow="never" v-show="showForm">
    <div style="margin-bottom: 20px;">
      <i class="el-icon-tickets" style="margin-top: 5px;font-size: 22px"></i>
      <span style="margin-top: 5px;font-size: 22px">{{pageInfo.detailTitle}}</span>
      <span class="form-btn" style="float: right" v-show="pageInfo.interfaceName!=='tracing'">
         <el-button type="primary" icon='edit' size="small" v-show="formStatus==='show'" @click='editDetail()'>
          <i class="el-icon-edit"/>编辑
        </el-button>
        <el-button type="primary" @click="cancelEdit()" v-show="formStatus==='edit'">取  消</el-button>
        <el-button type="primary" @click="editDetail()" v-show="formStatus==='edit'">重  置</el-button>
        <el-button type="primary" @click="saveDetail()" v-show="formStatus==='edit'">保  存</el-button>
        <el-button type="primary" @click="saveDetail()" v-show="formStatus==='add'">新  增</el-button>
      </span>
    </div>
    <div style="margin-top: 15px">
      <base-form
        ref="baseForm"
        :form-configs="formConfigs"
        :form-data="formData"
        :formStatus=formStatus
        label-position="right"
        label-width="120px">
      </base-form>
    </div>
  </el-card>
</template>

<script>

  import BaseForm from '@/components/Form/base-form.vue'

  export default {
    name: 'show-detail-form',
    props: {
      formConfigs: {
        type: Array,
        default: () => []
      },
      pageInfo: ''
    },
    data() {
      return {
        loading: false,
        formData: {},
        showForm: '',
        formStatus: '',
        clickLineId: ''       //当前点击行id
      }
    },
    components: {
      'base-form': BaseForm
    },
    computed: {},
    mounted() {

    },
    methods: {
      //新增详细
      add() {
        this.formStatus = 'add'
        this.showForm = true
        this.formData = {}
      },
      // 点击row显示详细数据
      getDetailData(id) {
        //点击选中复选框
        this.clickLineId = id
        let data = {
          'entity': {
            'id': id
          }
        }
        let param = {
          name: this.pageInfo.interfaceName,
          data: data
        }
        this.$store.dispatch('common/getDetail', param)
          .then((res) => {
            this.showForm = true
            this.formStatus = 'show'
            this.formData = res.data
          })
          .catch(() => {

          })
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
      //取消编辑
      cancelEdit() {
        this.formStatus = 'show'
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
        this.$emit('getList', this.clickLineId)
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
