import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
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
  }
]

const router = new VueRouter({
  routes
})

export default router
