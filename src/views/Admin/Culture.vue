<template>
    <div class="cases">
        <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
            <el-form-item label="食文化分类" prop="cultureType">
                <!-- <el-input v-model="ruleForm.areaUuid"></el-input> -->
                <el-select v-model="ruleForm.cultureType" style="width: 50%">
                    <el-option label = "食文化" value="食文化">食文化</el-option>
                    <el-option label = "茶文化" value="茶文化">茶文化</el-option>
                    <el-option label = "酒文化" value="酒文化">酒文化</el-option>
                    <el-option label = "云南特产" value="云南特产"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="食文化标题" prop="cultureTitle" style="width:50%">
                <el-input v-model="ruleForm.cultureTitle"></el-input>
            </el-form-item>
            <el-form-item label="食文化摘要" prop="summary" style="width:50%">
                <el-input type="textarea" v-model="ruleForm.summary" autosize></el-input>
            </el-form-item>
            <el-form-item label="食文化图片" prop="imageUuid" style="width:50%">
                <el-upload
                        v-model="ruleForm.imageUuid"
                        class="upload-demo"
                        :action="uploadImageUrl"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        name="file"
                        accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
                        list-type="picture"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :on-success="SuccessImg"
                        :on-error="ErrorImg"
                        :before-upload="beforeUpload">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传大小不超过30M的图片</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="发布时间" prop="releaseTime" style="width:50%">
                <el-date-picker
                        v-model="ruleForm.releaseTime"
                        type="datetime"
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        :default-value="new Date()"
                        placeholder="选择日期时间"
                        style="width: 50%;">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="来源" prop="source" style="width:50%">
                <el-input v-model="ruleForm.source"></el-input>
            </el-form-item>
             <el-form-item label="正文信息" prop="content">
                 <el-upload
                         class="avatar-uploader"
                         :action="serverUrl"
                         name="file"
                         :data='fileUpload'
                         :show-file-list="false"
                         :on-success="uploadSuccess"
                         :on-error="uploadError"
                         :before-upload="beforeUpload">
                 </el-upload>
                <quill-editor v-model="ruleForm.content" style="width:50%"
                               ref="contenta"
                               :options="editorOption"
                               @blur="handleEditorBlur($event)"
                               @focus="handleEditorFocus($event)"
                               @change="handleEditorChange($event)">
                </quill-editor>
             </el-form-item>
        </el-form>
        <el-button @click="saveCulture()">提交</el-button>
    </div>
</template>

<script>
    import axios from "axios";

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{'header': 1}, {'header': 2}],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        [{'direction': 'rtl'}],
        [{'size': ['small', false, 'large', 'huge']}],
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        [{'color': []}, {'background': []}],
        [{'font': []}],
        [{'align': []}],
        ['link', 'image', 'video'],
        ['clean']
    ]
    //  toolbarOptions
    export default {
        name: 'contenta',
        data() {
            return {
                imageUuid: null,
                fileUpload:{   //附件上传
                    file:null
                },
                ruleForm :{
                    cultureType: '',
                    cultureTitle: '',
                    imageUuid: '',
                    releaseTime:'',
                    source: '',
                    summary: '',
                    content:'',
                },
                rules: {
                    cultureType: [
                        { required: true, message: '请选择食文化类型', trigger: 'blur' },
                        { min: 1,  message: '食文化类型不能为空', trigger: 'blur' }
                    ],
                    cultureTitle: [
                        { required: true, type: 'string' , message: '请输入食文化标题', trigger: 'blur' },
                        { min: 1,  message: '食文化标题不能为空', trigger: 'blur' }
                    ],
                    imageUuid: [
                        {required: true, message: '请上传食文化展示图片', trigger: 'blur' },
                        { min: 1,  message: '食文化展示图片不能为空', trigger: 'blur' }
                    ],
                    releaseTime: [
                        { required: true, message: '请选择发布时间', trigger: 'blur' },
                        { min: 1,  message: '发布时间不能为空', trigger: 'blur' }
                    ],
                    source: [
                        { required: true, message: '请输入来源', trigger: 'blur' },
                        { min: 1,  message: '来源信息不能为空', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入食文化相关正文信息', trigger: 'blur' },
                        { min: 1,  message: '展商相关正文信息不能为空', trigger: 'blur' }
                    ],
                },

                uploadImageUrl:axios.defaults.baseURL + 'fileapi/uploadFile',//普通文件上传地址
                serverUrl: axios.defaults.baseURL +'fileapi/partUploadFile',//富文本编辑器中上传图片的地址
                editorOption: {
                    placeholder: '',
                    theme: 'snow',
                    modules: {
                        toolbar: {
                            container: toolbarOptions,  // 工具栏
                            handlers: {
                                'image': function (value) {
                                    if (value) {
                                        document.querySelector('.avatar-uploader input').click()
                                    } else {
                                        this.quill.format('image', false);
                                    }
                                }
                            }
                        }
                    }
                },

            }
        },
        mounted() {
            // this.uploadError()
        },
        methods: {
            uploadError() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            uploadSuccess(res){
                // 首先获取富文本编辑器的实例
                let quill = this.$refs.contenta.quill
                // 上传成功所执行
                if (res.returnCode == true && res.returnMsg == "OK") {
                    // 获取光标所在位置
                    let length = quill.getSelection().index;
                    // 插入图片res为服务器返回的数据
                    quill.insertEmbed(length, 'image', res.data)
                    // 光标移动至文本末端
                    quill.setSelection(length + 1)
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            beforeUpload(file) {
                this.fileUpload.file=file;
                // 显示loading动画
                this.quillUpdateImg = true
            },
            handleEditorBlur () {},
            handleEditorFocus () {},
            //这个是当初做的个文字限制后来没用就注释了
            handleEditorChange () {},
            // 新闻列表图片封面上传
            handleRemove(file) {
                // eslint-disable-next-line no-console
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
            // 新闻封面上传图片
            ErrorImg() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            // 上传展商图片成功所执行
            SuccessImg(res){
                if (res.returnCode == true && res.returnMsg == "OK") {
                    this.ruleForm.imageUuid = res.data
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            saveCulture(){
                if (!this.ruleForm.cultureType) {
                    this.$message.error("请选择食文化类型");
                    return;
                }
                if (!this.ruleForm.cultureTitle) {
                    this.$message.error("请输入食文化标题");
                    return;
                }
                if (!this.ruleForm.imageUuid) {
                    this.$message.error("请上传食文化图片");
                    return;
                }
                if (!this.ruleForm.summary) {
                    this.$message.error("请输入食文化摘要");
                    return;
                }
                if (!this.ruleForm.releaseTime) {
                    this.$message.error("请设置发布时间");
                    return;
                }
                if (!this.ruleForm.source) {
                    this.$message.error("请输入来源");
                    return;
                }
                if (!this.ruleForm.content) {
                    this.$message.error("请输入正文信息");
                    return;
                }
                this.$http.post("/cultureapi/saveCulture", this.ruleForm)
                    .then(response => {
                        if(response.data.returnCode == true && response.data.returnMsg =="OK") {
                            this.loading = false;
                            this.$message({
                                message: "提交成功",
                                type: "success"
                            });
                            this.$refs.ruleForm.resetFields();
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
    };
</script>

<style scoped>
    .cases{
        margin-top: 50px!important;
    }
</style>
