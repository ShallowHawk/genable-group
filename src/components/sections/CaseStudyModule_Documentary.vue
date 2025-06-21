<template>
  <Section :background="backgroundColor">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- 左侧文案 -->
        <div>
          <div class="mb-8">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {{ getSectionTitle() }}
            </h2>
            <h3 class="text-xl text-blue-600 font-semibold mb-6">
              {{ projectName }}
            </h3>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">
                {{ getChallengeSolutionTitle() }}
              </h4>
              <p class="text-gray-600 mb-4">
                <strong>{{ getChallengeLabel() }}</strong
                >{{ challenge }}
              </p>
              <p class="text-gray-600">
                <strong>{{ getSolutionLabel() }}</strong
                >{{ solution }}
              </p>
            </div>

            <div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">{{ getResultsTitle() }}</h4>
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
              v-if="image.caption"
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Section from '@/components/ui/Section.vue'

const { locale } = useI18n()

interface CaseImage {
  url: string
  alt?: string
  caption?: string
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

// Internal translation functions - hardcoded English
const getSectionTitle = (): string => {
  return locale.value === 'en' ? 'Kenable in Action' : '可耐博达在行动'
}

const getChallengeSolutionTitle = (): string => {
  return locale.value === 'en' ? 'Challenge & Solution' : '挑战与解决方案'
}

const getChallengeLabel = (): string => {
  return locale.value === 'en' ? 'Challenge: ' : '挑战：'
}

const getSolutionLabel = (): string => {
  return locale.value === 'en' ? 'Solution: ' : '解决方案：'
}

const getResultsTitle = (): string => {
  return locale.value === 'en' ? 'Implementation Results' : '实施成效'
}
</script>
