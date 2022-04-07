import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('../page/HomePage')
        },
        {
            path:'/lien-he',
            name:'contact',
            component:()=>import('../page/ContactPage')
        },
        {
            path:'/dang-nhap',
            name:'login',
            component:()=>import('../page/LoginPage')
        },
        {
            path:'/danh-sach-sp',
            name:'list-product',
            component:()=>import('@/page/ListProduct.vue')
        },
        {
            path:'/chi-tiet-san-pham/:id/:name',
            name:'detail-product',
            component:()=>import('@/page/ProductDetail.vue')
        },
        {
            path:'*',
            component:()=>import('@/page/NotFound.vue')
        }

    ],
    mode: "history"
})