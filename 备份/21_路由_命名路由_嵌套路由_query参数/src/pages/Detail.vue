<template>
  <ul>
    <li>编号: {{ query.id }}</li>
    <li>标题: {{ query.title }}</li>
    <li>内容: {{ query.content }}</li>
  </ul>
</template>
<script script setup lang="ts">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
//凡是use***都是一个hook 返回的是一个对象 可以解构接收
let route = useRoute();
console.log(route);
let { query } = toRefs(route);
</script>
<style scoped>
ul {
  list-style: none;
  border: 2px solid black;
  float: right;
  margin-right: 10px;
  width: 600px;
  padding: 0;
  height: 380px;
  margin-top: 0px;
  margin-right: 0px;
}
</style>
