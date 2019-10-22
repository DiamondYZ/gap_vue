<template>
  <div>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="上传店铺头像">
            <el-upload
              class="avatar-uploader"
              :action="'/v1/addimg/shop'"
              :show-file-list="false"
              :on-success="handleShopAvatarScucess"
              :before-upload="beforeAvatarUpload">
              <img v-if="formData.image_path" :src="formData.image_path" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="上传营业执照">
            <el-upload
              class="avatar-uploader"
              :action="'/v1/addimg/shop'"
              :show-file-list="false"
              :on-success="handleBusinessAvatarScucess"
              :before-upload="beforeAvatarUpload">
              <img v-if="formData.business_license_image" :src="formData.business_license_image"
                   class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="证件类型" prop="phone">
            <el-select v-model="value" placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件编号" prop="description">
            <el-input v-model="formData.description"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="promotion_info">
            <el-input v-model="formData.promotion_info"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="promotion_info">
            <el-input v-model="formData.promotion_info"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="promotion_info">
            <el-input v-model="formData.promotion_info"></el-input>
          </el-form-item>
          <el-form-item class="button_submit">
            <el-button type="primary" @click="submitForm('formData')">重置</el-button>
            <el-button type="primary" @click="submitForm('formData')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        radio: '1',
        formData: {
          name: '', //店铺名称
          address: '', //地址
          latitude: '',
          longitude: '',
          description: '', //介绍
          phone: '',
          promotion_info: '',
          float_delivery_fee: 5, //运费
          float_minimum_order_amount: 20, //起价
          is_premium: true,
          delivery_mode: true,
          new: true,
          bao: true,
          zhun: true,
          piao: true,
          startTime: '',
          endTime: '',
          image_path: '',
          business_license_image: '',
          catering_service_license_image: ''

        },
        rules: {
          name: [
            { required: true, message: '请输入店铺名称', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入详细地址', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入联系电话' },
            { type: 'number', message: '电话号码必须是数字' }
          ]
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    components: {},
    mounted() {
    },
    methods: {
      handleShopAvatarScucess(res, file) {
        if (res.status == 1) {
          this.formData.image_path = res.image_path
        } else {
          this.$message.error('上传图片失败！')
        }
      },
      handleBusinessAvatarScucess(res, file) {
        if (res.status == 1) {
          this.formData.business_license_image = res.image_path
        } else {
          this.$message.error('上传图片失败！')
        }
      },
      beforeAvatarUpload(file) {
        const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png')
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isRightType) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isRightType && isLt2M
      }
    }
  }
</script>

<style>

  .button_submit {
    text-align: center;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }

  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
