import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/page/admin'
import Index from '@/page/index'
import Contact from '@/page/contact'
import Project from '@/page/project'
import ProjectSingle from '@/page/projectSingle'
import SingleDetail from '@/page/singleDetail'
import AwardDetail from '@/page/awardDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/projectSingle',
      name: 'ProjectSingle',
      component: ProjectSingle
    },
    {
      path: '/singleDetail',
      name: 'SingleDetail',
      component: SingleDetail
    },
    {
      path: '/awardDetail',
      name: 'awardDetail',
      component: AwardDetail
    },
  ]
})
