<template>
  <!-- <h1 ref="title2">Nihao</h1>
  <button @click="showLog">点我获取Nihao</button> -->
  <Person ref="ren" />
</template>
<script name="App" setup lang="ts">
// import Person from "./components/Person.vue";
import { ref } from "vue";
let title2 = ref();
let ren = ref();
function showLog() {
  console.log(ren.value);
}
</script>
<style></style>
