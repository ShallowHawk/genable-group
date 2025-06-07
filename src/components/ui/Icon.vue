<template>
  <component :is="iconComponent" v-if="iconComponent" :class="classes" v-bind="$attrs" />
  <div
    v-else
    :class="classes"
    class="bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { computed, shallowRef, watchEffect } from 'vue'

export interface IconProps {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  class?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
})

const iconComponent = shallowRef()

watchEffect(async () => {
  try {
    const iconName = props.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    const module = (await import('lucide-vue-next')) as any
    iconComponent.value = module[iconName] || module[props.name] || null
  } catch (error) {
    console.warn(`Icon "${props.name}" not found`)
    iconComponent.value = null
  }
})

const classes = computed(() => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10',
    '3xl': 'w-12 h-12',
    '4xl': 'w-16 h-16',
  }

  return [sizeClasses[props.size], 'flex-shrink-0', props.class].filter(Boolean).join(' ')
})
</script>
