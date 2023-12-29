<template>
  <div>这是一个首页</div>
</template>
<script setup lang="ts" name="Homes">
import { onUnmounted } from "vue";
console.log("home组件创建了");

onUnmounted(() => {
  console.log("home组件卸载了");
});
</script>
<style scoped></style>
