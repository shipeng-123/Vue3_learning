<template>
  <div class="box">
    <div class="box-right-nav">
      <ul class="box-right-nav-ul">
        <li v-for="news in NewList" :keys="news.id">
          <!-- 第一种写法 -->
          <RouterLink
            :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"
            >{{ news.title }}</RouterLink
          >
          <!-- <RouterLink
            :to="{
              name: 'xiang',
              query: {
                id: news.id,
                title: news.title,
                content: news.content,
              },
            }"
            >{{ news.title }}</RouterLink
          > -->
        </li>
      </ul>
    </div>
    <div class="news_content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup name="News">
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";
const NewList = reactive([
  {
    id: "uahfhfua",
    title: "十种抗癌食物",
    content: "西兰花",
  },
  {
    id: "uahfhfua1",
    title: "如何一夜暴富",
    content: "西兰花",
  },
  {
    id: "uahfhfua3",
    title: "震惊!!!!",
    content: "Vue3",
  },
  {
    id: "uahfhfua4",
    title: "React666",
    content: "好消息",
  },
]);
</script>
<style scoped>
.box-right-nav {
  width: 120px;
}
.box-right-nav-ul {
  margin-left: 10px;
  list-style: none;
  padding-left: 0px;
  margin-top: 15px;
}
.box-right-nav-ul li {
  margin-top: 5px;
  background-color: rgb(65, 188, 131);
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
}
.box-right-nav-ul li a {
  text-decoration: none;
  color: #ffff2e;
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.news_content {
  position: absolute;
  width: 600px;
  height: 380px;
  float: right;
  top: -9px;
  right: 0px;
}
</style>
