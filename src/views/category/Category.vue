<template>
 <div>
   <nav-bar class="nav-bar">
     <div slot="center">长安优购-分类</div>
   </nav-bar>
 <div class="main">
   <category-left
     :title-list="titleList"
     @getMaitKey="getMaitKey"
     class="category-left">
   </category-left>

   <category-right
     :subcategory-list="subcategoryList"
     class="category-right"
   >
   </category-right>
 </div>
 </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {getCategoryTitle,getSubcategory} from "@/network/category";
  import CategoryLeft from "@/views/category/childComps/CategoryLeft";
  import CategoryRight from "@/views/category/childComps/CategoryRight";
  export default {
    name: "Category",
    data(){
      return{
        titleList: [],
        subcategoryList: [],

      }
    },
    components:{
      CategoryLeft,
      NavBar,
      CategoryRight,
    },
    created() {
      this.getCategoryTitle()
    },
    methods:{
      getCategoryTitle(){
        getCategoryTitle().then(res=>{
          console.log(res);
          this.titleList = res.data.category.list;
          console.log(this.titleList[0])
          const res1 = this.getSubcategory(this.titleList[0].maitKey);
        })
      },
      getSubcategory(maitKey){
        getSubcategory(maitKey).then(res=>{
          console.log(res);
          this.subcategoryList=res.data.list
        })
      },
      getMaitKey(maitKey){
        this.getSubcategory(maitKey)
      },
    },
  }
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
.main{
  display: flex;
}
.category-left{
  width: 28%;
}
.category-right{
  width: 72%;
}
</style>
