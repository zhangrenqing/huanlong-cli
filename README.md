# 基于Template Vue2 Manage 

基于 Vue.js 2.x 和 ant-design-vue 组件库且风格统一的用于快速构建中后台系统的脚手架。


## 快速开始

```bash
# 安装
yarn install

# 启动开发服务
yarn run dev

# 生产环境打包
yarn run build

# 测试环境打包
yarn run build:test
```


###  结构目录
.
├── README.md              # 搞事之前请先读我
├── babel.config.js
├── config                 # 项目配置
│   ├── config.js          # 提供给 vue.config.js 使用的自定义配置，抽离了相对独立部分
│   └── theme.plugin.js    # 主题配置，自定义主题配置的时候会用到 暂时未用
├── jsconfig.json
├── mock                   # mock 数据服务
│   ├── index.js
│   ├── modules            # 所有的 mock 数据定义在这里
│   └── utils.js           # 内置处理 mock 数据的工具函数
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src                   # 源码目录
│   ├── api               # 请求
│   ├── app.vue           # 根组件
│   ├── assets            # 静态资源
│   ├── components        # 组件
│   ├── extends           # 扩展，包含对 Vue.prototype 的扩展、自定义指令、组件库等
│   ├── layouts           # 布局 (按照业务来区分  登录 头部和侧边 主体)
│   ├── main.js           # 入口文件
│   ├── router            # 路由配置
│   ├── store             # store 配置 全局状态管理
│   ├── utils             # 工具库
│   └── views             # 页面
├── tests                 # 单元测试
│   └── unit
├── .env                  # 通用的环境变量配置
├── .env.development      # 开发环境变量配置
├── .env.production       # 正式环境变量配置
├── vue.config.js         # vue-cli 提供的配置文件
└── yarn.lock


## License

[MIT](/LICENSE)
