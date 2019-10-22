/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/purchasingManagement',
  component: Layout,
  redirect: '/purchasingManagement/purchasing-management',
  name: 'PurchasingManagement',
  meta: {
    title: '采购管理',
    icon: 'shopping'
  },
  children: [
    {
      path: 'supplier',
      component: () => import('@/views/purchasing/supplier'),
      name: 'Supplier',
      meta: { title: '供应商' }
    },
    {
      path: 'purchase-orders',
      component: () => import('@/views/purchasing/purchase-order'),
      name: 'PurchaseOrders',
      meta: { title: '采购订单' }
    }
  ]
}
export default companyRouter
