import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/index';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
// console.log('VITE_NODE_ENV ',  VITE_NODE_ENV);
// if (VITE_NODE_ENV === 'demos') console.log('demos');

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(store);

app.mount('#app');
