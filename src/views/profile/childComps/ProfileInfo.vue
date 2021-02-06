<template>
  <div>
    <div class="content">
      <div class="item">
        <span>0.00元</span>
        <span>我的余额</span>
      </div>
      <div class="item">
        <span>0个</span>
        <span>我的优惠</span>
      </div>
      <div class="item">
        <span>0.00元</span>
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo"
}
</script>

<style scoped>
.content{
  display: flex;
  padding: 20px 0 20px 0;
  border-bottom: 10px solid rgb(243, 241, 241);
}
.item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
