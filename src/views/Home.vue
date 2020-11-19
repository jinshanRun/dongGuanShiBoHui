<template>
  <div class="home" v-loading="loading">
    <div class="home-banner" v-loading="loading">
      <img src="../assets/img/home_top.png" alt="" />
      <div class="visitNumber">
         <div></div>
         <p>累计访问人数：<span>{{vistnum}}</span> </p>
      </div>
    </div>
    <!-- 六大块 -->
    <div class="contentbanner">
    <div class="contentlistCon">
       <ul class="contentlist">
        <li @mouseenter="changeEnterImg1()" @mouseleave="changeLeaveImg1()">
          <router-link :to="{ name: 'meetarr' }">
            <img :src="srcMouseenter1" alt="" />
            <span>会议</span>
            </router-link>
        </li>
        <li @mouseenter="changeEnterImg2()" @mouseleave="changeLeaveImg2()">
          <router-link :to="{ name: 'exhins' }">
            <img :src="srcMouseenter2" alt=""/><br/>
            <span>展厅</span>
            </router-link>
            <div></div>
        </li>
        <li @mouseenter="changeEnterImg3()" @mouseleave="changeLeaveImg3()">
          <router-link :to="{ name: 'liveRoom' }">
          <img :src="srcMouseenter3" alt="" /><br/>
          <span>直播</span>
          </router-link>
          <div></div>
          </li>
        <li @mouseenter="changeEnterImg4()" @mouseleave="changeLeaveImg4()">
          <router-link :to="{ name: 'foodculture1' }"
            ><img :src="srcMouseenter4" alt=""/><br/>
            <span>食文化</span>
            </router-link>
            <div></div>
        </li>
        <li @mouseenter="changeEnterImg5()" @mouseleave="changeLeaveImg5()">
          <a href="http://invest.km.gov.cn/" target="_blank">
            <img :src="srcMouseenter5" alt=""/><br/>
            <span>引才</span>
         </a>
            <div></div>

        </li>
         <li @mouseenter="changeEnterImg6()" @mouseleave="changeLeaveImg6()">
          <router-link :to="{ name: 'goodfood1' }">
            <img :src="srcMouseenter6" alt=""/><br/>
            <span>中华传统好食品</span>
            </router-link>
            <div></div>
        </li>
       </ul>
       <div class="contentlistBorder">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <!-- <li></li> -->
          </ul>
    </div>
    </div>
    </div>
    <!-- 新闻中心 -->
    <div class="newpart">
      <div class="newcon">
        <p class="newsbck"><span>新闻中心</span><router-link :to="{name: 'news'}"><img src="../assets/img/more.png" alt=""></router-link></p>
        <ul style="position: relative;">
          <div style="position: absolute;top: 10px;right: 192px;"><img src="../assets/img/fire.png" alt="" class="qiuqiu"></div>
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
    <!-- 云上展厅 -->
    <div style="background:#f9f9f9;height:300px;padding-top:40px">
    <div class="yunhall">
      <ul>
        <li>
          <router-link :to="{name: 'yunshangVideo'}"><img src="../assets/img/hall1.png" alt="" /></router-link>
        </li>
        <li>
           <router-link :to="{name: 'yunshangVideo'}"><img src="../assets/img/hall2.png" alt="" /></router-link>
        </li>
        <li>
           <router-link :to="{name: 'yunshangVideo'}"><img src="../assets/img/hall3.png" alt="" /></router-link>
        </li>
        <li>
           <router-link :to="{name: 'yunshangVideo'}"><img src="../assets/img/hall4.png" alt="" /></router-link>
        </li>
      </ul>
    </div>
    </div>
    <!-- <div class="h60"></div> -->
    <!-- 广告位 -->
    <!-- <div class="adver">
      <img src="../assets/img/adverback.gif" alt="" />
    </div> -->
    <div class="h38"></div>
    <!-- 会议日程 -->
    <div class="metting">
      <p class="meetp">展会议程</p>
      <div>
        <video
          id="video"
          style="display: block"
          src="../assets/video/video.mp4"
          muted="muted"
          controls
        ></video>
      </div>
      <div class="todayActivity">
        <p class="newsbck"><span>今日活动</span> </p>
        <ul>
          <p class="todayp2">开幕式</p>
          <li>
            <span>会议名称： </span>
            <p>中国（昆明）自由贸易试验区正定片区发展论坛</p>
          </li>
          <li>
            <span>会议时间： </span>
            <p>11月16日 09:30</p>
          </li>
          <li>
            <span>会议地点： </span>
            <p>云南昆明国际会展中心宴会厅</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="h40"></div>
    <!-- 活动日程 -->
    <div style="background:#f9f9f9;height:280px;padding-top:40px">
    <div class="activityDate">
      <div class="actmeet">
        <div class="sce-tab">
          <!-- <span class="arr"><a class="prev"></a></span>
          <span class="arrow"><a class="next"></a></span> -->

          <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">

          <el-tab-pane label="11月12日-15日" name="first">
            <div class="card-body">
              <ul>
                <li class="info-list-item">
                  <div class="now-date">2020年11月12日-15日</div>
                  <router-link :to="{ name: 'meetarr' }"
                    ><div class="now-title">
                      参加中国食文化国际交流、中国食品科技成果展览、食品产业博览会人员陆续布展
                    </div>
                  </router-link>
                  <div id="kms">
                    <router-link :to="{ name: 'meetarr' }">
                      <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                      </router-link>
                  </div>
                </li>
              </ul>
            </div></el-tab-pane>
          <el-tab-pane label="11月16日" name="second">
            <div class="card-body">
              <ul>
                <li class="info-list-item">
                  <div class="now-date">2020年11月16日</div>
                  <router-link :to="{ name: 'meetarr' }"
                    ><div class="now-title">
                      线上线下同步开展
                    </div></router-link
                  >
                  <div id="kms">
                    <router-link :to="{ name: 'meetarr' }" >
                      <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                      </router-link
                    >
                  </div>
                </li>
              </ul>
            </div></el-tab-pane>

            <el-tab-pane label="11月17日" name="third">
                <div class="layui-card-header font-24">
                  <span class="font-bold">上午</span>
                  <span class="font-18 color-666"></span>
                </div>
                <div class="card-body">
                  <ul>
                    <li class="info-list-item">
                      <div class="now-date">2020年11月17日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          中国食文化国际交流博览会开幕、“中华传统好食品”颁奖典礼
                        </div></router-link
                      >
                      <div id="kms">
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
                      <div class="now-date">2020年10月17日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          举行食品经济发展国际高峰论坛及投融资对接会
                        </div></router-link
                      >
                      <div id="kms">
                        <router-link :to="{ name: 'meetarr' }">
                          <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                          </router-link
                        >
                      </div>
                    </li>
                  </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="11月18日" name="fourth">
                <div class="layui-card-header font-24">
                  <span class="font-bold">上午</span>
                  <span class="font-18 color-666"></span>
                </div>
                <div class="card-body">
                  <ul>
                    <li class="info-list-item">
                      <div class="now-date">2020年11月18日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          开展中外食品科技产业发展对话活动
                        </div></router-link
                      >
                      <div id="kms">
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
                      <div class="now-date">2020年11月18日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          举行中华传统好食品保护与升级发展论坛及亚太食品产业供需合作对接会
                        </div></router-link
                      >
                      <div id="kms">
                        <router-link :to="{ name: 'meetarr' }">
                          <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                          </router-link
                        >
                      </div>
                    </li>
                  </ul>
                </div>
            </el-tab-pane>

            <el-tab-pane label="11月19日" name="five">
                <div class="layui-card-header font-24">
                  <span class="font-bold">上午</span>
                  <span class="font-18 color-666"></span>
                </div>
                <div class="card-body">
                  <ul>
                    <li class="info-list-item">
                      <div class="now-date">2020年11月19日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          举行食品企业、示范园区、示范县（市区）与投资融资机构洽谈会和现场签约
                        </div></router-link
                      >
                      <div id="kms">
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
                      <div class="now-date">2020年11月19日</div>
                      <router-link :to="{ name: 'meetarr' }"
                        ><div class="now-title">
                          线下博览会撤馆，线上展览至11月25日
                        </div></router-link
                      >
                      <div id="kms">
                        <router-link :to="{ name: 'meetarr' }" >
                          <!-- <img src="../assets/img/huifang2.png" alt="" /> -->
                          </router-link
                        >
                      </div>
                    </li>
                  </ul>
                </div>
            </el-tab-pane>
            <!-- 2020年11月20日-25日 -->
            <el-tab-pane label="11月20日-25日" name="six">
            <div class="card-body">
              <ul>
                <li class="info-list-item">
                  <div class="now-date">2020年11月22日</div>
                  <router-link :to="{ name: 'meetarr' }"
                    ><div class="now-title">
                       线下展会结束
                    </div></router-link
                  >
                  <div id="kms">
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
                  <div class="now-date">2020年11月25日</div>
                  <router-link :to="{ name: 'meetarr' }"
                    ><div class="now-title">
                       线上展会结束
                    </div></router-link
                  >
                  <div id="kms">
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
    <div class="h40"></div>
    <!-- 展商报名 媒体注册 -->
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
    <div class="h38"></div>
    <!-- 抗击疫情 -->
    <div class="uni">
    <div class="unity">
       <p class="meetp">抗击疫情</p>
      <div class="unity_left">
        <a href="http://www.km.gov.cn/c/2020-08-03/3620136.shtml"  target="_blank"><img src="../assets/img/unity_leftback.png" alt="" /></a>
      </div>
      <div class="unity_right">
        <p><a href="http://www.km.gov.cn/c/2020-08-03/3620136.shtml" target="_blank">2020年昆明食博会组委会制定疫情防控工作方案和应急...</a></p>
        <!-- <div class="fabutime">
          <span>发布时间： 2020-10-15 11:55:00</span><span>来源：搜狐</span>
        </div> -->
        <div style=" text-align: justify;text-justify: inter-ideograph;">
          <a href="http://www.km.gov.cn/c/2020-08-03/3620136.shtml" target="_blank">
           2020年昆明食博会将于2020年11月19-22日在国际会展中心举办。在中国国际贸易环境中贸易战和COVID-19疫情的双重挑战下，将以“加强食品文化交流，推进品质消费提档”为主题，聚焦食品产业经济发展与食品文化传承共进融合的生态建设。
         </a>
        </div>
        <div style="text-align: justify;text-justify: inter-ideograph;">
          <a href="http://www.km.gov.cn/c/2020-08-03/3620136.shtml" target="_blank">
         为确保展会顺利开展，组委会制定了疫情防控工作方案和应急预案，成立“食博会疫情防控小组”， 充分联动属地政府防控机制，严格履行防控职责，确保全员参与、全面覆盖，全方位、全过程、全领域防控，做到不留死角，力争打造一场专业、高效、安全的昆明食博会。
         </a>
        </div>
      </div>
    </div>
    </div>
    <div class="h38"></div>
    <!-- 特邀嘉宾 -->
    <div class="guest">
      <p class="meetp">特邀嘉宾</p>
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
    <div class="h40"></div>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import animate from "animate.css"
