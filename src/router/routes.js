import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
export default [
    { 
      name:"Home",
      path:'/',
      component:Home
    },
    {
      name:"Blog",
      path:'/blog',
      component:Blog
    },
    {
    path:'/blog/cate/:categoryId',
    name:"CategoryBlog",
    component:Blog
  },
    {
      name:"Project",
      path:'/project',
      component:Project
    },
    {
      name:"About",
      path:'/about',
      component:About
    },
    {
      name:"Message",
      path:'/message',
      component:Message//匹配到留言页
    }
  ]