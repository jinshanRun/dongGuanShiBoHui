<template>
    <div>
        <br>
        <br>
        <br>
        所属展厅：<el-select v-model="query.areaUuid" style="width:30%">
            <el-option label = "1号馆中华传统好食品馆" value="ff7632e456174ad4b52d6fc76968f35420201023172642">1号馆中华传统好食品馆</el-option>
            <el-option label = "2号馆云南特色馆" value="5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717">2号馆云南特色馆</el-option>
            <el-option label = "3号馆食品科技创新成果馆" value="d51083c57a99405fa3e7a5066a556f9720201023172826">3号馆食品科技创新成果馆</el-option>
            <el-option label = "4号馆综合馆" value="ee51986b1c97468eb20f28a1fc17826f20201023172841">4号馆综合馆</el-option>
            <el-option label = "5号馆中国美食文化馆" value="2b944fcfa09e42d588dcb6b5ace83ea420201023172900">5号馆中国美食文化馆</el-option>
            <el-option label = "6号馆消费扶贫特色农副产品馆" value="324e4b21bb1b4647bc0a7d1a1ad6655820201023172934">6号馆消费扶贫特色农副产品馆</el-option>
            <el-option label = "7号馆精品馆" value="35c6a237bfde4a4181beb441bf169de520201023172953">7号馆精品馆</el-option>
            <el-option label = "云上展厅深加工食品类" value="d6ccd8b213b2419fbd53fe4e5070ea4420201023173027">云上展厅深加工食品类</el-option>
            <el-option label = "云上展厅农副产品类" value="f1327fceaa2440f796570fb48856407220201023173039">云上展厅农副产品类</el-option>
            <el-option label = "云上展厅食品科技类" value="218d0ba591b14f3daa39fcb9e0f4055b20201023173050">云上展厅食品科技类</el-option>
            <el-option label = "云上展厅食品文化类" value="c8610a0908b04ea0858f5ec22e9a4ed720201023173102">云上展厅食品文化类</el-option>
        </el-select>
        展商位置：<el-select v-model="query.place" style="width:10%">
            <el-option label="全部" value="">全部</el-option>
            <el-option label="热门" value="HOT">热门</el-option>
            <el-option label="前五" value="TOP5">前五</el-option>
            <el-option label="普通" value="NORMAL">普通</el-option>
        </el-select>
        <el-button style="margin-left: 12%" @click="queryCompany()">搜索</el-button>
        <el-button style="margin-left: 10%" @click="clearQuery()">清空</el-button>
        <el-table :data="companyList">
            <el-table-column fixed prop="areaName" label="所属展厅" width="260" />
            <el-table-column prop="companyName" label="展商名称" width="400" />
            <el-table-column prop="placeEnum" label="展商位置" width="100" />
            <el-table-column prop="shelfState" label="上架状态" width="100" />
            <el-table-column prop="showCreateTime" label="展示开始时间" width="170" />
            <el-table-column prop="showEndTime" label="展示结束时间" width="170" />
            <el-table-column prop="lookCount" label="查看次数" width="100" />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button slot="reference" type="text" size="small" @click="deleteCompany(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.countTotal" />
        <!-- 编辑 -->
        <div>
            <el-drawer
                title="展商信息修改"
                :size="'50%'"
                :visible.sync="drawer"
                direction="rtl"
                :destroy-on-close="true"
                @close="getList(page,size,query.place,query.areaUuid)"
            >
