<template>
  <div class="SystemIndex height_auto">
    <el-row class="system_index height_auto flex">
      <el-row class="header_nav_top">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo height_auto">
          <el-menu-item index="/globalsettings">
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
      <el-row class="system_bdy height_auto flex_1">
        <div class="header_top">{{router_name}}</div>
        <div class="router_content">
          <router-view />
        </div>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "SystemIndex",
  data() {
    return {
      router_name: "整体设置"
    };
  },
  methods: {},
  mounted() {
    this.router_name = this.$route.name;
  },
  updated() {
    // var divscll = document.getElementById("chat_box");
    // divscll.scrollTop = divscll.scrollHeight;
    // console.log(this.$route);
    this.router_name = this.$route.name;
  }
};
</script>
<style >
.SystemIndex .el-menu {
  border-right: solid 0px #e6e6e6;
}
.SystemIndex .el-menu-item {
  text-align: left;
  padding-left: 56px !important;
  font-size: 16px;
  border-right: 2px solid transparent;
  letter-spacing: 2px;
  color: #95a5ba;
  height: 50px;
  line-height: 50px;
}
.SystemIndex .el-menu-item:hover {
  background: #d1e9ff;
}
.el-menu-item.is-active {
  color: #1890ff;
  background: #d1e9ff;
  border-right: 2px solid #1890ff;
}
</style>
<style scoped>
.system_index {
  overflow: hidden;
}
.header_nav_top {
  padding: 22px 0px;
  border-right: solid 1px #f5f4f6;
  width: 200px;
  overflow-y: auto;
}

.header_top {
  height: 28px;
  font-size: 20px;
  font-family: PingFangTC-Semibold;
  line-height: 28px;
  color: rgba(17, 26, 52, 1);
  font-weight: bold;
  padding-top: 32px;
  padding-bottom: 10px;
  padding-left: 32px;
}
.system_bdy {
  width: calc(100% - 200px);
  /* overflow: hidden; */
}
.router_content {
  height: calc(100% - 70px);
}
</style>