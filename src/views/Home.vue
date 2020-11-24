<template>
  <div class="home" v-loading="loading" style="overflow: hidden">
    <div class="home-banner" v-loading="loading">
      <img src="../assets/img/home_top.png" alt="" />
      <div class="visitNumber">
        <ul>
          <li>
          <p>70%+</p>
          <div>世界500强<br/>
            及行业龙头企业参展</div>
          </li>
          <li>
            <p>348项</p>
            <div>新产品<br/>
              新技术、新服务展示</div>
          </li>
          <li>
            <p>300万+</p>
            <div>微信<br/>
              抖音粉丝矩阵</div>
          </li>
          <li>
            <p>65家+</p>
            <div>中央<br/>
              地方新闻媒体报导</div>
          </li>
          <li>
            <p>{{vistnum}}</p>
            <div>观众<br/>
              浏览量</div>
          </li>
        </ul>
      </div>
    </div>
<!--    中间内容板块-->

    <div id="myPCcontent1">
    <!-- 六大块 -->
    <div class="contentbanner">
    <div class="contentlistCon">
       <ul class="contentlist">
        <li>
          <router-link :to="{ name: 'meetarr' }">
            <img :src="srcMouseenter1" alt="" />
            <span>会议</span>
            </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'exhins' }">
            <img :src="srcMouseenter2" alt=""/><br/>
            <span>展厅</span>
            </router-link>
            <div></div>
        </li>
        <li>
          <router-link :to="{ name: 'liveRoom' }">
          <img :src="srcMouseenter3" alt="" /><br/>
          <span>直播</span>
          </router-link>
          <div></div>
          </li>
        <li>
          <router-link :to="{ name: 'yunshangVideo' }"
            ><img :src="srcMouseenter4" alt=""/><br/>
            <span>年货采购节</span>
            </router-link>
            <div></div>
        </li>
        <li>
          <a href="#" target="_blank">
            <img :src="srcMouseenter5" alt=""/><br/>
            <span>引才</span>
         </a>
            <div></div>

        </li>
         <li>
          <router-link :to="{ name: 'goodfood1' }">
            <img :src="srcMouseenter6" alt=""/><br/>
            <span>中华传统好食品</span>
            </router-link>
            <div></div>
        </li>
       </ul>
    </div>
    </div>
    <!-- 新闻中心 -->
    <div class="newpart">
      <div style="width: 1200px;overflow: hidden;margin: 0 auto;">
      <div class="newcon">
        <p class="newsbck"><span>新闻中心</span><router-link :to="{name: 'news'}"><img src="../assets/img/more.png" alt=""></router-link></p>
        <ul style="position: relative;">
