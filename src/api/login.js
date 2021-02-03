import axios from '../utils/request'

/**
 * 获取验证码接口
 * @param {*} pramas
 */
const getCaptcha = async (pramas) => {
  return await axios.get(`public/getCaptcha?uuid=${pramas.sid}`)
}

/**
 * 忘记密码
 * @param {*} pramas 邮箱、验证码
 */
const forget = async (pramas) => {
  await axios.post('login/forget', { ...pramas })
}

/**
 * 登录接口
 * @param {*} pramas 用户名、密码、验证码
 */
const login = async (pramas) => {
  return axios.post('login/login', { ...pramas })
}

export {
  getCaptcha,
  forget,
  login
}
