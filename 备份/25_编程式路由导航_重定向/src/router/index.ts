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
          path: "detail",
          component: Detail,
          //proprs 作用就相当于 在<Detail id="" content="">加上属性 然后再模板能直接用插值语法 {{id}} {{content}}
          //第一种的写法将所有的params参数作为props传给路由组件 但只能配合params参数用
          // props: true,
          // props的函数写法，参数是路由 可以直接返回 router里的对象 query或者 params 然后再Dom中直接使用 id 等属性的值
          //作用：把返回的对象中每一组key-value作为props传给Detail组件
          props(router) {
            console.log(router);
            return router.query;
          },
          // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
          // (并不常用)props:{a:1,b:2,c:3},
        },
      ],
    },
    {
      path: "/",
      redirect: Homes,
    },
  ],
});

export default router;
