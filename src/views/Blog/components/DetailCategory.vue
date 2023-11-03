<template>
<div class="detailContainer">
  <h2>目录</h2>
  <RightList :list="toc" @Selected="handleSelect"/>
</div>
</template>

<script>
import RightList from "./RightList.vue"
export default {
  props:{
    toc:{
      type:Array
    }
  },
    components:{
      RightList
    },
    methods:{
      handleSelect(item){
        location.hash = item.anchor;
      }
    }

}
</script>

<style lang="less" scoped>
  .detailContainer{
    h2{
    font-weight: bold;
    margin: 0;
    font-size: 1em;
    letter-spacing: 2px;
    
  }
  }


</style>