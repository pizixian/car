import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
<<<<<<< HEAD
    path: '/Home',
    name: 'Home',
    component:() => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'Order',
    component:() => import('../components/order/my_order.vue')
  },
  {
    path: '/orderDetail', 
    component:() => import('../components/order/order_detail.vue')
  },
  {
    path: '/Discuss', 
    component:() => import('../components/order/discuss.vue')
=======
    path: '/',
    name: 'Pay',
    component: () => import('../component/mine/set/setHome.vue'),
  },
  {
    path: '/setPass',
    name: 'setPass',
    component: () => import('../component/mine/set/setPass.vue')
  },
  {
    path: '/forgetPass',
    name: 'forgetPass',
    component: () => import('../component/mine/set/forgetPass.vue')
>>>>>>> 13e6ebab971c55af7817a21f7729f58e4d2274ca
  }
]

const router = new VueRouter({ 
  routes
})

export default router
