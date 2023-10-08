<template>
  <div class="app-container">
    <RightList :list="list" @Selected="handled"/>
  </div>
</template>

<script>
import RightList from '@/views/Blog/components/RightList.vue';
export default {
components:{
    RightList
},
data(){
return {
    list:[{
        name:"a",
        isSelect:false
    },
    {
        name:"b",
        isSelect:true,
        children:[
            {
                name:"b-1",
        isSelect:false
            },
            {
                name:"b-2",
                children:[
            {
                name:"b-1",
        isSelect:false
            },
            {
                name:"b-2",
        isSelect:false,
            },
            {
                name:"b-3",
        isSelect:false
            },
        ],
        isSelect:false,
            },
            {
                name:"b-3",
        isSelect:false
            },
        ]
    },
    {
        name:"a",
        isSelect:false,
        children:[
            {
                name:"c-1",
        isSelect:false
            },
            {
                name:"b-2",
        isSelect:false
            },
            {
                name:"b-3",
        isSelect:false
            },
        ]
    },
    {
        name:"a",
        isSelect:false
    },
]
}
},
methods:{
    handled(){
        console.log(1);
    }
}

}
</script>

<style>

</style>