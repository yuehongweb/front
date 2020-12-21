import axios from 'axios'
const getCaptcha = async () => {
  try {
    const { status, data } = await axios.get('/getCaptcha')
    if (status === 200) {
      return data
    }
  } catch (e) {
    console.log(e)
  }
}
const forget = async (pramas) => {
  try {
    const { status, data } = await axios.post('/forget', { ...pramas })
    if (status === 200) {
      return data
    }
  } catch (e) {
    console.log(e)
  }
}
export {
  getCaptcha,
  forget
}
