import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

const get = (url: string, queryParams: any): Promise<any> => {
  return axios.get(url, { params: queryParams })
}

const post = async (url: string, body: any): Promise<any> => {
  return axios.post(url, body)
}

const urls = {
  ACCOUNT: {
    LOGIN: '/api/account/login',
    REGISTER: '/api/account/registration',
  },
}

export { get, post, urls }
