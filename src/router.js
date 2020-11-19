import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from './views/Header.vue'
import AppFooter from './views/footer.vue'
// pc端
import Home from './views/Home.vue'
import News from './views/News.vue'
import liveRoom from './views/liveRoom.vue'
import newsdetails from './views/newsdetails.vue'
import exhins from './views/exhins.vue'
import foodcultureDetails1 from './views/foodcultureDetails1.vue'
import foodcultureDetails2 from './views/foodcultureDetails2.vue'
import foodcultureDetails3 from './views/foodcultureDetails3.vue'
import foodcultureDetails4 from './views/foodcultureDetails4.vue'

import goodfood1  from './views/goodfood1.vue'
import goodfood2  from './views/goodfood2.vue'
import goodfood3  from './views/goodfood3.vue'

import guestxq from './views/guestxq.vue'
import guestxq2 from './views/guestxq2.vue'
import guestxq3 from './views/guestxq3.vue'
import guestxq4 from './views/guestxq4.vue'
import guestxq5 from './views/guestxq5.vue'

import foodculture1 from './views/foodculture1.vue'
import foodculture2 from './views/foodculture2.vue'
import foodculture3 from './views/foodculture3.vue'
import foodculture4 from './views/foodculture4.vue'
import expo1 from './views/expo1.vue'
import expo2 from './views/expo2.vue'
import expo3 from './views/expo3.vue'

import xsztVideo from './views/VideoDetailPage/xsztVideo.vue'
import yunshangVideo from './views/VideoDetailPage/yunshangVideo.vue'
import companygoodFood1 from './views/VideoDetailPage/companygoodFood1.vue'
import companyDetail from './views/VideoDetailPage/companyDetail.vue'
import companyYN2 from './views/VideoDetailPage/companyYN2.vue'
import companyfoodResult3 from './views/VideoDetailPage/companyfoodResult3.vue'
import companyzongH4 from './views/VideoDetailPage/companyzongH4.vue'
import companyfoodCulture5 from './views/VideoDetailPage/companyfoodCulture5.vue'
import companyagrPro6 from './views/VideoDetailPage/companyagrPro6.vue'
import companyboutique7 from './views/VideoDetailPage/companyboutique7.vue'
import yunSfood1 from './views/VideoDetailPage/yunSfood1.vue'
import yunSkeji2 from './views/VideoDetailPage/yunSkeji2.vue'
import yunSnong3 from './views/VideoDetailPage/yunSnong3.vue'
import yunSshen4 from './views/VideoDetailPage/yunSshen4.vue'

import kunming1 from './views/kunming1.vue'
import kunming2 from './views/kunming2.vue'
import kunming3 from './views/kunming3.vue'

import meetarrpc from './views/meetarr.vue'
import baoming from './views/baoming.vue'
import register from './views/register.vue'

import userApply from './views/userApply.vue'
import coopApply from './views/coopApply.vue'
import waiting from './views/waiting.vue'

// 展商服务
import exhibitionHall1 from './views/exhibitionHall1.vue'
import exhibitionGuide2 from './views/exhibitionGuide2.vue'
import exhibitionManual3 from './views/exhibitionManual3.vue'
import exhibitionForm4 from './views/exhibitionForm4.vue'

// 移动端
import exhibitionCompanylist from './views/mobile/components/exhibitionCompanylist'
import mobileliveRoom from './views/mobile/components/mobileliveRoom'
import mobilenewsdetails from './views/mobile/components/mobilenewsdetails'
import mobilenewsList from './views/mobile/components/mobilenewsList'
import companyListdetails from './views/mobile/components/companyListdetails'
import mobilemeetarr from './views/mobile/components/mobilemeetarr'
import guestarr from './views/mobile/components/guestarr.vue'
import mobilekunming from "./views/mobile/components/mobilekunming"
import mobileContact from "./views/mobile/components/mobileContact"
import mobilebaoming from "./views/mobile/components/mobilebaoming"
import mobilegoodfoods from "./views/mobile/components/mobilegoodfoods"
// import { Footer, Header } from 'element-ui'

Vue.use(Router)

