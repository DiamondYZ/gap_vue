<template>
  <div id="app">
    <iframe
      style="border:none"
      :width="searchTableWidth"
      :height="searchTableHeight"
      frameborder="0" align="middle" width="100%" height="1024px" scrolling="no"
      src="https://sugar.baidubce.com/dashboard/c2983713d1250acefe383e4d728c2180"
    ></iframe>
  </div>
</template>
<script>

  export default {
    methods: {
    },
    data() {
      return {
        reportUrl: 'https://sugar.baidubce.com/dashboard/c2983713d1250acefe383e4d728c2180',
        searchTableHeight: 0,
        searchTableWidth: 0
      }
    },
    mounted() {
    },
    created() {
    },
    watch: {
    }
  }
</script>
