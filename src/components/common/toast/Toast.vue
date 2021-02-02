<template>
  <div v-show="show" class="toast">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{
    message:{
      type:String,
      default:''
    },
    show:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgb(0,0,0,0.6);
  color: white;
  z-index: 999;
  padding: 15px;
  border-radius: 10px;
  white-space: nowrap;
}
</style>
