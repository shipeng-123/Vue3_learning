<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="ChangeName">修改名字</button>
    <button @click="ChangeAge">修改年龄</button>
    <button @click="showTell">查看联系方式</button>
    <hr />
  </div>
</template>
<!-- <script lang="ts">
export default {
  name: "Person", //组件名
  setup() {
    let name = "张三";
    return { name };
  },
};
</script> -->
<script setup lang="ts" name="Arc">
{
  /* Vue3的语法糖不仅简化了setup(){}写法 省去setup返回值 还直接把文件名直接当组件名 
   还可以通过命令npm i vite-plugin-vue-setup-extend -D去简化组件名写法
  */
}
import { ref } from "vue";
let name = "张三";
let age = 18;
let tel = "138888";
let address = "北京6766";
function ChangeAge() {
  name += 1;
}
function ChangeName() {
  name = "软参加";
}
function showTell() {
  alert(tel);
}
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
