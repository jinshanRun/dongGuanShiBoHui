<template>
  <div id="home" >
    <div @click="testShow()">
    <!-- 头部 -->
    <div class="header">
      <img src="../assets/img/banner.png" alt="">
       <div class="mobilevisitNumber">
         <p><span>{{mobilevistnum}}</span> </p>
      </div>
    </div>
    <!-- 开幕式和闭幕式 -->
    <div class="partone" >
      <p style="height:110px;line-height:110px;font-size: 32px;font-weight: 600;">
        <span><img src="../assets/img/mtitleback.png" style="vertical-align: bottom;margin-bottom: 30px;margin-right: 10px"/></span>主题峰会
      </p>
      <router-link :to="{name:'mobilemeetarr'}">
        <img src="../assets/img/kaibanner.png" alt="">
        <div class="kms">
          <p>开幕式</p>
          <p>1月28日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上午</p>
        </div>
      </router-link>
         <router-link :to="{name:'mobilemeetarr'}" style="margin-left:18px">
        <img src="../assets/img/bibanner.png" alt="">
        <div class="kms">
          <p>闭幕式</p>
          <p>1月31日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下午</p>
        </div>
     </router-link>
    </div>
  <div class="mh20"></div>
<!-- 新闻中心 -->
<div class="newsTwo">
  <p style="height:110px;line-height:110px;font-size: 32px;font-weight: 600;"> <span><img src="../assets/img/mtitleback.png" style="vertical-align: bottom;margin-bottom: 30px;margin-right: 10px"/></span>新闻中心<router-link :to="{name: 'mobilenewsList'}">更多>></router-link></p>
  <ul>
    <li v-for="(item,index) in newsList" :key="index" @click="wacthNewsxq(item)">
      <img :src="item.imgUrl" alt="">
      <div class="newstxt">
        <p>{{item.title}}</p>
        <div>{{item.summary}}</div> 
        <span style="float:right;font-size:20px;color:#999999;">进入详情</span>
        </div>
    </li>
  </ul>
</div>
      <div class="mh20"></div>
<!-- 广告位 -->
<div class="mobileadvers">
 <router-link :to="{name: 'mobilebaoming'}"><img src="../assets/img/madvers1.png" alt=""></router-link>
  <router-link :to="{name: 'mobilegoodfoods'}"><img src="../assets/img/madvers2.png" alt=""></router-link>
 <!-- <img src="../assets/img/madvers2.png" alt=""> -->
 <img src="../assets/img/madvers3.png" alt="">
</div>
      <div class="mh20"></div>
<!-- 战略合作伙伴 -->
<div class="zhanhe">
  <p style="height:110px;line-height:110px;font-size: 32px;font-weight: 600;"><img src="../assets/img/mtitleback.png" style="vertical-align: bottom;margin-bottom: 30px;margin-right: 10px"/>战略合作伙伴</p>
  <ul>
    <li><img src="../assets/img/zh1.png" alt=""> </li>
    <li><img src="../assets/img/zh2.png" alt=""> </li>
  </ul>
  <ul>
    <li><img src="../assets/img/zh3.png" alt=""> </li>
    <li><img src="../assets/img/zh4.png" alt=""> </li>
  </ul>
</div>
      <div class="mh20"></div>
<!-- 合作伙伴 -->
<div class="zhanhe">
  <p style="height:110px;line-height:110px;font-size: 32px;font-weight: 600;"><img src="../assets/img/mtitleback.png" style="vertical-align: bottom;margin-bottom: 30px;margin-right: 10px"/>合作伙伴 </p>
  <ul>
    <li><img src="../assets/img/he1.png" alt=""> </li>
    <li><img src="../assets/img/he2.png" alt=""> </li>
  </ul>
  <ul>
    <li><img src="../assets/img/he3.png" alt=""> </li>
    <li><img src="../assets/img/he4.png" alt=""> </li>
  </ul>
</div>
<div class="mh20"></div>
</div>
<!-- 固定底部选项栏 -->
<mt-tabbar :fixed="true" id="homebar">
      <mt-tab-item  @click.native="home()">
        <img slot="icon" src="../assets/img/indexlogo2.png">
        首页
      </mt-tab-item>
      <mt-tab-item  @click.native="exhibitionList()">
        <img slot="icon" src="../assets/img/zslistlogo.png">
        展商列表
      </mt-tab-item>
      <mt-tab-item  @click.native="liveRoom()">
        <img slot="icon" src="../assets/img/zhibologo.png">
        直播
      </mt-tab-item>
      <mt-tab-item @click.native="isShow()">
        <img slot="icon" :src="Changemoreimg">
        更多   
      </mt-tab-item>
</mt-tabbar>
<div id="moresee" v-show="isShowDialog">
  <ul >
      <li><router-link :to="{name:'mobilemeetarr'}">走进博览会</router-link></li>
      <li><router-link :to="{name:'mobilekunming'}">走进东莞</router-link></li>
      <li><router-link :to="{name:'mobileContact'}">联系我们</router-link></li>
  </ul>
</div>
  </div>
</template>

