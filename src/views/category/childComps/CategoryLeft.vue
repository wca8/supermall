<template>
  <scroll class="content">
    <div class="leftContent">
      <div
        v-for="(item,index) in titleList"
        class="leftItem"
        :key="index"
        :class="{active:index===currentIndex}"
        @click="leftItemClick(index,item.maitKey)"
      >
        {{item.title}}
      </div>

    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryLeft",
  components:{
    Scroll
  },
  data(){
    return{
      currentIndex:0,
    }
  },
  methods:{
    leftItemClick(index,maitKey){
      this.currentIndex=index
      this.$emit('getMaitKey',maitKey)
    }
  },
  props:{
    titleList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.leftItem{
  width: 100%;
  text-align: center;
  line-height: 38px;

}
.leftContent {
  width: 100%;
  text-align: center;
  background-color: rgb(243, 241, 241);
}
.active{
  color: var(--color-high-text);
  font-weight: 560;
  border-left: 4px solid hotpink;
  background-color: white;
}
.content{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>
