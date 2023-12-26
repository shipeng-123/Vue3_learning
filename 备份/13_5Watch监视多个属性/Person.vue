<template>
  <div class="person">
    <h1>情况五: 监视上述的多个数据</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>汽车: {{ person.car.c1 }},{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changec1">修改第一台车</button>
    <button @click="changec2">修改第Er台车</button>
    <button @click="changeCar">修改车</button>
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
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changec1() {
  person.car.c1 = "奥迪";
}
function changec2() {
  person.car.c2 = "大众";
}
function changeCar() {
  person.car = { c1: "雅迪", c2: "艾玛" };
}
// 监视多个属性
watch([() => person.name, () => person.car.c1], (nwValue, odValue) => {
  console.log("name或c1变化了", nwValue, odValue);
});

// });
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
