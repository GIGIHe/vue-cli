import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress"
import 'nprogress/nprogress.css'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
Vue.use(Router)

const router=new Router({
  // 可以去掉地址栏中#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      meta:{
        title:'home'
      },
      component: homePage
    },
    {
      path:'/about/:id',
      name: 'aboutPage',
       meta: {
         title: 'about'
       },
      component: () =>
        import ('../components/about') 
    },
     {
       path: '/login',
       name: 'login',
        meta: {
          title: 'login'
        },
       component: () =>
         import ('../components/login')
     },
    {
      path: '/fruit',
      name: 'fruit',
      meta: {
        title: 'fruit'
      },
      component: () =>
        import('../components/fruit')
    },
     {
       path: '/layout',
       name: 'layout',
       meta: {
         title: 'layout'
       },
       component: () =>
         import ('../components/layout'),
         redirect:'/layout',
         children:[
           {
             path: '',
             name: 'homePage1',
             meta: {
               title: 'home'
             },
             component: homePage
           },
           {
             path: 'about/:id',
             name: 'aboutPage1',
             meta: {
               title: 'about'
             },
             component: () =>
               import('../components/about')
           },
           {
             path: 'login',
             name: 'login1',
             meta: {
               title: 'login'
             },
             component: () =>
               import('../components/login')
           }
         ]
     }
  ],

  
})
// 注册一个全局前置守卫,改变了一个document.write
router.beforeEach((to,from,next)=>{
    NProgress.start()
  if(to.meta && to.meta.title){
      document.title = to.meta.title
  }
// console.log('to',to);
// console.log('from',from)
next()
})
router.afterEach((to,from)=>{
  // console.log('after-to',to)
  // console.log('after-from',from)

  NProgress.done()
})

export default router