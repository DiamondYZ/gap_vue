<template>
  <div class="title-bar">
    <div class="title-bar__left"><slot name="left"></slot></div>
    <div class="title-bar__center"><slot name="center"></slot></div>
    <div class="title-bar__right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Titlebar'
  }
</script>

<style scoped>
  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    margin-bottom: 20px;
    border-bottom: 1px solid #DCDFE6;
    color: #333333;
    height: 45px;
    box-sizing: border-box;
  }
  .title-bar__left {
    padding: 0 10px;
    box-shadow: -4px 0px 0px #fabf40;
    font-size: 16px;
    box-shadow: 4px 0px 0px #fabf40 inset;
  }
  .title-bar__right .el-button+.el-button {
    margin-left: 8px;
  }
  .title-bar .i {
    font-size: 14px;
  }
  .el-tab-pane .title-bar__left {
    font-size: 14px;
    box-shadow: none;
    position: relative;
    display: flex;
    align-items: center;
  }
  .el-tab-pane .title-bar__left:not(:empty)::before {
    content: "";
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 4px solid #fabf40;
    border-radius: 14px;
    margin-right: 6px;
  }
  .title-bar__left i {
    color: #c9c9c9;
  }
  .title-bar__left i:hover {
    color: #fabf40;
  }
</style>
