import { createApp } from 'vue';
import './style.css';
import store from './store/index';
import router from './router';
import { useAuth } from './utils/auth';
import 'virtual:uno.css';
import App from './App.vue';
import i18n from './languages/index';
import './assets/iconFont/iconfont.css';

// useAuth(router);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
