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
                alt="KENABLE GROUP" 
                style="height: 5vh;"
                class="h-20 w-auto max-w-none brightness-0 invert"
              />
            </div>
            <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              专业的跨境供应链解决方案提供商，致力于为全球电商企业提供端到端的物流服务。
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
            <h3 class="text-lg font-semibold mb-6">快速链接</h3>
            <ul class="space-y-4">
              <li v-for="link in quickLinks" :key="link.href">
                <router-link
                  :to="link.href"
                  class="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {{ link.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- 联系信息 -->
          <div>
            <h3 class="text-lg font-semibold mb-6">联系我们</h3>
            <div class="space-y-4">
              <contact-item
                icon="phone"
                label="电话"
                value="+1 (555) 123-4567"
              />
              <contact-item
                icon="mail"
                label="邮箱"
                value="info@kenablegroup.com"
              />
              <contact-item
                icon="map-pin"
                label="地址"
                value="美国加利福尼亚州洛杉矶市"
              />
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
            © {{ currentYear }} KENABLE GROUP. 保留所有权利。
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
import SocialLink from './SocialLink.vue'
import ContactItem from './ContactItem.vue'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'YouTube', href: '#', icon: 'youtube' }
]

const quickLinks = [
  { label: '关于我们', href: '/about' },
  { label: '服务体系', href: '/services' },
  { label: '仓储网络', href: '/warehouses' },
  { label: '客户案例', href: '/case-studies' },
  { label: '技术管理', href: '/technology' },
  { label: '新闻资讯', href: '/news' },
  { label: '联系我们', href: '/contact' }
]

const legalLinks = [
  { label: '隐私政策', href: '/privacy' },
  { label: '服务条款', href: '/terms' },
  { label: 'Cookie政策', href: '/cookies' }
]
</script>

<style scoped>
/* 组件特定样式 */
</style> 