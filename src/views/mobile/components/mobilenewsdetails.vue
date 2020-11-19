<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header title="新闻详情" fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>
      <!-- 新闻详情 -->
      <div class="Details">
        <div class="Detailscontent">
            <!-- <img v-lazy="imgserver+newsIdList.Img" alt /> -->
            <div class="Detailstitle">{{newsIdList.title}}</div>
            <div class="Detailstime">发布时间：{{newsIdList.releaseTime}}<span class="Detailssource">来源：{{newsIdList.source}}</span></div>
            <!-- <div v-html="newsIdList.content" class="product-content"></div> -->
            <div class="ql-snow ql-editor" v-html="newsIdList.content"></div>
        </div>
         <!-- 浏览量-->
            <div class="mobileliulan">
                <ul>
                    <li><img src="../assets/img/see.png" alt=""><span>{{this.newsIdList.readCount}}</span></li>
                    <li @click="newsWatchNum(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>{{this.newsIdList.likeCount}}</span></li>
                    <li><img src="../assets/img/share.png" alt=""><span>{{this.newsIdList.readCount}}</span></li>
                </ul>
            </div>
    </div>

        <!-- 广告位 -->
           <div style="padding:30px"><img src="../assets/img/yiqingadver.png" alt=""></div>
           <!-- 热门推荐 -->
            <div class="hottuijian">
                <div class="hotcontent" v-for="(item,i) in hottuijianList" :key="i" @click="companyYnDetail(item.uuid)">
                    <div><span>热门推荐</span></div>
                    <div>
                        <p>{{item.title}}</p>
                        <p>发布时间：{{item.createTime}} <span style="margin-left:30px">来源：{{item.source}}</span></p>
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
            newsIdList:{},
            uuid: this.$route.query.uuid,
            hottuijianList: null,
            page: 0,
            size: 5,
        }
    },
    mounted(){
       this.wacthNewsxqlist();
       this.hottuijianLists(this.page,this.size)
    },
    methods:{
        // 新闻详细信息
    wacthNewsxqlist(){
       this.$http.get("/articleapi/articleItem/"+`${this.uuid}`)
      .then(res => {
        this.newsIdList = res.data.data
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    // 热门推荐
    hottuijianLists(page,size){
         this.$http.get("/articleapi/articleRecommendPageList?page="+page+"&size="+size)
        .then(res => {
            if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                this.hottuijianList = res.data.data.content
            }
      })
      .catch( error =>{
        console.log(error)
      })
        },
        // 点击进入热门推荐新闻详情页
     companyYnDetail(uuid){
         this.uuid = uuid
        this.wacthNewsxqlist()
        window.scrollTo(0,0)
        // document.documentElement.scrollTop = 0
        },
    //  点赞数量
    newsWatchNum(){
        this.$http.post('/articleapi/likeArticle/'+this.uuid)
    }

    }
}
</script>
<style scoped>
#newsdetail{

}
.head{
    height: 88px;
}
 .Details {
  padding: 0 30px;
  padding-bottom: 85px;
  margin-top: 60px;
  border-bottom:1px solid #eeeeee;
  position: relative;
 }
 .Detailstitle{
     font-size: 32px;
     font-weight: 600;
     color: #333333;
 }
 .Detailstime{
     font-size: 24px;
     text-align: center;
     color:#999999;
     height: 90px;
     line-height: 90px;
 }
 .Detailssource{
     margin-left: 60px;
 }
 .ql-editor{
     font-size: 18px;
     color: #333333;
 }
 /* 热门推荐 */
 .hottuijian{
     padding:30px;
     background: #f9f9f9;
 }
  .hotcontent {
   overflow: hidden;
   padding-top: 16px;
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
     width: 581px;
     float: left;
     border-bottom: 1px solid #eeeeee;
     padding-bottom: 20px;
 }
  .hotcontent div:nth-child(2) p:first-child{
   font-size: 28px;
 }
 .hotcontent div:nth-child(2) p:nth-child(2){
   font-size: 18px;
   color: #666666;
   margin-top: 10px;
 }
 .hottuijian div:last-child div:nth-child(2){
   border-bottom:none
 }
 .mobileliulan{
     background: #f9f9f9;
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

</style>
