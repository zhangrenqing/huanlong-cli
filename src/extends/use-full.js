import Vue from 'vue'
import Antd from 'ant-design-vue'
import huanlong from 'huanlong-components'

if (process.env.NODE_ENV === 'development') {
  require('ant-design-vue/dist/antd.less')
}

Vue.use(Antd)
Vue.use(huanlong)