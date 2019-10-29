<template>
  <div class="toolbar-item" @click.stop="handleClick" :class="{'toolbar-item--disabled': disabled}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ToolbarItem',
    props: {
      disabled: Boolean
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.$emit('click')
        }
      }
    }
  }
</script>

<style>
.toolbar-item+.toolbar-item{
  margin-left: 25px;
}
.toolbar-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
}
.toolbar-item--disabled {
  color: #BBBBBB;
}
</style>