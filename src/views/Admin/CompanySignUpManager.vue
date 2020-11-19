<template>
    <div>
        <!-- 参展商报名相关信息 -->
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
        <el-table :data="companySignUpList">
            <el-table-column fixed prop="companyName" label="公司名称" width="350" />
            <el-table-column prop="companyAddress" label="公司所在地" width="200" />
            <el-table-column prop="contactName" label="联系人" width="200" />
            <el-table-column prop="phone" label="手机号" width="200" />
            <el-table-column prop="goodsName" label="展品名称" width="200" />
            <el-table-column prop="exhibitionType" label="展品类别" width="200" />
            <el-table-column prop="placeType" label="展示位置" width="200" />
            <el-table-column prop="companyCountry" label="公司所属国家" width="150" />
            <el-table-column prop="companyCity" label="公司所属城市" width="150" />
            <el-table-column prop="postCode" label="所在地邮编" width="100" />
            <el-table-column prop="email" label="电子邮箱" width="200" />
            <el-table-column prop="fax" label="传真" width="200" />
            <el-table-column prop="telPhone" label="电话" width="200" />
            <el-table-column prop="job" label="职务" width="200" />
            <el-table-column prop="webSite" label="网址" width="290" />
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
        name: "CompanySignUpManager",
        data(){
            return{
                queryInfo:"99",
                page:0,
                size:10,
                totalCount:0,
                totalPage:0,
                companySignUpList:[{
                    companyName:null,
                    companyAddress:null,
                    companyCountry:null,
                    postCode:null,
                    email:null,
                    fax:null,
                    telPhone:null,
                    contactName:null,
                    phone:null,
                    job:null,
                    webSite:null,
                    goodsName:null,
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
                this.$http.get('/companysignupapi/companySignUpPageList?page=' +page + "&size="+size).then(res=>{
                    if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                        this.companySignUpList = res.data.data.content;
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
                this.$confirm('是否导出数据？','提示',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(res=>{
                    this.$message.info("正在导出中。。。。。。。");
                    new Promise((resolve,reject) => {
                        this.$http.get('/companysignupapi/exportExcel?page=0&size='+this.queryInfo).then(res=>{
                            resolve(res);
                        }).catch(error=>{
                            reject(error);
                        });
                    }).then((res,rej) => {
                        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                            window.location.href = res.data.data;
                            this.$message.success("下载成功");
                        }else{
                            this.$message.error("下载失败");
                        }
                    });
                }).catch(err=>{
                    this.$message.warning("取消导出");
                });
            },
        }
    }

</script>

<style scoped>

</style>
