import Search from '../components/Search.vue'
import Repos from '../components/Repos.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Search,
    },
    {
        path: '/repository',
        name: 'repository',
        component: Repos,
    },
    {
        path: '*',
        redirect: 'home'
    }
  ];