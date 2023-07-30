<template>
  <LayoutHeaderFiedx />
  <LayoutNav />
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutHeaderFiedx from './components/LayoutHeaderFiedx.vue'
</script>

<style lang="scss" scoped></style>
