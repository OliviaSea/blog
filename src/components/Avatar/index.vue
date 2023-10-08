<template>
  <div class="avatar-container">
    <img class="avatar-img"
     :src="src"
     :style="{
     width:size+'px',
     height:size+'px'
     }"
     >
  </div>
</template>

<script>
export default{
  props:{
    src:{
      type:String,
      required:true
    },
    size:{
      with:Number,
      height:Number,
      default:150
    }
  }
}
</script>

<style scoped>
.avatar-img{
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>