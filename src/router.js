import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/home/homes',
            children: [{
                    path: '/home/homes',
                    name: 'homes',
                    component: () =>
                        import ('./views/homes.vue')
                },
                {
                    path: '/home/list',
                    name: 'list',
                    component: () =>
                        import ('./views/list.vue')
                },
                {
                    path: '/home/book',
                    name: 'book',
                    component: () =>
                        import ('./views/book.vue')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue')
        },
        {
            path: '/classify',
            name: 'classify',
            component: () =>
                import ('./views/classify.vue'),
            redirect: '/classify/classifyDetail',
            children: [{
                path: 'classifyDetail',
                name: 'classifyDetail',
                component: () =>
                    import ('./views/classifyDetail.vue')
            }, ]
        },
        {
            path: '/detail',
            name: 'detail',
            component: () =>
                import ('./views/detail.vue')
        }

    ]
})