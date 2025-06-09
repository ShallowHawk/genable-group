<template>
  <div class="sea-freight-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-cyan-200 mb-8 border border-cyan-400/30"
          >
            专业海洋货运服务
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">海运服务</h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            经济高效的海洋货运解决方案，适合大批量货物的跨境运输需求
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-cyan-900 hover:bg-gray-100 px-8 shadow-md"
            >
              获取海运报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8"
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
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">海运服务优势</h2>
            <p class="text-lg text-gray-600">专业的海洋货运团队，为您提供经济、可靠的运输服务</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="dollar" size="xl" class="text-cyan-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">经济实惠</h3>
              <p class="text-gray-600">成本优势明显，适合大批量货物运输</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="truck" size="xl" class="text-cyan-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">大货量</h3>
              <p class="text-gray-600">支持整箱、拼箱多种运输方式</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="globe" size="xl" class="text-cyan-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">全球航线</h3>
              <p class="text-gray-600">覆盖全球主要港口，定期班轮服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务类型 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">海运服务类型</h2>
            <p class="text-lg text-gray-600">多样化的海运解决方案，满足不同需求</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-200"
            >
              <h3 class="text-2xl font-bold text-gray-900 mb-4">整箱运输 (FCL)</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-cyan-600 mr-3" />
                  独享整个集装箱空间
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-cyan-600 mr-3" />
                  货物安全性更高
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-cyan-600 mr-3" />
                  适合大批量货物
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-cyan-600 mr-3" />
                  直接装卸，效率更高
                </li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 class="text-2xl font-bold text-gray-900 mb-4">拼箱运输 (LCL)</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-blue-600 mr-3" />
                  小批量货物的理想选择
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-blue-600 mr-3" />
                  成本控制更灵活
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-blue-600 mr-3" />
                  多频次发货选择
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-blue-600 mr-3" />
                  专业拼箱服务
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-cyan-900 to-blue-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">选择专业海运服务</h2>
          <p class="text-xl mb-12 text-gray-300">让我们为您提供最具性价比的海运解决方案</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-cyan-900 hover:bg-gray-100 px-8"
            >
              获取报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8"
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
