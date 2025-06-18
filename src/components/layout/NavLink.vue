<template>
  <router-link :to="href" :class="linkClasses" @click="handleClick">
    {{ label }}
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  href: string
  label: string
  active?: boolean
  mobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  mobile: false,
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const linkClasses = computed(() => {
  if (props.mobile) {
    return [
      'mobile-nav-link',
      {
        'mobile-nav-link--active': props.active,
      },
    ]
  }

  return [
    'nav-link',
    {
      'nav-link--active': props.active,
    },
  ]
})

const handleClick = (event: Event) => {
  emit('click', event)
}
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  border-radius: 0.375rem;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link--active {
  color: #2563eb;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #374151;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  border-radius: 0.375rem;
  margin: 0.25rem 0;
  white-space: nowrap;
}

.mobile-nav-link:hover,
.mobile-nav-link--active {
  color: #2563eb;
  background-color: #eff6ff;
}

@media (max-width: 1023px) {
  .mobile-nav-link {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}
</style>
