<template>
    <div class="cases">
        <br>
        <br>
        <br>
        <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
            <el-form-item label="直播标题" prop="title" style="width:50%">
                 <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="直播图片" prop="imageUuid" style="width:50%">
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
            <el-form-item label="直播时间" prop="showTime" style="width:50%">
                <el-date-picker
                        v-model="ruleForm.showTime"
                        type="datetime"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        :default-value="new Date()"
                        placeholder="选择日期时间"
                        style="width: 50%;">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="直播观看url链接地址" prop="url" style="width:50%">
                <el-input type="textarea" v-model="ruleForm.url" autosize></el-input>
            </el-form-item>
        </el-form>
        <!-- </el-form-item> -->
        <el-button @click="saveLive()">保存直播信息</el-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "LiveBroadcast",
        data(){
            return{
                ruleForm:{
                    title:'',
                    imageUuid:'',
                    showTime:'',
                    url:'',
                },
                uploadImageUrl:axios.defaults.baseURL + 'fileapi/uploadFile',//普通文件上传地址
                rules: {
                    title:[
                        {required:true,message:'请输入直播标题',trigger:'blur'},
                    ],
                    imageUuid:[
                        {required:true,message:'请上传直播图片',trigger:'blur'},
                    ],
                    showTime:[
                        {required:true,message:'请选择开播时间',trigger:'blur'},
                    ],
                    url:[
                        {required:true,message:'请输入观看直播url地址',trigger:'blur'},
                    ]
                }
            }
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
            saveLive(){
                if (!this.ruleForm.title) {
                    this.$message.error("请输入直播标题");
                    return;
                }
                if (!this.ruleForm.imageUuid) {
                    this.$message.error("请上传直播图片");
                    return;
                }
                if (!this.ruleForm.showTime) {
                    this.$message.error("请选择直播时间");
                    return;
                }
                if (!this.ruleForm.url) {
                    this.$message.error("请输入直播观看地址");
                    return;
                }
                this.$http.post("/liveapi/save", this.ruleForm)
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
            }
        }

    }
</script>

<style scoped>

</style>
