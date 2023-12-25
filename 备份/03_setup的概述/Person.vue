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
  setup() {
    //setup没有维护this已经开始弱化this了
    let name = "张三";
    let age = 18;
    let tel = "13888888888";
    function ChangeName() {
      console.log(1);
      name = "zhangsan";
      console.log(name); //name确实改了但name不是响应式的
    }
    function ChangeAge() {
      console.log(2);
      age += 1;
      console.log(age);
    }
    function showTell() {
      alert(tel);
    }
    return { name, age, tel, ChangeName, ChangeAge, showTell };
  },
  // data() {
  //   return {
  //     name: "张三",
  //     age: 18,
  //     tel: "13888888888",
  //   };
  // },
  // methods: {
  //   ChangeName() {
  //     this.name = "软参加";
  //   },
  //   ChangeAge() {
  //     this.age += 1;
  //   },
  //   showTell() {
  //     alert(this.tel);
  //   },
  // },
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
