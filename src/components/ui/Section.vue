<template>
  <section :class="[sectionClasses, backgroundClass]">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- 标题区域 -->
        <div v-if="title || $slots.header" class="text-center mb-16 lg:mb-20">
          <slot name="header">
            <h2
              v-if="title"
              class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {{ title }}
            </h2>
            <p
              v-if="subtitle"
              class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              {{ subtitle }}
            </p>
          </slot>
        </div>

        <!-- 主要内容 -->
        <div class="section-content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  background?: 'white' | 'gray' | 'dark' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  padding: 'lg',
  maxWidth: 'lg',
})

const sectionClasses = computed(() => {
  const paddingClasses = {
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-32',
  }

  return paddingClasses[props.padding]
})

const backgroundClass = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-blue-50',
  }

  return backgrounds[props.background]
})
</script>
