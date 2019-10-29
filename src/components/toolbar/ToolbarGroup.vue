<template>
  <div class="toolbar-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ToolbarGroup',
    props: {
      label: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style>
 .toolbar-group {
   display: flex;
   justify-content: flex-start;
 }
</style>