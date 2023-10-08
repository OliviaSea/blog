<template>
  <div class="app-container">
    <Avatar 
    src="https://picsum.photos/200"
    :size="100"
    />
    <Avatar 
    src="https://picsum.photos/seed/picsum/200"
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