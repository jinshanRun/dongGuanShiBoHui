<template>
    <div class="expo">
      <div class="waitbck"></div>
      <div class="expo-banner" v-loading="loading"><img src="../assets/img/wait.png" alt=""></div>
         <div class="h40"></div>
    </div>
</template>
<script>
export default {
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
.expo {
  overflow: hidden;
  position: relative;
  &-banner{
    width: 50%;
    img{
      width: auto;
      height: auto;
      max-width:  100%;
      max-height: 100%;
      transform: translate(50%);
    }
  }
}
.waitbck{
  background: url(../assets/img/waitingback.png) no-repeat no-repeat center;
  height: 300px;
}
// 战略合作伙伴
.zhanhezuo,.hezuo{
  width: 1200px;
  margin: 0 auto;
}
.h40{
  height: 40px;
}
</style>
