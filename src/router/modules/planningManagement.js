/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const planningRouter = {
  path: '/planningManagement',
  component: Layout,
  redirect: '/planning-management',
  name: 'PlanningManagement',
  meta: {
    title: '计划管理',
    icon: 'form'
  },
  children: [
    {
      path: 'production-plan',
      component: () => import('@/views/planning/production-plan'),
      name: 'ProductionPlan',
      meta: { title: '生产计划' }
    },
    {
      path: 'production-order',
      component: () => import('@/views/planning/production-order'),
      name: 'ProductionOrder',
      meta: { title: '生产订单' }
    },
    {
      path: 'work-order',
      component: () => import('@/views/planning/work-order'),
      name: 'WorkOrder',
      meta: { title: '工单' }
    },
    {
      path: 'task-type',
      component: () => import('@/views/planning/task-type'),
      name: 'TaskType',
      meta: { title: '任务类型' }
    },
    {
      path: 'task',
      component: () => import('@/views/planning/task'),
      name: 'Task',
      meta: { title: '任务' }
    }
  ]
}
export default planningRouter
