import request from "./request"
export async function getBlog( page=1,limit=10,categoryid=-1){
  return await request.get("./api/blog",{
    param:{
        page,
        limit,
        categoryid,
    }
  })
} 

export async function getBlogTypes(){
    return await request.get("./api/blogtype")
} 