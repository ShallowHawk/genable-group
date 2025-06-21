<template>
  <header :class="headerClasses">
    <nav class="container-section">
      <div class="flex items-center justify-between h-16 lg:h-18">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <!-- KENABLE Logo - 大厂标准尺寸 -->
            <img
              src="@/assets/kenable_logo.svg"
              :alt="getText('logoAlt')"
              class="h-8 lg:h-10 w-auto max-w-none hover:opacity-80 transition-opacity duration-200"
            />
          </router-link>
        </div>

        <!-- 桌面端导航 - 8px网格系统 -->
        <div class="hidden lg:flex items-center space-x-8">
          <template v-for="item in navigationItems" :key="item.href">
            <!-- 有子菜单的导航项 -->
            <div v-if="item.children" class="relative group">
              <router-link
                :to="item.href"
                class="flex items-center px-3 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 whitespace-nowrap min-h-[44px]"
                :class="{ 'text-blue-600': isActiveRoute(item.href) }"
              >
                {{ item.label }}
                <Icon
                  name="chevron-down"
                  size="sm"
                  class="ml-1 transition-transform group-hover:rotate-180"
                />
              </router-link>

              <!-- 下拉菜单 -->
              <div
                class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              >
                <div class="py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.href"
                    :to="child.href"
                    class="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap leading-tight min-h-[44px] flex items-center"
                    :class="{ 'text-blue-600 bg-blue-50': isActiveRoute(child.href) }"
                  >
                    {{ child.label }}
                  </router-link>
                </div>
              </div>
            </div>

            <!-- 普通导航项 -->
            <nav-link
              v-else
              :href="item.href"
              :label="item.label"
              :active="isActiveRoute(item.href)"
            />
          </template>
        </div>

        <!-- CTA按钮区域 - 8px网格系统 -->
        <div class="flex items-center space-x-4">
          <!-- 主要行动按钮 (桌面端) -->
          <BaseButton
            variant="primary"
            size="md"
            class="hidden lg:inline-flex px-6 py-2 min-h-[44px] whitespace-nowrap"
            @click="$router.push('/contact')"
          >
            {{ contactText }}
          </BaseButton>

          <!-- 语言切换器 - 移动端和桌面端统一，放在最右侧 -->
          <LanguageSwitcher />

          <!-- 移动端菜单按钮 - 大厂标准 -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
          >
            <Icon :name="isMobileMenuOpen ? 'x' : 'menu'" size="md" />
          </button>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-show="isMobileMenuOpen"
          class="lg:hidden fixed left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
          :style="{ top: mobileMenuTop }"
        >
          <div class="container-section py-4">
            <div class="flex flex-col space-y-4">
              <template v-for="item in navigationItems" :key="item.href">
                <!-- 有子菜单的导航项 -->
                <div v-if="item.children">
                  <div class="flex items-center">
                    <router-link
                      :to="item.href"
                      @click="closeMobileMenu"
                      class="flex-1 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      :class="{ 'text-blue-600': isActiveRoute(item.href) }"
                    >
                      {{ item.label }}
                    </router-link>
                    <button
                      @click="toggleMobileSubmenu(item.href)"
                      class="p-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Icon
                        name="chevron-down"
                        size="sm"
                        :class="`transition-transform ${openMobileSubmenus.includes(item.href) ? 'rotate-180' : ''}`"
                      />
                    </button>
                  </div>

                  <!-- 移动端子菜单 -->
                  <div v-show="openMobileSubmenus.includes(item.href)" class="ml-4 mt-2 space-y-2">
                    <router-link
                      v-for="child in item.children"
                      :key="child.href"
                      :to="child.href"
                      class="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      :class="{ 'text-blue-600': isActiveRoute(child.href) }"
                      @click="closeMobileMenu"
                    >
                      {{ child.label }}
                    </router-link>
                  </div>
                </div>

                <!-- 普通导航项 -->
                <nav-link
                  v-else
                  :href="item.href"
                  :label="item.label"
                  :active="isActiveRoute(item.href)"
                  mobile
                  @click="closeMobileMenu"
                />
              </template>

              <!-- 移动端不再显示重复的语言切换器，因为头部已有简化版本 -->

              <!-- 移动端CTA按钮 -->
              <BaseButton
                variant="primary"
                size="md"
                fullWidth
                class="mt-4"
                @click="handleContactClick"
              >
                {{ contactText }}
              </BaseButton>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'
import NavLink from './NavLink.vue'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

