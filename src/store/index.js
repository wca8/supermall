import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  //同步函数
  mutations,
  //异步函数
  actions,
  modules: {
  }
})
