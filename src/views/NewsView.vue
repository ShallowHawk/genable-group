<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('mainTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ getText('subtitle') }}
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'

const { locale } = useI18n()

// Translation keys type
type TranslationKey = 'pageTitle' | 'pageDescription' | 'mainTitle' | 'subtitle'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '新闻资讯',
    pageDescription: '物流行业动态和公司最新消息。',
    mainTitle: '最新资讯',
    subtitle: '关注行业动态，了解公司最新发展',
  },
  en: {
    pageTitle: 'News & Updates',
    pageDescription: 'Logistics industry trends and latest company news.',
    mainTitle: 'Latest News',
    subtitle: 'Stay informed about industry trends and our latest developments',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>
