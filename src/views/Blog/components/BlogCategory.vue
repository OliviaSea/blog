<template>
 <div class="blogCategory" v-loading="isLoading">
    <h2>文章分类</h2>
  <RightList :list="list" @Selected="handleSelected"/>
 </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import { getBlogTypes } from '@/api/blog';
import RightList from './RightList.vue';
export default {
  mixins:[fetchData([])],
  components:{
    RightList
  },
  computed:{
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
  list(){
    const totalCount = this.data.reduce(
      (a,b) => a.articleCount + b.articleCount,0
    );
    const result = [
      {name :"全部",id:-1,articleCount:totalCount},
      ...this.data,
    ];
    return result.map((item)=>({
      ...item,
      isSelected : item.id === this.categoryId
    }))
  }
  }
  ,
  methods:{
    async fetchData(){
      return await getBlogTypes();
    },
    handleSelected(item){
      const query = {
        page : 1,
        limit : this.limit
      }
      if(this.routeInfo.categoryId === -1){
          this.$router.push({
            name:"Blog",
            query
          })
      }else{
        this.$router.push({
          name:"CategoryBlog",
          query,
          params:{
            categoryId:this.routeInfo.categoryId
          }
        })
      }
    }
  }


}
</script>

<style lang="less" scoped>
  .blogCategory{
    position: relative;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;

 
    h2{
    margin: 0;
    font-size: 1em;
    letter-spacing: 2px;
    font-weight: bold;
  }
  }


</style>