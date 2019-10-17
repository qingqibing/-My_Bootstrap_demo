import Vue from 'vue'
import Router from 'vue-router'
import viewSelect from "./views/select/viewSelect.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/select',
            name: 'select',
            component: viewSelect
        }
    ]
})
