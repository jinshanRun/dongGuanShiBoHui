<template>
    <div class="expo">
      <div class="expo-banner" v-loading="loading"><img src="../assets/img/exhibitionback.png" alt=""></div>
      <div class="expo-content">
    <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>展商服务><span>展馆走向</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                 <li><router-link :to="{name:'exhibitionHall1'}">展厅类别</router-link></li>
                  <li>展馆走向</li>
                  <li><a :href="url" target="_blank" style="width:184px;height:40px;display:block">招商手册</a></li>
                  <li><router-link :to="{name:'exhibitionForm4'}">参展申请</router-link></li>
              </ul>
          </div>
          <div class="expo-content-right">
              <p>展区分布及参馆路线</p>
              <div><img src="../assets/img/guideback.png" alt=""></div>
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
      url: "http://39.106.51.133:8091/shibohui/att2.pdf",
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
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
      p{
        font-size: 12px;
        color: #999999;
        margin-top: 14px;
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
      &-list li:nth-child(2){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          margin-top: 26px;
          float: left;
          width: 998px;
          border: 1px solid #f7f7f7;
      }
      &-right p{
     color: #333333;
    font-size: 18px;
    width: 998px;
    height: 65px;
    line-height: 65px;
    padding-left: 30px;
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
  height: 80px;
}
</style>
