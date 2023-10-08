import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
Vue.use(VueRouter);

// Vue.config.productionTip = false;
 
const router = new VueRouter({
  mode: 'history',
  routes
}) 
export default router
