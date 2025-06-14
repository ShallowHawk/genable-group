<template>
  <Section :background="backgroundColor">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 图片区域 -->
        <div :class="reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'">
          <img
            :src="imageUrl"
            :alt="imageAlt"
            class="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <!-- 文案区域 -->
        <div :class="reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {{ title }}
          </h2>

          <div class="space-y-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start space-x-4"
            >
              <div
                class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon :name="feature.icon" size="md" class="text-white" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import Icon from '@/components/ui/Icon.vue'

interface Feature {
  icon: string
  title: string
  description: string
}

interface Props {
  title: string
  imageUrl: string
  imageAlt?: string
  features: Feature[]
  reverse?: boolean
  backgroundColor?: string
}

withDefaults(defineProps<Props>(), {
  reverse: false,
  backgroundColor: 'gray',
  imageAlt: '',
})
</script>
