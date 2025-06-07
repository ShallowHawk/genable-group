<template>
  <div class="flex items-start space-x-3">
    <Icon :name="icon" size="md" class="text-primary-500 mt-0.5 flex-shrink-0" />
    <div>
      <div class="text-sm text-gray-400 mb-1">{{ label }}</div>
      <div class="text-gray-300">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

export interface ContactItemProps {
  icon: string
  label: string
  value: string
}

defineProps<ContactItemProps>()
</script> 