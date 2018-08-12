import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'

import categories from '@/pages/Categories'
import category from '@/pages/Category'
import create from '@/pages/CreateProject'
import profile from '@/pages/Profile'
import project from '@/pages/Project'
import projects from '@/pages/Projects'
import search from '@/pages/Search'
import projectReview from '@/pages/ProjectReview'
import signupProposer from '@/pages/SignupProposer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: categories
    },
    {
      path: '/category',
      name: 'Category',
      component: category
    },
    {
      path: '/create',
      name: 'CreateProject',
      component: create
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile
    },
    {
      path: '/project',
      name: 'Project',
      component: project
    },
    {
      path: '/projects',
      name: 'Projects',
      component: projects
    },
    {
      path: '/search',
      name: 'Search',
      component: search
    },
    {
      path: '/signup-proposer',
      name: 'SignupProposer',
      component: signupProposer
    },
    {
      path: '/project-review',
      name: 'ProjectReview',
      component: projectReview,
      meta: {
        requiresAdmin: true
      }
    }
  ]
})
