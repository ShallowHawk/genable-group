<template>
  <div class="contract-logistics-page">
    <!-- Hero区域 -->
    <PageHero
      title="专业的合同物流服务"
      subtitle="肯纳布尔集团在美国四个关键州（加州、德州、佐治亚州、印第安纳州）拥有超过22,000平方米的自营仓库网络。我们提供全方位的仓储管理、订单履行、增值服务和逆向物流解决方案，助力您轻松管理美国市场的供应链运营。"
      image-url="https://plus.unsplash.com/premium_photo-1661559046208-0cef1cbf7b0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      label="全美仓储网络服务"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            获取仓储报价
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

    <!-- 我们的合同物流服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">我们的合同物流服务</h2>

            <div class="space-y-6">
              <!-- 仓储与库存管理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">仓储与库存管理</h3>
                  <p class="text-gray-600">
                    多地仓库，WMS系统，精准库存控制。我们依据您的需求整合各地供货商，再装拆分销中心或店家，降低整体运输成本，提高经济效益。
                  </p>
                </div>
              </div>

              <!-- 订单履行与配送 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">订单履行与配送</h3>
                  <p class="text-gray-600">
                    支持D2C/B2B，多渠道一站式发货。我们灵活运用超库作业帮您争取应供应商突发交货如生产、船期延误、塞港及海关检验所损失的宝贵时间，协助您推进货物配送决策以取得更充裕的时间收集市场动态，增加决策精准度。
                  </p>
                </div>
              </div>

              <!-- 增值服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">增值服务</h3>
                  <p class="text-gray-600">
                    贴标、换包装、组装，满足个性化需求。针对超大尺寸（OOG-Out of
                    Gauge）及复杂的货物，我们的项目团队为您订制解决方案与详细计划，协调海运所有细节。
                  </p>
                </div>
              </div>

              <!-- 逆向物流 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">逆向物流</h3>
                  <p class="text-gray-600">
                    高效退货处理，优化二次销售。我们专业的信息团队为您高效处理系统对接。<a
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
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              为什么选择肯纳布尔的合同物流服务？
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">全美战略布局</h3>
                  <p class="text-gray-600">
                    在加州、德州、佐治亚州、印第安纳州拥有超过22,000平方米的自营仓库网络。
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
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">高效履约能力</h3>
                  <p class="text-gray-600">
                    99%的货物在24小时内被取件，全美配送时效2-5天，确保快速履约。
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">多平台整合</h3>
                  <p class="text-gray-600">
                    无缝对接Amazon、Shopify、WooCommerce等主流电商平台，支持多渠道订单处理。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">专业增值服务</h3>
                  <p class="text-gray-600">
                    提供贴标、换包装、组装等增值服务，满足个性化需求，提升产品附加值。
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
                赋能快速增长的DTC美妆品牌，实现全美高效订单履约
              </h3>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">挑战与解决方案</h4>
                <p class="text-gray-600 mb-4">
                  <strong>挑战：</strong
                  >某DTC美妆品牌在社交媒体爆火后订单量激增，原有的自发货模式严重滞后，急需专业的仓储与履约伙伴。
                </p>
                <p class="text-gray-600">
                  <strong>解决方案：</strong
                  >肯纳布尔为其提供了东、西海岸两个仓库的仓储服务，通过WMS系统对接其Shopify店铺，实现了订单的自动处理、精美包装及快速发货。
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">成效：</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    订单处理准确率达到99.9%
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    当日订单截止时间延长2小时
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    客户复购率提升15%
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=250&fit=crop&crop=center"
              alt="仓库中专门为美妆品牌设立的、干净明亮的包装工作台"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=250&fit=crop&crop=center"
              alt="包装精美的化妆品包裹传送带"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择专业合同物流，优化您的供应链"
      subtitle="全美仓储网络，为您提供高效的订单履行和库存管理解决方案"
      primary-button-text="获取仓储报价"
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
