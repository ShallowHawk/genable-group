<template>
  <div class="road-rail-transport-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-orange-900 via-red-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-orange-200 mb-8 border border-orange-400/30"
          >
            专业陆路运输服务
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            公路与铁路运输
          </h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            灵活可靠的陆路运输网络，连接全国各地的高效物流服务
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-orange-900 hover:bg-gray-100 px-8 shadow-md"
            >
              获取运输报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8"
            >
              在线咨询
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 运输方式 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">运输方式</h2>
            <p class="text-lg text-gray-600">多样化的陆路运输选择，满足不同需求</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="truck" size="xl" class="text-orange-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">公路运输</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-orange-600 mr-3" />
                  门到门直达服务
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-orange-600 mr-3" />
                  灵活的发车时间
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-orange-600 mr-3" />
                  多种车型选择
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-orange-600 mr-3" />
                  快速响应需求
                </li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="train" size="xl" class="text-red-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">铁路运输</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-red-600 mr-3" />
                  大货量运输优势
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-red-600 mr-3" />
                  环保节能方案
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-red-600 mr-3" />
                  稳定的运输时效
                </li>
                <li class="flex items-center">
                  <Icon name="check" size="sm" class="text-red-600 mr-3" />
                  成本控制优势
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">陆路运输优势</h2>
            <p class="text-lg text-gray-600">专业的陆路运输团队，为您提供高效、安全的运输服务</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="clock" size="xl" class="text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">准时到达</h3>
              <p class="text-gray-600">99%准时率，确保您的货物按时送达</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="shield" size="xl" class="text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">安全保障</h3>
              <p class="text-gray-600">全程保险，专业司机，确保运输安全</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="map" size="xl" class="text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">覆盖全国</h3>
              <p class="text-gray-600">全国300+城市，一站式服务网络</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="phone" size="xl" class="text-orange-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">24小时服务</h3>
              <p class="text-gray-600">全天候客服支持，随时响应需求</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">服务流程</h2>
            <p class="text-lg text-gray-600">简单高效的服务流程，让运输更便捷</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                1
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">下单委托</h3>
              <p class="text-gray-600">在线下单或电话委托</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                2
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">上门取货</h3>
              <p class="text-gray-600">专业团队上门取货</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                3
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">运输配送</h3>
              <p class="text-gray-600">选择合适运输方式</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                4
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">实时跟踪</h3>
              <p class="text-gray-600">全程可视化跟踪</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                5
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">送达签收</h3>
              <p class="text-gray-600">安全送达，完成签收</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-orange-900 to-red-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">选择专业陆路运输</h2>
          <p class="text-xl mb-12 text-gray-300">让我们为您提供安全、快捷的陆路运输服务</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-orange-900 hover:bg-gray-100 px-8"
            >
              获取报价
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8"
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
