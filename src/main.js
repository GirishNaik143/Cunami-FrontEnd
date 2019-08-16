import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import { FormCheckboxPlugin } from 'bootstrap-vue'
import { FormRadioPlugin } from 'bootstrap-vue'

Vue.use(FormRadioPlugin)
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:4000/api/event';
Vue.use(FormCheckboxPlugin)
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
  template: `
    <grid-component :column="$mq | mq({
      phone: 2,
      tablet: 3,
      laptop: 4
    })">
    </grid-component>
  `,
}).$mount("#app");
