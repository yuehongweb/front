import axios from '../utils/request'

const getCaptcha = async () => {
  return await axios.get('/getCaptcha')
}
const forget = async (pramas) => {
  await axios.post('/forget', { ...pramas })
}
export {
  getCaptcha,
  forget
}
