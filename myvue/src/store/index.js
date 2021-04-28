import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import test from "./modules/test";
import book from "./modules/book";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    storeData: "test-hello-store",
  },
  mutations: mutations,
  actions: actions,
  modules: { test, book },
});
// 注册模块‘myModule’
store.registerModule("myModule", {
  namespaced: true,
  state: {
    data: "myModules---data",
  },
});
// 动态卸载模块 store.unregisterModule(moduleName)
// 你可以通过 store.hasModule(moduleName) 方法检查该模块是否已经被注册到 store
console.log("ishave====", store.hasModule("test"));
export default store;
