<template>
  <div class="login-content">
    <div class="Avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="login">
      <div class="login-text">登录/注册</div>
      <div class="login-phone">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="other">></div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin"
}
</script>

<style scoped>
.login-content{
  display: flex;
  background-color: var(--color-tint);
  color: #fff;
  padding: 15px 0 5px 0;
}
.login{
  flex: 1;
}
.other{
  width: 50px;
  display: flex;
  align-items: center;
}
.Avatar{
  width: 100px;
  text-align: center;
}
.Avatar img{
  width: 60%;
}
.login-text{
  padding-left: 8px;
}
.login-phone img{
  width: 15%;
}
.login-phone{
  display: flex;
  align-items: center;

}
</style>
