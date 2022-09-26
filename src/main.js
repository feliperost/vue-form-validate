import { createApp } from 'vue'
import App from './App.vue';
import VueTheMask from 'vue-the-mask'
import router from './router'
import store from './store';

const app = createApp(App).use(router);

app.use(VueTheMask)
app.use(store)

app.mount("#app");
