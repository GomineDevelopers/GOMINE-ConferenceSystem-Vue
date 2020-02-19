<template>
  <div class="Home">
    <vue-headful title="首页"></vue-headful>
    <el-container>
      <el-aside width="240px">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container>
        <el-header>
          <TopHeader></TopHeader>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AsideNav from "@/components/AsideNav";
import TopHeader from "@/components/TopHeader";

export default {
  name: "Home",
  components: {
    AsideNav,
    TopHeader
  },

  data() {
    return {};
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.Home {
  height: 100%;
  overflow: hidden;
}
.el-aside,
.el-container {
  height: 100%;
  background: #f9f9f9;
}
.el-main {
  background: #fff;
  margin: 20px;
}
</style>

