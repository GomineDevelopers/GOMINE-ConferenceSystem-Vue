<template>
  <div class="LecturerIntroduction">
    <vue-headful title="讲师介绍"></vue-headful>
    <div class="LI_content">
      <div v-if="BaseArr.length == 0">
        <div>
          <i @click="AddDateData(0,'firstAdd')" class="el-icon-circle-plus"></i>
        </div>
      </div>
      <div v-if="BaseArr.length != 0">
        <template v-for="(item,index) in BaseArr ">
          <div class="ba_background perRow inlineBlockP_verTop ba_pos" :key="index + 'ba' ">
            <!-- <div>id：{{item.id}}</div> -->
            <!-- <div>头图：{{item.url}}</div> -->
            <div>头图：</div>
            <div class="upload_img">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
                action="alert"
                :auto-upload="false"
                :before-upload="(value)=> beforeAvatarUpload(value,index)"
                :on-change="(file, fileList)=> loadJsonFromFile(file, fileList,index)"
                drag
              >
                <div class="logo_info">点击或拖拽上传</div>
                <img v-if="item.url" :src="item.url" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div>
              <div>
                <div class="small_title">姓名：</div>
                <el-input v-model="BaseArr[index].name" placeholder="请输入姓名"></el-input>
              </div>
              <div>
                <div class="small_title">标题：</div>
                <el-input v-model="BaseArr[index].title" placeholder="请输入标题"></el-input>
              </div>
            </div>
            <div>
              <div>
                <div class="small_title">头衔：</div>
                <el-input v-model="BaseArr[index].honor" placeholder="请输入头衔"></el-input>
              </div>
              <div>
                <div class="small_title">内容：</div>
                <el-input v-model="BaseArr[index].content" placeholder="请输入内容"></el-input>
              </div>
            </div>

            <div class="AddAndSubstract">
              <i @click="AddDateData(index)" class="el-icon-circle-plus"></i>
              <i @click="SubtractDateData(index)" class="el-icon-remove"></i>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="textAlignCenter_w100p">
      <el-button type="primary">提交</el-button>
      <el-button>重置</el-button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "LecturerIntroduction",
  components: {},
  data() {
    return {
      BaseArr: [
        {
          id: 1,
          url: "",
          name: "",
          title: "",
          honor: "",
          content: ""
        },
        {
          id: 2,
          url: "",
          name: "",
          title: "",
          honor: "",
          content: ""
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    loadJsonFromFile(file, fileList, index) {
      console.log(file);
      console.log(fileList);
      console.log(index);
      this.uploadFilename = file.name;
      this.uploadFiles = fileList;

      let obj = this.BaseArr[index];
      obj.url = URL.createObjectURL(file.raw);
      Vue.set(this.BaseArr, index, obj);
    },
    beforeAvatarUpload(file, index) {
      console.log(file);
      console.log(index);
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
    },
    AddDateData(index, AddType) {
      console.log(index);
      let length = this.BaseArr.length;
      let newObj = {
        // id: "",
        id: String(length + 1),
        url: "",
        name: "",
        title: "",
        honor: "",
        content: ""
      };
      let CurrentContentArr = this.BaseArr;
      if (AddType == "firstAdd") {
        CurrentContentArr.splice(0, 0, newObj);
      } else {
        CurrentContentArr.splice(index + 1, 0, newObj);
        console.log(CurrentContentArr);
      }
    },
    SubtractDateData(index) {
      let CurrentContentArr = this.BaseArr;
      CurrentContentArr.splice(index, 1);
      console.log(CurrentContentArr);
    }
  }
};
</script>
<style>
.LecturerIntroduction .el-upload-dragger {
  width: 150px;
  height: 150px;
}
.LecturerIntroduction .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.LecturerIntroduction .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.LecturerIntroduction .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  /* width: 178px; */
  /* height: 178px; */
  line-height: 178px;
  text-align: center;
  width: 150px;
  height: 150px;
}
.LecturerIntroduction .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.LecturerIntroduction .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
}
.LecturerIntroduction .el-icon-plus:before {
  position: absolute;
  left: 42%;
  bottom: -11%;
}
</style>
<style scoped>
.LecturerIntroduction {
}
.LecturerIntroduction .ba_background {
  background-color: #f2f2f2;
}
.LecturerIntroduction .perRow {
  margin-bottom: 30px;
}
.LecturerIntroduction .ba_pos > div:nth-child(1) {
  margin-top: 30px;
  margin-right: 10px;
}
.LecturerIntroduction .ba_pos > div:nth-child(2) {
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.LecturerIntroduction .ba_pos > div:nth-child(3) {
  margin-right: 30px;
  margin-top: 30px;
}
.LecturerIntroduction .ba_pos > div:nth-child(4) {
  margin-right: 30px;
  margin-top: 30px;
}
.LecturerIntroduction .AddAndSubstract {
  margin-right: 30px;
  margin-top: 90px;
}
.LecturerIntroduction .small_title{
  margin-bottom: 10px;
}
</style>

