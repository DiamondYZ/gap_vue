/** When your routing sales is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/salesManagement',
  component: Layout,
  redirect: '/salesManagement/sales-management',
  name: 'SalesManagement',
  meta: {
    title: '销售管理',
    icon: 'money'
  },
  children: [
    {
      path: 'sale-consumer',
      component: () => import('@/views/sale/sale-consumer'),
      name: 'SaleConsumer',
      meta: { title: '客户' }
    },
    {
      path: 'sale-orders',
      component: () => import('@/views/sale/sale-orders'),
      name: 'SaleOrders',
      meta: { title: '销售订单' }
    }
  ]
}
export default companyRouter
