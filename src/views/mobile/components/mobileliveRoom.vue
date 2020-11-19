<template>
<div>
    <div style="margin-bottom:100px" @click="testShow()">
         <!-- 头部 -->
    <div class="header">
      <img src="../assets/img/banner.png" alt="">
    </div>


 <div class="h30"></div>
  <!-- 直播列表 -->
        <div class="liveRoom">
            <div class="liveRoomp">直播</div>
            <ul>
              <div v-for="(item,i) in liveList" :key="i">
                <li>
                    <img :src="item.imageUrl" alt="">
                     <div style="margin-left:26px;width:200px;float:left">
                        <p style="font-size: 26px;height: 70px;line-height:70px;font-weight: 600;line-height:28px">{{item.title}}</p>
                        <div class="liveRoomtxt">
                         <p style="font-size: 24px;color:#747474">开播时间</p>
                         <p style="font-size: 23px;color:#747474">{{item.showTime}}</p>
                         <a :href=item.url target="_blank" class="liveRemind-join" v-if="Date.parse(item.showTime.replace(/-/g,'/')) < liveNowDate" >进入直播间</a>
                         <a class="notLive" v-if="Date.parse(item.showTime.replace(/-/g,'/')) > liveNowDate" >暂未开始</a>
                        </div>
                    </div>
                </li>
                <div class="h30"></div>
            </div>
            </ul>
        </div>
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
<div class="h30"></div>
   </div>
<!-- 固定底部选项栏 -->
<mt-tabbar :fixed="true" id="mobilelive">
      <mt-tab-item  @click.native="home()">
        <img slot="icon" src="../assets/img/indexlogo.png">
        首页
      </mt-tab-item>
      <mt-tab-item  @click.native="exhibitionList()">
        <img slot="icon" src="../assets/img/zslistlogo.png">
        展商列表
      </mt-tab-item>
      <mt-tab-item  @click.native="liveRoom()">
        <img slot="icon" src="../assets/img/zhibologo2.png">
        直播
      </mt-tab-item>
       <mt-tab-item @click.native="isShow()">
        <img slot="icon" src="../assets/img/mobilemore.png">
        更多
      </mt-tab-item>
</mt-tabbar>
<div id="moresee" v-show="isShowDialog">
  <ul  >
       <li><router-link :to="{name:'mobilemeetarr'}">走进博览会</router-link></li>
      <li><router-link :to="{name:'mobilekunming'}">走进昆明</router-link></li>
      <li><router-link :to="{name:'mobileContact'}">联系我们</router-link></li>
  </ul>
</div>
    </div>
</template>
<script>
import { Navbar, TabItem ,Tabbar} from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
export default {
    data(){
        return{
          liveNowDate:new Date(),
          liveFlag: true,
          liveList: [{
          imageUrl:require('@/assets/img/liveRoomlogo.png'),
          title:'',
          showTime:null,
          url:''}],
      page: 0,
      size: 5,
      isShowDialog: false,
        }
    },
    mounted(){
     this.liveListPon()
    },
    methods:{
      // 获取直播列表
    liveListPon(){
      this.$http.get('/liveapi/pageList?page='+this.page+'&size='+this.size)
      .then(res =>{
        if(res.data.returnCode == true && res.data.returnMsg == "OK") {
            this.liveList = res.data.data.content;
            this.countTotal = res.data.data.totalElements;
            this.totalPage = res.data.data.totalPages;
        }
      }).catch(err =>{
        // eslint-disable-next-line no-console
        console.log(err)
      })
    },
     home(){
      this.$router.push({path:'/mobileHome'})
    },
    exhibitionList(){
      this.$router.push({path: '/exhibitionCompanylist'});
    },
    liveRoom(){
      this.$router.push({path:'/mobileliveRoom'})
    },
    isShow(){
    this.isShowDialog=true
   },
   testShow(){
     this.isShowDialog=false
   }
    }
}
</script>
<style scoped>
/* 中部内容 */
.comContent{
    padding: 0 30px;
}
.header{
  padding-bottom: 20px;
}
.h40{
  height: 40px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.liveRoomp{
    font-size: 32px;
    color: #333333;
    height:70px;
    padding: 0 30px;
    line-height:70px;
    font-weight: 600;
}
.liveRoomp a{
    float: right;
    color: #80b8fd;
    font-size: 24px;
    height: 52px;
    line-height: 72px;
}

/* 直播列表 */
.liveRoom ul{
  overflow: hidden;
}
.liveRoom ul li{
  height: 260px;
  padding: 20px 30px;
}
.liveRoom ul li img{
  float: left;
  width: 460px;
  height: 260px;
}
.liveRoomtxt{
  font-size: 24px;
  color: #a3a3a3;
  margin-top: 20px;
}
.liveRoomtxt p{
  line-height: 34px;
}
.liveRoomtxt div{
  margin-top: 10px;
  line-height: 28px;
}
.notLive{
    display: block;
    width: 150px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    border-radius: 20px;
    color: #ffffff!important;
    background:#dddddd;
    margin-top: 30px;
}
.liveRemind-join{
  background: url(../assets/img/joinbck.png) no-repeat center;
  width: 150px;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
}
/* 战略合作伙伴 */
.zhanhe{
  padding: 0 30px;
  overflow: hidden;
}
.zhanhe ul {
  overflow: hidden;
}
.zhanhe ul:last-child{
  margin-bottom: 20px;
}
.zhanhe ul li{
  float: left;
  margin-left: 29px;
}
.zhanhe ul li:first-child{
   margin-left: 0px;
}

#moresee{
  position: fixed;
  right: 0px;
  bottom: 104px;
  background: url(../assets/img/moreListbck.png) no-repeat no-repeat center;
  font-size: 24px;
  width: 190px;
  height: 255px;
}
#moresee a{
  width: 190px;
  color: #000000;
}
#moresee ul li{
  height: 82px;
  line-height: 82px;
  text-align: center;
}
#mobilelive a:nth-child(3){
  color: #ffffff;
  background: #0071fc;
  border-right: 1px solid #e4e4e4;
}
#mobilelive a:nth-child(1){
  border-right: 1px solid #e4e4e4;
}
#mobilelive a:nth-child(2){
  border-right: 1px solid #e4e4e4;
}
</style>
