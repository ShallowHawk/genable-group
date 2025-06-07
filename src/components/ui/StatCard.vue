<template>
  <div class="text-center">
    <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon :name="icon" size="xl" class="text-primary-500" />
    </div>
    <div class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
      {{ value }}<span v-if="suffix" class="text-2xl">{{ suffix }}</span>
    </div>
    <div class="text-lg font-semibold text-gray-700 mb-1">{{ label }}</div>
    <div class="text-sm text-gray-500">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'

export interface StatCardProps {
  label: string
  value: string
  suffix?: string
  description: string
  icon: string
}

defineProps<StatCardProps>()
</script> 