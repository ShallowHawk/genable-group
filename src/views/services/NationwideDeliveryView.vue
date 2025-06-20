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
      image-url="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :label="getText('heroLabel')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('quoteButton') }}
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

    <!-- 全美派送的核心挑战 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('challengesTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            {{ getText('challengesDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧视觉化图形 -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                :alt="getText('challengesImageAlt')"
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
                    {{ getText('challenge1Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('challenge1Desc') }}
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
                    {{ getText('challenge2Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('challenge2Desc') }}
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
                    {{ getText('challenge3Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('challenge3Desc') }}
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
                    {{ getText('challenge4Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('challenge4Desc') }}
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
            {{ getText('solutionDesc') }}
          </p>
        </div>

        <div class="space-y-16">
          <!-- 强大的自营卡车网络 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ getText('trucksTitle') }}</h3>
              <p class="text-gray-600 mb-6">
                {{ getText('trucksDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('trucksFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('trucksFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('trucksFeature3') }}
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop&crop=center"
                :alt="getText('trucksImageAlt')"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 顶级快递合作伙伴 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1589793463308-658ed42e5dfe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                :alt="getText('partnersImageAlt')"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ getText('partnersTitle') }}</h3>
              <p class="text-gray-600 mb-6">
                {{ getText('partnersDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('partnersFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('partnersFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('partnersFeature3') }}
                </li>
              </ul>
            </div>
          </div>

          <!-- 多仓协同分发 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('multiWarehouseTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('multiWarehouseDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('multiWarehouseFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('multiWarehouseFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('multiWarehouseFeature3') }}
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop&crop=center"
                alt="仓库网络分布图"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 定制化派送线路 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
                alt="定制化运输方案"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                {{ getText('customRoutesTitle') }}
              </h3>
              <p class="text-gray-600 mb-6">
                {{ getText('customRoutesDesc') }}
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customRoutesFeature1') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customRoutesFeature2') }}
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  {{ getText('customRoutesFeature3') }}
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
            {{ getText('valueDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">{{ getText('fulfillmentTitle') }}</h3>
            </div>
            <p class="text-gray-600">
              {{ getText('fulfillmentDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">{{ getText('costReductionTitle') }}</h3>
            </div>
            <p class="text-gray-600">{{ getText('costReductionDesc') }}</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4"
              >
                <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('riskMinimizationTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('riskMinimizationDesc') }}
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
              <h3 class="text-2xl font-bold text-gray-900">
                {{ getText('businessExpansionTitle') }}
              </h3>
            </div>
            <p class="text-gray-600">
              {{ getText('businessExpansionDesc') }}
            </p>
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
  | 'quoteButton'
  | 'consultButton'
  | 'challengesTitle'
  | 'challengesDesc'
  | 'challengesImageAlt'
  | 'challenge1Title'
  | 'challenge1Desc'
  | 'challenge2Title'
  | 'challenge2Desc'
  | 'challenge3Title'
  | 'challenge3Desc'
  | 'challenge4Title'
  | 'challenge4Desc'
  | 'solutionTitle'
  | 'solutionDesc'
  | 'trucksTitle'
  | 'trucksDesc'
  | 'trucksFeature1'
  | 'trucksFeature2'
  | 'trucksFeature3'
  | 'trucksImageAlt'
  | 'partnersTitle'
  | 'partnersDesc'
  | 'partnersFeature1'
  | 'partnersFeature2'
  | 'partnersFeature3'
  | 'partnersImageAlt'
  | 'multiWarehouseTitle'
  | 'multiWarehouseDesc'
  | 'multiWarehouseFeature1'
  | 'multiWarehouseFeature2'
  | 'multiWarehouseFeature3'
  | 'customRoutesTitle'
  | 'customRoutesDesc'
  | 'customRoutesFeature1'
  | 'customRoutesFeature2'
  | 'customRoutesFeature3'
  | 'valueTitle'
  | 'valueDesc'
  | 'fulfillmentTitle'
  | 'fulfillmentDesc'
  | 'costReductionTitle'
  | 'costReductionDesc'
  | 'riskMinimizationTitle'
  | 'riskMinimizationDesc'
  | 'businessExpansionTitle'
  | 'businessExpansionDesc'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimaryButton'
  | 'ctaSecondaryButton'
  | 'breadcrumbServices'
  | 'breadcrumbDelivery'

// Translation mappings - Professional English for nationwide delivery and last-mile logistics
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '全国派送',
    pageDescription:
      '覆盖全美的自营及合作派送网络，灵活满足不同配送需求。整合自营车队与顶级快递资源，为您打造灵活、可靠、覆盖全美的派送矩阵。',
    heroTitle: '决胜最后一公里，构建高效全美派送体系',
    heroSubtitle:
      '覆盖全美的自营及合作派送网络，灵活满足不同配送需求。整合自营车队与顶级快递资源，为您打造灵活、可靠、覆盖全美的派送矩阵。',
    heroLabel: '全美派送专家',
    quoteButton: '获取派送报价',
    consultButton: '在线咨询',
    challengesTitle: '全美派送的核心挑战',
    challengesDesc:
      '美国市场广阔，但复杂的地理分布、高昂的运输成本和多变的渠道需求，为企业带来了严峻的派送挑战。如何确保货物经济、快速、准确地送达遍布全美的客户手中，是您成功的关键。',
    challengesImageAlt: '全美派送网络挑战',
    challenge1Title: '时效与成本难以平衡',
    challenge1Desc:
      '长途干线运输耗时且昂贵，尤其是在横跨东西海岸时，如何兼顾速度与成本成为关键挑战。',
    challenge2Title: '多渠道履约复杂',
    challenge2Desc: '同时管理B2B批量订单和直接面向消费者的D2C包裹，需要不同的派送策略和合作伙伴。',
    challenge3Title: '最后一公里瓶颈',
    challenge3Desc: '终端派送的效率和稳定性直接影响客户满意度，但管理起来极其复杂。',
    challenge4Title: '运力波动风险',
    challenge4Desc: '在物流旺季，寻找稳定可靠的卡车运力成为一大难题，影响整体运营稳定性。',
    solutionTitle: '可耐博达Kenable的一站式解决方案',
    solutionDesc:
      '可耐博达（广州）供应链管理有限公司整合自营车队与顶级快递资源，为您打造了一个灵活、可靠、覆盖全美的派送矩阵，从容应对各类派送需求。',
    trucksTitle: '强大的自营卡车网络',
    trucksDesc:
      '我们拥有超过450辆拖车卡车的自营车队，专注于大批量货物的长途干线运输和区域分销，确保运力与时效。',
    trucksFeature1: '450+辆自营拖车卡车',
    trucksFeature2: '专业长途干线运输',
    trucksFeature3: '区域分销网络',
    trucksImageAlt: '自营卡车车队',
    partnersTitle: '顶级快递合作伙伴',
    partnersDesc:
      '作为UPS和USPS的官方合作伙伴，我们能以极具优势的条件处理包裹派送，确保3-5天的稳定时效和99%的取件率。',
    partnersFeature1: 'UPS & USPS官方合作伙伴',
    partnersFeature2: '3-5天稳定时效',
    partnersFeature3: '99%取件成功率',
    partnersImageAlt: '包裹分拣中心',
    multiWarehouseTitle: '多仓协同分发',
    multiWarehouseDesc:
      '我们遍布加州、德州、佐治亚州和印第安纳州的战略仓库网络，能作为您的全国分拨中心，就近发货，缩短派送距离。',
    multiWarehouseFeature1: '4大战略仓库网络',
    multiWarehouseFeature2: '全国分拨中心',
    multiWarehouseFeature3: '就近发货优化',
    customRoutesTitle: '定制化派送线路',
    customRoutesDesc:
      '我们提供"整批货-卡车"和"整批货-包裹"等专线服务，根据您的货物特性和渠道需求，匹配最优派送方案。',
    customRoutesFeature1: '"整批货-卡车"专线',
    customRoutesFeature2: '"整批货-包裹"专线',
    customRoutesFeature3: '定制化匹配方案',
    valueTitle: '选择我们，您将立即获得',
    valueDesc: '选择可耐博达Kenable，意味着您的货物拥有了覆盖全美的"高速公路"。',
    fulfillmentTitle: '履约效率全面提升',
    fulfillmentDesc: '结合快递伙伴关系和自营卡车网络，我们能显著提升您的订单处理速度和客户满意度。',
    costReductionTitle: '派送成本显著降低',
    costReductionDesc: '通过多仓就近发货和优化的运输组合，有效降低您的物流成本。',
    riskMinimizationTitle: '运输风险最小化',
    riskMinimizationDesc: '自营车队与官方合作确保了服务的可靠性，降低了货物丢失或延误的风险。',
    businessExpansionTitle: '业务拓展无忧',
    businessExpansionDesc: '无论您的业务扩展到美国哪个角落，我们强大的派送网络都能提供有力支撑。',
    ctaTitle: '选择专业全美派送服务，畅达每一个角落',
    ctaSubtitle: '强大的派送网络，让您的货物快速抵达全美各地',
    ctaPrimaryButton: '获取派送报价',
    ctaSecondaryButton: '下载服务手册',
    breadcrumbServices: '服务体系',
    breadcrumbDelivery: '全国派送',
  },
  en: {
    pageTitle: 'Nationwide Delivery',
    pageDescription:
      'Comprehensive self-operated and partner delivery network covering all US states, flexibly meeting diverse distribution needs. Integrated fleet and premium courier resources create a flexible, reliable, nationwide delivery matrix.',
    heroTitle: 'Master the Last Mile, Build Efficient Nationwide Delivery Systems',
    heroSubtitle:
      'Comprehensive self-operated and partner delivery network covering all US states, flexibly meeting diverse distribution needs. Integrated fleet and premium courier resources create a flexible, reliable, nationwide delivery matrix.',
    heroLabel: 'Nationwide Delivery Experts',
    quoteButton: 'Get Delivery Quote',
    consultButton: 'Online Consultation',
    challengesTitle: 'Core Challenges of Nationwide Delivery',
    challengesDesc:
      'The vast US market presents significant delivery challenges with complex geographic distribution, high transportation costs, and diverse channel requirements. Ensuring economical, fast, and accurate delivery to customers across America is critical to your success.',
    challengesImageAlt: 'Nationwide delivery network challenges',
    challenge1Title: 'Balancing Speed and Cost',
    challenge1Desc:
      'Long-haul transportation is time-consuming and expensive, especially when crossing from coast to coast. Balancing speed with cost becomes a critical challenge.',
    challenge2Title: 'Multi-Channel Fulfillment Complexity',
    challenge2Desc:
      'Simultaneously managing B2B bulk orders and direct-to-consumer D2C packages requires different delivery strategies and partnerships.',
    challenge3Title: 'Last-Mile Bottlenecks',
    challenge3Desc:
      'Terminal delivery efficiency and stability directly impact customer satisfaction, but are extremely complex to manage.',
    challenge4Title: 'Capacity Volatility Risks',
    challenge4Desc:
      'During peak logistics seasons, finding stable and reliable trucking capacity becomes a major challenge, affecting overall operational stability.',
    solutionTitle: "Kenable's One-Stop Solution",
    solutionDesc:
      'Kenable Group integrates self-operated fleet and premium courier resources to create a flexible, reliable, nationwide delivery matrix that confidently handles all types of delivery requirements.',
    trucksTitle: 'Powerful Self-Operated Truck Network',
    trucksDesc:
      'We own a fleet of over 450 tractor-trailers focused on high-volume long-haul transportation and regional distribution, ensuring capacity and timing.',
    trucksFeature1: '450+ Self-Operated Tractor-Trailers',
    trucksFeature2: 'Professional Long-Haul Transportation',
    trucksFeature3: 'Regional Distribution Network',
    trucksImageAlt: 'Self-operated truck fleet',
    partnersTitle: 'Premier Courier Partners',
    partnersDesc:
      'As official partners with UPS and USPS, we process parcel delivery with highly competitive terms, ensuring stable 3-5 day delivery and 99% pickup success rates.',
    partnersFeature1: 'UPS & USPS Official Partners',
    partnersFeature2: '3-5 Day Stable Delivery',
    partnersFeature3: '99% Pickup Success Rate',
    partnersImageAlt: 'Package sorting center',
    multiWarehouseTitle: 'Multi-Warehouse Collaborative Distribution',
    multiWarehouseDesc:
      'Our strategic warehouse network spanning California, Texas, Georgia, and Indiana serves as your national distribution centers, enabling nearby shipping to reduce delivery distances.',
    multiWarehouseFeature1: '4 Strategic Warehouse Network',
    multiWarehouseFeature2: 'National Distribution Centers',
    multiWarehouseFeature3: 'Nearby Shipping Optimization',
    customRoutesTitle: 'Customized Delivery Routes',
    customRoutesDesc:
      'We provide specialized services like "bulk-to-truck" and "bulk-to-parcel" routes, matching optimal delivery solutions based on your cargo characteristics and channel requirements.',
    customRoutesFeature1: '"Bulk-to-Truck" Dedicated Routes',
    customRoutesFeature2: '"Bulk-to-Parcel" Dedicated Routes',
    customRoutesFeature3: 'Customized Matching Solutions',
    valueTitle: 'Choose Us and Get Immediate Benefits',
    valueDesc:
      'Choosing Kenable means your cargo has access to a nationwide "highway" covering all of America.',
    fulfillmentTitle: 'Comprehensive Fulfillment Efficiency Enhancement',
    fulfillmentDesc:
      'Combining courier partnerships and self-operated truck networks, we significantly improve your order processing speed and customer satisfaction.',
    costReductionTitle: 'Significant Delivery Cost Reduction',
    costReductionDesc:
      'Through multi-warehouse nearby shipping and optimized transportation combinations, effectively reducing your logistics costs.',
    riskMinimizationTitle: 'Transportation Risk Minimization',
    riskMinimizationDesc:
      'Self-operated fleet and official partnerships ensure service reliability, reducing risks of cargo loss or delays.',
    businessExpansionTitle: 'Worry-Free Business Expansion',
    businessExpansionDesc:
      'No matter where your business expands in the United States, our robust delivery network provides strong support.',
    ctaTitle: 'Choose Professional Nationwide Delivery Services, Reach Every Corner',
    ctaSubtitle:
      'Powerful delivery network to get your cargo quickly to destinations across America',
    ctaPrimaryButton: 'Get Delivery Quote',
    ctaSecondaryButton: 'Download Service Manual',
    breadcrumbServices: 'Services',
    breadcrumbDelivery: 'Nationwide Delivery',
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
  { label: getText('breadcrumbDelivery'), href: '/services/nationwide-delivery' },
])
</script>
