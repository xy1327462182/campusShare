import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入初始化样式文件
import './assets/style/index.css'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
//引入element-ui组件
import './plugins'
//引入jQuery
import $ from 'jquery'
//引入bootstrap
import 'bootstrap'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
