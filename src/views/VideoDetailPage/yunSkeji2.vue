<template>
    <div class="webexh">
      <div class="webexh-banner" v-loading="loading"><img src="../../assets/img/yunsbck2.png" alt=""></div>
     <div class="webexhtxt">
        <p class="foodculturep">
          <img src="../../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>网上展厅>云上展厅
        </p>
       <div class="h40"></div>
       <!-- <div class="webexhadv_left"><img src="../assets/img/newsadver.png" alt=""></div>
       <div class="webexhadv_right"><img src="../assets/img/newsadver.png" alt=""></div> -->
        <div class="webexh-content">
        <p style="text-align:center"><img src="../../assets/img/webexhtitlebck.png" alt=""></p>
        <ul class="companylogoimg">
          <li v-for="(item,i) in hotCompanyList" :key="i" @click="companyYnDetail(item.companyUuid)">
            <img :src=item.logoUrl alt="">
          </li>
        </ul>
        <div class="ZSlist">
          <p style="color: #333333;font-size:20px;font-weight:600"><span>| </span>展商列表</p>
          <ul v-for="(item,i) in companyList" :key="i">
            <li @click="companyYnDetail(item.companyUuid)">
              <div>
              <div class="companyListlogoUrl"><img :src=item.logoUrl alt=""></div>
              <div class="companyxq">
                <span>{{item.companyName}}</span>
                 <br/>
                <span>公司简介：</span>
                <div>{{item.companyIntroduce}}
                    <span style="float:right;color:#1028b6;" @click="companyYnDetail(item.companyUuid)">详情>></span>
                </div>
              </div>
              </div>
              <div class="seenumber">
                <span>{{item.lookCount}}</span>
                <!-- <span>3.2k</span>
                <span>1.8k</span> -->
              </div>
            </li>
          </ul>
        </div>
        </div>
         <!-- 分页 -->
      <div class="pag">
        <!-- <p>@size-change="sizeChangeHandle"</p> -->
        <el-pagination
        @current-change="currentChangeHandle"
        background
        layout="prev, pager, next"
        :page-size="this.size"
        :total="this.countTotal">
      </el-pagination>
      </div>
      </div>
         <div class="h30"></div>
         <div class="h40"></div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      loading: true,
      companyList: null,
      hotCompanyList:null,
      uuid: this.$route.query.uuid !==undefined ? this.$route.query.uuid : '218d0ba591b14f3daa39fcb9e0f4055b20201023173050',
      page: 0,
      size: 5,
      // 总数
      countTotal: 0,
      // 总页数
      totalPage: 0
    };
  },
  mounted() {
    this.loading = false;
    this.hotcompanyList(this.uuid)
    this.top5CompanyList(this.page,this.size)
  },
  methods: {
    // 获取热门展商列表
    hotcompanyList(uuid){
      this.$http.get('/exhibitioncompanyapi/hotCompanyList/'+uuid)
      .then( res=> {
        // eslint-disable-next-line no-console
        console.log("6666666666666"+ res.data.data)
        // console.log("6666666666666"+ JSON.stringify(res))
        this.hotCompanyList = res.data.data
      })
      .catch( error=>{
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
        // 点击进入热门展商详情页
     companyYnDetail(A){
      //  console.log("77777777777777"+A)
      this.$router.push({name:'companyDetail',query:{uuid: A}})
    },
         // 分页
    currentChangeHandle(val){
      this.page = val-1
      this.top5CompanyList(this.page,this.size)
    },
    // top5及正常展商
    top5CompanyList(page,size){
        this.$http.get('/exhibitioncompanyapi/companyPageList?areaUuid='+this.uuid+'&page='+page +'&size='+size).then(res =>{
          this.companyList = res.data.data.content;
          this.totalPage = res.data.data.totalPages;
          this.countTotal = res.data.data.totalElements;
        }).catch(error =>{
          error.error
        });
    },
  }
};
</script>

<style lang="scss" scoped>
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
    color: #b6b6b6;
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
.webexhtxt{
  position: relative;
}
.webexhadv_left{
  position: absolute;
  left: 0px;
  top: 40px;
}
.webexhadv_right{
  position: absolute;
  right: 0px;
  top: 40px;
}
.companylogoimg{
  margin-top: 40px;
  text-align: center;
  img{
    width: 182px;
    height: 182px;
  }
}
.webexh {
  width: 100%;
  // height: 100%;
  position: relative;
  overflow: hidden;

  &-banner{
   width: 100%;
   height: 100%;
    img{
     width: 100%;
   }
  }
  &-content{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
  }
}
.foodculturep{
  width: 1200px;
  margin: 10px auto;
  font-size: 12px;
  color: #b6b6b6;
}
.foodculturep img{
  margin-top: 10px;
  margin-right: 10px;
}
.webexh-content ul {
  overflow: hidden;
}
.webexh-content ul li{
 float: left;
 width: 182px;
 margin-left: 72px;
}
.webexh-content ul li:first-child{
  margin-left: 0px;
}
.companyListlogoUrl{
  float: left;
  text-align: center;
  margin-right: 40px;
}
.companyxq{
  float: left;
  width: 900px;
}
.companyListlogoUrl img{
  width: 200px;
  height: 200px;
}
.ZSlist{
  padding: 40px 0;
}
.companyxq span:first-child{
  font-family: "微软雅黑";
  font-size: 20px;
  color: #333333;
  text-align: left;
  font-weight: 600;
}
.ZSlist span{
  color: #455ae1;
  margin-right: 5px;
}
.ZSlist  ul li{
  width: 100% !important;
  background: #f9f9f9;
  margin: 15px 0;
  padding: 20px;
  position: relative;
  cursor: pointer;
}
.ZSlist  ul li:hover{
  background: #f9f9f9;
  box-shadow: #e4e7f3 0px 0px 10px 5px ;
}
.seenumber{
  height: 50px;
  position: absolute;
  right: 40px;
  top: 10px;
}
.seenumber span{
  padding: 5px 20px;
  font-size: 12px;
  color: #999999!important;
}
.seenumber span:first-child{
  background: url(../../assets/img/seenumbck1.png) no-repeat center left;
}
.seenumber span:nth-child(2){
  background: url(../../assets/img/seenumbck2.png) no-repeat center left;
}
.seenumber span:nth-child(3){
  background: url(../../assets/img/seenumbck3.png) no-repeat center left;
}

.pag{
  width: 420px;
  margin: 0 auto;
  text-align: center;
}


.companyxq{
  padding: 10px 0;
}
.companyxq span{
  font-size: 16px;
  height: 34px;
  line-height: 34px;
  color: #333333;
}
.companyxq div{
  float: left;
  width: 900px;
  font-size: 14px;
  line-height: 26px;
  color: #333333;
}
.h40{
  height: 40px;
}
</style>
