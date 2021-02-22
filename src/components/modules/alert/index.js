import AlertComponent from './Alert'

const alert = {}
alert.install = function (Vue) {
  const AlertConstrutor = Vue.extend(AlertComponent)
  console.log(AlertConstrutor, 'AlertConstrutor')
  const instance = new AlertConstrutor()
  console.log(instance, 'instance')
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 添加实例方法
  Vue.prototype.$alert = function (msg) {
    instance.msg = msg
    instance.isShow = true
  }
}
export default alert
