<template>
  <header :class="headerClasses">
    <nav class="container-section">
      <div class="flex items-center justify-between h-20">
        <!-- Logo区域 -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <!-- KENABLE Logo -->
            <img 
              src="@/assets/kenable_logo.svg" 
              alt="KENABLE GROUP" 
              style="height: 5vh;"
              class="h-16 w-auto max-w-none hover:scale-105 transition-transform duration-200"
            />
          </router-link>
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden lg:flex items-center space-x-8">
          <nav-link
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            :label="item.label"
            :active="isActiveRoute(item.href)"
          />
        </div>

        <!-- CTA按钮和移动端菜单按钮 -->
        <div class="flex items-center space-x-4">
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
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg"
      >
        <div class="container-section py-4">
          <div class="flex flex-col space-y-4">
            <nav-link
              v-for="item in navigationItems"
              :key="item.href"
              :href="item.href"
              :label="item.label"
              :active="isActiveRoute(item.href)"
              mobile
              @click="closeMobileMenu"
            />
            
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

const navigationItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '服务体系', href: '/services' },
  { label: '仓储网络', href: '/warehouses' },
  { label: '客户案例', href: '/case-studies' },
  { label: '技术管理', href: '/technology' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
  isScrolled.value
    ? 'bg-white/95 backdrop-blur-sm shadow-md'
    : 'bg-white'
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 组件特定样式 */
</style> 