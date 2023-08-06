// 封装二级菜单栏的逻辑

import { ref, onMounted } from 'vue'
import { getCategoryFilterApi } from '@/apis/category.js'
import { useRoute } from 'vue-router'
export function useSubcategory() {
  // 定义数据
  const filterData = ref([])
  const route = useRoute()

  // 获取数据
  const getFilterData = async (id = route.params.id) => {
    const res = await getCategoryFilterApi(id)
    console.log(res)
    filterData.value = res.result
  }

  onMounted(() => {
    getFilterData()
  })
  return {
    filterData,
  }
}