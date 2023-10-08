<template>
  <div class="app-container">
    <Pages :current="current" :total="total" @pageChange="packageClick($event)"/>
  </div>
</template>

<script>
import Pages from "./index.vue"
export default {
components:{
    Pages
},
data(){
    return{
        current:2,
        total:200,
        limit:10
    }
},
methods:{
    packageClick(newPage){
        this.current = newPage
    }
}
}
</script>

<style>

</style>