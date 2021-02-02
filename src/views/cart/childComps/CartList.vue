<template>
  <div>
    <scroll ref="scroll" class="scroll">
      <cart-list-item
        v-for="(item,index) in cartList"
        :item-info="item"
        :key="index"
      ></cart-list-item>
    </scroll>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
import {mapActions} from 'vuex'
export default {
name: "CartList",
components:{
  Scroll,
  CartListItem,
  CartBottomBar,
  },
computed:{
  ...mapGetters(['cartList'])
},
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.scroll{
  height: calc(100vh - 44px - 80px);
  overflow: hidden;
}
</style>
