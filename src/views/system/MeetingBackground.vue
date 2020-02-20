<template>
  <div class="MeetingBackground height_auto position_re">
    <vue-headful title="会议背景"></vue-headful>
    <div class="mb_content height_calc">
      <div class="perRowCom">
        <div class="pr_titleCom">会议背景：</div>
        <div class="pr_contentCom">
          <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="textarea1"></el-input>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">首页背景：</div>
        <div class="pr_contentCom">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="alert"
            :auto-upload="false"
            :before-upload="(value)=> beforeAvatarUpload(value,1)"
            :on-change="(file, fileList)=> loadJsonFromFile(file, fileList,1)"
            drag
          >
            <div class="logo_info">点击或拖拽上传</div>
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">会议地点：</div>
        <div class="pr_contentCom">
          <el-input v-model="meeting_address" placeholder="请输入会议地点"></el-input>
        </div>
      </div>
      <!-- 
      <div class="perRowCom">
        <div class="pr_titleCom">正文字号：</div>
        <div class="pr_contentCom">
          <el-select v-model="value1" placeholder="请选择正文字号">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">标题字号：</div>
        <div class="pr_contentCom">
          <el-select v-model="value2" placeholder="请选择标题字号">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">正文字体：</div>
        <div class="pr_contentCom">
          <el-select v-model="value3" placeholder="请选择正文字体">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>-->
    </div>

    <div :style="{height: '80px'}"></div>
    <div class="flex_submit_p">
      <div class="flex_submit">
        <el-button class="btn_submit" type="primary">提交</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeetingBackground",
  components: {},
  data() {
    return {
      textarea1: "",
      imageUrl: "",
      meeting_address: "",
      options1: [
        {
          value: "1",
          label: "14"
        },
        {
          value: "2",
          label: "16"
        },
        {
          value: "3",
          label: "18"
        },
        {
          value: "4",
          label: "22"
        },
        {
          value: "5",
          label: "24"
        },
        {
          value: "6",
          label: "28"
        },
        {
          value: "7",
          label: "32"
        }
      ],
      value1: "",
      options2: [
        {
          value: "1",
          label: "14"
        },
        {
          value: "2",
          label: "16"
        },
        {
          value: "3",
          label: "18"
        },
        {
          value: "4",
          label: "22"
        },
        {
          value: "5",
          label: "24"
        },
        {
          value: "6",
          label: "28"
        },
        {
          value: "7",
          label: "32"
        }
      ],
      value2: "",
      options3: [
        {
          value: "1",
          label: "加粗"
        },
        {
          value: "2",
          label: "普通"
        },
        {
          value: "3",
          label: "300"
        },
        {
          value: "4",
          label: "400"
        },
        {
          value: "5",
          label: "500"
        }
      ],
      value3: ""
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    loadJsonFromFile(file, fileList, id) {
      console.log(file);
      console.log(fileList);
      console.log(id);
      this.uploadFilename = file.name;
      this.uploadFiles = fileList;
      if (id == 1) {
        this.imageUrl = URL.createObjectURL(file.raw);
      } else if (id == 2) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      }
    },
    beforeAvatarUpload(file, id) {
      console.log(file);
      console.log(id);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        // this.$message.error('上传头像图片只能是 JPG 格式!');
        console.log("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        // this.$message.error('上传头像图片大小不能超过 2MB!');
        console.log("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style>
/* *********** textarea */
.MeetingBackground .el-textarea__inner {
  width: 420px;
}
/* *********** textarea upload */
.MeetingBackground .el-upload-dragger {
  width: 200px;
}
.MeetingBackground .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.MeetingBackground .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.MeetingBackground .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.MeetingBackground .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.MeetingBackground .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  color: #c5c9d7;
}
</style>
<style scoped>
.MeetingBackground {
}
.MeetingBackground .mb_content {
  margin-bottom: 30px;
}
</style>

