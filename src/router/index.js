import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../views/Home.vue')
    
  },
  {
    path: '/Home',
    name: 'Home',
    component:() => import('../views/Home.vue'),
    children:[{
      path:'Inland',
      component:() => import('../components/homeComp/inland.vue')
    },{
      path:'Foreign',
      component:() => import('../components/homeComp/foreign.vue')
    }]
  },
  {
    path: '/Order',
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
