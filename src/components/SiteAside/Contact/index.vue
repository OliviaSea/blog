<template>
  <div class="contact-container">
    <ul>
        <li>
            <a href="">
                <Icon type="github"/>
                <span>Github:237497</span>
            </a>
            <div class="pop">
                    <img src="https://picsum.photos/seed/picsum/150" alt="">
                </div>
        </li>
        <li>
            <a href="mailto:12324435546">
                <Icon type="email"/>
                <span>e-mail:2312451</span>
            </a>
        </li>
        <li>
            <a href="">
                <Icon type="qq"/>
                <span>QQ:123456786545</span>
            </a>
            <div class="pop">
                    <img src="https://picsum.photos/150" alt="">
                </div>
        </li>
        <li>
            <a href="">
                <Icon type="vx"/>
                <span>weiXin:1233453</span>
            </a>
            <div class="pop">
                    <img src="https://picsum.photos/150" alt="">
                </div>
        </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
components:{
    Icon
}
}
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.contact-container{
  padding: 20px;
  color: @gray;
    li{
        position: relative;
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin:10px 0px;
        cursor: pointer;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .pop{
        position: absolute;
        left: 0;
        bottom: 30px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: all 0.2s;
    img{
        width: 150px;
        height: 150px;
    }
    &::after{
        content: "";
        position: absolute;
        left: 50%;
        bottom: -4px;
        transform: translateX(50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background-color: rgb(247, 247, 247);
    }
}
  
}
.iconfont{
    font-size: 26px;
    width: 36px;
}
</style>