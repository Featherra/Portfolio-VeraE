import {createRouter, createWebHistory} from 'vue-router'

import Home from '/src/Home.vue'
import Projects from '/src/Projects.vue'

const routes = [
    { path: '/', name: 'Home' ,component: Home },
    { path: '/projects', name: 'projects' , component: Projects },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router