<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header fixed>
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
            <mt-tab-item id="meet-container1">会议详情</mt-tab-item>
            <mt-tab-item id="meet-container2">参会嘉宾</mt-tab-item>
            <mt-tab-item id="meet-container3">组织机构</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="meet-container1" class="container1" >
                  <p style="font-size: 32px;color: #333333; font-weight: 600;height: 80px;line-height: 80px;">
                     <img src="../assets/img/comlo.png" alt="" style="vertical-align: bottom;margin-bottom: 24px;"> 会议介绍
                 </p>
                    <div>开幕式暨峰会将充分融合互联网、人工智能、新媒体等技术手段，呈现智能时代下，人与未来的相遇、人与智能科技的完美融合，创造身临其境的视觉体验，致力打造“线上线下、虚实结合、智能体验、内外联动”的线上盛会。大会拟邀请智能化领域知名专家和企业家发表主旨演讲；邀请行业领军企业重磅发布智能产业新产品、新技术、新业态、新应用、新成果。交流产业发展前沿，分享行业最新成果，共同推动智能产业高质量发展，实现为经济赋能、为生活添彩。</div>
                 <p style="font-size: 32px;color: #333333; font-weight: 600;height: 80px;line-height: 80px;margin-top:10px">
                     <img src="../assets/img/comlo.png" alt="" style="vertical-align: bottom;margin-bottom: 24px;"> 会议安排
                 </p>
                 <div class="mmeetbck17">
                   <p>11月15日</p>
                   <p>08:30-09:00 暖场环节 </p>
                   <p>09:00-09:30 线上开幕式</p>
                   <p>09:30-12:00 线上峰会及发布</p>
                 </div>
                  <div class="mmeetbck17">
                   <p>11月16日</p>
                   <p>08:30-09:00 暖场环节 </p>
                   <p>09:00-09:30 线上开幕式</p>
                   <p>09:30-12:00 线上峰会及发布</p>
                 </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2" style="margin-top:30px">
                    <mt-cell> 
                      <div><img src="../assets/img/guestpep.png" alt=""> </div>
                      <div><img src="../assets/img/guest1.png" alt=""></div>
                    </mt-cell>
                     <mt-cell>
                       <div><img src="../assets/img/guest2.png" alt=""></div>
                       <div><img src="../assets/img/guest3.png" alt=""></div>
                      </mt-cell>
                        <!-- <mt-cell>
                       <div><img src="../assets/img/guest1.png" alt=""></div>
                       <div><img src="../assets/img/guest2.png" alt=""></div>
                       <div><img src="../assets/img/guest3.png" alt=""></div>
                      </mt-cell> -->
                </mt-tab-container-item>
                 <mt-tab-container-item id="meet-container3">
                  <div class="mobileOriginz">
                    <p>指导单位：</p>
                    <ul>
                      <li>商务部</li>
                      <li>国家国资委</li>
                    </ul>
                  </div>
                  <div class="mobileOriginz">
                    <p>支持单位：</p>
                    <ul>
                      <li>中国轻工业联合会</li>
                      <li>广东省人民政府</li>
                    </ul>
                  </div>
                  <div class="mobileOriginz">
                    <p>主办单位：</p>
                    <ul>
                      <li>中国食品报社</li>
                      <li>商务部投资促进事务局</li>
                      <li style="margin-top:24px">东莞市人民政府</li>
                    </ul>
                  </div>
                   <div class="mobileOriginz">
                    <p>承办单位：</p>
                    <ul>
                      <li>中国国际贸促会商业行业分会</li>
                      <li style="margin-right:0px">中国食品报社信息中心</li>
                      <li style="margin-top:24px">东莞市商务局</li>
                    </ul>
                  </div>
                   <div class="mobileOriginz">
                    <p>协办单位：</p>
                    <ul>
                      <li>中青联盟大数据研究（北京）有限公司</li>
                      <li style="margin-top:24px">北京高斯智慧科技有限公司</li>
                      <li style="margin-top:24px">四川柏视文化传媒有限公司</li>
                    </ul>
                  </div>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>
    <div class="h30"></div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
             active: 'meet-container1'
        }
    },
    mounted(){
       
    },
    methods:{
      
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
}
.mmeetbck17{
  color: #ffffff;
  background: url(../assets/img/meetanpaiback.png) no-repeat no-repeat;
  padding: 17px;
  line-height: 40px;
  margin-top: 8px;
}
.container1 div{
  font-size: 28px;
}
.mint-cell{
  margin-bottom: 20px;
}
.mint-cell-value div{
  margin-left: 20px;
}
.mint-cell-value div:first-child{
  margin-left: 0px;
}
/* 组织机构 */
.mobileOriginz{
  overflow: hidden;
}
.mobileOriginz p{
  font-size: 28px;
  color: #666666;
  height: 80px;
  line-height: 80px;
}
.mobileOriginz ul li{
  background: #e4effd;
  padding: 9px 24px;
  float: left;
  border-radius: 4px;
  margin-right: 24px;
  font-size: 24px;
  color: #333333;
}
</style>