<!--          <div style="position: absolute;top: 10px;right: 145px;" v-show="fireFlag"><img src="../assets/img/fire.png" alt="" class="qiuqiu"></div>-->
          <li v-for="(item) in article" :key="item.i" @click="wacthNewsxq(item)">
            <!-- <span>{{i}}</span> -->
            <!-- <span>{{item}}</span> -->
            <span class="dot"></span>
            <span class="newscontitle">{{item.title}}</span>
            <span class="time">{{item.releaseTime}}</span>
          </li>
        </ul>
      </div>
      <div class="sevenzhan">
        <router-link :to="{ name: 'xsztVideo' }"
          ><img src="../assets/img/newright.png" alt="点击进入详情"
        /></router-link>
      </div>
      </div>
    </div>
    </div>
    <!-- 云上展厅 -->
    <div id="myPCcontent2">
      <div style="position: absolute;left: 0;top:-52px"> <img src="../assets/img/meetingtopbck.png" style="width: 100%"/> </div>
      <div class="yunhall">
      <ul>
        <li @mouseenter="changeEnterHallImg1()" @mouseleave="changeLeaveHallImg1()">
          <a href="https://720yun.com/t/c1vksqd77r9?scene_id=48573547" target="_blank"><img :src="yunShangimg1" alt="" /></a>
        </li>
        <li @mouseenter="changeEnterHallImg2()" @mouseleave="changeLeaveHallImg2()">
           <a href="https://720yun.com/t/a2vkn9f77pl?scene_id=29675239" target="_blank"><img :src="yunShangimg2" alt="" /></a>
        </li>
        <li @mouseenter="changeEnterHallImg3()" @mouseleave="changeLeaveHallImg3()">
           <router-link :to="{name: 'yunshangVideo'}"><img :src="yunShangimg3" alt="" /></router-link>
        </li>
        <li @mouseenter="changeEnterHallImg4()" @mouseleave="changeLeaveHallImg4()">
           <router-link :to="{name: 'yunshangVideo'}"><img :src="yunShangimg4" alt="" /></router-link>
        </li>
      </ul>
    </div>
      <div style="position: absolute;left: 0;bottom:-38px"> <img src="../assets/img/zhanhuitop.png" style="width: 100%"/> </div>
    </div>

    <!-- 会议日程 and活动日程 -->
   <div id="myPCcontent3">
    <div class="metting">
      <div style="float: left">
        <img src="../assets/img/mettingleftbck.png"/>
      </div>
      <div class="todayActivity">
        <p class="Todaynewsbck"><span>今日活动</span> </p>
        <ul>
          <p class="todayp2">开幕式</p>
          <li>
            <span>会议名称： </span>
            <p>中国（大湾区）进出口食品商洽会暨首届东莞年货采购节</p>
          </li>
          <li>
            <span>会议时间： </span>
            <p>1月28日 09:30</p>
          </li>
          <li>
            <span>会议地点： </span>
            <p>东莞国际会议中心</p>
          </li>
        </ul>
      </div>
    </div>
     <div>
       <div class="activityDate">
         <div class="actmeet">
           <div class="sce-tab" id="pcRicheng">
             <!-- <span class="arr"><a class="prev"></a></span>
             <span class="arrow"><a class="next"></a></span> -->

             <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">

               <el-tab-pane label="1月28日" name="first">
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年1月28日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         参加中国食文化国际交流、中国食品科技成果展览、食品产业博览会人员陆续布展
                       </div>
                       </router-link>
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }">
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link>
                       </div>
                     </li>
                   </ul>
                 </div></el-tab-pane>
               <el-tab-pane label="1月29日" name="second">
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年1月29日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         线上线下同步开展
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div></el-tab-pane>

               <el-tab-pane label="1月30日" name="third">
                 <div class="layui-card-header font-24">
                   <span class="font-bold">上午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年1月30日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         中国食文化国际交流博览会开幕、“中华传统好食品”颁奖典礼
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div class="layui-card-header font-24">
                   <span class="font-bold">下午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年1月30日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         举行食品经济发展国际高峰论坛及投融资对接会
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }">
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
               </el-tab-pane>
               <el-tab-pane label="2月1日" name="fourth">
                 <div class="layui-card-header font-24">
                   <span class="font-bold">上午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月1日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         开展中外食品科技产业发展对话活动
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div class="layui-card-header font-24">
                   <span class="font-bold">下午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月1日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         举行中华传统好食品保护与升级发展论坛及亚太食品产业供需合作对接会
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }">
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
               </el-tab-pane>
               <el-tab-pane label="2月2日" name="five">
                 <div class="layui-card-header font-24">
                   <span class="font-bold">上午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月2日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         开展中外食品科技产业发展对话活动
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div class="layui-card-header font-24">
                   <span class="font-bold">下午</span>
                   <span class="font-18 color-666"></span>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月2日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         举行中华传统好食品保护与升级发展论坛及亚太食品产业供需合作对接会
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }">
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
               </el-tab-pane>
               <!-- 2021年2月3日 -->
               <el-tab-pane label="2月3日" name="six">
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月3日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         线下展会结束
                       </div></router-link
                       >
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div class="card-body">
                   <ul>
                     <li class="info-list-item">
                       <div class="now-date">2021年2月3日</div>
                       <router-link :to="{ name: 'meetarr' }"
                       ><div class="now-title">
                         线上展会结束
                       </div></router-link>
                       <div class="kms">
                         <router-link :to="{ name: 'meetarr' }" >
                           <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                         </router-link
                         >
                       </div>
                     </li>
                   </ul>
                 </div>
               </el-tab-pane>
             </el-tabs>
           </div>
         </div>
       </div>
     </div>
   </div>

    <!-- 展商报名 媒体注册 -->
    <div id="myPCcontent4">
      <div class="apply">
        <div>
          <router-link :to="{ name: 'baoming' }">
            <img src="../assets/img/apply1.png" alt="" />
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'register' }" >
            <img src="../assets/img/apply2.png" alt=""/></router-link>
        </div>
        <div>
          <router-link :to="{ name: 'userApply' }">
            <img src="../assets/img/apply3.png" alt=""/></router-link>
        </div>
        <div>
          <router-link :to="{ name: 'coopApply' }"
          ><img src="../assets/img/apply4.png" alt=""
          /></router-link>
        </div>
      </div>
    </div>

    <!-- 抗击疫情 -->
    <div class="uni">
      <div style="position: absolute;left: 0;top:-52px;z-index: 666"> <img src="../assets/img/unitytopback.png"/> </div>
    <div class="unity">
      <div class="unity_left">
        <a href="http://www.dg.gov.cn/jjdz/dzyw/content/post_3405330.html"  target="_blank"><img src="../assets/img/unity_leftback.png" alt="" /></a>
      </div>
      <div class="unity_right">
        <p><a href="http://www.dg.gov.cn/jjdz/dzyw/content/post_3405330.html" target="_blank">东莞：形成常态化疫情防控强大合力</a></p>
        <div class="fabutime">
          <span>发布时间：2020-11-18 14:18:20</span><span>来源：东莞时间网</span>
        </div>
        <div style=" text-align: justify;text-justify: inter-ideograph;">
          <a href="http://www.dg.gov.cn/jjdz/dzyw/content/post_3405330.html" target="_blank">
            11月17日，市委常委会会议暨市新冠肺炎疫情防控领导小组（指挥部）会议召开，深入学习贯彻习近平总书记重要讲话精神，传达中央、省近期关于新冠肺炎疫情防控工作的会议和文件精神，通报我市近期疫情防控工作情况，研究部署下一步工作。会议还传达学习习近平总书记对新时代民营经济统战工作作出的重要指示精神及全国民营经济统战工作会议精神。市委书记、市人大常委会主任梁维东主持会议。         </a>
        </div>
        <div style="text-align: justify;text-justify: inter-ideograph;">
          <a href="http://www.dg.gov.cn/jjdz/dzyw/content/post_3405330.html" target="_blank">
