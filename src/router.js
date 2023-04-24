import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./components/HomePage.vue"
import Registration from "./components/Registration.vue"
import Dictionary from "./components/Dictionary.vue"
import Authorization from "./components/Authorization.vue"

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/registration',
        component: Registration
    },
    {
        path: '/dictionary',
        component: Dictionary
    },
    {
        path: '/authorization',
        component: Authorization
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;

 //history: createWebHistory(import.meta.env.BASE_URL)
 //history: createWebHistory(process.env.BASE_URL)
 // history: createWebHistory(import.meta.env = {"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false,"SSR":false})