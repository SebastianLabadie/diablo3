// Paquetes de npm
import Vue from "vue";

// Bootstrap Vue
import "./plugins/BootstrapVue";

// FontAwesome
import "./plugins/fontAwesome";

// Archivos locales de nuestra App
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// CSS global
import "@/assets/css/main.styl";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Configuración extra
Vue.config.productionTip = false;

// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch("oauth/getToken", null, { root: true });
    }
  },
  created() {
    this.init();
  },
  render: h => h(App)
}).$mount("#app");
