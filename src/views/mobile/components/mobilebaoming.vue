<template>
    <div id="mbaoming">
      <!-- 头部 -->
      <div class="head">
        <mt-header fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>

      <div class="h30"></div>
      <!-- 报名入口 -->
      <div class="baomingform">
        <mt-navbar  v-model="active"  id="mobilebaoming">
            <mt-tab-item id="meet-container1">展商报名</mt-tab-item>
            <mt-tab-item id="meet-container2">媒体注册</mt-tab-item>
            <mt-tab-item id="meet-container3">用户报名</mt-tab-item>
            <mt-tab-item id="meet-container4">合作商报名</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active" id="baomingContent">
                <mt-tab-container-item id="meet-container1" class="container1" :model="ruleForm1" :rules="rules" ref="ruleForm1">
                  <mt-field label="参展单位名称" v-model="ruleForm1.companyName" type="text"></mt-field>
                  <mt-field label="联系人"  type="text" v-model="ruleForm1.contactName"></mt-field>
                  <mt-field label="手机号"  type="number" v-model="ruleForm1.phone"></mt-field>
                  <el-alert :title="this.messageInfo" type="error" v-if="messageFlag" show-icon :closable="false"></el-alert>
                  <button @click="submitForm1('ruleForm1')" id="submitBtn">提交</button>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2" class="container1" :model="ruleForm2" :rules="rules" ref="ruleForm2">
                  <mt-field label="媒体名称" v-model="ruleForm2.mediaOfficeName" type="text"></mt-field>
                  <mt-field label="联系人" type="text" v-model="ruleForm2.contactName"></mt-field>
                  <mt-field label="手机号" type="number" v-model="ruleForm2.phone"></mt-field>
                  <el-alert :title="this.messageInfoMedia" type="error" v-if="messageFlagMedia" show-icon :closable="false"></el-alert>
                  <button type="submit" @click="submitForm2('ruleForm2')" id="submitBtn">提交</button>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container3" class="container1" :model="ruleForm3" :rules="rules" ref="ruleForm3">
                  <mt-field label="用户姓名" v-model="ruleForm3.userName" type="text"></mt-field>
                  <mt-field label="手机号"  type="number" v-model="ruleForm3.phone"></mt-field>
                  <el-alert :title="this.messageInfoRegister" type="error" v-if="messageFlagRegister" show-icon :closable="false"></el-alert>
                  <button type="submit" @click="submitForm3('ruleForm3')" id="submitBtn">提交</button>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container4" class="container1" :model="ruleForm4" :rules="rules" ref="ruleForm4">
                  <mt-field label="合作商名称"  v-model="ruleForm4.partnerName" type="text" ></mt-field>
                  <mt-field label="联系人"  type="text" v-model="ruleForm4.contactName"></mt-field>
                  <mt-field label="手机号" type="number" v-model="ruleForm4.phone"></mt-field>
                  <el-alert :title="this.messageInfoPartner" type="error" v-if="messageFlagPartner" show-icon :closable="false"></el-alert>
                  <button type="submit" @click="submitForm4('ruleForm4')" id="submitBtn">提交</button>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>
    <p style="font-size:24px;text-align:center;color:#666666;margin-bottom:20px">24小时咨询电话：15011380203</p>
    <div class="h30"></div>
    <!-- 战略合作伙伴 -->
<div class="zhanhe">
  <p style="height:70px;line-height:70px;font-size: 32px;font-weight: 600;">战略合作伙伴</p>
  <ul>
    <li><img src="../assets/img/zh1.png" alt=""> </li>
    <li><img src="../assets/img/zh2.png" alt=""> </li>
    <li><img src="../assets/img/zh3.png" alt=""> </li>
    <li><img src="../assets/img/zh4.png" alt=""> </li>
  </ul>
</div>
<!-- 合作伙伴 -->
<div class="zhanhe">
  <p style="height:70px;line-height:70px;font-size: 32px;font-weight: 600;">合作伙伴 </p>
  <ul>
    <li><img src="../assets/img/he1.png" alt=""> </li>
    <li><img src="../assets/img/he2.png" alt=""> </li>
    <li><img src="../assets/img/he3.png" alt=""> </li>
    <li><img src="../assets/img/he4.png" alt=""> </li>
  </ul>
