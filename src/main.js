import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false
//设置事件总线
Vue.prototype.$bus=new Vue()

//安装toast
Vue.use(toast)

//解决移动端延迟
FastClick.attach(document.body)

//使用懒加载的插件(需要将使用懒加载的图片路径改为src->v-lazy)
Vue.use(VueLazyload);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
