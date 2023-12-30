<template>
  <div class="app">
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink
        replace
        :to="{
          name: 'xinwen',
        }"
        active-class="active"
        >新闻</RouterLink
      >
      <RouterLink
        replace
        :to="{
          path: '/about',
        }"
        active-class="active"
        >关于</RouterLink
      >
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script name="App" setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
import Header from "./components/Header.vue";
</script>
<style>
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
.navigate a.active {
  background-color: #41bc83;
  color: yellow;
}
</style>
