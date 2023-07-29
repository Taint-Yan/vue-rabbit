<script setup></script>

<template>
  <!-- 路由占位符 -->
  <router-view />
  <div class="test">自动导入样式</div>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
