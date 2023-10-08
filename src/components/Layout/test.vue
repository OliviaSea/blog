<template>
  <div class="app-container">
    <Layout>
    <template v-slot:left>
      <div class="left">这是左边</div>
    </template>

    <div class="main">这是中间
        这是中间
        这是中间
        这是中间
        这是中间
        这是中间

        这是中间
        这是中间

        这是中间

        这是中间
        这是中间
    </div>

    <template v-slot:right>
      <div class="right">这是右边</div>
    </template>
  </Layout>
  </div>
</template>
<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.app-container{
    width: 80%;
    height: 600px;
    margin: 0 auto;
}
.left{
    width: 200px;
    height: 100%;
    background-color: aqua;
}
.main{
    width: 100%;
    height: 100%;
    background-color: rgb(98, 255, 0);
}
.right{
    width: 150px;
    height: 100%;
    background-color: rgb(255, 102, 0);
}
</style>