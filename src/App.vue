<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <SiteAside/>
      </template>
     <template #default>
      <RouterView/>
     </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
export default {
components:{
  Layout,
  SiteAside
}
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
.self-fill(fixed);

}

</style>