import Vue from "vue";
import App from "./app/index.vue";
import VModal from "vue-js-modal";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

Vue.component("VueSlider", VueSlider);
Vue.component("VueJsonPretty", VueJsonPretty);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
