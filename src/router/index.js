import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/login',
   name:'login',
   component:()=> import ('../views/login.vue')},

   {path:'/',
   name:'index2',
   component:()=> import ('../views/index2.vue')}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     console.log(from);
//     const isLogin=localStorage.ele_login ?true :false;
//     if(to.path=='/index2'){
//       next();
//     }
//     else {
//       isLogin? next() : next("/index2");
//     }
// });

export default router
