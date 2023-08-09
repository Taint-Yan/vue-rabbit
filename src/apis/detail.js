import response from '@/utils/http.js'

// 获取详情页面数据
export const getDetail = (id) => {
  return response({
    url: '/goods',
    params: {
      id
    }
  })
}