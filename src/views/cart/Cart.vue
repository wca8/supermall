<template>
 <div>
    <nav-bar class="nav-bar">
      <div slot="center">长安优购-购物车({{length}})</div>
    </nav-bar>
   <cart-list></cart-list>
   <cart-bottom-bar ></cart-bottom-bar>
 </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import {mapGetters} from 'vuex'
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar

    },
    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }


      // cartLength(){
      //   return this.$store.getters.cartLength
      // }



      // ...mapGetters(['cartLength'])


      ...mapGetters({
       length:'cartLength'
      })
    }
  }
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: white;
  z-index: 999;
}
</style>
