<template>
<Layout>
  <BlogList/>
  <template v-slot:right>
<div>
  <BlogCategory/>
</div>
  </template>
</Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  components: {

    Layout,
    BlogList,
    BlogCategory
  
}
}
</script>

<style>

</style>