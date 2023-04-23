import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./components/HomePage.vue"
import Registration from "./components/Registration.vue"
import Dictionary from "./components/Dictionary.vue"

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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;
