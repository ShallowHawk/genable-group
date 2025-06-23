<template>
  <PageLayout
    :page-title="getText('pageTitle')"
    :page-description="getText('pageDescription')"
    :custom-breadcrumbs="breadcrumbs"
    :show-page-header="false"
  >
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=400&fit=crop&crop=center"
      :label="getText('heroLabel')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('getQuoteButton') }}
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-300 px-8 transition-all backdrop-blur-sm"
          >
            {{ getText('consultButton') }}
          </BaseButton>
        </router-link>
      </template>
    </PageHero>

    <!-- 供应链中的增值挑战 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('challengesTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            {{ getText('challengesDescription') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('platformRequirementsTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('platformRequirementsDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('productMarketingTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('productMarketingDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('inventoryManagementTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('inventoryManagementDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('temporaryProjectsTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('temporaryProjectsDesc') }}
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
            {{ getText('solutionTitle') }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ getText('solutionDescription') }}
          </p>
        </div>

        <div class="space-y-16">
          <!-- 精细化分拣 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('precisionSortingTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('precisionSortingDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('precisionSortingFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('precisionSortingFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('precisionSortingFeature3') }}
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
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('professionalLabelingTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('professionalLabelingDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('professionalLabelingFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('professionalLabelingFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('professionalLabelingFeature3') }}
                </li>
              </ul>
            </div>
          </div>

          <!-- 定制化包装 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('customPackagingTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('customPackagingDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customPackagingFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customPackagingFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customPackagingFeature3') }}
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
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('flexibleSolutionsTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('flexibleSolutionsDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('flexibleSolutionsFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('flexibleSolutionsFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('flexibleSolutionsFeature3') }}
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
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('valueTitle') }}
          </h2>
          <p class="text-xl text-gray-600">
            {{ getText('valueDescription') }}
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
              <h3 class="text-2xl font-bold text-gray-900">{{ getText('marketResponseTitle') }}</h3>
            </div>
            <p class="text-gray-600">
              {{ getText('marketResponseDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('costOptimizationTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('costOptimizationDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">{{ getText('brandValueTitle') }}</h3>
            </div>
            <p class="text-gray-600">
              {{ getText('brandValueDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('operationalSimplificationTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">{{ getText('operationalSimplificationDesc') }}</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      :title="getText('ctaTitle')"
      :subtitle="getText('ctaSubtitle')"
      :primary-button-text="getText('ctaPrimaryButton')"
      primary-button-href="/contact"
      :secondary-button-text="getText('ctaSecondaryButton')"
      secondary-button-href="/First‑Leg (Origin) Logistics Service Handbook.docx"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'

const { locale } = useI18n()

// Translation types
type TranslationKey =
  | 'pageTitle'
  | 'pageDescription'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroLabel'
  | 'getQuoteButton'
  | 'consultButton'
  | 'breadcrumbServices'
  | 'breadcrumbValueAdded'
  | 'challengesTitle'
  | 'challengesDescription'
  | 'platformRequirementsTitle'
  | 'platformRequirementsDesc'
  | 'productMarketingTitle'
  | 'productMarketingDesc'
  | 'inventoryManagementTitle'
  | 'inventoryManagementDesc'
  | 'temporaryProjectsTitle'
  | 'temporaryProjectsDesc'
  | 'solutionTitle'
  | 'solutionDescription'
  | 'precisionSortingTitle'
  | 'precisionSortingDesc'
  | 'precisionSortingFeature1'
  | 'precisionSortingFeature2'
  | 'precisionSortingFeature3'
  | 'professionalLabelingTitle'
  | 'professionalLabelingDesc'
  | 'professionalLabelingFeature1'
  | 'professionalLabelingFeature2'
  | 'professionalLabelingFeature3'
  | 'customPackagingTitle'
  | 'customPackagingDesc'
  | 'customPackagingFeature1'
  | 'customPackagingFeature2'
  | 'customPackagingFeature3'
  | 'flexibleSolutionsTitle'
  | 'flexibleSolutionsDesc'
  | 'flexibleSolutionsFeature1'
  | 'flexibleSolutionsFeature2'
  | 'flexibleSolutionsFeature3'
  | 'valueTitle'
  | 'valueDescription'
  | 'marketResponseTitle'
  | 'marketResponseDesc'
  | 'costOptimizationTitle'
  | 'costOptimizationDesc'
  | 'brandValueTitle'
  | 'brandValueDesc'
  | 'operationalSimplificationTitle'
  | 'operationalSimplificationDesc'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimaryButton'
  | 'ctaSecondaryButton'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '增值服务',
    pageDescription:
      '我们将仓库升级为您的产品"加工中心"。提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。精细化分拣、专业贴标换标、定制化包装、灵活定制方案。',
    heroTitle: '超越仓储，以定制化增值服务提升您的产品价值',
    heroSubtitle:
      '我们将仓库升级为您的产品"加工中心"。提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。精细化分拣、专业贴标换标、定制化包装、灵活定制方案。',
    heroLabel: '增值服务专家',
    getQuoteButton: '获取增值服务报价',
    consultButton: '在线咨询',
    breadcrumbServices: '服务体系',
    breadcrumbValueAdded: '增值服务',
    challengesTitle: '供应链中的增值挑战',
    challengesDescription:
      '在竞争激烈的市场中，标准化的物流已不足以构建核心优势。您的业务常常需要更灵活、更个性化的处理来满足特定的市场需求、平台规则或促销活动，而这正是许多传统物流服务商的短板。',
    platformRequirementsTitle: '平台要求多变',
    platformRequirementsDesc:
      '不同电商平台（如亚马逊）对产品标签、包装有不同的规定，需要快速调整以满足合规要求。',
    productMarketingTitle: '产品组合营销',
    productMarketingDesc:
      '希望在仓库内进行产品组合、捆绑销售或礼品包装，但操作复杂且缺乏专业支持。',
    inventoryManagementTitle: '库存版本管理',
    inventoryManagementDesc: '同一产品有多个版本或包装，需要精细化的分拣和管理，容易出现混乱。',
    temporaryProjectsTitle: '临时性项目需求',
    temporaryProjectsDesc:
      '面对突发的市场活动或项目，需要快速、临时的定制化操作支持，但难以找到合适的服务商。',
    solutionTitle: '可耐博达Kenable的一站式解决方案',
    solutionDescription:
      '可耐博达（广州）供应链管理有限公司将仓库升级为您的产品"加工中心"。我们提供一系列专业的在库增值服务，让您的供应链更具柔性与创造力。',
    precisionSortingTitle: '精细化分拣',
    precisionSortingDesc: '我们根据您的指令，对到库货物按SKU、批次、渠道等维度进行精细化分类处理。',
    precisionSortingFeature1: '按SKU精细分类',
    precisionSortingFeature2: '批次管理分拣',
    precisionSortingFeature3: '渠道定向处理',
    professionalLabelingTitle: '专业贴标与换标',
    professionalLabelingDesc:
      '我们提供高效的重新贴标（Relabeling）服务，确保您的产品标签符合任何销售渠道的规范。',
    professionalLabelingFeature1: '高效重新贴标',
    professionalLabelingFeature2: '多渠道标准匹配',
    professionalLabelingFeature3: '质量检验保障',
    customPackagingTitle: '定制化包装',
    customPackagingDesc:
      '我们支持产品的二次包装、重新包装（Repackaging）和组合包装，以满足您的营销和品牌展示需求。',
    customPackagingFeature1: '二次包装服务',
    customPackagingFeature2: '重新包装定制',
    customPackagingFeature3: '组合套装包装',
    flexibleSolutionsTitle: '灵活的定制方案',
    flexibleSolutionsDesc:
      '我们拥有近22年的行业经验，能够为您量身打造满足特定行业需求的、灵活可定制的解决方案。',
    flexibleSolutionsFeature1: '22年行业经验',
    flexibleSolutionsFeature2: '量身定制方案',
    flexibleSolutionsFeature3: '特定行业需求',
    valueTitle: '选择我们，您将立即获得',
    valueDescription: '我们的增值服务，是您应对市场不确定性、提升品牌价值的利器。',
    marketResponseTitle: '市场响应速度最大化',
    marketResponseDesc: '帮助您快速适应市场变化和平台政策调整，增强供应链的灵活性和韧性。',
    costOptimizationTitle: '供应链成本优化',
    costOptimizationDesc: '在仓库内一站式完成所有操作，无需中转至第三方，为您节省时间和运输成本。',
    brandValueTitle: '品牌价值提升',
    brandValueDesc: '通过定制化的包装和处理，提升您产品的最终呈现效果和客户体验。',
    operationalSimplificationTitle: '运营流程简化',
    operationalSimplificationDesc: '您只需下达指令，所有复杂的在库操作均由我们专业的团队完成。',
    ctaTitle: '选择专业增值服务，提升您的产品价值',
    ctaSubtitle: '灵活的定制化方案，让您的供应链更具柔性与创造力',
    ctaPrimaryButton: '获取增值服务报价',
    ctaSecondaryButton: '下载服务手册',
  },
  en: {
    pageTitle: 'Value-Added Services',
    pageDescription:
      'We upgrade warehouses into your product "processing centers". Providing a series of professional in-warehouse value-added services to make your supply chain more flexible and creative. Precise sorting, professional relabeling, customized packaging, flexible custom solutions.',
    heroTitle:
      'Beyond Warehousing: Enhance Your Product Value with Customized Value-Added Services',
    heroSubtitle:
      'We upgrade warehouses into your product "processing centers". Providing a series of professional in-warehouse value-added services to make your supply chain more flexible and creative. Precise sorting, professional relabeling, customized packaging, flexible custom solutions.',
    heroLabel: 'Value-Added Services Expert',
    getQuoteButton: 'Get Value-Added Services Quote',
    consultButton: 'Online Consultation',
    breadcrumbServices: 'Services',
    breadcrumbValueAdded: 'Value-Added Services',
    challengesTitle: 'Value-Added Challenges in Supply Chain',
    challengesDescription:
      "In today's competitive market, standardized logistics is no longer sufficient to build core advantages. Your business often requires more flexible and personalized handling to meet specific market demands, platform requirements, or promotional activities, which is precisely where many traditional logistics providers fall short.",
    platformRequirementsTitle: 'Variable Platform Requirements',
    platformRequirementsDesc:
      'Different e-commerce platforms (such as Amazon) have varying regulations for product labeling and packaging, requiring quick adjustments to meet compliance requirements.',
    productMarketingTitle: 'Product Combination Marketing',
    productMarketingDesc:
      'Need to perform product combinations, bundled sales, or gift packaging within warehouses, but operations are complex and lack professional support.',
    inventoryManagementTitle: 'Inventory Version Management',
    inventoryManagementDesc:
      'Same products with multiple versions or packaging requiring precise sorting and management, prone to confusion.',
    temporaryProjectsTitle: 'Temporary Project Demands',
    temporaryProjectsDesc:
      'Facing sudden market activities or projects requiring rapid, temporary customized operational support, but difficult to find suitable service providers.',
    solutionTitle: "Kenable's One-Stop Solution",
    solutionDescription:
      'Kenable Group Corp upgrades warehouses into your product "processing centers". We provide a series of professional in-warehouse value-added services, making your supply chain more flexible and creative.',
    precisionSortingTitle: 'Precision Sorting',
    precisionSortingDesc:
      'Following your instructions, we perform precise classification of warehouse goods by SKU, batch, channel, and other dimensions.',
    precisionSortingFeature1: 'Precise SKU Classification',
    precisionSortingFeature2: 'Batch Management Sorting',
    precisionSortingFeature3: 'Channel-Directed Processing',
    professionalLabelingTitle: 'Professional Labeling & Relabeling',
    professionalLabelingDesc:
      'We provide efficient relabeling services, ensuring your product labels comply with any sales channel standards.',
    professionalLabelingFeature1: 'Efficient Relabeling',
    professionalLabelingFeature2: 'Multi-Channel Standard Matching',
    professionalLabelingFeature3: 'Quality Inspection Guarantee',
    customPackagingTitle: 'Customized Packaging',
    customPackagingDesc:
      'We support secondary packaging, repackaging, and combination packaging to meet your marketing and brand presentation needs.',
    customPackagingFeature1: 'Secondary Packaging Services',
    customPackagingFeature2: 'Custom Repackaging',
    customPackagingFeature3: 'Combination Set Packaging',
    flexibleSolutionsTitle: 'Flexible Custom Solutions',
    flexibleSolutionsDesc:
      'With nearly 22 years of industry experience, we can tailor flexible, customizable solutions that meet specific industry requirements.',
    flexibleSolutionsFeature1: '22 Years Industry Experience',
    flexibleSolutionsFeature2: 'Tailored Custom Solutions',
    flexibleSolutionsFeature3: 'Specific Industry Requirements',
    valueTitle: 'Choose Us and Get Immediate Benefits',
    valueDescription:
      'Our value-added services are your tools for addressing market uncertainties and enhancing brand value.',
    marketResponseTitle: 'Maximum Market Response Speed',
    marketResponseDesc:
      'Help you quickly adapt to market changes and platform policy adjustments, enhancing supply chain flexibility and resilience.',
    costOptimizationTitle: 'Supply Chain Cost Optimization',
    costOptimizationDesc:
      'Complete all operations within the warehouse without third-party transfers, saving you time and transportation costs.',
    brandValueTitle: 'Brand Value Enhancement',
    brandValueDesc:
      "Through customized packaging and processing, enhance your product's final presentation and customer experience.",
    operationalSimplificationTitle: 'Operational Process Simplification',
    operationalSimplificationDesc:
      'You simply issue instructions, and all complex warehouse operations are completed by our professional team.',
    ctaTitle: 'Choose Professional Value-Added Services to Enhance Your Product Value',
    ctaSubtitle: 'Flexible customized solutions make your supply chain more flexible and creative',
    ctaPrimaryButton: 'Get Value-Added Services Quote',
    ctaSecondaryButton: 'Download Service Manual',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// Responsive breadcrumbs
const breadcrumbs = computed(() => [
  { label: getText('breadcrumbServices'), href: '/services' },
  { label: getText('breadcrumbValueAdded'), href: '/services/value-added-services' },
])
</script>
