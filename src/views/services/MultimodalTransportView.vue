<template>
  <div class="multimodal-transport-page">
    <!-- Hero区域 -->
    <PageHero
      title="智能多式联运解决方案"
      subtitle="肯纳布尔集团通过海+陆、空+陆、国际多式联运等智能组合，为您提供一站式的综合运输服务。我们根据您的时效和成本需求，智能组合最佳运输方式，实现运输效率和成本的最优平衡，让复杂的物流变得简单高效。"
      image-url="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      label="综合运输解决方案"
    >
      <template #actions>
        <BaseButton
          variant="primary"
          size="lg"
          class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
        >
          获取联运方案
        </BaseButton>
        <BaseButton
          variant="outline"
          size="lg"
          class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
        >
          在线咨询
        </BaseButton>
      </template>
    </PageHero>

    <!-- 我们的多式联运服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center"
              alt="物流流程图的创意视觉化图片"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">我们的多式联运服务</h2>

            <div class="space-y-6">
              <!-- 海+陆联运 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">海+陆联运</h3>
                  <p class="text-gray-600">
                    进口集装箱到港后，无缝衔接卡车网络进行内陆派送。我们依据您的需求整合各地供货商，再装拆分销中心或店家，降低整体运输成本，提高经济效益。
                  </p>
                </div>
              </div>

              <!-- 空+陆联运 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">空+陆联运</h3>
                  <p class="text-gray-600">
                    紧急空运货物落地后，地面运输团队立即响应，快速转运。我们灵活运用超库作业帮您争取应供应商突发交货如生产、船期延误、塞港及海关检验所损失的宝贵时间，协助您推进货物配送决策以取得更充裕的时间收集市场动态，增加决策精准度。
                  </p>
                </div>
              </div>

              <!-- 国际多式联运 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">国际多式联运</h3>
                  <p class="text-gray-600">
                    一站式管理从多国出口，到美国多渠道分销的复杂项目。针对超大尺寸（OOG-Out of
                    Gauge）及复杂的货物，我们的项目团队为您订制解决方案与详细计划，协调海运所有细节。
                  </p>
                </div>
              </div>

              <!-- 方案定制 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">方案定制</h3>
                  <p class="text-gray-600">
                    根据您的时效和成本需求，智能组合最佳运输方式。我们专业的信息团队为您高效处理系统对接。<a
                      href="#"
                      class="text-cyan-600 hover:text-cyan-800 font-medium"
                      >与我们的系统串联。</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为什么选择我们 - 左图右文布局 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center"
              alt="物流流程图的创意视觉化图片"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              为什么选择肯纳布尔的多式联运服务？
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">单点联系</h3>
                  <p class="text-gray-600">
                    一个联系人，一套管理体系，简化复杂的多式联运协调工作。
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">无缝整合</h3>
                  <p class="text-gray-600">不同运输方式之间实现无缝衔接，确保货物流转顺畅无阻。</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">智能优化</h3>
                  <p class="text-gray-600">根据货物特性和客户需求，智能选择最优的运输组合方案。</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">全程可视</h3>
                  <p class="text-gray-600">
                    提供端到端的实时追踪服务，让您随时了解货物状态和位置。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 应用案例 - 纪实风格 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧文案 -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">肯纳布尔在行动</h2>
              <h3 class="text-xl text-blue-600 font-semibold mb-6">
                通过"海空+多仓"联动模式，优化Cushion Lab的供应链韧性
              </h3>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">挑战与解决方案</h4>
                <p class="text-gray-600 mb-4">
                  <strong>挑战：</strong
                  >当海运航线拥堵或某单一出口国出现问题时，如何保证供应链不中断，稳定供给全美市场？
                </p>
                <p class="text-gray-600">
                  <strong>解决方案：</strong
                  >肯纳布尔为其设计了动态多式联运方案。常规备货走海运，紧急补货走空运。同时利用美国多仓布局，灵活调配库存，一个仓库缺货可由其他仓库支援。
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">成效：</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    在港口拥堵期间，通过空运补货和多仓调拨，成功避免了核心产品断货
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    销售额逆势增长
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    构建了更具韧性的供应链体系
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=250&fit=crop&crop=center"
              alt="一张一半是海运集装箱，一半是空运货物的拼接创意图"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=250&fit=crop&crop=center"
              alt="美国地图上标注出肯纳布尔的多个仓库，并用箭头表示库存调拨路线"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择智能多式联运，优化您的物流效率"
      subtitle="专业的多式联运解决方案，让复杂的物流变得简单高效"
      primary-button-text="获取联运方案"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
</script>
