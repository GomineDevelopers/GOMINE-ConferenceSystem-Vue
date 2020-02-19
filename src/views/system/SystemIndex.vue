<template>
  <el-row class="height_auto flex">
    <el-row class="children_nav height_auto">
      <el-menu :default-active="$route.path" router class="el-menu-vertical-demo height_auto">
        <el-menu-item index="/allsetting">
          <!-- <img v-if="$route.path == '/login'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">整体设置</span>
        </el-menu-item>
        <el-menu-item index="/login">
          <!-- <img v-if="$route.path == '/login'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">登录页</span>
        </el-menu-item>
        <el-menu-item index="/mainmenu">
          <!-- <img v-if="$route.path == '/mainmenu'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/meetingbackground">
          <!-- <img v-if="$route.path == '/meetingbackground'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">会议背景</span>
        </el-menu-item>
        <el-menu-item index="/meetingschedule">
          <!-- <img v-if="$route.path == '/meetingschedule'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">会议日程</span>
        </el-menu-item>
        <el-menu-item index="/lecturerintroduction">
          <!-- <img v-if="$route.path == '/lecturerintroduction'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">讲师介绍</span>
        </el-menu-item>
        <el-menu-item index="/sponsor">
          <!-- <img v-if="$route.path == '/sponsor'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">赞助商</span>
        </el-menu-item>
        <el-menu-item index="/conferenceschedule">
          <!-- <img v-if="$route.path == '/conferenceschedule'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">会务日程</span>
        </el-menu-item>
        <el-menu-item index="/questionnaire">
          <!-- <img v-if="$route.path == '/questionnaire'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">调查问卷</span>
        </el-menu-item>
        <el-menu-item index="/datadownload">
          <!-- <img v-if="$route.path == '/datadownload'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">资料下载</span>
        </el-menu-item>
        <el-menu-item index="/connectus">
          <!-- <img v-if="$route.path == '/connectus'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">联系我们</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter">
          <!-- <img v-if="$route.path == '/personalcenter'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">个人中心</span>
        </el-menu-item>
        <el-menu-item index="/reportforms">
          <!-- <img v-if="$route.path == '/reportforms'" src="../assets/image/yy.png" />
          <img v-else src="../assets/image/yy1.png" />-->
          <span slot="title">报表</span>
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-row class="system_bdy">
      <router-view />
    </el-row>
  </el-row>
</template>
<script>
export default {
  name: "SystemIndex",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.children_nav {
  width: 200px;
}
.SystemIndex {
}
</style>