<template>
<div id="myheadstyle">
     <el-header >
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#0071fc"
          background-color="rgba(255, 255, 255,0.8)"
          @select="handleSelect"
          :router="router">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news" class="nohover">新闻中心</el-menu-item>
          <el-menu-item index="/meetarr" class="nohover">展会活动</el-menu-item>
          <el-submenu index="2" id="myhard" style="width:140px">
            <template slot="title">线上展厅</template>
            <el-menu-item index="/exhins">展会介绍</el-menu-item>
            <el-menu-item index="/xsztVideo">线上展厅</el-menu-item>
            <el-menu-item index="/yunshangVideo">云上展厅</el-menu-item>
            <el-menu-item index="/liveRoom">网红直播</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/waiting">展厅直播</el-menu-item> -->
          <!-- <el-menu-item index="/waiting">展商服务</el-menu-item> -->
          <el-submenu index="3" style="width:140px">
            <template slot="title">展商服务</template>
            <el-menu-item index="/exhibitionHall1">展厅类别</el-menu-item>
            <el-menu-item index="/exhibitionGuide2">展馆走向</el-menu-item>
            <el-menu-item><a href="http://39.106.51.133:8091/shibohui/att2.pdf" target="_blank"> 招商手册</a></el-menu-item>
            <el-menu-item index="/exhibitionForm4">参展申请</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">走进博览会</template>
            <el-menu-item index="/expo1">展会概括</el-menu-item>
            <el-menu-item index="/expo2">组织机构</el-menu-item>
            <el-menu-item index="/expo3">联系我们</el-menu-item>
          </el-submenu>
<!--          <el-submenu index="5" style="width:140px">-->
<!--            <template slot="title">走进东莞</template>-->
<!--            <el-menu-item index="/kunming1">东莞市情</el-menu-item>-->
<!--            <el-menu-item index="/kunming2">产业发展</el-menu-item>-->
<!--            <el-menu-item index="/kunming3">魅力东莞</el-menu-item>-->
<!--          </el-submenu>-->
          <el-menu-item class="nohover"><a href="http://www.dg.gov.cn/zjdz/index.html" target="_blank">走进东莞</a></el-menu-item>
          <el-menu-item class="nohover"><a href="http://shop.sasmyun.com/" target="_blank">万食通云商城</a></el-menu-item>

        </el-menu>
      </el-header>
      </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false,
    };
  },
  mounted(){

  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
    },
  },
};
</script>
<style  lang="scss">
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
   #myheadstyle{
       width: 100%;
       height: 60px;
       position: relative;

   }
    .el-header {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 0 auto;
        position: absolute;
        left: 18%;
        top: 1%;
        z-index: 999;
        //background-color: #fff;

        .logo {
            width: 280px;
            padding: 10px;
            img {
                width: 100%;
                line-height: 60px;
            }
        }
    }
    .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
        margin-left: 5px;
    }
    .el-menu {
        background: none !important;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none !important;
    }
    .el-menu-demo .el-menu--horizontal .el-menu{
        background: none!important;
    }
    .el-menu--horizontal > .el-menu-item {
        color: #f7f7f7 !important;
        padding: 0 15px !important;
        font-size: 18px !important;
        border-bottom: none!important;
        background: none!important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        font-size: 18px;
        margin-bottom: 0px;
        border-bottom: none!important;
        background: none!important;
        color: #fff!important;
    }
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
      margin-top: -4px!important;
      min-width: 140px!important;
      text-align: center;
    }
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup .el-menu-item {
      margin-top: 1px!important;
      font-weight: bolder;
    }
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup .el-menu-item a{
      color: #0071fc!important;
    }
    .el-menu--collapse .el-menu .el-submenu, .el-menu--popup .el-menu-item a:hover{
      color: #ffffff!important;
    }
    .el-menu-item:hover {
        background-color: rgb(255,14,51) !important;
        color: #fff!important;
    }
    .el-submenu:hover{
        background-color: rgb(255,14,51) !important;  //有下拉框的item
    }
     //.el-submenu__title:hover{
     //    background-color: rgba(39, 39, 39,0.3) !important;
     //}
    .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
        color: #fff;
    }
    .el-menu-item.is-active {
        background-color: rgb(255,14,51) !important;
        color: #fff;
    }
    .el-submenu__title:hover .el-menu .el-menu--popup .el-menu--popup-bottom-start {
        background-color: rgb(255,14,51) !important;
        margin-top: 10px !important;
    }
    .el-submenu__title:hover .el-menu .el-menu--popup .el-menu--popup-bottom-start .el-menu-item {
        background-color: rgb(255,14,51) !important;
        margin-top: 10px !important;
    }
    .nohover:hover{
     background-color: rgb(255,14,51) !important;
    }
    .el-main {
        padding: 0 !important;
    }

    .footer {
        width: 100%;
        overflow: hidden;
        // position: absolute;
        // bottom: 0;
        background-color: #4959ef;
        &-content {
            width: 1240px;
            margin: 0 auto;
            padding: 40px 0px;
            display: flex;
            justify-content: space-between;
            .content-nav {
                width: 1210px;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                li {
                    display: flex;
                    flex-direction: column;
                    padding: 0 20px;
                    //justify-content: center;
                    align-items: flex-start;
                    p {
                        font-size: 16px;
                        color: #f7f7f7 !important;
                        font-weight: 600;
                        padding: 10px 0;
                    }
                    span {
                        color: #f7f7f7;
                        padding: 5px 0;
                        font-size: 14px;
                    }
                }
            }
            img {
                width: 170px;
                height: 170px;
                padding: 10px;
            }
        }
        .copyright {
            height: 30px;
            background: #125688;
            span {
                color: #fff;
                line-height: 30px;
            }
        }
    }
    // 战略合作伙伴
    .allheuo{
        width:100%;
        background-color: #f9f9f9;
        padding: 40px 0;
    }
    .zhanhezuo,.hezuo {
        width: 1200px;
        margin: 0 auto;
    }
    .zhanhezuo img,.hezuo img{
        width: 1200px;
        height: 84px;
    }
    .meetp{
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        height: 55px;
        line-height: 40px;
    }

    // 备案号
    .beian{
        width: 100%;
        border-top: 1px dotted #498bef;
        overflow: hidden;
    }
    .beian div{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
        color: #dddddd;
        font-size: 10px;
    }
    .beian div span{
        width: 1200px;
        display: block;
        float: left;
        padding: 4px;
        text-align: center;
    }

</style>
