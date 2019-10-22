<template>
  <!-- $t is vue-i18n global function to translate lang -->
  <div class="app-container">
   
  	<h1>存储</h1>
  </div>
</template>

<script>
  import { fetchList } from '@/api/article'
  import { parseTime } from '@/utils'

  export default {
    name: 'UserList',
    data() {
      return {
        tableData: [{
          loginAccount: 'D-SN-0001',
          name: '综合管理部',
          email: '综合管理'
        }, {
          loginAccount: 'D-SN-0002',
          name: '综合管理部',
          email: '综合管理'
        }, {
          loginAccount: 'D-SN-0003',
          name: '综合管理部',
          email: '综合管理'
        }, {
          loginAccount: 'D-SN-0004',
          name: '综合管理部',
          email: '综合管理'
        }]
      }
    },
    created() {
    },
    methods: {
      toAddUser() {
        this.$router.push({ path: 'add-user', query: {} })
      }
    }
  }
</script>

<style>
  .radio-label {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 30px;
  }
</style>
