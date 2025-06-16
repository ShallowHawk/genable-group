<template>
  <header :class="headerClasses">
    <nav class="container-section">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <!-- KENABLE Logo -->
            <img
              src="@/assets/kenable_logo.svg"
              alt="可耐博达Kenable"
              class="h-10 md:h-16 w-auto max-w-none hover:scale-105 transition-transform duration-200"
            />
          </router-link>
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden lg:flex items-center space-x-4">
          <template v-for="item in navigationItems" :key="item.href">
            <!-- 有子菜单的导航项 -->
            <div v-if="item.children" class="relative group">
              <router-link
                :to="item.href"
                class="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
                class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              >
                <div class="py-2">
                  <router-link
                    v-for="child in item.children"
                    :key="child.href"
                    :to="child.href"
                    class="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
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

        <!-- CTA按钮和移动端菜单按钮 -->
        <div class="flex items-center space-x-3">
          <!-- 联系我们按钮 (桌面端) -->
          <BaseButton
            variant="primary"
            size="md"
            class="hidden lg:inline-flex"
            @click="$router.push('/contact')"
          >
            联系我们
          </BaseButton>

          <!-- 移动端菜单按钮 -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Icon :name="isMobileMenuOpen ? 'x' : 'menu'" size="lg" />
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

              <!-- 移动端CTA按钮 -->
              <BaseButton
                variant="primary"
                size="md"
                fullWidth
                class="mt-4"
                @click="handleContactClick"
              >
                联系我们
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
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
import NavLink from './NavLink.vue'

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const openMobileSubmenus = ref<string[]>([])

const navigationItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  {
    label: '服务体系',
    href: '/services',
    children: [
      // 核心运输服务
      { label: '空运', href: '/services/air-freight' },
      { label: '海运', href: '/services/sea-freight' },
      { label: '合同物流', href: '/services/contract-logistics' },
      { label: '一体化联运解决方案', href: '/services/integrated-intermodal-solutions' },
      { label: '全球化当地布局', href: '/services/global-local-presence' },
      { label: '供应链解决方案', href: '/services/supply-chain-solutions' },
      // 五大核心服务
      { label: '头程物流', href: '/services/first-leg-logistics' },
      { label: '全国派送', href: '/services/nationwide-delivery' },
      { label: '海外仓储', href: '/services/overseas-warehouses' },
      { label: '增值服务', href: '/services/value-added-services' },
      { label: '逆向物流', href: '/services/reverse-logistics' },
    ],
  },
  { label: '仓储网络', href: '/warehouses' },
  { label: '客户案例', href: '/case-studies' },
  { label: '技术管理', href: '/technology' },
]

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

// 计算移动端菜单的top位置
const mobileMenuTop = computed(() => {
  // 移动端 64px (h-16)，桌面端 80px (h-20)
  return window?.innerWidth >= 768 ? '80px' : '64px'
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
