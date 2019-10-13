import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index/Index'
import Login from 'views/login/Login'
import Notfound from 'views/404/404'
import Home from 'views/index/childComps/home/Home'
import Product from 'views/index/childComps/product/Product'
import Register from 'views/login/Register'
import Main from 'content/layout/main/Main'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          redirect:'/index'
      },
      {
          path:'/index',
          name: 'index',
          component: Index,
          children:[
              {
                  path:'/',component:Main,
                  children:[
                      { path:'/',component:Home},
                      {path:'product',name:'product',component:Product}]
              },
          ]
      },
      {
          path: '/register',
          name: 'register',
          component: Register
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '*',
          name: '/404',
          component: Notfound
      },
  ]
})
router.beforeEach((to,from,next)=>{
    //const isLogin = localStorage.Token ? true : false
    const isLogin = true ? true : false
    if(to.path=='/login' || to.path=='/register'){
        next();
    }else{
        isLogin ? next() : next('/login')
    }
})
export default router;


