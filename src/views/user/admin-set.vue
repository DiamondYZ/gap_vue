<template>
    <div class="fillcontain">
        <header class="admin_title">管理员信息</header>
        <div class="admin_set">
            <ul>
                <li>
                    <span>姓名：</span><span>adminInfo.user_name</span>
                </li>
                <li>
                    <span>注册时间：</span><span>adminInfo.create_time</span>
                </li>
                <li>
                    <span>管理员权限：</span><span>adminInfo.admin</span>
                </li>
                <li>
                    <span>管理员 ID：</span><span>adminInfo.id</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
    	components: {

    	},
        computed: {

        },
        methods: {

        },
    }
</script>

<style>
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
    .admin_set{
        width: 60%;
        background-color: #F9FAFC;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul > li{
            padding: 20px;
            span{
                color: #666;
            }
        }
    }
    .admin_title{
        margin-top: 20px;
        text-align: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        margin-top: 10px;
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
</style>
