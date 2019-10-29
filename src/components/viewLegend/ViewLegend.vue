<template>
  <div class="view-legend">
    <div class="view-legend__label"><slot name="label"></slot></div>
    <div class="view-legend__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ViewLegend'
  }
</script>

<style>
  .view-legend {
    position: relative;
    border: 1px solid rgba(121, 121, 121, 1);
    padding: 20px;
    margin-top: 20px;
    margin-bottom:20px ;
  }
  .view-legend__label {
    position: absolute;
    top: -8px;
    left: 20px;
    background-color: #FFFFFF;
  }
</style>