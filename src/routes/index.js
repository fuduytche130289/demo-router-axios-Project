import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'list-product',
            component:()=>import('@/page/HomePage')
        },
        {
            path:'/chi-tiet-san-pham',
            name:'detail-product',
            component:()=>import('@/page/ProductDetail')
        },
        {
            path:'*',
            component:()=>import('@/page/NotFound.vue')
        }

    ],
    mode: "history"
})