<!--                <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto">-->
                <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
                    <el-form-item label="所属展厅" prop="areaUuid">
                        <!-- <el-input v-model="ruleForm.areaUuid"></el-input> -->
                        <el-select v-model="ruleForm.areaUuid" style="width:30%">
                            <el-option label = "1号馆中华传统好食品馆" value="ff7632e456174ad4b52d6fc76968f35420201023172642">1号馆中华传统好食品馆</el-option>
                            <el-option label = "2号馆云南特色馆" value="5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717">2号馆云南特色馆</el-option>
                            <el-option label = "3号馆食品科技创新成果馆" value="d51083c57a99405fa3e7a5066a556f9720201023172826">3号馆食品科技创新成果馆</el-option>
                            <el-option label = "4号馆综合馆" value="ee51986b1c97468eb20f28a1fc17826f20201023172841">4号馆综合馆</el-option>
                            <el-option label = "5号馆中国美食文化馆" value="2b944fcfa09e42d588dcb6b5ace83ea420201023172900">5号馆中国美食文化馆</el-option>
                            <el-option label = "6号馆消费扶贫特色农副产品馆" value="324e4b21bb1b4647bc0a7d1a1ad6655820201023172934">6号馆消费扶贫特色农副产品馆</el-option>
                            <el-option label = "7号馆精品馆" value="35c6a237bfde4a4181beb441bf169de520201023172953">7号馆精品馆</el-option>
                            <el-option label = "云上展厅深加工食品类" value="d6ccd8b213b2419fbd53fe4e5070ea4420201023173027">云上展厅深加工食品类</el-option>
                            <el-option label = "云上展厅农副产品类" value="f1327fceaa2440f796570fb48856407220201023173039">云上展厅农副产品类</el-option>
                            <el-option label = "云上展厅食品科技类" value="218d0ba591b14f3daa39fcb9e0f4055b20201023173050">云上展厅食品科技类</el-option>
                            <el-option label = "云上展厅食品文化类" value="c8610a0908b04ea0858f5ec22e9a4ed720201023173102">云上展厅食品文化类</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="展商（公司）名称" prop="companyName">
                        <el-input v-model="ruleForm.companyName" style="width:50%"></el-input>
                    </el-form-item>
                    <el-form-item label="展商logo图片" prop="logoUuid">
                        <el-upload style="width:50%"
                                v-model="ruleForm.logoUuid"
                                class="upload-demo"
                                :action="uploadImageUrl"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                name="file"
                                list-type="picture"
                                :file-list="logoFileList"
                                :limit="1"
                                :on-exceed="handleExceed"
                                :on-success="SuccessImg"
                                :on-error="ErrorImg"
                                :before-upload="beforeUpload">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip" style="color:red">只能上传大小不超过30M的图片,建议上传一定规则大小的图片</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="展商宣传图" prop="propagandaUuid">
                        <el-upload style="width:50%"
                                v-model="ruleForm.propagandaUuid"
                                class="upload-demo"
                                :action="uploadImageUrl"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
                                name="file"
                                :limit="1"
                                list-type="picture"
                                :file-list="proFileList"
                                :on-exceed="handleExceed"
                                :on-success="SuccessPro"
                                :on-error="ErrorImg"
                                :before-upload="beforeUpload">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip" style="color:red">只能上传大小不超过30M的图片,建议上传一定规则大小的图片</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="宣传视频" prop="videoUuid">
                        <!-- <el-input v-model="ruleForm.videoUuid"></el-input> -->
                        <el-upload style="width:50%"
                                v-model="ruleForm.videoUuid"
                                class="upload-demo"
                                :action="uploadImageUrl"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                :file-list="videoFileList"
                                name="file"
                                list-type="text"
                                accept=".mp4,.avi,.rmvb,.mov,.FLV,.3GP"
                                :limit="1"
                                :on-exceed="handleExceed"
                                :on-success="SuccessVideo"
                                :on-error="ErrorImg"
                                :before-upload="beforeUpload">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传大小不超过500M的视频</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="企业介绍" prop="companyIntroduce" style="width:90%" >
                        <el-input type="textarea" v-model="ruleForm.introduceItem" autosize />
                    </el-form-item>
                    <el-form-item label="展商位置" prop="placeEnum">
                        <el-select v-model="ruleForm.place" ref="place">
                            <el-option label="热门" value="HOT">热门</el-option>
                            <el-option label="前五" value="TOP5">前五</el-option>
                            <el-option label="普通" value="NORMAL">普通</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="展示开始时间" prop="showCreateTime">
                        <el-date-picker
                                v-model="ruleForm.showCreateTime"
                                type="datetime"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                :default-value="ruleForm.showCreateTime"
                                placeholder="选择日期时间"
                                style="width: 50%;">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="展示结束时间" prop="showEndTime">
                        <el-date-picker
                                v-model="ruleForm.showEndTime"
                                type="datetime"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                :default-value="new Date()"
                                placeholder="选择日期时间"
                                style="width: 50%;">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="上架状态" prop="shelfState">
                        <el-select v-model="ruleForm.shelf">
                            <el-option value="ON" label="已上架">已上架</el-option>
                            <el-option value="NOT" label="未上架" >未上架</el-option>
                            <el-option value="OFF" label="已下架" >已下架</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动标题" prop="activityTitle" style="width:70%">
                        <el-input v-model="ruleForm.activityTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="活动简介" prop="activityIntroduce" style="width:90%">
                        <el-input type="textarea" v-model="ruleForm.activityIntroduce" autosize></el-input>
                    </el-form-item>
