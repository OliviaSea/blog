import Mock from "mockjs";
import qs from "querystring"
Mock.mock("/api/blogtype","get",{
    code: 0,
    msg:"",
    "data|10-20":[
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-300": 0, 
            "order|+1": 1,

        }
    ],
}),
Mock.mock("/^\/api/blog(\?.+)?$/","get",function(option){
    const query = qs.parse(option.url)
    return Mock.mock(
        {
            code:0,
            msg:"",
            data:{
                "total|2000-2800":0,
                [`rows|${query.limit}`]:[{
                    id:"@guid",
                    title:"@cname",
                    description:"@cparagraph",
                    category: { 
                        "id|1-10": 0,
                        name: "分类@id"
                    },
                    "scanNumber|0-2000": 0,
                    "commentNumber|0-200": 30,
                    thumb: Mock.mock.Random.image( "300*250", "lightblue","#fff","picture" ),
                    createDate: `@datetime('yyyy-MM-dd A HH:mm:ss')`
                 }],
               
            }    
        }
    )
})