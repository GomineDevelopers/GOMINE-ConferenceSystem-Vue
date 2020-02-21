<template>
  <div class="LecturerIntroduction height_auto position_re">
    <vue-headful title="讲师介绍"></vue-headful>
    <div class="LI_content height_calc">
      <div v-if="BaseArr.length == 0">
        <div>
          <i @click="AddDateData(0,'firstAdd')" class="el-icon-circle-plus"></i>
        </div>
      </div>
      <div class="ba_background_p" v-if="BaseArr.length != 0">
        <template v-for="(item,index) in BaseArr ">
          <div class="ba_background perRow inlineBlockP_verTop ba_pos" :key="index + 'ba' ">
            <!-- <div>id：{{item.id}}</div> -->
            <!-- <div>头图：{{item.url}}</div> -->
            <div class="small_title">头图：</div>
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
            <div class="media_manage1" :style="{height: '18px'}"></div>

            <div class="input_all">
              <div class="inlineBlockP_verTop input_top">
                <div>
                  <div class="small_title inlineBlock_verTop">姓名：</div>
                  <div class="inlineBlock_verTop it_1">
                    <el-input v-model="BaseArr[index].name" placeholder="请输入姓名"></el-input>
                  </div>
                </div>
                <div class="media_manage2" :style="{height: '18px'}"></div>
                <div>
                  <div class="small_title inlineBlock_verTop">头衔：</div>
                  <div class="inlineBlock_verTop it_2">
                    <el-input v-model="BaseArr[index].honor" placeholder="请输入头衔"></el-input>
                  </div>
                </div>
                <div class="media_manage2" :style="{height: '18px'}"></div>
                <div>
                  <div class="small_title inlineBlock_verTop">副主题：</div>
                  <div class="inlineBlock_verTop it_3">
                    <el-input v-model="BaseArr[index].theme" placeholder="请输入标题"></el-input>
                  </div>
                </div>
              </div>
              <div class="input_bottom">
                <div>
                  <div class="small_title inlineBlock_verTop">内容：</div>
                  <div class="inlineBlock_verTop it_4">
                    <el-input
                      type="textarea"
                      :rows="2"
                      v-model="BaseArr[index].content"
                      placeholder="请输入内容"
                    ></el-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="AddAndSubstract_p AddAndSubstract_p2">
              <i @click="AddDateData(index)" class="el-icon-circle-plus"></i>
              <i @click="SubtractDateData(index)" class="el-icon-remove"></i>
            </div>
          </div>
        </template>
      </div>
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
          theme: "",
          honor: "",
          content: ""
        },
        {
          id: 2,
          url: "",
          name: "",
          theme: "",
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
        theme: "",
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
/* ****** 上传图片 */
.LecturerIntroduction .el-upload-dragger {
  width: 100px;
  height: 100px;
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
  width: 100px;
  height: 100px;
}
.LecturerIntroduction .avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.LecturerIntroduction .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  color: #c5c9d7;
}
.LecturerIntroduction .el-icon-plus:before {
  position: absolute;
  left: 36%;
  bottom: -24%;
}
/* ****** input 相关 */
.LecturerIntroduction .it_1 .el-input__inner {
  width: 130px;
  margin-right: 5px;
}
.LecturerIntroduction .it_2 .el-input__inner {
  width: 200px;
  margin-right: 5px;
}
.LecturerIntroduction .it_3 .el-input__inner {
  width: 300px;
}
.LecturerIntroduction .it_4 .el-textarea__inner {
  width: 836px;
  min-height: 33px;
  color: #606266;
  font-size: 14px;
  font-family: Arial;
}
@media screen and (max-width: 1600px) {
  .LecturerIntroduction .ba_pos{
    min-width: 550px;
  }
  .LecturerIntroduction .it_4 .el-textarea__inner {
    width: 200%;
    min-height: 33px;
    color: #606266;
    font-size: 14px;
    font-family: Arial;
  }
}
</style>
<style scoped>
.LecturerIntroduction {
}
.LecturerIntroduction .ba_background_p .ba_background:nth-child(1n) {
  /* background-color: #f2f2f2; */
  background-color: rgba(244, 247, 252, 0.4);
}
.LecturerIntroduction .ba_background_p .ba_background:nth-child(2n) {
  background-color: rgba(244, 247, 252, 0);
}
.LecturerIntroduction .ba_background_p .ba_background {
  /* height: 100px; */
  padding: 30px 0 32px 12px;
}

.LecturerIntroduction .upload_img {
  width: 141px;
}
.LecturerIntroduction .input_all {
  /* width: 1123px; */
  margin-right: 20px;
}
.LecturerIntroduction .input_top {
  margin-bottom: 16px;
}
.LecturerIntroduction .perRow {
  /* margin-bottom: 30px; */
}

.LecturerIntroduction .small_title {
  /* margin-bottom: 10px; */
  height: 40px;
  line-height: 40px;
  margin-right: 16px;
  width: 82px;
  text-align: right;
}
.LecturerIntroduction .AddAndSubstract_p2 {
  padding-top: 40px;
}

/* *************** 自适应相关 */
.LecturerIntroduction .media_manage1 {
  display: none;
}
.LecturerIntroduction .media_manage2 {
  display: none;
}
@media screen and (max-width: 1800px) {
  .LecturerIntroduction .media_manage1 {
    display: inherit;
  }
}
@media screen and (max-width: 1600px) {
  .LecturerIntroduction .media_manage2 {
    display: inherit;
  }
}
</style>

