<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">长安优购</div>
    </nav-bar>
    <tab-control ref="tabControl2"  :titles='["流行","新款","精选"]'
                 @tabClick="tabClick"
                 v-show="isTabFixed"
                 class="tab-control"
    ></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <home-swiper @swiperImageLoad="swiperImageLoad" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabControl"
        :titles='["流行","新款","精选"]'
         @tabClick="tabClick"

      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
//本组件导入
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

//公共导入
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";
import {itemListenerMixin} from "@/common/mixin";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins:[itemListenerMixin],
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{
          page:0, list:[]
        },
        'new':{
          page:0, list:[]
        },
        'sell':{
          page:0, list:[]
        }
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0,

    }
  },
  //生命周期函数
  created() {
  //  1请求多个数据
     this.getHomeMultidata()
  //请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')


  },
  //创建后
  mounted() {
    //用到了事件总线
    //监听item图片加载完成


  },
  //活跃时
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  //离开时
  deactivated() {
    this.saveY=this.$refs.scroll.getScrollY()

  //  取消全局事件的监听
    this.$bus.$off('itemImgLoad',this.itemImgListener)


  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{

    //事件监听相关
    debounce(func,delay){
      let timer=null
      return function (...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },

    tabClick(index){
      switch(index){
      case 0:
        this.currentType='pop'
        break;
      case 1:
        this.currentType='new'
        break;
      case 2:
        this.currentType='sell'
      }
      this.$refs.tabControl2.currentIndex=index
    },



    //网络请求相关代码
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        // console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    },

    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
        //注意...语法
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1

        //完成了上拉加载更多
        this.$refs.scroll.finishPullUp()

      })
    },

    backClick(){
     this.$refs.scroll.scrollTo(0,0,500)
    },

    contentScroll(position){
     // 判断backTop是否显示
     this.isShowBackTop=(-position.y)>1000

    //  决定tab-control是否吸顶
      this.isTabFixed=(-position.y)>this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      console.log("加载");
    },
    swiperImageLoad(){
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop

    },
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  z-index: 99;
}
.tab-control {
  position: relative;
  z-index: 999;
  background-color: white;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
