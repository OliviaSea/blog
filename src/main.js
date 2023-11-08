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



import eventBus from "./eventBus";
function handle1(data){
  console.log(data,"handle1");
}
function handle2(data){
  console.log(data,"handle2");
}
function handle3(data){
  console.log(data,"事件移除了");
}
eventBus.$on("event1",handle1)
eventBus.$on("event2",handle2)
eventBus.$on("event1",handle3)
window.eventBus = eventBus;
window.handle1 = handle1;
window.handle3 = handle3;