<template>
    <div class="expo">
      <div class="expo-banner"><img src="../assets/img/liveroombck.png" alt=""></div>
      <div class="expo-content">
     <p style="font-size: 12px;
        color: #b6b6b6;
        margin-top: 5px;"><img src="../assets/img/lication.png" alt="" style="margin-right: 10px;
        margin-top: 2px;">当前位置：<a href="/">首页</a>>网上展厅><span>网红直播</span></p>
          <div class="expo-content-left">
              <ul class="expo-content-list">
                  <li><router-link :to="{name:'exhins'}">展会介绍</router-link></li>
                  <li><router-link :to="{name:'xsztVideo'}">线上展厅</router-link></li>
                  <li><router-link :to="{name:'yunshangVideo'}">云上展厅</router-link></li>
                  <li>网红直播</li>
              </ul>
          </div>
          <div class="expo-content-right">
              <ul >
                <li v-for="(item,i) in liveList" :key="i" class="liveli">
                  <img :src="item.imageUrl" alt="">
                  <div class="liveRemind">
                    <span class="liveRemind-title">{{item.title}}</span>
                    <span class="liveRemind-timetitle">开播时间 </span>
                    <span class="liveRemind-time">{{item.showTime}}</span>
<!--                    <a :href=item.url target="_blank" class="liveRemind-join" v-show="Date.parse(item.showTimeItem.replace(/-/g,'/')) < liveNowDate" >进入直播间</a>-->
<!--                    <a class="notLive" v-show="Date.parse(item.showTimeItem.replace(/-/g,'/')) > liveNowDate" >暂未开始</a>-->
                    <a :href=item.url target="_blank" class="liveRemind-join" v-show="item.liveIng" >进入直播间</a>
                    <a class="notLive" v-show="item.liveStart" >暂未开始</a>
                    <a class="notLive" v-show="item.liveEnd" >直播已结束</a>
                  </div>
                </li>
              </ul>
          </div>
      </div>
        <!-- 分页 -->
      <div class="pag">
        <!-- <p>@size-change="sizeChangeHandle"</p> -->
        <el-pagination
        @current-change="currentChangeHandle"
        background
        :page-size="size"
        layout="prev, pager, next"
        :total="countTotal">
      </el-pagination>
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
      liveNowDate:new Date(),
      liveFlag: true,
      liveList: [{
          imageUrl:require('@/assets/img/livewaiting.png'),
          title:'',
          showTime:null,
          url:'',
      }],
      page: 0,
      size: 3,
      // 总数
      countTotal: 0,
      // 总页数
      totalPage: 0
    };
  },
  methods: {
    // 获取直播列表
    liveListPon(){
      this.$http.get('/liveapi/pageList?page='+this.page+'&size='+this.size)
      .then(res =>{
        if(res.data.returnCode == true && res.data.returnMsg == "OK") {
            this.liveList = res.data.data.content;
            this.countTotal = res.data.data.totalElements;
            this.totalPage = res.data.data.totalPages;
        }
      }).catch(err =>{
        // eslint-disable-next-line no-console
        console.log(err)
      })
    },
    // 分页
    currentChangeHandle(val){
      this.page = val-1
      this.liveListPon()
    },
  },
  mounted() {
    this.liveListPon()
  },
  watch: {

  }
};
</script>

<style lang="scss" scoped>
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
    color: #b6b6b6;
}
.expo {
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
      &-left{
          float: left;
          width: 200px;
      }
     &-left p a{
       color: #b6b6b6;
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
      &-list li:nth-child(4){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          margin-top: 18px;
          float: left;
          width: 900px;
          padding: 18px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
          img{
            float: left;
          }
          ul{
            overflow: hidden;
            li{
              width: 900px;
            }
          }
      }


  }
}
.liveRemind{
  // width: 335px;
  padding:32px 0px;
  margin-left: 25px;
  float: left;
  span{
    display: block;
  }
  &-title{
    font-size: 24px;
    color: #333333;
    height: 60px;

  }
  &-timetitle{
    font-size: 20px;
    color: #999999;
    height: 60px;
    line-height: 50px;
  }
  &-time{
    font-size: 20px;
    color: #808080;
    height: 70px;
  }
  &-join{
    display: block;
    width: 160px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #ffffff!important;
    background: #f9680b;
  }
}
.liveli{
   height: 338px;
   margin-bottom: 30px;
}
.liveli img{
  width: 600px;
  height: 338px;
}
.h40{
  height: 40px;
}
.pag{
  width: 420px;
  margin: 0 auto;
  text-align: center;
}
.notLive{
    display: block;
    width: 160px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #ffffff!important;
    background:#f4c4a6;
}

</style>
