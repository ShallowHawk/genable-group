<template>
  <PageLayout
    :page-title="getText('pageTitle')"
    :page-description="getText('pageDescription')"
    :custom-breadcrumbs="breadcrumbs"
  >
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://images.unsplash.com/photo-1594392175511-30eca83d51c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
          >
            {{ getText('consultButton') }}
          </BaseButton>
        </router-link>
      </template>
    </PageHero>

    <!-- 逆向物流的核心挑战 -->
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
                src="https://images.unsplash.com/photo-1594392175511-30eca83d51c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="逆向物流处理挑战"
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
                    {{ getText('lowEfficiencyTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('lowEfficiencyDesc') }}
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
                    {{ getText('valueDepreciationTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('valueDepreciationDesc') }}
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
                    {{ getText('inventoryBacklogTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('inventoryBacklogDesc') }}
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
                    {{ getText('dataBlackboxTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('dataBlackboxDesc') }}
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
          <!-- 高效退货处理 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('efficientReturnsTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('efficientReturnsDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('efficientReturnsFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('efficientReturnsFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('efficientReturnsFeature3') }}
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1624137308703-e1da1ca881df?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="退货处理流程"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 快速重新入库 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
                alt="重新入库处理"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('rapidRestockingTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('rapidRestockingDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('rapidRestockingFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('rapidRestockingFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('rapidRestockingFeature3') }}
                </li>
              </ul>
            </div>
          </div>

          <!-- 积压库存管理与处置 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('excessInventoryTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('excessInventoryDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('excessInventoryFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('excessInventoryFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('excessInventoryFeature3') }}
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop&crop=center"
                alt="积压库存管理"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 产品再加工 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1617909517054-64d4958be1c9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="产品再加工服务"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('productReprocessingTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('productReprocessingDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('productReprocessingFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('productReprocessingFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('productReprocessingFeature3') }}
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
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('resaleEfficiencyTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('resaleEfficiencyDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('inventoryHealthTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('inventoryHealthDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('customerLoyaltyTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('customerLoyaltyDesc') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h1.945M15 15v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m14-7a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">{{ getText('sustainabilityTitle') }}</h3>
            </div>
            <p class="text-gray-600">{{ getText('sustainabilityDesc') }}</p>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择专业逆向物流服务，挖掘退货价值"
      subtitle="专业的退货处理方案，将成本中心转变为价值回收中心"
      primary-button-text="获取逆向物流报价"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
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
  | 'breadcrumbReverse'
  | 'challengesTitle'
  | 'challengesDescription'
  | 'lowEfficiencyTitle'
  | 'lowEfficiencyDesc'
  | 'valueDepreciationTitle'
  | 'valueDepreciationDesc'
  | 'inventoryBacklogTitle'
  | 'inventoryBacklogDesc'
  | 'dataBlackboxTitle'
  | 'dataBlackboxDesc'
  | 'solutionTitle'
  | 'solutionDescription'
  | 'efficientReturnsTitle'
  | 'efficientReturnsDesc'
  | 'efficientReturnsFeature1'
  | 'efficientReturnsFeature2'
  | 'efficientReturnsFeature3'
  | 'rapidRestockingTitle'
  | 'rapidRestockingDesc'
  | 'rapidRestockingFeature1'
  | 'rapidRestockingFeature2'
  | 'rapidRestockingFeature3'
  | 'excessInventoryTitle'
  | 'excessInventoryDesc'
  | 'excessInventoryFeature1'
  | 'excessInventoryFeature2'
  | 'excessInventoryFeature3'
  | 'productReprocessingTitle'
  | 'productReprocessingDesc'
  | 'productReprocessingFeature1'
  | 'productReprocessingFeature2'
  | 'productReprocessingFeature3'
  | 'valueTitle'
  | 'valueDescription'
  | 'resaleEfficiencyTitle'
  | 'resaleEfficiencyDesc'
  | 'inventoryHealthTitle'
  | 'inventoryHealthDesc'
  | 'customerLoyaltyTitle'
  | 'customerLoyaltyDesc'
  | 'sustainabilityTitle'
  | 'sustainabilityDesc'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimaryButton'
  | 'ctaSecondaryButton'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '逆向物流',
    pageDescription:
      '专业的逆向物流方案，旨在将您的退货处理从成本中心转变为价值回收中心，通过专业操作最大化您的商品生命周期价值。高效退货处理、快速重新入库、积压库存管理与处置、产品再加工。',
    heroTitle: '变退货为资源，专业逆向物流提升您的利润空间',
    heroSubtitle:
      '专业的逆向物流方案，旨在将您的退货处理从成本中心转变为价值回收中心，通过专业操作最大化您的商品生命周期价值。高效退货处理、快速重新入库、积压库存管理与处置、产品再加工。',
    heroLabel: '逆向物流专家',
    getQuoteButton: '获取逆向物流报价',
    consultButton: '在线咨询',
    breadcrumbServices: '服务体系',
    breadcrumbReverse: '逆向物流',
    challengesTitle: '逆向物流的核心挑战',
    challengesDescription:
      '退货是电商运营中不可避免的一环，但如果管理不当，它将迅速成为侵蚀利润的"黑洞"。处理流程繁琐、商品价值贬损、库存积压，是所有商家在逆向物流中面临的共同难题。',
    lowEfficiencyTitle: '处理效率低下',
    lowEfficiencyDesc: '退货流程缓慢，导致客户退款延迟，影响客户体验和品牌声誉。',
    valueDepreciationTitle: '商品价值流失',
    valueDepreciationDesc: '退回的商品无法得到及时、专业的处理，导致其价值迅速下跌，难以二次销售。',
    inventoryBacklogTitle: '库存积压严重',
    inventoryBacklogDesc: '退货和积压库存占用了宝贵的仓储空间和资金，影响新品的库存周转。',
    dataBlackboxTitle: '数据黑盒',
    dataBlackboxDesc: '缺乏对退货原因和产品状态的有效数据分析，难以从根源上优化产品和运营。',
    solutionTitle: '可耐博达Kenable的一站式解决方案',
    solutionDescription:
      '可耐博达（广州）供应链管理有限公司的逆向物流方案，旨在将您的退货处理从成本中心转变为价值回收中心，通过专业操作最大化您的商品生命周期价值。',
    efficientReturnsTitle: '高效退货处理',
    efficientReturnsDesc:
      '我们提供专业的退货接收、开箱、检测和分类服务，系统化地处理来自各个渠道的退货。',
    efficientReturnsFeature1: '专业退货接收',
    efficientReturnsFeature2: '标准化检测分类',
    efficientReturnsFeature3: '多渠道退货处理',
    rapidRestockingTitle: '快速重新入库',
    rapidRestockingDesc:
      '对符合标准的退货商品，我们进行快速的库存再处理和重新上架，使其能立刻用于二次销售。',
    rapidRestockingFeature1: '快速质检上架',
    rapidRestockingFeature2: '库存状态更新',
    rapidRestockingFeature3: '二次销售就绪',
    excessInventoryTitle: '积压库存管理与处置',
    excessInventoryDesc: '我们为您提供灵活的积压库存管理方案，包括折扣销售、渠道清货或环保处置等。',
    excessInventoryFeature1: '折扣销售渠道',
    excessInventoryFeature2: '多渠道清货方案',
    excessInventoryFeature3: '环保处置服务',
    productReprocessingTitle: '产品再加工',
    productReprocessingDesc:
      '我们能够根据您的要求，对退回的商品进行必要的再加工，以优化库存，使其达到可再销售的状态。',
    productReprocessingFeature1: '产品修复翻新',
    productReprocessingFeature2: '重新包装优化',
    productReprocessingFeature3: '品质恢复处理',
    valueTitle: '选择我们，您将立即获得',
    valueDescription: '专业的逆向物流管理，是您提升运营韧性和盈利能力的隐形翅膀。',
    resaleEfficiencyTitle: '二次销售效率提升',
    resaleEfficiencyDesc: '通过快速的再上架流程，我们能显著提升您退货商品的转售效率，挽回损失。',
    inventoryHealthTitle: '库存健康度优化',
    inventoryHealthDesc: '帮助您快速处理积压库存，释放仓储空间和现金流，提升整体库存健康度。',
    customerLoyaltyTitle: '客户忠诚度增强',
    customerLoyaltyDesc: '快速、专业的退货退款流程是提升客户满意度和信任度的重要一环。',
    sustainabilityTitle: '可持续发展',
    sustainabilityDesc: '专业的处置方案有助于企业实现更环保、更可持续的运营。',
    ctaTitle: '选择专业逆向物流服务，挖掘退货价值',
    ctaSubtitle: '专业的退货处理方案，将成本中心转变为价值回收中心',
    ctaPrimaryButton: '获取逆向物流报价',
    ctaSecondaryButton: '下载服务手册',
  },
  en: {
    pageTitle: 'Reverse Logistics',
    pageDescription:
      'Professional reverse logistics solutions designed to transform your returns processing from a cost center into a value recovery center, maximizing your product lifecycle value through professional operations. Efficient returns processing, rapid re-stocking, excess inventory management and disposal, product reprocessing.',
    heroTitle:
      'Turn Returns into Resources: Professional Reverse Logistics to Boost Your Profit Margins',
    heroSubtitle:
      'Professional reverse logistics solutions designed to transform your returns processing from a cost center into a value recovery center, maximizing your product lifecycle value through professional operations. Efficient returns processing, rapid re-stocking, excess inventory management and disposal, product reprocessing.',
    heroLabel: 'Reverse Logistics Expert',
    getQuoteButton: 'Get Reverse Logistics Quote',
    consultButton: 'Online Consultation',
    breadcrumbServices: 'Services',
    breadcrumbReverse: 'Reverse Logistics',
    challengesTitle: 'Core Challenges in Reverse Logistics',
    challengesDescription:
      'Returns are an inevitable part of e-commerce operations, but if not managed properly, they can quickly become a profit-eroding "black hole". Complex processing procedures, product value depreciation, and inventory backlog are common challenges all merchants face in reverse logistics.',
    lowEfficiencyTitle: 'Low Processing Efficiency',
    lowEfficiencyDesc:
      'Slow return processes cause customer refund delays, affecting customer experience and brand reputation.',
    valueDepreciationTitle: 'Product Value Depreciation',
    valueDepreciationDesc:
      'Returned goods that cannot be processed timely and professionally result in rapid value decline, making resale difficult.',
    inventoryBacklogTitle: 'Serious Inventory Backlog',
    inventoryBacklogDesc:
      'Returns and excess inventory occupy valuable warehouse space and capital, affecting new product inventory turnover.',
    dataBlackboxTitle: 'Data Black Box',
    dataBlackboxDesc:
      'Lack of effective data analysis on return reasons and product conditions makes it difficult to optimize products and operations at the source.',
    solutionTitle: "Kenable's One-Stop Solution",
    solutionDescription:
      "Kenable Group Corp's reverse logistics solutions are designed to transform your returns processing from a cost center into a value recovery center, maximizing your product lifecycle value through professional operations.",
    efficientReturnsTitle: 'Efficient Returns Processing',
    efficientReturnsDesc:
      'We provide professional return receiving, unpacking, inspection, and classification services, systematically processing returns from various channels.',
    efficientReturnsFeature1: 'Professional Return Receiving',
    efficientReturnsFeature2: 'Standardized Inspection & Classification',
    efficientReturnsFeature3: 'Multi-Channel Return Processing',
    rapidRestockingTitle: 'Rapid Re-stocking',
    rapidRestockingDesc:
      'For returned goods that meet standards, we perform rapid inventory reprocessing and re-listing, making them immediately available for resale.',
    rapidRestockingFeature1: 'Rapid Quality Inspection & Listing',
    rapidRestockingFeature2: 'Inventory Status Updates',
    rapidRestockingFeature3: 'Resale Ready',
    excessInventoryTitle: 'Excess Inventory Management & Disposal',
    excessInventoryDesc:
      'We provide flexible excess inventory management solutions, including discount sales, channel clearance, or eco-friendly disposal.',
    excessInventoryFeature1: 'Discount Sales Channels',
    excessInventoryFeature2: 'Multi-Channel Clearance Solutions',
    excessInventoryFeature3: 'Eco-Friendly Disposal Services',
    productReprocessingTitle: 'Product Reprocessing',
    productReprocessingDesc:
      'We can perform necessary reprocessing on returned goods according to your requirements to optimize inventory and bring them to resalable condition.',
    productReprocessingFeature1: 'Product Repair & Refurbishment',
    productReprocessingFeature2: 'Repackaging Optimization',
    productReprocessingFeature3: 'Quality Recovery Processing',
    valueTitle: 'Choose Us and Get Immediate Benefits',
    valueDescription:
      'Professional reverse logistics management is your invisible wings for enhancing operational resilience and profitability.',
    resaleEfficiencyTitle: 'Resale Efficiency Enhancement',
    resaleEfficiencyDesc:
      'Through rapid re-listing processes, we can significantly improve the resale efficiency of your returned goods and recover losses.',
    inventoryHealthTitle: 'Inventory Health Optimization',
    inventoryHealthDesc:
      'Help you quickly process excess inventory, release warehouse space and cash flow, and improve overall inventory health.',
    customerLoyaltyTitle: 'Customer Loyalty Enhancement',
    customerLoyaltyDesc:
      'Fast and professional return and refund processes are important for improving customer satisfaction and trust.',
    sustainabilityTitle: 'Sustainable Development',
    sustainabilityDesc:
      'Professional disposal solutions help enterprises achieve more environmentally friendly and sustainable operations.',
    ctaTitle: 'Choose Professional Reverse Logistics Services to Unlock Return Value',
    ctaSubtitle:
      'Professional return processing solutions to transform cost centers into value recovery centers',
    ctaPrimaryButton: 'Get Reverse Logistics Quote',
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
  { label: getText('breadcrumbReverse'), href: '/services/reverse-logistics' },
])
</script>
