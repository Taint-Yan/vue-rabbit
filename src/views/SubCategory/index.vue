<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }"
          >{{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GoodsItem from '@/components/GoodsItem.vue'
import { ref, onMounted } from 'vue'
import { getCategoryFilterApi, getSubCategoryAPI } from '@/apis/category.js'
import { useRoute } from 'vue-router'
// 定义数据
const filterData = ref([])
const route = useRoute()
const goodList = ref([])
// 获取数据
const getFilterData = async (id = route.params.id) => {
  const res = await getCategoryFilterApi(id)
  filterData.value = res.result
}

// 获取商品列表数据
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  goodList.value = res.result.items
  console.log(goodList.value)
}

onMounted(() => {
  getFilterData()
  getGoodList()
})
// 获取tab切换数据
const tabChange = () => {
  reqData.value.page = 1
  getGoodList()
}

// 加载更多
const load = async () => {
  // 分页加一
  reqData.value.page++
  // 请求数据
  const res = await getSubCategoryAPI(reqData.value)
  // 将数据追加到goodList中
  goodList.value = [...goodList.value, ...res.result.items]
  // 判断是否还有数据
  const disabled = ref(false)
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
</script>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
