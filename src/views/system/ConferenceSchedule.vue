<template>
  <div class="ConferenceSchedule">
    <vue-headful title="会务日程"></vue-headful>
    <div class="LI_content">
      <div v-if="BaseArr.length == 0">
        <div>
          <i @click="AddDateData(0,'firstAdd')" class="el-icon-circle-plus"></i>
        </div>
      </div>
      <div v-if="BaseArr.length != 0">
        <template v-for="(item,index) in BaseArr ">
          <div :key="index + 'ba' ">
            <div>id：{{item.id}}</div>
            <div>选择日期：{{item.date}}</div>
            <div>选择时间：{{item.time1}}</div>
            <div>- 选择时间：{{item.time2}}</div>
            <div>主题：{{item.theme}}</div>
            <div>内容：{{item.content}}</div>
            <div>
              <i @click="AddDateData(index)" class="el-icon-circle-plus"></i>
              <i @click="SubtractDateData(index)" class="el-icon-remove"></i>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConferenceSchedule",
  components: {},
  data() {
    return {
      BaseArr: [
        {
          id: 1,
          date: "date",
          time1: "time1",
          time2: "time2",
          theme: "theme",
          content: "content"
        },
        {
          id: 2,
          date: "date",
          time1: "time1",
          time2: "time2",
          theme: "theme",
          content: "content"
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
        date: "date",
        time1: "time1",
        time2: "time2",
        theme: "theme",
        content: "content"
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
<style scoped>
.ConferenceSchedule {
}
</style>

