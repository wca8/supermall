<template>
 <div class="recommend">
   <div v-for="item in recommends">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  padding: 12px 0 12px 0;
  border-bottom: 10px solid #F2F2F2;
}
.recommend>div{
  flex: 1;

}
.recommend>div a{
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
}
.recommend>div img{
  width: 75%;
}
</style>
