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
            path:'/gio-hang',
            name:'card-detail',
            component:()=>import('@/page/CardDetail')
        },
        {
            path:'*',
            component:()=>import('@/page/NotFound.vue')
        }

    ],
    mode: "history"
})