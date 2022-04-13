import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('@/page/HomePage')
        },
        {
            path:'/chi-tiet-bai-viet',
            name:'article-detail',
            component:()=>import('@/page/ArticleDetail')
        },
        {
            path:'*',
            component:()=>import('@/page/NotFound.vue')
        }

    ],
    mode: "history"
})