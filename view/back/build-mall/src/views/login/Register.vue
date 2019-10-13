<template>
<div class="container">
    <el-row>
        <el-col :span="24">
            <div class="header1">
            <img src="../../assets/img/logo.png" style="width: 50px;height: 50px"/><h2 style="margin-left: 10px;margin-top: 7px">小众商城</h2>
            </div>
        </el-col>
    </el-row>
    <hr class="hr">
    <el-row>
        <el-col :span="24">
            <div style="background-color: grey;width: 100%;height:30px;margin-top: 10px;line-height: 30px;color: white;padding:0px 10px">
            <p class="left">商家入驻</p>
            <p class="right">已有账号，去<a>登录</a></p>
           </div>
        </el-col>
    </el-row>

    <div class="center">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录名（不可修改）" prop="name" >
            <el-input v-model="ruleForm.name" placeholder="登录名"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="name" >
            <el-input v-model="ruleForm.name" placeholder="登录密码"></el-input>
        </el-form-item>
        <el-form-item label="店铺名称" prop="name" >
            <el-input v-model="ruleForm.name" placeholder="店铺名称"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名" prop="name">
            <el-input v-model="ruleForm.name"  placeholder="联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话" prop="name" >
            <el-input v-model="ruleForm.name" placeholder="联系人电话"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" prop="name" >
            <el-input v-model="ruleForm.name" placeholder="联系地址"></el-input>
        </el-form-item>
        <el-form-item label="开店类型" prop="region" >
            <el-select v-model="ruleForm.region" placeholder="请选择开店类型">
                <el-option label="个人" value="shanghai"></el-option>
                <el-option label="企业" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="上传凭证" prop="name" >
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          <!--  <el-input v-model="ruleForm.name" placeholder="请拍照上传凭证"></el-input>-->
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        <div style="height: 30px"></div>
    </el-form>
    </div>
</div>
</template>

 <script>
        export default {
            name:'Register',
            data() {
                return {
                    ruleForm: {
                        name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                    },
                    rules: {
                        name: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        region: [
                            { required: true, message: '请选择活动区域', trigger: 'change' }
                        ],
                        date1: [
                            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                        ],
                        date2: [
                            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                        ],
                        type: [
                            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                        ],
                        resource: [
                            { required: true, message: '请选择活动资源', trigger: 'change' }
                        ],
                        desc: [
                            { required: true, message: '请填写活动形式', trigger: 'blur' }
                        ]
                    }
                };
            },
            methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('submit!');
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        }
</script>

<style lang="scss" scoped>
    .hr{
       /* 1、hr的颜色不能使用color来控制，要使用background-color来控制

                2、hr的高度不能为 0

                3,、还会有灰色的阴影，设置border:none*/
            height: 1px;
            background-color:red;
            border: none;
        margin-top: 10px;
    }
    .header1{
        display: flex;float: left;
        width: 100%;
    }
    .center{
        height: 100%;
        padding: 20px 30%;
        overflow-y: scroll;
        border: solid;
        border-width:0.5px;
    }
    .center::-webkit-scrollbar{
        display: none;
    }

</style>