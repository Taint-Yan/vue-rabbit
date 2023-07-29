// axios 基础封装
import axios from 'axios'

// 创建axios实例

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
httpInstance.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  }, e => Promise.reject(e)
)

// respone拦截器
httpInstance.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    // const res = response.data
    // if (res.code !== 20000) {
    //     Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //     })
    //     return Promise.reject('error')
    // } else {
    //     return response.data
    // }
    return response.data
  }, e => Promise.reject(e)
)

export default httpInstance