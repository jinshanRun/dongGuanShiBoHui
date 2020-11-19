<template>
  <div id="mobileapp">
    <router-view></router-view>
<!-- 固定底部选项栏 -->
<mt-tabbar :fixed="true">
      <mt-tab-item id="首页" @click.native="home()">
        <img slot="icon" src="./assets/img/indexlogo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="展商列表" @click.native="exhibitionList()">
        <img slot="icon" src="./assets/img/zslistlogo.png">
        展商列表
      </mt-tab-item>
      <mt-tab-item id="直播" @click.native="liveRoom()">
        <img slot="icon" src="./assets/img/zhibologo.png">
        直播
      </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem} from 'mint-ui';
export default {
  name: 'mobileApp',
  data(){
    return{

    }
  },
  mounted(){
  },
  methods:{
    home(){
      this.$router.push({path:'/mobileHome'})
    },
    exhibitionList(){
      this.$router.push({path: '/exhibitionCompanylist'});
    },
    liveRoom(){
      this.$router.push({path:'/mobileliveRoom'})
    }
  }
}
</script>

<style >
body,*,ul,li{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
#app{
  overflow: auto;
}
a,span{
  display: inline-block;
}
#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.h40{
  height: 40px;
}
.h25{
  height: 25px;
}


</style>
