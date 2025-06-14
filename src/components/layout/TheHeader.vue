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
              alt="可耐博达Kenable"
              style="height: 5vh"
              class="h-16 w-auto max-w-none hover:scale-105 transition-transform duration-200"
            />
          </router-link>
        </div>

        <!-- 桌面端导航 -->
        <div class="hidden lg:flex items-center space-x-8">
          <template v-for="item in navigationItems" :key="item.href">
            <!-- 有子菜单的导航项 -->
            <div v-if="item.children" class="relative group">
              <router-link
                :to="item.href"
                class="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
      { label: '空运', href: '/services/air-freight' },
      { label: '海运', href: '/services/sea-freight' },
      { label: '合同物流', href: '/services/contract-logistics' },
      { label: '一体化联运解决方案', href: '/services/integrated-intermodal-solutions' },
      { label: '全球化当地布局', href: '/services/global-local-presence' },
      { label: '供应链解决方案', href: '/services/supply-chain-solutions' },
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
