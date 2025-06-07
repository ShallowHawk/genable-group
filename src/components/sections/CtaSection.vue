<template>
  <section
    class="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden"
  >
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
    </div>

    <div class="container-section relative z-10">
      <div class="text-center">
        <div class="mb-8">
          <h2 class="text-white font-black text-4xl lg:text-6xl mb-6 tracking-tight leading-tight">
            您的供应链挑战
            <span class="block text-yellow-300 mt-2">我们已有答案</span>
          </h2>

          <div class="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>

          <p
            class="text-blue-100 text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            立即与我们的资深物流专家沟通，获取为您量身定制的解决方案。
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <BaseButton
            variant="secondary"
            size="lg"
            class="px-10 py-5 text-xl font-bold rounded-2xl bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            @click="handleConsultation"
          >
            <Icon name="phone" size="lg" class="mr-3" />
            免费专家咨询
          </BaseButton>

          <BaseButton
            variant="outline"
            size="lg"
            class="px-10 py-5 text-xl font-bold rounded-2xl border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-2xl"
            @click="handleDownload"
          >
            <Icon name="download" size="lg" class="mr-3" />
            下载案例集
          </BaseButton>
        </div>

        <!-- 附加信息 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
          <div
            class="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
          >
            <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Icon name="clock" size="lg" class="text-gray-900" />
            </div>
            <div class="text-center">
              <div class="font-bold text-lg">24小时</div>
              <div class="text-sm text-blue-200">快速响应</div>
            </div>
          </div>
          <div
            class="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
          >
            <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Icon name="shield-check" size="lg" class="text-gray-900" />
            </div>
            <div class="text-center">
              <div class="font-bold text-lg">专业团队</div>
              <div class="text-sm text-blue-200">贴心服务</div>
            </div>
          </div>
          <div
            class="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
          >
            <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              <Icon name="star" size="lg" class="text-gray-900" />
            </div>
            <div class="text-center">
              <div class="font-bold text-lg">20+年</div>
              <div class="text-sm text-blue-200">行业经验</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'

const router = useRouter()

const handleConsultation = () => {
  router.push('/contact')
}

const handleDownload = () => {
  // 这里可以触发文件下载或跳转到下载页面
  console.log('Download case studies')
  // 可以实现实际的下载逻辑
}
</script>

<style scoped>
/* 添加动画效果 */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.absolute.inset-0 > div {
  animation: float 6s ease-in-out infinite;
}

.absolute.inset-0 > div:nth-child(2) {
  animation-delay: 2s;
}

.absolute.inset-0 > div:nth-child(3) {
  animation-delay: 4s;
}

/* 按钮悬停效果增强 */
button:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
