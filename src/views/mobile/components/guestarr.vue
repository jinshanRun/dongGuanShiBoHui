<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header title="参会嘉宾" fixed>
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
        <mt-navbar  v-model="active"  id="mobileExhibition" style="margin-bottom:20px">
            <mt-tab-item id="meet-container2">参会嘉宾</mt-tab-item>
            <mt-tab-item id="meet-container1">会议详情</mt-tab-item>
           
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="meet-container1" class="container1" >
                  <p style="font-size: 32px;color: #0271f7; font-weight: 600;height: 70px;line-height: 70px;">
                     <img src="../assets/img/comlo.png" alt="" style="vertical-align: bottom;margin-bottom: 16px;"> 会议介绍
                 </p>
                    <div>开幕式暨峰会将充分融合互联网、人工智能、新媒体等技术手段，呈现智能时代下，人与未来的相遇、人与智能科技的完美融合，创造身临其境的视觉体验，致力打造“线上线下、虚实结合、智能体验、内外联动”的线上盛会。大会拟邀请智能化领域知名专家和企业家发表主旨演讲；邀请行业领军企业重磅发布智能产业新产品、新技术、新业态、新应用、新成果。交流产业发展前沿，分享行业最新成果，共同推动智能产业高质量发展，实现为经济赋能、为生活添彩。</div>
                 <p style="font-size: 32px;color: #0271f7; font-weight: 600;height: 70px;line-height: 70px;">
                     <img src="../assets/img/comlo.png" alt="" style="vertical-align: bottom;margin-bottom: 16px;"> 会议安排
                 </p>
                 <div>
                   <p style="color:#333333">11月15日</p>
                   <p>08:30-09:00 暖场环节 </p>
                   <p>09:00-09:30 线上开幕式</p>
                   <p>09:30-12:00 线上峰会及发布</p>
                 </div>
                 
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2">
                    <mt-cell> 
                      <div><img src="../assets/img/guestpep.png" alt=""> </div>
                      <div><img src="../assets/img/guest1.png" alt=""></div>
                    </mt-cell>
                     <mt-cell>
                       <div><img src="../assets/img/guest2.png" alt=""></div>
                       <div><img src="../assets/img/guest3.png" alt=""></div>
                      </mt-cell>
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
             active: 'meet-container2'
        }
    },
    mounted(){
       
    },
    methods:{
      
    },

}
</script>
<style scoped>
#meetarr{
  margin-bottom: 100px;
}
.head{
    height: 88px;
}
.meetarrVideo{
  padding: 20px 30px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.meetform{
  padding: 0 30px;
}
.container1 div{
  font-size: 32px;
  color: #666666;
  line-height: 50px;
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
</style>