import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../i18n.js'
import Home from './pages/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/:lang',
        children: [{
            path: '/', name: 'home', component: Home
        }]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    let language = to.params.lang;
    if (!language) {
        language = i18n.locale
    }

    i18n.locale = language
    next()
})

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
