<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="ChangeName">修改名字</button>
    <button @click="ChangeAge">修改年龄</button>
    <button @click="showTell">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "13888888888",
    };
  },
  methods: {
    ChangeName() {
      this.name = "软参加";
    },
    ChangeAge() {
      this.age += 1;
    },
    showTell() {
      alert(this.tel);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
.person {
  background-color: #aff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
