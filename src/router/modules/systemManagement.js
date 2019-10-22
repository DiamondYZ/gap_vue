/** When your routing production is too long, you can split it into small modules **/

import Layout from '@/layout'

const systemRouter = {
  path: '/systemManagement',
  component: Layout,
  redirect: '/system-management',
  name: 'SystemManagement',
  meta: {
    title: '系统管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'lookup',
      component: () => import('@/views/system/lookup'), // Parent router-view
      name: 'Lookup',
      meta: { title: '字典表' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: 'menu1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: 'menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: 'menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: 'menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: 'menu1-3' }
        }
      ]
    },
    {
      path: 'lookup-class',
      component: () => import('@/views/system/lookup-class'),
      name: 'LookupClass',
      meta: { title: '字典表class' }
    },
    {
      path: 'lookup-item',
      component: () => import('@/views/system/lookup-item'),
      name: 'LookupItem',
      meta: { title: '字典表item' }
    },
    {
      path: 'province',
      component: () => import('@/views/system/province'),
      name: 'Province',
      meta: { title: '省份' }
    },
    {
      path: 'city',
      component: () => import('@/views/system/city'),
      name: 'City',
      meta: { title: '城市' }
    },
    {
      path: 'city',
      component: () => import('@/views/system/city'),
      name: 'City',
      meta: { title: '区县' }
    },
    {
      path: 'street',
      component: () => import('@/views/system/street'),
      name: 'Street',
      meta: { title: '街道' }
    },
  ]
}
export default systemRouter
