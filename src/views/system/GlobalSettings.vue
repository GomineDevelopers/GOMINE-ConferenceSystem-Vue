<template>
  <div class="GlobalSettings height_auto position_re overflow_hidden">
    <vue-headful title="整体设置"></vue-headful>
    <div class="GS_content height_calc">
      <div class="perRowCom">
        <div class="pr_titleCom">会议地址：</div>
        <div class="pr_contentCom">
          <div class="metting_address">{{metting_address}}</div>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">会议规格：</div>
        <div class="pr_contentCom">
          <div class="choosemodule_PCom">
            <template v-for="(item2,index2) in MeetingSecifications ">
              <div
                @click="ChooseStatusChange('ms',index2,true,item2.Aid)"
                v-if="!item2.ifChoose"
                :key="index2 + 'ms' "
                class="choosemoduleCom choosemodule3Com"
              >{{item2.text}}</div>
              <!-- <div
                @click="ChooseStatusChange('ms',index2,false,item2.Aid)"
                v-if="item2.ifChoose"
                :key="index2 + 'ms' "
                class="choosemoduleCom choosemodule2Com"
              >{{item2.text}}</div>-->
              <div
                v-if="item2.ifChoose"
                :key="index2 + 'ms' "
                class="choosemoduleCom choosemodule2Com choosemodule3Com"
              >{{item2.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">{{SudokuContentText}}内容：</div>
        <div class="pr_contentCom">
          <div class="choosemodule_PCom">
            <template v-for="(item3,index3) in SudokuContent ">
              <div
                @click="ChooseStatusChange('sc',index3,true)"
                v-if="!item3.ifChoose"
                :key="index3 + 'sc' "
                class="choosemoduleCom"
              >{{item3.text}}</div>
              <div
                @click="ChooseStatusChange('sc',index3,false)"
                v-if="item3.ifChoose"
                :key="index3 + 'sc' "
                class="choosemoduleCom choosemodule2Com"
              >{{item3.text}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">LOGO：</div>
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
        <div class="pr_titleCom">会议背景（整体）：</div>
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
        <div class="pr_titleCom">正文字号（整体）：</div>
        <div class="pr_contentCom">
          <el-select v-model="mainContentFont" placeholder="正文字号（整体）">
            <el-option
              v-for="itemMCF in options_mainContentFont"
              :key="itemMCF.value"
              :label="itemMCF.label"
              :value="itemMCF.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">标题字号（整体）：</div>
        <div class="pr_contentCom">
          <el-select v-model="mainTitleFont" placeholder="标题字号（整体）">
            <el-option
              v-for="itemMTF in options_mainTitleFont"
              :key="itemMTF.value"
              :label="itemMTF.label"
              :value="itemMTF.value"
            ></el-option>
          </el-select>
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
  name: "GlobalSettings",
  components: {},
  watch: {
    Aid(newVlaue, oldValue) {
      // if (newVlaue == 6) {
      //   // this.SudokuContentStatusSet("init");
      // }
      // if (newVlaue == 9) {
      //   // this.SudokuContentStatusSet("all");
      // }
    }
  },
  data() {
    return {
      metting_address: "www.xxxx.cn/xxx/xxx",
      MeetingSecifications: [
        {
          id: 1,
          Aid: 1,
          text: "六宫格",
          ifChoose: true // 默认
        },
        {
          id: 2,
          Aid: 2,
          text: "九宫格",
          ifChoose: false
        }
      ],
      Aid: 6, // 默认 - 6 ， 可选 - 9
      SudokuContentText: "六宫格",
      SudokuContent: [
        {
          id: 1,
          text: "会议背景",
          ifChoose: false
        },
        {
          id: 2,
          text: "会议日程",
          ifChoose: false
        },
        {
          id: 3,
          text: "讲师介绍",
          ifChoose: false
        },
        {
          id: 4,
          text: "会务日程",
          ifChoose: false
        },
        {
          id: 5,
          text: "赞助商",
          ifChoose: false
        },
        {
          id: 6,
          text: "调查问卷",
          ifChoose: false
        },
        {
          id: 7,
          text: "资料下载",
          ifChoose: false
        },
        {
          id: 8,
          text: "联系我们",
          ifChoose: false
        },
        {
          id: 9,
          text: "个人中心",
          ifChoose: false
        }
      ],
      // Logo
      imageUrl: "",
      // 背景
      imageUrl2: "",
      mainContentFont: "",
      options_mainContentFont: [
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
        }
      ],
      mainTitleFont: "",
      options_mainTitleFont: [
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
        }
      ]
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
    },

    ChooseStatusChange(arrType, index, toStatus, Aid) {
      if (arrType == "ms") {
        // 宫格选择初始化
        this.MeetingSecificationsStatusInit();
        // 宫格内容初始化
        this.SudokuContentStatusSet("init");
        // 指定赋值
        let obj = this.MeetingSecifications[index];
        obj.ifChoose = toStatus;
        Vue.set(this.MeetingSecifications, index, obj);
        this.Aid = Aid;
        if (Aid == 1) {
          this.SudokuContentText = "六宫格";
        }
        if (Aid == 2) {
          this.SudokuContentText = "九宫格";
          this.SudokuContentStatusSet("all");
        }
      } else if (arrType == "sc") {
        let SudokuContentCount = this.SudokuContentCount();
        // 6宫格可变化范围：0~6
        if (this.Aid == 1 && SudokuContentCount < 6) {
          let obj = this.SudokuContent[index];
          obj.ifChoose = toStatus;
          Vue.set(this.SudokuContent, index, obj);
        }
        if (this.Aid == 1 && SudokuContentCount == 6) {
          if (toStatus == false) {
            let obj = this.SudokuContent[index];
            obj.ifChoose = toStatus;
            Vue.set(this.SudokuContent, index, obj);
          } else if (toStatus == true) {
            this.$notify.info({
              title: "温馨提示",
              message: "六宫格只能选择六个！"
            });
          }
        }
      }
    },
    MeetingSecificationsStatusInit() {
      for (let i = 0; i < this.MeetingSecifications.length; i++) {
        let obj = this.MeetingSecifications[i];
        obj.ifChoose = false;
        Vue.set(this.MeetingSecifications, i, obj);
      }
    },
    SudokuContentCount() {
      let SudokuContentCount = 0;
      for (let i = 0; i < this.SudokuContent.length; i++) {
        if (this.SudokuContent[i].ifChoose == true) {
          SudokuContentCount++;
        }
      }
      return SudokuContentCount;
    },
    SudokuContentStatusSet(StatusType) {
      // 宫格状态设置: "init" - false , "all" - 全选 , "part" - 部分
      let temp_status;
      if (StatusType == "init") {
        // 初始化选择
        temp_status = false;
      } else if (StatusType == "all") {
        temp_status = true;
      } else if (StatusType == "part") {
        temp_status = false;
      }
      for (let i = 0; i < this.SudokuContent.length; i++) {
        let obj = this.SudokuContent[i];
        obj.ifChoose = temp_status;
        Vue.set(this.SudokuContent, i, obj);
      }
    }
  }
};
</script>
<style >
.GlobalSettings .el-upload-dragger {
  width: 200px;
}
.GlobalSettings .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.GlobalSettings .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.GlobalSettings .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.GlobalSettings .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.GlobalSettings .logo_info {
  margin: 10px auto;
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  color: #c5c9d7;
}
</style>
<style scoped>
.GlobalSettings {
  width: 100%;
  position: relative;
}
.GlobalSettings .metting_address {
  height: 20px;
  font-size: 14px;
  font-family: PingFangTC;
  line-height: 20px;
  color: rgba(149, 165, 186, 1);
}
</style>

