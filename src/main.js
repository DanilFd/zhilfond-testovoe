import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {store} from "@/store/index.js";

createApp(App)
    .use(store)
    .mount('#app')