let kunmingrouter = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default:Home,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会',
      },
    },
    {
      path: '/news',
      name: 'news',
      components:{
        default:News,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/liveRoom',
      name: 'liveRoom',
      components:{
        default:liveRoom,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/newsdetails',
      name: 'newsdetails',
      components:{
        default:newsdetails,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/exhins',
      name: 'exhins',
      components:{
        default:exhins,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodcultureDetails1',
      name: 'foodcultureDetails1',
      components:{
        default:foodcultureDetails1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodcultureDetails2',
      name: 'foodcultureDetails2',
      components:{
        default:foodcultureDetails2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodcultureDetails3',
      name: 'foodcultureDetails3',
      components:{
        default:foodcultureDetails3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodcultureDetails4',
      name: 'foodcultureDetails4',
      components:{
        default:foodcultureDetails4,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/goodfood1',
      name: 'goodfood1',
      components:{
        default:goodfood1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/goodfood2',
      name: 'goodfood2',
      components:{
        default:goodfood2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/goodfood3',
      name: 'goodfood3',
      components:{
        default:goodfood3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestxq',
      name: 'guestxq',
      components:{
        default:guestxq,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestxq2',
      name: 'guestxq2',
      components:{
        default:guestxq2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestxq3',
      name: 'guestxq3',
      components:{
        default:guestxq3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestxq4',
      name: 'guestxq4',
      components:{
        default:guestxq4,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestxq5',
      name: 'guestxq5',
      components:{
        default:guestxq5,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodculture1',
      name: 'foodculture1',
      components:{
        default:foodculture1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodculture2',
      name: 'foodculture2',
      components:{
        default:foodculture2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodculture3',
      name: 'foodculture3',
      components:{
        default:foodculture3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/foodculture4',
      name: 'foodculture4',
      components:{
        default:foodculture4,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/expo1',
      name: 'expo1',
      components:{
        default:expo1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/expo2',
      name: 'expo2',
      components:{
        default:expo2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/expo3',
      name: 'expo3',
      components:{
        default:expo3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/xsztVideo',
      name: 'xsztVideo',
      components:{
        default:xsztVideo,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/yunshangVideo',
      name: 'yunshangVideo',
      components:{
        default:yunshangVideo,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    // 视频跳转页面及其详情页
    {
      path: '/companygoodFood1',
      name: 'companygoodFood1',
      components:{
        default:companygoodFood1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyDetail',
      name: 'companyDetail',
      components:{
        default:companyDetail,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyYN2',
      name: 'companyYN2',
      components:{
        default:companyYN2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyfoodResult3',
      name: 'companyfoodResult3',
      components:{
        default:companyfoodResult3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyzongH4',
      name: 'companyzongH4',
      components:{
        default:companyzongH4,
        header:AppHeader,
        footer:AppFooter
      },
        title: '2020昆明食博会网上展会'
      },
    {
      path: '/companyfoodCulture5',
      name: 'companyfoodCulture5',
      components:{
        default:companyfoodCulture5,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyagrPro6',
      name: 'companyagrPro6',
      components:{
        default:companyagrPro6,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyboutique7',
      name: 'companyboutique7',
      components:{
        default:companyboutique7,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },

    // 云上展厅
    {
      path: '/yunSfood1',
      name: 'yunSfood1',
      components:{
        default:yunSfood1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/yunSkeji2',
      name: 'yunSkeji2',
      components:{
        default:yunSkeji2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/yunSnong3',
      name: 'yunSnong3',
      components:{
        default:yunSnong3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/yunSshen4',
      name: 'yunSshen4',
      components:{
        default:yunSshen4,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },

    {
      path: '/kunming1',
      name: 'kunming1',
      components:{
        default:kunming1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/kunming2',
      name: 'kunming2',
      components:{
        default:kunming2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/kunming3',
      name: 'kunming3',
      components:{
        default:kunming3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/meetarr',
      name: 'meetarr',
      components:{
        default:meetarrpc,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/baoming',
      name: 'baoming',
      components:{
        default:baoming,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/register',
      name: 'register',
      components:{
        default:register,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/userApply',
      name: 'userApply',
      components:{
        default:userApply,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/coopApply',
      name: 'coopApply',
      components:{
        default:coopApply,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/waiting',
      name: 'waiting',
      components:{
        default:waiting,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/exhibitionHall1',
      name: 'exhibitionHall1',
      components:{
        default:exhibitionHall1,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/exhibitionGuide2',
      name: 'exhibitionGuide2',
      components:{
        default:exhibitionGuide2,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/exhibitionManual3',
      name: 'exhibitionManual3',
      components:{
        default:exhibitionManual3,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/exhibitionForm4',
      name: 'exhibitionForm4',
      components:{
        default:exhibitionForm4,
        header:AppHeader,
        footer:AppFooter
      },
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: () => import('./views/Product.vue'),
    // },
    // {
    //   path: '/case',
    //   name: 'case',
    //   component: () => import('./views/Case.vue')
    // },
    // {
    //   path: '/casedetails/:id',
    //   name: 'casedetails',
    //   component: () => import('./views/CaseDetails.vue')
    // },
    // {
    //   path: '/goin',
    //   name: 'goin',
    //   component: () => import('./views/GoIn.vue')
    // },
    // {
    //   path: '/download',
    //   name: 'download',
    //   component: () => import('./views/Download.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    // 移动端路由
    {
      path: '/mobileHome',
      name: 'mobileHome',
      component: () => import('./views/mobile/components/mobileHome.vue'),
    },
    {
      path: '/exhibitionCompanylist',
      name: 'exhibitionCompanylist',
      component: exhibitionCompanylist,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/mobileliveRoom',
      name: 'mobileliveRoom',
      component: mobileliveRoom,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/mobilenewsList',
      name: 'mobilenewsList',
      component: mobilenewsList,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/mobilenewsdetails',
      name: 'mobilenewsdetails',
      component: mobilenewsdetails,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/companyListdetails',
      name: 'companyListdetails',
      component: companyListdetails,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/mobilemeetarr',
      name: 'mobilemeetarr',
      component: mobilemeetarr,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
    {
      path: '/guestarr',
      name: 'guestarr',
      component: guestarr,
      meta: {
        title: '2020昆明食博会网上展会'
      }
    },
   {
     path: "/mobilekunming",
     name: "mobilekunming",
     component: mobilekunming,
     meta: {
       title: '2020昆明食博会网上展会'
     }
   },
   {
    path: "/mobileContact",
    name: "mobileContact",
    component: mobileContact,
    meta: {
      title: '2020昆明食博会网上展会'
    }
  },
  {
    path: "/mobilebaoming",
    name: "mobilebaoming",
    component: mobilebaoming,
    meta: {
      title: '2020昆明食博会网上展会'
    }
  },
  {
    path: "/mobilegoodfoods",
    name: "mobilegoodfoods",
    component: mobilegoodfoods,
    meta: {
      title: '2020昆明食博会网上展会'
    }
  },
    // 移动端路由结束



    // pc端admin页面
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/Admin.vue'),
      children: [{
          path: '/admin/user',
          name: 'user',
          component: () => import('./views/Admin/User.vue')
        },
        {
          path: '/admin/news',
          name: 'new',
          component: () => import('./views/Admin/News.vue')
        },
        {
          path:'/admin/live',
          name:'live',
          component:()=>import('./views/Admin/LiveBroadcast.vue')
        },
        {
          path: '/admin/cases',
          name: 'cases',
          component: () => import('./views/Admin/Cases.vue')
        },
        {
          path: '/admin/test',
          name: 'test',
          component: () => import('./views/Admin/test.vue')
        },
        {
          path: '/admin/company',
          name: 'company',
          component: () => import('./views/Admin/company.vue')
        },
        {
          path:'/admin/culture',
          name:'Culture',
          component:() => import('./views/Admin/Culture.vue')
        },
        {
          path: '/admin/team',
          name: 'team',
          component: () => import('./views/Admin/Team.vue')
        },
        {
          path: '/admin/course',
          name: 'course',
          component: () => import('./views/Admin/Course.vue')
        },
        {
          path: '/admin/enterprise',
          name: 'enterprise',
          component: () => import('./views/Admin/Enterprise.vue')
        },
        {
          path: '/admin/honor',
          name: 'honor',
          component: () => import('./views/Admin/Honor.vue')
        },
        {
          path: '/admin/dictionary',
          name: 'dictionary',
          component: () => import('./views/Admin/Dictionary.vue')
        },
        {
          path: '/admin/page',
          name: 'page',
          component: () => import('./views/Admin/Page.vue')
        },
        {
          path:'/admin/companyList',
          name:'companyList',
          component:()=>import('./views/Admin/ExhibitionCompanyList.vue')
        },
        {
          path:'/admin/LiveBroadcast',
          name:'liveBroadcast',
          component:() => import('./views/Admin/LiveBroadcast')
        },
        {
          path:'/admin/articleList',
          name:'articleList',
          component:()=>import('./views/Admin/ArticleList.vue')
        },
        {
          path:'/admin/cultureList',
          name:'cultureList',
          component:()=>import('./views/Admin/CultureManager.vue')
        },
        {
          path:'/admin/liveList',
          name:'liveList',
          component:()=>import('./views/Admin/LiveManager.vue')
        },
        {
          path:'/admin/mediaRegisterManager',
          name:'mediaRegisterManager',
          component:()=>import('./views/Admin/MediaRegisterManager.vue')
        },
        {
          path:'/admin/PartnerManager',
          name:'partnerManager',
          component:()=>import('./views/Admin/PartnerManager.vue')
        },
        {
          path:'/admin/companySignUpManager',
          name:'companySignUpManager',
          component:()=>import('./views/Admin/CompanySignUpManager.vue')
        },
        {
          path:'/admin/consumerSignUpManager',
          name:'ConsumerSignUpManager',
          component:()=>import('./views/Admin/ConsumerSignUpManager.vue')
        },
        {
          path:'/admin/guestInfoManager',
          name:'guestInfo',
          component:()=>import('./views/Admin/GuestInfoManager.vue')
        },
        {
          path:'/admin/addGuest',
          name:'addGuest',
          component:()=>import('./views/Admin/GuestAdd.vue')
        },
      ]
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
kunmingrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default kunmingrouter
