<template>
  <el-row class="height_auto">
    <div class="add_button">
      <el-button type="primary" size="small" icon="el-icon-plus">新增会务</el-button>
    </div>
    <el-table class="main_list" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="会务名称" width="260"></el-table-column>
      <el-table-column prop="date" label="会务时间" width="180"></el-table-column>
      <el-table-column prop="createdTime" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="url" label="线上地址">
        <template slot-scope="scope">
          <a class="online_url" :href="scope.row.url" target="_blank">点击前往</a>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <i class="el-icon-edit-outline edit"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <i class="el-icon-delete delete"></i>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
export default {
  name: "MettingList",
  data() {
    return {
      tableData: [
        {
          date: "2019-02-21",
          name: "2019中国金融行业技术论坛",
          createdTime: "2019-02-18",
          url: "https://www.baidu.com/"
        },
        {
          date: "2019-02-21",
          name: "2019中国金融行业技术论坛",
          createdTime: "2019-02-18",
          url: "https://www.baidu.com/"
        },
        {
          date: "2019-02-21",
          name: "2019中国金融行业技术论坛",
          createdTime: "2019-02-18",
          url: "https://www.baidu.com/"
        },
        {
          date: "2019-02-21",
          name: "2019中国金融行业技术论坛",
          createdTime: "2019-02-18",
          url: "https://www.baidu.com/"
        },
        {
          date: "2019-02-21",
          name: "2019中国金融行业技术论坛",
          createdTime: "2019-02-18",
          url: "https://www.baidu.com/"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.main_list.el-table thead {
  color: #111a34;
  font-size: 14px;
}
.main_list.el-table .el-table__body-wrapper {
  color: #858b9c;
  font-size: 14px;
}
</style>
<style scoped>
.add_button {
  margin: 12px 0px;
}
.add_button .el-button {
  margin: 12px 0px;
  font-size: 14px;
}
.el-icon-plus {
  font-size: 20px;
}
.online_url {
  color: #409eff;
}
.online_url:hover {
  color: #1a68b9;
}
</style>