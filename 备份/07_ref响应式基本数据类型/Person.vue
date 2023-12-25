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

<script setup lang="ts" name="Arc">
import { ref } from "vue";

let name = ref("张三");
let age = ref(18);
let tel = "138888";
let address = "北京6766";
console.log(name, age);
function ChangeAge() {
  age.value += 1;
}
function ChangeName() {
  name.value = "软参加";
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
