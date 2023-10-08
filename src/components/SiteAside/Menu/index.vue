<template>
    <nav class="menu-container">
            <RouterLink :exact="item.exact" v-for="item in items" :key="item.link" :to="{name:item.name}"
            active-class="selected"
            exact-active-class=""
            >
                <div class="icon">
                    <Icon :type="item.icon"/>
                </div>
                <span>{{ item.title }}</span>
            </RouterLink>
    </nav>
</template>

<script>
import Icon from "@/components/Icon"
export default {
components:{
    Icon
},
data(){
    return{
        items:[
           {
            name:"Home",
            link:'/',
            title:'首页',
            icon:'home',
            exact:true
           },
           {
            name:"Blog",
            link:'/blog',
            title:'文章',
            icon:'wenzhang',
            exact:false
           },
           {
            name:"About",
            link:'/about',
            title:'关于我',
            icon:'guanyuwo',
            exact:true
           },
           {
            name:"Project",
            link:'/project',
            title:'项目&效果',
            icon:'xiangmu',
            exact:true
           },
           {
            name:"Message",
            link:'/message',
            title:'留言板',
            icon:'message',
            exact:true
           }

        ]
    }
}
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.menu-container{
    color: @gray;
    margin: 24px 0px;
    a{
        padding: 0 50px;
        display: block;
        display: flex;
        align-items: center;
        height: 45px;
    .icon{
        width: 24px;
    }
    &:hover{
        color: #fff;
    }
    &.selected{
        background-color: darken(@words,5%);
    }
    }
}

</style>