<!--         为确保展会顺利开展，组委会制定了疫情防控工作方案和应急预案，成立“食博会疫情防控小组”， 充分联动属地政府防控机制，严格履行防控职责，确保全员参与、全面覆盖，全方位、全过程、全领域防控，做到不留死角，力争打造一场专业、高效、安全的东莞食博会。-->
         </a>
        </div>
      </div>
    </div>
      <div style="position: absolute;left: 0;bottom:-34px;z-index: 666"> <img src="../assets/img/guesttopback.png"> </div>
    </div>
    <!-- 特邀嘉宾 -->
    <div id="myPCcontent5">
    <div class="guest">
     <div>
          <div class="guestbutton1">
            <img src="../assets/img/guestleft.png" alt="" />
          </div>
          <ul>
            <li>
              <router-link :to="{ name: 'guestxq' }">
                <img src="../assets/img/guest1.png" alt="" />
                <div class="guest_insbck"></div>
                <div class="guest_ins">
                  <p>| 马云</p>
                  <p>阿里巴巴集团创始人、亚洲首富</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'guestxq2' }">
              <img src="../assets/img/guest2.png" alt="" />
              <div class="guest_insbck"></div>
              <div class="guest_ins">
                <p>| 王健林</p>
                <p>万达集团创办人兼董事长</p>
              </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'guestxq3' }">
              <img src="../assets/img/guest3.png" alt="" />
              <div class="guest_insbck"></div>
              <div class="guest_ins">
                <p>| 任正非</p>
                <p>华为技术有限公司主要创始人兼总裁</p>
              </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'guestxq4' }">
              <img src="../assets/img/guest4.png" alt="" />
              <div class="guest_insbck"></div>
              <div class="guest_ins">
                <p>| 刘强东</p>
                <p>京东集团董事局主席兼首席执行官</p>
              </div>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'guestxq5' }">
              <img src="../assets/img/guest5.png" alt="" />
              <div class="guest_insbck"></div>
              <div class="guest_ins">
                <p>| 雷军</p>
                <p>小米科技创始人/董事长</p>
              </div>
              </router-link>
            </li>
          </ul>
          <div class="guestbutton2">
            <img src="../assets/img/guestright.png" alt="" />
          </div>
      </div>
