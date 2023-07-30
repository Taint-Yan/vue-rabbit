<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <!-- 内容主题区域 插槽 -->
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomePanel from '@/components/HomePanel.vue'
import { getHomeHot } from '@/apis/home.js'

const hotList = ref([])

const getHot = async () => {
  const data = await getHomeHot()
  hotList.value = data.result
  console.log(hotList.value)
}

onMounted(() => {
  getHot()
})
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
