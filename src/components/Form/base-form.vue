<template>
  <div class="content">
    <el-form
      ref="form"
      in-line="true"
      :model="form"
      v-bind="formBind"
      v-on="$listeners"
    >
      <el-row :gutter="20">
        <el-col
          v-for="(item,key) in formConfigs"
          :key="key"
          :span="12"
        >
          <el-form-item
            v-bind="getFormItemBind(item.formItemProp)"
          >
            <el-input
              v-if="item.type == 'input'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show' || item.formItemProp.disable"
              v-bind="getElementBind(item.elementProp)"
            />
            <el-input
              v-if="item.type == 'dialog'"
              :disabled="formStatus==='show' || item.formItemProp.disable"
              v-model="form[item.formItemProp.prop]"
              readonly
              v-bind="getElementBind(item.elementProp)"
              @click.native="setSelectId(item.formItemProp.id)"
            />
            <el-select
              v-else-if="item.type==='select'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show' || item.formItemProp.disable"
              v-bind="getElementBind(item.elementProp)"
            >
              <el-option
                v-for="opt in item.optionList"
                :key="opt.label"
                v-bind="opt"
              />
            </el-select>
            <el-date-picker
              v-else-if="item.type==='datePicker'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show' || item.formItemProp.disable"
              value-format="yyyy-MM-dd"
              v-bind="getElementBind(item.elementProp)"
            />
            <el-switch
              v-else-if="item.type === 'switch'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show' || item.formItemProp.disable"
              active-value="1"
              inactive-value="0"
              v-bind="getElementBind(item.elementProp)"
            />
            <el-checkbox-group
              v-else-if="item.type==='checkboxGroup'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show'"
              v-bind="getElementBind(item.elementProp)"
            >
              <el-checkbox
                v-for="opt in item.optionList"
                :key="opt.label"
                v-bind="opt"
              />
            </el-checkbox-group>
            <el-radio-group
              v-else-if="item.type==='radioGroup'"
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show'"
              v-bind="getElementBind(item.elementProp)"
            >
              <el-radio
                v-for="opt in item.optionList"
                :key="opt.label"
                :value="opt.value"
                v-bind="opt"
              />
            </el-radio-group>
            <el-upload
              v-else-if="item.type==='img'"
              ref="elUpload"
              :disabled="formStatus==='show'"
              class="upload-demo"
              drag
              :action="upload_qiniu_url"
              :show-file-list="false"
              :auto-upload="true"
              :on-success="handleAvatarSuccess"
              :on-change="handleAvatarChange"
              :on-error="handleError"
              :before-upload="beforeAvatarUpload"
              :data="qiniuData"
            >
              <img
                v-if="img_url"
                :disabled="formStatus==='show'"
                :src="img_url"
                class="avatar"
              >
              <img
                v-else-if="form[item.formItemProp.prop]"
                :disabled="formStatus==='show'"
                :src="form[item.formItemProp.prop]"
                class="avatar"
              >
              <div v-else class="el-default" :disabled="formStatus==='show'">
                <i class="el-icon-upload" />
                <div class="el-upload__text"><em>点击上传</em></div>
              </div>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
            </el-upload>
            <component
              :is="item.elementProp.component"
              v-else
              v-model="form[item.formItemProp.prop]"
              :disabled="formStatus==='show'"
              v-bind="getElementBind(item.elementProp)"
              @handle-change="handleChange"
              v-on="item.elementProp.listeners"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BaseForm',
  props: {
    formData: {
      type: Object,
      default: () => {
      }
    },
    formConfigs: {
      type: Array,
      default: () => []
    },
    formStatus: ''
  },
  data() {
    return {
      form: {},
      qiniuData: {
        key: '',
        token: ''
      },
      // 七牛云上传储存区域的上传域名（华东、华北、华南、北美、东南亚）
      upload_qiniu_url: 'https://up-z1.qiniup.com',
      // upload_qiniu_url: 'https://up-z2.qiniup.com',
      // upload_qiniu_url: "https://upload.qiniup.com",
      // 七牛云返回储存图片的子域名
      upload_qiniu_addr: this.$store.state.common.upload_qiniu_addr,
      img_url: ''
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
    },
    listeningSelectedValue() {
      return this.$store.state.common.selectedValue
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
        this.img_url = cur.picPath
      },
      immediate: true
    },
    listeningSelectedValue(val) {
      const key1 = this.$store.state.common.selectToGetOptionsProp + 'Id'
      const key2 = this.$store.state.common.selectToGetOptionsProp + 'Name'
      this.form[key1] = val.id
      this.form[key2] = val.name
    }
  },
  created() {
    this.getQiniuToken()
    this.img_url = this.formData.picPath
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
    },
    setSelectId(prop) {
      if (this.formStatus === 'show') {
        return
      }
      this.$store.dispatch('common/set_options_value', prop)
    },
    uploadImg: function() {
      this.$refs.elUpload.submit()
    },
    handleAvatarChange() {
      this.getQiniuToken()
    },
    getQiniuToken: function() {
      const param = {
        'entity': {
          'jwt': localStorage.getItem('token')
        }
      }
      this.$store.dispatch('common/getQiniuToken', param)
        .then((res) => {
          console.log(res.data.uploadToken)
          this.qiniuData.token = res.data.uploadToken
        })
        .catch(() => {

        })
    },
    beforeAvatarUpload: function(file) {
      this.qiniuData.key = file.name
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isPNG) {
        this.$message.error('图片只能是 JPG/PNG 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('图片大小不能超过 2MB!')
        return false
      }
    },
    handleAvatarSuccess: function(res, file) {
      this.img_url = this.upload_qiniu_addr + res.key
      this.form['picPath'] = this.upload_qiniu_addr + res.key
    },
    handleError: function(res) {
      this.$message({
        message: '上传失败',
        duration: 2000,
        type: 'warning'
      })
    }
  }
}
</script>
<style scoped lang="scss">

  .el-default .el-icon-upload {
    margin-top: 30px;
  }

  .el-upload-dragger {
    /*width: 150px;*/
    /*height: 150px;*/
  }

  .avatar {
    max-width: 360px;
    max-height: 180px;
    display: block;
  }

  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
</style>
