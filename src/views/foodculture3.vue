<template>
    <div class="foodculture">
      <div class="foodculture-banner"><img src="../assets/img/foodculturebanner.png" alt=""></div>
      <div class="foodculture-content">
      <p class="foodculturep"><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>食文化><span>酒文化</span></p>
          <div class="foodculture-content-left">
              <ul class="foodculture-content-list">
                  <li><router-link :to="{name: 'foodculture1'}">食文化</router-link></li>
                  <li><router-link :to="{name: 'foodculture2'}">茶文化</router-link></li>
                  <li>酒文化</li>
                  <li><router-link :to="{name: 'foodculture4'}">广东特产</router-link></li>
              </ul>
          </div>
          <div class="foodculture-content-right">
          <div class="foodculture-list" v-for="(item,index) in newsList" :key="index" @click="wacthFoodsxq(item)">
            <div class="foodculture-img" ><img :src="item.imageUrl" alt=""></div>
            <div style="float:left;margin-left:20px;width:100%">
                <p class="foodculture-list-title">{{item.cultureTitle}}</p >
                <p class="foodculture-list-time">{{item.releaseTime}}<span class="item-list-source"> 来源：{{item.source}}</span></p >
                <p class="foodculture-list-content">{{item.summary}}</p >
            </div>
            <div class="foodculture-list-more">
              <router-link
                class="text-decoration"
                :to="{ name: 'foodcultureDetails3', params: { id: item.Id }}"
              >
                <!-- <img src="../assets/img/sanjiao.png" /> -->
                <span @click="wacthFoodsxq(item)">详情>></span>
              </router-link>
            </div>
          </div>
          </div>

      </div>
        <div class="pag">
            <el-pagination
                    @current-change="currentChangeHandle"
                    background
                    layout="prev, pager, next"
                    :page-size="size"
                    :total="this.totalCount">
            </el-pagination>
        </div>
         <div class="h40"></div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  name: "news",
  components: {
  },
  data() {
    return {
      loading: false,
      newsList: [],
      newstype: 1,
        page:0,
        size:5,
        totalCount:0,
        totalPage:0,
    };
  },
  methods: {
    //酒文化列表
      wineCulturePageList(){
          this.$http.get('/cultureapi/windCulturePageList?page='+this.page +"&size="+this.size).then(res => {
              if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                  this.newsList = res.data.data.content;
                  this.totalCount = res.data.data.totalElements;
                  this.totalPage = res.data.data.totalPages;
              }
          })
      },
    //食文化详情，通用接口
      cultureItem(cultureUuid) {
          this.$http.get('/cultureapi/cultureItem/' + cultureUuid).then( res =>{
            this.newsList = res.data.data;
          }).catch(error =>{
              error.constructor
          });
      },
      currentChangeHandle(val){
          this.page = val -1;
          this.wineCulturePageList();
      },
   // 点击进入酒文化详情页
     wacthFoodsxq(item){
      this.$router.push({path:'foodcultureDetails3',query:{uuid: item.cultureInfoUuid}})
    },
  },
  mounted() {
    this.wineCulturePageList();
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
.foodculture {
  width: 100%;
  // height: 100%;
  position: relative;
  overflow: hidden;
   &-img{
  //  width: 213px;
   height: 160px;
   img{
     width: 213px;
     height: 160px;
   }
 }

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
      margin-bottom: 40px;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
       &-right{
          float: left;
          width: 998px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
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
          a{
            color: #333333;
          }
      }
      &-list li:nth-child(3){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
  }
}
.foodculturep{
    font-size: 12px;
    color: #999999;
}
.foodculturep img{
       margin-top: 10px;
       margin-right: 10px;
}
   .foodculture-list {
          width: 984px;
          height: 156px;
          display: flex;
          margin: 30px 0 0 20px;

          // &:hover {
          //   border: 1px solid #fff;
          //   box-shadow: 0 0 5px 2px #bfd3e0;
          // }
          &-img {
            width: 240px;
            height: 136px;
            float: left;
            background-color: #cecece;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-origin: content-box;
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
            color:#999999;
            height: 34px;
            line-height: 34px;
             .item-list-source{
            margin-left: 35px;
            }
          }

          &-content {
            // width: 273px;
            height: 100px;
            font-size: 14px;
            line-height: 26px;
            color: #333333;

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

.foodculture-content-xq{
  font-size: 18px;
}
.foodculture-content-xq div{
  margin-bottom: 20px;
}
.foodculture-content-xq div p{
  height: 28px;
  line-height: 28px;
  font-weight: 580;
  color: #666666;
}
.foodculture-content-xq div p:first-child{
  color: #7692ff;
}
// 战略合作伙伴
.zhanhezuo,.hezuo{
  width: 1200px;
  margin: 0 auto;
}
.h40{
  height: 40px;
}
.pag{
    width: 420px;
    margin: 60px auto;
    text-align: center;
}
</style>
