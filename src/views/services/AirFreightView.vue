<template>
  <div class="air-freight-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-8 border border-blue-400/30"
          >
            专业航空货运服务
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">空运服务</h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            快速、安全的国际航空运输解决方案，为您的货物提供最快捷的跨境运输服务
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-blue-900 hover:bg-gray-100 px-8 shadow-md"
            >
              获取空运报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8"
            >
              在线咨询
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">空运服务优势</h2>
            <p class="text-lg text-gray-600">专业的航空货运团队，为您提供高效、安全的运输服务</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="clock" size="xl" class="text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">快速时效</h3>
              <p class="text-gray-600">2-5天全球直达，紧急货物24小时加急处理</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="shield" size="xl" class="text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">安全保障</h3>
              <p class="text-gray-600">全程保险保障，专业包装，确保货物安全</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="globe" size="xl" class="text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">全球网络</h3>
              <p class="text-gray-600">覆盖全球200+城市，一站式门到门服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">服务流程</h2>
            <p class="text-lg text-gray-600">标准化的服务流程，确保高效运输</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                1
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">货物揽收</h3>
              <p class="text-gray-600">专业团队上门揽收，检查包装</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                2
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">报关清关</h3>
              <p class="text-gray-600">专业报关团队，快速通关</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                3
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">航空运输</h3>
              <p class="text-gray-600">优质航班资源，确保准时起飞</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                4
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">目的地派送</h3>
              <p class="text-gray-600">末端配送，安全送达</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-blue-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">立即体验专业空运服务</h2>
          <p class="text-xl mb-12 text-gray-300">联系我们获取专属空运方案和优惠价格</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-blue-900 hover:bg-gray-100 px-8"
            >
              获取报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8"
            >
              联系客服
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
</script>
