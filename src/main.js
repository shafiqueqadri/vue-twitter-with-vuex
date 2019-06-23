import Vue from 'vue'
import firebase from 'firebase';

import router from '@/routers'
import store from '@/store'

import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHeart,
  faComment,
  faHeartBroken
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart,
  faComment,
  faHeartBroken
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false;

let app = '';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSNzQhYYZki3OKiWlrwHCBhBGmiSJv9Ag",
  authDomain: "angular-888.firebaseapp.com",
  databaseURL: "https://angular-888.firebaseio.com",
  projectId: "angular-888",
  storageBucket: "angular-888.appspot.com",
  messagingSenderId: "631087573199",
  appId: "1:631087573199:web:7fdd9ea63a9a9f1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});

