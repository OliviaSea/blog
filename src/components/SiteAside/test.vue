<template>
  <div class="app-container">
    <SiteAside/>
  </div>
</template>

<script>
import SiteAside from "./index.vue";
import "@/styles/global.less";

export default {
components:{
    SiteAside
}
}
</script>

<style scoped>

.app-container{
    width: 260px;
    height: 1000px;
    border: 1px solid #000;
}

</style>