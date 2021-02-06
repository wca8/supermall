<template>
  <div class="content">
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/message.svg" alt="" />
      </div>
      <div class="message">我的消息</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/pointer.svg" alt="" />
      </div>
      <div class="message">积分商城</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/vip.svg" alt="" />
      </div>
      <div class="message">会员卡</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/cart.svg" alt="" />
      </div>
      <div class="message">我的购物车</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/shopping.svg" alt="" />
      </div>
      <div class="message">下载长安优购APP</div>
    </div>
    <div class="item">
      <div class="image">
        <img src="~assets/img/profile/message.svg" alt="" />
      </div>
      <div class="message">下载长安博客APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOther"
}
</script>

<style scoped>
.item{
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgb(243, 241, 241);
  padding: 3px 0 3px 0;
}
.image{
  width: 12%;
  text-align: center;
}
.image img{
  width: 75%;
}
</style>
