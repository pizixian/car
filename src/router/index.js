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
    component:() => import('../components/mine/mine_wallet/mine_wallet.vue')
  },
  {
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
  }
]

const router = new VueRouter({ 
  routes
})

export default router
