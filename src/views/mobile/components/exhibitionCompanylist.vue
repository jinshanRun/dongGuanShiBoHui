<template>
<div>
    <div style="margin-bottom:100px;" @click="testShow()">
         <!-- 头部 -->
    <div class="header">
      <img src="../assets/img/banner.png" alt="">
    </div>
    <div class="h30"></div>
    <!-- 线上展厅 云上展厅 -->
    <div style="padding:20px 30px">
        <mt-navbar  v-model="active" id="mobileExhibition" style="margin-bottom:20px">
            <mt-tab-item id="tab-container1" @click.native="company1('ff7632e456174ad4b52d6fc76968f35420201023172642')">线上展厅</mt-tab-item>
            <mt-tab-item id="tab-container2" @click.native="yunshang1('c8610a0908b04ea0858f5ec22e9a4ed720201023173102')">云上展厅</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active" id="mobilecell">
                <mt-tab-container-item id="tab-container1"  >
                    <mt-cell  title="中华传统好食品馆" @click.native="company1('ff7632e456174ad4b52d6fc76968f35420201023172642')" :style="{color:colorflag}"></mt-cell>
                    <mt-cell title="食品科技创新成果馆" @click.native="company3('d51083c57a99405fa3e7a5066a556f9720201023172826')" :style="{color:colorflag3}"></mt-cell>
                    <mt-cell title="消费扶贫特色农副产品馆" @click.native="company6('324e4b21bb1b4647bc0a7d1a1ad6655820201023172934')" :style="{color:colorflag6}"></mt-cell>
                    <mt-cell title="中国美食文化馆" @click.native="company5('2b944fcfa09e42d588dcb6b5ace83ea420201023172900')" :style="{color:colorflag5}"></mt-cell>
                    <mt-cell  title="广东特色馆" @click.native="company2('5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717')" :style="{color:colorflag2}"> </mt-cell>
                    <mt-cell title="精品馆" @click.native="company7('35c6a237bfde4a4181beb441bf169de520201023172953')" :style="{color:colorflag7}"></mt-cell>
                    <mt-cell title="综合馆" @click.native="company4('ee51986b1c97468eb20f28a1fc17826f20201023172841')" :style="{color:colorflag4}"></mt-cell>

                   
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <mt-cell title="食品文化类" @click.native="yunshang1('c8610a0908b04ea0858f5ec22e9a4ed720201023173102')" :style="{color:Ycolorflag1}"></mt-cell>
                    <mt-cell title="食品科技类" @click.native="yunshang2('218d0ba591b14f3daa39fcb9e0f4055b20201023173050')" :style="{color:Ycolorflag2}"></mt-cell>
                    <mt-cell title="农副产品类" @click.native="yunshang3('f1327fceaa2440f796570fb48856407220201023173039')" :style="{color:Ycolorflag3}"></mt-cell>
                    <mt-cell title="深加工食品类" @click.native="yunshang4('d6ccd8b213b2419fbd53fe4e5070ea4420201023173027')" :style="{color:Ycolorflag4}"></mt-cell>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>
 <div class="h30"></div>
    <!-- 热门展商 -->
    <div class="hotCommany">
     <p class="txtp"><img src="../assets/img/comlo.png" alt="">热门展商</p>
      <ul>
           <li v-for="(item,i) in hotCompanyList" :key="i" @click="companyYnDetail(item.companyUuid)">
            <img :src=item.logoUrl alt="">
          </li>
      </ul>
    </div>
     <div class="h30"></div>
    <!-- 展商列表 -->
     <div class="companyList">
        <p class="txtp"><img src="../assets/img/comlo.png" alt="">展商列表</p>
        <ul>
            <li v-for="(item,i) in myCompanyList" :key="i" >
            <div class="companyListimg"><img :src=item.propagandaUrl alt="" @click="companyYnDetail(item.companyUuid)"></div>
            <div class="companyListtxt" @click="companyYnDetail(item.companyUuid)">
                <p>{{item.companyName}}</p>
                <div>
                   {{item.companyIntroduce}}
               </div>
            </div>
             <div class="mobileNumberTime">
                    <p class="see"><img src="../assets/img/see.png" alt="" style="margin-top:16px;margin-right:6px"><span>{{item.lookCount !== null ? item.lookCount : 0}}</span></p>
                    <p class="see" @click="zanNum(item.companyUuid)"><img src="../assets/img/dianzanbck.png" alt="" style="margin-top:16px;margin-right:6px"><span>{{item.likeCount}}</span></p>
                    <p class="see"><img src="../assets/img/share.png" alt="" style="margin-top:16px;margin-right:6px"><span>99+</span></p>

             </div> 
            </li>
        </ul>
    </div>
     <div class="h30"></div>   
    </div>
