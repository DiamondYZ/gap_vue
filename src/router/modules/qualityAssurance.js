/** When your routing production is too long, you can split it into small modules **/

import Layout from '@/layout'

const productionRouter = {
  path: '/qualityAssuranceManagement',
  component: Layout,
  redirect: '/quality-assurance-management',
  name: 'QualityAssuranceManagement',
  meta: {
    title: '质量管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'processing',
      component: () => import('@/views/qualityAssurance/processing'),
      name: 'Processing',
      meta: { title: '来料管理' }
    },
    {
      path: 'harvest',
      component: () => import('@/views/qualityAssurance/harvest'),
      name: 'Harvest',
      meta: { title: '成品校验' }
    },
  ]
}
export default productionRouter
