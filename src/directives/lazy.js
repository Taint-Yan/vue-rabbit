// 定义懒加载图片插件

import { useIntersectionObserver } from '@vueuse/core'

// 导入默认图片
import defaultImg from "@/assets/images/200.png";

export const lazyPlugin = {
  install(app) {
    // 懒加载指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        // console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 停止监听
              stop()
              // 设置图片
              el.src = binding.value
              // 图片加载失败时，显示默认图片
              el.error = () => {
                el.src = defaultImg;
              }
            }
          }
        )
      }
    })
  }
}