import Vue from "vue";
import Vuex from "vuex";

//MODULES
import oauth from "./modules/oauth";
import loading from "./modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { oauth, loading }
});
