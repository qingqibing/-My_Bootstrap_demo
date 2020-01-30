import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
// 引入bt
import jquery from 'jquery'
// 注意使用bt还需要同时引入：jquery与popper.js
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// 引入echarts
import 'echarts'

// 注意引入本地的router文件
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
