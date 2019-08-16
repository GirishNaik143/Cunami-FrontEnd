import Vue from "vue";
import Vuex from "vuex";
import VueMq from 'vue-mq'

Vue.use(Vuex);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
