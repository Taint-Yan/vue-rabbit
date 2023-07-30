import httpInstance from "@/utils/http";


/**
 *  获取banner
 */

export function getBannerApi() {
  return httpInstance({
    url: 'home/banner'
  });
}

/**
 * 新鲜好物
 */

export function getHomeNew() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * 人气推荐
 */

export function getHomeHot() {
  return httpInstance({
    url: '/home/hot'
  })
}