// 入口文件
import "@/mock";
import Vue from "vue";
import App from "./App.vue";
import "@/styles/global.less";
import router from "./router";
import  showMessage  from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
import vLoading from "@/directives/Loading";
Vue.directive("loading",vLoading);



new Vue({
  router,
  render:(h)=>h(App),
}).$mount("#app");

// import * as blogApi from "./api/blog";
// blogApi.getBlog(10,20,3).then(r =>{
//    console.log("博客分类",r);
// })
// blogApi.getBlogTypes().then(r =>{
//    console.log("博客类型",r);
// }).catch(function(error){
//   console.log(error);
// }
// )
// import * as blogApi from "./api/blog";

// blogApi.getComments("sjhgdhjsgh").then(r=>{
//   console.log(r);
// })