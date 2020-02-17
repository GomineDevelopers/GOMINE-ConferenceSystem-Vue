<template>
  <div class="GlobalSettings">
    <vue-headful title="整体设置"></vue-headful>
    <div class="GS_content">
      <div class="perRow">
        <div class="pr_title">会议地址：</div>
        <div class="pr_content">{{metting_address}}</div>
      </div>
      <div class="perRow">
        <div class="pr_title">会议规格：</div>
        <div class="pr_content">
          <div class="choosemodule"></div>
          <template v-for="(item2,index2) in MeetingSecifications ">
            <div :key="index2 + 'sc' ">
              <div class="choosemodule">{{item2.text}}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="perRow">
        <div class="pr_title">九宫格内容：</div>
        <div class="pr_content">
          <template v-for="(item3,index3) in SudokuContent ">
            <div :key="index3 + 'sc' ">
              <div class="choosemodule">{{item3.text}}</div>
            </div>
          </template>
        </div>
      </div>
      <div class="perRow">
        <div class="pr_title">LOGO：</div>
        <div class="pr_content"></div>
      </div>
      <div class="perRow">
        <div class="pr_title">会议背景（整体）：</div>
        <div class="pr_content"></div>
      </div>
      <div class="perRow">
        <div class="pr_title">正文字号（整体）：</div>
        <div class="pr_content"></div>
      </div>
      <div class="perRow">
        <div class="pr_title">标题字号（整体）：</div>
        <div class="pr_content"></div>
      </div>
    </div>
    <div>
      <el-button type="primary">提交</el-button>
      <el-button>重置</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalSettings",
  components: {},
  data() {
    return {
      metting_address: "www.xxxx.cn/xxx/xxx",
      MeetingSecifications: [
        {
          id: 1,
          text: "六宫格"
        },
        {
          id: 2,
          text: "九宫格"
        }
      ],
      SudokuContent: [
        {
          id: 1,
          text: "会议背景"
        },
        {
          id: 2,
          text: "会议日程"
        },
        {
          id: 3,
          text: "讲师介绍"
        },
        {
          id: 4,
          text: "会务日程"
        },
        {
          id: 5,
          text: "赞助商"
        },
        {
          id: 6,
          text: "调查问卷"
        },
        {
          id: 7,
          text: "资料下载"
        },
        {
          id: 8,
          text: "联系我们"
        },
        {
          id: 9,
          text: "个人中心"
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.GlobalSettings {
}
</style>

