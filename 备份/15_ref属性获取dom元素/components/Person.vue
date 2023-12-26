<template>
  <div class="person">
    <h2>中国</h2>
    <h2 ref="title2">北京</h2>
    <h2>山龟GU</h2>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let title2 = ref();
let a = ref(1);
let b = ref(2);
let c = ref(3);
function showLog() {
  console.log(title2);
}
//
defineExpose({
  a,
  b,
  c,
});
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
