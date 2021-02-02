<template>
  <div class="bottom-bar">
      <div class="check-content">
        <check-button
          :is-checked="isSelectAll"
          @click.native="checkClick"
          class="check-button"></check-button>
        <span>全选</span>
      </div>
    <div class="total-price">
      <span>合计:{{totalPrice}}</span>
    </div>

    <div class="calculate">
      <span>去计算{{checkLength}}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components:{
    CheckButton,
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item=>{
          return item.checked=false
        })
      }else{
        this.$store.state.cartList.forEach(item=>{
          return item.checked=true
        })
      }
    }
  },
  computed:{
    totalPrice(){
      return '￥'+this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((pre,item)=>{
        return pre+item.price*item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length===0){
        return false
      }else{
        return !this.$store.state.cartList.filter(item=>{
          return !item.checked
        }).length
      }

    }

  }
}
</script>

<style scoped>

.bottom-bar{
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 49px;
  height: 40px;
  background-color: #e9e9e9;

}
.check-content{
  padding-left: 20px;
  display: flex;
  height: 40px;
  align-items: center;
}
.check-button{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.total-price{
  line-height: 40px;
  margin-left: 20px;
}
.calculate{
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: orangered;
  color: white;
  position: absolute;
  right: 0;
  text-align: center;
}
</style>
