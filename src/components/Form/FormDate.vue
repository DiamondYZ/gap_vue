<template>
  <el-form-item :label="data.label" :prop="data.name" :rules="data.rules">
    <el-date-picker
      v-model="data.value"
      type="date"
      placeholder="data.placeholder" @change="handleChange">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  export default {
    name: 'FormDate',
    data () {
      return {
        value: this.data.value
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleChange (value) {
        this.$emit('change', {name: this.data.name, value: value})
      }
    }
  }
</script>

<style>
</style>