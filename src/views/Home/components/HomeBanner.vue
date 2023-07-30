<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBannerApi } from '@/apis/home.js'

const bannerList = ref([])
const getBanner = async () => {
  const data = await getBannerApi()
  bannerList.value = data.result
}

onMounted(() => {
  getBanner()
})
</script>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
