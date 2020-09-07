import Vue from 'vue'
// 全局变量配置
import '../assets/css/element-variables.scss'
// 按需引用----注意注意注意：新增引用需要再'/assets/css/element-components.scss' 里引入样式
import { Button, Input } from 'element-ui'
;[Button, Input].forEach((item) => {
  Vue.use(item)
})
