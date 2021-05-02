import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Opciones de Vue
const options = {
  render: function(createElement) {
    return createElement(App);
  }
};

const app = new Vue(options);
app.$mount("#app");
