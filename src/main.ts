import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ToastPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import "@/assets/scss/style.scss";

Vue.config.productionTip = false;
Vue.use(ToastPlugin);
Vue.use(VueRouter);

new Vue({
  name: "HoneyStore",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
