// 项目的JS入口文件
console.log('ok')

import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入路由组件
import router from './router.js'

//导入组件
import app from './App.vue'

//导入mintUI以及MUI相关组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui-master/dist/css/mui.min.css'
import './lib/mui-master/dist/css/icons-extra.css'

Vue.use(MintUI)

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
