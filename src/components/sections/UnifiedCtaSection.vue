<template>
  <!-- CTA区域 - DSV风格 -->
  <section
    class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden cta-section"
  >
    <!-- 背景装饰效果 -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <div class="container-section relative z-10">
      <div class="max-w-4xl mx-auto text-center text-white cta-content">
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
          {{ getText('ctaTitle') }}
        </h2>
        <p class="text-xl lg:text-2xl mb-12 text-gray-300 font-light leading-relaxed">
          {{ getText('ctaDescription') }}
        </p>

        <!-- CTA按钮 -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 group"
            @click="$router.push('/contact')"
          >
            {{ getText('ctaButtonPrimary') }}
            <svg
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>

          <a
            href="/First‑Leg (Origin) Logistics Service Handbook.docx"
            download
            class="inline-flex items-center text-white hover:text-gray-300 font-medium text-lg transition-colors group"
          >
            {{ getText('ctaButtonSecondary') }}
            <svg
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey = 'ctaTitle' | 'ctaDescription' | 'ctaButtonPrimary' | 'ctaButtonSecondary'

// 翻译映射
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    ctaTitle: '携手可耐博达，共创美国市场新机遇',
    ctaDescription: '专业团队24小时在线，为您量身打造最优物流解决方案',
    ctaButtonPrimary: '立即开始合作',
    ctaButtonSecondary: '下载服务手册',
  },
  en: {
    ctaTitle: 'Partner with Kenable, Create New Opportunities in the US Market',
    ctaDescription:
      'Professional team available 24/7 to craft optimal logistics solutions tailored for you',
    ctaButtonPrimary: 'Start Partnership Now',
    ctaButtonSecondary: 'Download Service Brochure',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>

<style scoped>
/* 如果需要的话，这里可以添加组件特定样式 */
</style>
