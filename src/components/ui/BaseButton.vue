<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'a' ? href : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :class="buttonClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="loading" class="animate-spin mr-2">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    
    <Icon v-if="icon && !loading" :name="icon" :class="iconClasses" />
    
    <span :class="{ 'sr-only': iconOnly }">
      <slot />
    </span>
    
    <Icon v-if="iconRight && !loading" :name="iconRight" :class="iconRightClasses" />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  tag?: 'button' | 'a' | 'router-link'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  to?: string | object
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconRight?: string
  iconOnly?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  type: 'button',
  disabled: false,
  loading: false,
  iconOnly: false,
  fullWidth: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-semibold transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'relative'
  ]

  // 变体样式
  const variantClasses = {
    primary: [
      'bg-primary-500 text-white border border-transparent',
      'hover:bg-primary-600 focus:ring-primary-500',
      'active:bg-primary-700'
    ],
    secondary: [
      'bg-accent-500 text-white border border-transparent',
      'hover:bg-accent-600 focus:ring-accent-500',
      'active:bg-accent-700'
    ],
    outline: [
      'bg-transparent text-primary-500 border-2 border-primary-500',
      'hover:bg-primary-500 hover:text-white focus:ring-primary-500',
      'active:bg-primary-600 active:border-primary-600'
    ],
    ghost: [
      'bg-transparent text-primary-500 border border-transparent',
      'hover:bg-primary-50 focus:ring-primary-500',
      'active:bg-primary-100'
    ],
    danger: [
      'bg-red-500 text-white border border-transparent',
      'hover:bg-red-600 focus:ring-red-500',
      'active:bg-red-700'
    ]
  }

  // 尺寸样式
  const sizeClasses = {
    sm: props.iconOnly ? 'p-2' : 'px-3 py-2 text-sm',
    md: props.iconOnly ? 'p-3' : 'px-4 py-3 text-base',
    lg: props.iconOnly ? 'p-4' : 'px-6 py-4 text-lg',
    xl: props.iconOnly ? 'p-5' : 'px-8 py-5 text-xl'
  }

  // 圆角样式
  const roundedClasses = {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    sizeClasses[props.size],
    roundedClasses[props.size],
    props.fullWidth ? 'w-full' : '',
    props.iconOnly ? 'aspect-square' : ''
  ].filter(Boolean).join(' ')
})

const iconClasses = computed(() => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }

  return [
    sizeClasses[props.size],
    !props.iconOnly ? 'mr-2' : ''
  ].filter(Boolean).join(' ')
})

const iconRightClasses = computed(() => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }

  return [
    sizeClasses[props.size],
    'ml-2'
  ].join(' ')
})
</script> 