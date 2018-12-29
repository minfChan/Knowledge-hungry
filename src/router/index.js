import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['../pages/Login.vue'], resolve)
  },
  {
    name: 'menu',
    path: '/menu',
    component: resolve => require(['../pages/Menu.vue'], resolve)
  },

	//默认首页
	{ path: '*', redirect: '/login' }
];

const router = new Router({
	routes: routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched) {
// 		if (localStorage.getItem('username')) {
// 			next();
// 		} else {
//       next('www.baidu.com');
// 		}
// 	} else {
// 		next();
// 	}
// })

export default router;