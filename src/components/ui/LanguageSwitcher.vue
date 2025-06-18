<template>
  <button
    @click="switchLanguage"
    class="language-switcher-simple"
    :aria-label="`Switch to ${nextLanguage.name}`"
  >
    {{ currentLanguage.code.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/i18n/types'
import { setStoredLocale } from '@/i18n'

const { locale } = useI18n()

// 当前语言
const currentLocale = computed(() => locale.value as Locale)

// 可用语言列表
const availableLocales = [
  { code: 'zh' as Locale, name: '中文' },
  { code: 'en' as Locale, name: 'English' },
]

// 当前语言对象
const currentLanguage = computed(
  () => availableLocales.find((lang) => lang.code === currentLocale.value) || availableLocales[0],
)

// 下一个语言对象
const nextLanguage = computed(
  () => availableLocales.find((lang) => lang.code !== currentLocale.value) || availableLocales[1],
)

// 切换语言
const switchLanguage = () => {
  const newLocale = nextLanguage.value.code

  // 更新i18n locale
  locale.value = newLocale

  // 保存到localStorage
  setStoredLocale(newLocale)
}
</script>

<style scoped>
.language-switcher-simple {
  @apply px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors;
  @apply focus:outline-none;
}

.language-switcher-simple:hover {
  @apply text-blue-600;
}
</style>
