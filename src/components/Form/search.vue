<template>
  <div>
    <div style="margin-bottom: 20px;">
      <i class="el-icon-tickets" style="margin-top: 5px;font-size: 22px"></i>
      <span style="margin-top: 5px;font-size: 22px">{{pageInfo.listTitle}}</span>
    </div>
    <el-form
      :inline="true"
      :model='search_data'
      :rules="rules"
      ref="search_data"
      class="demo-form-inline search-form">
      <slot></slot>
      <el-form-item class="btnRight">
        <el-button size="small" @click='refreshSearch()'>
          <i class="el-icon-refresh"></i>
          重置
        </el-button>
        <el-button type="primary" size="mini" icon="search" @click='getList()'>查询</el-button>
      </el-form-item>
    </el-form>
    </el-collapse-item>
    </el-collapse>
    <div style="float: right;margin:20px 30px">
      <el-button type="primary" size="mini" icon="view" @click='add()'><i class="el-icon-plus"/>新增
      </el-button>
      <el-button type="primary" size="mini" icon="view" @click='deleteSelectedRow()' :disabled="deleteBtnDisabled">
        删除
      </el-button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'search',
    props: {
      pageInfo: ''
    },
    data() {
      return {
        search_data: {}          //搜索条件
      }
    },
    computed: {
      formBind() {
        const { $attrs } = this
        return $attrs
      },
      _formData() {
        return this.formData
      },
      getFormStatus() {
        return this.$store.getters.formStatus
      }
    },
    watch: {
      getFormStatus(data) {
        // console.log(data)
        // this.formStatus = data
      },
      _formData: {
        handler(cur) {
          this.form = cur
        },
        immediate: true
      }
    },
    created() {
      console.log(this.formStatus)
    },
    methods: {
      getFormItemBind(props) {
        const bind = Object.assign({}, props)
        return bind
      },
      getElementBind(props) {
        return (
          (props &&
            props.hasOwnProperty('propsHandle') &&
            props.propsHandle(props)) ||
          props
        )
      },
      // validate
      validate(cb = null) {
        this.$refs.form.validate(valid => {
          if (valid) {
            if (typeof cb === 'function') cb(this.form)
          } else {
            return false
          }
        })
      },
      // reset form value
      reset(callback = null) {
        this.$refs.form.resetFields()
        if (typeof callback === 'function') callback()
      },
      handleChange(data) {
        console.log(data)
        this.form.account = data
      }
    }
  }
</script>
<style scoped lang="scss">
  .el-form-item .el-form-item--medium {
    margin-bottom: 0 !important;
  }
</style>
