<template>
   <div class="all-container">
 	<h2 style="text-align: center;">个人信息</h2>
      <el-form :model="userlist" :rules="rules" ref="EditorUserForms">
        <el-form-item label="头像" prop="avatar_url" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader" action="//shujiaoke.oss-cn-hangzhou.aliyuncs.com" :before-upload="beforeupload" :data="uploadParm" :show-file-list="false" :on-success="handleUpSuccess">
          <img v-if="userlist.avatar_url" :src="userlist.avatar_url" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon " style="width:80px;height:80px;"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
         <el-col :span="8"> <el-input v-model="userlist.username" disabled ></el-input></el-col>
        </el-form-item>
        <el-form-item label="电话" prop="phone" :label-width="formLabelWidth">
         <el-col :span="8">  <el-input v-model="userlist.phone" disabled placeholder="请输入电话"></el-input></el-col>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
         <el-col :span="8">  <el-input v-model="userlist.email" disabled placeholder="请输入邮箱"></el-input></el-col>
        </el-form-item>
        <el-form-item label="用户角色" prop="full_name" :label-width="formLabelWidth">
         <el-col :span="8">
          <el-input v-model="userlist.full_name" disabled ></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
   </div>
</template>
<script>

export default {
	name:'userInfo',
 data() {
/*****检验两次密码是否一致***/
  var validatePass = (rule, value, callback) => {
   if (value === "") {
    callback(new Error("请输入密码"));
   } else {
    if (this.ruleForm.checknewpass !== "") {
     this.$refs.ruleForm.validateField("checknewpass");
    }
    callback();
   }
  };
  var validatePass2 = (rule, value, callback) => {
   if (value === "") {
    callback(new Error("请再次输入密码"));
   } else if (value !== this.ruleForm.newpass) {
    callback(new Error("两次输入密码不一致!"));
   } else {
    callback();
   }
  };
  return {
   uploadParm: {}, //图片的上传
   ruleForm: {},//修改密码的表单
   activeName: "first",
   loading: true,
   baseUrl: process.env.BASE_API,
   userlist: {
   	username:"aaaa",
   	phone:"15555555555",
   	email:"111@qq.com",
   	full_name:"管理员"
   },//用户信息表单
   formLabelWidth: "150px",
  /***校验***/
   rules: {
    phone: [
     {
      required: true,
      message: "请输入电话号码"
     },
     {
      pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
      message: "手机格式不对"
     }
    ],
    email: [
     {
      required: true,
      message: "请输入电子邮箱"
     },
     {
      pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
      message: "请输入有效的邮箱"
     }
    ],
    pass: [
     {
      required: true,
      trigger: "blur",
      message: "请输入密码"
     }
    ],
    newpass: [
     {
      validator: validatePass,
      trigger: "blur"
     }
    ],
    checknewpass: [
     {
      validator: validatePass2,
      trigger: "blur"
     }
    ]
   }
  };
 },
 created() {
 
 },
 computed: {
 
 },
 methods: {
}
};
</script>
