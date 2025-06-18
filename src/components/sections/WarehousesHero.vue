<template>
  <section
    class="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
    }"
  >
    <div class="container-section text-center">
      <div class="space-y-8">
        <h1 class="text-white font-black text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
          {{ getText('title1') }}
          <span class="block text-primary-300 mt-2">{{ getText('title2') }}</span>
        </h1>
        <div class="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
        <p class="text-gray-100 font-light text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          {{ getText('subtitle') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey = 'title1' | 'title2' | 'subtitle'

// 翻译映射
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    title1: '智能仓储',
    title2: '全美覆盖',
    subtitle:
      '4大配送中心战略布局，50万+平方英尺仓储面积。先进WMS系统，99%准确率，为您提供专业仓储服务。',
  },
  en: {
    title1: 'Smart Warehousing',
    title2: 'Nationwide Coverage',
    subtitle:
      '4 strategically located distribution centers with 500,000+ sq ft warehouse space. Advanced WMS system with 99% accuracy, providing professional warehousing services.',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>

<style scoped>
/* 确保背景图片在所有设备上都能正确显示 */
section {
  background-attachment: fixed;
}

/* 在移动设备上禁用 fixed attachment 以提高性能 */
@media (max-width: 768px) {
  section {
    background-attachment: scroll;
  }
}
</style>
