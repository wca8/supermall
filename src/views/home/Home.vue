<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">长安优购</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import {getHomeMultidata} from "@/network/home";


export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  //生命周期函数
  created() {
  //  1请求多个数据
    getHomeMultidata().then(res =>{
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
