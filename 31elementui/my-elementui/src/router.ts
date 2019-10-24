import Vue from 'vue'
import Router from 'vue-router'
import viewSelect from "./views/select/viewSelect.vue";
import DayComp from "./views/timebar/DayCardV1/DayComp.vue";
import DaysComp from "./views/timebar/DayCardV1/DaysComp.vue";
import DayComp2 from "./views/timebar/DayCardV2/DayComp.vue";
import DaysComp2 from "./views/timebar/DayCardV2/DaysComp.vue";
import oilDetail from "./views/oilModelDetial/oilModelDetial.vue";
import rightBarContent from "./views/content/rightInfoBar.vue";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/select',
            name: 'select',
            component: viewSelect
        },
        {
            path: '/day',
            name: 'day',
            component: DayComp
        },
        {
            path: '/days',
            name: 'days',
            component: DaysComp
        },
        {
            path: '/day2',
            name: 'day2',
            component: DayComp2
        },
        {
            path: '/days2',
            name: 'days2',
            component: DaysComp2
        },
        {
            path: '/oildetail',
            name: '溢油的基础信息div',
            component: oilDetail
        },
        {
            path: '/right',
            name: '右侧整合的div',
            component: rightBarContent
        }
    ]
})
