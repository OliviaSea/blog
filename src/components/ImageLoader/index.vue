<template>
  <div class="image-container">
    <img v-if="!everythingDone" :src="placeholder" class="placeholder">
    <img @load="handleLoad" :src="src" :style="{opacity:opacityLoaded,transition: `${duration}ms`}">
    
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:false,
            default:500,
        }
    },
    data(){
        return {
            originLoader:false,
            everythingDone:false
        }
    },
    computed:{
        opacityLoaded(){
        return this.originLoader ? 1:0;
       }
    },
    methods:{
        handleLoad(){
            this.originLoader = true
            setTimeout(() => {
                console.log("原图加载完毕");
               this.everythingDone = true;
               this.$emit("load");
            },this.duration);
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-container{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
   img{
    .self-fill();
    object-fit: cover;
   }
   .placeholder{
    filter: blur(2vw);
   }

}

</style>