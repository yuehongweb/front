import AlertComponent from './Alert'

const alert = {}
alert.install = function (Vue) {
  // 创建构造器
  const AlertConstrutor = Vue.extend(AlertComponent)
  // 创建 alert 实例，并挂载到一个元素div上。
  const instance = new AlertConstrutor()
  instance.$mount(document.createElement('div'))
  // 并将alert挂载到body
  document.body.appendChild(instance.$el)
  // 添加实例方法alert
  Vue.prototype.$alert = function (msg) {
    instance.type = 'alert'
    instance.msg = msg
    // 组件总是打开
    instance.isShow = true
  }
  // 添加实例方法confirm
  Vue.prototype.$confirm = function (msg, confirm, cancel) {
    instance.type = 'confirm'
    instance.msg = msg
    // 组件总是打开
    instance.isShow = true
    if (confirm) {
      instance.confirm = confirm
    }
    if (cancel) {
      instance.cancel = cancel
    }
  }
}
export default alert
