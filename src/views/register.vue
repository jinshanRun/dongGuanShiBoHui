<template>
    <div class="kunming">
      <div class="kunming-banner"><img src="../assets/img/baomingbanner.png" alt=""></div>
      <div class="kunming-content">
          <div class="kunming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>展商报名</p>
              <ul class="kunming-content-list">
                  <li><router-link :to="{name:'baoming'}">展商报名</router-link></li>
                  <li>媒体注册</li>
                  <li><router-link :to="{name:'userApply'}">用户报名</router-link></li>
                  <li><router-link :to="{name:'coopApply'}">合作商报名</router-link></li>
              </ul>
          </div>
          <div class="kunming-content-right">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="媒体名称" prop="mediaOfficeName">
                <el-input v-model="ruleForm.mediaOfficeName" placeholder="北京高斯智慧科技有限公司"></el-input>
              </el-form-item>
              <el-form-item label="联系电话"  prop="contactPhone">
                  <el-input v-model="ruleForm.contactPhone" placeholder="请输入联系电话"></el-input>
              </el-form-item>
              <el-form-item label="联系邮箱"  prop="email">
                  <el-input v-model="ruleForm.email" placeholder="请输入联系邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="registerForm('ruleForm')">确认注册</el-button>
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
          mediaOfficeName: '',
          email: '',
          contactPhone: '',
        },
          rules: {
          mediaOfficeName: [
            { required: true, message: '请输入媒体名称', trigger: 'blur' },
            // { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          email: [
            { required: false, message: '请输入联系邮箱', trigger: 'blur' }
          ],
          contactPhone: [
            { required: true, message: '请输入联系电话', trigger: 'blur' }
          ],
        }

    };
  },
  methods: {
     registerForm() {
         if (!this.ruleForm.mediaOfficeName) {
             this.$message.error("请输入媒体名称");
             return;
         }
         if (!this.ruleForm.contactPhone) {
             this.$message.error("请输入联系电话");
             return;
         }
       var MediaRegisterDTO =
          {
            'mediaOfficeName':this.ruleForm.mediaOfficeName,
            "email": this.ruleForm.email,
            "contactPhone": this.ruleForm.contactPhone,
          }
         this.$http.post("/mediaregisterapi/saveMediaRegister",MediaRegisterDTO)
            .then(res => {
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
  },
  mounted() {
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

      &-list li:nth-child(2){
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
