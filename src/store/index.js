import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import menu from './modules/menu'
import user from './modules/user'
import errorLog from './modules/error-log'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    app, //基础布局 
    menu, // 菜单 状态
    user,//登录 用户信息
    errorLog  //
  },
  getters
})
