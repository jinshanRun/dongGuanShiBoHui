<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header title="新闻中心" fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>
      <!-- 新闻列表 -->
  <div class="mobileNewsList">
  <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="false"
      infinite-scroll-distance="60" >
    <li v-for="(item,index) in newsList" :key="index" @click="wacthNewsxq(item)">
       <div class="itemimg"><img :src="item.imgUrl" alt=""></div>
      <div class="newsListtxt">
        <p class="newsListtitle">{{item.title}}</p>
        <div class="newsListCon">{{item.summary}} <span  @click="wacthNewsxq(item)">详情</span> </div>
      </div>
    </li>
     <!--底部判断是加载图标还是提示“全部加载”-->
    <li class="more_loading" v-show="!queryLoading">
      <mt-spinner type="triple-bounce" color="#00ccff" :size="60" v-show="moreLoading&&!allLoaded"></mt-spinner>
      <span v-show="allLoaded" style="display: block"><div style="text-align: center">---------------------已加载全部---------------------</div></span>
    </li>
  </ul>
</div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

export default {
    data(){
        return{
          //初始化无限加载相关参数
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            page: 0,
            size: 10,
            totalNum: 0,
            // pageNum: 1,
            newsList:[],
        }
    },
    mounted(){
       // this.wacthNewsxqlistmore(this.page,this.size)
    },
    methods:{
        // 新闻列表
        loadMore(){
            // this.moreLoading = !this.queryLoading;
            this.$http.get("/articleapi/pageList?page="+this.page +"&size="+this.size).then(res=>{
                if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                    this.newsList = this.newsList.concat(res.data.data.content);
                    this.page = this.page+1;
                    this.allLoaded = this.newsList.length == res.data.data.totalElements;
                    // console.log("数据长度为："+this.newsList.length);
                    // console.log("返回的数据长度为："+res.data.data.totalElements);
                    // console.log("是为真或假==》"+this.allLoaded)
                }
            });
        },

     // 点击进入新闻详情页
     wacthNewsxq(item){
      this.$router.push({path:'mobilenewsdetails',query:{uuid: item.uuid}})
    },



    }
}
</script>
<style scoped>
.head{
    height: 88px;
}
.itemimg img{
  float: left;
  width: 230px;
  height: 130px;
}
.newsListtxt{
  width: 432px;
  float: left;
  height: 130px;
  margin-left: 26px;
}
 .mobileNewsList {
  height:1100px;
  padding: 0 30px;
  margin-bottom: 20px;
  margin-top:60px;
  /*overflow: hidden;*/
 }
 .mobileNewsList ul li{
  height: 130px;
  margin-bottom: 30px;
 }
 .newsListtitle{
     font-size: 26px;
     font-weight: 600;
     text-align: center;
     color: #333333;
     overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
 }
 .newsListCon{
     font-size: 24px;
     color: #666666;
     margin-top: 10px;
     /* height: 60px; */
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
     overflow: hidden;
 }
 .ql-editor{
     font-size: 32px;
     color: #747474;
 }
</style>
