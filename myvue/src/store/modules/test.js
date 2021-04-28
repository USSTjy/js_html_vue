export default {
  namespaced: true,
  state: {
    modulesData: "moduleTestData--test",
  },
  mutations: {
    modulesMutations(state, val) {
      state.modulesData = val;
    },
  },
  actions: {},
  modules: {},
};
