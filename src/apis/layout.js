import httpInstance from "@/utils/http";

// 头部导航栏接口  method默认为get 可以省略
export function getCategoryApi() {
  return httpInstance({
    url: '/home/category/head'
  })
}