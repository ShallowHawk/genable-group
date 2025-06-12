<template>
  <div
    class="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
    :class="[
      cardVariant === 'gradient' && 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200',
      cardVariant === 'dark' &&
        'bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700',
    ]"
  >
    <!-- 图标区域 -->
    <div class="mb-6">
      <div
        v-if="iconName"
        class="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        :class="[cardVariant === 'dark' ? 'bg-blue-600' : 'bg-blue-100', iconBgClass]"
      >
        <Icon :name="iconName" size="xl" :class="iconClass" />
      </div>
      <slot v-else name="icon" />
    </div>

    <!-- 标题 -->
    <h3
      class="text-xl lg:text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors"
      :class="cardVariant === 'dark' ? 'text-white group-hover:text-blue-400' : 'text-gray-900'"
    >
      {{ title }}
    </h3>

    <!-- 描述 -->
    <p class="leading-relaxed" :class="cardVariant === 'dark' ? 'text-gray-300' : 'text-gray-600'">
      {{ description }}
    </p>

    <!-- 特性列表（可选） -->
    <ul v-if="features && features.length > 0" class="mt-6 space-y-3">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center"
        :class="cardVariant === 'dark' ? 'text-gray-300' : 'text-gray-600'"
      >
        <Icon
          name="check"
          size="sm"
          :class="cardVariant === 'dark' ? 'text-blue-400' : 'text-blue-600'"
          class="mr-3 flex-shrink-0"
        />
        {{ feature }}
      </li>
    </ul>

    <!-- 自定义内容插槽 -->
    <div v-if="$slots.default" class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/ui/Icon.vue'

interface Props {
  title: string
  description: string
  iconName?: string
  features?: string[]
  cardVariant?: 'default' | 'gradient' | 'dark'
  iconColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  cardVariant: 'default',
  iconColor: 'blue',
})

const iconBgClass = computed(() => {
  const colorClasses = {
    blue: props.cardVariant === 'dark' ? 'bg-blue-600' : 'bg-blue-100',
    cyan: props.cardVariant === 'dark' ? 'bg-cyan-600' : 'bg-cyan-100',
    green: props.cardVariant === 'dark' ? 'bg-green-600' : 'bg-green-100',
    purple: props.cardVariant === 'dark' ? 'bg-purple-600' : 'bg-purple-100',
    orange: props.cardVariant === 'dark' ? 'bg-orange-600' : 'bg-orange-100',
  }

  return colorClasses[props.iconColor as keyof typeof colorClasses] || colorClasses.blue
})

const iconClass = computed(() => {
  const colorClasses = {
    blue: props.cardVariant === 'dark' ? 'text-white' : 'text-blue-600',
    cyan: props.cardVariant === 'dark' ? 'text-white' : 'text-cyan-600',
    green: props.cardVariant === 'dark' ? 'text-white' : 'text-green-600',
    purple: props.cardVariant === 'dark' ? 'text-white' : 'text-purple-600',
    orange: props.cardVariant === 'dark' ? 'text-white' : 'text-orange-600',
  }

  return colorClasses[props.iconColor as keyof typeof colorClasses] || colorClasses.blue
})
</script>
