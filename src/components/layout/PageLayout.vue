<template>
  <div class="page-layout">
    <!-- 页面头部区域 -->
    <section v-if="showPageHeader" class="bg-gray-50 py-12 lg:py-16">
      <div class="container-section">
        <!-- 面包屑导航 -->
        <nav v-if="breadcrumbs.length > 0" class="mb-6">
          <ol class="flex items-center space-x-2 text-sm text-gray-600">
            <li v-for="(crumb, index) in breadcrumbs" :key="crumb.href" class="flex items-center">
              <router-link
                v-if="index < breadcrumbs.length - 1"
                :to="crumb.href"
                class="hover:text-primary-600 transition-colors"
              >
                {{ crumb.label }}
              </router-link>
              <span v-else class="text-gray-900 font-medium">{{ crumb.label }}</span>
              <Icon
                v-if="index < breadcrumbs.length - 1"
                name="chevron-right"
                size="xs"
                class="ml-2 text-gray-400"
              />
            </li>
          </ol>
        </nav>

        <!-- 页面标题 -->
        <div class="max-w-4xl">
          <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            {{ pageTitle }}
          </h1>
          <p v-if="pageDescription" class="text-xl text-gray-600 leading-relaxed">
            {{ pageDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main>
      <slot />
    </main>

    <!-- 返回顶部按钮 -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all duration-200 hover:scale-110"
      aria-label="返回顶部"
    >
      <Icon name="arrow-up" size="md" class="mx-auto" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'

export interface PageLayoutProps {
  pageTitle?: string
  pageDescription?: string
  showPageHeader?: boolean
  customBreadcrumbs?: Array<{ label: string; href: string }>
}

const props = withDefaults(defineProps<PageLayoutProps>(), {
  showPageHeader: true
})

const route = useRoute()
const showBackToTop = ref(false)

// 面包屑导航
const breadcrumbs = computed(() => {
  if (props.customBreadcrumbs) {
    return [{ label: '首页', href: '/' }, ...props.customBreadcrumbs]
  }

  const crumbs = [{ label: '首页', href: '/' }]
  
  // 根据当前路由生成面包屑
  const routeNames: Record<string, string> = {
    about: '关于我们',
    services: '服务体系',
    warehouses: '仓储网络',
    'case-studies': '客户案例',
    technology: '技术与精细管理',
    contact: '联系我们',
    news: '新闻资讯',
    privacy: '隐私政策',
    terms: '服务条款',
    cookies: 'Cookie政策'
  }

  if (route.name && route.name !== 'home' && routeNames[route.name as string]) {
    crumbs.push({
      label: routeNames[route.name as string],
      href: route.path
    })
  }

  return crumbs
})

// 滚动处理
const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 组件特定样式 */
</style> 