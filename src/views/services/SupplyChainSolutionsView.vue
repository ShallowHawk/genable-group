<template>
  <div class="supply-chain-solutions-page">
    <!-- Hero区域 -->
    <section
      class="relative bg-gradient-to-br from-teal-900 via-green-800 to-slate-800 py-20 lg:py-32"
    >
      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center bg-teal-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-teal-200 mb-8 border border-teal-400/30"
          >
            端到端供应链解决方案
          </div>

          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            供应链解决方案
          </h1>

          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            端到端的供应链优化服务，帮助企业构建高效、敏捷、可持续的供应链体系
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-teal-900 hover:bg-gray-100 px-8 shadow-md"
            >
              定制供应链方案
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8"
            >
              专家咨询
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- 解决方案范围 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">全链条供应链服务</h2>
            <p class="text-lg text-gray-600">从采购到交付的全流程供应链管理，助力企业降本增效</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="search" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">供应商管理</h3>
              <p class="text-gray-600">全球供应商网络管理，采购策略优化，降低采购成本</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="warehouse" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">库存优化</h3>
              <p class="text-gray-600">智能库存管理，安全库存计算，提高资金周转率</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="truck" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">物流网络</h3>
              <p class="text-gray-600">物流网络设计与优化，运输路径规划，降低物流成本</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="chart" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">需求预测</h3>
              <p class="text-gray-600">基于大数据的需求预测，提高预测准确性，减少缺货风险</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="shield" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">风险管理</h3>
              <p class="text-gray-600">供应链风险识别与预警，建立供应链韧性，确保业务连续性</p>
            </div>

            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="monitor" size="xl" class="text-teal-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">数字化转型</h3>
              <p class="text-gray-600">供应链数字化平台搭建，实现供应链全程可视化管理</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数字化平台 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">智能供应链平台</h2>
            <p class="text-lg text-gray-600">先进的数字化平台，实现供应链全程透明化管理</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">平台核心功能</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-teal-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">实时可视化</span>
                    <p class="text-gray-600 text-sm">供应链全程实时跟踪，可视化仪表板</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-teal-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">智能预警</span>
                    <p class="text-gray-600 text-sm">异常情况自动预警，风险提前识别</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-teal-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">数据分析</span>
                    <p class="text-gray-600 text-sm">深度数据分析，为决策提供数据支持</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-teal-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">协同管理</span>
                    <p class="text-gray-600 text-sm">多方协同工作平台，提高协作效率</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <Icon name="check" size="sm" class="text-teal-600 mr-3 mt-1" />
                  <div>
                    <span class="font-semibold text-gray-900">AI优化</span>
                    <p class="text-gray-600 text-sm">人工智能算法，持续优化供应链性能</p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              class="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl border border-teal-200"
            >
              <h4 class="text-xl font-bold text-gray-900 mb-6">平台效益</h4>
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <span class="text-gray-700">库存成本降低</span>
                  <span class="text-teal-600 font-bold text-xl">15-25%</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-700">订单履行效率提升</span>
                  <span class="text-teal-600 font-bold text-xl">30-40%</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-700">预测准确率提升</span>
                  <span class="text-teal-600 font-bold text-xl">20-35%</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-700">供应链响应速度提升</span>
                  <span class="text-teal-600 font-bold text-xl">50%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行业解决方案 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">行业定制解决方案</h2>
            <p class="text-lg text-gray-600">深入理解不同行业特点，提供针对性的供应链解决方案</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
              <div
                class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="shopping" size="lg" class="text-teal-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">电商零售</h3>
              <p class="text-gray-600 text-sm">快速响应，灵活配送，提升客户体验</p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
              <div
                class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="factory" size="lg" class="text-teal-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">制造业</h3>
              <p class="text-gray-600 text-sm">精益生产，准时交付，降低库存成本</p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
              <div
                class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="health" size="lg" class="text-teal-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">医药健康</h3>
              <p class="text-gray-600 text-sm">冷链管理，合规运输，确保产品质量</p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-lg text-center">
              <div
                class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="car" size="lg" class="text-teal-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">汽车行业</h3>
              <p class="text-gray-600 text-sm">准时生产，零库存管理，支持JIT</p>
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
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">服务实施流程</h2>
            <p class="text-lg text-gray-600">专业的实施团队，确保供应链解决方案成功落地</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                1
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">现状诊断</h3>
              <p class="text-gray-600">深入分析现有供应链体系</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                2
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">方案设计</h3>
              <p class="text-gray-600">制定个性化解决方案</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                3
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">系统实施</h3>
              <p class="text-gray-600">平台搭建与系统集成</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                4
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">试运行</h3>
              <p class="text-gray-600">试点运行，验证效果</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
              >
                5
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">持续优化</h3>
              <p class="text-gray-600">持续监控与优化改进</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-teal-900 to-green-800">
      <div class="container-section">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-8">构建您的智慧供应链</h2>
          <p class="text-xl mb-12 text-gray-300">让我们为您打造高效、敏捷、可持续的供应链体系</p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <BaseButton
              variant="primary"
              size="lg"
              class="bg-white text-teal-900 hover:bg-gray-100 px-8"
            >
              立即咨询
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8"
            >
              申请演示
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
