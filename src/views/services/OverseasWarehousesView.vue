<template>
  <PageLayout
    page-title="海外仓储"
    page-description="超过22,000平方米的自营美国仓储网络，结合先进的管理系统，是您最值得信赖的海外仓储解决方案。高标准仓储设施，智慧库存管理，多模式订单履行。"
    :custom-breadcrumbs="[
      { label: '服务体系', href: '/services' },
      { label: '海外仓储', href: '/services/overseas-warehouses' },
    ]"
  >
    <!-- Hero区域 -->
    <PageHero
      title="您的美国本地仓，智慧仓储与库存管理专家"
      subtitle="超过22,000平方米的自营美国仓储网络，结合先进的管理系统，是您最值得信赖的海外仓储解决方案。高标准仓储设施，智慧库存管理，多模式订单履行。"
      image-url="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400&h=400&fit=crop&crop=center"
      label="海外仓储专家"
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

    <!-- 海外仓储的核心挑战 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">海外仓储的核心挑战</h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            对于跨境卖家而言，一个稳定、高效的海外仓是决胜美国市场的战略要地。然而，高昂的租赁成本、复杂的库存管理、多渠道的订单履行以及特殊商品的存储难题，都是亟待解决的挑战。
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧视觉化图形 -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="海外仓储管理挑战"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- 右侧挑战点列表 -->
          <div>
            <ul class="space-y-8">
              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-red-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">库存管理复杂</h3>
                  <p class="text-gray-600">
                    在多个销售平台（如Amazon, TikTok,
                    官网）之间同步库存，极易超卖或产生呆滞，影响资金周转。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-orange-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">履约要求多样</h3>
                  <p class="text-gray-600">
                    不同渠道的订单处理和发货要求各不相同，需要灵活的仓储操作支持。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-yellow-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">设施标准不一</h3>
                  <p class="text-gray-600">
                    如温控、干燥等特殊存储需求难以得到满足，影响产品质量和客户满意度。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-purple-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">运营成本高昂</h3>
                  <p class="text-gray-600">
                    自建或租赁仓库成本高，且缺乏专业的管理技术和经验，难以实现规模效益。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    <!-- 可耐博达的一站式解决方案 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            可耐博达Kenable的一站式解决方案
          </h2>
          <p class="text-xl text-gray-600">
            可耐博达（广州）供应链管理有限公司拥有超过22,000平方米的自营美国仓储网络，结合先进的管理系统，是您最值得信赖的海外仓储解决方案。
          </p>
        </div>

        <div class="space-y-16">
          <!-- 战略性仓库布局 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">战略性仓库布局</h3>
              <p class="text-gray-600 mb-6">
                我们在加州、德州、佐治亚州和印第安纳州均设有自营仓库，实现对美国市场的全面覆盖，支持高效的全国分销。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  4大核心自营仓库
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  22,000+平方米面积
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  全美市场覆盖
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop&crop=center"
                alt="现代化仓库外观"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 高标准仓储设施 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
                alt="高标准仓储设施"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">高标准仓储设施</h3>
              <p class="text-gray-600 mb-6">
                我们提供温控、干燥、洁净的高标准设施，并为大尺寸、易碎、高价值的物品提供定制化的仓储方案，确保产品安全。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  温控干燥洁净环境
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  高价值物品专区
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  定制化仓储方案
                </li>
              </ul>
            </div>
          </div>

          <!-- 智慧库存管理 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">智慧库存管理</h3>
              <p class="text-gray-600 mb-6">
                我们利用先进的WMS（仓库管理系统），为您提供实时的库存数据，并支持多平台的灵活库存管理，优化所有渠道的履约。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  先进WMS系统
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  实时库存数据
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  多平台同步管理
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop&crop=center"
                alt="智能仓库管理系统"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 多模式订单履行 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="多模式订单履行"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">多模式订单履行</h3>
              <p class="text-gray-600 mb-6">
                我们支持FBA入仓、D2C直发消费者和B2B批量批发的多种灵活履约模式，并提供一件代发（Drop-Shipping）服务。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  FBA入仓服务
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  D2C直发消费者
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  一件代发服务
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为您带来的价值 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">选择我们，您将立即获得</h2>
          <p class="text-xl text-gray-600">
            将您的库存交给我们，您得到的不仅是存储空间，更是一个强大的商业增长引擎。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">完全控制与低风险</h3>
            </div>
            <p class="text-gray-600">
              全自营仓库意味着更强的操作控制力、更低的运营风险和有保障的灵活性与时效性。
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">库存周转率提升</h3>
            </div>
            <p class="text-gray-600">
              通过数据驱动的管理和高效的订单处理，我们帮助您降低库存成本，提升周转率。
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">客户体验优化</h3>
            </div>
            <p class="text-gray-600">
              快速、准确的订单履约能显著提升您的终端客户满意度和品牌忠诚度。
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">支持业务扩展</h3>
            </div>
            <p class="text-gray-600">我们的全国性网络能无缝支持您开拓新市场和新销售渠道。</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择专业海外仓储服务，智慧管理您的库存"
      subtitle="22,000+平方米自营仓储网络，为您的业务增长提供强大支撑"
      primary-button-text="获取仓储报价"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </PageLayout>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
</script>
