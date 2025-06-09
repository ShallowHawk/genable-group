<template>
  <div class="contract-logistics-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-emerald-900 via-green-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-emerald-200 mb-8 border border-emerald-400/30"
          >
            专业合同物流服务
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">合同物流</h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            定制化的供应链管理服务，为您提供一站式物流解决方案
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-emerald-900 hover:bg-gray-100 px-8 shadow-md"
            >
              定制方案
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8"
            >
              在线咨询
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务范围 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">合同物流服务范围</h2>
            <p class="text-lg text-gray-600">全方位的供应链管理服务，助力企业专注核心业务</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="warehouse" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">仓储管理</h3>
              <p class="text-gray-600">专业的仓储运营管理，确保货物安全高效存储</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="truck" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">配送服务</h3>
              <p class="text-gray-600">覆盖全国的配送网络，准时送达每个订单</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="chart" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">库存优化</h3>
              <p class="text-gray-600">智能库存管理，降低库存成本，提高资金周转</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="cog" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">订单处理</h3>
              <p class="text-gray-600">自动化订单处理系统，提高订单履行效率</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="refresh" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">逆向物流</h3>
              <p class="text-gray-600">完善的退货处理流程，提升客户满意度</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div
                class="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name="monitor" size="xl" class="text-emerald-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">数据分析</h3>
              <p class="text-gray-600">详细的运营数据分析，支持业务决策</p>
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
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              为什么选择我们的合同物流
            </h2>
            <p class="text-lg text-gray-600">专业的团队和先进的技术，为您提供卓越的物流服务</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">专业优势</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">20年物流运营经验</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">通过ISO质量认证</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">专业的物流运营团队</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">行业领先的服务标准</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">技术优势</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">先进的WMS仓储管理系统</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">实时数据跟踪与分析</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">API对接，无缝集成</span>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-emerald-600 mr-3 mt-1" />
                  <span class="text-gray-600">智能调度优化算法</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-emerald-900 to-green-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">开启合作，共创价值</h2>
          <p class="text-xl mb-12 text-gray-300">让我们成为您值得信赖的物流合作伙伴</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-emerald-900 hover:bg-gray-100 px-8"
            >
              定制方案
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8"
            >
              预约参观
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
