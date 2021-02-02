<template>
  <div :class="{active:isChecked}" class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="">

  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{

  border-radius: 50%;
  border: 2px solid #eb4868;
}
.active{

  background-color: red;
}
.check-button img{
  width: 20px;
}
</style>
