<template>
  <div class="MainMenu height_auto position_re">
    <vue-headful title="登录"></vue-headful>
    <div class="MM_content height_calc">
      <div class="perRowCom">
        <div class="pr_titleCom">LOGO位置：</div>
        <div class="pr_contentCom">
          <div class="choosemodule_P">
            <template v-for="(item1,index1) in LogoPosition ">
              <div
                @click="ChooseStatusChange('lp',index1,true,item1.Aid)"
                v-if="!item1.ifChoose"
                :key="index1 + 'lp' "
                class="choosemoduleCom choosemodule3Com"
              >{{item1.text}}</div>
              <div
                v-if="item1.ifChoose"
                :key="index1 + 'lp' "
                class="choosemoduleCom choosemodule2Com choosemodule3Com"
              >{{item1.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">头图：</div>
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
        <div class="pr_titleCom">宫格样式：</div>
        <div class="pr_contentCom">
          <div class="choosemodule_P">
            <template v-for="(item2,index2) in SudokuStyle ">
              <div
                @click="ChooseStatusChange('ss',index2,true,item2.Aid)"
                v-if="!item2.ifChoose"
                :key="index2 + 'ss' "
                class="choosemoduleCom choosemodule3Com"
              >{{item2.text}}</div>
              <div
                v-if="item2.ifChoose"
                :key="index2 + 'ss' "
                class="choosemoduleCom choosemodule2Com choosemodule3Com"
              >{{item2.text}}</div>
            </template>
          </div>
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
            :before-upload="(value)=> beforeAvatarUpload(value,2)"
            :on-change="(file, fileList)=> loadJsonFromFile(file, fileList,2)"
            drag
          >
            <div class="logo_info">点击或拖拽上传</div>
            <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
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
  name: "MainMenu",
  components: {},
  data() {
    return {
      LogoPosition: [
        {
          id: 1,
          Aid: 1,
          text: "偏左",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "偏右",
          ifChoose: false
        }
      ],
      SudokuStyle: [
        {
          id: 1,
          Aid: 1,
          text: "圆形",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "方形",
          ifChoose: false
        }
      ],
      LoginBoxStyle: [
        {
          id: 1,
          Aid: 1,
          text: "圆角",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "直角",
          ifChoose: false
        }
      ],
      LoginButtonStyle: [
        {
          id: 1,
          Aid: 1,
          text: "圆角",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "直角",
          ifChoose: false
        }
      ],
      // 上传1
      imageUrl: "",
      // 上传2
      imageUrl2: "",
      meeting_address: ""
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    ChooseStatusChange(arrType, index, toStatus, Aid) {
      console.log(arrType);
      if (arrType == "lp") {
        this.ArrStatusInit_detail(this.LogoPosition);
        this.ArrStatusAssign_detail(this.LogoPosition, index, toStatus, Aid);
      } else if (arrType == "ss") {
        this.ArrStatusInit_detail(this.SudokuStyle);
        this.ArrStatusAssign_detail(this.SudokuStyle, index, toStatus, Aid);
      }
    },
    ArrStatusInit_detail(arr) {
      for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        obj.ifChoose = false;
        Vue.set(arr, i, obj);
      }
    },
    ArrStatusAssign_detail(arr, index, toStatus, Aid) {
      // 指定赋值
      let obj = arr[index];
      obj.ifChoose = toStatus;
      Vue.set(arr, index, obj);
      if (Aid == 1) {
        console.log(Aid); // 拓展：new参数 =》 看api需要，传入方式一样
      }
      if (Aid == 2) {
        console.log(Aid);
      }
    },
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
<style >
.MainMenu .el-upload-dragger {
  width: 200px;
}
.MainMenu .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.MainMenu .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.MainMenu .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.MainMenu .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.MainMenu .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  color: #c5c9d7;
}
</style>
<style scoped>
.MainMenu {
}
</style>