</div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
import { Toast } from 'mint-ui';
import "../assets/font_c0n1jt56y6/iconfont.css"
export default {
    data(){
        return{
            count:3,
            messageFlag:false,
            messageInfo:null,
            messageFlagMedia:false,
            messageInfoMedia:null,
            messageFlagRegister:false,
            messageInfoRegister:null,
            messageFlagPartner:false,
            messageInfoPartner:null,
             active: 'meet-container1',
             baomingSucceed:false,
             toastInstance: null,
             ruleForm1: {
               companyName: '',
               contactName: '',
               phone: ''
             },
             ruleForm2: {
               mediaOfficeName: '',
               contactName: '',
               phone: ''
             },
             ruleForm3: {
               userName: '',
               phone: ''
             },
             ruleForm4: {
               partnerName: '',
               contactName: '',
               phone: ''
             },
             rules: {
              companyName: [
              { required: true, message: '请输入参展单位名称', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
              partnerName: [
                { required: true, message: '请输入合作机构公司全称', trigger: 'blur' },
                // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
              ],
                mediaOfficeName: [
                { required: true, message: '请输入媒体名称', trigger: 'blur' },
                // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
              ],
              contactName: [
                { required: true, message: '请输入联系人', trigger: 'blur' },
              ],
               userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
              ],
              phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
                {min:11,max:11,message:'请输入正确格式的11位手机号',trigger: 'blur'}
              ],

             }
        }
    },
    mounted(){
    },
    methods:{
        // 倒计时3秒以后页面跳转
        successAfter(){
            this.timer = setInterval(()=>{
                if(this.count > 0 && this.count <= 4){
                    this.count--;
                    this.toastInstance = Toast({
                        message: this.count+'秒后将返回到首页',
                        duration: 1000,
                        // duration: -1,
                        iconClass: 'iconfont icon-tijiaosucceed',
                        className: 'ToastSucceed'
                    });
                }else{
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    // 跳转的页面写在此处
                    this.$router.push({
                        path:'/mobileHome',
                    })
                }
            },1000)
        },
      // 展商报名
       submitForm1() {
         if (!this.ruleForm1.companyName) {
             this.messageFlag = true;
             this.messageInfo = "请输入正确的参展机构公司名称";
             // this.$message.error("请输入参展机构公司全称");
             return;
         }
         if (!this.ruleForm1.contactName) {
             this.messageFlag = true;
             this.messageInfo = "请输入正确的联系人";
             // this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm1.phone){
             this.messageFlag = true;
             this.messageInfo = "请输入正确的手机号";
             // this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm1.phone.length != 11) {
             // this.$message.error("请输入11位正确格式的手机号");
             this.messageFlag = true;
             this.messageInfo = "请输入正确的11位格式手机号码";
             return;
         }
         this.messageFlag = false;
       var BaomingSignUpDTO =
          {

            "companyName": this.ruleForm1.companyName,
            "contactName": this.ruleForm1.contactName,
            "phone": this.ruleForm1.phone,
          };
       this.$http.post("/companysignupapi/saveCompanySignUp",BaomingSignUpDTO)
            .then(res => {
              if(res.data.returnCode === true && res.data.returnMsg === "OK"){
                  this.ruleForm1.companyName = null;
                  this.ruleForm1.contactName = null;
                  this.ruleForm1.phone = null;
                  this.successAfter();
              }else{
                  this.toastInstance = Toast({
                      message: '提交失败',
                      duration: 3000,
                      iconClass: 'iconfont icon-shibaibiaoqing',
                      className: 'ToastFaild'
                  });
              }
            })
            .catch(function(error) {
                this.toastInstance = Toast({
                    message: '提交失败',
                    duration: 3000,
                    iconClass: 'iconfont icon-shibaibiaoqing',
                    className: 'ToastFaild'
                });
            });
          },
      // 媒体注册
      submitForm2() {
        if (!this.ruleForm2.mediaOfficeName) {
            this.messageFlagMedia = true;
            this.messageInfoMedia = "请输入媒体名称";
             // this.$message.error("请输入媒体名称");
             return;
         }
         if (!this.ruleForm2.contactName) {
             this.messageFlagMedia = true;
             this.messageInfoMedia = "请输入联系人";
             // this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm2.phone){
             this.messageFlagMedia = true;
             this.messageInfoMedia = "请输入手机号";
             // this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm2.phone.length != 11) {
             this.messageFlagMedia = true;
             this.messageInfoMedia = "请输入11位正确格式的手机号";
             // this.$message.error("请输入11位正确格式的手机号");
             return;
         }
         this.messageFlagMedia = false;
       var ZhuceSignUpDTO =
          {
            "mediaOfficeName": this.ruleForm2.mediaOfficeName,
            "email": this.ruleForm2.contactName,
            "contactPhone": this.ruleForm2.phone,
          };
       this.$http.post("/mediaregisterapi/saveMediaRegister",ZhuceSignUpDTO)
            .then(res => {
              if(res.data.returnCode === true && res.data.returnMsg === "OK"){
                  // Toast({
                  //     message: '提交成功，3秒后将返回到首页',
                  //     duration: 3000,
                  //     className: 'ToastSucced',
                  //     iconClass: 'iconfont icon-duigou'
                  //   });
                  this.ruleForm2.mediaOfficeName = null;
                  this.ruleForm2.contactName = null;
                  this.ruleForm2.phone = null;
                  this.successAfter();
                  // this.goGrdoupRecor();
              }else{
                  this.toastInstance = Toast({
                      message: '提交失败',
                      duration: 3000,
                      iconClass: 'iconfont icon-shibaibiaoqing',
                  });
              }
            })
            .catch(function(error) {
                this.toastInstance = Toast({
                    message: '提交失败',
                    duration: 3000,
                    iconClass: 'iconfont icon-shibaibiaoqing',
                });
            });
          },
      // 用户报名
      submitForm3() {
        if (!this.ruleForm3.userName) {
            this.messageFlagRegister = true;
            this.messageInfoRegister = "请输入用户名";
             // this.$message.error("请输入用户姓名");
             return;
         }
         if(!this.ruleForm3.phone){
             this.messageFlagRegister = true;
             this.messageInfoRegister = "请输入手机号";
             // this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm3.phone.length != 11) {
             this.messageFlagRegister = true;
             this.messageInfoRegister = "请输入11位正确格式的手机号";
             // this.$message.error("请输入11位正确格式的手机号");
             return;
         }
         this.messageFlagRegister = false;
       var UserBaomingSignUpDTO =
          {
            "userName": this.ruleForm3.userName,
            "phone": this.ruleForm3.phone,
          };
       this.$http.post("/consumersignupapi/save",UserBaomingSignUpDTO)
            .then(res => {
              // eslint-disable-next-line no-console
              // console.log(res)
              if(res.data.returnCode === true && res.data.returnMsg === "OK"){
                  // Toast({
                  //     message: '提交成功，3秒后将返回到首页',
                  //     duration: 3000,
                  //     className: 'ToastSucced',
                  //     iconClass: 'iconfont icon-duigou'
                  //   });
                this.ruleForm3.userName = null;
                this.ruleForm3.phone = null;
                this.successAfter();
                // this.goGrdoupRecor();
              }else{
                  this.toastInstance = Toast({
                      message: '提交失败',
                      duration: 3000,
                      iconClass: 'iconfont icon-shibaibiaoqing',
                  });
              }
            })
            .catch(function(error) {
                this.toastInstance = Toast({
                    message: '提交失败',
                    duration: 3000,
                    iconClass: 'iconfont icon-shibaibiaoqing',
                });
            });
      },
      // 合作商报名
      submitForm4() {
         if (!this.ruleForm4.partnerName) {
             this.messageFlagPartner = true;
             this.messageInfoPartner = "请输入合作商名称";
             // this.$message.error("请输入合作商名称");
             return;
         }
         if (!this.ruleForm4.contactName) {
             this.messageFlagPartner = true;
             this.messageInfoPartner = "请输入联系人";
             // this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm4.phone){
             this.messageFlagPartner = true;
             this.messageInfoPartner = "请输入手机号";
             // this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm4.phone.length != 11) {
             this.messageFlagPartner = true;
             this.messageInfoPartner = "请输入11位正确格式的手机号";
             // this.$message.error("请输入11位正确格式的手机号");
             return;
         }
         this.messageFlagPartner = false;
       var CoopBaomingSignUpDTO =
          {
            "partnerName": this.ruleForm4.partnerName,
            "contactName": this.ruleForm4.contactName,
            "phone": this.ruleForm4.phone,
          };
       this.$http.post("/partnerapi/save",CoopBaomingSignUpDTO)
            .then(res => {
              // eslint-disable-next-line no-console
              // console.log(res)
              if(res.data.returnCode === true && res.data.returnMsg === "OK"){
                 // Toast({
                 //      message: '提交成功，3秒后将返回到首页',
                 //      duration: 3000,
                 //      className: 'ToastSucced',
                 //     iconClass: 'iconfont icon-duigou'
                 //    });
                this.ruleForm4.partnerName = null;
                this.ruleForm4.contactName = null;
                this.ruleForm4.phone = null;
                this.successAfter();
                // this.goGrdoupRecor();
              }else{
                  this.toastInstance = Toast({
                      message: '提交失败',
                      duration: 3000,
                      iconClass: 'iconfont icon-shibaibiaoqing',
                  });
              }
            })
            .catch(function(error) {
                this.toastInstance = Toast({
                    message: '提交失败',
                    duration: 3000,
                    iconClass: 'iconfont icon-shibaibiaoqing',
                });
            });
       },
      
    },

}
</script>
<style scpoed>
#mbaoming{
  /* margin-bottom: 100px; */
}
.head{
    height: 88px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 88px;
}
#mbaoming .mint-button-icon{
   height: 50px;
}
.mint-header{
  background: #fff!important;
  color: #333333 !important;
  font-size: 32px !important;
  height: 88px!important;
  line-height: 88px!important;
}
#mobileback{
  color: #999999 !important;
  font-size: 28px !important;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.baomingform{
  padding:30px;
}
#baomingContent{
  margin-top: 30px;
  font-size: 28px;
}
.mmeetbck17{
  color: #ffffff;
  background: url(../assets/img/meetanpaiback.png) no-repeat no-repeat;
  padding: 17px;
  line-height: 40px;
  margin-top: 8px;
}

