<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-table :data="liveList">
            <el-table-column fixed prop="title" label="直播标题" width="300" />
            <el-table-column prop="showTimeItem" label="直播时间" width="180" />
            <el-table-column prop="endshowTime" label="直播结束时间" width="180" />
            <el-table-column prop="url" label="直播链接" width="700" />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button slot="reference" type="text" size="small" @click="deleteLive(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.countTotal" />
        <div>
            <el-drawer title="直播信息修改"
                       :size="'60%'"
                       :visible.sync="drawer"
                       direction="rtl"
                       :destroy-on-close="true"
                       @close="getLiveList(page,size)">
                <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
                    <el-form-item label="直播标题" prop="title" style="width:60%">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="直播图片" prop="imageUuid" style="width:60%">
                        <el-upload
                                v-model="ruleForm.imageUuid"
                                class="upload-demo"
                                :action="uploadImageUrl"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                :file-list="imageFileList"
                                list-type="picture"
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
                    <el-form-item label="直播时间" prop="showTime" >
                        <el-date-picker
                                v-model="ruleForm.showTimeItem"
                                type="datetime"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                :default-value="new Date()"
                                placeholder="选择日期时间"
                                style="width: 50%;">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="直播观看url链接地址" prop="url" style="width:90%">
                        <el-input type="textarea" autosize v-model="ruleForm.url"></el-input>
                    </el-form-item>
                    <el-form-item label="是否结束直播" prop="endLive">
                      <el-select v-model="ruleForm.endLive" style="width:30%">
                        <el-option label="是" value="true">是</el-option>
                        <el-option label="否" value="false">否</el-option>
                      </el-select>
                    </el-form-item>
                </el-form>
                <el-button style="margin-left: 10%" @click="updateLive()">更新</el-button>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "LiveManager",
        data(){
            return{
                liveList:null,
                page:0,
                size:10,
                countTotal:0,
                totalPage:0,
                drawer:false,
                ruleForm:{
                    title:'',
                    imageUuid:'',
                    showTime:'',
                    url:'',
                    endLive:false,
                },
                imageFileList:[{
                    name:'',
                    url:'',
                }],
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
            updateLive(){
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
                var dto = {
                    title:this.ruleForm.title,
                    imageUuid:this.ruleForm.imageUuid,
                    showTime:this.ruleForm.showTimeItem,
                    url:this.ruleForm.url,
                    endLive:this.ruleForm.endLive,
                };
                this.$http.put("/liveapi/updateLive/"+this.ruleForm.uuid, dto)
                    .then(response => {
                        if(response.data.returnCode == true && response.data.returnMsg =="OK") {
                            this.loading = false;
                            this.$message({
                                message: "提交成功",
                                type: "success"
                            });
                            this.drawer = false;
                            this.getLiveList(this.page, this.size);
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
            //获取直播列表
            getLiveList(page,size){
                this.$http.get('/liveapi/pageList?page='+page+"&size="+size).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.liveList = res.data.data.content;
                        this.totalPage = res.data.data.totalPages;
                        this.countTotal = res.data.data.totalElements;
                    }
                });
            },
            //分页
            currentChangeHandle(val){
                this.page = val - 1;
                this.getLiveList(this.page,this.size);
            },
            //删除单个直播信息
            deleteLive(row) {
                this.$confirm('是否删除此直播信息','删除信息',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:"warning"
                }).then(re=>{
                    this.$http.delete('/liveapi/deleteLive/'+row.uuid).then(res=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.$message.success("删除成功");
                            this.getLiveList(this.page, this.size);
                        }else{
                            this.$message.error("删除失败");
                        }
                    })
                }).catch(err=>{

                });
            },
            //打开直播详情页
            handleClick(row){
                this.$http.get('/liveapi/liveItem/'+row.uuid).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        var a = res.data.data;
                        this.ruleForm = a;
                        this.drawer = true;
                        this.imageFileList[0].name = '直播图片';
                        this.imageFileList[0].url = a.imageUrl;
                    }
                });
            },
        },
        mounted() {
            this.getLiveList(this.page,this.size);
        }
    }
</script>

<style scoped>

</style>
