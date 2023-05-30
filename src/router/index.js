import Search from '../views/Search.vue'
import Repos from '../views/Repos.vue'
import Commit from '../views/Commit.vue'

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
        path: '/commit',
        name: 'commit',
        component: Commit,
    },
    {
        path: '*',
        redirect: 'home'
    }
  ];    