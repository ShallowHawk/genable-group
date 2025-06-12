<template>
  <div
    class="case-study-card bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
  >
    <!-- 装饰性引号 -->
    <div class="absolute top-6 right-6 opacity-10">
      <Icon name="quote" size="4xl" class="text-white" />
    </div>

    <!-- 背景闪光效果 -->
    <div class="absolute inset-0 opacity-20">
      <div class="shine-effect"></div>
    </div>

    <div class="relative z-10">
      <!-- 案例标题 -->
      <div class="flex items-center mb-8">
        <div
          class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
        >
          <Icon name="star" size="md" class="text-white" />
        </div>
        <h4 class="font-black text-white text-2xl">{{ cardTitle || '客户案例' }}</h4>
      </div>

      <!-- 客户Logo和公司信息 -->
      <div class="flex items-center mb-6">
        <div
          v-if="clientLogoUrl"
          class="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4 shadow-lg"
        >
          <img
            :src="clientLogoUrl"
            :alt="clientName + ' Logo'"
            class="max-w-12 max-h-12 object-contain"
          />
        </div>
        <div
          v-else
          class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-lg"
        >
          <span class="text-2xl text-white">{{ getCompanyIcon(clientName) }}</span>
        </div>
        <div>
          <h5 class="text-xl font-bold text-white">{{ clientName }}</h5>
          <p v-if="industry" class="text-blue-300 text-sm">{{ industry }}</p>
        </div>
      </div>

      <!-- 案例内容 -->
      <blockquote class="text-gray-100 italic leading-relaxed mb-8 text-xl lg:text-2xl font-light">
        "{{ text }}"
      </blockquote>

      <!-- 底部信息 -->
      <footer class="flex items-center justify-between">
        <div>
          <div v-if="contactPerson" class="font-bold text-white text-xl mb-1">
            {{ contactPerson }}
          </div>
          <div v-if="position" class="text-gray-300 text-lg mb-1">{{ position }}</div>
          <div class="text-blue-300 text-lg font-medium">{{ clientName }}</div>
        </div>

        <!-- 五星评价 -->
        <div v-if="rating" class="flex items-center space-x-1">
          <Icon
            v-for="i in rating"
            :key="i"
            name="star"
            size="md"
            class="text-yellow-400 fill-current"
          />
        </div>
      </footer>
    </div>

    <!-- 背景装饰效果 -->
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
    <div
      class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
    ></div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

interface Props {
  clientLogoUrl?: string
  clientName: string
  text: string
  industry?: string
  contactPerson?: string
  position?: string
  rating?: number
  cardTitle?: string
}

defineProps<Props>()

// 根据公司名称生成对应的图标
const getCompanyIcon = (companyName: string): string => {
  const iconMap: Record<string, string> = {
    正泰集团: '⚡',
    'Cushion Lab': '🪑',
    Chint: '⚡',
    CHINT: '⚡',
  }

  return iconMap[companyName] || '🏢'
}
</script>

<style scoped>
/* 背景闪光效果 */
.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: skewX(-25deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 案例卡片悬停效果 */
.case-study-card:hover .shine-effect {
  animation-duration: 1.5s;
}

/* 星星填充效果 */
.fill-current {
  fill: currentColor;
}
</style>
