import { createApp } from "vue";
import App from "./App.vue";
//引入App根组件
// createApp(App).mount("#app");
//引入路由器
import router from "./router";
//创建一个应用
const app = createApp(App);

//先使用Router
app.use(router);
//再挂载
app.mount("#app");
