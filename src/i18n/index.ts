import { createI18n } from 'vue-i18n'
import type { Locale } from './types'

// 导入语言资源文件
import zh from './locales/zh.json'
import en from './locales/en.json'

// 支持的语言列表
export const SUPPORT_LOCALES: Locale[] = ['zh', 'en']

// 默认语言
export const DEFAULT_LOCALE: Locale = 'zh'

// 语言存储键名
export const LOCALE_STORAGE_KEY = 'kenable-locale'

/**
 * 获取浏览器默认语言
 */
export function getBrowserLocale(): Locale {
  const navigatorLanguage = navigator.language.toLowerCase()

  if (navigatorLanguage.startsWith('zh')) {
    return 'zh'
  }
  if (navigatorLanguage.startsWith('en')) {
    return 'en'
  }

  return DEFAULT_LOCALE
}

/**
 * 获取存储的语言设置
 */
export function getStoredLocale(): Locale | null {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return SUPPORT_LOCALES.includes(stored as Locale) ? (stored as Locale) : null
}

/**
 * 保存语言设置到localStorage
 */
export function setStoredLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}

/**
 * 获取初始语言设置
 */
export function getInitialLocale(): Locale {
  // 优先使用存储的语言设置
  const storedLocale = getStoredLocale()
  if (storedLocale) {
    return storedLocale
  }

  // 其次使用浏览器语言
  return getBrowserLocale()
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    zh,
    en,
  },
  globalInjection: true, // 全局注入
  missingWarn: false,
  fallbackWarn: false,
})

export default i18n
