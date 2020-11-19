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
  // border: 1px solid #fffd00;
  perspective: 500px;   /* 透视 眼睛距离屏幕的距离 */ 
  transform-style: preserve-3d;
}
.videobro ul li{
  // border:1px solid red;
  width: 24%;
  float: left;
  height: 24%;
  margin: 10px;
  // background: #ffffff;
}
.video1{
  position: absolute;
  left: 400px;
  top: 470px;
  transform: rotateX(30deg) rotateY(0deg) rotateZ(-40deg);
  animation: rotation 8s linear infinite;
}
@keyframes rotation {
    from {
        -webkit-transform: rotateX(30deg) rotateY(0deg) rotateZ(0deg) translateX(150px);
        opacity: 0.2;
    }
    to {
        -webkit-transform: rotateX(30deg) rotateY(10deg) rotateZ(20deg) translateX(-20px);
        opacity: 1;
    }
}
.video2{
  position: absolute;
  left: 20px;
  top: 160px;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  animation: rotation2 8s linear infinite;
}
@keyframes rotation2 {
    from {
        -webkit-transform: rotateX(00deg) rotateY(0deg) rotateZ(0deg) translate(80px,100px);
        opacity: 0.2;
    }
    to {
        -webkit-transform: rotateX(20deg) rotateY(10deg) rotateZ(40deg) translate(30px);
        opacity: 1;
    }
}
.video3{
  position: absolute;
  left: 570px;
  top: 50px;
  transform: rotateX(30deg) rotateY(0deg) rotateZ(0deg);
  animation: rotation3 8s linear infinite;
}
@keyframes rotation3 {
    from {
        -webkit-transform: rotateX(30deg) rotateY(0deg) rotateZ(0deg) translateX(0px);
        opacity: 0.2;
    }
    to {
        -webkit-transform: rotateX(30deg) rotateY(10deg) rotateZ(20deg) translateX(40px);
        opacity: 1;
    }
}
.video4{
  position: absolute;
  right: 80px;
  top: 280px;
  transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  animation: rotation4 8s linear infinite;
}
@keyframes rotation4 {
    from {
        -webkit-transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg) translateZ(-10px);
        opacity: 0.2;
    }
    to {
        -webkit-transform: rotateX(30deg) rotateY(-10deg) rotateZ(30deg) translateZ(30px);
        opacity: 1;
    }
}
#homeVideo{
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;/*这里是关键*/
  width: auto;
  height: auto;
}
</style>