<!-- 固定底部选项栏 -->
<mt-tabbar :fixed="true" id="exhibitionbar">
      <mt-tab-item  @click.native="home()">
        <img slot="icon" src="../assets/img/indexlogo.png">
        首页
      </mt-tab-item>
      <mt-tab-item  @click.native="exhibitionList()">
        <img slot="icon" src="../assets/img/zslistlogo2.png">
        展商列表
      </mt-tab-item>
      <mt-tab-item  @click.native="liveRoom()">
        <img slot="icon" src="../assets/img/zhibologo.png">
        直播
      </mt-tab-item>
      <mt-tab-item @click.native="isShow()">
        <img slot="icon" src="../assets/img/mobilemore.png">
        更多   
      </mt-tab-item>
</mt-tabbar>
<div id="moresee" v-show="isShowDialog">
  <ul  >
       <li><router-link :to="{name:'mobilemeetarr'}">走进博览会</router-link></li>
      <li><router-link :to="{name:'mobilekunming'}">走进东莞</router-link></li>
      <li><router-link :to="{name:'mobileContact'}">联系我们</router-link></li>
  </ul>
</div>
</div>
</template>
<script>
import { Tabbar, TabItem} from 'mint-ui';
export default {
    data(){
        return{
            active:'tab-container1',
            hotCompanyList: null,
            myCompanyList: null,
            isShowDialog: false,
            colorflag: '',
            colorflag2: '',
            colorflag3:'',
            colorflag4:'',
            colorflag5:'',
            colorflag6:'',
            colorflag7:'',
            Ycolorflag1: '',
            Ycolorflag2: '',
            Ycolorflag3: '',
            Ycolorflag4: '',
            

        }
    },
    mounted(){
     this.company1('ff7632e456174ad4b52d6fc76968f35420201023172642')
     this.topcompany1('ff7632e456174ad4b52d6fc76968f35420201023172642')
    },
    methods:{
        topcompany1(uid){
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company1(uid){
         this.colorflag = "#0071fc"
         this.colorflag2 = ''
         this.colorflag3 = ''
         this.colorflag4 = ''
         this.colorflag5 = ''
         this.colorflag6 = ''
         this.colorflag7 = ''
         this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company2(uid){
        this.colorflag = ''
        this.colorflag2 = '#0071fc'
        this.colorflag4 = ''
        this.colorflag3 = ''
        this.colorflag5 = ''
        this.colorflag6 = ''
        this.colorflag7 = ''
        this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        
        company3(uid){
            this.colorflag = ''
            this.colorflag2 = ''
            this.colorflag3 = '#0071fc'
            this.colorflag4 = ''
            this.colorflag5 = ''
            this.colorflag6 = ''
            this.colorflag7 = ''
        this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company4(uid){
        this.colorflag = ''
        this.colorflag2 = ''
        this.colorflag4 = '#0071fc'
        this.colorflag3 = ''
        this.colorflag5 = ''
        this.colorflag6 = ''
        this.colorflag7 = ''
        this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company5(uid){
        this.colorflag = ''
        this.colorflag2 = ''
        this.colorflag4 = ''
        this.colorflag3 = ''
        this.colorflag5 = '#0071fc'
        this.colorflag6 = ''
        this.colorflag7 = ''
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company6(uid){
        this.colorflag = ''
        this.colorflag2 = ''
        this.colorflag4 = ''
        this.colorflag3 = ''
        this.colorflag5 = ''
        this.colorflag6 = '#0071fc'
        this.colorflag7 = ''
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        },
        company7(uid){
        this.colorflag = ''
        this.colorflag2 = ''
        this.colorflag4 = ''
        this.colorflag3 = ''
        this.colorflag5 = ''
        this.colorflag6 = ''
        this.colorflag7 = '#0071fc'
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
     },
    // 云上展厅
    yunshang1(uid){
        this.Ycolorflag1 = '#0071fc'
        this.Ycolorflag2 = ''
        this.Ycolorflag3 = ''
        this.Ycolorflag4 = ''
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
     },
     
     yunshang2(uid){
        this.Ycolorflag1 = ''
        this.Ycolorflag2 = '#0071fc'
        this.Ycolorflag3 = ''
        this.Ycolorflag4 = ''
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
          this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
     },
     yunshang3(uid){
        this.Ycolorflag1 = ''
        this.Ycolorflag2 = ''
        this.Ycolorflag3 = '#0071fc'
        this.Ycolorflag4 = ''
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
        this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
     },
     yunshang4(uid){
        this.Ycolorflag1 = ''
        this.Ycolorflag2 = ''
        this.Ycolorflag3 = ''
        this.Ycolorflag4 = '#0071fc'
       this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
         this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+uid)
        .then( res=> {
            this.myCompanyList = res.data.data.content
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
     },
    //   获取热门展商列表
        hotcompanyList(uid){
        this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uid)
        .then( res=> {
            this.hotCompanyList = res.data.data
        })
        .catch( error=>{
            // eslint-disable-next-line no-console
            console.log(error)
        })
    },
        // 点击进入热门展商详情页
        companyYnDetail(myuid){
        //  console.log("77777777777777"+A)
        this.$router.push({name:'companyListdetails',query:{uuid: myuid}})
        },

        // 点赞数
        zanNum(uuid){
           this.$http.post('/exhibitioncompanyapi/companyLike/'+ uuid );
        },
     home(){
      this.$router.push({path:'/mobileHome'})
    },
    exhibitionList(){
      this.$router.push({path: '/exhibitionCompanylist'});
    },
    liveRoom(){
      this.$router.push({path:'/mobileliveRoom'})
    },
    isShow(){
    this.isShowDialog=true
   },
   testShow(){
     this.isShowDialog=false
   }
    }
}
</script>
<style>
/* 中部内容 */
.h40{
  height: 40px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.txtp{
    font-size: 32px;
    color: #0271f7;
    font-weight: 600;
    height: 70px;
    line-height: 70px;
}
.txtp img{
    vertical-align: bottom;
    margin-right: 14px;
    margin-bottom: 16px;
}

/* 线上展厅 云上展厅*/
/* #mobileExhibition{

} */
#mobileExhibition .mint-tab-item.is-selected{
    color: #0071fc;
    font-weight: bold;
    border-bottom: none;
    background: url(../assets/img/selectbck.png) no-repeat bottom;
}
#mobileExhibition .mint-tab-item-label{
    font-size: 32px;
}
#mobileExhibition .mint-tab-item{
    padding: 24px 0px!important;
    margin: 0 50px!important;
    font-weight: bold;
}
/* 内容部分 */
#mobilecell .mint-cell{
  float: left;
  text-align: center;
  padding: 10px 35px;
  border-right: 1px solid #e5e5e5;
  /* border-top:none */
  color:#666666;
 
}
#mobilecell .mint-cell-text{
   font-size: 28px; 
}
 #mobilecell .mint-cell-wrapper{
     background-image: none;
 }
 #mobilecell  .mint-cell:last-child{
     background-image: none;
     border-right:none;
 }
