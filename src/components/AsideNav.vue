<template>
  <el-row class="left_aside height_auto">
    <el-row class="header_logo">
      <img class="img_logo" src="../assets/image/logo.png" alt />
    </el-row>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      active-text-color="#3399FF"
      unique-opened
    >
      <el-menu-item index="/mettinglist">
        <i v-if="$route.path == '/mettinglist'" class="el-icon-menu"></i>
        <i v-else class="el-icon-menu"></i>
        <span slot="title">会议管理</span>
      </el-menu-item>
      <!-- <el-menu-item index="/login">
        <img v-if="$route.path == '/login'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">登录</span>
      </el-menu-item>
      <el-menu-item index="/mainmenu">
        <img v-if="$route.path == '/mainmenu'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/meetingbackground">
        <img v-if="$route.path == '/meetingbackground'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">会议背景</span>
      </el-menu-item>
      <el-menu-item index="/meetingschedule">
        <img v-if="$route.path == '/meetingschedule'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">会议日程</span>
      </el-menu-item>
      <el-menu-item index="/lecturerintroduction">
        <img v-if="$route.path == '/lecturerintroduction'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">讲师介绍</span>
      </el-menu-item>
      <el-menu-item index="/sponsor">
        <img v-if="$route.path == '/sponsor'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">赞助商</span>
      </el-menu-item>
      <el-menu-item index="/conferenceschedule">
        <img v-if="$route.path == '/conferenceschedule'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">会务日程</span>
      </el-menu-item>
      <el-menu-item index="/questionnaire">
        <img v-if="$route.path == '/questionnaire'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">调查问卷</span>
      </el-menu-item>
      <el-menu-item index="/datadownload">
        <img v-if="$route.path == '/datadownload'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">资料下载</span>
      </el-menu-item>
      <el-menu-item index="/connectus">
        <img v-if="$route.path == '/connectus'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">联系我们</span>
      </el-menu-item>
      <el-menu-item index="/personalcenter">
        <img v-if="$route.path == '/personalcenter'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-menu-item index="/reportforms">
        <img v-if="$route.path == '/reportforms'" src="../assets/image/yy.png" />
        <img v-else src="../assets/image/yy1.png" />
        <span slot="title">报表</span>
      </el-menu-item>
      <el-submenu index="/historyflowdirectory">
        <template slot="title">
          <img src="../assets/image/jj1.png" />
          <span>奖金计算</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/historyflowdirectory">核销</el-menu-item>
          <el-menu-item index="/incomedetail">奖金明细</el-menu-item>
        </el-menu-item-group>
      </el-submenu>-->
    </el-menu>
  </el-row>
</template>
<script>
export default {
  name: "asideNav",
  data() {
    return {};
  },
  created() {
    // console.log(this.$route.path);
  },
  methods: {
    handleOpen() {
      //   console.log(key, keyPath);
    },
    handleClose() {
      //   console.log(key, keyPath);
    }
  }
};
</script>
<style>
.left_aside .el-menu {
  border: none;
}
.left_aside .el-menu .el-menu-item.is-active {
  background: rgba(64, 158, 255, 1);
}
.left_aside .el-menu .el-menu-item.is-active i {
  color: #fff;
}
.left_aside .el-menu .el-menu-item.is-active span {
  color: #fff;
}
.left_aside .el-menu .el-icon-arrow-down {
  font-size: 16px;
}
.left_aside .el-menu .el-menu-item span {
  font-size: 16px;
}
.left_aside .el-menu .el-menu-item i {
  margin-right: 25px;
  font-size: 22px;
}
</style>
<style scoped>
.img_logo {
  width: 192px;
}
.left_aside {
  background: #fff;
  height: 100%;
  z-index: 99;
  overflow-y: auto;
}
.header_logo {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  box-shadow: 0px 1px 0px rgba(149, 165, 186, 0.2);
  z-index: 99;
  border-right: 1px solid rgba(149, 165, 186, 0.2);
}
.el-menu-vertical-demo {
  overflow-y: auto;
  height: calc(100% - 60px);
  box-shadow: 2px 5px 6px 0px rgba(218, 218, 218, 1);
}
.el-menu-item img,
.el-submenu__title img {
  margin-right: 8px;
  width: 20px;
  vertical-align: text-top;
}
</style>
