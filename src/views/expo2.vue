<template>
    <div class="expo">
      <div class="expo-banner" v-loading="loading"><img src="../assets/img/expobanner.png" alt=""></div>
      <div class="expo-content">
     <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>走进博览会><span>组织机构</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                  <li><router-link :to="{name:'expo1'}">展会概括</router-link></li>
                  <li>组织机构</li>
                  <li><router-link :to="{name:'expo3'}">联系我们</router-link></li>
              </ul>
          </div>
          <div class="expo-content-right">
              <div class="expo-content-xq">
               <div>
                 <p>指导单位：</p>
                 <p>商务部、国家国资委、有关部委</p>
               </div>
               <div>
                 <p>支持单位：</p>
                 <p>中国轻工业联合会、广东省人民政府</p>
               </div>
                <div>
                 <p>主办单位：</p>
                 <p>中国食品报社、商务部投资促进事务局、东莞市人民政府</p>
               </div>
                <div>
                 <p>承办单位：</p>
                 <p>中国国际贸促会商业行业分会、中国食品报社信息中心、东莞市商务局</p>
               </div>
                <div>
                 <p>协办单位：</p>
                 <p>中青联盟大数据研究（北京）有限公司、北京高斯智慧科技有限公司、四川柏视文化传媒有限公司</p>
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
          margin-top: 18px;
          float: left;
          width: 900px;
          padding: 24px 40px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
      }
      &-right p{
          color:#333333;
          font-size: 16px;
          width: 900px;
          height: 68px;
          line-height: 68px;
          text-align: left;

      }
       &-xq{
              font-size: 16px;
              overflow: hidden;
              height: 400px;
              div p:first-child{
                font-weight: 600;
              }
          }
  }
}
.expo-content-xq{
  font-size: 18px;
}
.expo-content-xq div{
  margin-bottom: 20px;
}
.expo-content-xq div p{
  height: 28px;
  line-height: 28px;
  color: #666666;
}
.expo-content-xq div p:first-child{
  color: #333333;
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