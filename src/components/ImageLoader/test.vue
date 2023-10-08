<template>
 <div class="app-container">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  @load="handleLoaded"
  :duration="800"
/>
 </div>
</template>

<script>
import ImageLoader from "./index.vue"
export default {
components:{
    ImageLoader
},
methods:{
    handleLoaded(){
        console.log("组件加载完成");
    }
}
}
</script>

<style scoped>
.app-container{
    width: 400px;
    height: 300px;
    border: 3px solid #000;
    margin: 100px auto;
}

</style>