//创建一个路由器,并暴露出去
// 1.引入 createRouter
import {
  createRouter,
  createWebHashHistory,
  createMemoryHistory,
} from "vue-router";
import About from "../pages/About.vue";
import Homes from "../pages/Homes.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";
// 2.创建路由器
const router = createRouter({
  history: createWebHashHistory(), //路由器的工作模式
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Homes,
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      //子集不用加斜杠
      children: [
        {
          //pramas传参数需要在路由参数占位
          name: "xiang",
          path: "detail/:id/:title/:content?",
          component: Detail,
        },
      ],
    },
  ],
});

export default router;
