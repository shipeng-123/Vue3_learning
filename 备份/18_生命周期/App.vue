<template>
  <Person v-if="isShow" />
</template>
<script name="App" setup lang="ts">
import Person from "./components/Person.vue";
import { ref, onMounted } from "vue";
let isShow = ref(true);
onMounted(() => {
  console.log("父挂载完毕");
});
</script>
<style></style>
