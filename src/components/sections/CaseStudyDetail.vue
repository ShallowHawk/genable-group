<template>
  <section class="py-20 lg:py-32" :class="backgroundColor">
    <div class="container-section">
      <div class="max-w-7xl mx-auto">
        <!-- 案例卡片 -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <!-- 案例头部信息 -->
          <div
            class="bg-gradient-to-br from-primary-500 to-primary-600 px-8 lg:px-12 py-12 text-white"
          >
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-6">
                  <div
                    class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  >
                    <Icon :name="caseData.icon" size="xl" class="text-white" />
                  </div>
                  <div>
                    <span
                      class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white mb-2"
                    >
                      {{ caseData.industry }}
                    </span>
                    <div class="text-sm font-medium text-primary-100">成功案例</div>
                  </div>
                </div>

                <h3 class="text-3xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                  {{ caseData.title }}
                </h3>

                <p class="text-xl text-primary-100 leading-relaxed font-light max-w-4xl">
                  {{ caseData.description }}
                </p>
              </div>

              <!-- 关键数据指标 -->
              <div class="mt-8 lg:mt-0 lg:ml-12">
                <div class="grid grid-cols-3 gap-4">
                  <div v-for="(metric, index) in caseData.metrics" :key="index" class="text-center">
                    <div class="text-2xl lg:text-3xl font-black mb-1 text-white">
                      {{ metric.value }}
                    </div>
                    <div class="text-xs lg:text-sm text-primary-100 font-medium leading-tight">
                      {{ metric.label }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 主要内容区域 -->
          <div class="p-8 lg:p-12">
            <!-- 案例图片 -->
            <div class="relative overflow-hidden rounded-2xl shadow-2xl group mb-12">
              <img
                :src="caseData.image"
                :alt="caseData.title"
                class="w-full h-[300px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <!-- 渐变蒙版 -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              <!-- 图片上的品牌标识 -->
              <div
                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg"
              >
                <h4 class="text-xl font-bold text-gray-900 mb-1">{{ caseData.company }}</h4>
                <p class="text-sm text-gray-600 font-medium">{{ caseData.industry }}</p>
              </div>
            </div>

            <!-- 挑战与亮点 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <!-- 挑战 -->
              <div
                class="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 p-8 rounded-2xl"
              >
                <h4 class="font-black text-gray-900 mb-6 flex items-center text-xl">
                  <div
                    class="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Icon name="alert-triangle" size="sm" class="text-white" />
                  </div>
                  客户面临的挑战
                </h4>
                <p class="text-gray-700 leading-relaxed text-lg">{{ caseData.challenge }}</p>
              </div>

              <!-- 服务亮点 -->
              <div
                class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
              >
                <h5 class="font-black text-gray-900 mb-6 flex items-center text-xl">
                  <div
                    class="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Icon name="star" size="sm" class="text-white" />
                  </div>
                  服务亮点
                </h5>
                <div class="space-y-3">
                  <div
                    v-for="(highlight, index) in caseData.highlights"
                    :key="index"
                    class="flex items-center space-x-3"
                  >
                    <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span class="text-gray-700 font-medium">{{ highlight }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 解决方案 -->
            <div
              class="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 p-8 rounded-2xl mb-12"
            >
              <h4 class="font-black text-gray-900 mb-8 flex items-center text-2xl">
                <div
                  class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mr-4"
                >
                  <Icon name="lightbulb" size="lg" class="text-white" />
                </div>
                KENABLE 解决方案
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="(solution, index) in caseData.solutions"
                  :key="index"
                  class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  >
                    <Icon :name="solution.icon" size="sm" class="text-white" />
                  </div>
                  <h5 class="font-bold text-gray-900 mb-3 text-lg">{{ solution.title }}</h5>
                  <p class="text-gray-600 leading-relaxed">{{ solution.description }}</p>
                </div>
              </div>
            </div>

            <!-- 底部：成果和评价 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- 实施成果 -->
              <div
                class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-lg"
              >
                <h5 class="font-black mb-6 flex items-center text-xl">
                  <div
                    class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Icon name="trending-up" size="sm" class="text-white" />
                  </div>
                  实施成果
                </h5>
                <div class="grid grid-cols-2 gap-6">
                  <div v-for="(result, index) in caseData.results" :key="index" class="text-center">
                    <div class="text-2xl lg:text-3xl font-black mb-2">{{ result.value }}</div>
                    <div class="text-sm text-primary-100 font-medium">{{ result.metric }}</div>
                  </div>
                </div>
              </div>

              <!-- 客户评价 -->
              <div
                class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
              >
                <!-- 装饰性引号 -->
                <div class="absolute top-6 right-6 opacity-10">
                  <Icon name="quote" size="4xl" class="text-white" />
                </div>

                <div class="relative z-10">
                  <div class="flex items-center mb-6">
                    <div
                      class="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center mr-4"
                    >
                      <Icon name="star" size="sm" class="text-white" />
                    </div>
                    <h4 class="font-black text-white text-xl">客户评价</h4>
                  </div>

                  <blockquote class="text-gray-100 italic leading-relaxed mb-6 text-lg font-light">
                    "{{ caseData.testimonial.content }}"
                  </blockquote>

                  <footer class="flex items-center justify-between">
                    <div>
                      <div class="font-bold text-white text-lg">
                        {{ caseData.testimonial.author }}
                      </div>
                      <div class="text-gray-300 text-sm">{{ caseData.testimonial.position }}</div>
                      <div class="text-primary-300 text-sm font-medium">{{ caseData.company }}</div>
                    </div>

                    <!-- 五星评价 -->
                    <div class="flex items-center space-x-1">
                      <Icon
                        v-for="i in 5"
                        :key="i"
                        name="star"
                        size="sm"
                        class="text-yellow-400 fill-current"
                      />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

interface Solution {
  icon: string
  title: string
  description: string
}

interface Testimonial {
  content: string
  author: string
  position: string
}

interface Metric {
  value: string
  label: string
}

interface Result {
  value: string
  metric: string
}

interface CaseData {
  company: string
  industry: string
  title: string
  description: string
  challenge: string
  solutions: Solution[]
  testimonial: Testimonial
  image: string
  icon: string
  metrics: Metric[]
  highlights: string[]
  results: Result[]
}

interface Props {
  caseData: CaseData
  reverse?: boolean
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  backgroundColor: 'bg-white',
})
</script>

<style scoped>
/* 添加平滑过渡效果 */
.bg-white {
  transition: all 0.3s ease;
}

/* 图片悬停效果 */
.group:hover img {
  filter: brightness(1.1) contrast(1.05);
}

/* 内容区域动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-white {
  animation: fadeInUp 0.6s ease-out;
}

/* 卡片悬停效果 */
.hover\:shadow-md:hover {
  transform: translateY(-2px);
}

/* 客户评价模块装饰 */
.relative::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}
</style>
