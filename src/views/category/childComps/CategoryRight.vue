<template>
  <scroll
    ref="scroll"
    class="content">
    <div class="content-item">
      <div
        class="item"
        v-for="item in subcategoryList">
        <a  :href="item.link">
          <img :src="item.image" @load="imageLoad" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>

  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryRight",
  components:{
    Scroll
  },
  data(){
    return{
      isNumber:0,
    }
  },
  props:{
    subcategoryList:{
      type:Array,
      defaull() {
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(++this.isNumber==this.subcategoryList.length){
        this.$refs.scroll.refresh()
      }
    }
  }

}
</script>

<style scoped>
.content{
  height: calc(100vh - 93px);
  overflow: hidden;
}
.item{
  width: 48%;
  text-align: center;
  margin-bottom: 10px;
}
img{
  width: 70%;
}
.content-item{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
