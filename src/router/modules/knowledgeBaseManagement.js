/** When your routing knowledgeBase is too long, you can split it into small modules **/

import Layout from '@/layout'

const knowledgeBaseRouter = {
  path: '/knowledgeBaseManagement',
  component: Layout,
  redirect: '/knowledge-base-management',
  name: 'KnowledgeBaseManagement',
  meta: {
    title: '知识库管理',
    icon: 'documentation'
  },
  children: [
    {
      path: 'herbal-processing-sop',
      component: () => import('@/views/knowledgeBase/herbal-processing-sop'),
      name: 'HerbalProcessingSop',
      meta: { title: '加工sop' }
    },
    {
      path: 'sop-plant',
      component: () => import('@/views/knowledgeBase/sop-plant'),
      name: 'SopPlant',
      meta: { title: '种植sop' }
    },
    {
      path: 'harvest-sop',
      component: () => import('@/views/knowledgeBase/harvest-sop'),
      name: 'HarvestSop',
      meta: { title: '采收sop' }
    },
    {
      path: 'store-sop',
      component: () => import('@/views/knowledgeBase/store-sop'),
      name: 'StoreSop',
      meta: { title: '存储sop' }
    }
  ]
}
export default knowledgeBaseRouter