#mobilebaoming .mint-tab-item.is-selected{
    color: #0071fc;
    font-weight: bold;
    border-bottom: none;
    background: url(../assets/img/selectbck.png) no-repeat bottom;
}
#mobilebaoming .mint-tab-item-label{
    font-size: 32px;
}
#mobilebaoming .mint-tab-item{
    padding: 24px 0px!important;
    margin: 0 6px!important;
    font-weight: bold;
}
/* 表格样式 */
#baomingContent .mint-cell-title{
 width: 185px;
}
#baomingContent .mint-cell-value{
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding-left: 12px;
}
#baomingContent .mint-cell-wrapper{
  width: 585px;
}
#submitBtn{
  background: url(../assets/img/baomingback.png) no-repeat no-repeat center;
  width: 180px;
  height: 50px;
  border: none;
  color: #fff;
  font-size: 32px;
  display:block;
  margin: 120px auto 350px auto;
}
/* 报名成功提示 */
.ToastSucceed{
  color: #666666!important;
  width: 400px!important;
  height: 400px!important;
  background: #333333;
}
.ToastSucceed .iconfont{
  font-size: 200px!important;
}
.ToastSucceed span{
  font-size: 20px!important;
  color: #fff;
}
/* 报名失败 */
.ToastFaild{
  color: #ff7575!important;
  font-size: 20px!important;
}
</style>
