import Vue from 'vue'
import Vuerouter from 'vue-router'

Vue.user(Vuerouter)

//导入组件
import login from "./components/login.vue";
import index from "./components/index.vue";

//路由规则
let routes = [
    {
    path:"/login",
    component: login,
}, {
    path:"/index",
    component: index,
},
]

//实例化路由对象

let router = new Vuerouter({
    routes
})
//暴露
export default router