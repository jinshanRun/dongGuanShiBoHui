<template>
    <div>
        <br>
        <br>
        <br>
        <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
            <el-form-item label="嘉宾姓名" prop="name" style="width:50%">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="嘉宾图片" prop="imageUuid" style="width:50%">
                <el-upload
                        v-model="ruleForm.imageUuid"
                        class="upload-demo"
                        :action="uploadImageUrl"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        list-type="picture"
                        accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
                        name="file"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :on-success="SuccessImg"
                        :on-error="ErrorImg"
                        :before-upload="beforeUpload">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传大小不超过30M的图片</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="嘉宾职位" prop="position" style="width:50%">
                <el-input v-model="ruleForm.position" />
            </el-form-item>
            <el-form-item label="嘉宾介绍" prop="introduce" style="width:50%">
                <el-input type="textarea" v-model="ruleForm.introduce" autosize></el-input>
            </el-form-item>
            <el-form-item label="嘉宾排序" prop="sorted" style="width:50%">
                <el-input-number v-model="ruleForm.sorted" autosize></el-input-number>
            </el-form-item>
        </el-form>
        <!-- </el-form-item> -->
        <el-button @click="saveGuest()">保存嘉宾信息</el-button>
        <el-button @click="cancel()">重置</el-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "GuestAdd",
        data(){
            return{
                ruleForm:{
                    name:'',
                    position:'',
                    imageUuid:'',
                    introduce:'',
                    sorted:'',
                },
                uploadImageUrl:axios.defaults.baseURL + 'fileapi/uploadFile',//普通文件上传地址
                rules: {
                    name:[
                        {required:true,message:'请输入嘉宾姓名',trigger:'blur'},
                    ],
                    imageUuid:[
                        {required:true,message:'请上传嘉宾照片',trigger:'blur'},
                    ],
                    position:[
                        {required:true,message:'请输入嘉宾职位',trigger:'blur'},
                    ],
                    introduce:[
                        {required:true,message:'请输入嘉宾介绍',trigger:'blur'},
                    ],
                    sorted:[
                        {required:true,message:'请输入嘉宾排序',trigger:'blur'},
                    ]
                }
            };
        },
        methods: {
            beforeUpload() {
                // this.fileUpload.file=file;
                // 显示loading动画
                this.quillUpdateImg = true
            },
            handleRemove(file) {
                this.ruleForm.imageUuid = null;
                console.log(file)
            },
            handlePreview(file) {
                // eslint-disable-next-line no-console
                console.log(file);
            },
            handleExceed(files) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length } 个文件`);
            },
            beforeRemove(file) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            // 上传图片失败后执行
            ErrorImg() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            // 上传图片成功后执行
            SuccessImg(res){
                if (res.returnCode == true && res.returnMsg == "OK") {
                    this.ruleForm.imageUuid = res.data
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            saveGuest(){
                if (!this.ruleForm.name) {
                    this.$message.error("请输入嘉宾姓名");
                    return;
                }
                if (!this.ruleForm.imageUuid) {
                    this.$message.error("请上传嘉宾照片");
                    return;
                }
                if (!this.ruleForm.position) {
                    this.$message.error("请输入嘉宾职位");
                    return;
                }
                if (!this.ruleForm.introduce) {
                    this.$message.error("请输入嘉宾介绍");
                    return;
                }
                this.$http.post("/guestinfoapi/saveGuest", this.ruleForm)
                    .then(response => {
                        if(response.data.returnCode == true && response.data.returnMsg =="OK") {
                            this.loading = false;
                            this.$message({
                                message: "提交成功",
                                type: "success"
                            });
                            this.$refs.ruleForm.resetFields();
                            this.handleRemove();
                        }else{
                            this.$message.error("提交失败");
                        }
                    })
                    .catch(e => {
                        this.$message({
                            message: "提交失败！" + e,
                            type: "error"
                        });
                    });
            },
            cancel(){
                this.$refs.ruleForm.resetFields();
                this.handleRemove();
            },
        }
    }
</script>

<style scoped>

</style>
