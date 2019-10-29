<template>
  <el-form-item :label="data.label" :prop="data.name" :rules="data.rules">
    <img :src="value" v-if="value" class="form-image__preview"/>
    <i class="el-icon-picture-outline form-image__placeholder" v-else></i>
    <input type="file" :name="data.name"  accept="image/*" @change="handleChange" class="form-image__file" />
  </el-form-item>

</template>

<script>
  export default {
    name: 'FormImage',
    data () {
      return {
        value: this.data.value,
        imgFile: null
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleChange (e) {
        let f = e.target.files
        if (!f) {
          return
        }
        this.imgFile = f[0]
        this.imgFileToBase64(this.imgFile)
        this.$emit('change', {name: this.data.name, value: this.imgFile, type: 'file'})
      },
      imgFileToBase64 (file) {
        let fileReader = new FileReader()
        fileReader.onload = (e) => {
          this.value = e.target.result
        }
        fileReader.readAsDataURL(file)
      }
    }
  }
</script>

<style>
  .form-image__preview {
    max-height: 250px;
    max-width: 500px;
  }
  .form-image__placeholder {
    font-size: 250px;
  }
  .form-image__file {
    display: none;
  }
</style>