<template>
  <div class="Sponsor">
    <vue-headful title="赞助商"></vue-headful>
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
            <div>头图：{{item.url}}</div>
            <div>姓名：{{item.name}}</div>
            <div>网址：{{item.web}}</div>
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
  name: "Sponsor",
  components: {},
  data() {
    return {
      BaseArr: [
        {
          id: 1,
          url: "url",
          name: "name",
          web: "web",
          content: "content"
        },
        {
          id: 2,
          url: "url",
          name: "name",
          web: "web",
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
        url: "url",
        name: "name",
        web: "web",
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
.Sponsor {
}
</style>

