// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 懒加载指令
import { lazyPlugin } from '@/directives/lazy.js'

// 引入公共样式
import '@/styles/common.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
