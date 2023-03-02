import { queryMenus } from '@/api/user'
import { message } from 'ant-design-vue'
import { LayoutBlock, LayoutUser, LayoutBase } from '@/layouts'
import { generator } from './handler'

import common from './common'
import template from './template'

// 前端路由表
export const routeComponents = {
  LayoutBlock,
  LayoutUser,
  LayoutBase,

  // 自定义的动态路由 这里有多少个路由在这里注册
  workplace: () => import('@/views/dashboard/workplace'),
  company: () => import('@/views/company/index'),
  companylist: () => import('@/views/company/list')
}

// 动态生成菜单
export const generatorDynamicRoutes = () => {
  return queryMenus().then(res => {
    let data = res.data

    const invalidMenu = !res.data || !res.data.length || res.data[0].path !== '/'
    // 兼容后端接口数据返回不规范的情况
    if (invalidMenu) {
      message.error('菜单树接口返回的数据格式不规范')
      data = [{
        path: '/',
        component: 'LayoutBase',
        children: []
      }]
    }
    // 将通用路由添加到根路由下面
    const rootRoute = data.find(item => item.path === '/') || {}
    if (rootRoute.children) {
      // rootRoute.children = rootRoute.children.concat(template, common)
      rootRoute.children = rootRoute.children.concat(common)
    }
    const menus = generator(data, routeComponents)
    return menus
  })
}
