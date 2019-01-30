// 项目的JS入口文件
console.log('ok')

import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/mui-master/dist/css/mui.min.css'

Vue.use(MintUI)

var vm = new Vue({
	el: '#app',
	render: c => c(app)
})
