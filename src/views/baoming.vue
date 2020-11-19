<template>
    <div class="baoming">
      <div class="baoming-banner"><img src="../assets/img/baomingbanner.png" alt=""></div>
      <div class="baoming-content">
          <div class="baoming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>展商报名</p>
              <ul class="baoming-content-list">
                  <li>展商报名</li>
                  <li><router-link :to="{name:'register'}">媒体注册</router-link></li>
                  <li><router-link :to="{name:'userApply'}">用户报名</router-link></li>
                  <li><router-link :to="{name:'coopApply'}">合作商报名</router-link></li>
              </ul>
          </div>
          <div class="baoming-content-right">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="参展机构公司全称" prop="companyName">
                <el-input v-model="ruleForm.companyName" placeholder="北京高斯智慧科技有限公司"></el-input>
              </el-form-item>
              <el-form-item label="公司/机构所在地址"  prop="companyAddress">
                <el-input v-model="ruleForm.companyAddress" placeholder="公司/机构所在地址"></el-input>
              </el-form-item>
              <el-form-item label="联系人" prop="contactName">
                  <el-input v-model="ruleForm.contactName" placeholder="联系人"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                  <el-input type="number" v-model="ruleForm.phone" placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item label="公司/机构所属国家" prop="companyCountry">
                <el-input v-model="ruleForm.companyCountry" placeholder="请输入活动区域">
                </el-input>
              </el-form-item>
               <el-form-item label="城市"  prop="companyCity">
                <el-input v-model="ruleForm.companyCity" placeholder="参展机构公司所在城市"></el-input>
              </el-form-item>
              <el-form-item label="所在地邮编" prop="postCode">
                <el-input v-model="ruleForm.postCode" placeholder="所在地邮编"></el-input>
              </el-form-item>
               <el-form-item label="注册电子邮件" prop="email">
                <el-input v-model="ruleForm.email" placeholder="例如:gaosizhihui@126.com"></el-input>
              </el-form-item>
              <el-form-item label="电话" prop="telPhone">
                <el-input v-model="ruleForm.telPhone" placeholder="电话"></el-input>
              </el-form-item>
              <el-form-item label="网址" prop="webSite">
                <el-input v-model="ruleForm.webSite" placeholder="网址"></el-input>
              </el-form-item>
              <el-form-item label="职务" prop="job">
                <el-input v-model="ruleForm.job" placeholder="职务"></el-input>
              </el-form-item>
              <el-form-item label="展品名称" prop="goodsName">
                <el-input v-model="ruleForm.goodsName" placeholder="例如:食品"></el-input>
              </el-form-item>
               <!-- <el-form-item label="产品类型" prop="exhibitionType">
                <el-input v-model="ruleForm.exhibitionType" placeholder="请选择产品类型">
                </el-input>
              </el-form-item> -->
              <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              </el-form-item>
        </el-form>
          </div>
      </div>
         <div class="h40"></div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      loading: true,
      newsList: [],
      newstype: 1,
      ruleForm: {
          companyName: '',
          companyAddress: '',
          companyCountry: '',
          companyCity: '',
          postCode: '',
          email: '',
          contactName: '',
          phone: '',
          telPhone: '',
          webSite: '',
          job: '',
          goodsName: '',
          exhibitionType: ''
        },
          rules: {
          companyName: [
            { required: true, message: '请输入参展机构公司全称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          companyAddress: [
            { required: true, message: '请输入公司/机构所在地址', trigger: 'blur' }
          ],
          companyCountry: [
            { required: false, message: '请输入公司/机构所属国家', trigger: 'blur' }
          ],
          companyCity: [
            { required: false, message: '请输入所在城市', trigger: 'blur' }
          ],
          postCode: [
            { required: false, message: '请输入所在地邮编', trigger: 'blur' }
          ],
          email: [
            { required: false, message: '请输入邮箱', trigger: 'blur' }
          ],
          contactName: [
            { required: true, message: '请输入联系人', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {min:11,max:11,message:'请输入正确格式的11位手机号',trigger: 'blur'}
          ],
          telPhone: [
            { required: false, message: '请输入电话', trigger: 'blur' }
          ],
          webSite: [
            { message: '请输入地址', trigger: 'blur' }
          ],
          job: [
            { message: '请输入职务', trigger: 'blur' }
          ],
          goodsName: [
            { message: '请输入展品名称', trigger: 'blur' }
          ],
          exhibitionType: [
            { message: '请选择产品类型', trigger: 'blur' }
          ],
        }

    };
  },
  methods: {
     submitForm() {
         if (!this.ruleForm.companyName) {
             this.$message.error("请输入参展机构公司全称");
             return;
         }
         if(!this.ruleForm.companyAddress){
             this.$message.error("请输入公司/机构所在地址");
             return;
         }
         if (!this.ruleForm.contactName) {
             this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm.phone){
             this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm.phone.length != 11) {
             this.$message.error("请输入11位正确格式的手机号");
             return;
         }
       var CompanySignUpDTO =
          {
            "email": this.ruleForm.email,
            "companyName": this.ruleForm.companyName,
            "companyAddress": this.ruleForm.companyAddress,
            "companyCountry": this.ruleForm.companyCountry,
            "companyCity": this.ruleForm.companyCity,
            "postCode": this.ruleForm.postCode,
            "contactName": this.ruleForm.contactName,
            "phone": this.ruleForm.phone,
            "telPhone": this.ruleForm.telPhone,
            "webSite": this.ruleForm.webSite,
            "job": this.ruleForm.job,
            "goodsName": this.ruleForm.goodsName,
            "exhibitionType": this.ruleForm.exhibitionType
          };
       this.$http.post("/companysignupapi/saveCompanySignUp",CompanySignUpDTO)
            .then(res => {
              // eslint-disable-next-line no-console
              // console.log(res)
              if(res.data.returnCode === true && res.data.returnMsg === "OK"){
                  this.$alert('您的信息我方已收到，稍后会有工作人员和您联系', '报名成功', {
                      confirmButtonText: '确定',
                      callback: action => {
                          this.$message({
                              type: 'success',
                              message: '报名成功',
                          });
                      }
                  });
                this.$refs.ruleForm.resetFields();
              }else{
                alert("注册失败")
              }
            })
            .catch(function(error) {
              window.console.log(error);
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }

  },
  mounted() {
  },
  watch: {
    newstype(type) {
      window.console.log(type);
    }
  }
};
</script>

<style lang="scss" scoped>
*,ul li,a{
    list-style:none;
    text-decoration: none;
}
.baoming {
  width: 100%;
  // height: 100%;
  position: relative;
  overflow: hidden;

  &-banner{
   width: 100%;
   height: 100%;
   img{
     width: 100%;
   }
  }
  &-content{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
      &-left p{
        font-size: 12px;
        color: #b6b6b6;
      }
      &-left p img{
        margin-right: 10px;
        margin-top: 2px;
      }
     &-left p a{
       color: #b6b6b6;
      }
      &-list{
          margin-top: 18px;
          a{
            color: #333333;
          }
      }
      &-list li{
          width: 180px;
          height: 40px;
          line-height: 40px;
          color: #333333;
          font-size: 16px;
          text-align: center;
          background: #f7f7f7;
          margin-bottom: 8px;
      }
      &-list li:first-child{
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          margin-top: 26px;
          float: left;
          width: 900px;
          padding: 40px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
      }
  }
}
// 战略合作伙伴
.zhanhezuo,.hezuo{
  width: 1200px;
  margin: 0 auto;
}
.h40{
  height: 40px;
}
</style>
