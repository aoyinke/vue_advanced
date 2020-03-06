import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index'
import Father from '@/components/Father'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: "/Father",
        name: "father",
        component: Father
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router