// 项目的JS入口文件


import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入路由组件
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入组件
import app from './App.vue'

//导入mintUI以及MUI相关组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import mui from './lib/mui-master/dist/js/mui.min.js'
import './lib/mui-master/dist/css/mui.min.css'
import './lib/mui-master/dist/css/icons-extra.css'

Vue.prototype.mui = mui 

Vue.use(MintUI)

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})


console.log(vm)
