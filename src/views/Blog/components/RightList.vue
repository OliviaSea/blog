<template>
  <div class="right-container">
    <ul>
        <li  v-for="(item ,i) in list" :key="i">
        <span @click="handleChang(item)" :class="{active:item.isSelect}">{{ item.name }}</span>
        <RightList :list="item.children" @Selected="handleChang"/>
        </li>
        
    </ul>
  </div>
</template>

<script>

export default {
    name: "RightList",
    props: {
        list: {
            type: Array,
            default: () => { []; }
        }
    },
    methods: {
        handleChang(item) {
          if(!item.isSelect){
            this.$emit("Selected", item);
          }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
    .right-container{
       
        li{
            list-style: none;
            padding: 0;
            font-size: 14px;
            margin-left: 15px;
            min-height: 40px;
            line-height: 40px;
            
            span{
                cursor: pointer;
            }
        }
        .active{
            color: @warn;
        }
    }
</style>