<template>
  <div class="Questionnaire height_auto position_re">
    <vue-headful title="调查问卷"></vue-headful>
    <el-row class="main_question_list height_calc">
      <el-row class="question_item flex" v-for="(list,index) in questionList" :key="index">
        <span class="question_index">{{index+1}}.</span>
        <el-row class="flex_1 flex flex_direction">
          <!-- 中间题目选项部分 -->
          <el-row
            class="question_item_content"
            v-for="(item,index2) in list.questionContent"
            :key="index2+'i'"
          >
            <el-row>
              <span>{{item.title}}：</span>
              <el-input v-model="item.value" placeholder="请输入"></el-input>
              <span
                v-if="index2 != 0 && index2 != list.questionContent.length-1"
                @click="deleteItem(index,index2)"
              >
                <i class="icon_i el-icon-remove-outline"></i>
              </span>
              <span v-if="index2 == list.questionContent.length-1" @click="addItem(index)">
                <i class="icon_i el-icon-circle-plus-outline"></i>
              </span>
            </el-row>
          </el-row>
        </el-row>
        <!-- 每个问题的设置 -->
        <el-row class="setting_check">
          <el-row>
            <span>
              <el-radio v-model="list.setting.radio" label="1" :disabled="list.setting.checked">单选</el-radio>
            </span>
            <span @click="checkedClick(index)">
              <el-checkbox v-model="list.setting.checked">多选</el-checkbox>
            </span>
          </el-row>
          <el-row class="other_content">
            <el-radio v-model="list.setting.radio" label="2" :disabled="list.setting.checked">
              其他请具体说明
              <el-input
                class="other_input"
                :disabled="list.setting.checked"
                v-model="list.setting.otherValue"
              ></el-input>
            </el-radio>
          </el-row>
        </el-row>
        <!-- 最右侧曾，减按钮 -->
        <el-row class="right_icon flex flex_align_center">
          <span v-if="index != questionList.length-1" @click="deleteList(index)">
            <i class="icon_i el-icon-remove-outline"></i>
          </span>
          <span v-if="index == questionList.length-1" @click="addList(index)">
            <i class="icon_i el-icon-circle-plus-outline"></i>
          </span>
        </el-row>
      </el-row>

      <!-- 批量添加按钮 -->
      <el-button
        class="add_button"
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="dialogFormVisible=true"
      >批量添加</el-button>
    </el-row>
    <div class="flex_submit_p">
      <div class="flex_submit">
        <el-button class="btn_submit" type="primary">提交</el-button>
        <el-button>重置</el-button>
      </div>
    </div>

    <!-- 批量添加 -->
    <el-dialog title="批量添加" :visible.sync="dialogFormVisible">
      <el-row class="add_niotice">
        1、题目与题目之间需空一行，题目可以不加题号，题干中间不得换行
        <br />2、题干与选项，及各选项之间需回车换行，选项不得以数字开头（会被识别为题干）
        <br />3、题目无选项直接空一行，会默认识别为文本型题目
      </el-row>
      <el-row class="questionListForm">
        <el-row
          class="questionListItem"
          v-for="(questionList,index3) in questionform"
          :key="index3+'q'"
        >
          <el-row>
            <span>
              题目1
              <i v-if="!questionList.radio">【多选题】</i>：
            </span>
            <el-input v-model="questionList.title" autocomplete="off"></el-input>
          </el-row>
          <el-row>
            <span>选项1：</span>
            <el-input v-model="questionList.answer1" autocomplete="off"></el-input>
          </el-row>
          <el-row>
            <span>选项2：</span>
            <el-input v-model="questionList.answer2" autocomplete="off"></el-input>
          </el-row>
          <el-row>
            <span>选项3：</span>
            <el-input v-model="questionList.answer3" autocomplete="off"></el-input>
          </el-row>
          <el-row>
            <span>选项4：</span>
            <el-input v-model="questionList.answer4" autocomplete="off"></el-input>
          </el-row>
        </el-row>
        <!-- 单行文本题 -->
        <el-row class="single_input">
          <span>单行文本题:</span>
          <el-input v-model="singleInput" autocomplete="off"></el-input>
        </el-row>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="dialogFormVisible = false">提 交</el-button>
        <el-button size="mini" @click="dialogFormVisible = false">重 置</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Questionnaire",
  components: {},
  data() {
    return {
      questionList: [
        {
          questionContent: [
            { title: "题目", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" }
          ],
          setting: {
            radio: "",
            radioDisabled: false,
            checked: false,
            checkedDisabled: false,
            otherValue: ""
          }
        },
        {
          questionContent: [
            { title: "题目", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" },
            { title: "选项", value: "" }
          ],
          setting: {
            radio: "",
            radioDisabled: false,
            checked: false,
            checkedDisabled: false,
            otherValue: ""
          }
        }
      ],
      dialogFormVisible: false,
      questionform: [
        {
          radio: true,
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        },
        {
          radio: false,
          title: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: ""
        }
      ],
      singleInput: ""
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    //删除选项
    deleteItem(listIndex, itemIndex) {
      console.log(listIndex, itemIndex);
      this.questionList[listIndex].questionContent.splice(itemIndex, 1);
    },
    //增加选项
    addItem(listIndex) {
      this.questionList[listIndex].questionContent.push({
        title: "选项",
        value: ""
      });
    },
    //删除选项整行
    deleteList(listIndex) {
      this.questionList.splice(listIndex, 1);
    },
    //添加选项整行
    addList(listIndex) {
      this.questionList.push({
        questionContent: [
          { title: "题目", value: "" },
          { title: "选项", value: "" },
          { title: "选项", value: "" },
          { title: "选项", value: "" },
          { title: "选项", value: "" }
        ],
        setting: {
          radio: "",
          radioDisabled: false,
          checked: false,
          checkedDisabled: false,
          otherValue: ""
        }
      });
    },
    //点击多选
    checkedClick(listIndex) {
      console.log(listIndex);
      this.questionList[listIndex].setting.radio = "";
    }
  }
};
</script>
<style>
.main_question_list .other_input .el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  width: 140px;
  height: 30px;
  line-height: 30px;
  border-radius: 1px;
}
.el-dialog .questionListForm .el-input,
.el-dialog .questionListForm .el-input__inner {
  width: 300px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 1px;
  height: 25px;
  line-height: 35px;
  padding-left: 0px;
}
</style>
<style scoped>
.main_question_list {
  padding-right: 23px;
  padding-bottom: 20px;
  overflow-x: hidden;
}
.main_question_list .el-input {
  width: 320px;
  margin-right: 16px;
}
.el-input__inner {
  height: 32px;
}
.question_item {
  background: rgba(244, 247, 252, 0.4);
  padding-left: 16px;
  position: relative;
}
.question_item_content {
  margin: 8px 0px;
  white-space: nowrap;
}
.question_item:nth-child(2n) {
  background: #fff;
}
.question_index {
  font-size: 20px;
  color: #111a34;
  margin-right: 25px;
  padding-top: 14px;
}
.right_icon {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  padding-left: 10px;
}
.question_item .icon_i {
  font-size: 18px;
  cursor: pointer;
}
.question_item .el-icon-remove-outline {
  color: #fc4850;
}
.question_item .el-icon-circle-plus-outline {
  color: #1890ff;
}
.setting_check {
  padding-top: 8px;
  padding-left: 60px;
}
.setting_check span:nth-child(1) {
  margin-right: 30px;
}
.other_content {
  margin-top: 8px;
}
.add_button {
  margin-top: 20px;
  font-size: 14px;
}
.add_niotice {
  color: #95a5ba;
  font-size: 14px;
  line-height: 20px;
}
.questionListForm {
  border: 1px solid #e0e0e0;
  margin-top: 15px;
  padding: 10px;
}
.questionListForm i {
  font-style: normal;
}
.questionListItem {
  margin-bottom: 10px;
}
.questionListItem .el-row {
  display: -webkit-flex;
  display: flex;
  align-items: flex-end;
}
.questionListItem .el-row span,
.single_input span {
  color: #111a34;
}
</style>

