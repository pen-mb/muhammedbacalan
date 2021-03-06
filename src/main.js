import Vue from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3,
  faJs,
  faGitAlt,
  faVuejs,
  faReact,
  faNodeJs,
  faNpm,
  faYarn,
  faGulp,
  faSass
} from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faEllipsisH,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3,
  faJs,
  faGitAlt,
  faVuejs,
  faReact,
  faNodeJs,
  faNpm,
  faYarn,
  faGulp,
  faSass,
  faEye,
  faEllipsisH,
  faEnvelope
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
