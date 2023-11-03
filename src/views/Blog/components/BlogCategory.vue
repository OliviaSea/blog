<template>
 <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
  <RightList :list="list" @Selected="handleSelect" />
 </div>
</template>

<script>
import RightList from './RightList.vue';
import fetchData from '@/mixins/fetchData';
import { getBlogTypes } from '@/api/blog';

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
      (a,b) => a + b.articleCount,0
    );
    const result = [
      {name :"全部",id:-1,articleCount:totalCount},
      ...this.data,
      
    ];
    return result.map((item)=>({
      ...item,
      isSelect : item.id === this.categoryId,
      aside:`${item.articleCount}篇`,
    }))
  }
  }
  ,
  methods:{
    async fetchData(){
      return await getBlogTypes();
    },
    handleSelect(item){
      const query = {
        page : 1,
        limit : this.limit
      }
      if(item.id === -1){
          this.$router.push({
            name:"Blog",
            query
          }).catch(err => err);
      }else{
        this.$router.push({
          name:"CategoryBlog",
          query,
          params:{
            categoryId:item.id
          }
        }).catch(err => err);
      }
    }
  }


}
</script>

<style lang="less" scoped>
  .blog-category-container{
    height: 100%;
    position: relative;
    width: 300px;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    h2{
    font-weight: bold;
    margin: 0;
    font-size: 1em;
    letter-spacing: 2px;
    
  }
  }


</style>