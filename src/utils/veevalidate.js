// 表单校验规则
import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure
} from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'
import { i18n } from './i18n'
import store from '@/store'

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = i18n.t(`fields.${field}`)

    return i18n.t(`validation.${values._rule_}`, values)
  }
})

extend('email', email)
extend('required', required)
extend('length', length)
extend('min', min)
extend('nickname', value => {
  // 昵称不能是纯数字，长度大于4
  if (value.length < 4) {
    return '请在昵称输入至少4个字符'
  }

  if (/^\d+$/.test(value)) {
    return '不能以纯数字为昵称'
  }

  return true
})

extend('confirmPassword', value => {
  // 校验密码和确认密码是否一致
  if (value !== store.state.password) {
    return '两次输入的密码不一致'
  }
  return true
})

// 设置为全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
