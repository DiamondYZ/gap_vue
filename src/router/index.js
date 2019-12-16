import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import companyRouter from './modules/table'

// 公司信息
import companyRouter from './modules/companyInfo'
// 资源管理
import resourceManagementRouter from './modules/resourceManagement'
// 销售管理
import salesManagement from './modules/salesManagement'
// 采购管理
import purchasingManagement from './modules/purchasingManagement'
// 仓储管理
import warehousingManagement from './modules/warehousingManagement'
// 计划管理
import planningManagement from './modules/planningManagement'
// 生产管理
import productionManagement from './modules/productionManagement'
// 知识库管理
import knowledgeBaseManagement from './modules/knowledgeBaseManagement'
// 用户管理
import user from './modules/user'
// 溯源管理
import tracingManagement from './modules/tracingManagement'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/logout',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  // {
  //  path: '/icon',
  //  component: Layout,
  //  children: [
  //    {
  //      path: 'index',
  //      component: () => import('@/views/icons/index'),
  //      name: 'Icons',
  //      meta: {title: 'icons', icon: 'icon', noCache: true}
  //    }
  //  ]
  // },

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  companyRouter,
  resourceManagementRouter,
  salesManagement,
  purchasingManagement,
  warehousingManagement,
  planningManagement,
  productionManagement,
  knowledgeBaseManagement,
  user,
  tracingManagement,
  {
    path: '/databoard',
    component: Layout,
    children: [
      {
        path: 'databoard',
        component: () => import('@/views/databoard/index'),
        name: 'Databoard',
        meta: { title: '看板', icon: 'documentation', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
