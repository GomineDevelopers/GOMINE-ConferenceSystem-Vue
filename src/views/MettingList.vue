<template>
  <el-row class="height_auto metting_list">
    <div class="add_button" @click="dialogFormVisible=true">
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
            <i class="el-icon-edit-outline edit" @click="goIndex(scope.row)"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <i class="el-icon-delete delete"></i>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增会务 -->
    <el-dialog title="新增会务" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="会务地址：" :label-width="formLabelWidth">
          www.gomine.cn/page/
          <el-input
            v-model="form.mettingAddress"
            autocomplete="off"
            placeholder="beijing-2020-02-10"
          ></el-input>
        </el-form-item>
        <el-form-item label="会务名称：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="2020中国金融行业技术论坛"></el-input>
        </el-form-item>
        <el-form-item label="会务日期：" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="dialogFormVisible = false">提 交</el-button>
        <el-button size="mini" @click="dialogFormVisible = false">重 置</el-button>
      </div>
    </el-dialog>
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
      ],
      dialogFormVisible: false,
      form: {
        mettingAddress: "",
        name: "",
        date: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    goIndex(row) {
      this.$router.replace("/globalsettings");
    }
  }
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
.metting_list .el-dialog {
  margin-top: 30vh !important;
  width: 600px !important;
}
.el-dialog__header {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 20px;
  height: 53px;
  line-height: 53px;
}
.el-dialog__footer {
  border-top: 1px solid #f0f0f0;
  padding: 0 20px;
  height: 56px;
  line-height: 56px;
  text-align: left;
}
.el-dialog__title {
  font-size: 16px;
  color: #111a34;
}
.metting_list .el-dialog .el-input,
.metting_list .el-dialog .el-input__inner {
  width: 223px;
}
</style>
<style scoped>
.metting_list {
  padding: 20px;
}
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