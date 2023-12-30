<template>
  <div>这是一个首页</div>
  <h3>3s后将跳转到新闻页面</h3>
</template>
<script setup lang="ts" name="Homes">
import { onMounted, onUnmounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
// useRouter和useRouters都是Hooks useRouter是用于获取路由信息从而去应用信息
// 而useRouter是获取一个route实例 权力更大可以去操控router
const router = useRouter();
let timerId: number;
onMounted(() => {
  timerId = setTimeout(() => {
    router.push("news");
  }, 3000);
});
onUnmounted(() => {
  clearTimeout(timerId);
});
</script>
<style scoped></style>
