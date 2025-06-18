import { useRouter, useRoute } from 'vue-router'
import type { Locale } from '@/i18n/types'

/**
 * 简化的路由工具函数
 */
export function useLocaleRoute() {
  const router = useRouter()
  const route = useRoute()

  // 获取当前语言（从localStorage或默认中文）
  const getCurrentLocale = (): Locale => {
    const stored = localStorage.getItem('kenable-locale')
    return (stored as Locale) || 'zh'
  }

  // 切换语言（仅修改内容，不改变URL）
  const switchLanguage = (locale: Locale) => {
    // 这个函数现在基本不需要，因为语言切换由LanguageSwitcher组件处理
    localStorage.setItem('kenable-locale', locale)
  }

  // 获取本地化路径（现在简化为返回原路径）
  const getLocalizedPath = (path: string, locale?: Locale): string => {
    // 简化版本，直接返回原路径
    return path
  }

  return {
    getCurrentLocale,
    switchLanguage,
    getLocalizedPath,
  }
}
