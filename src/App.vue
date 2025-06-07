<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- 页面头部 -->
    <TheHeader />
    
    <!-- 主要内容区域 -->
    <main class="flex-1 pt-20">
      <RouterView />
    </main>
    
    <!-- 页面底部 -->
    <TheFooter />
  </div>
</template>

<style>
/* 全局样式重置 */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #374151;
  background-color: #ffffff;
}

/* 确保图片响应式 */
img {
  max-width: 100%;
  height: auto;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 聚焦样式 */
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #228B22;
  outline-offset: 2px;
}

/* 链接样式 */
a {
  color: inherit;
  text-decoration: none;
}

/* 禁用元素样式 */
[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 动画性能优化 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
