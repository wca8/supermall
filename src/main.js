import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
Vue.config.productionTip = false
//设置事件总线
Vue.prototype.$bus=new Vue()

//安装toast
Vue.use(toast)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
