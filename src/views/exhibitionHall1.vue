<template>
    <div class="expo">
      <div class="expo-banner" ><img src="../assets/img/exhibitionback.png" alt=""></div>
      <div class="expo-content">
     <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>展商服务><span>展厅类别</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                  <li>展厅类别</li>
                  <li><router-link :to="{name:'exhibitionGuide2'}">展馆走向</router-link></li>
                     <li><a :href="url" target="_blank" style="width:184px;height:40px;display:block">招商手册</a></li>
                  <li><router-link :to="{name:'exhibitionForm4'}">参展申请</router-link></li>
              </ul>
          </div>
          <div class="expo-content-right">
             <div class="expoTypexs">
               <p style="font-size:18px;width:96px;float:left;height:338px;line-height:8px">线上展厅</p>
               <ul>
                 <li @click="company1('ff7632e456174ad4b52d6fc76968f35420201023172642')"><img src="../assets/img/xs01.png" alt=""></li>
<!--                 <li @click="company2('5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717')"><img src="../assets/img/xs02.png" alt=""></li>-->
                 <li @click="company3('d51083c57a99405fa3e7a5066a556f9720201023172826')"><img src="../assets/img/xs03.png" alt=""></li>
                 <li @click="company4('ee51986b1c97468eb20f28a1fc17826f20201023172841')"><img src="../assets/img/xs04.png" alt=""></li>
                 <li @click="company5('2b944fcfa09e42d588dcb6b5ace83ea420201023172900')"><img src="../assets/img/xs05.png" alt=""></li>
                 <li @click="company6('324e4b21bb1b4647bc0a7d1a1ad6655820201023172934')"><img src="../assets/img/xs06.png" alt=""></li>
                 <li @click="company7('35c6a237bfde4a4181beb441bf169de520201023172953')"><img src="../assets/img/xs07.png" alt=""></li>
               </ul>
             </div>
             <div class="expoTypeys">
               <p style="font-size:18px;width:96px;float:left;height:338px;line-height:8px">云上展厅</p>
               <ul>
                 <li  @click="yunshang1('c8610a0908b04ea0858f5ec22e9a4ed720201023173102')"><img src="../assets/img/xs08.png" alt=""></li>
                 <li  @click="yunshang2('218d0ba591b14f3daa39fcb9e0f4055b20201023173050')"><img src="../assets/img/xs09.png" alt=""></li>
                 <li  @click="yunshang3('f1327fceaa2440f796570fb48856407220201023173039')"><img src="../assets/img/xs10.png" alt=""></li>
                 <li  @click="yunshang4('d6ccd8b213b2419fbd53fe4e5070ea4420201023173027')"><img src="../assets/img/xs11.png" alt=""></li>
               </ul>
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
      url:"http://39.106.51.133:8082/shibohui/att2.pdf",
      loading: true,
      newsList: [],
      newstype: 1
    };
  },
   mounted() {

  },
  methods: {
    // 线上展厅
    company1(uid){
        this.$router.push({path:'companygoodFood1',query:{uuid:uid}})
      },
     company2(uid){
      this.$router.push({path:'companyYN2',query:{uuid:uid}})
     },
     company3(uid){
      this.$router.push({path:'companyfoodResult3',query:{uuid:uid}})
     },
     company4(uid){
      this.$router.push({path:'companyzongH4',query:{uuid:uid}})
     },
     company5(uid){
      this.$router.push({path:'companyfoodCulture5',query:{uuid:uid}})
     },
     company6(uid){
      this.$router.push({path:'companyagrPro6',query:{uuid:uid}})
     },
     company7(uid){
      this.$router.push({path:'companyboutique7',query:{uuid:uid}})
     },
    //  云上展厅
    yunshang1(uid){
        this.$router.push({name:'yunSfood1',query:{uuid:uid}})
      },
     yunshang2(uid){
      this.$router.push({name:'yunSkeji2',query:{uuid:uid}})
     },
     yunshang3(uid){
      this.$router.push({name:'yunSnong3',query:{uuid:uid}})
     },
     yunshang4(uid){
      this.$router.push({name:'yunSshen4',query:{uuid:uid}})
     }
  },

};
</script>

<style lang="scss" scoped>
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
    color: #999999;
}
.expo {
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
      height: 486px;
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
      &-list li:first-child{
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          float: left;
          width: 936px;
          margin-top: 18px;
          padding: 24px 30px;
          padding-bottom: 20px;
          border: 1px solid #f7f7f7;
      }
      &-right p{
     color: #333333;
    font-size: 16px;
    width: 936px;
    height: 68px;
    line-height: 68px;
    text-align: left

      }
       &-xq{
              font-size: 16px;
              overflow: hidden;
              height: 400px;
          }
  }
}
.expo-content-xq{
  font-size: 16px;
}
.expo-content-xq div{
  margin-bottom: 18px;
}
.expo-content-xq div p{
  height: 28px;
  line-height: 28px;
  color: #333333;
}
.expo-content-xq div p:first-child{
  font-weight: 600;
}
.expoTypexs,.expoTypeys{
  float: left;
  width: 338px;
}
.expoTypexs ul,.expoTypeys ul{
  float: left;
}
.expoTypexs ul li,.expoTypeys ul li{
  margin-bottom: 16px;
  width: 240px;
  height: 40px;
}
.expoTypexs ul li:hover {
  box-shadow: 4px 4px 10px rgba(19, 34, 93, 0.2);
  cursor: pointer;
  // border-radius: 15px;
}
.expoTypeys ul li:hover{
 box-shadow: 4px 4px 10px rgba(19, 34, 93, 0.2);
 cursor: pointer;
//  border-radius: 15px;
}
.expoTypeys{
  margin-left: 100px;
}
.h40{
  height: 40px;
}
</style>
