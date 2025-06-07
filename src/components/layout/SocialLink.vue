<template>
  <a
    :href="href"
    :aria-label="name"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-200"
  >
    <Icon :name="icon" size="md" />
  </a>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

export interface SocialLinkProps {
  href: string
  icon: string
  name: string
}

defineProps<SocialLinkProps>()
</script> 