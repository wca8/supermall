import {debounce} from "@/common/utils";

export const itemListenerMixin={
  data(){
    return{
      itemImgListener:null,
    }
  },
  mounted(){
    // let newRefresh= debounce(this.$refs.scroll.refresh,100)
    // this.itemImgListener=()=>{
    //   newRefresh()
    // }
    // this.$bus.$on('itemImgLoad',this.itemImgListener)

    this.$bus.$on('itemImgLoad',()=>{
      this.$refs.scroll.refresh()
    })
    // console.log("我是混入");
  }
}







// export const itemListenerMixin = {
//   data() {
//     return {
//       itemImageLoad: null
//     }
//   },
//   mounted() {
//     this.itemImageLoad = debounce(this.$refs.scroll.refresh, 100);
//     // 利用事件总线来监听 itemImageLoad  需要在mounted钩子函数中才能拿到值
//     this.$bus.$on("itemImgLoad", () => {
//       // 图片加载完成后执行一次 refresh
//       console.log("执行了混入中refresh")
//       this.itemImageLoad();
//     });
//   },
// }
