export default {
  namespaced: true,
  state: {
    modulesData: "moduleTestData--book",
  },
  mutations: {
    modulesMutations(state, val) {
      state.modulesData = val;
    },
  },
  actions: {},
  modules: {},
};
