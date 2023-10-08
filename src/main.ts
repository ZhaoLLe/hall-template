import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/index';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(store);

app.mount('#app');
