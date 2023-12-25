<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">name</button>
    <button @click="changeAge">age</button>
  </div>
</template>
<script setup lang="ts" name="Arc">
import { ref, reactive, toRefs, toRef } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
});
//解构读取reactive对象
//通过toRefs()把对象所有的属性变为响应式赋值给需要解构的对象
let { name, age } = toRefs(person);
//相当于 所以这样解构赋值不存在响应式
// let name =person.name;
// let age =person.age;
function changeName() {
  name.value += "~";
}
function changeAge() {
  age.value += 1;
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
</style>
