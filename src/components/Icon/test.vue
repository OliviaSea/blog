<template>
  <div class="app-container">
    <Icon type="qq"/>
    <Icon type="vx"/>
    <Icon type="github"/>
  </div>
</template>

<script>
import Icon from "./index.vue";
export default {
components:{
    Icon
}
}
</script>

<style scoped>
.iconfont{
    color: rgb(10, 10, 10);
    font-size: 40px;
}
</style>