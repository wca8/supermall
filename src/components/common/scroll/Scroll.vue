<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
    return{
      scroll:null,

    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    },
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      click: true,
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

  //  监听上拉属性
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })


  },
  methods:{
    scrollTo(x,y,time){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  components:{

  }
}
</script>

<style scoped>

</style>
