<template>
  <div class="NewsDetails">
    <!-- <banner img="../assets/img/bgtop.jpg" /> -->
    <div><img src="../assets/img/newsBanner.png" alt="" style="width:100%"></div>
    <div class="NewsDetails-adver">
        <!-- <div class="NewsDetails-adverleft"><img src="../assets/img/newsadver.png" alt=""></div>
        <div class="NewsDetails-adverright"><img src="../assets/img/newsadver.png" alt=""></div> -->
    <div class="NewsDetails-product">
      <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a> >  <router-link :to="{name: 'news'}">新闻中心</router-link>  >新闻详情</p>
      <div class="NewsDetails-product-content">
        <!-- <img v-lazy="imgserver+newsIdList.Img" alt /> -->
        <div class="product-title">{{newsIdList.title}}</div>
        <div class="product-time">{{newsIdList.releaseTime}}<span class="product-list-source">来源：{{newsIdList.source}}</span></div>
        <!-- <div v-html="newsIdList.content" class="product-content"></div> -->
        <div class="ql-snow ql-editor" v-html="newsIdList.content"></div>
      <div class="h40"></div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  name: "NewsDetails",
  components: {
    // Banner
  },
  data() {
    return {
      pid: 0,
      newsIdList: {},
      uuid: this.$route.query.uuid
    };
  },
  created() {
    // this.pid = this.$route.params.id;
    // this.pid = this.$route.params.id;
    // window.console.log(this.pid);
  },
  mounted() {
    this.wacthNewsxqlist();
  },
  methods: {
        // 新闻详细信息
    wacthNewsxqlist(){
       this.$http.get("/articleapi/articleItem/"+`${this.uuid}`)
      .then(res => {
        this.newsIdList = res.data.data
         // eslint-disable-next-line no-console
         console.log(this.newsIdList)
        //  console.log(this.uuid)
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.h40{
  height: 40px;
}
.NewsDetails {
  width: 100%;
  height: 100%;
  //overflow: hidden;
  &-adver{
    width: 100%;
    position: relative;
  }
  &-adverleft{
    position: absolute;
    left: 0px;
    top: 120px;
  }
   &-adverright{
    position: absolute;
    right: 0px;
    top: 120px;
  }
  &-product {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
     p{
        font-size: 12px;
        color: #999999;
        margin-top: 10px;
      a{
        color: #999999;
   }
      }
      
      img {
        margin-right: 10px;
        margin-top: 2px;
      }
    &-content {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 0;
      .product-title {
        width: 1100px;
        font-size: 18px;
        color: #333333;
        padding: 20px 0;
        text-align: center;
      }
      .product-content {
        font-weight: bolder;
        padding: 20px 0;
        width: 1100px;
        // text-align: center;
        font-size: 14px;
        line-height: 30px;
        color: #333333;
      }
      .product-content p img{
        display: block;
        margin: 0 auto;
      }
      .ql-editor{
        width: 100%;
      }
      .product-time{
        font-size: 14px;
        padding: 20px 0;
        width: 1100px;
        text-align: center;
        color: #999999;
      }
      .product-list-source{
        margin-left: 60px;
      }
    }
  }
}
</style>