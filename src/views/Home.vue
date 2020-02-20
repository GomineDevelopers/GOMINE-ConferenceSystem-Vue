<template>
  <div class="Home">
    <vue-headful title="首页"></vue-headful>
    <el-container >
      <el-aside width="240px">
        <AsideNav></AsideNav>
      </el-aside>
      <el-container >
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
<style >

</style>
<style scoped>
.Home {
  height: 100%;
  overflow: hidden;
}
.el-aside,
.el-container {
  height: 100%;
  background: #f4f7fd;
}
.el-main {
  background: #fff;
  margin: 20px;
  padding: 0;
  margin-bottom: 0px;

}

</style>

