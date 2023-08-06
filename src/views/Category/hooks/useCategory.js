// 封装分类列表业务逻辑代码
import { ref, onMounted, watchEffect } from 'vue'
import { getTopCategoryAPI } from '@/apis/category.js'
import { useRoute } from 'vue-router'

export function useCategory() {
  const route = useRoute()  // 获取路由上面的id
  const topCrumbs = ref({}) // 定义数据
  // 获取面包屑数据及列表页面数据
  const getTopCrumbs = async () => {
    // 传参 id
    const res = await getTopCategoryAPI(route.params.id)
    topCrumbs.value = res.result
  }
  onMounted(() => {
    getTopCrumbs()
  })
  // 目标:路由参数变化的时候 可以把分类数据接口重新发送请求
  // 监听路由参数变化
  watchEffect(() => {
    getTopCrumbs()
  })
  return {
    topCrumbs
  }
}
