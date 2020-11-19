<template>
    <div class="goodfood2">
      <div class="goodfood2-banner" ><img src="../assets/img/goodfoodbanner.png" alt=""></div>
      <div class="goodfood2-content">
          <div class="goodfood2-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>获奖企业</p>
              <ul class="goodfood2-content-list">
                  <li><router-link :to="{name:'goodfood1'}">评选委员会</router-link></li>
                  <li><router-link :to="{name:'goodfood2'}">评选标准</router-link></li>
                  <li>获奖企业</li>
              </ul>
          </div>
          <div class="goodfood2-content-right">
              <p>中华传统好食品企业获奖名单</p>
              <div class="goodfood2-content-xq">
                <div class="goodfood2cont">
                   <span>2019年</span> <br/>
                  一、乌兰察布市集宁纳尔松酿业有限公司的纳尔松牌纳尔松酒产品。<br/>
                  二、吉林省玉竹源满族食品有限公司的满尊牌满族糕点产品。<br/>
                  三、都兰县现代农业产业园的柴达木牌枸杞系列产品。<br/>
                  四、贵州省仁怀市茅台镇台福将酒业有限公司生产的台福将牌白酒。<br/>
                  五、广东省云浮市新兴县广华食品有限公司生产的广华牌排米粉。<br/>
                  六、辽宁省本溪市双花熟食品有限公司生产的双花牌系列熟食制品。<br/>
                  七、山东宏业食品有限公司生产的宏业牌鲅鱼水饺产品。<br/>
                  <span>2018年</span> <br/>
                  八、山东鲁花集团有限公司生产的鲁花牌5S压榨花生油产品。<br/>
                  九、山东鲁花生物科技有限公司生产的自然鲜牌酱油产品。<br/>
                  十、广州市致美斋酱园有限公司生产的致美斋牌醋类产品。<br/>
                  十一、江苏伊例家食品有限公司生产的伊例家牌酱油和酱料产品。<br/>
                  十二、西安市德懋恭食品商店生产的水晶饼系列产品。<br/>
                  十三、河北金相府酒业有限公司生产的相府枣酒产品。<br/>
                  十四、福建光泽德顺酒业有限公司生产的闽源春白酒和蛇系列酒产品。<br/>
                  十五、烟台双塔食品股份有限公司生产的双塔粉丝产品。<br/>
                  十六、山东东阿百年堂阿胶生物制品股份有限公司生产的百年堂牌阿胶产品。 <br/> 
                  十七、青岛老尹家海参股份有限公司生产的老尹家干海参产品。<br/>
                  十八、潍坊风筝面粉有限责任公司生产的柳叶牌挂面产品。<br/>
                  十九、山东东阿酒厂（有限责任公司）生产的琉璃井牌阿胶酒产品。<br/>
                  二十、济南居易酿造有限公司生产的富硒酱油产品。<br/>
                  二十一、保定赛行阿胶有限公司生产的胶类产品。<br/>
                  二十二、东阿福禄堂阿胶系列产品有限公司生产的阿胶及其制品。<br/>
                  二十三、辽宁省东港市五四农场生产的稻花香米及月光米系列产品。<br/>
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
 .el-table .warning-row {
    background: oldlace;
  }
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
}
.goodfood2 {
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
      &-list li:nth-child(3){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          margin-top: 40px;
          float: left;
          width: 870px;
          padding: 0 60px;
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
  }
}
.goodfood2cont{
  line-height: 40px;
}
.goodfood2cont span{
  font-size: 16px;
  color: #7692ff;
  
}
.el-table thead.is-group th{
  background: #f5f9fe!important;
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