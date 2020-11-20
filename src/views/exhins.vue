<template>
    <div class="expo">
      <div class="expo-banner" v-loading="loading"><img src="../assets/img/exhinsbanner.png" alt=""></div>
      <div class="expo-content">
     <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>网上展厅><span>展会介绍</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                  <li>展会介绍</li>
                  <li><router-link :to="{name:'xsztVideo'}">线上展厅</router-link></li>
                  <li><router-link :to="{name:'yunshangVideo'}">云上展厅</router-link></li>
                   <li><router-link :to="{name:'liveRoom'}">网红直播</router-link></li>
              </ul>
          </div>
          <div class="expo-content-right">
              <p style="font-weight:600">2020中国（东莞）食文化国际交流博览会</p>
              <div class="expo-content-xq">
               <div>
                 <p>活动主题：</p>
                 <p>加强食品文化交流，推进品质消费提档</p>
               </div>
               <div>
                 <p>展会时间：</p>
                 <p>2020年11月16日-22日</p>
               </div>
               <div>
                 <p>活动宗旨：</p>
                 <p> 以食品文化交流为重点和导向，以文化艺术为纽带，联动食品业与相关行业，以实现交流与互渗； 传播中国悠久厚重而又独具魅力的食品文化，以实现食品相关产业的软着陆；跟随“一带一路”战
略的文化交流的大繁荣，助推中国食品更多更好地走向全世界；通过“中华传统好食品”评价，保
护“中华传统好食品”的品质与声誉，加强《中华传统好食品评价通则》的落实力度，打造中国食
品的国家品牌，促进新时代中国食品产业升级发展</p>
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
  height: 100%;
  position: relative;
  overflow: hidden;

  &-banner{
   width: 100%;
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
          :hover{
            cursor: pointer;
          }
          a{
            color: #000;
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
          color:#333333;
          font-size: 18px;
          width: 900px;
          height: 68px;
          line-height: 68px;
          text-align: left;

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
  margin-bottom: 20px;
}
.expo-content-xq div p{
  height: 28px;
  line-height: 28px;
  color: #333333;
}
.expo-content-xq div p:first-child{
  color: #333333;
  font-weight: 600;
}
.h40{
  height: 40px;
}
</style>
