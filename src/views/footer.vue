<template>
     <div class="footer">
          <!-- 战略合作伙伴 -->
    <div class="allheuo">
      <div class="zhanhezuo">
        <p class="meetp">战略合作伙伴</p>
        <div class="h20"></div>
        <div><img src="../../static/img/hezuoback2.png" alt="" /></div>
      </div>
      <div class="h40"></div>
      <!-- 合作伙伴 -->
      <div class="hezuo">
        <p class="meetp">合作伙伴</p>
        <div class="h20"></div>
        <div><img src="../../static/img/hezuoback.png" alt="" /></div>
      </div>
    </div>
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>指导单位</p>
              <span>商务部</span>
              <span>国家国资委</span>
              <span>有关部委 </span>
            </li>
            <li>
              <p>支持单位</p>
              <span>中国轻工业联合会</span>
              <span> 广东省人民政府</span>
            </li>
            <li>
              <p>主办单位</p>
              <span>中国食品报社 </span>
              <span> 商务部投资促进事务局</span>
              <span> 东莞市人民政府</span>
            </li>
            <li>
              <p>承办单位</p>
              <span>中国国际贸促会商业行业分会 </span>
              <span> 中国食品报社信息中心</span>
              <span>东莞市商务局</span>
            </li>
            <li>
              <p>协办单位</p>
              <span>中青联盟大数据研究（北京）有限公司 </span>
              <span>北京高斯智慧科技有限公司</span>
              <span>四川柏视文化传媒有限公司</span>
            </li>
             <li>
              <p>联系我们</p>
              <span>手机：15011380203  </span>
              <span>邮箱：autumn_sunq@126.com</span>
            </li>
          </ul>
        </div>
        <!-- 备案号 -->
        <div class="beian">
          <div>
            <span>京ICP备 16890066号-1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京高斯智慧科技有限公司 &copy;版权所有</span>     
          </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
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

.footer {
  width: 100%;
  overflow: hidden;
  // position: absolute;
  // bottom: 0;
  background-color: #9a2122;
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