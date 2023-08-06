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

/**
 * @description: 获取二级分类页的数据
 * @param {*} id 二级分类id
 * @param {*}
 */

export function getCategoryFilterApi(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}