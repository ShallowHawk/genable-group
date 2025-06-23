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
            @touchstart.passive="() => {}"
            class="lg:hidden p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            :class="{ 'pointer-events-none opacity-50': isMenuTransitioning }"
            :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'"
            :disabled="isMenuTransitioning"
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
          data-mobile-menu
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
                      @click="(event) => toggleMobileSubmenu(item.href, event)"
                      @touchstart.passive="() => {}"
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
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
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
const isMenuTransitioning = ref(false) // 添加过渡状态跟踪

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

// 改进的菜单切换函数 - 防止快速点击导致状态混乱
const toggleMobileMenu = async (event?: Event) => {
  // 防止事件冒泡
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  // 如果正在过渡中，忽略操作
  if (isMenuTransitioning.value) {
    return
  }

  isMenuTransitioning.value = true

  try {
    if (isMobileMenuOpen.value) {
      await closeMobileMenu()
    } else {
      await openMobileMenu()
    }
  } finally {
    // 确保过渡状态在操作完成后重置
    setTimeout(() => {
      isMenuTransitioning.value = false
    }, 350) // 略长于CSS过渡时间
  }
}

// 异步打开菜单
const openMobileMenu = async () => {
  await nextTick()
  isMobileMenuOpen.value = true

  // 防止背景滚动
  document.body.style.overflow = 'hidden'
  document.body.classList.add('mobile-menu-open')

  // 为iOS Safari特殊处理
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${window.scrollY}px`
  }
}

// 异步关闭菜单
const closeMobileMenu = async () => {
  // 记录当前滚动位置（iOS Safari）
  const scrollY = /iPad|iPhone|iPod/.test(navigator.userAgent)
    ? parseInt(document.body.style.top || '0') * -1
    : window.scrollY

  isMobileMenuOpen.value = false
  openMobileSubmenus.value = []

  // 恢复背景滚动
  document.body.style.overflow = ''
  document.body.classList.remove('mobile-menu-open')

  // iOS Safari特殊处理
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''
    window.scrollTo(0, scrollY)
  }

  await nextTick()
}

const toggleMobileSubmenu = async (href: string, event?: Event) => {
  // 防止事件冒泡
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  await nextTick()

  const index = openMobileSubmenus.value.indexOf(href)
  if (index > -1) {
    openMobileSubmenus.value.splice(index, 1)
  } else {
    openMobileSubmenus.value.push(href)
  }
}

const handleContactClick = async () => {
  await closeMobileMenu()
  router.push('/contact')
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

// 改进的外部点击处理 - 增加延迟和更精确的检测
const handleClickOutside = (event: Event) => {
  // 如果菜单没有打开或正在过渡，直接返回
  if (!isMobileMenuOpen.value || isMenuTransitioning.value) {
    return
  }

  const target = event.target as Element
  const header = document.querySelector('header')
  const mobileMenu = document.querySelector('[data-mobile-menu]')

  // 检查点击是否在header或移动菜单内部
  if (header && (header.contains(target) || (mobileMenu && mobileMenu.contains(target)))) {
    return
  }

  // 延迟执行关闭操作，确保不会与其他点击事件冲突
  setTimeout(() => {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }, 50)
}

// 键盘事件处理
const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value && !isMenuTransitioning.value) {
    closeMobileMenu()
  }
}

// 窗口大小变化处理
const handleResize = () => {
  // 如果切换到桌面端，自动关闭移动菜单
  if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// 路由变化监听
watch(route, () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})

// 监听菜单状态变化，确保状态同步
watch(isMobileMenuOpen, (newValue) => {
  if (!newValue) {
    // 菜单关闭时，确保所有子菜单也关闭
    openMobileSubmenus.value = []
  }
})

onMounted(async () => {
  await nextTick()

  // 初始化滚动处理
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // 添加事件监听器 - 增加防抖
  let clickTimeout: ReturnType<typeof setTimeout>
  const debouncedClickOutside = (event: Event) => {
    clearTimeout(clickTimeout)
    clickTimeout = setTimeout(() => handleClickOutside(event), 100)
  }

  document.addEventListener('click', debouncedClickOutside, { passive: true })
  document.addEventListener('keydown', handleKeyPress)
  window.addEventListener('resize', handleResize, { passive: true })

  // 确保初始状态正确
  if (isMobileMenuOpen.value) {
    await closeMobileMenu()
  }
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyPress)
  window.removeEventListener('resize', handleResize)

  // 恢复body样式
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  document.body.classList.remove('mobile-menu-open')
})
</script>

<style scoped>
/* 组件特定样式 */
</style>
