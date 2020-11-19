<template>
    <div class="companyYnDetail">
      <div class="companyYnDetail-banner" >
        <img src="../../assets/img/companyxqbck.png" alt="">
        <a href="javascript:history.go(-1)" class="xqback">返回</a>
      </div>
      <div class="companyCon">
         <div class="companyCentent">
           <div class="companyXq">
             <div class="companyXqleft"></div>
             <div class="companyXqright"></div>
           </div>
            <el-tabs id="mytabs" v-model="activeNameXq" @tab-click="handleClick" tab-position="left"  style="height: 560px;float:left;">
             <!-- 企业详情 -->
            <el-tab-pane label="企业详情" name="first" style="color:#fff"> 
             <div class="Companyxq">
              <p style="text-align:center;">{{this.companyListXq.companyName}}</p>
              <div class="companyIntroduce">{{this.companyListXq.companyIntroduce}}</div>
              <!-- <div class="Companypon">
                  <div>公司名称：<span>{{this.companyListXq.companyName}}</span></div>
                  <div>公司地址：<span></span></div>
                  <div>企业商铺：<span></span></div>
              </div>
              <div class="Companypon2">
                  <div>联系人：<span></span></div>
                  <div>联系电话：<span></span></div>
                  <div>地区分类：<span></span></div>
              </div> -->
          </div>
            </el-tab-pane>
            <!-- 视频 -->
            <el-tab-pane label="视频" name="second">
                <div class="ComanyVi">
                  <!-- <div class="vxq">暂无视频!{{this.companyListXq.vidoeUrl}}</div> -->
                  <div class="vxq" ><video :src=this.companyListXq.videoUrl controls="controls" muted="muted"></video> </div>
                </div>
            </el-tab-pane>
              <!-- 图文 -->
            <el-tab-pane label="图文" name="third">  
            <div class="CompanyTuwen">
                <p style="height:70px;text-align:center;font-size:18px;line-height:60px">{{this.companyListXq.companyName}}</p>
                <!-- <div class="companyIntroduce">{{this.companyListXq.companyIntroduce}}</div>
                <div class="Companypon">
                <img :src=this.companyListXq.logoUrl alt="">
                </div> -->
                <div v-html="this.companyListXq.content" class="companyIntroduce"></div>
            </div>
            </el-tab-pane>
          </el-tabs>
        
    
       </div>
      </div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      activeNameXq: "first",
      loading: true,
      activeName: null,
      companyListXq: null,
      itemUuid: this.$route.query.uuid
    };
  },
  mounted() {
    this.loading = false;
    // eslint-disable-next-line no-console
    this.hotcompanyListpart(this.$route.query.uuid)
  },
  methods: {
         // 新闻详细信息
    hotcompanyListpart(uuid){
       this.$http.get("/exhibitioncompanyapi/companyItem/"+ uuid)
      .then(res => {
        this.companyListXq = res.data.data
         // eslint-disable-next-line no-console
         console.log(this.companyListXq)
        //  console.log(this.uuid)
      })
      .catch( error =>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    // 左侧tabs切换
    handleClick(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    },
  
  }
};
</script>

<style lang="scss"> 
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
}
span{
  display: inline-block;
}
.h30{
  height: 30px;
}
.h40{
  width: 100%;
  height: 100%;
  height: 40px;
  }
.companyYnDetail {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &-banner{
   width: 100%;
   height: 100%;
    img{
     width: 100%;
   }
  }
}
   .xqback{
     display: inline-block;
     position: absolute;
     left: 22px;
     top: 22px;
     font-size: 16px;
     color: #b5b5b5!important;
     width: 80px;
     height: 30px;
     text-align: center;
     line-height: 30px;
     background: #1324cc;
   }
  .companyCon{
    width: 100%;
    // height: 1080px;
    position: absolute; 
    left: 0px;
    top: 258px;
    }
   .companyCentent{
    width: 1460px;
    margin: 0 auto;
    overflow: hidden; 
    padding: 0px 80px;
    position: relative;
  }

.companyXq{
  width: 1460px;
  margin: 0 auto;
  overflow: hidden;
  height: 560px;
  position: absolute;
  left: 80px;
  top:0px

}
.companyXqleft{
  background: #070a51;
  opacity: 0.5;
  float: left;
  width: 420px;
  height: 560px;
}
.companyXqright{
  background: #070a51;
  opacity: 0.5;
  height: 560px;
  width: 1000px;
  float: left;
  margin-left: 40px;
}



// 企业详情
.Companyxq{
  width: 840px;
  float: left;
  padding: 36px 80px;
  color: #ffffff!important;
}
.Companyxq p{
  font-size: 18px;
  height: 70px;
  line-height: 60px;
}
.companyIntroduce,.companyIntroduce span{
  color: #ffffff!important;
}
.companyIntroduce,.companyIntroduce p{
  font-size: 16px;
  line-height: 28px;
}
// .Companypon{
//   float: left;
//   margin-top: 30px;
//   img{
//     text-align: center;
//   }
// }
.Companypon2{
  float: left;
  margin-top: 30px;
  margin-left: 250px;
}
.Companypon div span{
  color: #4bc6ff;
  font-size: 12px;
}
.Companypon2 div span{
  color: #4bc6ff;
  font-size: 12px;
}

// 视频
.vxq{
  width: 1000px;
  height: 560px;
  margin: 0px auto;
}
.vxq video{
  width: 1000px;
  margin: 0 auto;
  height: 555px;
}
.tabshow, .el-tab-pane{
  padding: 0px;
}
// 图文
.CompanyTuwen{
  padding: 36px 80px;
  font-size: 14px;
  color: #ffffff;
}
.CompanyTuwen div{
  line-height: 28px;
}
.pag{
  width: 420px;
  margin: 0 auto;
  text-align: center;
}

.h40{
  height: 40px;
}





#mytabs  .el-tabs__item.is-left{
  text-align: center!important;
  color: #ffffff!important;
  height: 70px;
  line-height: 70px;
  font-size: 24px;
  background: url(../../assets/img/companyXqlogo.png) no-repeat center;
  margin-bottom: 70px;
}
 #mytabs .el-tabs__header .is-left{
  width: 420px!important;
}
 #mytabs .el-tabs__content{
  width: 1000px;
  float: right;
  height: 560px;
  overflow: auto;
  margin-left: 30px;
}
#mytabs .el-tabs__nav-scroll{
  background: none!important;
  margin-top: 100px;
  height: 422px!important;
}
 #mytabs .el-tabs__active-bar{
  width: 400px;
  background: none;
}
 #mytabs  .el-tabs__item.is-left.is-active{
  color: #00ffff!important;
  font-size: 30px;
}
 #mytabs .el-tabs__nav-scroll .el-tabs__nav .el-tabs__active-bar.is-left{
 margin-top: 100px!important;
}
 #mytabs .el-tabs--left .el-tabs__header.is-left{
  margin-right: 40px!important;
}
#mytabs .el-tabs--card>.el-tabs__header .el-tabs__nav{
  border:none;
}
 #mytabs .el-tabs--left.el-tabs--card .el-tabs__item.is-left{
  border:none;
}
 #mytabs .el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{
  border:none;
}

</style>