<template>
  <div class="app-container">
    <Avatar 
    src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png"
    :size="100"
    />
    <Avatar 
    src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png"
    :size="150"
    />
  </div>
</template>

<script>
import Avatar from './index.vue';
export default{
    components:{
    Avatar
}
}
</script>

<style>

</style>