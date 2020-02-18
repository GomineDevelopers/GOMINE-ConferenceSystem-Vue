<template>
  <div class="MeetingBackground">
    <vue-headful title="会议背景"></vue-headful>
    <div class="mb_content">
      <div class="PerRow">
        <div class="PerRow_L">会议背景：</div>
        <div class="PerRow_R">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea1"></el-input>
        </div>
      </div>
    </div>

    <div class="mb_content">
      <div class="PerRow">
        <div class="PerRow_L">正文字号：</div>
        <div class="PerRow_R">
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
    </div>

    <div class="mb_content">
      <div class="PerRow">
        <div class="PerRow_L">标题字号：</div>
        <div class="PerRow_R">
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
    </div>

    <div class="mb_content">
      <div class="PerRow">
        <div class="PerRow_L">正文字体：</div>
        <div class="PerRow_R">
          <el-select v-model="value3" placeholder="请选择正文字体">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
export default {
  name: "MeetingBackground",
  components: {},
  data() {
    return {
      textarea1: "",
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
  methods: {}
};
</script>
<style scoped>
.MeetingBackground {
}
.MeetingBackground .mb_content {
  margin-bottom: 30px;
}
.MeetingBackground .PerRow {
  width: 100%;
  font-size: 0;
}
.MeetingBackground .PerRow_L {
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
}
.MeetingBackground .PerRow_R {
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
}
.MeetingBackground .i_textarea {
  width: 400px;
}
</style>

