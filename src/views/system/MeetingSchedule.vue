<template>
  <div class="MeetingSchedule">
    <vue-headful title="会议日程"></vue-headful>
    <div class="block">
      <span>选择日期：</span>
      <el-date-picker
        v-model="time.value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="DateChoose($event,'test')"
      ></el-date-picker>
    </div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <template v-for="(item,index) in DateArr ">
          <el-tab-pane :key="index + 'date' " :label="item.date" :name="String(index)">
            <div v-if="item.contentArr.length == 0">
              <div>
                <i @click="AddDateData(index,0,'firstAdd')" class="el-icon-circle-plus"></i>
              </div>
            </div>

            <div v-if="item.contentArr.length != 0">
              <template v-for="(itemC,indexC) in item.contentArr ">
                <div :key="indexC + 'content' ">
                  <div class="inlineBlockP perFont">
                    <div>选择时间:</div>
                    <div>
                      <el-time-picker v-model="itemC.startTime" placeholder="任意时间点"></el-time-picker>
                    </div>
                    <div>- 选择时间:</div>
                    <div>
                      <el-time-picker v-model="itemC.endTime" placeholder="任意时间点"></el-time-picker>
                    </div>
                    <div>主题：</div>
                    <div>
                      <el-select v-model="itemC.theme" placeholder="请选择主题">
                        <el-option
                          v-for="itemOT in optionsTheme"
                          :key="itemOT.value"
                          :label="itemOT.label"
                          :value="itemOT.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div>副标题：</div>
                    <div>
                      <el-select v-model="itemC.subhead" placeholder="请选择副标题">
                        <el-option
                          v-for="itemOS in optionsSubhead"
                          :key="itemOS.value"
                          :label="itemOS.label"
                          :value="itemOS.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div>
                      <i @click="AddDateData(index,indexC)" class="el-icon-circle-plus"></i>
                      <i @click="SubtractDateData(index,indexC)" class="el-icon-remove"></i>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "MeetingSchedule",
  components: {},
  data() {
    return {
      activeName: "0",
      time: {
        value1: "",
        startT: "",
        endT: ""
      },
      optionsTheme: [
        {
          value: "1",
          label: "北京"
        },
        {
          value: "2",
          label: "上海"
        },
        {
          value: "3",
          label: "广州"
        }
      ],
      optionsSubhead: [
        {
          value: "1",
          label: "首都"
        },
        {
          value: "2",
          label: "东方明珠"
        },
        {
          value: "3",
          label: "广东"
        }
      ],

      DateArr: [
        {
          date: "2020-02-13",
          contentArr: [
            {
              startTime: "",
              endTime: "",
              theme: "",
              subhead: ""
            },
            {
              startTime: "",
              endTime: "",
              theme: "",
              subhead: ""
            }
          ]
        },
        { date: "2020-02-14", contentArr: [{}] }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    InitDateArr(dateArr) {
      this.DateArr = [];
      for (let i = 0; i < dateArr.length; i++) {
        let newDateData = {
          date: dateArr[i],
          contentArr: [
            {
              startTime: "",
              endTime: "",
              theme: "",
              subhead: ""
            }
          ]
        };
        this.DateArr.push(newDateData);
      }
    },
    AddDateData(index, indexC, AddType) {
      console.log(index);
      console.log(indexC);
      let newObj = {
        startTime: "",
        endTime: "",
        theme: "test",
        subhead: ""
      };
      let CurrentContentArr = this.DateArr[index].contentArr;
      if (AddType == "firstAdd") {
        CurrentContentArr.splice(0, 0, newObj);
      } else {
        CurrentContentArr.splice(indexC + 1, 0, newObj);
        console.log(CurrentContentArr);
      }
    },
    SubtractDateData(index, indexC) {
      let CurrentContentArr = this.DateArr[index].contentArr;
      CurrentContentArr.splice(indexC, 1);
      console.log(CurrentContentArr);
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    DateChoose(event, str) {
      console.log(event);
      console.log(str);

      this.time.value1 = event; // 显示为object

      let daysNum = this.getDaysLength(event[0], event[1]);
      console.log(daysNum);

      this.time.startT = "";
      this.time.endT = "";
      this.time.startT = this.split_picker(String(event)).start;
      this.time.endT = this.split_picker(String(event)).end;

      let daysArr = this.getDiffDate(this.time.startT, this.time.endT); // OK 好使的
      console.log(daysArr);
      this.InitDateArr(daysArr);
    },
    split_picker(str) {
      let time_arr = str.split(",");
      let t1 = time_arr[0];
      let t2 = time_arr[1];
      t1 = this.dayChange(t1);
      t2 = this.dayChange(t2);
      let year = t1.split("-")[0];
      return {
        start: t1,
        end: t2,
        year: year
      };
    },
    dayChange(str) {
      // 实际使用
      let string_event = str;
      let tempArr = string_event.split(" ");

      let year = tempArr[3];
      let month = this.monthManage(tempArr[1]);
      let day = tempArr[2];
      let m_time = String(year + "-" + month + "-" + day);
      return m_time;
    },
    monthManage(str) {
      let month;
      switch (str) {
        case "Jan":
          month = "01";
          break;
        case "Feb":
          month = "02";
          break;
        case "Mar":
          month = "03";
          break;
        case "Apr":
          month = "04";
          break;
        case "May":
          month = "05";
          break;
        case "Jun":
          month = "06";
          break;
        case "Jul":
          month = "07";
          break;
        case "Aug":
          month = "08";
          break;
        case "Sep":
          month = "09";
          break;
        case "Oct":
          month = "10";
          break;
        case "Nov":
          month = "11";
          break;
        case "Dec":
          month = "12";
          break;
        default:
          console.log("none!");
      }
      return month;
    },
    getDaysLength(dateString1, dateString2) {
      let startDate = Date.parse(dateString1);
      let endDate = Date.parse(dateString2);
      let days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
      return days + 1;
    },
    getDiffDate(start, end) {
      let startTime = this.getDate(start);
      let endTime = this.getDate(end);
      let dateArr = [];
      while (endTime.getTime() - startTime.getTime() > 0) {
        let year = startTime.getFullYear();
        let month =
          startTime.getMonth().toString().length === 1
            ? "0" + (parseInt(startTime.getMonth().toString(), 10) + 1)
            : startTime.getMonth() + 1;
        let day =
          startTime.getDate().toString().length === 1
            ? "0" + startTime.getDate()
            : startTime.getDate();
        dateArr.push(year + "-" + month + "-" + day);
        startTime.setDate(startTime.getDate() + 1);
      }
      dateArr.push(end); // 新增推入最后一天
      return dateArr;
    },
    getDate(datestr) {
      let temp = datestr.split("-");
      if (temp[1] === "01") {
        temp[0] = parseInt(temp[0], 10) - 1;
        temp[1] = "12";
      } else {
        temp[1] = parseInt(temp[1], 10) - 1;
      }
      //new Date()的月份入参实际都是当前值-1
      let date = new Date(temp[0], temp[1], temp[2]);
      return date;
    }
  }
};
</script>
<style scoped>
.MeetingSchedule {
}
.MeetingSchedule .perFont {
  font-size: 16px;
}
</style>

