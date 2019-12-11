/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/user-management',
  component: Layout,
  redirect: '/user-management',
  name: 'UserManagement',
  meta: {
    title: '用户管理',
    icon: 'user'
  },
  children: [
    // {
    //   path: 'user',
    //   component: () => import('@/views/nested/menu1/menu1-2'),
    //   name: 'User',
    //   redirect: '/user-management/user',
    //   meta: { title: '用户' },
    //   children: [
    //     {
    //       path: 'user-add',
    //       component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //       name: 'UserAdd',
    //       meta: { title: '添加用户' }
    //     },
    //     {
    //       path: 'user-edit',
    //       component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //       name: 'userEdit',
    //       meta: { title: '编辑用户' }
    //     }
    //   ]
    // },
//     {
//       path: 'admin-set',
// //    component: () => import('@/views/user/admin-set'),
//             component: () => import('@/views/user/user-info'),
//
//       name: 'AdminSet',
//       meta: { title: '个人信息' }
//     },
    {
      path: 'staff-group',
      component: () => import('@/views/user/staff-group'),
      name: 'StaffGroup',
      meta: { title: '系统角色' }
    },
    {
      path: 'users',
      component: () => import('@/views/user/user-role'),
      name: 'UserRole',
      meta: { title: '用户角色分配' }
    },
    {
      path: 'user-list',
      component: () => import('@/views/user/user-list'),
      name: 'UserList',
      meta: { title: '用户列表' }
    },
    // {
    //   path: 'add-user',
    //   component: () => import('@/views/user/add-user'),
    //   name: 'AddUser',
    //   meta: { title: '添加用户' }
    // },
    // {
    //   path: 'set-password',
    //   component: () => import('@/views/user/set-password'),
    //   name: 'SetPassword',
    //   meta: { title: '设置密码' }
    // },
    // {
    //   path: 'user-jurisdiction',
    //   component: () => import('@/views/user/user-jurisdiction'),
    //   name: 'UserJurisdiction',
    //   meta: { title: '权限设置' }
    // }
//  {
//    path: 'jurisdiction',
//    component: () => import('@/views/excel/merge-header'),
//    name: 'Jurisdiction',
//    meta: { title: '权限' }
//  }
  ]
}

export default chartsRouter
