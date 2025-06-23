<template>
  <section
    class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
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

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center text-white">
        <!-- 主标题 -->
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
          {{ title }}
        </h2>

        <!-- 副标题 -->
        <p
          v-if="subtitle"
          class="text-xl lg:text-2xl mb-12 text-gray-300 font-light leading-relaxed"
        >
          {{ subtitle }}
        </p>

        <!-- 自定义内容插槽 -->
        <div v-if="$slots.content" class="mb-12">
          <slot name="content" />
        </div>

        <!-- CTA按钮 -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <!-- 主要按钮 -->
          <router-link
            :to="primaryButtonHref"
            class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {{ primaryButtonText }}
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
          </router-link>

          <!-- 下载服务手册按钮 -->
          <a
            href="/First‑Leg (Origin) Logistics Service Handbook.docx"
            download
            class="inline-flex items-center text-white hover:text-gray-300 font-medium text-lg transition-colors group"
          >
            {{ secondaryButtonText }}
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

        <!-- 联系信息 -->
        <div v-if="showContactInfo" class="mt-8 pt-8 border-t border-white/20">
          <p class="text-gray-300 text-lg">
            {{ getContactText() }}
            <a href="tel:+16266936579" class="text-white hover:text-cyan-300 transition-colors">
              +1 (626) 693-6579
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  title: string
  subtitle?: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  showContactInfo?: boolean
}

withDefaults(defineProps<Props>(), {
  showContactInfo: true,
})

// I18n setup
const { locale } = useI18n()

// 联系信息翻译
const translations = {
  contactInfo: {
    zh: '专业团队24小时在线服务 | 客服热线：',
    en: 'Professional Team 24/7 Online Service | Customer Hotline: ',
  },
}

// 获取联系信息文本
const getContactText = (): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations.contactInfo[currentLang] || translations.contactInfo.zh
}
</script>
