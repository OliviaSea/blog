<template>
  <div class="blogDetail">
    <h1>{{ blog.title }}</h1>
   <div class="aside">
    <span>日期：{{ blog.createDate }}</span>
    <span>浏览：{{ blog.scanNumber }}</span>
    <a href="">评论：{{ blog.commentNumber }}</a>
    <a href="">{{ blog.category.name }}</a>
   </div>
   <div v-html="blog.htmlContent" class="markdown-body">
   
   </div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
export default {
props:{
    blog:{
        type:Object,
        require:true
    }
},
  methods:{
 
  }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.blogDetail{
    h1{
       margin-bottom: 10px;
    }
}
.aside{
font-size: 12px;
color: @gray;
span,a{
    margin-left: 5px;
}
}
.markdown-body{
  margin: 2em 0;
}
</style>