export default {
  name: "HelloWorld",
  components: {
    // swiper,
    // swiperSlide,
  },
  data() {
    return {
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
         // eslint-disable-next-line no-console
         console.log(res.data)
         this.article = res.data.data.content
        //  this.uuid= this.article.uuid
         // eslint-disable-next-line no-console
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
    // 板块二鼠标移上去更换图片
    changeEnterImg1(){
      this.srcMouseenter1 =  require('@/assets/img/huiyi2.png')
    },
    changeLeaveImg1(){
     this.srcMouseenter1 =  require('@/assets/img/huiyi1.png')
    },
    changeEnterImg2(){
      this.srcMouseenter2 =  require('@/assets/img/zhanting2.png')
    },
    changeLeaveImg2(){
     this.srcMouseenter2 =  require('@/assets/img/zhanting1.png')
    },
    changeEnterImg3(){
      this.srcMouseenter3 =  require('@/assets/img/zhibo2.png')
    },
    changeLeaveImg3(){
     this.srcMouseenter3 =  require('@/assets/img/zhibo1.png')
    },
    changeEnterImg4(){
      this.srcMouseenter4 =  require('@/assets/img/shiwenhua2.png')
    },
    changeLeaveImg4(){
     this.srcMouseenter4 =  require('@/assets/img/shiwenhua1.png')
    },
    changeEnterImg5(){
      this.srcMouseenter5 =  require('@/assets/img/yincai2.png')
    },
    changeLeaveImg5(){
     this.srcMouseenter5 =  require('@/assets/img/yincai1.png')
    },
    changeEnterImg6(){
      this.srcMouseenter6 =  require('@/assets/img/haoshipin2.png')
    },
    changeLeaveImg6(){
     this.srcMouseenter6 =  require('@/assets/img/haoshipin1.png')
    }
  },
};
</script>

<style lang="scss">
 * {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
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
#swiperBox {
  height: 560px;
}
.home-banner {
  width: 100%;
  height: 100%;
}
.home-banner img {
  width: 100%;
  height: 100%;
}
.visitNumber{
  width: 1200px;
  height: 54px;
  margin: 0 auto;
  margin-top: -58px;
  position: relative;
}
.visitNumber div{
  width: 410px;
  height: 56px;
  background: #fff;
  opacity: 0.2;
  position: absolute;
  bottom: 2px;
  right: 0px;
}
.visitNumber p{
  position: absolute;
  bottom: 0px;
  right: 20px;
  height: 56px;
  line-height: 56px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  padding: 0 10px;
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
//板块二列表
.contentbanner{
  width: 100%;
  background: #f9f9f9;

}
.contentlistCon{
  width:1200px;
  margin: 0 auto;
  position: relative;
}
.contentlist {
  width: 1200px;
  height: 290px !important;
  margin: 0 auto;
  overflow: hidden;
}

.contentlist  li a {
  float: left;
  width: 180px;
  height: 130px;
  line-height: 130px;
  text-align: center;
  display: inline-block;
}
.contentlist li {
  position: relative;
  width: 180px;
  // height: 178px;
  float: left;
  margin-top: 60px;
  text-align: center;
  margin-left: 15px;
  // border: 1px solid red;
  padding: 24px 0;
  z-index: 665;
}
.contentlist li span{
   display: inline-block;
   font-size: 18px;
   color: #333333;
   width: 180px;
   height: 30px;
   line-height: 30px;
   text-align: center;
   position: absolute;
   left: 0px;
   bottom: 24px;
}
.contentlist li:hover span{
   color: #0071fc;
   font-weight: 600;
   font-size: 20px;
}
.contentlist li:hover{
   transform: scale(1.1);
   background: #fff;
   box-shadow: rgba(223, 225, 233, 0.6) 0px 0px 8px 5px;
   z-index: 999;
}
.contentlist li:first-child {
  margin-left: 20px;
}
.contentlistBorder{
  width: 100%;
  position: absolute;
  left: 0px;
  top: 94px;
}
.contentlistBorder ul li{
  float: left;
  width: 196px;
  height: 80px;
  border-right:1px solid #dbebff;
  z-index: 666;
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
  width: 1200px;
  margin: 40px auto;
  overflow: hidden;
}
.newcon {
  width: 590px;
  float: left;
}
.newsbck {
  width: 590px;
  border-bottom: 1px solid #e5e5e5;
}
.newsbck span {
  display: inline-block;
  background: url(../assets/img/newsbck.png) no-repeat no-repeat left;
  width: 130px;
  height: 50px;
  font-size: 18px;
  color: #fff;
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
  background: #454544;
  vertical-align: auto;
  margin-right: 10px;
  margin-bottom: 3px;
}
.newcon ul li:hover .dot{
   background: #0071fc;
}
.newcon  .newscontitle{
  // width: 440px;
  display: inline-block;
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
}
.newcon ul li:hover{
 transform: scale(1.02);
 border: 1px solid #f6f7fa;
 box-shadow: 4px 3px 9px rgba(21, 43, 127, 0.2)!important;
 font-weight: 600;
 color: #0071fc;
 cursor: pointer;
}
.newcon ul li .time {
  float: right;
}
.sevenzhan {
  float: right;
  width: 580px;
  height: 328px;
}
.sevenzhan:hover{
    // box-shadow: 10px 9px 10px rgba(191, 194, 204, 0.8)!important;
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
.yunhall {
  width: 1200px;
  height: 260px;
  margin: 0 auto;
}
.yunhall ul li {
  float: left;
  width: 260px;
  height: 260px;
  margin-left: 53px;
  // padding: 4px;
}
.yunhall ul li:hover{
    transform: scale(1.02);
    // box-shadow: 8px 8px 10px rgba(191, 194, 204, 0.8)!important;
    box-shadow: rgba(191, 194, 204, 0.6) 0px 0px 15px 10px;
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
.metting {
  width: 1200px;
  height: 440px;
  margin: 0 auto;
}
.meetp{
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  height: 55px;
  line-height: 40px;
}
#video {
  width: 680px;
  float: left;
}
.todayActivity {
  float: right;
  width: 490px;
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
  height: 90px;
  line-height: 100px;
}
.todayActivity ul li span {
  font-size: 16px;
  color: #8c8c8c;
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
  height: 280px;
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
.el-tabs__nav .is-top{
   height: 40px;
   line-height: 40px;
   font-size: 24px;
   margin-right: 30px;
   padding: 0 20px!important;
   text-align: center;
   color: #fff !important;
}
.el-tabs__active-bar{
  background: none;
}
.el-tabs__nav .is-top{
  font-size: 16px;
}
.el-tabs--border-card>.el-tabs__content{
  height: 160px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #0072fc!important;
  font-weight: bold;
  font-size: 16px;
}
.el-tabs--border-card{
  box-shadow: none;
  border:none;
}
.tabshow ,.el-tab-pane{
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
.layui-card-body ul {
  position: relative;
}
.layui-card-body ul li {
  position: relative;
  display: block;
  line-height: 35px;
}
.el-tabs__nav-scroll{
  background: #0072fc!important;
  color: #fff!important;
}
.el-tabs--border-card>.el-tabs__header{
  margin-bottom: 3px;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3)!important;
}
.layui-card-body ul li div {
  display: inline-block;
  font-size: 16px;
  color: #333333;
}
.layui-card-body .live-btn-will {
  width: 50px;
  background: #cccccc;
  position: absolute;
  right: 0;
  top: 10px;
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
.apply {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.apply div {
  float: left;
  width: 310px;
  height: 114px;
}
.apply div:last-child{
  width: 270px;
}
.apply div:hover{
   transform: scale(1.05);
}
// 抗击疫情
.uni{
  width:100%;
  height: 464px;
  background-color: #f9f9f9;
}
.unity {
  padding: 33px 0;
  width: 1200px;
  margin: 0 auto;
  color: #333333;
  overflow: hidden;
}
.unity a{ 
  color: #333333;
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
  color: #333333;
  font-size: 19px;
  font-weight: 700;
  height: 60px;
  line-height: 40px;
  text-align: center;
}
.fabutime {
  font-size: 16px;
  color: #9b9791;
  font-weight: 550;
  height: 38px;
  line-height: 90px;
}
.fabutime span:nth-child(2) {
  float: right;
}
.unity_right div{
  font-size: 16px;
  line-height: 32px;
}

// 特邀嘉宾
.guest {
  width: 1280px;
  margin: 0 auto;
  color: #333333;
  overflow: hidden;
  position: relative;
}
.guestbutton1 {
  position: absolute;
  left: 0px;
  top: 46%;
}
.guestbutton2 {
  position: absolute;
  right: 0px;
  top: 46%;
}
.guest ul {
  width: 1200px;
  margin: 0 auto;
}
.guest ul li {
  float: left;
  margin-left: 25px;
  position: relative;
}
.guest ul li:nth-child(1) {
  margin-left: 0px;
}
.guest ul li:hover {
   transform: scale(1.03)
}
.guest_insbck {
  position: absolute;
  left: 0px;
  bottom: 4px;
  width: 220px;
  height: 52px;
  background: #000;
  opacity: 0.4;
}
.guest_ins {
  position: absolute;
  left: 5px;
  bottom: 0px;
  width: 220px;
  height: 50px;
  color: #fff;
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
</style>
