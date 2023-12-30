<template>
  <div class="count">
    <h2>当前计数为:{{ countStore.sum }}</h2>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from "../store/count";
let n = ref(1);
const countStore = useCountStore();
// 如果一个reactive对象一个属性的值是ref 不需要 reactive.x.value 直接 .x即可
function add() {
  countStore.sum += n.value;
}
function minus() {
  countStore.sum -= n.value;
}
</script>
<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select {
  margin-right: 10px;
}
button {
  margin-right: 10px;
}
</style>
