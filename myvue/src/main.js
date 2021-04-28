import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/config.scss";

import Vconsole from "vconsole";
// if (process.env.NODE_ENV === "development") {
const vConsole = new Vconsole();
Vue.use(vConsole);
// }

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
