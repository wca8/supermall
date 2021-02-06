<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="center">长安优购-我的</div>
    </nav-bar>
    <profile-login></profile-login>
    <profile-info></profile-info>
    <profile-other></profile-other>
    <profile-bottom></profile-bottom>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ProfileLogin from "@/views/profile/childComps/ProfileLogin";
import ProfileInfo from "@/views/profile/childComps/ProfileInfo";
import ProfileOther from "@/views/profile/childComps/ProfileOther";
import ProfileBottom from "@/views/profile/childComps/ProfileBottom";
  export default {
    name: "Profile",
    components:{
      NavBar,
      ProfileLogin,
      ProfileInfo,
      ProfileOther,
      ProfileBottom,
    }
  }
</script>

<style scoped>

.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
</style>
