import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vytia from 'vue-youtube-iframe-api'
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(store).use(router).use(Vytia).use(VueAxios, axios).mount('#app')
