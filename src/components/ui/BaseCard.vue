<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated'
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  hoverable: false,
  padding: 'md'
})

const cardClasses = computed(() => [
  'bg-white rounded-lg transition-all duration-200',
  {
    // 变体样式
    'border border-gray-200': props.variant === 'outlined',
    'shadow-lg': props.variant === 'elevated',
    'shadow-sm border border-gray-100': props.variant === 'default',
    
    // 悬停效果
    'hover:shadow-xl transform hover:-translate-y-1': props.hoverable,
    
    // 内边距
    'p-0': props.padding === 'none',
    'p-4': props.padding === 'sm',
    'p-6': props.padding === 'md',
    'p-8': props.padding === 'lg'
  }
])
</script>

<template>
  <div :class="cardClasses">
    <header v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </header>
    
    <div class="flex-1">
      <slot />
    </div>
    
    <footer v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </footer>
  </div>
</template> 