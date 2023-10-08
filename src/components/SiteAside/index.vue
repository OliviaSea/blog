<template>
  <div class="site-container">
    <Avatar src="https://picsum.photos/200"/>
    <h1>
        努力努力再努力
    </h1>
    <Menu/>
    <Contact/>
    <p>备案号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
components:{
    Avatar,
    Menu,
    Contact
}
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.site-container{
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 15px 0;
    box-sizing: border-box;
    h1{
        margin-top: 5px;
        text-align: center;
        font-size: 1.2em;
        color: #fff;
    }
    p{
        text-align: center;
        font-size: 17px;
    }
}
.avatar-container{
    display: flex;
    justify-content: center;
    
}

</style>