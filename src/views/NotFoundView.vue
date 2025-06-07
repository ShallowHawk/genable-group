<template>
  <PageLayout :show-page-header="false">
    <section class="py-24 lg:py-32 bg-white">
      <div class="container-section text-center">
        <div class="max-w-3xl mx-auto">
          <!-- 404 图标 -->
          <div class="mb-8">
            <div class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="file-x" size="4xl" class="text-gray-400" />
            </div>
            <h1 class="text-6xl lg:text-8xl font-bold text-gray-900 mb-4">404</h1>
          </div>

          <!-- 错误信息 -->
          <div class="mb-12">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              页面未找到
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              抱歉，您访问的页面不存在或已被移动。
            </p>
            <p class="text-gray-500">
              请检查URL是否正确，或返回首页继续浏览。
            </p>
          </div>

          <!-- 操作按钮 -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <BaseButton 
              as="router-link" 
              to="/" 
              variant="primary" 
              size="lg"
            >
              <Icon name="home" size="sm" class="mr-2" />
              返回首页
            </BaseButton>
            
            <BaseButton 
              @click="goBack" 
              variant="outline" 
              size="lg"
            >
              <Icon name="arrow-left" size="sm" class="mr-2" />
              返回上页
            </BaseButton>
          </div>

          <!-- 推荐链接 -->
          <div class="border-t border-gray-200 pt-12">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">
              您可能感兴趣的页面
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <router-link
                v-for="link in suggestedLinks"
                :key="link.name"
                :to="link.path"
                class="group p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200">
                  <Icon :name="link.icon" size="lg" class="text-primary-500" />
                </div>
                <h4 class="font-semibold text-gray-900 mb-2">{{ link.title }}</h4>
                <p class="text-sm text-gray-600">{{ link.description }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'

const router = useRouter()

// 返回上一页
const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}

// 推荐页面链接
const suggestedLinks = [
  {
    name: 'about',
    path: '/about',
    title: '关于我们',
    description: '了解KENABLE GROUP的发展历程',
    icon: 'users'
  },
  {
    name: 'services',
    path: '/services',
    title: '服务体系',
    description: '查看我们的专业物流服务',
    icon: 'truck'
  },
  {
    name: 'contact',
    path: '/contact',
    title: '联系我们',
    description: '获取专业的物流解决方案',
    icon: 'phone'
  },
  {
    name: 'warehouses',
    path: '/warehouses',
    title: '仓储网络',
    description: '全美4大配送中心介绍',
    icon: 'warehouse'
  }
]
</script>

<style scoped>
/* 组件特定样式 */
</style> 