<script>
import { Tabbar, TabItem} from 'mint-ui';
export default {
  name: 'home',
  data(){
    return{
      newsList: {},
      page: 0,
      size: 2 ,
      mobilevistnum: null,
      isShowDialog: false,
      Changemoreimg:require('../assets/img/mobilemore.png'),
    }
  },
  mounted(){
    this.wacthNewsxqlistmore(this.page,this.size)
    this.mobilevisitNumber()
  },
//   created(){
//    document.addEventListener('click',(e)=>{
//        if(this.$refs.showPanel){
//            let isSelf = this.$refs.showPanel.contains(e.target)
//            if(!isSelf){
//                this.isShowDialog = false
//            }
//        }
//    })
// },
  methods:{
    // 新闻列表
    wacthNewsxqlistmore(page,size){
       this.$http.get("/articleapi/pageList?page="+page+"&size="+size)
      .then(res => {
        this.newsList = res.data.data.content,
         console.log(this.newsList)
      })
      .catch( error =>{
        console.log(error)
      })
    },
     // 点击进入新闻详情页
     wacthNewsxq(item){
      this.$router.push({path:'mobilenewsdetails',query:{uuid: item.uuid}})
    },
   // 获取累计访问人数
    mobilevisitNumber(){
      this.$http.get("/datacountapi/dataCount")
      .then(res => {
       // eslint-disable-next-line no-console
       console.log(res.data)
       this.mobilevistnum =res.data
      })
      .catch( error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    // 底部栏切换
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
    this.Changemoreimg = require('../assets/img/mobilemore2.png')

   },
   testShow(){
     this.isShowDialog=false
   }
  } 
 
}
</script>

<style >
body,*,ul,li{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  font-family: PingFangSC-Regular, sans-serif!important;
  -webkit-font-smoothing: antialiased!important;
  -moz-osx-font-smoothing: grayscale!important;

}
a,span{
  display: inline-block;
}
#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#home{
  margin-bottom: 100px;
  color:#74412e ;
  margin-top: 60px;
}
.h40{
  height: 40px;
}
.mh20{
  height: 20px;
  background: #f9f9f9;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.header{
  position: relative;
}
.mobilevisitNumber{
  position: absolute;
  right: 142px;
  bottom: 16px;
}
.mobilevisitNumber p{
  position: absolute;
  bottom: 0px;
  right: 20px;
  height: 56px;
  line-height: 56px;
  color: #f3f96a;
  text-align: center;
}
.mobilevisitNumber p span{
  font-size: 14px;
  font-family: "微软雅黑"!important;
  /*font-weight: bold;*/
}
/* 开幕式和闭幕式 */
.partone{
  padding: 0 30px;
}
.partone a{
  width: 336px;
}
.kms{
  width: 330px;
  color: #74412e;
}
.kms p:first-child{
  font-size: 30px;
  line-height: 48px;
}
.kms p:nth-child(2){
  font-size: 24px;
  line-height: 48px;
}
/* 新闻中心 */
.newsTwo{
  padding: 0 30px;
  overflow: hidden;
}
.newsTwo p a{
  font-size: 24px;
  float: right;
  color: #74412e;
  font-weight: 500;
}
.newsTwo ul li{
  height: 146px;
  margin-bottom: 30px;
}
.newsTwo ul li img{
  float: left;
  width: 230px;
  height: 130px;
}
.newsTwo .newstxt{
  width: 430px;
  float: left;
  height: 146px;
  margin-left: 26px;
  border-bottom: 1px solid #eeeeee;
}
.newsTwo .newstxt p{
  font-size: 26px;
  font-weight: 600;
  /* width: 434px; */
  overflow: hidden;	
	text-overflow:ellipsis;
	white-space: nowrap;
  color: #333333;
}
.newstxt div{
  font-size: 24px;
  color: #666666;
  margin-top: 10px;
  /* overflow: hidden;	 */
	/* text-overflow:ellipsis; */
	/* white-space: nowrap; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

/* 广告位 */
.mobileadvers{
  padding: 30px 30px 10px 30px;
}
.mobileadvers img{
  margin-bottom: 20px;
}
/* 战略合作伙伴 */
.zhanhe{
  padding: 0 30px;
  overflow: hidden;
}
.zhanhe ul:last-child{
  margin-bottom: 20px;
}
.zhanhe ul li{
  float: left;
  margin-left: 54px;
  margin-bottom: 30px;
}
.zhanhe ul li:first-child{
   margin-left: 48px;
}



/* 底部导航栏 */
.mint-tabbar{
  height: 98px;
  border-top: 1px solid #e6e6e6;
  background: #ffffff!important;
}
.mint-tab-item-icon{
  width: 50px;
  height: 48px;
  line-height: 48px;
}
.mint-tab-item-label{
  font-size: 24px;
}
.mint-tab-item{
  padding: 0px;
}
.mint-tab-item-icon{
  margin: 10px auto;
}
#homebar a:first-child{
  color: #ea4d30;
}
#homebar a{
  border-right: 1px solid #e4e4e4;
}
#homebar a:last-child{
  border-right: none;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background: none;
  color: #74412e;
}
#moresee{
  position: fixed;;
  right: 0px;
  bottom: 104px;
  background: url(../assets/img/moreListbck.png) no-repeat no-repeat center;
  font-size: 24px;
  width: 190px;
  height: 255px;
}
#moresee a{
  width: 190px;
  color: #fff;
}
#moresee ul li{
  height: 82px;
  line-height: 82px;
  text-align: center;
}
#homebar .mint-tab-item-icon > *{
  width: auto;
  height: auto;
}
</style>
