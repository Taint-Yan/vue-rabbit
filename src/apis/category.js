import httpInstance from '@/utils/http'


/***
 * @description: 获取分类页的数据
 * @param {*} id 分类id
 * @return {*}
 */

export function getTopCrumbsApi(id) {
  return httpInstance({
    url: `/category`,
    params: {
      id
    }
  })
}