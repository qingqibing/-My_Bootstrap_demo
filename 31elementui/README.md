本项目中使用了[elementui](https://element.eleme.cn/#/zh-CN/component/installation)

大体步骤：
1- npm 安装

2- 在 vue 中引入
在`main.js`中引入

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

引入 bootstrap

> 注意引入 bt 的时候需要先引入 jquery
> 还需要引入 popper(注意是 popper.js 而不是 popper)
> `npm install popper.js`

1. 安装

```js
npm install bootstrap
```

2. 在 main.js 入口文件中

```js
// 引入bt
import jquery from "jquery";
// 注意使用bt还需要同时引入：jquery与popper.js
// 引入bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
```
