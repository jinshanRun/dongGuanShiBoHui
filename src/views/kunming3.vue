<template>
    <div class="kunming">
      <div class="kunming-banner"><img src="../assets/img/kunmingbanner.png" alt=""></div>
      <div class="kunming-content">
          <div class="kunming-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>魅力昆明</p>
              <ul class="kunming-content-list">
                  <li><router-link :to="{name:'kunming1'}">云南/昆明市情</router-link></li>
                  <li><router-link :to="{name:'kunming2'}">产业发展</router-link></li>
                  <li>魅力昆明</li>
              </ul>
          </div>
          <div class="kunming-content-right">
              <p>魅力昆明</p>
              <div class="kunming-content-xq">
                  昆明市是全国十大旅游热点城市，首批中国优秀旅游城市。截止2012年，全市有各级政府保护文物200多项，有石林世界地质公园、滇池、安宁温泉、九乡、阳宗海、轿子雪山等国家级和省级著名风景区，还有世界园艺博览会和云南民族村等100多处重点风景名胜，10多条国家级旅游线路形成以昆明为中心，辐射全省，连接东南亚，集旅游、观光、度假、娱乐为一体的旅游体系。
              <img src="../assets/img/kmpng2.png" alt="" width="100%" ><br/>
             石林风景名胜区：位于路南县境内，距昆明86公里，景区由大小石林、乃古石林、大叠水、长湖、月湖、芝云洞、奇风洞7个风景片区组成，是一个以岩溶地貌为主题的，在国内外知名度较高的风景名胜区，被人们誉为“天下第一奇观”。全市共有石林面积400平方公里。
            <img src="../assets/img/kmpng3.jpg" alt="" width="100%" ><br/>
            九乡溶洞：国家级风景区，地点位于昆明市宜良县，景区距离宜良有40多公里的路程。据说九乡何以得名，人言人殊。九乡是国家重点风景名胜区，是云南省新兴的以溶洞景观为主、溶洞外自然风光、人文景观、民族风情为一体的综合性风景名胜区。
            <img src="../assets/img/kmpng4.jpg" alt="" width="100%" ><br/>
            昆明世界园艺博览园：是1999年昆明世界园艺博览会会址，园区整体依山就势、错落有致，气势恢弘，集全国各省、区、市地方特色和95个国家风格迥异的园林园艺精品，庭院建筑和科技成就于一园，体现了“人与自然，和谐发展”的时代主题，是一个具有“云南特色、中国气派、世界一流”的园林园艺精品大观园。
            <img src="../assets/img/knpng5.jpg" alt="" width="100%" ><br/>
            滇池：位于昆明市南的西山脚下，其北端紧邻昆明市大观公园，南端至晋宁县内，距市区5km，历史上这里一直是度假观光和避暑的胜地。滇池形似弦月，南北长39km，东西宽13.5km，平均宽度约8km。湖岸线长约200km；湖面面积300k㎡，居云南省首位，湖水最大深度8m，平均深度5m，蓄水量15.7亿，素称“五百里滇池”。是中国第六大内陆淡水湖。
            <img src="../assets/img/knpng6.jpg" alt="" width="100%" ><br/>
            云南民族村：位于昆明市西南郊滇池之滨的国家级旅游度假区内，是国家AAAA级旅游景区、国家民委民族文化基地、CIOFF中国委员会民间传统文化基地、国家民委全国首批民族工作联系点之一。占地面积89公顷，距市区8km，背靠滇池，与西山森林公园、大观公园、郑和公园等著名风景区隔水相望，是云南省新兴的旅游度假胜地和展示云南26个民族社会、文化、风情的窗口。
            <img src="../assets/img/knpng7.png" alt="" width="100%" ><br/>
            大观楼：位于昆明市区西部，距市中心约6km。始建于康熙年间，因其面临滇池，远望西山，尽揽湖光山色而得名。入园后可游览涌月亭、凝碧堂、揽胜阁、观稼堂等楼台亭榭。园中最具观赏价值的大观楼临水而建，楼高三层，其中题匾楹联佳作颇多。由清代名士孙髯翁所作180字的长联，垂挂于大观楼临水一面的门柱两侧，号称“古今第一长联”。
            <img src="../assets/img/knpng8.jpg" alt="" width="100%" ><br/>
            大叠水瀑布：位于路南县城西南20公里，大叠水瀑布又名飞龙瀑，号称"珠江第一瀑"。瀑布的水源系南盘江的支流巴江，落差88米，最大流量达150立方米/秒。有公路相通至叠水电站，舍车步行二三公里便可到达。景区中群山耸立，植被丰富，满目青翠。清水河峡谷陡峭险峻，幽深古雅，处处散发着大自然深处的浓郁气息。
            <img src="../assets/img/knpng9.png" alt="" width="100%" ><br/>
            西山：是国家级森林公园、国家AAAA级景区、国家滇池旅游度假区核心景区之一，位于昆明市西郊15km，由华亭山、太华山、罗汉山等组成。它峰峦连绵40多公里，海拔1900～2350m。相传古时有凤凰停歇，见者不识，呼为碧鸡，故也称碧鸡山。又因形状像卧佛，也叫卧佛山。
            <img src="../assets/img/knpng10.jpg" alt="" width="100%" ><br/>
            翠湖：位于昆明市五华山西麓，占地面积352亩。湖东北有“九泉所出，汇而成池”，故又名“九龙池”。堤畔遍植垂柳，柳枝拂面，湖内多种荷花，藕花飘香，旧有“十亩荷花鱼世界，半城杨柳抚楼台”之联，被誉为“城中碧玉”。有亭、台、回廊、曲桥等建筑，其建筑精致玲珑，亭阁均有匾对，歌咏园中的景观。
            <img src="../assets/img/knpng11.jpg" alt="" width="100%" ><br/>
            金马碧鸡坊：位于昆明市中心三市街与金碧路汇处，雕梁画栋精美绝伦，东坊临金马山而名为金马坊，西坊靠碧鸡山而名为碧鸡坊。北与纪念赛滇池的“忠爱坊”相配，合称“品字三坊”，成为昆明闹市胜景；南与建于南诏的东西寺塔相映，显示了昆明古老的文明。东坊临金马山而名金马碧鸡坊始建于明朝宣德年间，至今已有近四百年的历史。
            <img src="../assets/img/knpng12.jpg" alt="" width="100%" ><br/>
            东川红土地：被专家认为是全世界除巴西里约热内卢外最有气势的红土地，而其景象比巴西红土地更为壮美。东川红土地指的是位于昆明市东川区西南40多千米的新田乡、有一名叫“花石头”（在109千米程碑处）的地方，这里方圆近百里的区域是云南红土高原上最集中、最典型、最具特色的红土地。
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
      &-list li:nth-child(3){
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