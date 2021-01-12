// 表单校验规则
import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize
} from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('required', required)
extend('length', length)
extend('min', min)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码'
  },
  fields: {
    username: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}77'
    }
  }
})

// 设置为全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
