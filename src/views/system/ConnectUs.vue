<template>
  <div class="ConnectUs height_auto position_re">
    <vue-headful title="联系我们"></vue-headful>
    <div class="LI_content height_calc">
      <div class="perRowCom">
        <div class="pr_titleCom">活动城市：</div>
        <div class="pr_contentCom m_inputc">
          <el-input v-model="a_city" placeholder="请输入活动城市"></el-input>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">警务电话：</div>
        <div class="pr_contentCom">
          <div class="inlineBlock_verTop phoneNumber_input">
            <el-input v-model="city" placeholder="请输入区号"></el-input>
          </div>
          <div class="inlineBlock_verTop phoneNumber">-110</div>
        </div>
      </div>
      <div class="perRowCom">
        <div class="pr_titleCom">急救电话：</div>
        <div class="pr_contentCom">
          <div class="inlineBlock_verTop phoneNumber_input">
            <el-input v-model="phone" placeholder="请输入区号"></el-input>
          </div>
          <div class="inlineBlock_verTop phoneNumber">-120</div>
        </div>
      </div>
      <div class="contents">
        <div v-if="BaseArr.length == 0">
          <div>
            <i @click="AddDateData(0,'firstAdd')" class="el-icon-circle-plus"></i>
          </div>
        </div>
        <div v-if="BaseArr.length != 0">
          <template v-for="(item,index) in BaseArr ">
            <div class="inlineBlockP_verTop perRow" :key="index + 'ba' ">
              <div class="small_title">标题：</div>
              <div class="m_input">
                <el-input v-model="item.title" placeholder="请输入标题"></el-input>
              </div>
              <div class="media_manage1" :style="{height: '18px'}"></div>
              <div class="small_title">负责人：</div>
              <div class="m_input">
                <el-input v-model="item.principal" placeholder="请输入负责人"></el-input>
              </div>
              <div class="media_manage1" :style="{height: '18px'}"></div>
              <div class="small_title">联系电话：</div>
              <div class="m_input">
                <el-input v-model="item.phone" placeholder="请输入标题"></el-input>
              </div>
              <div class="AddAndSubstract_p2">
                <i @click="AddDateData(index)" class="el-icon-circle-plus"></i>
                <i @click="SubtractDateData(index)" class="el-icon-remove"></i>
              </div>
              <div class="media_manage1" :style="{height: '20px'}"></div>
            </div>
          </template>
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
export default {
  name: "ConnectUs",
  components: {},
  data() {
    return {
      a_city: "",
      city: "",
      phone: "",
      BaseArr: [
        {
          id: 1,
          title: "",
          principal: "",
          phone: ""
        },
        {
          id: 2,
          title: "",
          principal: "",
          phone: ""
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    AddDateData(index, AddType) {
      console.log(index);
      let length = this.BaseArr.length;
      let newObj = {
        // id: "",
        id: String(length + 1),
        title: "",
        principal: "",
        phone: ""
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
.ConnectUs .phoneNumber_input .el-input__inner {
  width: 130px;
  margin-right: 8px;
}
.ConnectUs .m_inputc .el-input__inner {
  width: 203px;
}
</style>

<style >
.contents .m_input {
  margin-right: 32px;
}
</style>
<style scoped>
.ConnectUs {
}
.ConnectUs .LI_content {
  padding-left: 32px;
}

.ConnectUs .phoneNumber {
  height: 40px;
  line-height: 40px;

  font-size: 14px;
  font-family: PingFangTC;
  color: rgba(149, 165, 186, 1);
}
.ConnectUs .contents {
  border-top: 1px solid rgba(149, 165, 186, 0.2);
}
.ConnectUs .perRow {
  margin-top: 18px;
  min-width: 450px;
}
.ConnectUs .small_title {
  height: 40px;
  font-size: 14px;
  font-family: PingFangTC;
  line-height: 40px;
  color: rgba(17, 26, 52, 1);
  margin-right: 16px;
  width: 82px;
  text-align: left;
}
.ConnectUs .AddAndSubstract_p2 {
  margin-top: 10px;
}
/* *************** 自适应相关 */
.ConnectUs .media_manage1 {
  display: none;
}
.ConnectUs .media_manage2 {
  display: none;
}
@media screen and (max-width: 1600px) {
  .ConnectUs .media_manage1 {
    display: inherit;
  }
  .ConnectUs .small_title {
    text-align: right;
  }
}
</style>

