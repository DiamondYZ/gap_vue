/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/warehousingManagement',
  component: Layout,
  redirect: '/warehousingManagement/warehousing-management',
  name: 'WarehousingManagement',
  meta: {
    title: '仓储管理',
    icon: 'list'
  },
  children: [
    {
      path: 'warehouse',
      component: () => import('@/views/warehousing/warehouse'),
      name: 'Warehouse',
      meta: { title: '库房' }
    },
    // {
    //   path: 'warehouse-area',
    //   component: () => import('@/views/warehousing/warehouse-area'),
    //   name: 'WarehouseArea',
    //   meta: { title: '库区' }
    // },
    // {
    //   path: 'warehouse-location',
    //   component: () => import('@/views/warehousing/warehouse-location'),
    //   name: 'WarehouseLocation',
    //   meta: { title: '库位' }
    // },
    {
      path: 'stock',
      component: () => import('@/views/warehousing/stock'),
      name: 'Stock',
      meta: { title: '库存' }
    },
    {
      path: 'stock-detail',
      component: () => import('@/views/warehousing/stock-detail'),
      name: 'StockDetail',
      meta: { title: '库存明细' }
    }
    // ,
    // {
    //   path: 'storage-conditions',
    //   component: () => import('@/views/warehousing/storage-conditions'),
    //   name: 'StorageConditions',
    //   meta: { title: '存储条件' }
    // },
    // {
    //   path: 'warehouse-receipt',
    //   component: () => import('@/views/nested/menu1/menu1-2'),
    //   name: 'WarehouseReceipt',
    //   redirect: '/stockManagement/WarehouseReceipt/warehouse-receipt',
    //   meta: { title: '仓单' },
    //   children: [
    //     {
    //       path: 'warehouse-receipt-bank',
    //       component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //       name: 'WarehouseReceiptBank',
    //       meta: { title: '仓单行' }
    //     }
    //   ]
    // }
  ]
}
export default companyRouter
