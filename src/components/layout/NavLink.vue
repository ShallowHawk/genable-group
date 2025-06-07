<template>
  <router-link
    :to="href"
    :class="linkClasses"
    @click="$emit('click')"
  >
    {{ label }}
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface NavLinkProps {
  href: string
  label: string
  active?: boolean
  mobile?: boolean
}

const props = withDefaults(defineProps<NavLinkProps>(), {
  active: false,
  mobile: false
})

defineEmits<{
  click: []
}>()

const linkClasses = computed(() => {
  const baseClasses = [
    'font-medium transition-colors duration-200 relative'
  ]

  const mobileClasses = props.mobile
    ? [
        'block px-4 py-3 rounded-lg text-base',
        props.active
          ? 'bg-primary-50 text-primary-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
      ]
    : [
        'text-sm hover:text-primary-600',
        props.active
          ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500'
          : 'text-gray-700'
      ]

  return [
    ...baseClasses,
    ...mobileClasses
  ].filter(Boolean).join(' ')
})
</script> 