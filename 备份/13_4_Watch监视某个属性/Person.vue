<template>
  <div class="person">
    <h1>情况四: 监视`ref`或`reactive`定义的【对象类型】数据中的某个属性</h1>
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
// getter函数 ::能返回一个值的函数
watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log("person.name变化了", newVal, oldVal);
  }
);
watch(
  () => person.age,
  (newVal, oldVal) => {
    console.log("person.age变化了", newVal, oldVal);
  }
);
watch(
  () => person.car,
  (newVal, oldVal) => {
    console.log("person.age变化了", newVal, oldVal);
  }
); //这种函数式的属性监视,更能监视到对象类型数据的变化
// watch(person.car, (newVal, oldVal) => {
//   console.log("person.age变化了", newVal, oldVal);
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
