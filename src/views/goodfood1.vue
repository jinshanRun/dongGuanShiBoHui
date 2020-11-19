<template>
    <div class="kunming">
      <div class="kunming-banner" ><img src="../assets/img/goodfoodbanner.png" alt=""></div>
      <div class="kunming-content">
          <div class="kunming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>评选委员会</p>
              <ul class="kunming-content-list">
                  <li>评选委员会</li>
                  <li><router-link :to="{name: 'goodfood2'}">评选标准</router-link></li>
                  <li><router-link :to="{name:'goodfood3'}">获奖企业</router-link></li>
              </ul>
          </div>
          <div class="kunming-content-right">
              <p>中华传统好食品专家委员会主要工作人员</p>
              <div class="kunming-content-xq">
                 <div style="float:left;width:130px;font-weight: bold;">专家委员会成员：</div>
                 <div style="float:left">
                   <span>范蓓</span><br/>
                   <span>单吉浩</span><br/>
                   <span>徐坚</span><br/>
                   <span>萧东荣</span><br/>
                   <span>吴疆</span>
                   <div class="h10"></div>
                 </div>
                 
                 <div style="float:left;width:130px;font-weight: bold;text-align: right;">办公室主任：</div>
                 <div style="float:left;">洪捷</div>
                 <div style="float:left;width:130px;font-weight: bold;text-align: right; margin-top:10px">办公室副主任：</div>
                 <div style="float:left;margin-top:10px">
                   <span>乔珍珍</span><br/>
                   <span>李伟</span></div>

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
}
.h10{
  height: 10px;
}
.kunming {
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
      height: 700px;
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
      &-left p{
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
      }
      &-left p img{
        margin-right: 10px;
        margin-top: 2px;
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
          cursor: pointer;
          a{
            color: #333333;
          }
      }
      &-list li:first-child{
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width:184px
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
          font-weight: 600;

      }
       &-xq{
              font-size: 16px;
              line-height: 28px;
              overflow: hidden;
              width: 200px;
          }
  }
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