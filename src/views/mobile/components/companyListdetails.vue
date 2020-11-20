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
      <!-- 展商详情 -->
      <div class="comDetails">
        <div class="comDetailscontent">
            <!-- 企业名称 -->
            <div class="qiyetitle">{{this.headTitle}}</div>
            <!-- 视频 -->
            <div class="mobilevxq" ><video :src=this.companyListXq.videoUrl controls="controls" muted="muted"  poster="../assets/img/kaibanner.png"></video> </div>
           <div style="height:30px"></div>
            <!-- 企业介绍 -->
            <div class="zhengwen">
                <p class="comDetailsP"><img src="../assets/img/comlo.png" alt=""> 企业介绍</p>
                <p style="text-align:center;"></p>
               <div class="comDetailsCon">{{this.companyListXq.companyName}}{{this.companyListXq.companyIntroduce}}</div>
            </div>
            <div style="height:30px"></div>
            <!-- 活动图文 -->
            <div class="zhengwen" style="padding-bottom: 85px;">
                <p class="comDetailsP"><img src="../assets/img/comlo.png" alt=""> 活动图文</p>
                <div class="ql-snow ql-editor" v-html="companyListXq.content"></div>
                 <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>{{this.companyListXq.lookCount}}</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>{{this.companyListXq.likeCount}}</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>{{this.companyListXq.lookCount}}</span></li>
                   </ul>
               </div>
            </div>

      </div>

           <!-- 广告位 -->
           <div style="padding:30px"><img src="../assets/img/yiqingadver.png" alt=""></div>
           <!-- 热门推荐 -->
            <div class="hottuijian">
                <div class="hotcontent" v-for="(item,i) in hottuijianList" :key="i" @click="companyYnDetail(item.companyUuid)">
                    <div><span>热门推荐</span></div>
                    <div>
                        <p>{{item.companyName}}</p>
                        <!-- <p>发布时间：2020-10-30 11:01  <span style="margin-left:30px">来源：广东网</span></p> -->
                    </div>
               </div>
            </div>

    </div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    data(){
        return{
             headTitle: '',
             companyListXq:{},
             uuid: this.$route.query.uuid,
             hottuijianList: null,
            page:0,
            size:3
        }
    },
    mounted(){
       this.hotcompanyListpart(this.$route.query.uuid);
       this.hottuijianLists()
    },
    methods:{
         // 展商详细信息
    hotcompanyListpart(uuid){
       this.$http.get("/exhibitioncompanyapi/companyItem/"+ uuid)
      .then(res => {
        this.companyListXq = res.data.data
        this.headTitle = this.companyListXq.companyName
        this.hottuijianLists(this.companyListXq.areaUuid)
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },

    // 热门推荐
    hottuijianLists(uid){
         this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                this.hottuijianList = res.data.data.content;
            }
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        // 点击进入热门推荐展商详情页
     companyYnDetail(myuid){
        this.hotcompanyListpart(myuid)
        document.documentElement.scrollTop = 0
        },
    // 点赞数
    zanMore(uuid){
      this.$http.post('/exhibitioncompanyapi/companyLike/'+ uuid );
    }

    }
}
</script>
<style scoped>
.head{
    height: 88px;
}
.mobilevxq{
    width: 640px;
    margin: 0px auto;
}
.mobilevxq video{
    width: 100%;
}
 .comDetails {
  /* padding: 0 30px; */
  margin-bottom: 30px;
  margin-top: 59px;
 }
 .qiyetitle{
     /* background: url(../assets/img/mcompanybck.png) no-repeat no-repeat center center; */
     height: 90px;
     line-height: 90px;
     font-size: 32px;
     text-align: center;
     color: #333333;
     font-weight: bold;
 }
 .zhengwen{
     padding: 0px 30px;
     padding-bottom: 25px;
     background: #f9f9f9;
 }
 .comDetailscontent{
   position: relative;
 }
 .mobileliulan{
     background: #fff;
     position: absolute;
     right: 30px;
     bottom: 30px;
     font-size: 20px;
     color: #999999;
 }
 .mobileliulan ul li{
     float: left;
     padding-right: 16px;
 }
.mobileliulan ul li img{
     margin-right: 4px;
 }
 .comDetailsP{
   font-size: 40px;
   color: #0071fc;
   height: 100px;
   line-height: 100px;
 }
 .comDetailsCon{
     font-size: 28px;
     color: #333333;
 }

.zhengwen .ql-editor{
     font-size: 32px;
     color: #333333;
 }

 /* 热门推荐 */
 .hottuijian{
     padding:30px 30px 0 30px;
     background: #f9f9f9;
 }
  .hotcontent {
   overflow: hidden;
  }
 .hotcontent div:first-child{
   width: 108px;
   height: 108px;
   float: left;
 }
 .hotcontent div:first-child span{
   width:94px;
   text-align: center;
   background: #d81e06;
   color: #fff;
   font-size: 20px;
   border-radius: 5px;
   margin-top: 5px;
 }
 .hotcontent div:nth-child(2){
     width: 582px;
     float: left;
     border-bottom: 1px solid #eeeeee;
     padding-bottom: 20px;
 }
  .hotcontent div:nth-child(2) p:first-child{
   font-size: 28px;
   margin-left: 20px;
 }
 .hotcontent div:nth-child(2) p:nth-child(2){
   font-size: 18px;
   color: #666666;
   margin-top: 10px;
 }
  .hottuijian div:last-child div:nth-child(2){
   border-bottom:none
 }
</style>
