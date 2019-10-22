/** When your routing production is too long, you can split it into small modules **/

import Layout from '@/layout'

const productionRouter = {
  path: '/productionManagement',
  component: Layout,
  redirect: '/production-management',
  name: 'ProductionManagement',
  meta: {
    title: '生产管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'plant',
      component: () => import('@/views/production/plant'),
      name: 'Plant',
      meta: { title: '种植' }
    },
    {
      path: 'harvest',
      component: () => import('@/views/production/harvest'),
      name: 'Harvest',
      meta: { title: '采收' }
    },
    {
      path: 'processing',
      component: () => import('@/views/production/processing'),
      name: 'Processing',
      meta: { title: '加工' }
    },
    {
      path: 'packaging',
      component: () => import('@/views/production/packaging'),
      name: 'Packaging',
      meta: { title: '包装' }
    },
    // {
    //   path: 'storage',
    //   component: () => import('@/views/production/storage'),
    //   name: 'Storage',
    //   meta: { title: '存储' }
    // }
  ]
}
export default productionRouter
