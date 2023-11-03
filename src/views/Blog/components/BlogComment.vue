<template>
  <div class="blogComment">
    <MessageArea title="评论"
     :subTitle="(`${data.total}`)" 
     :list="data.rows" 
     :isLoading="isLoading"
     @submit="handelClick"
     
     />
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import { getComments,postComment } from '@/api/blog';
import MessageArea from '@/components/MessageArea';
export default {
    mixins:[fetchData({total:0,rows:[]})],
components:{
    MessageArea
},
data(){
    return{
        limit:10,
        page:10
    }
}
,
methods:{
    async fetchData(){
        return await getComments(this.$route.params.id,this.limit,this.page)
    },
    async handelClick(formDate,callback){
       const resp = await postComment(
           {
            blog:this.$route.params.id,
            ...formDate,

           }
        );
        this.data.rows.unshift(resp);
        this.data.total++;
        callback("评论的很好")
    }

}
}
</script>

<style>

</style>