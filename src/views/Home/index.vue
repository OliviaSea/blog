<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel" >
    <ul class="carouse-container" :style="{marginTop}" @transitionend="switchTransition">
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carouse="item"/>
      </li>
    </ul>
    <div @click="switchTo(index - 1)" v-show="index>=1" class="icon icon-up">
      <Icon type="up"/>
    </div>
    <div @click="switchTo(index + 1)" v-show="index<data.length-1" class="icon icon-down">
      <Icon type="down"/>
    </div>
    <ul class="indicator">
      <li  @click="switchTo(i)" :class="{active:i===index}" v-for="(item, i) in data" :key="item.id">
      </li>
    </ul>
    <!-- <Loading v-if="Loading"/> -->
    
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'
import Carouselitem from './Carouselitem.vue';
import Icon from '@/components/Icon';
import fetchData from "@/mixins/fetchData"
// import Loading from '@/components/Loading';
export default {
  mixins:[fetchData([])],
  components:{
    Carouselitem,
    Icon,
    // Loading,
  },
  data(){
    return {
          // banners:[],
          containerHeight:0,
          index:0,
          switching:false,
          // isLoading:true,
    }
  },
  // async created(){
  //   this.banners = await getBanners();
  //   this.isLoading = false;
  // },
 
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize",this.handleResize);
  },
  destroyed(){
    window.removeEventListener("resize",this.handleResize);
  },
  computed:{
    marginTop(){
      return -this.index * this.containerHeight + 'px';
    }
  },
  methods:{
    async fetchData(){
      return await getBanners();
    },
      switchTo(i){
        this.index = i;
      },
      handleWheel(e){
        if(this.switching){
          return;
        }
        if(e.deltaY < -5 && this.index > 0){
          this.switching = true;
          this.index--;
        }else if(e.deltaY > 5 && this.index < this.data.length - 1){
          this.switching = true;
          this.index++;
        }
      },
      switchTransition(){
        this.switching = false;
      },
      handleResize(){
        this.containerHeight = this.$refs.container.clientHeight;
      }

    }


}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul{
    margin: 0;
  }
  .indicator{
    .self-center();
    transform: translateY(-50%);
    left:auto;
    right: 28px;
  li{
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: @words;
    margin-bottom:15px; 
    box-sizing: border-box;
    cursor: pointer;
    &.active{
      background-color: #fff
    }
  }
  }
}
.icon{
  .self-center();
  cursor: pointer;
  transform: translateX(-50%);
 
  &.icon-up{
    top: 26px;
    animation: up 2s infinite;
  }
  &.icon-down{
    top: auto;
    bottom: 16px;
    animation: down 2s infinite;
  }
  @up:5px;
  @keyframes up {
    0%{
      transform: translate(-50%, @up);
    }
    50%{
      transform: translate(-50%, -@up);
    }
    100%{
      transform: translate(-50%, @up);
    }
  }
  @down:5px;
  @keyframes down {
    0%{
      transform: translate(-50%, -@down);
    }
    50%{
      transform: translate(-50%, @down);
    }
    100%{
      transform: translate(-50%, -@down);
    }
  }
}
.iconfont{
  font-size: 32px;
  font-weight: bold;
  color: @gray;
}
.carouse-container{
    width: 100%;
    height: 100%;
    transition: 500ms;
    li{
    width: 100%;
    height: 100%;
    }
  }
</style>