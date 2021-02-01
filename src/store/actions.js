export default  {
  addCart(context,payload){
    //查找之前数组中是否有该方法
    let oldproduct=context.state.cartList.find((item) =>{
      return  item.iid===payload.iid

    })
    console.log(oldproduct);
    if(oldproduct){
      console.log(1);
      context.commit('addCounter',oldproduct)
    }else{
      console.log(2);
      payload.count=1
      context.commit('addToCart',payload)

    }

  },


}