// 定义翻译键的类型
type TranslationKey =
  | 'home'
  | 'about'
  | 'services'
  | 'warehouses'
  | 'caseStudies'
  | 'technology'
  | 'contact'
  | 'airFreight'
  | 'seaFreight'
  | 'contractLogistics'
  | 'integratedIntermodalSolutions'
  | 'globalLocalPresence'
  | 'supplyChainSolutions'
  | 'firstLegLogistics'
  | 'nationwideDelivery'
  | 'overseasWarehouses'
  | 'valueAddedServices'
  | 'reverseLogistics'
  | 'logoAlt'

// 扩展的翻译映射 - 使用翻译文件中的内容
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 导航
    home: '首页',
    about: '关于我们',
    services: '服务体系',
    warehouses: '仓储网络',
    caseStudies: '客户案例',
    technology: '技术管理',
    contact: '联系我们',
    // 服务子菜单
    airFreight: '空运',
    seaFreight: '海运',
    contractLogistics: '合同物流',
    integratedIntermodalSolutions: '一体化联运解决方案',
    globalLocalPresence: '全球化当地布局',
    supplyChainSolutions: '供应链解决方案',
    firstLegLogistics: '头程物流',
    nationwideDelivery: '全国派送',
    overseasWarehouses: '海外仓储',
    valueAddedServices: '增值服务',
    reverseLogistics: '逆向物流',
    logoAlt: '可耐博达Kenable',
  },
  en: {
    // 导航
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    warehouses: 'Warehouses',
    caseStudies: 'Case Studies',
    technology: 'Technology',
    contact: 'Contact Us',
    // 服务子菜单 - 优化简洁版本
    airFreight: 'Air Freight',
    seaFreight: 'Sea Freight',
    contractLogistics: 'Contract Logistics',
    integratedIntermodalSolutions: 'Intermodal Solutions',
    globalLocalPresence: 'Global Presence',
    supplyChainSolutions: 'Supply Chain',
    firstLegLogistics: 'First-Mile',
    nationwideDelivery: 'Nationwide Delivery',
    overseasWarehouses: 'Overseas Warehouses',
    valueAddedServices: 'Value-Added',
    reverseLogistics: 'Reverse Logistics',
    logoAlt: 'Kenable Group - Logistics Solutions',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 联系我们按钮文本
const contactText = computed(() => getText('contact'))

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const openMobileSubmenus = ref<string[]>([])

// 响应式导航项 - 使用翻译
const navigationItems = computed(() => [
  { label: getText('home'), href: '/' },
  { label: getText('about'), href: '/about' },
  {
    label: getText('services'),
    href: '/services',
    children: [
      // 核心运输服务
      { label: getText('airFreight'), href: '/services/air-freight' },
      { label: getText('seaFreight'), href: '/services/sea-freight' },
      { label: getText('contractLogistics'), href: '/services/contract-logistics' },
      {
        label: getText('integratedIntermodalSolutions'),
        href: '/services/integrated-intermodal-solutions',
      },
      { label: getText('globalLocalPresence'), href: '/services/global-local-presence' },
      { label: getText('supplyChainSolutions'), href: '/services/supply-chain-solutions' },
      // 五大核心服务
      { label: getText('firstLegLogistics'), href: '/services/first-leg-logistics' },
      { label: getText('nationwideDelivery'), href: '/services/nationwide-delivery' },
      { label: getText('overseasWarehouses'), href: '/services/overseas-warehouses' },
      { label: getText('valueAddedServices'), href: '/services/value-added-services' },
      { label: getText('reverseLogistics'), href: '/services/reverse-logistics' },
    ],
  },
  { label: getText('warehouses'), href: '/warehouses' },
  { label: getText('caseStudies'), href: '/case-studies' },
  { label: getText('technology'), href: '/technology' },
])

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  openMobileSubmenus.value = []
}

const toggleMobileSubmenu = (href: string) => {
  const index = openMobileSubmenus.value.indexOf(href)
  if (index > -1) {
    openMobileSubmenus.value.splice(index, 1)
  } else {
    openMobileSubmenus.value.push(href)
  }
}

const handleContactClick = () => {
  router.push('/contact')
  closeMobileMenu()
}

const isActiveRoute = (href: string) => {
  if (href === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(href)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const headerClasses = computed(() => [
  'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
  isScrolled.value ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white',
])

// 计算移动端菜单的top位置 - 大厂标准
const mobileMenuTop = computed(() => {
  // 移动端 64px (h-16)，桌面端 72px (h-18)
  return window?.innerWidth >= 1024 ? '72px' : '64px'
})

// 添加点击外部关闭菜单的功能
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  const header = document.querySelector('header')

  if (isMobileMenuOpen.value && header && !header.contains(target)) {
    closeMobileMenu()
  }
}

// 添加键盘事件处理
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyPress)
  // 确保恢复body滚动
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* 组件特定样式 */
</style>
