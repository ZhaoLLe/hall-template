import { createApp } from 'vue';
import './style.css';
import store from './store/index';
import router from './router';
import { useAuth } from './utils/auth';
import 'virtual:uno.css';
import App from './App.vue';

// useAuth(router);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
