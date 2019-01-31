import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import cart from './components/tabbar/CartContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'

var router = new VueRouter({
	routes: [
		{ path: "/" , redirect: '/home'},
		{ path: "/home" , component: home},
		{ path: "/cart" , component: cart},
		{ path: "/member" , component: member},
		{ path: "/search" , component: search},

	],
	linkActiveClass: 'mui-active'
})

export default router