<template>
  <Section :background="backgroundColor">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧文案 -->
        <div>
          <div class="mb-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">可耐博达在行动</h2>
            <h3 class="text-xl text-blue-600 font-semibold mb-6">
              {{ projectName }}
            </h3>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">挑战与解决方案</h4>
              <p class="text-gray-600 mb-4"><strong>挑战：</strong>{{ challenge }}</p>
              <p class="text-gray-600"><strong>解决方案：</strong>{{ solution }}</p>
            </div>

            <div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">实施成效</h4>
              <p class="text-gray-600">{{ results }}</p>
            </div>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="space-y-4">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img :src="image.url" :alt="image.alt" class="w-full h-48 object-cover" />
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
            >
              <p class="text-white text-sm font-medium">{{ image.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section.vue'

interface CaseImage {
  url: string
  alt: string
  caption: string
}

interface Props {
  projectName: string
  challenge: string
  solution: string
  results: string
  images: CaseImage[]
  backgroundColor?: 'white' | 'gray' | 'dark' | 'gradient'
}

withDefaults(defineProps<Props>(), {
  backgroundColor: 'white',
})
</script>
