<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll ref="scroll" class="scroll">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info @imageLoad="imageLoad" :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>

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
  },
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
      itemImgListener:null,
    }
  },
  //销毁时
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  mounted() {
    //用到了事件总线
    //监听item图片加载完成
    const refresh= debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener=()=>{
      refresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
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


  },
  methods:{
    imageLoad(){

      this.$refs.scroll.refresh()
    }
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
  height: calc(100vh - 44px);
}
.detail-nav{
  position: relative;
  z-index: 12;
  background-color: white;
  opacity:.9;
}
</style>
