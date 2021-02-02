import Toast from "@/components/common/toast/Toast";


const obj={}
obj.install=function (){
  document.body.appendChild(Toast.$el)
  Vue.prototype.$toast=Toast
}
export default obj
