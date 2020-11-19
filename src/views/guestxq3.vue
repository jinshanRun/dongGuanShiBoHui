<template>
    <div class="meetarr">
      <div class="meetarr-banner" v-loading="loading"><img src="../assets/img/guestbanner.png" alt=""></div>
      <div class="meetarr-content">
         <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a> > 嘉宾详情</p>
         <div class="guestxqlist">
           <img src="../assets/img/guest3.png" alt="">
           <div>
             <span>任正非</span>
             <p>华为技术有限公司主要创始人兼总裁</p>
             <div>
              2019年4月，任正非上榜美国《时代》杂志（Time）2019年度全球百位最具影响力人物榜单。早在7年前，任正非就登上了《财富》“中国最具影响力的商界领袖”榜单，影响力排名第一。
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