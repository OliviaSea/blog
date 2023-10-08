<template>
    <div class="app-container">
        <Empty/>
    </div>
</template>

<script>
import Empty from "./index.vue";
export default {
components:{
    Empty
}
}
</script>

<style scoped lang="less">
.app-container{
    position: relative;
    width: 300px;
    height: 200px;
    margin: 100px auto;
}

</style>