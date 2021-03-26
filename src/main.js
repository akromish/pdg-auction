import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'
import firebase from "firebase";

Vue.use(firestorePlugin)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAkV1GJZ3my2QYGwCd9vRMFU4NGoTvcuB0",
  authDomain: "pdg-app-f75fb.firebaseapp.com",
  databaseURL: "https://pdg-app-f75fb-default-rtdb.firebaseio.com",
  projectId: "pdg-app-f75fb",
  storageBucket: "pdg-app-f75fb.appspot.com",
  messagingSenderId: "1090019154090",
  appId: "1:1090019154090:web:33dc43ba980556d41798d3",
  measurementId: "G-DXKSTB41FK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
