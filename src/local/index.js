// 表单校验规则
import Vue from 'vue'
import { ValidationProvider, extend, localize } from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'
localize('zh_CN', zh)
extend('email', email)
extend('required', required)
extend('length', length)
extend('min', min)
Vue.component('ValidationProvider', ValidationProvider)
