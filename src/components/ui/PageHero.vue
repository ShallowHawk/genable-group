<template>
  <section
    class="relative py-20 lg:py-32 overflow-hidden"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <!-- 背景遮罩 -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"
    ></div>

    <!-- 装饰性网络背景 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div class="absolute top-32 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
      <div class="absolute bottom-20 left-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
      <div class="absolute bottom-40 right-40 w-3 h-3 bg-cyan-300 rounded-full animate-ping"></div>

      <!-- 连接线 -->
      <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.6" />
            <stop offset="100%" style="stop-color: #06b6d4; stop-opacity: 0.2" />
          </linearGradient>
        </defs>
        <path
          d="M50 80 Q200 120 350 100 T650 80"
          stroke="url(#line-gradient)"
          stroke-width="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M100 200 Q300 160 500 180 T800 200"
          stroke="url(#line-gradient)"
          stroke-width="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>

    <!-- 光线效果 -->
    <div
      class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto text-white">
        <!-- 服务标签 -->
        <div
          v-if="label"
          class="inline-flex items-center bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-8 border border-blue-400/30"
        >
          {{ label }}
        </div>

        <!-- 主标题 -->
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          {{ title }}
        </h1>

        <!-- 副标题 -->
        <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          {{ subtitle }}
        </p>

        <!-- CTA按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <slot name="actions">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-blue-900 hover:bg-gray-100 px-8 shadow-md hover:shadow-lg transition-all"
            >
              {{ getText('getQuote') }}
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
            >
              {{ getText('onlineConsult') }}
            </BaseButton>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'

interface Props {
  title: string
  subtitle: string
  imageUrl: string
  label?: string
}

defineProps<Props>()

const { locale } = useI18n()

// 简化的翻译映射 - 地道英文表达
const translations = {
  zh: {
    getQuote: '获取专业报价',
    onlineConsult: '在线咨询',
  },
  en: {
    getQuote: 'Get Professional Quote',
    onlineConsult: 'Online Consultation',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: 'getQuote' | 'onlineConsult'): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>

<style scoped>
/* 确保背景图片覆盖和定位 */
section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
