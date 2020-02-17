<template>
  <div class="ConnectUs">
    <vue-headful title="联系我们"></vue-headful>
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
            <div>标题：{{item.title}}</div>
            <div>负责人：{{item.principal}}</div>
            <div>联系电话：{{item.phone}}</div>
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
  name: "ConnectUs",
  components: {},
  data() {
    return {
      BaseArr: [
        {
          id: 1,
          title: "title",
          principal: "principal",
          phone: "phone"
        },
        {
          id: 2,
          title: "title",
          principal: "principal",
          phone: "phone"
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
        title: "title",
        principal: "principal",
        phone: "phone"
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
.ConnectUs {
}
</style>

