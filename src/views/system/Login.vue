<template>
  <div class="Login">
    <vue-headful title="登录"></vue-headful>
    <div class="GS_content">
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">LOGO位置：</div>
        <div class="inlineBlock_verTop pr_content">
          <div class="choosemodule_P">
            <template v-for="(item1,index1) in LogoPosition ">
              <div
                @click="ChooseStatusChange('lp',index1,true,item1.Aid)"
                v-if="!item1.ifChoose"
                :key="index1 + 'lp' "
                class="choosemodule"
              >{{item1.text}}</div>
              <div
                v-if="item1.ifChoose"
                :key="index1 + 'lp' "
                class="choosemodule choosemodule2"
              >{{item1.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">会议LOGO：</div>
        <div class="inlineBlock_verTop pr_content">
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

      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">登录验证方式：</div>
        <div class="inlineBlock_verTop pr_content">
          <div class="choosemodule_P">
            <template v-for="(item2,index2) in LoginVerificationMethod ">
              <div
                @click="ChooseStatusChange('lvm',index2,true,item2.Aid)"
                v-if="!item2.ifChoose"
                :key="index2 + 'lvm' "
                class="choosemodule"
              >{{item2.text}}</div>
              <div
                v-if="item2.ifChoose"
                :key="index2 + 'lvm' "
                class="choosemodule choosemodule2"
              >{{item2.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">会议KV：</div>
        <div class="inlineBlock_verTop pr_content">
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
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">登录框样式：</div>
        <div class="inlineBlock_verTop pr_content">
          <div class="choosemodule_P">
            <template v-for="(item3,index3) in LoginBoxStyle ">
              <div
                @click="ChooseStatusChange('lbs',index3,true,item3.Aid)"
                v-if="!item3.ifChoose"
                :key="index3 + 'lbs' "
                class="choosemodule"
              >{{item3.text}}</div>
              <div
                v-if="item3.ifChoose"
                :key="index3 + 'lbs' "
                class="choosemodule choosemodule2"
              >{{item3.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">登录框颜色：</div>
        <div class="inlineBlock_verTop pr_content">
          <el-input v-model="LoginBoxColor" placeholder="请输入颜色"></el-input>示例：#ffffff 、rgb(0,0,0) 、rgba(0,0,0,0)
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">登录按钮样式：</div>
        <div class="inlineBlock_verTop pr_content">
          <div class="choosemodule_P">
            <template v-for="(item4,index4) in LoginButtonStyle ">
              <div
                @click="ChooseStatusChange('lbus',index4,true,item4.Aid)"
                v-if="!item4.ifChoose"
                :key="index4 + 'lbus' "
                class="choosemodule"
              >{{item4.text}}</div>
              <div
                v-if="item4.ifChoose"
                :key="index4 + 'lbus' "
                class="choosemodule choosemodule2"
              >{{item4.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">登录按钮颜色：</div>
        <div class="inlineBlock_verTop pr_content">
          <el-input v-model="LoginBtnColor" placeholder="请输入颜色"></el-input>示例：#ffffff 、rgb(0,0,0) 、rgba(0,0,0,0)
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">会议开始时间：</div>
        <div class="inlineBlock_verTop pr_content">
          <el-date-picker v-model="date_start" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
      <div class="perRow">
        <div class="inlineBlock_verTop pr_title">会议地点：</div>
        <div class="inlineBlock_verTop pr_content">
          <el-input v-model="meeting_address" placeholder="请输入会议地点"></el-input>
        </div>
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
  name: "Login",
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
      LoginVerificationMethod: [
        {
          id: 1,
          Aid: 1,
          text: "手机号",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "邮箱",
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
      LoginBoxColor: "",
      LoginBtnColor: "",
      date_start: "",
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
      } else if (arrType == "lvm") {
        this.ArrStatusInit_detail(this.LoginVerificationMethod);
        this.ArrStatusAssign_detail(
          this.LoginVerificationMethod,
          index,
          toStatus,
          Aid
        );
      } else if (arrType == "lbs") {
        this.ArrStatusInit_detail(this.LoginBoxStyle);
        this.ArrStatusAssign_detail(this.LoginBoxStyle, index, toStatus, Aid);
      } else if (arrType == "lbus") {
        this.ArrStatusInit_detail(this.LoginButtonStyle);
        this.ArrStatusAssign_detail(
          this.LoginButtonStyle,
          index,
          toStatus,
          Aid
        );
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
.Login .el-upload-dragger {
  width: 200px;
}
.Login .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.Login .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.Login .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.Login .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.Login .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
}
</style>
<style scoped>
.Login {
}
.Login .perRow {
  margin-bottom: 30px;
}
.Login .pr_title {
  width: 150px;
  text-align: right;
}
.Login .pr_content {
  width: 300px;
}

.Login .choosemodule_P {
  width: 340px;
}
.Login .choosemodule {
  border: 1px solid #333333;
  display: inline-block;
  width: 100px;
  text-align: center;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin: 0 10px 5px 0px;
}
.Login .choosemodule2 {
  border: 1px solid #1890ff;
  color: #1890ff;
}
</style>

