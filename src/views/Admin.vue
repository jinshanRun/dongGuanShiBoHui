<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
          <br>
          <br>
          <br>
          <br>
          <br>
      <div id="gaosiAdmin">
        <el-menu default-active="1" class="el-menu-vertical-demo" router >
<!--          <el-menu-item index="/admin/user">-->
<!--            <i class="el-icon-star-off"></i>-->
<!--            <span slot="title">后台用户管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/test">-->
<!--            <i class="el-icon-news"></i>-->
<!--            <span slot="title">新闻咨询管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/cases">-->
<!--            <i class="el-icon-location-outline"></i>-->
<!--            <span slot="title">案例信息管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/team">-->
<!--            <i class="el-icon-picture-outline"></i>-->
<!--            <span slot="title">团队风采管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/course">-->
<!--            <i class="el-icon-time"></i>-->
<!--            <span slot="title">发展历程管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/enterprise">-->
<!--            <i class="el-icon-edit-outline"></i>-->
<!--            <span slot="title">合作企业管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/honor">-->
<!--            <i class="el-icon-edit-outline"></i>-->
<!--            <span slot="title">荣誉墙管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/admin/dictionary">-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span slot="title">数据字典管理</span>-->
<!--          </el-menu-item>-->
            <el-submenu index="1" >
                <template slot="title">新闻管理</template>
                <el-menu-item index="/admin/articleList">新闻资讯列表</el-menu-item>
                <el-menu-item index="/admin/test">新增新闻资讯</el-menu-item>
            </el-submenu>
           <el-submenu index="2">
               <template slot="title">展商管理</template>
               <el-menu-item index="/admin/companyList">展商列表</el-menu-item>
               <el-menu-item index="/admin/company">新增展商</el-menu-item>
           </el-submenu>
            <el-submenu index="3">
               <template slot="title">食文化管理</template>
               <el-menu-item index="/admin/cultureList">食文化列表</el-menu-item>
               <el-menu-item index="/admin/culture">新增食文化</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
               <template slot="title">直播管理</template>
               <el-menu-item index="/admin/liveList">直播列表</el-menu-item>
                <el-menu-item index="/admin/LiveBroadcast">新增直播</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
               <template slot="title">收集的信息管理</template>
               <el-menu-item index="/admin/mediaRegisterManager">媒体注册信息列表</el-menu-item>
               <el-menu-item index="/admin/PartnerManager">合作伙伴信息列表</el-menu-item>
               <el-menu-item index="/admin/companySignUpManager">参展商报名信息列表</el-menu-item>
               <el-menu-item index="/admin/consumerSignUpManager">用户报名信息列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">嘉宾管理</template>
                <el-menu-item index="/admin/guestInfoManager">嘉宾列表</el-menu-item>
                <el-menu-item index="/admin/addGuest">新增嘉宾信息</el-menu-item>
            </el-submenu>
        </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-main>
          <div class="base-padding">
            <router-view />
          </div>
        </el-main>
        <el-footer>2020@qiuqiu版权所有</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

<style lang="scss" scoped>
.admin {
  border-top: 1px solid rgb(238, 238, 238);
}

.base-padding {
  padding: 20px;
}

.el-footer {
  line-height: 60px;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #18299d;
  width: 184px;
  height: 184px;
  line-height: 184px;
  text-align: center;
}
.avatar {
  width: 184px;
  height: 184px;
  display: block;
}
#gaosiAdmin .el-menu-item.is-active{
  color: #ffffff!important;
  background: #18299d!important;
}
</style>
