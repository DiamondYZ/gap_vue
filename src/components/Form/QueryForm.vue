<template>
  <div class="query-form">
      <div class="query-form__title"><slot name="title"></slot></div>
      <div class="query-form__body" v-show="isShowQueryForm">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'QueryForm',
    data () {
      return {
        isShowQueryForm: this.isShow
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      toggleQueryForm () {
        this.isShowQueryForm = !this.isShowQueryForm
        this.$emit('is-show', this.isShowQueryForm)
      }
    }
  }
</script>

<style>
  .query-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }
  .query-form__title {
    display: flex;
    text-align: start;
    align-items: center;
  }
  .query-form__title > div {
    min-width: 80px;
  }
  .query-form .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 0px;
  }
</style>