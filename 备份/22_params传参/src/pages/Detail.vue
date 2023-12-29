<template>
  <ul>
    <li>编号:{{ params.id }}</li>
    <li>标题:{{ params.title }}</li>
    <li>内容:{{ params.content }}</li>
  </ul>
</template>
<script script setup lang="ts">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
console.log(route);
let { params } = toRefs(route);
console.log(params);
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
