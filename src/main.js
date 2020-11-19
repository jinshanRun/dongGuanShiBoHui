import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});

//富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// import { from } from 'core-js/fn/array';
Vue.use(VueQuillEditor)

// 修改title
router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

// 页面跳转定位问题
router.afterEach(() => {
  window.scrollTo(0,0);
  });


  // 移动端 start
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Button, Cell,Navbar, TabItem, TabContainer,TabContainerItem } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import { Field,Toast } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Field.name, Field);


Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.use(Mint);
Vue.component(Actionsheet.name, Actionsheet);
// 移动端end

// 动画
import animate from "animate.css"

Vue.config.productionTip = false

//设置超时时间
axios.defaults.timeout = 10000
//设置api地址
//全局定义axios
// axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api/'
//正式地址
// axios.defaults.baseURL = 'http://39.106.51.133:8081/dongguan/'
//测试地址
axios.defaults.baseURL = 'http://39.106.51.133:8082/dongguan/'
Vue.prototype.$http = axios

// 图片服务器地址
// Vue.prototype.imgserver = 'http://shkjgw.shkjem.com/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
