<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>

      <!-- 视频 -->
      <div class="meetarrVideo">
        <img src="../assets/img/meetarrbck.png" alt="">
      </div>    
    <!-- 联系我们 -->
    <div class="conAdd">
      <p style="font-size:32px;height:50px">联系我们</p>
      <p>地址：北京昌平回龙观创客广场</p>
      <p>电话：010-63261234</p>
      <p style="margin-left:80px">15011380203</p>
      <p>邮箱：autumn_sunq@126.com</p>
      <div class="erweima"><img src="../assets/img/erweima.png" alt=""></div>
      <p style=" text-align: center;font-size:24px;">长按识别图中二维码</p>
      <p style="  text-align: center;font-size:24px;line-height: 10px;">添加客服微信</p>
    </div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
             active: 'meet-container2'
        }
    },
    mounted(){
       
    },
    methods:{
      
    },

}
</script>
<style scoped>
#meetarr{
  /* margin-bottom: 100px; */
}
.head{
    height: 88px;
}
.meetarrVideo{
  padding: 20px 30px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.conAdd{
  padding:40px 30px;
  background: #f9f9f9;
}
.conAdd p{
  line-height: 40px;
  font-size: 28px;
  color: #333333;
}
.erweima{
  width: 62%;
  margin: 40px auto 24px auto;
}
</style>