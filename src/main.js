import "./styles/main.css";

import { createApp } from "vue";
import { createWebHashHistory, createRouter } from 'vue-router'

import App from "./App.vue";
import Home from "./components/Home.vue";
import P1 from "./components/P1.vue";
import P1_nee from "./components/P1_nee.vue";
import P2 from "./components/P2.vue";
import P2_ja from "./components/P2_ja.vue";
import P3 from "./components/P3.vue";
import P3_nee from "./components/P3_nee.vue";
import P4 from "./components/P4.vue";
import P4_1 from "./components/P4_1.vue";
import P4_2 from "./components/P4_2.vue";
import P4_3 from "./components/P4_3.vue";
import End from "./components/End.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/P1', name: 'P1', component: P1 },
      { path: '/P1_nee', name: 'P1_nee', component: P1_nee },
      { path: '/P2', name: 'P2', component: P2 },
      { path: '/P2_ja', name: 'P2_ja', component: P2_ja },
      { path: '/P3', name: 'P3', component: P3 },
      { path: '/P3_nee', name: 'P3_nee', component: P3_nee },
      { path: '/P4', name: 'P4', component: P4},
      { path: '/P4_1', name: 'P4_1', component: P4_1},
      { path: '/P4_2', name: 'P4_2', component: P4_2},
      { path: '/P4_3', name: 'P4_3', component: P4_3},            
      { path: '/End', name: 'End', component: End},      
    ],
  })

createApp(App)
.use(router)
.mount("#app");
