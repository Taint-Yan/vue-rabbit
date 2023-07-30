import { ref, onMounted, onUnmounted } from 'vue'

/**
 * @description: 返回页面滚动的高度
 */
export default function useScrollTop() {
  const scrollTop = ref(0)
  const onScroll = () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  }
  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
  return {
    scrollTop
  }
}