<!--      <div>-->
<!--        <el-carousel :interval="5000" type="card" arrow="always">-->
<!--          <el-carousel-item v-for="item in 10" :key="item">-->
<!--            <h3>{{ item }}</h3>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
    </div>
    </div>
  </div>
</template>
<script>
import animate from "animate.css"
export default {
  name: "HelloWorld",
  components: {
    // swiper,
    // swiperSlide,
  },
  data() {
    return {
      fireFlag:false,
      activeName: "first",
      loading: true,
      tabshowCon: 1,
      caseList: [],
      newsList: [],
      page: null,
      size: null,
      title: null,
      article: [],
      vistnum: 0,
      srcMouseenter1:require('@/assets/img/huiyi1.png'),
      srcMouseenter2:require('@/assets/img/zhanting1.png'),
      srcMouseenter3:require('@/assets/img/zhibo1.png'),
      srcMouseenter4:require('@/assets/img/shiwenhua1.png'),
      srcMouseenter5:require('@/assets/img/yincai1.png'),
      srcMouseenter6:require('@/assets/img/haoshipin1.png'),
      yunShangimg1:require('@/assets/img/hall1.png'),
      yunShangimg2:require('@/assets/img/hall2.png'),
      yunShangimg3:require('@/assets/img/hall3.png'),
      yunShangimg4:require('@/assets/img/hall4.png')
    };
  },
  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
  },
  mounted() {
      this.loading = false;
      this.ArtileListLoad()
      this.visitNumber()
      this.nowvisitNumber()
  },
  methods: {
    // 实现日程tab内容切换
    //   handleTab (val) {
    //   this.tabshowCon = val
    // }
    handleClick(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    },

    // 加载新闻列表页
    ArtileListLoad(){
      this.$http.get("/articleapi/pageList?page=0&size=6")
      .then(res => {
        if (res.data.returnCode == true && res.data.returnMsg == "OK") {
          this.article = res.data.data.content;
          this.fireFlag = true;
        }
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    // 点击查看新闻详情
    wacthNewsxq(item){
      this.$router.push({path:'newsdetails',query:{uuid: item.uuid}})
    },
    // 获取累计访问人数
    visitNumber(){
      this.$http.get("/datacountapi/dataCount")
      .then(res => {
       // eslint-disable-next-line no-console
       console.log(res.data)
       this.vistnum =res.data
      })
      .catch( error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    // 实时上报累计访问人数
    nowvisitNumber(){
      this.$http.get("/loginapi/browsingSave")
    },
    // 云上展厅鼠标移上去更换图片
    changeEnterHallImg1(){
      this.yunShangimg1 =  require('@/assets/img/hall1h.png')
    },
    changeLeaveHallImg1(){
      this.yunShangimg1 =  require('@/assets/img/hall1.png')
    },
    changeEnterHallImg2(){
      this.yunShangimg2 =  require('@/assets/img/hall2h.png')
    },
    changeLeaveHallImg2(){
      this.yunShangimg2 =  require('@/assets/img/hall2.png')
    },
    changeEnterHallImg3(){
      this.yunShangimg3 =  require('@/assets/img/hall3h .png')
    },
    changeLeaveHallImg3(){
      this.yunShangimg3 =  require('@/assets/img/hall3.png')
    },
    changeEnterHallImg4(){
      this.yunShangimg4 =  require('@/assets/img/hall4h.png')
    },
    changeLeaveHallImg4(){
      this.yunShangimg4 =  require('@/assets/img/hall4.png')
    },
  },
};
</script>
<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
 * {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
 //img{
 //  width: 100%;
 //  height: 100%;
 //}
    html,
    body {
        height: 100%;
        position: relative;
    }
    .h10{
        height: 14px;
    }
    #app {
        font-family: "微软雅黑";
        color: #2c3e50;
    }

ul,
li {
  list-style: none;
  text-decoration: none;
}
.el-main {
  overflow: hidden;
}
.home-banner {
  //width: 100%;
  //height: 100%;
}
.home-banner img {
  width: 100%;
  //height: 100%;
}
.visitNumber{
  width: 1200px;
  height: 124px;
  margin: 0 auto;
  margin-top: -150px;
  position: relative;
}
 .visitNumber ul li{
   float: left;
   width: 238px;
   text-align: center;
   border-right: 1px solid #ca0522;
 }
.visitNumber ul li p{
  font-size: 36px;
  color: #f8c05d;
  margin-bottom: 28px;
}
.visitNumber ul li:first-child{
  border-left: 1px solid #ca0522;
}
.visitNumber ul li div{
  font-size: 18px;
  color: #fff;
}
.visitNumber p span{
  font-size: 40px;
}
.swiper-slide {
  font-size: 24px;
  // text-align: center;
  // line-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .page {
    text-align: center;
    height: 100px;
    overflow: hidden;
    h3,
    p {
      font-size: 40px;
      font-weight: 400;
      color: #fff;
    }
  }

  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}
#myPCcontent1{
  background: url("../assets/img/sixAndnews.png") no-repeat no-repeat center;
  margin-top: 20px;
  height: 774px;
}
//板块二列表
.contentbanner{
  width: 100%;
  height: 290px;

}
.contentlistCon{
  width:1200px;
  margin: 0 auto;
  position: relative;
}
.contentlist {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.contentlist  li a {
  float: left;
  width: 200px;
  line-height: 130px;
  text-align: center;
  display: inline-block;
}
.contentlist li {
  position: relative;
  width: 200px;
  float: left;
  margin-top: 67px;
  text-align: center;
  // border: 1px solid red;
  padding: 25px 0;
}
.contentlist li span{
   display: inline-block;
   font-size: 18px;
   color: #ff9f15;
   width: 187px;
   height: 30px;
   line-height: 30px;
   text-align: center;
   position: absolute;
   left: 0px;
   bottom: 42px;
}
.contentlist li:hover span{
   color: #f34a12;
   font-size: 20px;
}
.contentlist li:hover{
   background: url("../assets/img/yunback.png") no-repeat no-repeat bottom;
}
.contentlist li:first-child {
  margin-left: 0px;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.case-item {
  width: 1100px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    width: 330px;
    height: 250px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;

    &:hover {
      .case-item-hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
//经典案例hover
.case-item-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }
  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }
  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
}
// 新闻中心
.newpart {
  width: 1270px;
  height: 380px;
  margin: 40px auto;
  overflow: hidden;
  background: url("../assets/img/newconback.png") no-repeat no-repeat;
}
.newcon {
  width: 614px;
  float: left;
  margin-top: 15px;
}
.newsbck {
  width: 592px;
  height: 60px;

}
.newsbck span {
  display: inline-block;
  background: url(../assets/img/denglong.png) no-repeat no-repeat left;
  width: 130px;
  height: 50px;
  font-size: 18px;
  color: #ff0831;
  text-align: center;
  line-height: 50px;
}
.newsbck img{
  float: right;
  margin-top: 24px;
}
.newcon .dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #666666;
  vertical-align: auto;
  margin-right: 10px;
  margin-bottom: 3px;
}
.newcon  .newscontitle{
  // width: 440px;
  display: inline-block;
  color:#56220f;
}
.newcon ul li {
  font-size: 14px;
  color: #444444;
  height: 42px;
  line-height: 42px;
  padding:0 8px;
  font-family: "微软雅黑";
  overflow: hidden;
  margin-left: 8px;
  padding-right: 40px;
}
.newcon ul li:hover .newscontitle{
 //transform: scale(1.02);
 //border: 1px solid #f6f7fa;
 //box-shadow: 4px 3px 9px rgba(21, 43, 127, 0.2)!important;
 //font-weight: 600;
  color: #56220f;
  cursor: pointer;
  font-size: 16px;
  text-decoration:underline;
}
.newcon ul li .time {
  float: right;
  color:#666666;
}
.sevenzhan {
  float: right;
}
.sevenzhan:hover{
    transform: scale(1.02);
}
// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }

.h60 {
  height: 60px;
}
.h40 {
  height: 40px;
}
.h38 {
  height: 38px;
}
.h20 {
  height: 20px;
}
.h25 {
  height: 25px;
}
// 云上展厅
#myPCcontent2{
  background: url("../assets/img/yunhallback.png") no-repeat no-repeat;
  background-size:100% 100%;
  height: 481px;
  position: relative;
}
.yunhall {
  width: 1200px;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 86px;
}
.yunhall ul li {
  float: left;
  width: 257px;
  height: 306px;
  margin-left: 56px;
  // padding: 4px;
}
.yunhall ul li:hover{
  margin-top: -12px;
}
.yunhall ul li a{
  display: block;
  width: 257px;
  height: 306px;
}
.yunhall ul li:first-child {
  margin-left: 0px;
}
// 广告位
.adver {
  width: 1200px;
  margin: 0 auto;
}
// 会议日程
#myPCcontent3{
  background: url("../assets/img/myPCcontent3bck.png") no-repeat no-repeat;
  background-size:100% 100%;
  height: 700px;
  padding-top: 86px;
}
.metting {
  width: 1200px;
  height: 438px;
  margin: 0 auto;
}
.metting div:first-child:hover{
  transform: scale(1.02);
}
.Todaynewsbck{
  width: 490px;
  color: #56220f;
}
 .Todaynewsbck span {
   display: inline-block;
   background: url(../assets/img/denglong.png) no-repeat no-repeat left;
   width: 130px;
   height: 50px;
   font-size: 18px;
   color: #ff0831;
   text-align: center;
   line-height: 50px;
 }
 Todaynewsbck img{
   float: right;
   margin-top: 24px;
 }
