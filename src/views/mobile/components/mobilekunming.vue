<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header  fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>

      <!-- 视频 -->
      <div class="meetarrVideo">
        <img src="../assets/img/meetarrbck.png" alt="">
      </div>
      <div class="h30"></div>
      <!-- 会议详情  参会嘉宾 -->
      <div class="meetform">
        <mt-navbar  v-model="active"  id="mobileExhibition">
            <mt-tab-item id="meet-container1">东莞市情</mt-tab-item>
            <mt-tab-item id="meet-container2">产业发展</mt-tab-item>
            <mt-tab-item id="meet-container3">魅力东莞</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="meet-container1" class="container1" >
                <div class="kunmingtext">
                  东莞市是广东省地级市之一，也是国务院批复确定的中国珠江三角洲东岸中心城市。全市共辖4个街道、28个镇，总面积2465平方千米，是中国5个不设区的地级市之一。截至2019年末全市户籍人口251.06万人，常住人口846.45万人。<br/>
                  东莞地处中国华南地区、广东省中南部、珠江口东岸，西北接广州市，南接深圳市，东北接惠州市，推进与广州的港口以及城市轨道交通一体化 ，是珠三角中心城市之一、粤港澳大湾区城市之一，深圳都市圈城市之一、为“广东四小虎”之首，号称“世界工厂”，是广东重要的交通枢纽和外贸口岸，2019年东莞市全年GDP达9482.5亿元，属于新一线城市。<br/>
                  <img src="../assets/img/mobilekunmingbck1.jpg" alt="">
                  <br/>
                  东莞是粤曲的重要发源地之一，也是中国的“粤剧之乡”，东莞是广府文化的代表城市之一，是岭南文化的重要发源地，中国近代史的开篇地和改革开放的先行地，广东重要的交通枢纽和外贸口岸，被列为第一批国家新型城镇化综合试点地区和广东历史文化名城。东莞有港澳同胞约120万人，海外华侨约30万人，是著名的华侨之乡、粤剧之乡，曾获得国家森林城市、国际花园城市、全国文明城市、全国篮球城市等称号。
                  2019年8月，中国海关总署主办的《中国海关》杂志公布了2018年“中国外贸百强城市”排名，东莞排名第3。
                  2020年6月，经中央依法治国委入选为第一批全国法治政府建设示范地区和项目名单。

                <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>211</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2" style="margin-top:24px">
                   <div class="kunmingtext" style="padding-top:0px">
                     改革开放以来,东莞以不到全国万分之三的土地,创造了超过全国百分之一的工业总产值,被称为广东乃至全国改革开放的一个精彩缩影,被列为全国改革开放18个典型地区之一。
                    <br/>
                     <img src="../assets/img/mobilechanyefazhan.jpg" alt="">
                     <br/>
                     东莞依托电子信息、装备制造、纺织服装、食品饮料、家具制造等“五大支柱、四大特色”产业不断优化升级，新一代电子信息、机器人、智能终端、新能源汽车等新兴产业不断发展壮大，以及散裂中子源大科学装置等科技创新载体的前瞻布局，2019年地区生产总值达 9482.5 亿元，位居全国 19 名，五年来年均增长超8%，是唯一列入广深科技创新走廊的地级市。地区生产总值同比增长7.4%，增速珠三角第一。固定资产投资达2128.4亿元，增长17.5%，增速珠三角第二。社会消费品零售总额达3179.8亿元，增长9.4%，增速珠三角第一。外贸进出口达13801.7亿元，增长2.8%，其中出口增长8.5%，增速珠三角第二。发展的协调性、匹配性进一步提升。各项本外币存、贷款余额分别突破1.6万亿元和1万亿元大关，成为全国第五个贷款余额突破万亿元的地级市，新增A股上市公司数量居全省地级市首位。28个镇全部进入全国400强。村组集体纯收入增速创十六年来新高。<br/>
                     2019年东莞首次跻身“中国综合经济竞争力城市榜”前十强，外贸综合竞争力连续三年位居全国第三，政商关系健康指数连续两年排名全国第一。

                     <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>99+</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>

                </mt-tab-container-item>
                 <mt-tab-container-item id="meet-container3" style="margin-top:24px">
                  <div class="kunmingtext" style="padding-top:0px;">
                    <div class="kmtxtm">
                      东莞市是岭南文明的重要发源地，中国近代史的开篇地和改革开放的先行地，是“中国优秀旅游城市”“中国最具投资价值旅游城市”“中国十大特色休闲城市”。既有滨海、水乡、森林、湿地等自然风光，也有林则徐销烟池旧址、虎门炮台旧址和蚝岗贝丘遗址等历史人文景观。<br/>
                      截至2018年底，东莞市境内有国家A级旅游景区25个，其中有鸦片战争博物馆、松山湖景区、广东观音山国家森林公园、东莞市科学技术博物馆、龙凤山庄影视旅游区、粤晖园旅游景区、东莞市香市动物园、东莞展览馆、东莞市广东东江纵队纪念馆、东莞市清溪银瓶山森林公园、南社·塘尾明清古建筑群、可园博物馆、东莞市逸颐艺社博物馆、寮步香市文化旅游区、常平隐贤山庄等15个国家级AAAA旅游景区。2018年新增华阳湖国家湿地公园、大王山森林公园、牙香街文化旅游区、鑫源食品文化体验区、黄大仙公园等5个国家级AAA旅游景区。<br/>
                      东莞市是联合国环境署认可的“国际花园城市”，全市建成开放森林公园14个、湿地公园16个，其中东莞市面积最大的森林公园——银瓶山森林公园被评为“全省十大最美森林”、广东省四星级森林公园，主峰银瓶嘴海拔898.2米，为“东莞第一峰”，素有“小九寨沟”之美誉；被评为广东省四星级森林公园的还有大岭山森林公园、大屏障森林公园。<br/>
                      除此以外，东莞市还有珠三角地区首个国家城市湿地公园——东莞生态园湿地景区；有企石镇江边村、茶山镇南社村和超朗村、石排镇塘尾村、寮步镇西溪村、塘厦镇龙背岭村等中国传统村落；有林则徐销烟池与虎门炮台旧址、却金亭碑、大岭山抗日根据地旧址、蚝岗遗址、广九铁路石龙南桥等国家级重点文物保护单位；有石碣檀香岛乐活生态农场、麻涌菇菇花果园、东坑农业园、中堂百香岛等国家级、省级休闲农业与乡村农业示范点。还有东莞千角灯、龙舟制作技艺、樟木头舞麒麟、木鱼歌、“赛龙舟”、莞香制作技艺、寮步香市等国家级非物质文化遗产。主要节庆活动内容丰富，有东坑“二月二卖身节”、桥头“荷花艺术节”、道滘“美食节”、寮步“香市旅游文化节”等，有200多年历史的“康王宝诞”活动是广东省非物质文化遗产项目；有东莞碌鹅、东莞腊肠、蚝皇蟹饼、道滘肉丸粥、虎门麻虾等地道美食。
                     <br/>
                      <img src="../assets/img/mobilemeili.jpg" alt="">
                    </div>
                <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>99+</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>

     <div style="background: #f9f9f9;padding: 30px 0;">
          <img src="../assets/img/yiqingadver.png" alt="" style="padding:0 30px">
            <!-- 热门推荐 -->
          <div class="hottuijian">
              <div class="hotcontent" v-for="(item,i) in hottuijianList" :key="i" @click="wacthHotNewslist(item)">
                  <div><span>热门推荐</span></div>
                  <div>
                      <p>{{item.title}}</p>
                      <p>{{item.releaseTime}} <span style="margin-left:30px">来源：{{item.source}}</span></p>
                  </div>
            </div>
          </div> 
     </div>
    <div class="h30"></div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
             active: 'meet-container1',
             page:0,
             size:3,
             hottuijianList: [],
             hotuuid:[]
        }
    },
    mounted(){
       this.hotRecommend(this.page,this.size)
    },
    methods:{
      // 热门推荐
      hotRecommend(page,size){
       this.$http.get("/articleapi/articleRecommendPageList?page="+page+"&size="+size)
        .then(res => {
            if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                this.hottuijianList = res.data.data.content
            }
      })
      },
      // 新闻详细信息
    wacthHotNewslist(item){
        this.$router.push({path:'mobilenewsdetails',query:{uuid: item.uuid}})
    },
    },

}
</script>
<style>
#meetarr{
  /* margin-bottom: 100px; */
}
.head{
    height: 88px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 88px;
}
#meetarr .mint-button-icon{
   height: 50px;
}
.mint-header{
  background: #fff!important;
  color: #333333 !important;
  font-size: 32px !important;
  height: 88px!important;
  line-height: 88px!important;
}
#mobileback{
  color: #999999 !important;
  font-size: 28px !important;
}
.meetarrVideo{
  padding: 20px 30px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.meetform{
  padding: 0 30px 30px 30px;
  border-bottom: 1px solid #eeeeee;
}
.mmeetbck{
  color: #ffffff;
  background: url(../assets/img/meetanpaiback.png) no-repeat no-repeat;
  padding: 25px;
  line-height: 40px;
  margin-top: 8px;
}
.container1 div{
  font-size: 28px;
}

/* 东莞市情 */
.kunmingtext{
font-size:28px;
padding:24px 0px;
color:#666666;
line-height:40px;
text-align: justify;
position: relative;
}
.kunmingtext img{
  margin: 20px 0;
}
.kmtxtm img{
  width: 690px;
  height: 390px;
}
/* 浏览量 */
 .mobileliulan{
     background: #f9f9f9;
     position: absolute;
     right: 0px;
     bottom: 30px;
     padding: 0px 16px;
     font-size: 20px!important;
     color: #999999;
 }
 .mobileliulan ul li{
     float: left;
     padding-right: 16px;
 }
 .mobileliulan ul li img{
    margin: 0px;
     margin-right: 4px;
 }

 /* 热门推荐 */
 .hottuijian{
     padding:30px 30px 0 30px;
     background: #f9f9f9;
 }
  .hotcontent {
   overflow: hidden;
   padding-top: 16px;
  }
 .hotcontent div:first-child{
   width: 108px;
   height: 108px;
   float: left;
 }
 .hotcontent div:first-child span{
   width:94px;
   text-align: center;
   background: #d81e06;
   color: #fff;
   font-size: 20px;
   border-radius: 5px;
   margin-top: 5px;
 }
 .hotcontent div:nth-child(2){
     width: 582px;
     float: left;
     border-bottom: 1px solid #eeeeee;
     padding-bottom: 20px;
 }
  .hotcontent div:nth-child(2) p:first-child{
   font-size: 28px;
 }
 .hotcontent div:nth-child(2) p:nth-child(2){
   font-size: 18px;
   color: #666666;
   margin-top: 10px;
 }
 .hottuijian div:last-child div:nth-child(2){
   border-bottom:none
 }
</style>