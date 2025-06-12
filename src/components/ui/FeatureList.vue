<template>
  <div class="feature-list">
    <!-- 网格布局 -->
    <div
      v-if="layout === 'grid'"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
    >
      <div v-for="(item, index) in items" :key="index" class="text-center feature-item group">
        <!-- 图标 -->
        <div class="mb-8">
          <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <div class="text-4xl" :class="iconColorClass">
              {{ getIcon(item.title) }}
            </div>
          </div>

          <!-- 特性标题 -->
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {{ item.title }}
          </h3>
        </div>

        <!-- 特性描述 -->
        <p class="text-gray-600 leading-relaxed text-lg">
          {{ item.description }}
        </p>
      </div>
    </div>

    <!-- 列表布局 -->
    <div v-else-if="layout === 'list'" class="space-y-8">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start space-x-6 feature-item"
      >
        <!-- 图标 -->
        <div class="flex-shrink-0">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center" :class="iconBgClass">
            <Icon :name="item.icon || 'check'" size="lg" :class="iconClass" />
          </div>
        </div>

        <!-- 内容 -->
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 卡片布局 -->
    <div v-else-if="layout === 'cards'" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 feature-item"
      >
        <!-- 图标和标题 -->
        <div class="flex items-center mb-6">
          <div
            class="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
            :class="iconBgClass"
          >
            <Icon :name="item.icon || 'star'" size="lg" :class="iconClass" />
          </div>
          <h3 class="text-xl font-bold text-gray-900">
            {{ item.title }}
          </h3>
        </div>

        <!-- 描述 -->
        <p class="text-gray-600 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/ui/Icon.vue'

interface FeatureItem {
  title: string
  description: string
  icon?: string
}

interface Props {
  items: FeatureItem[]
  layout?: 'grid' | 'list' | 'cards'
  iconColor?: 'blue' | 'cyan' | 'green' | 'purple' | 'orange'
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'grid',
  iconColor: 'blue',
})

// 根据标题生成对应的图标表情
const getIcon = (title: string): string => {
  const iconMap: Record<string, string> = {
    一站式全链路服务: '🔗',
    全国自有仓储网络: '🏭',
    丰富的行业与清关经验: '📋',
    高效的派送合作网络: '🚛',
    柔性定制化解决方案: '⚙️',
    卓越声誉与透明运营: '🤝',
    经验丰富: '🎯',
    时效稳定: '⏰',
    端到端无缝衔接: '🔄',
    资产安全保障: '🛡️',
    多式联运整合能力: '🌐',
    快速响应的地面支持: '⚡',
    专业处理能力: '💼',
    简化流程: '📊',
    深度定制: '🎨',
    自营网络掌控力: '🏗️',
    技术驱动: '💻',
    值得信赖的声誉: '⭐',
    强大的自有车队: '🚚',
    战略性网络布局: '🗺️',
    高效的执行力: '⚡',
    灵活的解决方案: '🔧',
    单一联系点: '☎️',
    流程的无缝整合: '🔗',
    成本与效率的优化: '📈',
    增强的可见性与控制力: '👁️',
    成本最优化: '💰',
    履约效率提升: '📦',
    市场响应能力提高: '📊',
    持续创新: '🚀',
  }

  return iconMap[title] || '✨'
}

const iconBgClass = computed(() => {
  const colorClasses = {
    blue: 'bg-blue-100',
    cyan: 'bg-cyan-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100',
  }

  return colorClasses[props.iconColor]
})

const iconClass = computed(() => {
  const colorClasses = {
    blue: 'text-blue-600',
    cyan: 'text-cyan-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
  }

  return colorClasses[props.iconColor]
})

const iconColorClass = computed(() => {
  return 'text-gray-700'
})
</script>

<style scoped>
.feature-item {
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
}
</style>
