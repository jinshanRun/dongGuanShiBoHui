<template>
    <div class="foodcultureDetails">
      <div class="foodcultureDetails-banner" ><img src="../assets/img/foodculturebanner.png" alt=""></div>
      <div class="foodcultureDetails-content">
      <p class="foodcultureDetailsp"><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>食文化</p>
       <div class="fcDilxq">
         <p class="foodculture-list-title">{{foodsIdList.cultureTitle}}</p>
         <p class="foodculture-list-time">{{foodsIdList.releaseTime}} <span class="item-list-source"> 来源：{{foodsIdList.source}}</span></p>
        <div class="ql-snow ql-editor" v-html="foodsIdList.content"></div>
       </div>

      </div>
         <div class="h40"></div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  components: {
  },
  data() {
    return {
      foodsIdList: {},
      uuid: this.$route.query.uuid
    };
  },
  methods: {
    // 食文化详细信息
    wacthFoodsxqlist(){
       this.$http.get("/cultureapi/cultureItem/"+this.uuid)
      .then(res => {
        this.foodsIdList = res.data.data
         // eslint-disable-next-line no-console
         console.log(this.foodsIdList)
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
  },
  mounted() {
    this.wacthFoodsxqlist()
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
    color: #999999;

}
.foodcultureDetails {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &-banner{
    img{
      width: 100%;
    }
  }
  &-content{
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 40px;
      overflow: hidden;
  }
}
.fcDilxq{
  border: 1px solid #f7f7f7;
  padding:20px;
  margin-top: 20px;
  text-align: center;
}
 .foodculture-list-title {
            // width: 300px;
            height: 24px;
            color: #333333;
            font-size: 18px;
            margin: 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
          }
 .foodculture-list-time{
            font-size: 14px;
            color:#999999;
            height: 54px;
            line-height: 54px;
            
          }
.item-list-source{
              margin-left: 60px;
            }
.foodcultureDetailsp{
    font-size: 12px;
    color: #999999;
    margin-top: 5px;
    img{
      margin-right: 10px;
    }
}
.fcillist{
  font-size: 16px;
  line-height: 30px;
  color: #666666;
}
// 战略合作伙伴
.zhanhezuo,.hezuo{
  width: 1200px;
  margin: 0 auto;
}
.h40{
  height: 40px;
}
.fcDilxq .ql-snow{
  font-size: 14px;
}
</style>
