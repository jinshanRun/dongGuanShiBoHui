<template>
    <div class="xsztitem">
       <div class="meetarr-banner"><img src="../../assets/img/headerbck.png" alt=""></div>
       <div class="videoparent">
        <video src="../../assets/video/ysztvideo.mp4" autoplay="autoplay" muted loop  controls="controls" id="homeVideo"></video>
        <div class="videobro">
         <ul> 
            <router-link :to="{name: 'yunSfood1'}"><li class="video1" @click="yunshang1('c8610a0908b04ea0858f5ec22e9a4ed720201023173102')"></li></router-link>
            <router-link :to="{name: 'yunSkeji2'}"><li class="video2"  @click="yunshang2('218d0ba591b14f3daa39fcb9e0f4055b20201023173050')"></li></router-link>
            <router-link :to="{name: 'yunSnong3'}"><li class="video3"  @click="yunshang3('f1327fceaa2440f796570fb48856407220201023173039')"></li></router-link>
            <router-link :to="{name: 'yunSshen4'}"><li class="video4"  @click="yunshang4('d6ccd8b213b2419fbd53fe4e5070ea4420201023173027')"></li></router-link>
          </ul>
        </div>
      </div>
    </div>
</template>
<script scoped>
export default {
    data(){
      return{ 

      }
    },
    mounted(){

    },
    methods: {
      yunshang1(uid){
        this.$router.push({name:'yunSfood1',query:{uuid:uid}})
      },
     yunshang2(uid){
      this.$router.push({name:'yunSkeji2',query:{uuid:uid}})
     },
     yunshang3(uid){
      this.$router.push({name:'yunSnong3',query:{uuid:uid}})
     },
     yunshang4(uid){
      this.$router.push({name:'yunSshen4',query:{uuid:uid}})
     }
 },
}
</script>
<style lang="scss">
ul,li{
  list-style: none;
}
.xsztitem{
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
// .footer{
//   display: none!important;
// }
.videoparent{
  width: 100%;
  position: relative;
}
.videobro{
  width: 100%;
  height: 100%;
  // background: #000;
  // opacity: 0.8;
  position: absolute;
  top: 0px;
  left:0px;
  z-index: 999;
}
.videobro ul{
  width: 86%;
  height: 100%;
  border-radius: 1200px;
  position: relative;
  margin: 0 auto;
}
.videobro ul li{
  // border:1px solid red;
  width: 28%;
  float: left;
  height: 28%;
  margin: 10px;
  //background: #ffffff;
  //opacity: 0.5;
}
.video1{
  position: absolute;
  left: 200px;
  top: 550px;
}
.video2{
  position: absolute;
  left: 80px;
  top: 180px;
}
.video3{
  position: absolute;
  right: 70px;
  top: 180px;
}
.video4{
  position: absolute;
  right: 120px;
  top: 550px;
}
#homeVideo{
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;/*这里是关键*/
  width: auto;
  height: auto;
}
</style>