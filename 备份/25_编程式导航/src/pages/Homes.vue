<template>
  <div>这是一个首页</div>
</template>
<script setup lang="ts" name="Homes">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
// useRouter和useRouters都是Hooks useRouter是用于获取路由信息从而去应用信息
// 而useRouter是获取一个route实例 权力更大可以去操控router
const router = useRouter();
onMounted(() => {
  setTimeout(() => {
    router.push("news");
  }, 3000);
});
</script>
<style scoped></style>
