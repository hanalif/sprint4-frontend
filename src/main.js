import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'
import element from 'element-ui'  


Vue.use(VueAwesomeSwiper)
Vue.use(element)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')