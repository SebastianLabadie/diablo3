import Vue from "vue";
import Vuex from "vuex";

// Importar oauth
import oauth from "./modules/oauth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { oauth }
});
