import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem("username") || "",
  },
  mutations: {
    getUserName(state, payload) {
      state.username = payload;
    },
  },
  actions: {},
  modules: {},
});
