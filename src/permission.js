// // 权限拦截 导航守卫 路由守卫  router
// import router from '@/router' // 引入路由实例
// import store from '@/store' // 引入vuex store实例
// import NProgress from 'nprogress' // 引入一份进度条插件
// import 'nprogress/nprogress.css' // 引入进度条样式

// const whiteList = ['/login', '/404'] // 定义白名单  所有不受权限控制的页面
// // 路由的前置守卫
// router.beforeEach(function(to, from, next) {
//   NProgress.start() // 开启进度条
//   //  首先判断有无token
//   if (store.getters.token) {
//     //   如果有token 继续判断是不是去登录页
//     if (to.path === '/login') {
//       //  表示去的是登录页
//       next('/') // 跳到主页
//     } else {
//       next() // 直接放行
//     }
//   } else {
//     // 如果没有token
//     if (whiteList.indexOf(to.path) > -1) {
//       // 如果找到了 表示在在名单里面
//       next()
//     } else {
//       next('/login') // 跳到登录页
//     }
//   }
//   NProgress.done() // 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
// })
// // 后置守卫
// router.afterEach(function() {
//   NProgress.done() // 关闭进度条
// })

// // 导入router

// // import router from '@/router'
// // import store from './store'

// // router.beforeEach((to, from, next) => {
// //   const token = store.getters.token
// //   if (token) {
// //     if (to.path === '/login') {
// //       next({
// //         path: '/'
// //       })
// //     } else {
// //       next()
// //     }
// //   } else {
// //     // 无token
// //     if (whiteList.includes(to.path)) {
// //       next()
// //     } else {
// //       next({
// //         path: '/login'
// //       })
// //     }
// //   }
// // })
