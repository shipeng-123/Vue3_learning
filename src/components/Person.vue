<template>
  <div class="person">
    <h1>情况三: 监视[reactive]对象</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>汽车: {{ person.car.c1 }},{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changec1">修改第一台车</button>
    <button @click="changec2">修改第Er台车</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { reactive, watch } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});
function changeName() {}
function changeAge() {}
function changec1() {}
function changec2() {}
</script>
<style scoped>
.person {
  background-color: #aff;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin-right: 10px;
}
input {
  margin-bottom: 10px;
}
</style>
