import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'
import routes from './routes.js'
import "@/styles/main.css";
import "@/styles/themes.css";


const router = createRouter({
  history: createWebHistory(),
  routes, 
});

const app = createApp(App);
// app.use(vheme);

app.use(router);
app.mount("#app");
