import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component:() => import('../views/Home.vue')
  // },
  {
    path: '/orderdetail',
    name: 'orderdetail',
    component:() => import('../components/order/order_details/details.vue')
  },
  {
    path: '/choosetime',
    name: 'choosetime',
    component:() => import('../components/choose_time/choose_time.vue')
  },
  {

    path: '/wallet',
    name: 'wallet',

    component:() => import('../components/mine/mine_wallet/mine_wallet.vue'),

    component:() => import('../components/mine/mine_wallet/mine_wallet.vue')
  },
  {
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4425c98ac8d432440c828de0e22a175fa26a6ac1
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
<<<<<<< HEAD

=======
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
>>>>>>> 4425c98ac8d432440c828de0e22a175fa26a6ac1
  }
]

const router = new VueRouter({ 
  routes
})

export default router
