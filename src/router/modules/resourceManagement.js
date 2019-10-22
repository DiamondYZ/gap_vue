/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/resourceManagement',
  component: Layout,
  redirect: '/resourceManagement/resource-management',
  name: 'ResourceManagement',
  meta: {
    title: '资源管理',
    icon: 'table'
  },
  children: [
    {
      path: 'production-base',
      component: () => import('@/views/resource/production-base'),
      name: 'ProductionBase',
      meta: { title: '生产基地' }
    },
    {
      path: 'production-base-staff',
      component: () => import('@/views/resource/production-base-staff'),
      name: 'ProductionBaseStaff',
      meta: { title: '生产基地员工' }
    },
    {
      path: 'production-cell',
      component: () => import('@/views/resource/production-cell'),
      name: 'ProductionCell',
      meta: { title: '生产单元' }
    },
    {
      path: 'equipment-type',
      component: () => import('@/views/resource/equipment-type'),
      name: 'EquipmentType',
      meta: { title: '设备类型' }
    },
    {
      path: 'equipment',
      component: () => import('@/views/resource/equipment'),
      name: 'Equipment',
      meta: { title: '设备' }
    },
    {
      path: 'equipment-model',
      component: () => import('@/views/resource/equipment-model'),
      name: 'EquipmentModel',
      meta: { title: '设备型号' }
    },
    {
      path: 'machinery-type',
      component: () => import('@/views/resource/machinery-type'),
      name: 'MachineryType',
      meta: { title: '物料类型' }
    },
    {
      path: 'machinery',
      component: () => import('@/views/resource/machinery'),
      name: 'Machinery',
      meta: { title: '物料' }
    },
    {
      path: 'product-type',
      component: () => import('@/views/resource/product-type'),
      name: 'ProductType',
      meta: { title: '产品类型' }
    },
    {
      path: 'product',
      component: () => import('@/views/resource/product'),
      name: 'Product',
      meta: { title: '产品' }
    },
    {
      path: 'implement-type',
      component: () => import('@/views/resource/implement-type'),
      name: 'ImplementType',
      meta: { title: '机具类型' }
    },
    {
      path: 'implement-model',
      component: () => import('@/views/resource/implement-model'),
      name: 'ImplementModel',
      meta: { title: '机具型号' }
    },
    {
      path: 'implement',
      component: () => import('@/views/resource/implement'),
      name: 'Implement',
      meta: { title: '机具' }
    }
  ]
}
export default companyRouter