<!--                    <el-form-item>-->
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
                         <el-form-item label="展商图文信息" prop="content" style="width:90%">
                            <quill-editor v-model="ruleForm.content"
                                               ref="contentInfo"
                                               :options="editorOption"
                                               @blur="handleEditorBlur($event)"
                                               @focus="handleEditorFocus($event)"
                                               @change="handleEditorChange($event)">
                            </quill-editor>
                        </el-form-item>
                </el-form>
                <el-button style="margin-left: 10%" @click="editCompany()">修改</el-button>
<!--            </div>-->
        </el-drawer>
        </div>
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
    export default {
        name: "ExhibitionCompanyList",
        data(){
            return{
                query:{
                  place:null,
                  areaUuid:null,
                },
                fileUpload:{   //附件上传
                    file:null
                },
                uploadImageUrl:axios.defaults.baseURL + 'fileapi/uploadFile',//普通文件上传地址
                serverUrl: axios.defaults.baseURL +'fileapi/partUploadFile',//富文本编辑器中上传图片的地址
                page:0,
                size:10,
                companyList:null,
                countTotal:0,
                totalPage:0,
                drawer:false,
                ruleForm:{
                    areaUuid:'',
                    companyName:'',
                },
                logoFileList:[{
                   name:'',
                   url:'',
                }],
                proFileList:[{
                   name:'',
                   url:'',
                }],
                videoFileList:[{
                   name:'',
                   url:'',
                }],
                rules: {
                    areaUuid: [
                        { required: true, message: '请选择展区类型', trigger: 'blur' },
                        { min: 1,  message: '所属展区不能为空', trigger: 'blur' }
                    ],
                    companyName: [
                        { required: true, type: 'string' , message: '请输入展商名称', trigger: 'blur' },
                        { min: 1,  message: '展商/公司名称不能为空', trigger: 'blur' }
                    ],
                    logoUuid: [
                        {required: true, message: '请上传展商logo', trigger: 'blur' },
                        { min: 1,  message: '展商logo不能为空', trigger: 'blur' }
                    ],
                    propagandaUuid: [
                        { required: true, message: '请上传展商宣传图', trigger: 'blur' },
                        { min: 1,  message: '展商宣传图不能为空', trigger: 'blur' }
                    ],
                    videoUuid: [
                        { required: true, message: '请上传展商相关视频', trigger: 'blur' },
                        { min: 1,  message: '展商视频不能为空', trigger: 'blur' }
                    ],
                    companyIntroduce: [
                        { required: true, message: '请输入展商介绍', trigger: 'blur' },
                        { min: 1,  message: '展商介绍不能为空', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请输入展商相关正文信息', trigger: 'blur' },
                        { min: 1,  message: '展商相关正文信息不能为空', trigger: 'blur' }
                    ],
                    placeEnum: [
                        { required: true, message: '请选择展商展示位置', trigger: 'blur' },
                        { min: 1,  message: '展示位置不能为空', trigger: 'blur' }
                    ],
                    showCreateTime: [
                        { required: true, message: '请设置展示开始时间', trigger: 'blur' },
                        { min: 1,  message: '展示开始时间不能为空', trigger: 'blur' }
                    ],
                    showEndTime: [
                        { required: true, message: '请设置展示结束时间', trigger: 'blur' },
                        { min: 1,  message: '展示结束时间不能为空', trigger: 'blur' }
                    ],
                    shelfState: [
                        { required: true, message: '请输入来源', trigger: 'blur' },
                        { min: 1,  message: '来源不为空', trigger: 'blur' }
                    ],
                    // activityTitle: [
                    //   { required: true, message: '请输入/摘要', trigger: 'blur' },
                    //   { min: 1,  message: '摘要不为空', trigger: 'blur' }
                    // ],
                    // activityIntroduce: [
                    //   { required: true, message: '请输入/摘要', trigger: 'blur' },
                    //   { min: 1,  message: '摘要不为空', trigger: 'blur' }
                    // ]
                },
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
            };

        },
        methods:{
            //清空搜索条件
            clearQuery(){
                this.query.place = '';
                this.query.areaUuid = '';
                this.page = 0;
                this.size = 10;
                this.getList(this.page,this.size,this.query.place,this.query.areaUuid);
            },
            //条件搜索
            queryCompany(){
                this.getList(0,10,this.query.place,this.query.areaUuid);
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
            //获取列表
            getList(page,size,place,areaUuid) {
                var httpUrl = '/exhibitioncompanyapi/companyPageListAll?page='+page+"&size="+size;
                if (place !== null) {
                    httpUrl = httpUrl+"&place="+place;
                }
                if (areaUuid != null) {
                    httpUrl = httpUrl + "&areaUuid=" + areaUuid;
                }
                this.$http.get(httpUrl).then(res => {
                // this.$http.get('/exhibitioncompanyapi/companyPageListAll?page='+page+"&size="+size+"&place="+place+"&areaUuid="+areaUuid).then(res => {
                    if(res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.companyList = res.data.data.content;
                        this.countTotal = res.data.data.totalElements;
                        this.totalPage = res.data.data.totalPages;
                    }
                });
            },
            //翻页
            currentChangeHandle(val){
                this.page = val -1;
                this.getList(this.page,this.size,this.query.place,this.query.areaUuid);
            },
            //查看
            handleClick(a){
                //获取展商详情
                this.$http.get('/exhibitioncompanyapi/companyItem/'+a.companyUuid).then(res=>{
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        var row = res.data.data;
                        this.drawer = true;
                        this.ruleForm = row;
                        this.logoFileList[0].name = "logo图片";
                        this.logoFileList[0].url = row.logoUrl;
                        this.proFileList[0].name = "宣传图";
                        this.proFileList[0].url = row.propagandaUrl;
                        this.videoFileList[0].name = "企业视频";
                        this.videoFileList[0].url = row.videoUrl;
                    }
                });

            },
            //logo图片相关
            beforeUpload(file) {
                this.fileUpload.file=file;
                // 显示loading动画
                this.quillUpdateImg = true
            },
            handleRemove() {
            },
            handlePreview(file) {
                //点击时预览时需要下载图片
            },
            handleExceed(files) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length } 个文件`);
            },
            beforeRemove(file) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            ErrorImg() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            },
            // 上传展商logo图片成功
            SuccessImg(res){
                if (res.returnCode == true && res.returnMsg == "OK") {
                    // eslint-disable-next-line no-console
                    console.log("======="+res.data)
                    this.ruleForm.logoUuid = res.data
                } else {
                    this.$message.error('图片插入失败')
                }
                // loading动画消失
                this.quillUpdateImg = false
            },
            //上传展商宣传图片成功
            SuccessPro(res){
                if (res.returnCode === true && res.returnMsg === "OK") {
                    this.ruleForm.propagandaUuid = res.data;
                }else{
                    this.$message.error("图片上传失败");
                }
                this.quillUpdateImg = false;
            },
            //上传展商视频成功
            SuccessVideo(res){
                if (res.returnCode === true && res.returnMsg === "OK") {
                    this.ruleForm.videoUuid = res.data;
                }else{
                    this.$message.error("视频上传失败");
                }
                this.quillUpdateImg = false;
            },
            //富文本编辑器相关方法
            handleEditorBlur () {},
            handleEditorFocus () {},
            //这个是当初做的个文字限制后来没用就注释了
            handleEditorChange () {},
            //修改展商信息提交
            editCompany(){
                if (!this.ruleForm.areaUuid) {
                    this.$message.error("请选择展区信息");
                    return;
                }
                if (!this.ruleForm.companyName) {
                    this.$message.error("请输入展商名称");
                    return;
                }
                if (!this.ruleForm.logoUuid) {
                    this.$message.error("请上传展商logo");
                    return;
                }
                if (!this.ruleForm.propagandaUuid) {
                    this.$message.error("请上传展商宣传图");
                    return;
                }
                if (!this.ruleForm.videoUuid) {
                    this.$message.error("请上传展商相关视频");
                    return;
                }
                if (!this.ruleForm.companyIntroduce) {
                    this.$message.error("请输入展商介绍");
                    return;
                }
                if (!this.ruleForm.placeEnum) {
                    this.$message.error("请选择展商位置");
                    return;
                }
                if (!this.ruleForm.showCreateTime) {
                    this.$message.error("请设置展示开始时间");
                    return;
                }
                if (!this.ruleForm.showEndTime) {
                    this.$message.error("请设置展示结束时间");
                    return;
                }
                if (!this.ruleForm.shelfState) {
                    this.$message.error("请选择上架状态");
                    return;
                }
                var dto = {
                  areaUuid:this.ruleForm.areaUuid,
                  companyName:this.ruleForm.companyName,
                  logoUuid:this.ruleForm.logoUuid,
                  propagandaUuid:this.ruleForm.propagandaUuid,
                  videoUuid:this.ruleForm.videoUuid,
                  companyIntroduce:this.ruleForm.companyIntroduce,
                  placeEnum:this.ruleForm.place,
                  shelfState: this.ruleForm.shelf,
                  showCreateTime: this.ruleForm.showCreateTime,
                  showEndTime: this.ruleForm.showEndTime,
                  activityTitle: this.ruleForm.activityTitle,
                  activityIntroduce: this.ruleForm.activityIntroduce,
                  content:this.ruleForm.content
                };
                this.$http.put("/exhibitioncompanyapi/updateCompany/"+this.ruleForm.companyUuid, dto)
                    .then(response => {
                        this.loading = false;
                        this.$message({
                            message: "提交成功",
                            type: "success"
                        });
                        this.drawer = false;
                    })
                    .catch(e => {
                        this.$message({
                            message: "提交失败！" + e,
                            type: "error"
                        });
                    });
            },
            //删除单个展商
            deleteCompany(row){
                this.$confirm('是否删除展商','删除展商',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(re=>{
                    this.$http.delete('/exhibitioncompanyapi/deleteCompany/'+row.companyUuid).then(res=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.$message.success("删除成功");
                            this.getList(this.page, this.size,this.query.place,this.query.areaUuid);
                        }
                    });
                }).catch(err=>{
                });
            },
        },
        mounted() {
            this.getList(this.page, this.size,null,null);
        }
    }
</script>

<style>
    /*中间部分可以上下滑动*/
    .el-drawer__body {
        overflow: auto;
    }
    /*!*2.隐藏滚动条，太丑了*!*/
    /*.el-drawer__container ::-webkit-scrollbar{*/
    /*    display: none;*/
    /*}*/
</style>
