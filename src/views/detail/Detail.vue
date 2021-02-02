<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail-nav"
                    @titleClick="titleClick"
    ></detail-nav-bar>

    <scroll
      :probe-type="3"
      @scroll="contentScroll"
      ref="scroll" class="scroll">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info @imageLoad="imageLoad" :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info ref="params"  :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>

    <detail-bottom-bar
      class=""
      @addCart="addToCart"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <toast :show="show" :message="message"></toast>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import {debounce} from "@/common/utils";
import {itemListenerMixin} from "@/common/mixin";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import BackTop from "@/components/content/backTop/BackTop";
import {mapActions} from 'vuex'
import Toast from "@/components/common/toast/Toast";
export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  mixins:[itemListenerMixin],
  data(){
    return{
      iid:null,
      topImage:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo: {},
      commentInfo:{},
      recommends:[],
      themeTopY:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false,
      message:'',
      show:false,

    }
  },
  //销毁时
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  mounted() {
    //用到了事件总线
    //监听item图片加载完成

  },
  updated() {

  },
  created() {
    //1 保存传入的iid
    this.iid=this.$route.params.iid

    //2 请求详情数据
    getDetail(this.iid).then(res=>{
      // console.log(res);
      //1 获取数据
      const data=res.result

      //2 获取轮播图数据
      this.topImage=data.itemInfo.topImages


      //  3 获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)


    //4 获取店铺信息
      this.shop=new Shop(data.shopInfo)


    // 5 保存商品的详情数据
      this.detailInfo=data.detailInfo

      // 6 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)


    // 7 评论信息
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0]
      }
    })


    //3 请求推荐数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommends=res.data.list
    })


    this.getThemeTopY=debounce(()=>{
      this.themeTopY=[]
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      //添加一个最大的值
      this.themeTopY.push(Number.MAX_VALUE)
      console.log(this.themeTopY);
    })

  },
  methods:{
    ...mapActions(['addCart']),
    addToCart(){
      // 1获取购物车需要展示信息
      const product={}
      product.image=this.topImage[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid
      console.log(product);

      //方法一
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })
    // 方法二
      this.addCart(product).then(res=>{
        this.show=true
        this.message=res
        setTimeout(()=>{
          this.show=false
          this.message=''
        },2000)
      })


    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    imageLoad(){

      this.$refs.scroll.refresh()
      this.getThemeTopY()

    },
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
    },
    contentScroll(position){
      const positionY=-position.y
      let length=this.themeTopY.length
      for(let i=0;i<length-1;i++){

        if(this.currentIndex!==i&&(positionY>=this.themeTopY[i]&&positionY<this.themeTopY[i+1])){
          this.currentIndex=i
          console.log(i);
          this.$refs.nav.currentIndex=this.currentIndex
        }

      }


      this.isShowBackTop=(-position.y)>1000

    },
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 12;
  background-color: white;
}
.scroll{
  height: calc(100vh - 44px - 52px);
}
.detail-nav{
  position: relative;
  z-index: 12;
  background-color: white;
  opacity:.9;
}
</style>
