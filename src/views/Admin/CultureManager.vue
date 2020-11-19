<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        食文化类型
        <el-select v-model="query.cultureInfoType">
            <el-option label = "食文化" value="食文化">食文化</el-option>
            <el-option label = "茶文化" value="茶文化">茶文化</el-option>
            <el-option label = "酒文化" value="酒文化">酒文化</el-option>
            <el-option label = "云南特产" value="云南特产">云南特产</el-option>
        </el-select>
        <el-button style="margin-left: 12%" @click="queryCulture()">搜索</el-button>
        <el-button style="margin-left: 10%" @click="clearQuery()">清空</el-button>
        <el-table :data="cultureList">
            <el-table-column fixed prop="cultureType" label="食文化类型" width="100" />
            <el-table-column fixed prop="cultureTitle" label="食文化标题" width="600" />
            <el-table-column fixed prop="releaseTimeItem" label="发布时间" width="180" />
            <el-table-column fixed prop="source" label="来源" width="150" />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button slot="reference" type="text" size="small" @click="deleteCulture(scope.row)" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.countTotal" />
        <div>
            <el-drawer title="食文化信息修改"
                       :size="'60%'"
                       :visible.sync="drawer"
                       direction="rtl"
                       :destroy-on-close="true"
                       @close="getCultureList(page,size,query.cultureInfoType)">
                <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
                    <el-form-item label="食文化分类" prop="cultureType">
                        <!-- <el-input v-model="ruleForm.areaUuid"></el-input> -->
                        <el-select v-model="ruleForm.cultureType">
                            <el-option label = "食文化" value="食文化">食文化</el-option>
                            <el-option label = "茶文化" value="茶文化">茶文化</el-option>
                            <el-option label = "酒文化" value="酒文化">酒文化</el-option>
                            <el-option label = "云南特产" value="云南特产">云南特产</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="食文化标题" prop="cultureTitle" style="width:80%">
                        <el-input v-model="ruleForm.cultureTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="食文化摘要" prop="summary" style="width:80%">
                        <el-input type="textarea" autosize v-model="ruleForm.summaryItem"></el-input>
                    </el-form-item>
                    <el-form-item label="食文化图片" prop="imageUuid" style="width:80%">
                        <el-upload
                                v-model="ruleForm.imageUuid"
                                class="upload-demo"
                                :action="uploadImageUrl"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                name="file"
                                :limit="1"
                                :file-list="imageFileList"
                                list-type="picture"
                                :on-exceed="handleExceed"
                                :on-success="SuccessImg"
                                :on-error="ErrorImg"
                                :before-upload="beforeUpload">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传大小不超过30M的图片</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="发布时间" prop="releaseTime">
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
                    <el-form-item label="食文化正文" prop="content" style="width:90%">
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
                                           ref="contenta"
                                           :options="editorOption"
                                           @blur="handleEditorBlur($event)"
                                           @focus="handleEditorFocus($event)"
                                           @change="handleEditorChange($event)">
                        </quill-editor>
                    </el-form-item>
                    <el-button style="margin-left: 10%" @click="updateCulture()">更新</el-button>
                </el-form>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    //富文本编辑器工具栏
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
    ];

    export default {
        name: "CultureManager",
        data(){
            return{
                query:{
                    cultureInfoType:'',
                },
                cultureList:null,
                page:0,
                size:10,
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
            }
        },
        methods:{
            //清空搜索条件
            clearQuery(){
                this.query.cultureInfoType = '';
                this.page = 0;
                this.size = 10;
                this.getCultureList(this.page,this.size,this.query.cultureInfoType);
            },
            //条件搜索
            queryCulture(){
                this.getCultureList(0,10,this.query.cultureInfoType);
            },
            //获取食文化列表
            getCultureList(page,size,cultureType){
                this.$http.get('/cultureapi/pageListAll?page='+page+"&size="+size+"&cultureInfoType="+cultureType).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.cultureList = res.data.data.content;
                        this.totalPage = res.data.data.totalPages;
                        this.countTotal = res.data.data.totalElements;
                    }
                });
            },
            //分页
            currentChangeHandle(val){
                this.page = val - 1;
                this.getCultureList(this.page,this.size,this.query.cultureInfoType);
            },
            //删除单个食文化信息
            deleteCulture(row) {
                this.$confirm('是否删除此信息','删除信息',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:"warning"
                }).then(re=>{
                    this.$http.delete('/cultureapi/deleteCulture/'+row.cultureInfoUuid).then(res=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.$message.success("删除成功");
                            this.getCultureList(this.page, this.size,this.query.cultureInfoType);
                        }else{
                            this.$message.error("删除失败");
                        }
                    })
                }).catch(error=>{
                });
            },
            //打开食文化详情页
            handleClick(row){
                this.$http.get('/cultureapi/cultureItem/'+row.cultureInfoUuid).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        var a = res.data.data;
                        this.ruleForm = a;
                        this.drawer = true;
                        this.imageFileList[0].name = '食文化封面';
                        this.imageFileList[0].url = a.imageUrl;
                    }
                });
            },
            //更新单条食文化信息
            updateCulture(){
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
                var dto = {
                    cultureType: this.ruleForm.cultureType,
                    cultureTitle:this.ruleForm.cultureTitle,
                    imageUuid: this.ruleForm.imageUuid,
                    releaseTime: this.ruleForm.releaseTimeItem,
                    source: this.ruleForm.source,
                    summary: this.ruleForm.summaryItem,
                    content:this.ruleForm.content,
                };
                this.$http.put('/cultureapi/updateCulture/'+this.ruleForm.cultureInfoUuid, dto).then(res => {
                    debugger
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.$message.success("更新成功");
                        this.drawer = false;
                        this.getCultureList(this.page, this.size,this.query.cultureInfoType);
                    }else{
                        this.$message.error("更新失败");
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
        },
        mounted() {
            this.getCultureList(this.page,this.size,this.query.cultureInfoType);
        }
    }
</script>

<style>
    .el-drawer__body {
        overflow: auto;
    }
</style>
