<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-table :data="articleList">
            <el-table-column fixed prop="title" label="新闻标题" width="600" />
            <el-table-column prop="releaseTime" label="发布时间" width="160" />
            <el-table-column prop="releaseUser" label="发布人" width="200" />
            <el-table-column prop="source" label="来源" width="300" />
            <el-table-column prop="readCount" label="阅读量" width="100" />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button slot="reference" type="text" size="small" @click="deleteArticle(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.countTotal" />
        <div>
            <el-drawer title="新闻资讯信息修改"
                   :size="'50%'"
                   :visible.sync="drawer"
                   direction="rtl"
                   :destroy-on-close="true"
                   @close="getArticleList(page,size)">
            <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="150px">
                <el-form-item label="文章标题" prop="articleTitle" style="width:80%">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="摘要" prop="summary" style="width:80%">
                    <el-input type="textarea" autosize v-model="ruleForm.summaryItem"></el-input>
                </el-form-item>
                <el-form-item label="新闻封面" prop="imageUuid" style="width:80%">
                    <!-- <el-input v-model="ruleForm.imageUuid"></el-input> -->
                    <el-upload
                            class="upload-demo"
                            :action="uploadImageUrl"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            :file-list="this.imageFileList"
                            list-type="picture"
                            name="file"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :on-success="SuccessImg"
                            :on-error="ErrorImg"
                            :before-upload="beforeUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="发布人" prop="releaseUser" style="width:80%">
                    <el-input v-model="ruleForm.releaseUser"></el-input>
                </el-form-item>
                <el-form-item prop="releaseTime" label="发布时间">
                    <el-date-picker
                            v-model="ruleForm.releaseTimeItem"
                            type="datetime"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            :default-value="new Date()"
                            placeholder="选择日期时间"
                            style="width: 50%;">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="来源" prop="source" style="width:80%">
                    <el-input v-model="ruleForm.source"></el-input>
                </el-form-item>
                <el-form-item label="新闻正文图文信息" prop="content" style="width:95%">
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
                    <quill-editor v-model="ruleForm.content"
                                  ref="contentInfo"
                                  :options="editorOption"
                                  @blur="handleEditorBlur($event)"
                                  @focus="handleEditorFocus($event)"
                                  @change="handleEditorChange($event)">
                    </quill-editor>
                </el-form-item>
                <el-button style="margin-left: 10%" @click="updateArticle()">更新</el-button>
            </el-form>
        </el-drawer>
        </div>
    </div>
</template>

<script>

    //富文本编辑器工具栏
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

    export default {
        name: "ArticleList",
        data() {
            return{
                articleList:null,
                page:0,
                size:15,
                countTotal:0,
                totalPage:0,
                drawer:false,
                ruleForm:{

                },
                imageFileList:[{
                    name:'',
                    url:'',
                }],
                fileUpload:{   //富文本附件上传
                    file:null
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
                rules: {
                    articleTitle: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                        { min: 1,  message: '文章标题不为空', trigger: 'blur' }
                    ],
                    summary: [
                        { required: true, message: '请输入/摘要', trigger: 'blur' },
                        { min: 1,  message: '摘要不为空', trigger: 'blur' }
                    ],
                    imageUuid: [
                        { required: true, type: 'string' , message: '请输入图片标识(必须是字母)', trigger: 'blur' },
                        { min: 1,  message: '图片标识不为空', trigger: 'blur' }
                    ],
                    releaseUser: [
                        {required: true, message: '请输入发布人', trigger: 'blur' },
                        { min: 1,  message: '发布人不为空', trigger: 'blur' }
                    ],
                    releaseTime: [
                        {required: true, message: '请选择发布时间', trigger: 'blur' },
                        { min: 1,  message: '发布时间不为空', trigger: 'blur' }
                    ],
                    source: [
                        { required: true, message: '请输入来源', trigger: 'blur' },
                        { min: 1,  message: '来源不为空', trigger: 'blur' }
                    ],
                    content:[
                        {required:true,message:'请输入新闻正文信息',trigger:'blur'},
                    ],

                },
            }
        },
        methods:{
            //获取新闻列表
            getArticleList(page,size){
                this.$http.get('/articleapi/pageList?page='+page+"&size="+size).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.articleList = res.data.data.content;
                        this.totalPage = res.data.data.totalPages;
                        this.countTotal = res.data.data.totalElements;
                    }
                });
            },
            //分页
            currentChangeHandle(val){
                this.page = val - 1;
                this.getArticleList(this.page,this.size);
            },
            //删除单个新闻资讯
            deleteArticle(row) {
                this.$confirm('是否删除此新闻资讯','删除信息',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:"warning"
                }).then(re=>{
                    this.$http.delete('/articleapi/deleteArticle/'+row.uuid).then(res=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.$message.success("删除成功");
                            this.getArticleList(this.page, this.size);
                        }else{
                            this.$message.error("删除失败");
                        }
                    })
                }).catch(err=>{
                    // this.$message.i("删除失败");
                });

            },
            //打开新闻资讯详情页
            handleClick(row){
                this.$http.get('/articleapi/articleItem/'+row.uuid).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        var a = res.data.data;
                        this.ruleForm = a;
                        this.drawer = true;
                        this.imageFileList[0].name = '新闻封面';
                        this.imageFileList[0].url = a.imgUrl;
                    }
                });
            },
            uploadError() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            uploadSuccess(res){
                // 首先获取富文本编辑器的实例
                let quill = this.$refs.contentInfo.quill
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
                this.ruleForm.imageUuid = null;
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
            SuccessImg(res){
                // 上传成功所执行
                if (res.returnCode == true && res.returnMsg == "OK") {
                    // eslint-disable-next-line no-console
                    console.log(res.data)
                    this.imageUuid = res.data
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            //更新新闻信息
            updateArticle(){
                if(!this.ruleForm.title){
                    this.$message({
                        message: '请输入新闻或文章标题',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.summaryItem){
                    this.$message({
                        message: '请输入新闻摘要',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.imageUuid){
                    this.$message({
                        message: '请上传新闻封面',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.releaseUser){
                    this.$message({
                        message: '请输入发布人',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.releaseTime){
                    this.$message({
                        message: '请选择发布时间',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.source){
                    this.$message({
                        message: '请输入新闻或文章来源',
                        type: 'error'
                    });
                    return;
                }
                if(!this.ruleForm.content){
                    this.$message({
                        message: '请输入新闻正文内容',
                        type: 'error'
                    });
                    return;
                }
                var dto = {
                    articleTitle:this.ruleForm.title,
                    releaseTime:this.ruleForm.releaseTimeItem,
                    releaseUser:this.ruleForm.releaseUser,
                    summary:this.ruleForm.summaryItem,
                    source:this.ruleForm.source,
                    imageUuid:this.ruleForm.imageUuid,
                    content:this.ruleForm.content,
                };
                this.$http.put('/articleapi/updateArticleItem/'+this.ruleForm.uuid, dto).then(res => {
                    debugger
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.$message.success("更新成功");
                        this.drawer = false;
                        this.getArticleList(this.page, this.size);
                    }else{
                        this.$message.error("更新失败");
                    }
                });
            },
        },
        mounted() {
            this.getArticleList(this.page,this.size);
        }
    }
</script>

<style>
    .el-drawer__body {
        overflow: auto;
    }
</style>
