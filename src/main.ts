import { createApp } from 'vue';
import store from './store/index';
import router from './router';
import 'virtual:uno.css';
import App from './App.vue';
import i18n from './languages/index';
import './assets/iconFont/iconfont.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './style.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');
