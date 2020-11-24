<template>
    <div class="xsztitem">
       <div class="meetarr-banner"><img src="../../assets/img/headerbck.png" alt=""></div>
       <div class="xsvideoparent">
        <video src="../../assets/video/video.mp4" autoplay="autoplay" muted loop  controls="controls" id="homeVideo"></video>

        <div class="xsvideobro">
         <ul>
            <li class="xsvideo1" @click="company1('ff7632e456174ad4b52d6fc76968f35420201023172642')"></li>
            <li class="xsvideo2" @click="company2('5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717')"></li>
            <li class="xsvideo3" @click="company3('d51083c57a99405fa3e7a5066a556f9720201023172826')"></li>
            <li class="xsvideo4" @click="company4('ee51986b1c97468eb20f28a1fc17826f20201023172841')"></li>
            <li class="xsvideo5" @click="company5('2b944fcfa09e42d588dcb6b5ace83ea420201023172900')"></li>
            <li class="xsvideo6" @click="company6('324e4b21bb1b4647bc0a7d1a1ad6655820201023172934')"></li>
            <li class="xsvideo7" @click="company7('35c6a237bfde4a4181beb441bf169de520201023172953')"></li>

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
      company1(uid){
        this.$router.push({path:'companygoodFood1',query:{uuid:uid}})
      },
     company2(uid){
      this.$router.push({path:'companyYN2',query:{uuid:uid}})
     },
     company3(uid){
      this.$router.push({path:'companyfoodResult3',query:{uuid:uid}})
     },
     company4(uid){
      this.$router.push({path:'companyzongH4',query:{uuid:uid}})
     },
     company5(uid){
      this.$router.push({path:'companyfoodCulture5',query:{uuid:uid}})
     },
     company6(uid){
      this.$router.push({path:'companyagrPro6',query:{uuid:uid}})
     },
     company7(uid){
      this.$router.push({path:'companyboutique7',query:{uuid:uid}})
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

.xsvideoparent{
  width: 100%;
  position: relative;
}
.xsvideobro{
  width: 100%;
  height: 100%;
  // background: #000;
  // opacity: 0.8;
  position: absolute;
  top: 0px;
  left:0px;
  z-index: 999;
}
.xsvideobro ul{
  width: 86%;
  height: 100%;
  border-radius: 1200px;
  position: relative;
  margin: 0 auto;
  // border: 1px solid #fffd00;
  perspective: 500px;   /* 透视 眼睛距离屏幕的距离 */
  transform-style: preserve-3d;
}
.xsvideobro ul li{
  // border:1px solid red;
  width: 25%;
  float: left;
  height: 25%;
  margin: 10px;
  //background: #ffffff;
  //opacity: 0.5;
}
.xsvideobro ul li:hover{
  cursor: pointer;
}
.xsvideo1{
  // width: 350px!important;
  position: absolute;
  left: 270px;
  bottom: 40px;
}
.xsvideo2{
  position: absolute;
  left: 40px;
  top: 350px;
}
.xsvideo3{
  // height: 350px!important;
  position: absolute;
  left: 320px;
  top: 20px;
}
.xsvideo4{
  position: absolute;
  right: 280px;
  top: 30px;
}
.xsvideo5{
  position: absolute;
  right: 80px;
  top: 380px;
}
.xsvideo6{
  position: absolute;
  right: 250px;
  bottom: 80px;
}
.xsvideo7{
  position: absolute;
  left: 620px;
  top: 410px;
}
#homeVideo{
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;/*这里是关键*/
  width: auto;
  height: auto;
}
</style>
