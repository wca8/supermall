export default  {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //查找之前数组中是否有该方法
      let oldproduct=context.state.cartList.find((item) =>{
        return  item.iid===payload.iid

      })
      console.log(oldproduct);
      if(oldproduct){

        context.commit('addCounter',oldproduct)
        resolve("添加成功,当前商品数量+1")
      }else{

        payload.count=1
        context.commit('addToCart',payload)
        resolve("添加成功，在购物车等亲~")


      }
    })

  },


}
