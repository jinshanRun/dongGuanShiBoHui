<template>
  <div id="app">
     <router-view name="header"></router-view>
     <el-container style="margin-top:-60px">
      
      <el-main>
        <router-view />
      </el-main>
      
    </el-container> 
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
     
    };
  },
  mounted(){

  },
  methods: {
  
  },
};
</script>

<style lang="scss" scoped>
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

    // .el-header {
    //     width: 1200px;
    //     display: flex;
    //     justify-content: space-between;
    //     align-content: center;
    //     margin: 0 auto;
    //     position: absolute;
    //     left: 0%;
    //     top: 1%;
    //     z-index: 999;
    //     //background-color: #fff;

    //     .logo {
    //         width: 280px;
    //         padding: 10px;
    //         img {
    //             width: 100%;
    //             line-height: 60px;
    //         }
    //     }
    // }
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
        padding: 0 11px !important;
        font-size: 16px !important;
        border-bottom: none!important;
        background: none!important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        font-size: 16px;
        margin-bottom: 0px;
        border-bottom: none!important;
        background: none!important;
        color: #fff!important;
    }
    .el-menu-item:hover {
        background-color: rgba(255, 255, 255,0.4) !important;
    }
    .el-submenu:hover{
        background-color: rgba(255, 255, 255,0.1) !important;
    }
    .el-submenu__title:hover{
        background-color: rgba(255, 255, 255,0.1) !important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
        color: #fff;
    }
    // .el-menu--horizontal >.el-menu-item.is-active {
    //    background-color: #ffffff!important;
    //    opacity: 0.1;
    //    color: #fff;
    // }
    .el-menu-item.is-active {
        background-color: rgba(255, 255, 255,0.1) !important;
        color: #fff;
    }
    .el-submenu__title:hover .el-menu .el-menu--popup .el-menu--popup-bottom-start {
        background-color: rgba(255, 255, 255,0.1) !important;
    }
    .el-submenu__title:hover .el-menu .el-menu--popup .el-menu--popup-bottom-start .el-menu-item {
        background-color: rgba(255, 255, 255,0.1) !important;
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
