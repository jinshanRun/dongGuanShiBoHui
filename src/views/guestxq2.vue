<template>
    <div class="meetarr">
      <div class="meetarr-banner" v-loading="loading"><img src="../assets/img/guestbanner.png" alt=""></div>
      <div class="meetarr-content">
         <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a> > 嘉宾详情</p>
         <div class="guestxqlist">
           <img src="../assets/img/guest2.png" alt="">
           <div>
             <span>王健林</span>
             <p>万达集团创办人兼董事长</p>
             <div>
            2009年中国经济十年商业领袖。2011年福布斯中国慈善榜第1位，成为中国首善。2013年福布斯中国富豪榜，王健林以净资产860亿人民币问鼎中国首富。2014年彭博亿万富翁指数中，王健林净资产达到人民币1543亿元，亚洲第三。2014年福布斯中国慈善榜第1位。2015年福布斯发布全球富豪榜，王健林以242亿美元财富成为中国内地首富。2015年胡润发布全球华人富豪榜，王健林以2600亿财富首超李嘉诚成全球华人首富。
             </div>
           </div>
         </div>
      </div>
         <div class="h30"></div>
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
.h30{
  height: 30px;
}
.h40{
  height: 40px;
  }
.meetarr {
  width: 100%;
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
       p{
        font-size: 12px;
        color: #999999;
        margin-top: 20px;
        img{
          margin-right: 10px;
        }
      }
  }
}
.guestxqlist{
  margin-top: 20px;
  width: 1200px;
}
.guestxqlist img{
  float: left;
}
.guestxqlist  div{
  float: left;
  margin-left: 40px;
  font-size: 18px;
}
.guestxqlist  div span{
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  background: #0071fc;
  color: #ffffff;
}
.guestxqlist  div p{
  width: 405px;
  height: 30px;
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 20px;
}
.guestxqlist  div div{
  font-size: 14px;
  color: #666666;
  width: 405px;
  line-height: 30px;
  margin-left: 0px;
}
 .meetarr-content-list li p{
        font-size: 18px;
        color: #5f7ef5;
        font-weight: 580;
      }
 .meetarr-content-list li div{
        background: url(../assets/img/meetl.png) no-repeat no-repeat left;
        width: 184px;
        height: 60px;
        position: absolute;
        left:10px;
        bottom:15px;
      }
 .meetarr-content-list li div p{
        font-size: 14px;
        color: #666666;
        position: absolute;
        left:18px;
        bottom:-0px;
      }
       .meetarr-content-list li div p img{
         margin-left: 10px;
         margin-bottom: -2px;
      }
      .meetshouce{
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #5173f5;
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
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