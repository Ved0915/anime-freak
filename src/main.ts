import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/tailwind.scss';

// Import Font Awesome core and the Vue FontAwesome component
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the solid icons you want to use
import { faBars, faTimes, faSearch, faHome, faUser, faBell, faShuffle, faHistory, faHeart, faCog, faSignOutAlt, faFileImport, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Import the brand icons you want to use
import { faDiscord, faTelegramPlane, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Import the regular icons you want to use
import { faComments as farComments } from '@fortawesome/free-regular-svg-icons';

// Add the icons to the library
library.add(
  faBars,
  faTimes,
  faSearch,
  faHome,
  faUser,
  faBell,
  faShuffle,
  faHistory,
  faHeart,
  faCog,
  faChevronLeft,
  faSignOutAlt,
  faFileImport, // Added solid icon
  farComments,  // Added regular icons
  faDiscord,
  faTelegramPlane,
  faRedditAlien,
  faTwitter
);

const app = createApp(App);
app.use(createPinia());
app.use(router);

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
