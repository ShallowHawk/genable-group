<template>
  <PageLayout
    page-title="增值服务"
    page-description="我们将仓库升级为您的产品'加工中心'。提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。精细化分拣、专业贴标换标、定制化包装、灵活定制方案。"
    :custom-breadcrumbs="[
      { label: '服务体系', href: '/services' },
      { label: '增值服务', href: '/services/value-added-services' },
    ]"
  >
    <!-- Hero区域 -->
    <PageHero
      title="超越仓储，以定制化增值服务提升您的产品价值"
      subtitle="我们将仓库升级为您的产品'加工中心'。提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。精细化分拣、专业贴标换标、定制化包装、灵活定制方案。"
      image-url="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=400&fit=crop&crop=center"
      label="增值服务专家"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            获取增值服务报价
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

    <!-- 供应链中的增值挑战 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">供应链中的增值挑战</h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            在竞争激烈的市场中，标准化的物流已不足以构建核心优势。您的业务常常需要更灵活、更个性化的处理来满足特定的市场需求、平台规则或促销活动，而这正是许多传统物流服务商的短板。
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧视觉化图形 -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="增值服务处理挑战"
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">平台要求多变</h3>
                  <p class="text-gray-600">
                    不同电商平台（如亚马逊）对产品标签、包装有不同的规定，需要快速调整以满足合规要求。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">产品组合营销</h3>
                  <p class="text-gray-600">
                    希望在仓库内进行产品组合、捆绑销售或礼品包装，但操作复杂且缺乏专业支持。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">库存版本管理</h3>
                  <p class="text-gray-600">
                    同一产品有多个版本或包装，需要精细化的分拣和管理，容易出现混乱。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">临时性项目需求</h3>
                  <p class="text-gray-600">
                    面对突发的市场活动或项目，需要快速、临时的定制化操作支持，但难以找到合适的服务商。
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
            可耐博达（广州）供应链管理有限公司将仓库升级为您的产品'加工中心'。我们提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。
          </p>
        </div>

        <div class="space-y-16">
          <!-- 精细化分拣 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">精细化分拣</h3>
              <p class="text-gray-600 mb-6">
                我们根据您的指令，对到库货物按SKU、批次、渠道等维度进行精细化分类处理。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  按SKU精细分类
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  批次管理分拣
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  渠道定向处理
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
                alt="精细化分拣作业"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 专业贴标与换标 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1585221330389-24fb30535ec7?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="专业贴标换标服务"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">专业贴标与换标</h3>
              <p class="text-gray-600 mb-6">
                我们提供高效的重新贴标（Relabeling）服务，确保您的产品标签符合任何销售渠道的规范。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  高效重新贴标
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  多渠道标准匹配
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  质量检验保障
                </li>
              </ul>
            </div>
          </div>

          <!-- 定制化包装 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">定制化包装</h3>
              <p class="text-gray-600 mb-6">
                我们支持产品的二次包装、重新包装（Repackaging）和组合包装，以满足您的营销和品牌展示需求。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  二次包装服务
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  重新包装定制
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  组合套装包装
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="定制化包装服务"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 灵活的定制方案 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop&crop=center"
                alt="灵活定制方案"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">灵活的定制方案</h3>
              <p class="text-gray-600 mb-6">
                我们拥有近22年的行业经验，能够为您量身打造满足特定行业需求的、灵活可定制的解决方案。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  22年行业经验
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  量身定制方案
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  特定行业需求
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
            我们的增值服务，是您应对市场不确定性、提升品牌价值的利器。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">市场响应速度最大化</h3>
            </div>
            <p class="text-gray-600">
              帮助您快速适应市场变化和平台政策调整，增强供应链的灵活性和韧性。
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-2H4v2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">供应链成本优化</h3>
            </div>
            <p class="text-gray-600">
              在仓库内一站式完成所有操作，无需中转至第三方，为您节省时间和运输成本。
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">品牌价值提升</h3>
            </div>
            <p class="text-gray-600">
              通过定制化的包装和处理，提升您产品的最终呈现效果和客户体验。
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">运营流程简化</h3>
            </div>
            <p class="text-gray-600">您只需下达指令，所有复杂的在库操作均由我们专业的团队完成。</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择专业增值服务，提升您的产品价值"
      subtitle="灵活的定制化方案，让您的供应链更具柔性与创造力"
      primary-button-text="获取增值服务报价"
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
