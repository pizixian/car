import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ressetcss from './assets/css/common.css' 
Vue.config.productionTip = false

//引入框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  store,
<<<<<<< HEAD
  mounted(){ 
      //rem的响应式
=======
  mounted(){
    //rem的响应式
>>>>>>> 13e6ebab971c55af7817a21f7729f58e4d2274ca
    var uiW = 750,
    winW = document.documentElement.clientWidth,
    // 定义比例
    rate = winW / uiW;
    document.documentElement.style.fontSize = rate * 100 + "px";
    document.body.style.fontSize = "0.12rem"  
   
  },
  render: h => h(App),
}).$mount('#app')
