import Vue from 'vue'
import App from './App.vue'
//导入全局样式
import "./assets/base.scss"
//导入饿了么ui

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
//导入axios
import axios from 'axios'
//设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

// 设置axiaos拦截器
//请求拦截器 请求之前统一设置一些内容
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //统一设置token
  config.headers.Authorization=window.sessionStorage.getItem("token")
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  //统一进行弹窗
  if([200,204,201].indexOf(response.data.meta.status)!=-1){
    Vue.prototype.$message.success(response.data.meta.msg)
  } else{
    Vue.prototype.$message.warning(response.data.meta.msg)
  }
 
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.prototype.$axios = axios

Vue.config.productionTip = false
//导入路由
import router from './router.js'
new Vue({
  el:"#app",
  render: h => h(App),
  router
})
