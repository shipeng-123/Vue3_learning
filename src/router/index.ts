//创建一个路由器,并暴露出去
// 1.引入 createRouter
import { createRouter, createWebHashHistory } from "vue-router";
import About from "../pages/About.vue";
import Homes from "../pages/Homes.vue";
import News from "../pages/News.vue";

// 2.创建路由器
const router = createRouter({
  history: createWebHashHistory(), //路由器的工作模式
  routes: [
    {
      path: "/home",
      component: Homes,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/news",
      component: News,
    },
  ],
});

export default router;
