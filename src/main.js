// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 懒加载指令
import { lazyPlugin } from '@/directives/lazy.js'

// 引入公共样式
import '@/styles/common.scss'
// 引入全局组件插件
import { componentPlugin } from '@/components/index.js'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
