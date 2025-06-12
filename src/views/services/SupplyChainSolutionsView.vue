<template>
  <div class="supply-chain-solutions-page">
    <!-- Hero区域 -->
    <PageHero
      title="端到端的供应链解决方案"
      subtitle="肯纳布尔集团凭借近22年的行业经验，为您提供从供应链设计与优化、技术集成、风险管理到定制化服务的全方位供应链解决方案。我们通过专业的SCM/WMS系统集成和平台连接，帮助您实现成本优化、履行效率提升、市场响应加速和持续创新。"
      image-url="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop&crop=center"
      label="智能供应链管理专家"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            获取解决方案
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
          >
            在线咨询
          </BaseButton>
        </router-link>
      </template>
    </PageHero>

    <!-- 我们的供应链解决方案 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661881251976-9fc9bbb90c4e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="海运货运代理服务"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">我们的供应链解决方案</h2>

            <div class="space-y-6">
              <!-- 供应链设计与优化 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">供应链设计与优化</h3>
                  <p class="text-gray-600">
                    分析业务模式，设计最优物流路径与库存策略。我们依据您的需求整合各地供货商，再装拆分销中心或店家，降低整体运输成本，提高经济效益。
                  </p>
                </div>
              </div>

              <!-- 技术集成 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">技术集成</h3>
                  <p class="text-gray-600">
                    对接ERP/WMS系统，实现全链路数据可视化。我们灵活运用超库作业帮您争取应供应商突发交货如生产、船期延误、塞港及海关检验所损失的宝贵时间，协助您推进货物配送决策以取得更充裕的时间收集市场动态，增加决策精准度。
                  </p>
                </div>
              </div>

              <!-- 风险管理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">项目物流</h3>
                  <p class="text-gray-600">
                    针对超大尺寸（OOG-Out of
                    Gauge）及复杂的货物，我们的项目团队为您订制解决方案与详细计划，协调海运所有细节。
                  </p>
                </div>
              </div>

              <!-- 定制化服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">支持EDI/API快速整合信息</h3>
                  <p class="text-gray-600">
                    我们专业的信息团队为您高效处理系统对接。<a
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

    <!-- 为什么选择我们 - 右图左文布局 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧文案 -->
          <div class="order-1 lg:order-1">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              为什么选择肯纳布尔的供应链解决方案？
            </h2>

            <div class="space-y-6">
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">成本优化</h3>
                  <p class="text-gray-600">通过智能路径规划和库存优化，实现运营成本的显著降低。</p>
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">履行效率</h3>
                  <p class="text-gray-600">
                    先进的技术系统和优化流程，确保订单处理的高效性和准确性。
                  </p>
                </div>
              </div>

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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">市场响应</h3>
                  <p class="text-gray-600">灵活的供应链架构，快速响应市场变化和客户需求。</p>
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">持续创新</h3>
                  <p class="text-gray-600">
                    不断引入新技术和优化方案，保持供应链的先进性和竞争力。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
              alt="工作人员在电脑前分析供应链数据的场景"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
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
                为一家B2B精密电子元件制造商提供供应链可视化与成本优化方案
              </h3>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">挑战与解决方案</h4>
                <p class="text-gray-600 mb-4">
                  <strong>挑战：</strong
                  >该制造商需要向全美数十家工厂准时供应生产原料，对库存水平和运输途中的可见性要求极高，以避免生产线停工。
                </p>
                <p class="text-gray-600">
                  <strong>解决方案：</strong
                  >肯纳布尔通过集成其ERP系统，提供了带有实时追踪功能的供应商管理库存（VMI）方案。通过数据分析，优化了安全库存水平和补货周期。
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">成效：</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    库存持有成本降低18%
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    因物料短缺造成的生产中断次数降为零
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    供应链透明度大幅提升
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=250&fit=crop&crop=center"
              alt="展示供应链管理系统（SCM）后台的Dashboard截图，包含地图追踪和库存水平图表"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=250&fit=crop&crop=center"
              alt="现代化的无尘电子车间或仓库"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="打造智能供应链，赋能业务增长"
      subtitle="专业的供应链解决方案，助您实现成本优化和效率提升"
      primary-button-text="获取解决方案"
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

<style scoped>
/* 供应链特色样式 */
.supply-chain-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 数据可视化效果 */
.data-card {
  position: relative;
  overflow: hidden;
}

.data-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.data-card:hover::before {
  left: 100%;
}

/* 流程连接线 */
@media (min-width: 768px) {
  .process-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 32px;
    right: -50%;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    z-index: -1;
  }
}

/* 行业卡片悬停效果 */
.industry-card {
  transition: all 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
