import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Contact from '@/page/contact'
import Project from '@/page/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
  ]
})