#video {
  width: 680px;
  float: left;
}
.todayActivity {
  float: right;
  width: 490px;
  color: #56220f;
}
.todayActivity ul {
  padding-left: 15px;
}
.todayp {
  font-size: 18px;
  line-height: 36px;

}
.todayp2 {
  font-size: 28px;
  font-weight: 600;
  height: 60px;
  line-height: 60px;
}
.todayActivity ul li span {
  font-size: 16px;
  color: #56220f;
  font-weight: 700;
}
.todayActivity ul li {
  margin-bottom: 22px;
}
.todayActivity ul li p {
  font-size: 20px;
  line-height: 40px;
  font-weight: 1000;
  letter-spacing: 2px;
}
// 活动日程
.activityDate {
  width: 1200px;
  margin: 0 auto;
}
.actmeet {
  position: relative;
}
.sce-tab {
  margin-top: 0px;
  // width: 1138px;
  // margin-left: 30px;
}
.arr {
  position: absolute;
  left: 0px;
  background: #f4f7fc;
}
.arr a {
  display: block;
  opacity: 1;
  background-color: #f4f7fc;
  top: 22px;
  left: 2px;
  height: 70px;
  width: 30px;
  position: relative;
  cursor: pointer;
  background: url(../assets/img/back.png) 0 0 no-repeat;
}

