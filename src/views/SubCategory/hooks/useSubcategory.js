// // 封装二级菜单栏的逻辑

// import { ref, onMounted } from 'vue'
// import { getCategoryFilterApi, getSubCategoryAPI } from '@/apis/category.js'
// import { useRoute } from 'vue-router'
// export function useSubcategory() {
//   // 定义数据
//   const filterData = ref([])
//   const route = useRoute()

//   // 获取数据
//   const getFilterData = async (id = route.params.id) => {
//     const res = await getCategoryFilterApi(id)
//     filterData.value = res.result
//   }

//   onMounted(() => {
//     getFilterData()
//   })
//   return {
//     filterData,
//   }
// }

// // 获取商品列表数据
// export function useSubcategoryList() {
//   const route = useRoute()
//   const goodList = ([])
//   const reqData = ref({
//     categoryId: route.params.id,
//     page: 1,
//     pageSize: 20,
//     sortField: 'publishTime'
//   })
//   const getGoodList = async () => {
//     const res = await getSubCategoryAPI(reqData.value)
//     goodList.value = res.result.items
//     console.log(goodList.value);
//   }
//   onMounted(() => {
//     getGoodList()
//   })
//   return {
//     goodList
//   }
// }