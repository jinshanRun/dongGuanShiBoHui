<template>
    <div id="goodfoods">
      <!-- 头部 -->
      <div class="head">
        <mt-header fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>

      <!-- 视频 -->
      <div class="meetarrVideo">
        <img src="../assets/img/meetarrbck.png" alt="">
      </div>
      <div class="h30"></div>
      <!-- 会议详情  参会嘉宾 -->
      <div class="goodfoodsform">
        <mt-navbar  v-model="active"  id="mobileGoodfoods">
            <mt-tab-item id="meet-container1">评选委员会</mt-tab-item>
            <mt-tab-item id="meet-container2">评选标准</mt-tab-item>
            <mt-tab-item id="meet-container3">获奖企业</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="meet-container1" class="container1" style="padding:0 30px">
                     <div class="mobileOriginz">
                    <p>专家委员会成员：</p>
                    <ul>
                      <li>范蓓</li>
                      <li>单吉浩</li>
                      <li>徐坚</li>
                      <li>萧东荣</li>
                      <li>吴疆</li>
                    </ul>
                  </div>
                  <div class="mobileOriginz">
                    <p>办公室主任：</p>
                    <ul>
                      <li>洪捷</li>
                    </ul>
                  </div>
                  <div class="mobileOriginz">
                    <p>办公室副主任：</p>
                    <ul>
                      <li>乔珍珍</li>
                    </ul>
                  </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2" style="margin-top:30px;overflow-x:auto;padding:0 0 0 30px">
                   <div><img src="../assets/img/Gflevel.png" alt=""></div>
                </mt-tab-container-item>
                 <mt-tab-container-item id="meet-container3">
                  <div class="goodfood2cont">
                   <span>2018年</span> <br/>
                      一、山东鲁花集团有限公司生产的鲁花牌5S压榨花生油产品。<br/>
                      二、山东鲁花生物科技有限公司生产的自然鲜牌酱油产品。<br/>
                      三、广州市致美斋酱园有限公司生产的致美斋牌醋类产品。<br/>
                      四、江苏伊例家食品有限公司生产的伊例家牌酱油和酱料产品。<br/>
                      五、西安市德懋恭食品商店生产的水晶饼系列产品。<br/>
                      六、河北金相府酒业有限公司生产的相府枣酒产品。<br/>
                      七、福建光泽德顺酒业有限公司生产的闽源春白酒和蛇系列酒产品。<br/>
                      八、烟台双塔食品股份有限公司生产的双塔粉丝产品。<br/>
                      九、山东东阿百年堂阿胶生物制品股份有限公司生产的百年堂牌阿胶产品。<br/>
                      十、青岛老尹家海参股份有限公司生产的老尹家干海参产品。<br/>
                      十一、潍坊风筝面粉有限责任公司生产的柳叶牌挂面产品。<br/>
                      十二、山东东阿酒厂（有限责任公司）生产的琉璃井牌阿胶酒产品。<br/>
                      十三、济南居易酿造有限公司生产的富硒酱油产品。<br/>
                      十四、保定赛行阿胶有限公司生产的胶类产品。<br/>
                      十五、东阿福禄堂阿胶系列产品有限公司生产的阿胶及其制品。<br/>
                      十六、辽宁省东港市五四农场生产的稻花香米及月光米系列产品。<br/>
                   <span>2019年</span> <br/>
                      十七、乌兰察布市集宁纳尔松酿业有限公司的纳尔松牌纳尔松酒产品。<br/>
                      十八、吉林省玉竹源满族食品有限公司的满尊牌满族糕点产品。<br/>
                      十九、都兰县现代农业产业园的柴达木牌枸杞系列产品。<br/>
                      二十、贵州省仁怀市茅台镇台福将酒业有限公司生产的台福将牌白酒。<br/>
                      二十一、广东省云浮市新兴县广华食品有限公司生产的广华牌排米粉。<br/>
                      二十二、辽宁省本溪市双花熟食品有限公司生产的双花牌系列熟食制品。<br/>
                      二十三、山东宏业食品有限公司生产的宏业牌鲅鱼水饺产品。<br/>
                </div>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>
    <div class="h30"></div>
    <!-- 战略合作伙伴 -->
<div class="zhanhe">
  <p style="height:70px;line-height:70px;font-size: 32px;font-weight: 600;">战略合作伙伴</p>
  <ul>
    <li><img src="../assets/img/zh1.png" alt=""> </li>
    <li><img src="../assets/img/zh2.png" alt=""> </li>
    <li><img src="../assets/img/zh3.png" alt=""> </li>
    <li><img src="../assets/img/zh4.png" alt=""> </li>
  </ul>
</div>
<!-- 合作伙伴 -->
<div class="zhanhe">
  <p style="height:70px;line-height:70px;font-size: 32px;font-weight: 600;">合作伙伴 </p>
  <ul>
    <li><img src="../assets/img/he1.png" alt=""> </li>
    <li><img src="../assets/img/he2.png" alt=""> </li>
    <li><img src="../assets/img/he3.png" alt=""> </li>
    <li><img src="../assets/img/he4.png" alt=""> </li>
  </ul>
</div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
             active: 'meet-container1'
        }
    },
    mounted(){
       
    },
    methods:{
      
    },

}
</script>
<style>
#goodfoods{
  /* margin-bottom: 100px; */
}
.head{
    height: 88px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 88px;
}
#goodfoods .mint-button-icon{
   height: 50px;
}
.mint-header{
  background: #fff!important;
  color: #333333 !important;
  font-size: 32px !important;
  height: 88px!important;
  line-height: 88px!important;
}
#mobileGoodfoods .mint-tab-item.is-selected{
    color: #0071fc;
    font-weight: bold;
    border-bottom: none;
    background: url(../assets/img/selectbck.png) no-repeat bottom;
    /* border-bottom: 8px solid #0071fc; */
    /* border-radius: 4px; */
}
#mobileGoodfoods .mint-tab-item-label{
    font-size: 32px;
}
#mobileGoodfoods .mint-tab-item{
    padding: 24px 0px!important;
    margin: 0 34px!important;
    font-weight: bold;
}
#mobileback{
  color: #999999 !important;
  font-size: 28px !important;
}
.meetarrVideo{
  padding: 20px 30px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.goodfoodsform{
  padding: 0 0px 30px 0px;
}
.mmeetbck17{
  color: #ffffff;
  background: url(../assets/img/meetanpaiback.png) no-repeat no-repeat;
  padding: 17px;
  line-height: 40px;
  margin-top: 8px;
}
.container1 div{
  font-size: 28px;
}
#mobileGoodfoods{

}
/* 组织机构 */
.mobileOriginz{
  overflow: hidden;
}
.mobileOriginz p{
  font-size: 28px;
  color: #666666;
  height: 80px;
  line-height: 80px;
}
.mobileOriginz ul li{
  background: #e4effd;
  padding: 9px 24px;
  float: left;
  border-radius: 4px;
  margin-right: 24px;
  font-size: 24px;
  color: #333333;
}
.goodfood2cont {
  font-size: 28px;
  color: #333333;
  line-height: 40px;
  padding: 0px 30px;
}
.goodfood2cont span{
 font-size: 32px;
 color: #0071fc;
 margin: 15px 0;
}
</style>