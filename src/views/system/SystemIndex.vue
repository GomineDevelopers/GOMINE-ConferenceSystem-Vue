<template>
  <div class="SystemIndex">
    <el-row class="system_index height_auto flex">
      <div class="header_nav_top_p">
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
      </div>

      <el-row class="system_bdy height_auto flex_1 header_content_top">
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
}
</style>
<style scoped>
.system_index {
  overflow: hidden;
}

.system_bdy {
  overflow-y: auto;
  /* overflow: scroll; */
}
.header_nav_top_p {
  width: 200px;
  height: 600px;
}
.header_nav_top {
  padding-top: 32px;
  border-right: solid 1px #f5f4f6;
  width: 200px;
  /* height: 100vh; */
  /* position: fixed; */
  position: relative;
  height: 760px;
}
.header_content_top {
  padding-top: 32px;
}

.header_top {
  height: 28px;
  font-size: 20px;
  font-family: PingFangTC-Semibold;
  line-height: 28px;
  color: rgba(17, 26, 52, 1);
  font-weight: bold;

  padding-bottom: 10px;
  padding-left: 32px;
}
.router_content {
  padding-left: 32px;
}
</style>