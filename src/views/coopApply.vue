<template>
    <div class="kunming">
      <div class="kunming-banner"><img src="../assets/img/baomingbanner.png" alt=""></div>
      <div class="kunming-content">
          <div class="kunming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>合作商报名</p>
              <ul class="kunming-content-list">
                  <li><router-link :to="{name:'baoming'}">展商报名</router-link></li>
                  <li><router-link :to="{name:'register'}">媒体注册</router-link></li>
                  <li><router-link :to="{name:'userApply'}">用户报名</router-link></li>
                  <li>合作商报名</li>
              </ul>
          </div>
          <div class="kunming-content-right">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">

               <el-form-item label="合作机构公司全称" prop="partnerName">
                <el-input v-model="ruleForm.partnerName" placeholder="北京高斯智慧科技有限公司"></el-input>
              </el-form-item>
              <el-form-item label="公司/机构所在地址"  prop="address">
                <el-input v-model="ruleForm.address" placeholder="请输入公司/机构所在地址"></el-input>
              </el-form-item>
              <el-form-item label="联系人"  prop="contactName">
                  <el-input v-model="ruleForm.contactName" placeholder="请输入联系人"></el-input>
              </el-form-item>
              <el-form-item label="手机号"  prop="phone">
                  <el-input type="number" v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="公司机构所在国家"  prop="country">
                <el-input v-model="ruleForm.country" placeholder="请输入公司机构所在国家"></el-input>
              </el-form-item>
               <el-form-item label="城市"  prop="city">
                <el-input v-model="ruleForm.city" placeholder="请输入城市"></el-input>
              </el-form-item>
               <el-form-item label="所在地邮编"  prop="postCode">
                <el-input v-model="ruleForm.postCode" placeholder="请输入所在地邮编"></el-input>
              </el-form-item>
               <el-form-item label="注册电子邮件"  prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入注册电子邮件"></el-input>
              </el-form-item>
               <el-form-item label="电话"  prop="tel">
                <el-input v-model="ruleForm.tel" placeholder="请输入电话"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="registerForm('ruleForm')">确认报名</el-button>
              </el-form-item>
        </el-form>
          </div>
      </div>
         <div class="h40"></div>
    </div>
</template>
<script>
export default {
  name: "news",
  components: {
  },
  data() {
    return {
      loading: true,
      newsList: [],
      newstype: 1,
      ruleForm: {
          partnerName: '',
          address:'',
          country:'',
          city:'',
          postCode:'',
          email: '',
          contactName: '',
          phone:'',
          tel:'',
        },
          rules: {
          partnerName: [
            { required: true, message: '请输入合作机构公司全称', trigger: 'blur' },
            // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          address:[
              {required:true,message:'请输入公司机构所在地址',trigger:'blur'},
          ],
          country:[
              {required:false,message:'请输入公司机构所在国家',trigger:'blur'},
          ],
          city:[
              {required:false,message:'请输入公司机构所在城市',trigger:'blur'},
          ],
          postCode:[
              {required:false,message:'请输入所在地邮编',trigger:'blur'},
          ],
          email: [
            { required: false, message: '请输入邮箱地址', trigger: 'blur' },
          ],
          contactName: [
            { required: true, message: '请输入联系人', trigger: 'blur' },
          ],
          phone:[
              {required:true,message:'请输入手机号',trigger:'blur'},
              {min:11,max:11,message:'请输入正确格式的11位手机号',trigger: 'blur'}
          ],
          tel:[
              {required:false,message:'请输入电话',trigger:'blur'},
          ],
        }

    };
  },
  methods: {
     registerForm() {
         if(!this.ruleForm.partnerName){
             this.$message.error("请输入合作机构公司全称");
             return;
         }
         if(!this.ruleForm.address){
             this.$message.error("请输入合作机构公司所在地址");
             return;
         }
         // if(!this.ruleForm.country){
         //     this.$message.error("请输入合作机构公司所在国家");
         //     return;
         // }
         // if(!this.ruleForm.city){
         //     this.$message.error("请输入合作机构公司所在城市");
         //     return;
         // }
         // if(!this.ruleForm.postCode){
         //     this.$message.error("请输入所在地邮编");
         //     return;
         // }
         // if(!this.ruleForm.email){
         //     this.$message.error("请输入邮箱地址");
         //     return;
         // }
         if(!this.ruleForm.contactName){
             this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm.phone){
             this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm.phone.length != 11) {
             this.$message.error("请输入正确格式的11位手机号");
             return;
         }
         // if(!this.ruleForm.tel){
         //     this.$message.error("请输入电话");
         //     return;
         // }
       var dto =
      {
        'partnerName':this.ruleForm.partnerName,
        'address':this.ruleForm.address,
        'country':this.ruleForm.country,
        'city':this.ruleForm.city,
        'postCode':this.ruleForm.postCode,
        'phone':this.ruleForm.phone,
        "email": this.ruleForm.email,
        "contactName": this.ruleForm.contactName,
        "tel": this.ruleForm.tel,
      }
   this.$http.post("/partnerapi/save",dto)
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
            alert("报名失败")
          }
        })
        .catch(function(error) {
          window.console.log(error);
        });
      },

  },
  mounted() {
    // this.loadData();
  },
  watch: {
    newstype(type) {
      window.console.log(type);
      // this.loadData();
    }
  }
};
</script>

<style lang="scss" scoped>
*,ul li,a{
    list-style:none;
    text-decoration: none;
}
.kunming {
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

      &-list li:nth-child(4){
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
