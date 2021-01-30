<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll ref="scroll" class="scroll">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info @imageLoad="imageLoad" :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"/>
    </scroll>

  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail,Goods,Shop,GoodsParam} from "@/network/detail";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";

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
  },
  data(){
    return{
      iid:null,
      topImage:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo: {},

    }
  },
  created() {
    //1 保存传入的iid
    this.iid=this.$route.params.iid

    //1 获取顶部的轮播图
    getDetail(this.iid).then(res=>{
      console.log(res);
      const data=res.result
      this.topImage=data.itemInfo.topImages


      //  2 获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)


    //3 获取店铺信息
      this.shop=new Shop(data.shopInfo)


    //  4保存商品的详情数据
      this.detailInfo=data.detailInfo

      // 5 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

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
