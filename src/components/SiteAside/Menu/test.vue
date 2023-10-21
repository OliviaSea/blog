<template>
  <div class="app-container">
  <Menu/>
  </div>
</template>

<script>
import Menu from "./index.vue"
export default {
components:{
    Menu
}
}
</script>

<style scoped>
.app-container{
    width: 300px;
    height: 600px;
    border: 1px solid red;
    margin: 0 auto;
    background-color: #000;
}

</style>