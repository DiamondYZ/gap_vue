/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const companyRouter = {
  path: '/company',
  component: Layout,
  redirect: '/company/company-info',
  name: 'CompanyInfo',
  meta: {
    title: '公司信息',
    icon: 'component'
  },
  children: [
    {
      path: 'company-list',
      component: () => import('@/views/company/company-list'),
      name: 'CompanyInfo',
      meta: { title: '公司' }
    },
    {
      path: 'department-list',
      component: () => import('@/views/company/department-list'),
      name: 'DepartmentInfo',
      meta: { title: '部门' }
    },
    {
      path: 'staff-list',
      component: () => import('@/views/company/staff-list'),
      name: 'StaffInfo',
      meta: { title: '员工' }
    }
  ]
}
export default companyRouter
