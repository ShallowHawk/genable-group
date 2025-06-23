<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-section">
      <!-- 主要内容区域 -->
      <div class="py-16 lg:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- 公司信息 -->
          <div class="lg:col-span-2">
            <div class="flex items-center mb-6">
              <!-- KENABLE Logo (白色版本) -->
              <img
                src="@/assets/kenable_logo.svg"
                alt="可耐博达Kenable"
                style="height: 5vh"
                class="h-20 w-auto max-w-none brightness-0 invert"
              />
            </div>
            <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              {{ getText('companyDescription') }}
            </p>
            <div class="flex space-x-4">
              <social-link
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :icon="social.icon"
                :name="social.name"
              />
            </div>
          </div>

          <!-- 快速链接 -->
          <div>
            <h3 class="text-lg font-semibold mb-6">{{ getText('quickLinksTitle') }}</h3>
            <ul class="space-y-4">
              <li v-for="link in quickLinks" :key="link.href">
                <router-link
                  :to="link.href"
                  class="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </router-link>
              </li>
              <li>
                <a
                  href="/First‑Leg (Origin) Logistics Service Handbook.docx"
                  download
                  class="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center"
                >
                  {{ getText('downloadManual') }}
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- 联系信息 -->
          <div>
            <h3 class="text-lg font-semibold mb-6">{{ getText('contactTitle') }}</h3>
            <div class="space-y-4">
              <contact-item icon="phone" :label="contactLabels.phone" value="+1 (626) 693-6579" />
              <contact-item
                icon="mail"
                :label="contactLabels.email"
                value="adam@kenablegroup.com"
              />
              <contact-item icon="map-pin" :label="contactLabels.address" :value="addressText" />
            </div>
          </div>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="border-t border-gray-800"></div>

      <!-- 底部版权信息 -->
      <div class="py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © {{ currentYear }} {{ getText('copyright') }}. {{ getText('allRightsReserved') }}
          </div>
          <div class="flex space-x-6 text-sm">
            <router-link
              v-for="legal in legalLinks"
              :key="legal.href"
              :to="legal.href"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {{ legal.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialLink from './SocialLink.vue'
import ContactItem from './ContactItem.vue'

const { locale } = useI18n()

const currentYear = computed(() => new Date().getFullYear())

// 定义翻译键的类型
type TranslationKey =
  // 公司信息
  | 'companyDescription'
  // 快速链接
  | 'quickLinksTitle'
  | 'aboutUs'
  | 'services'
  | 'warehouses'
  | 'caseStudies'
  | 'technology'
  | 'news'
  | 'contactUs'
  | 'downloadManual'
  // 联系信息
  | 'contactTitle'
  | 'phone'
  | 'email'
  | 'address'
  // 版权信息
  | 'copyright'
  | 'allRightsReserved'
  // 法律链接
  | 'privacyPolicy'
  | 'termsOfService'
  | 'cookiePolicy'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 公司信息
    companyDescription:
      '专业的跨境供应链解决方案提供商，致力于为全球电商企业提供端到端的物流服务。',

    // 快速链接
    quickLinksTitle: '快速链接',
    aboutUs: '关于我们',
    services: '服务体系',
    warehouses: '仓储网络',
    caseStudies: '客户案例',
    technology: '技术管理',
    news: '新闻资讯',
    contactUs: '联系我们',
    downloadManual: '下载服务手册',

    // 联系信息
    contactTitle: '联系我们',
    phone: '电话',
    email: '邮箱',
    address: '地址',

    // 版权信息
    copyright: '可耐博达（广州）供应链管理有限公司',
    allRightsReserved: '保留所有权利。',

    // 法律链接
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    cookiePolicy: 'Cookie政策',
  },
  en: {
    // 公司信息 - 专业商务表达
    companyDescription:
      'Professional cross-border supply chain solutions provider dedicated to delivering end-to-end logistics services for global e-commerce businesses.',

    // 快速链接 - 直观明了
    quickLinksTitle: 'Quick Links',
    aboutUs: 'About Us',
    services: 'Services',
    warehouses: 'Warehouses',
    caseStudies: 'Case Studies',
    technology: 'Technology',
    news: 'News',
    contactUs: 'Contact Us',
    downloadManual: 'Download Service Manual',

    // 联系信息
    contactTitle: 'Contact Us',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',

    // 版权信息 - 符合美国商务习惯
    copyright: 'Kenable Group Corp',
    allRightsReserved: 'All rights reserved.',

    // 法律链接 - 标准表达
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

const socialLinks = [
  { name: 'LinkedIn', href: '/contact', icon: 'linkedin' },
  { name: 'Twitter', href: '/contact', icon: 'twitter' },
  { name: 'Facebook', href: '/contact', icon: 'facebook' },
  { name: 'YouTube', href: '/contact', icon: 'youtube' },
]

// 响应式翻译的快速链接
const quickLinks = computed(() => [
  { label: getText('aboutUs'), href: '/about' },
  { label: getText('services'), href: '/services' },
  { label: getText('warehouses'), href: '/warehouses' },
  { label: getText('caseStudies'), href: '/case-studies' },
  { label: getText('technology'), href: '/technology' },
  { label: getText('news'), href: '/news' },
  { label: getText('contactUs'), href: '/contact' },
])

// 响应式翻译的法律链接
const legalLinks = computed(() => [
  { label: getText('privacyPolicy'), href: '/privacy' },
  { label: getText('termsOfService'), href: '/terms' },
  { label: getText('cookiePolicy'), href: '/cookies' },
])

// 响应式翻译的联系信息标签
const contactLabels = computed(() => ({
  phone: getText('phone'),
  email: getText('email'),
  address: getText('address'),
}))

// 响应式翻译的地址信息
const addressText = computed(() =>
  locale.value === 'zh'
    ? '21908 Valley Blvd, Walnut, CA 91789'
    : '21908 Valley Blvd, Walnut, CA 91789',
)
</script>

<style scoped>
/* 组件特定样式 */
</style>
