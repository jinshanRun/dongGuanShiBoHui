<template>
    <div class="exhibitionForm">
      <div class="exhibitionForm-banner"><img src="../assets/img/exhibitionback.png" alt=""></div>
      <div class="exhibitionForm-content">
    <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/" style="color:#999999">首页</a>>展商报名</p>
          <div class="exhibitionForm-content-left">
              <ul class="exhibitionForm-content-list">
                  <li><router-link :to="{name:'exhibitionHall1'}">展厅类别</router-link></li>
                  <li><router-link :to="{name:'exhibitionGuide2'}">展馆走向</router-link></li>
                     <li><a :href="url" target="_blank" style="width:184px;height:40px;display:block">招商手册</a></li>
                  <li>参展申请</li>
              </ul>
          </div>
          <div class="exhibitionForm-content-right">
            <div class="applyForm">
              <p style="position: absolute;left: 0;top: 0px;"><img src="../assets/img/wayone.png" alt=""></p>
              <p style="color: #333333;font-size: 18px;height: 75px;line-height: 75px;text-align: center">参展商申请表</p>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" id="exhibitionRuleForm">
                <el-form-item label="参展机构公司全称" prop="companyName">
                  <el-input v-model="ruleForm.companyName" placeholder="参展机构公司全称"></el-input>
                </el-form-item>
                <el-form-item label="公司/机构所在地址"  prop="companyAddress">
                  <el-input v-model="ruleForm.companyAddress" placeholder="公司/机构所在地址"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="contactName">
                    <el-input v-model="ruleForm.contactName" placeholder="联系人"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item label="展品名称" prop="goodsName">
                  <el-input v-model="ruleForm.goodsName" placeholder="展品名称"></el-input>
                </el-form-item>
                <el-form-item label="展品类型" prop="exhibitionType">
                  <el-input v-model="ruleForm.exhibitionType" placeholder="展品名称"></el-input>
                  <el-radio-group v-model="ruleForm.exhibitionType" class="exhibitionTypeRadios">
                    <p><el-radio label="粮食类及其加工类"></el-radio> <el-radio label="速冻食品类"></el-radio></p>
                    <p><el-radio label="果蔬类及其加工品"></el-radio><el-radio label="蜂产品类"></el-radio></p>
                    <p><el-radio label="肉类及其加工品"></el-radio><el-radio label="茶叶类"></el-radio></p>
                    <p><el-radio label="食用油类"></el-radio><el-radio label="饮料类"></el-radio></p>
                    <p><el-radio label="乳制品类"></el-radio><el-radio label="酒类"></el-radio></p>
                    <p><el-radio label="调味品类"></el-radio><el-radio label="食品包装与设计"></el-radio></p>
                    <p><el-radio label="焙烤食品类"></el-radio><el-radio label="食品加工设备"></el-radio></p>
                    <p><el-radio label="糖制品类"></el-radio><el-radio label="餐具类"></el-radio></p>
                    <p><el-radio label="休闲食品类"></el-radio><el-radio label="清真食品"></el-radio></p>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="展览展示" prop="placeType">
                  <el-input v-model="ruleForm.placeType" placeholder="展品名称"></el-input>
