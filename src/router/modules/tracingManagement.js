/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tracingRouter = {
  path: '/tracing',
  component: Layout,
  redirect: '/tracing/tracing',
  name: 'TracingInfo',
  meta: {
    title: '溯源管理',
    icon: 'documentation'
  },
  children: [
    {
      path: 'tracing',
      component: () => import('@/views/tracing/tracing'),
      name: 'TracingInfo',
      meta: { title: '产品溯源' }
    },
    {
      path: 'tracing1',
      component: () => import('@/views/tracing/tracing'),
      name: 'TracingInfo1',
      meta: { title: '行为记录' }
    }
  ]
}
export default tracingRouter
