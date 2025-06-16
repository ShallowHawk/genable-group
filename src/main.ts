import './assets/main.css'

// 🔥 引入全局修复样式
import './assets/styles/global-fix.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
