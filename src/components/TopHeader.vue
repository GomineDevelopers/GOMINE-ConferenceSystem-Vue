<template>
  <el-row class="TopHeader top_header">
    <el-row class="header_top">
      <span>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <i class="el-icon-arrow-down iconSize"></i>
      </span>
      <span class="logout_btn" @click="logout" title="退出登录">
        <i class="el-icon-setting i_settings exit_font"></i>
        <span class="exit_font">退出</span>
      </span>
    </el-row>
  </el-row>
</template>
<script>
export default {
  name: "topHeader",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$messageBox
        .confirm("确认退出系统吗?", "提示", {
          type: "warning"
        })
        .then(() => {
          this.$api
            .logout()
            .then(res => {
              console.log(res);
              if (res.code == 200) {
                this.$message({
                  message: "退出成功！",
                  type: "success"
                });
                this.$router.push({ path: "/login" });
                this.$store.dispatch("logout");
              }
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(() => {
          console.log("取消");
        });
    }
  }
};
</script>
<style>
.el-header {
  padding: 0;
}
</style>
<style scoped>
.top_header {
  background-color: #fff;
  line-height: 60px;
}
.header_top {
  height: 60px;
  padding-right: 40px;
  display: -webkit-flex;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0px 1px 0px rgba(149, 165, 186, 0.2);
}
.header_top span {
  height: 60px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.header_top span:nth-child(1) {
  margin-right: 20px;
}
.header_top img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
}
.logout_btn {
  cursor: pointer;
  font-size: 16px;
}
.logout_btn:hover {
  color: #409eff;
}

.TopHeader .SystemTitle {
  font-size: 32px;
  font-weight: bold;
}
.i_settings {
  margin-top: 3px;
  margin-right: 5px;
}
.exit_font {
  height: 20px;
  line-height: 20px;
  font-size: 20px;
}
</style>
