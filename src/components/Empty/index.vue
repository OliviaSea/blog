<template>
  <div class="empty-container">
    <Icon type="none"/>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            required:false,
            default:"无数据"
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container{
   .self-center();
   color: @gray;
  p{
    
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
.iconfont{
    font-size: 200px;
    color: @gray;
}


</style>