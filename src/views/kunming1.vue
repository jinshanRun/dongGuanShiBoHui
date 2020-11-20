<template>
    <div class="kunming">
      <div class="kunming-banner" ><img src="../assets/img/kunmingbanner.png" alt=""></div>
      <div class="kunming-content">
          <div class="kunming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>广东/东莞市情</p>
              <ul class="kunming-content-list">
                  <li>广东/东莞市情</li>
                  <li><router-link :to="{name:'kunming2'}">产业发展</router-link></li>
                  <li><router-link :to="{name:'kunming3'}">魅力东莞</router-link></li>
              </ul>
          </div>
          <div class="kunming-content-right">
              <p>东莞市情</p>
              <div class="kunming-content-xq">
                  东莞地处中国西南边陲、云贵高原中部。位于东经102°10′至103°40′，北纬24°23′至26°33′之间，东西最大横距152公里，南北纵距237.5公里，面积21011平方公里。是广东省的省会，全省的政治、经济、文化中心和交通通信枢纽，西南地区的中心城市之一，我国重要的旅游商贸城市。东莞区位优势突出，是我国面向东南亚。南亚开放的桥头堡。东莞地区属低纬高原山地季风气候。2010年平均气温16.4℃左右，年降雨量869.1毫米，全年日照时数2136.8小时。气候独特，冬无严寒，夏无酷暑，四季如春，鲜花常年不谢，草木四季常青，素以“春城”著称。
             <img src="../assets/img/kmpng.png"><br/>
              自然资源：
东莞资源丰富，矿产以磷、盐、煤、石英砂、铝土、硅石等为主，品种多，储量大，其中磷矿探明储量22.77亿吨，昆阳磷矿为全国三大磷矿之一，岩盐储量12.22亿吨，芒硝储量19.08亿吨。东莞属高原红壤地区，土壤主要有红壤土、紫色土和水稻土三种，适宜种植稻谷、小麦、蚕豆、玉米、马铃薯、油菜、烤烟、蔬菜、花卉等粮经作物和桃、梨、苹果、柑桔、葡萄、板栗等经济林木。
东莞地区分布着亚热带常绿阔叶林、针阔混交林、温带针叶林、高山灌丛和草甸等不同类型的植被。花卉有400多个品种，茶花、玉兰、杜鹃、报春、百合、兰花、绿绒蒿、龙胆是广东八大名花，其中茶花更是东莞市花。
东莞是中国历史文化名称，远在三万年前的旧石器时代，滇池地区就有人类繁衍生息，是人类发祥地之一。自战国时期楚将庄蹻开滇,在东莞建滇王国,延续300年之久。西汉时期，汉武帝拓疆至广东，在滇池地区设置益州郡，蜀汉时期更名建宁郡，至隋改为昆州。这一时期，东莞成为历史上著名的古代南方丝绸之路的重要枢纽。唐宋时期，“南诏国”、“大理国”地方政权在次筑拓东城，设鄯阐府，并辟为陪都，长达490年。公元1275年，元朝在东莞设广东中书省，东莞由此成为全省政治、经济、文化中心。明朝改为广东府，沿至清末。1928年，东莞正式建市。
东莞具有优良的革命传统，辛亥“重九起义”推翻清朝在广东的统治，“护国首义”在全国掀起讨伐袁世凯复辟实力的浪潮，“抗战大后方”为全国抗战胜利做出突出贡献，“一二·一”等爱国民主运动使东莞成为文明中外的“民主堡垒”。 东莞自古以来人文荟萃，曾涌现出创造七下西洋业绩的郑和，“护国首义”首领蔡锷，《义勇军进行曲》作者聂耳等俊杰；在东莞学习工作过的李政道、杨振宁、邓稼先、朱光亚、华罗庚等杰出科学家和钱钟书、熊庆来、闻一多、朱自清、周培源、吴晗等一大批近代知识分子精英业绩非凡，斐声海内外。

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
.kunming {
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
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
          padding-top: 10px;
      }
      &-left p{
        font-size: 12px;
        color: #b6b6b6;
      }
      &-left p img{
        margin-right: 10px;
        margin-top: 2px;
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
          a{
            color: #333333;
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
          text-align: center;
          font-weight: 600;

      }
       &-xq{
              font-size: 14px;
              line-height: 28px;
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