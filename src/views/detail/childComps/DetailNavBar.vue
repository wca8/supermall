<template>
  <div>
    <nav-bar>
      <div @click="backClick" class="back" slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>

      <div class="title" slot="center">
        <div
          @click="titlesItemClick(index)"
          class="title-item"
          v-for="(item,index) in titles"
          :class="{isActive:index===currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar,
  },
  data(){
    return{
      titles: ["商品","参数","评论","推荐"],
      currentIndex:0,
    }
  },
  methods:{
    titlesItemClick(index){
      this.currentIndex=index
    },
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;

}
.title-item{
  flex: 1;
}
.isActive{
  color: var(--color-high-text);
}
.back img{
  margin-top: 12px;
}
</style>
