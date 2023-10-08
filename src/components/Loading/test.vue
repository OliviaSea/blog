<template>
  <div class="app-container">
<Loading v-if="isLoading"/>
<button @click="isLoading=!isLoading">切换</button>
  </div>
</template>

<script>
import Loading from "@/components/Loading"
export default {
components:{
    Loading,
},
data(){
    return{
        isLoading:true
    }
}
}
</script>

<style scoped lang="less">

.app-container{
   position: relative;

}

</style>