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

// 设置为全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
