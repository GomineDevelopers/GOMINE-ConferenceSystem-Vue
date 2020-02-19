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
  methods: {}
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
