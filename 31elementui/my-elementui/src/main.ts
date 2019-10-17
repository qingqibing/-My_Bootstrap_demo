import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import "element-ui/lib/theme-chalk/index.css";

// 注意引入本地的router文件
import router from "./router"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
