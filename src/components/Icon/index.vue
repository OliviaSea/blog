<template>
 <i class="iconfont" :class="fontClass"></i>
</template>

<script>
const classMap={
    qq: "icon-qq",
    message:"icon-liuyan",
    email :"icon-youxiang1",
    xiangmu:"icon-xiangmubu",
    guanyuwo:"icon-guanyuwomen",
    github:"icon-github",
    vx:"icon-pro-pay-wx",
    home:"icon-pro-home",
    none:"icon-empty",
    wenzhang:"icon-wenzhangguanli",
    up:"icon-xiangshangjiantou",
    down:"icon-xiangxiajiantou"
}
export default {
    props:{
        type:{
            type:String,
            required:true,
        }
    },
    computed:{
        fontClass(){
            return classMap[this.type]
        }
    }

}
</script>

<style scoped>
@import "//at.alicdn.com/t/c/font_4200692_cywe1gi4u8m.css";

</style>