<!--                  <el-radio-group v-model="ruleForm.placeType" class="exhibitionTypeRadios">-->
<!--                    <p><el-radio label="普通参展商"></el-radio></p>-->
<!--                    <p><el-radio label="VIP参展商"></el-radio></p>-->
<!--                    <p><el-radio label="热门推荐）"></el-radio></p>-->
<!--                  </el-radio-group>-->
                </el-form-item>
                <el-form-item id="exhiButton">
                  <el-button @click="resetForm('ruleForm')" style="background:#e5e5e5;border-color:#e5e5e5;color:#666666;height:28px;line-height: 0px;width:80px">重置</el-button>
                  <el-button type="primary" @click="submitForm('ruleForm')" style="background:#f9680b;border-color:#e5e5e5;height:28px;line-height: 0px;width:80px;margin-left:38px">提交</el-button>
                </el-form-item>
              </el-form>
            </div>

              <div class="Way2">
                <p><img src="../assets/img/waytwo.png" alt=""></p>
                <div style="padding-left:106px">
                <p style="font-size:16px;color:#333333">下载附件，填写完成。发送到邮箱：autumn_sunq@126.com</p>
                <a href="http://39.106.51.133:8082/dongguan/参展申请表.doc" target="_blank" style="margin:0 auto;width:120px;height:40px;display:block"><img src="../assets/img/downloadbck.png" alt=""></a>
                <div style="color:#333333;text-align: center;width:346px;margin:20px auto">发送完成后，工作人员会在1-3个工作日与您联系期待与您的合作！</div>
                </div>
              </div>

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
      url: "http://39.106.51.133:8082/dongguan/att2.pdf",
      downFileUrl:"http://39.106.51.133:8082/dongguan/参展申请表.doc",
      newsList: [],
      newstype: 1,
      ruleForm: {
          companyName: '',
          companyAddress: '',
          contactName: '',
          phone: '',
          goodsName: '',
          exhibitionType: '',
          placeType: '',
        },
        rules: {
          companyName: [
            { required: true, message: '请输入参展机构公司全称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          // companyAddress: [
          //   { required: true, message: '请输入公司/机构所在地址', trigger: 'blur' }
          // ],
          contactName: [
            { required: true, message: '请输入联系人', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {min:11,max:11,message:'请输入正确格式的11位手机号',trigger: 'blur'}
          ],
          // goodsName: [
          //   { required: true, message: '请输入展品名称', trigger: 'blur' }
          // ],
          // exhibitionType: [
          //   { required: true,message: '请选择参展类别', trigger: 'blur' }
          // ],
          // placeType: [
          //   {required: true, message: '请选择展览展示', trigger: 'blur' }
          // ],
        }
    };
  },
  methods: {
  submitForm() {
         if (!this.ruleForm.companyName) {
             this.$message.error("请输入参展机构公司全称");
             return;
         }
         // if(!this.ruleForm.companyAddress){
         //     this.$message.error("请输入公司/机构所在地址");
         //     return;
         // }
         if (!this.ruleForm.contactName) {
             this.$message.error("请输入联系人");
             return;
         }
         if(!this.ruleForm.phone){
             this.$message.error("请输入手机号");
             return;
         }
         if (this.ruleForm.phone.length != 11) {
              this.$message.error("请输入正确的手机号");
              return;
         }
         // if(!this.ruleForm.goodsName){
         //     this.$message.error("请输入展品名称");
         //     return;
         // }
         // if(!this.ruleForm.exhibitionType){
         //     this.$message.error("请选择参展类别");
         //     return;
         // }
         // if(!this.ruleForm.placeType){
         //     this.$message.error("请选择展览展示");
         //     return;
         // }
       var CompanySignUpDTO =
          {
            "companyName": this.ruleForm.companyName,
            "companyAddress": this.ruleForm.companyAddress,
            "contactName": this.ruleForm.contactName,
            "phone": this.ruleForm.phone,
            "goodsName": this.ruleForm.goodsName,
            "exhibitionType": this.ruleForm.exhibitionType,
            "placeType": this.ruleForm.placeType
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

<style lang="scss">
.exhibitionForm {
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
      p{
        font-size: 12px;
        color: #999999;
        margin-top: 14px;
        img{
        margin-right: 10px;
        margin-top: 2px;
        }
      }
     &-left p a{
       color: #999999;
      }
      &-list{
          margin-top: 18px;
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
          a{
            color: #333333;
          }
      }
      &-list li:nth-child(4){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          float: left;
          padding: 39px 200px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
      }
      .applyForm{
       width: 570px;
       border: 1px solid #f7f7f7;
       box-shadow: 0px 0px 30px 15px rgba(236,238,246,0.9);
       position: relative;
      }
      .Way2{
       width: 570px;
       border: 1px solid #f7f7f7;
       margin-top: 30px;
       padding-bottom: 10px;
       box-shadow: 0px 0px 20px 15px rgba(236,238,246,0.9);
      }
      .Way2 p{
        height: 60px;
        line-height: 60px;
      }
      .Way2 p:first-child{
        height: 56px;
        line-height: 50px;
      }
      &-right p img{
           float: left;
           margin-top: 23px;  }
  }
}
.exhibitionForm-content-xq{
  font-size: 16px;
}
.exhibitionForm-content-xq div{
  margin-bottom: 18px;
}
.exhibitionForm-content-xq div p{
  height: 28px;
  line-height: 28px;
  color: #333333;
}
.exhibitionForm-content-xq div p:first-child{
  font-weight: 600;
}

#exhibitionRuleForm {
  padding: 0 70px;
}
#exhibitionRuleForm .el-form-item .el-form-item__label{
  color: #666666!important;
}
#exhibitionRuleForm  .el-form-item{
  margin-bottom: 22px;
}
.exhibitionTypeRadios{
  margin-top: 16px;
}
.exhibitionTypeRadios p {
  margin-bottom: 14px;
}
.exhibitionTypeRadios p label:first-child {
  width:128px;
}
.exhibitionTypeRadios p label:nth-child(2){
  // float: right;
}
#exhiButton .el-form-item__content{
  margin-left: 110px!important;
}
.h40{
  height: 40px;
}
</style>
