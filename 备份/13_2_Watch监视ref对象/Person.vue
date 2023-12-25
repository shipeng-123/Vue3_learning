<template>
  <div class="person">
    <h1>情况二: 监视[ref]对象</h1>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, watch } from "vue";
let person = ref({
  name: "张三",
  age: 18,
});
function changeName() {
  person.value.name += "~";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = { name: "list", age: 19 };
}
watch(
  person,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  { deep: true, immediate: true }
);
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
