<template>
    <div>
        <br>
        <br>
        <br>
        请选择导出的数据范围:
        <el-select v-model="queryInfo" @change="selectOnChange">
            <el-option value="99" label="1-100">1-100</el-option>
            <el-option value="499" label="1-500">1-500</el-option>
            <el-option value="999" label="1-1000">1-1000</el-option>
            <el-option value="1999" label="1-2000">1-2000</el-option>
        </el-select>
        <el-button @click="exportExcel" type="primary">导出信息</el-button>
        <el-table :data="mediaRegisterList">
            <el-table-column fixed prop="mediaOfficeName" label="媒体机构名称" width="500" />
            <el-table-column prop="contactPhone" label="联系电话" width="150" />
            <el-table-column prop="email" label="邮箱" width="200" />
            <el-table-column prop="createTime" label="报名时间" width="200" />
        </el-table>
        <el-pagination @current-change="currentChangeHandle"
                       background
                       layout="prev, pager, next"
                       :page-size="this.size"
                       :total="this.totalCount" />
    </div>
</template>

<script>
    export default {
        name: "MediaRegisterManager",
        data(){
            return{
                queryInfo:"99",
                page:0,
                size:10,
                totalCount:0,
                totalPage:0,
                mediaRegisterList:[{
                    mediaOfficeName:null,
                    contactPhone:null,
                    email:null,
                    createTime:null
                }],
                downloadhttp:null,
            };
        },
        mounted() {
            this.pageList(this.page, this.size);
        },
        methods:{
            pageList(page,size){
                this.$http.get('/mediaregisterapi/mediaRegisterPageList?page=' +page + "&size="+size).then(res=>{
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.mediaRegisterList = res.data.data.content;
                        this.totalCount = res.data.data.totalElements;
                        this.totalPage = res.data.data.totalPages;
                    }
                });
            },
            currentChangeHandle(val){
                this.page = val -1;
                this.pageList(this.page, this.size);
            },
            selectOnChange(val){
                this.queryInfo = val;
            },
            //导出文件
            exportExcel(){
                this.$confirm('是否导出数据', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(res => {
                    this.$message.info("正在导出中,请稍后。。。。。");
                    new Promise(((resolve, reject) => {
                        this.$http.get('/mediaregisterapi/exportExcel?page=0&size='+this.queryInfo).then(res=>{
                            resolve(res);
                        }).catch(error=>{
                            reject(error);
                        });
                    })).then((res,rej)=>{
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            this.downloadhttp = res.data.data;
                            this.$message.success("下载成功");
                        }else{
                            this.$message.error("下载失败");
                        }
                    });
                }).catch(err => {
                    this.$message.warning('取消导出');
                });
            }
        }
    }
</script>

<style scoped>

</style>
