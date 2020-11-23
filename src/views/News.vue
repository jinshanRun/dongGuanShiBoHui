<template>
  <div class="news">
    <!-- <banner title="" /> -->
    <div><img src="../assets/img/newsBanner.png" alt="" style="width:100%"></div>
    <div class="h20"></div>
    <div class="news-section" v-loading="loading">
      <div class="news-section-content">
        <!-- <div class="content-nav">
          <div
            class="content-nav-btn"
            :class="{'content-nav-active':newstype == 1}"
            @click="newstype = 1"
          >
            <span>公司新闻</span>
          </div>
          <div
            class="content-nav-btn"
            :class="{'content-nav-active':newstype == 2}"
            @click="newstype = 2 "
          >
            <span>行业动态</span>
          </div>
        </div> -->

        <div class="content-nav-item">
          <div class="news_left">
            <p><img src="../assets/img/lication.png" alt="">当前位置： <a href="/">首页</a> >新闻中心</p>
            <p style="margin-top:17px"><img src="../assets/img/locationbck.png" alt=""></p>
            <!-- <div><img src="../assets/img/newsadver.png" alt=""></div> -->
          </div>

          <div class="news_right" style="border:1px solid #f7f7f7;margin-top:36px">
          <div class="item-list" v-for="(item,index) in newsList" :key="index" @click="wacthNewsxq(item)">
            <div class="item-img"><img :src="item.imgUrl" alt=""></div>
            <div style="float:left;margin-left:20px" class="itemcontentList">
            <p class="item-list-title">{{item.title}}</p>
            <p class="item-list-time">{{item.releaseTime}} <span class="item-list-source"> 来源：{{item.source}}</span></p>
            <p class="item-list-content">{{item.summary}}</p>
            </div>
            <div class="item-list-more">
                <!-- <img src="../assets/img/sanjiao.png" /> -->
                <span @click="wacthNewsxq(item)">详情>></span>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 分页 -->
      <div class="pag">
        <!-- <p>@size-change="sizeChangeHandle"</p> -->
        <el-pagination
        @current-change="currentChangeHandle"
        background
        layout="prev, pager, next"
        :total="this.countTotal">
      </el-pagination>
      </div>
   <div class="h40"></div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  name: "news",
  components: {
    // Banner
  },
  data() {
    return {
      loading: true,
      newstype: 1,
      page: 0,
      size: 10,
      newsList: {},
      // 总数
      countTotal: 0,
      // 总页数
      totalPage: 0
    };
  },
  methods: {
    // 新闻列表
    wacthNewsxqlistmore(page,size){
       this.$http.get("/articleapi/pageList?page="+page+"&size="+size)
      .then(res => {
        this.newsList = res.data.data.content,
        this.totalPage = res.data.data.totalPages,
        this.countTotal = res.data.data.totalElements,
         // eslint-disable-next-line no-console
         console.log(this.newsList)
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },

    // 点击进入新闻详情页
     wacthNewsxq(item){
      this.$router.push({path:'newsdetails',query:{uuid: item.uuid}})
    },
     // 分页
    currentChangeHandle(val){
      this.page = val-1
      this.wacthNewsxqlistmore(this.page,this.size)
      // console.log("jjjjjjjjjjjjdiiiiiiiiiiif"+val)
    },
  },

  mounted() {
     this.loading = false;
    this.wacthNewsxqlistmore(this.page,this.size)
  },
  watch: {
    newstype(type) {
      window.console.log(type);

    }
  }
};
</script>

<style lang="scss" scoped>
*,a {
  margin: 0;
  padding: 0;
}
.h60 {
  height: 60px;
}
.h40 {
  height: 40px;
}
.h20{
  height: 20px;
}
.h30{
  height: 30px;
}
.h25{
  height: 25px;
}
.news {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &-section {
    width: 100%;
    //height: 1600px;

    &-content {
      width: 1200px;
      //height: 1600px;
      margin: 0 auto;
      background-color: #fff;

      .content-nav {
        width: 400px;
        height: 55px;
        margin: 0 auto;
        display: flex;
        //justify-content: center;
        align-items: center;
        position: relative;
        bottom: 30px;
        border: 1px solid red;

        &-btn {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e4e4e4;
          transition: all 0.2s;
        }

        .content-nav-active {
          background-color: red;
          color: #fff;
        }
      }
.news_left  {
  float: left;
}
.news_left p{
  font-size: 12px;
  color: #b6b6b6;
}
.news_left p img{
  margin-right: 20px;
  margin-top: 2px;
}
.news_left p a{
   color: #b6b6b6;
}
      .content-nav-item {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        //border: 1px solid blue;

        .item-list {
          width: 972px;
          display: flex;
          margin: 30px 0 30px 20px;

          // &:hover {
          //   border: 1px solid #fff;
          //   box-shadow: 0 0 5px 2px #bfd3e0;
          // }
          .item-img {
            // width: 213px;
            height: 160px;
            float: left;
            background-color: #cecece;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-origin: content-box;
            img{
              width: 213px;
              height: 160px;
            }
          }

          &-title {
            // width: 300px;
            height: 24px;
            color: #585858;
            font-size: 16px;
            margin: 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &-time{
            font-size: 12px;
            color:#b6b6b6;
            height: 34px;
            line-height: 34px;
          }
          &-source{
            margin-left: 22px;
          }
          &-content {
            width: 100%;
            height: 100px;
            font-size: 14px;
            line-height: 26px;
            color: 333333;

            // 文本长度处理 begin
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            white-space: normal !important;
            word-wrap: break-word;
            // 文本长度处理 ending
          }

          &-more {
            width: 130px;
            padding-top: 128px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            float: right;

            img {
              width: 12px;
              height: 12px;
            }
            span {
              font-size: 12px;
              color: #6f89f6;
              padding: 0 5px;
            }
          }
        }
        .itemcontentList{
          width: 100%;
          height: 160px;
        }
      }
    }
  }
  .text-decoration {
    text-decoration: none;
  }
}
.pag{
  width: 420px;
  margin: 60px auto;
  text-align: center;
}

</style>
