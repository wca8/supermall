<template>
  <div class="goods-item">
    <a :href="goodItem.link"><img :src="goodItem.show.img" alt=""></a>
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">￥{{goodItem.price}}</span>
      <span class="collect">★{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodItem:{
      type:Object,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 47%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 5px;
  text-align: center;
}
.goods-info p{
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price{
  color: var(--color-high-text);

}
.goods-info span{
  font-size: 14px;
}
</style>