.arrow {
  position: absolute;
  right: 2px;
  background: #f4f7fc;
}
.arrow a {
  display: block;
  opacity: 1;
  background-color: #f4f7fc;
  top: 22px;
  right: 0px;
  height: 70px;
  width: 30px;
  position: relative;
  cursor: pointer;
  background: url(../assets/img/next.png) 0 0 no-repeat;
}
#pcRicheng .el-tabs__nav .is-top{
   height: 40px;
   line-height: 40px;
   margin-right: 30px;
   text-align: center;
   color: #ff0027 !important;
   font-size: 16px;
   width: 151px;
   background: url("../assets/img/meettimePane.png") no-repeat no-repeat;
}
 #pcRicheng .el-tabs__active-bar{
  background: none;
}
 #pcRicheng  .el-tabs--border-card>.el-tabs__content{
  //height: 260px;
}
 #pcRicheng  .el-tabs--border-card{
   background: none;
 }
 #pcRicheng .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #f8c05d!important;
  font-weight: bold;
  font-size: 16px;
}
 #pcRicheng .el-tabs--border-card{
  box-shadow: none;
  border:none;
}
 #pcRicheng .tabshow ,.el-tab-pane{
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2)!important;
  padding: 20px 0;

}
.font-24 {
  font-size: 16px;
}
.font-bold {
  font-weight: bold;
}
.card-body {
  position: relative;
  padding: 10px 0px;
  line-height: 24px;
}
#pcRicheng .el-tabs--border-card>.el-tabs__header{
  background: none!important;
}
#pcRicheng  .el-tabs--border-card>.el-tabs__header{
  border-bottom: none!important;
}
 #pcRicheng .el-tabs__nav-scroll{
  color: #ff0027!important;
}
 #pcRicheng .el-tabs--border-card>.el-tabs__header{
  margin-bottom: 3px;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3)!important;
}
.layui-btn-xs {
  height: 20px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
}
.tab-ge li {
  display: block;
  margin-bottom: 10px;
  border: 2px solid #d2e1fc;
  color: RGBA(0, 98, 198, 0.8);
  font-size: 22px;
  height: 53px;
  transition: none;
  border-radius: 5px;
  width: 136px;
}
.tab-ge .layui-this {
  background-image: url(../assets/img/selected.png);
  background-size: 100% 100%;
  border: 0;
  padding-left: 10px;
  transition: none;
  color: #ffffff;
  font-weight: bold;
  width: 152px;
}
.layui-tab-title li span {
  position: relative;
  top: 8px;
  z-index: 999;
}
.now-date {
  display: inline-block;
  font-size: 18px;
  color: #333333;
  margin-right: 40px;
}
.info-list-item a {
  color: #333333;
}
.now-title {
  // position: absolute;
  // left: 200px;
  // top: 0;
  display: inline-block;
  font-size: 16px;
  color: #333333;
}
#kms {
  float: right;
}
#kms a {
  margin-top: -12px;
}
#kms a img{
  vertical-align: bottom;
}
// 展商报名 媒体注册
#myPCcontent4{
  background: url("../assets/img/myPC4back.png") no-repeat no-repeat;
  background-size:100% 100%;
  height: 230px;
  padding-top: 70px;
}
.apply {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.apply div {
  float: left;
  width: 286px;
  height: 126px;
  background: url("../assets/img/applyback.png") no-repeat no-repeat;
}
 .apply div a{
   width: 286px;
   height: 126px;
   display: block;
 }
 .apply div a img{
   display: block;
   margin-left: 60px;
   margin-top: 44px;
 }
 .apply div:last-child a img{
   margin-left: 46px;
 }
 .apply div{
   margin-left: 18px;
 }
 .apply div:first-child{
   margin-left: 0px;
 }
.apply div:hover a img{
   transform: scale(1.05);
}
// 抗击疫情
.uni{
  width:100%;
  height: 465px;
  background:url("../assets/img/unityback.png") no-repeat no-repeat;
  background-size:100% 100%;
  position: relative;
  padding-top: 85px;
}
.uni img{
  width: 100%;
}
.unity {
  padding: 33px 0;
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  overflow: hidden;

}
.unity a{
  color: #56220f;
}
.unity_left {
  float: left;
}
.unity_right {
  float: right;
  width: 560px;
}
.unity_left a img:hover{
  transform: scale(1.02);
}
.unity_right p a{
  width: 100%;
  display: inline-block;
  color: #56220f;
  font-size: 20px;
  font-weight: 700;
  height: 40px;
  line-height: 60px;
  text-align: center;
}
.fabutime {
  font-size: 14px!important;
  color: #56220f;
  font-weight: 550;
  height: 75px;
  line-height: 75px!important;
}
.fabutime span:nth-child(2) {
  float: right;
}
.unity_right div{
  font-size: 18px;
  line-height: 32px;
}

// 特邀嘉宾
#myPCcontent5{
  background:url("../assets/img/guesttopbcack.png") no-repeat no-repeat;
  background-size:100% 100%;
  position: relative;
  height: 435px;
  padding-top: 85px;
}
.guest {
  width: 1370px;
  margin: 0 auto;
  color: #333333;
  overflow: hidden;
  position: relative;
}
.guestbutton1 {
  position: absolute;
  left: 0px;
  top: 32%;
}
.guestbutton2 {
  position: absolute;
  right: 0px;
  top: 32%;
}
.guest ul {
  width: 1230px;
  margin: 0 auto;
}
.guest ul li {
  width: 212px;
  height: 300px;
  float: left;
  margin-left: 28px;
  position: relative;
  border:4px solid #d07d3f;
  border-radius: 4px;
}
.guest ul li:first-child{
  margin-left: 9px;
}
.guest ul li img{
  width: 212px;
}
.guest ul li:nth-child(1) {
  //margin-left: 0px;
}
.guest ul li:hover {
   transform: scale(1.03)
}
.guest_insbck {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 212px;
  height: 52px;
  background: #d07d3f;
  opacity: 0.86;
}
.guest_ins {
  position: absolute;
  left: 3px;
  bottom: 0px;
  width: 212px;
  height: 50px;
  color: #fff6d7;
}
.guest_ins p:nth-child(1) {
  font-size: 14px;
  line-height: 24px;
}
.guest_ins p:nth-child(2) {
  font-size: 12px;
  margin-left: 10px;
}


.slide-one {
  background: url(../assets/img/home_top.png) no-repeat center center;
  background-size: cover;
}
.slide-three {
  background: url(../assets/img/home_anli.jpg) no-repeat center;
  background-size: cover;
}
//最新资讯
.news-content {
  width: 1240px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  &-item {
    width: 400px;
    display: flex;
    flex-direction: column;

    .item-img {
      width: 360px;
      height: 230px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-origin: content-box;
      margin: 0 auto;
    }
    .el-divider {
      background-color: #fff;
      height: 3px;
      .el-divider__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 0px;
        color: #fff;
      }
    }
    .item-content {
      width: 360px;
      height: 230px;
      margin: 0 auto;
      //border: 1px solid paleturquoise;
      h3 {
        font-size: 22px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
        height: 80px;
        overflow: hidden;
        margin: 10px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal !important;
        word-wrap: break-word;
      }
      span {
        display: block;
        font-size: 14px;
        text-align: end;
      }
      h3,
      p,
      span {
        color: #fff;
      }
    }
  }
}
.order {
  order: -1;
}
.order-img {
  order: 1;
}
//按钮颜色
.el-button--primary{
  background-color:#f9680b!important;
  border-color: #f9680b!important;
}
</style>
