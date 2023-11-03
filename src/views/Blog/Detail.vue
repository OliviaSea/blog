<template>
  <Layout>
    <div class="detailContainer" v-loading="isLoading">
    <BlogDetail :blog="data" v-if="data"/>
    <BlogComment v-if="!isLoading"/>
</div>
 <template v-slot:right>
 <div class="right">
  <DetailCategory :toc="data.toc" v-if="data" v-loading="isLoading"/>
 </div>
 </template>

</Layout>
</template>

<script>
import BlogDetail from './components/BlogDetail.vue';
import DetailCategory from './components/DetailCategory.vue';
import Layout from '@/components/Layout';
import fetchData from '@/mixins/fetchData';
import { getBlogId } from '@/api/blog';
import BlogComment from './components/BlogComment.vue';
export default {
  mixins:[fetchData({})],
  components:{
    BlogDetail,
    DetailCategory,
    Layout,
    BlogComment
},
  methods:{
    async fetchData(){
      return await getBlogId(this.$route.params.id);
    }
  }
}
</script>

<style lang="less" scoped>
.detailContainer{
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right{
  position: relative;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: scroll;
    
}
</style>