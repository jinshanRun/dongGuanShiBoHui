<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-table :data="guestList">
            <el-table-column fixed prop="name" label="嘉宾姓名" width="200" />
            <el-table-column prop="position" label="嘉宾职位" width="280" />
            <el-table-column prop="introduce" label="嘉宾介绍" width="500" />
            <el-table-column prop="sorted" label="嘉宾排序" width="100" />
            <el-table-column prop="createTime" label="添加时间" width="200" />
            <el-table-column
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button slot="reference" type="text" size="small" @click="deleteGuest(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.countTotal" />
        <div>
            <el-drawer title="嘉宾信息修改"
                       :size="'60%'"
                       :visible.sync="drawer"
                       direction="rtl"
                       :destroy-on-close="true"
                       @close="getGuestList(page,size)">
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
                                :file-list="imageFileList"
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
                <el-button style="margin-left: 10%" @click="updateGuest()">更新</el-button>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "GuestInfoManager",
        data(){
            return{
                guestList:null,
                page:0,
                size:10,
                countTotal:0,
                totalPage:0,
                drawer:false,
                imageFileList:[{
                    name:'',
                    url:'',
                }],
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
            updateGuest(){
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
                var dto = {
                    name:this.ruleForm.name,
                    imageUuid:this.ruleForm.imageUuid,
                    position:this.ruleForm.position,
                    introduce:this.ruleForm.introduce,
                    sorted:this.ruleForm.sorted,
                };
                this.$http.put("/guestinfoapi/updateGuest/"+this.ruleForm.uuid, dto)
                    .then(response => {
                        if(response.data.returnCode == true && response.data.returnMsg =="OK") {
                            this.loading = false;
                            this.$message({
                                message: "提交成功",
                                type: "success"
                            });
                            this.drawer = false;
                            this.getGuestList(this.page, this.size);
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
            //获取嘉宾列表
            getGuestList(page,size){
                this.loading = false;
                this.$http.get('/guestinfoapi/guestPageList?page='+page+"&size="+size).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.guestList = res.data.data.content;
                        this.totalPage = res.data.data.totalPages;
                        this.countTotal = res.data.data.totalElements;
                    }
                }).catch(err=>{
                    this.$message.info("接口请求错误");
                }).finally(e=>{

                });
            },
            //分页
            currentChangeHandle(val){
                this.page = val - 1;
                this.getGuestList(this.page,this.size);
            },
            //删除单个嘉宾信息
            deleteGuest(row) {
                this.$confirm('是否删除此嘉宾信息','删除信息',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:"warning"
                }).then(re=>{
                    this.$http.delete('/guestinfoapi/deleteGuest/'+row.uuid).then(res=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.$message.success("删除成功");
                            this.getGuestList(this.page, this.size);
                        }else{
                            this.$message.error("删除失败");
                        }
                    })
                }).catch(err=>{

                });
            },
            //打开嘉宾详情页
            handleClick(row){
                this.$http.get('/guestinfoapi/guestItemByUuid/'+row.uuid).then(res => {
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        var a = res.data.data;
                        this.ruleForm = a;
                        this.drawer = true;
                        this.imageFileList[0].name = '嘉宾照片';
                        this.imageFileList[0].url = a.imageUrl;
                    }
                });
            },
        },
        mounted() {
            this.getGuestList(this.page,this.size);
        }
    }
</script>

<style>
    /*中间部分可以上下滑动*/
    .el-drawer__body {
        overflow: auto;
    }
</style>
