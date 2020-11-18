import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ressetcss from './assets/css/common.css' 
Vue.config.productionTip = false

import 'vant/lib/index.css';

//引入框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  store,
  mounted(){ 
      //rem的响应式
    var uiW = 750,
    winW = document.documentElement.clientWidth,
    // 定义比例
    rate = winW / uiW;
    document.documentElement.style.fontSize = rate * 100 + "px";
    document.body.style.fontSize = "0.12rem"  
   
  },
  render: h => h(App),
}).$mount('#app')
