<template>
  <div class="multimodal-transport-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-purple-200 mb-8 border border-purple-400/30"
          >
            智能多式联运服务
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">多式联运</h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            整合多种运输方式的综合解决方案，为您提供最优化的物流路径
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-purple-900 hover:bg-gray-100 px-8 shadow-md"
            >
              获取联运方案
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8"
            >
              在线咨询
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 联运模式 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">多式联运模式</h2>
            <p class="text-lg text-gray-600">智能组合运输方式，实现成本、时效、安全的最优平衡</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="plane" size="xl" class="text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">海空联运</h3>
              <p class="text-gray-600">结合海运成本优势和空运时效优势，平衡成本与速度</p>
              <ul class="mt-4 space-y-2 text-sm text-gray-500">
                <li>• 比纯空运节省30-50%成本</li>
                <li>• 比纯海运节省50-70%时间</li>
                <li>• 适合中等批量货物</li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="truck" size="xl" class="text-indigo-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">陆海联运</h3>
              <p class="text-gray-600">海运主干线+陆运末端配送，覆盖内陆城市</p>
              <ul class="mt-4 space-y-2 text-sm text-gray-500">
                <li>• 覆盖内陆无海港城市</li>
                <li>• 门到门一站式服务</li>
                <li>• 大批量货物首选</li>
              </ul>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="train" size="xl" class="text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">铁海联运</h3>
              <p class="text-gray-600">铁路运输+海运组合，环保高效的长距离运输</p>
              <ul class="mt-4 space-y-2 text-sm text-gray-500">
                <li>• 环保节能运输方案</li>
                <li>• 稳定的运输时效</li>
                <li>• 适合跨国跨洲运输</li>
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
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">多式联运优势</h2>
            <p class="text-lg text-gray-600">智能化的运输路径规划，为您提供最优解决方案</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="optimize" size="xl" class="text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">成本优化</h3>
              <p class="text-gray-600">智能选择运输方式，平均节省20-40%物流成本</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="clock" size="xl" class="text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">时效平衡</h3>
              <p class="text-gray-600">在成本控制的前提下，确保合理的运输时效</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="leaf" size="xl" class="text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">绿色环保</h3>
              <p class="text-gray-600">优先选择环保运输方式，减少碳排放</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6"
              >
                <Icon name="shield" size="xl" class="text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">风险分散</h3>
              <p class="text-gray-600">多种运输方式组合，降低单一运输风险</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 智能规划 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">智能路径规划</h2>
            <p class="text-lg text-gray-600">基于大数据分析，为每批货物量身定制最优运输方案</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">核心算法优势</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-purple-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">实时数据分析</span>
                    <p class="text-gray-600 text-sm">实时分析运输成本、时效、运力情况</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-purple-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">智能路径选择</span>
                    <p class="text-gray-600 text-sm">基于历史数据和实时信息，自动推荐最优路径</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-purple-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">动态调整优化</span>
                    <p class="text-gray-600 text-sm">根据实际运输情况，动态调整运输方案</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-purple-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">风险预警系统</span>
                    <p class="text-gray-600 text-sm">提前预警可能的运输风险，制定应急预案</p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200"
            >
              <h4 class="text-xl font-bold text-gray-900 mb-4">方案比较示例</h4>
              <div class="space-y-4">
                <div class="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span class="text-gray-700">纯空运方案</span>
                  <span class="text-red-600 font-semibold">成本高 | 3-5天</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span class="text-gray-700">纯海运方案</span>
                  <span class="text-orange-600 font-semibold">成本低 | 25-30天</span>
                </div>
                <div
                  class="flex justify-between items-center p-3 bg-purple-100 rounded-lg border-2 border-purple-300"
                >
                  <span class="text-gray-700 font-semibold">多式联运方案</span>
                  <span class="text-purple-600 font-semibold">成本适中 | 12-15天</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-purple-900 to-indigo-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">体验智能多式联运</h2>
          <p class="text-xl mb-12 text-gray-300">让我们为您量身打造最优化的运输解决方案</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-purple-900 hover:bg-gray-100 px-8"
            >
              获取方案
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8"
            >
              专家咨询
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
