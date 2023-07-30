<template>
  <LayoutHeaderFiedx />
  <LayoutNav />
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutHeaderFiedx from './components/LayoutHeaderFiedx.vue'
import { useCategoryStore } from '@/stores/category.js'

// pinia调用
const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<style lang="scss" scoped></style>
