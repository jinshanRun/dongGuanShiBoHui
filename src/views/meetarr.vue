<template>
    <div class="meetarr">
      <div class="meetarr-banner" v-loading="loading"><img src="../assets/img/meetbanner.png" alt=""></div>
      <div class="meetarr-content">
          <div class="meetarr-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>展会活动</p>
              <ul class="meetarr-content-list">
                  <li>
                    <p>开幕式</p>
                    <div><p>开幕式暨峰会
                      <!-- <img src="../assets/img/huifang.png" alt=""> -->
                      </p></div>
                    </li>
                   <li>
                    <p>闭幕式</p>
                    <div><p>闭幕式
                      <!-- <img src="../assets/img/huifang.png" alt=""> -->
                      </p></div>
                    </li>
              </ul>
              <div class="meetshouce">会议手册</div>
          </div>
          <div class="meetarr-content-right">
              <p>开幕式暨峰会</p>
              <div class="meetarr-content-xq">
<!--              <img src="../assets/img/huifangVideo.png" alt="">-->
              <div class="meetarr-content-xq-jieshao">
                <p>会议介绍</p>
                <div>开幕式暨峰会将充分融合互联网、人工智能、新媒体等技术手段，呈现智能时代下，人与未来的相遇、人与智能科技的完美融合，创造身临其境的视觉体验，致力打造“线上线下、虚实结合、智能体验、内外联动”的线上盛会。大会拟邀请智能化领域知名专家和企业家发表主旨演讲；邀请行业领军企业重磅发布智能产业新产品、新技术、新业态、新应用、新成果。交流产业发展前沿，分享行业最新成果，共同推动智能产业高质量发展，实现为经济赋能、为生活添彩。</div>
              </div>
              <div class="meetarr-content-xq-jieshao">
               <p>会议安排</p>
               <div class="meetarr-content-xq-anpai pcmeetarr">
                 <li>
                   <span style="font-size:14px;color:#333333;font-weight: bold;">11月15日</span><br>
                   <span>08:30-09:00  暖场环节</span><br/>
                   <span>09:00-09:30  线上开幕式</span><br/>
                   <span>09:30-12:00  线上峰会及发布</span>
                 </li>
                 <!-- <li>
                 <p>11月12日-15日</p>
                 <span>参加中国食文化国际交流、中国食品科技成果展览、食品产业博览会人员陆续布展 </span><br/>
                 </li> -->
                   <!-- <li>
                 <p>11月16日</p>
                 <span>线上线下同步开展 </span><br/>
                 </li>
                   <li>
                 <p>11月17日</p>
                 <span>上午：中国食文化国际交流博览会开幕、“中华传统好食品”颁奖典礼<br/>下午：举行食品经济发展国际高峰论坛及投融资对接会</span>
                 </li>
                   <li>
                 <p>11月18日</p>
                 <span>上午：开展中外食品科技产业发展对话活动<br/>下午：举行中华传统好食品保护与升级发展论坛及亚太食品产业供需合作对接会 </span><br/>
                 </li>
                   <li>
                 <p>11月19日</p>
                 <span>上午：举行食品企业、示范园区、示范县（市区）与投资融资机构洽谈会和现场签约<br/>下午：线下博览会撤馆，线上展览至11月25日 </span><br/>
                 </li>
                   <li>
                 <p>11月20日-25日</p>
                 <span>2020年11月22日线下展会结束<br/>2020年11月25日线上展会结束 </span>
                 </li> -->
               </div>
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
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
}
.h30{
  height: 30px;
}
.meetarr {
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
          width: 180px;
          margin-right: 20px;
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
          width: 180px;
          margin-top: 18px;
          background: #f7f7f7;
          height: 270px;
      }
      &-list li{
          height: 89px;
          color: #333333;
          font-size: 16px;
          padding: 14px 14px 15px 14px;
          position: relative;
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
              margin: 0 auto;
              text-align: center;
              &-jieshao{
                background: #fafafa;
                height: 180px;
                text-align: left;
                padding: 0 20px 34px 20px;
                margin-top: 30px;
                text-align: justify;
              }
              &-anpai p{
                  width: 286px;
                  height: 30px;
                  line-height: 30px;
                  color: #f9680b;
                  text-align: center;
              }
               &-anpai span{
                  line-height: 24px;
                  font-size: 14px;
              }
          }
  }
}

.pcmeetarr li{
  //  width: 273px;
   float: left;
   height: 100px;
   font-size: 24px;
   margin-left: 20px;
   margin-bottom: 40px;
  //  text-align: center;
}
.pcmeetarr li:first-child,.pcmeetarr li:nth-child(4){
  margin-left: 0px;
}
 .meetarr-content-list li p{
        font-size: 18px;
        color: #f9680b;
        font-weight: 580;
      }
 .meetarr-content-list li div{
        background: url(../assets/img/meetl.png) no-repeat no-repeat left;
        width: 184px;
        height: 60px;
        position: absolute;
        left:10px;
        bottom:15px;
      }
 .meetarr-content-list li div p{
        font-size: 14px;
        color: #666666;
        position: absolute;
        left:18px;
        bottom:-0px;
      }
       .meetarr-content-list li div p img{
         margin-left: 10px;
         margin-bottom: -2px;
      }
      .meetshouce{
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #b6b6b6;
        color: #999999;
        font-size: 18px;
        font-weight: 600;
        margin-top: 10px;
      }
</style>
