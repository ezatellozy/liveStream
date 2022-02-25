import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem("username") || "",
    category: 1,
  },
  mutations: {
    getUserName(state, payload) {
      state.username = payload;
    },
    getCategory(state, payload) {
      state.category = payload;
    },
  },

  actions: {},
  modules: {},
});
