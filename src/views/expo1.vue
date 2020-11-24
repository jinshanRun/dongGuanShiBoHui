<template>
    <div class="expo">
      <div class="expo-banner" v-loading="loading"><img src="../assets/img/expobanner.png" alt=""></div>
      <div class="expo-content">
     <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>走进博览会><span>展会概况</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                  <li>展会概况</li>
                  <li><router-link :to="{name:'expo2'}">组织机构</router-link></li>
                  <li><router-link :to="{name:'expo3'}">联系我们</router-link></li>
              </ul>
          </div>
          <div class="expo-content-right">
              <p style="font-weight:600">中国（大湾区）进出口食品商洽会暨首届东莞年货采购节</p>
              <div class="expo-content-xq">
               <div>
                 <p>活动主题：</p>
                 <p>荟集中外食品 融合行业投资  共享美好生活</p>
               </div>
               <div>
                 <p>展会时间：</p>
                 <p>2021年1月28日-31日</p>
               </div>
               <div>
                 <p>活动宗旨：</p>
                 <p> 在东莞市举办“中国（大湾区）进出口食品商洽会暨首届东莞年货采购节”，对于助力大湾区建设，加快食品经济与商贸流通双轮驱动，推动食品国内外交易、行业经济高速发展和群众春节年货保障与文化交流等都具有十分重要的意义。<br/>
                   活动共设置“食品行业暨跨境电商投资高峰论坛”、“进出口高质量食品采购商洽会”、“进出口食品展览展销”、“首届东莞年货采购节”等板块。商洽大会主要以数字驱动和云端展览为主，辅以线下展厅，汇聚大批进出口食品企业和世界各地美好食品、食材，为中国进出口食品行业和企业在十四个五年规划周期，开篇布局好起步。推动进出口食品企业拥抱新变化，孕育新商机！
                 </p>
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
      loading: true,
      newsList: [],
      newstype: 1
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$http.get(`News?type=${this.newstype}&num=6`)
        .then(response => {
          //console.log(response);
          this.newsList = response.data;
          this.loading = false;
          //window.console.log(this.newsList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  },
  mounted() {
    this.loadData();
  },
  watch: {
    newstype(type) {
      window.console.log(type);
      this.loadData();
    }
  }
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
      height: 600px;
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
      p{
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
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
          margin-top: 26px;
          float: left;
          width: 900px;
          padding: 0 40px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
      }
      &-right p{
     color: #333333;
    font-size: 16px;
    width: 900px;
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
// 战略合作伙伴
.zhanhezuo,.hezuo{
  width: 1200px;
  margin: 0 auto;
}
.h40{
  height: 40px;
}
</style>