/* #mobilecell .mobileactive {
    color: #0071fc;
} */
#mobilecell .mint-tab-container-wrap div:nth-child(2) a{
    padding: 10px 85px!important;
}
/* 热门展商 */
.hotCommany{
    overflow: hidden;
    padding: 0 30px;
    padding-bottom: 20px;
}
.hotCommany ul li{
    float: left;
    margin-left: 24px;
}
.hotCommany ul li img{
   width: 114px;
   height: 114px;
   border: 2px solid #eeeeee;
   border-radius: 5px;
}
.hotCommany ul li:first-child{
    margin-left: 0;
}
/* 展商列表 */
.companyList{
  overflow: hidden;
  padding: 0 30px;
}
.companyList ul li{
  overflow: hidden;
  padding-top: 10px;
  position: relative;
}
.companyList ul li:first-child{
    padding-top: 0px;
}
.companyListimg{
    width: 200px;
    height: 200px;
    float: left;
    border: 2px solid #eeeeee;
    border-radius: 5px;
}
.companyListimg img{
    width: 200px;
    height: 200px;
}
.companyList .companyListtxt{
  width: 459px;
  float: left;
  height: 216px;
  margin-left: 26px;
  border-bottom: 2px solid #eeeeee;
}
.companyList ul li:last-child .companyListtxt{
 border-bottom:none;
}
.companyList .companyListtxt p{
  font-size: 26px;
  height: 42px;
  font-weight: 600;
}
.companyListtxt div{
  font-size: 24px;
  color: #333333;
  line-height: 44px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.companyListtxt div a{
  font-size: 20px;
  float: right;
  color: #0071fc;
}
.mobileNumberTime{
   position: absolute;
   bottom: 10px;
   right: 0px;
}
.see{
   float:left;
   margin-top:30px;
   font-size:12px!important;
   color:#999999;
   margin-left: 10px;
}
.see span{
    font-size: 16px;
}

#moresee{
  position: fixed;
  right: 0px;
  bottom: 104px;
  background: url(../assets/img/moreListbck.png) no-repeat no-repeat center;
  font-size: 24px;
  width: 190px;
  height: 255px;
}
#moresee a{
  width: 190px;
  color: #000000;
}
#moresee ul li{
  height: 82px;
  line-height: 82px;
  text-align: center;
}
#exhibitionbar a:nth-child(2){
  color: #ffffff;
  background: #0071fc;
  border-right: 1px solid #e4e4e4;
}
#exhibitionbar a:nth-child(3){
  border-right: 1px solid #e4e4e4;
}
</style>