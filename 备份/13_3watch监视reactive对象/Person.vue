<template>
  <div class="person">
    <h1>情况三: 监视[reactive]对象</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr />
    <h1>{{ obj.a.b.c }}</h1>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { reactive, watch } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
//默认开启深度监视
function changePerson() {
  Object.assign(person, { name: "里斯", age: 17 });
} //修改reactive相对于ref 是在原来的对象修改的所以newValue=oldValue
//监视的是地址 如果地址没有变化则newValue=oldValue
watch(person, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
function test() {
  obj.a.b.c = 19;
}
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
