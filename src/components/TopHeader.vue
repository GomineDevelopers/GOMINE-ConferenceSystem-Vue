<template>
  <el-row class="TopHeader top_header">
    <el-row class="header_top">
      <div class="textAlignCenter_w100p SystemTitle">会务系统生成后台设置系统</div>
      <!-- 
      <span>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <i class="el-icon-arrow-down iconSize"></i>
      </span>
      <span class="logout_btn" @click="logout" title="退出登录">
        <i class="el-icon-setting iconSize"></i>退出
      </span>-->
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
<style scoped>
.iconSize {
  font-size: 0.12rem;
}
.top_header {
  background-color: #fff;
  line-height: 60px;
  /* display: -webkit-flex; */
  /* display: flex; */
  /* justify-content: flex-end; */
}
.header_top {
  height: 60px;
  display: -webkit-flex;
  display: flex;
  text-align: center;
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
  width: 50px;
  height: 50px;
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
</style>
