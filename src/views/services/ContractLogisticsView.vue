<template>
  <PageLayout :show-page-header="false">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('title')"
      :subtitle="getText('subtitle')"
      image-url="https://plus.unsplash.com/premium_photo-1661559046208-0cef1cbf7b0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :label="getText('label')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('getQuote') }}
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
          >
            {{ getText('consultation') }}
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
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('ourSolutionsTitle') }}
            </h2>

            <div class="space-y-6">
              <!-- 仓储与库存管理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('inventoryTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('inventoryDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('fulfillmentTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('fulfillmentDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('valueAddedTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('valueAddedDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('reverseLogisticsTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('reverseLogisticsDesc') }}
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
              src="https://plus.unsplash.com/premium_photo-1682145409553-75a35479e3cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('whyChooseTitle') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('networkTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('networkDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('performanceTitle') }}
                  </h3>
                  <p class="text-gray-600">{{ getText('performanceDesc') }}</p>
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('integrationTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('integrationDesc') }}
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('customizationTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('customizationDesc') }}
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
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ getText('caseStudyTitle') }}
              </h2>
              <h3 class="text-xl text-blue-600 font-semibold mb-6">
                {{ getText('caseStudySubtitle') }}
              </h3>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">
                  {{ getText('challengeTitle') }}
                </h4>
                <p class="text-gray-600 mb-4">
                  <strong>{{ getText('challenge') }}</strong
                  >{{ getText('challengeDesc') }}
                </p>
                <p class="text-gray-600">
                  <strong>{{ getText('solution') }}</strong
                  >{{ getText('solutionDesc') }}
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">{{ getText('effect') }}</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {{ getText('effectDesc') }}
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
              src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="包装精美的化妆品包裹传送带"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择个性化定制方案，优化您的供应链"
      subtitle="全美仓储网络，根据您的业务特点量身定制高效的订单履行和库存管理解决方案"
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
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
import PageLayout from '@/components/layout/PageLayout.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  | 'title'
  | 'subtitle'
  | 'label'
  | 'getQuote'
  | 'consultation'
  | 'ourSolutionsTitle'
  | 'inventoryTitle'
  | 'inventoryDesc'
  | 'fulfillmentTitle'
  | 'fulfillmentDesc'
  | 'valueAddedTitle'
  | 'valueAddedDesc'
  | 'reverseLogisticsTitle'
  | 'reverseLogisticsDesc'
  | 'whyChooseTitle'
  | 'networkTitle'
  | 'networkDesc'
  | 'performanceTitle'
  | 'performanceDesc'
  | 'integrationTitle'
  | 'integrationDesc'
  | 'customizationTitle'
  | 'customizationDesc'
  | 'caseStudyTitle'
  | 'caseStudySubtitle'
  | 'challengeTitle'
  | 'challenge'
  | 'challengeDesc'
  | 'solution'
  | 'solutionDesc'
  | 'effect'
  | 'effectDesc'

// 翻译映射 - 使用地道商业英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    title: '个性化定制方案，释放您的仓储潜能',
    subtitle:
      '可耐博达在美国四大战略枢纽（加州、德州、佐治亚州、印第安纳州）拥有超22,000平米自营仓网。根据您的业务特点量身定制仓储管理、订单履约、增值服务及逆向物流等专属解决方案，助您轻松掌控美国供应链。',
    label: '全美仓储与履约专家',
    getQuote: '获取仓储报价',
    consultation: '在线咨询',
    ourSolutionsTitle: '我们的个性化定制方案',
    inventoryTitle: '智能仓储与库存管理',
    inventoryDesc:
      '布局全美关键区域，配备先进WMS系统，根据您的货品特性和业务需求定制存储策略，实现库存精准管控与高效周转，有效降低持有成本。',
    fulfillmentTitle: '高效订单履行与配送',
    fulfillmentDesc:
      '支持D2C/B2B全渠道订单处理，一站式发货。根据您的业务模式量身定制履约流程，灵活调配资源，应对订单波动与供应商交货变化，确保履约时效。',
    valueAddedTitle: '专属增值服务定制',
    valueAddedDesc:
      '根据您的品牌需求和产品特性，量身定制贴标、换包装、简单组装等增值服务，提升产品附加值，满足市场多元需求。',
    reverseLogisticsTitle: '敏捷逆向物流管理',
    reverseLogisticsDesc: '建立高效退货处理流程，支持检测、翻新、再销售，最大化资产回收价值。',
    whyChooseTitle: '为什么选择可耐博达个性化定制方案？',
    networkTitle: '战略仓网，量身布局',
    networkDesc:
      '自营仓超22,000平米，布局于加州、德州、佐治亚州、印第安纳州四大核心区域，根据您的客户分布和业务特点，提供最优仓储配置。',
    performanceTitle: '极速履约，承诺必达',
    performanceDesc: '99%订单24小时内完成出库，全美配送时效仅需2-5天。',
    integrationTitle: '全渠道集成，定制对接',
    integrationDesc:
      '根据您的销售渠道深度对接Amazon, Shopify, WooCommerce等主流平台，定制化集成方案，轻松管理多渠道订单。',
    customizationTitle: '专属服务，品牌定制',
    customizationDesc:
      '针对您的品牌特色和客户需求，量身打造贴标、包装设计等专属增值服务，助力品牌塑造，优化终端客户体验。',
    caseStudyTitle: '可耐博达在行动',
    caseStudySubtitle: '赋能DTC美妆新锐，实现全美订单爆发式增长下的高效履约',
    challengeTitle: '挑战与解决方案',
    challenge: '挑战：',
    challengeDesc: '社交媒体引爆后订单激增，原有自发货体系崩溃，急需专业仓配伙伴。',
    solution: '解决方案：',
    solutionDesc:
      '根据客户业务特点定制东、西海岸双仓布局，WMS系统直连Shopify店铺，量身打造自动化订单处理、精美包装与快速发货的专属流程。',
    effect: '成效：',
    effectDesc: '订单处理准确率高达99.9%',
  },
  en: {
    title: 'Custom Contract Logistics Solutions That Unlock Your Potential',
    subtitle:
      'Kenable operates over 22,000 sqft of owned warehouse space across four strategic US hubs in California, Texas, Georgia, and Indiana. We deliver tailored warehousing, order fulfillment, value-added services, and reverse logistics solutions designed to effortlessly manage your American supply chain.',
    label: 'US Warehousing & Fulfillment Expert',
    getQuote: 'Get Warehouse Quote',
    consultation: 'Get Started',
    ourSolutionsTitle: 'Our Customized Solutions',
    inventoryTitle: 'Smart Warehousing & Inventory Management',
    inventoryDesc:
      'Strategically positioned across key US regions with advanced WMS systems. We create customized storage strategies based on your product characteristics and business needs, ensuring precise inventory control and efficient turnover while reducing holding costs.',
    fulfillmentTitle: 'Efficient Order Fulfillment & Distribution',
    fulfillmentDesc:
      'Supporting both D2C and B2B omnichannel order processing with seamless fulfillment. We customize fulfillment workflows to your business model, flexibly allocating resources to handle order fluctuations and supplier delivery changes while ensuring delivery performance.',
    valueAddedTitle: 'Dedicated Value-Added Services',
    valueAddedDesc:
      'Tailored to your brand requirements and product characteristics, we provide customized labeling, repackaging, and light assembly services to enhance product value and meet diverse market demands.',
    reverseLogisticsTitle: 'Agile Reverse Logistics Management',
    reverseLogisticsDesc:
      'Establishing efficient returns processing workflows with inspection, refurbishment, and resale support to maximize asset recovery value.',
    whyChooseTitle: 'Why Choose Kenable Contract Logistics?',
    networkTitle: 'Strategic Network, Tailored for You',
    networkDesc:
      "Over 22,000 sqft of owned warehouse space strategically located across California, Texas, Georgia, and Indiana's four core regions, providing optimal warehouse configuration based on your customer distribution and business characteristics.",
    performanceTitle: 'Lightning-Fast Fulfillment Guaranteed',
    performanceDesc: '99% of orders shipped within 24 hours, with 2-5 day delivery nationwide.',
    integrationTitle: 'Omnichannel Integration & Custom Setup',
    integrationDesc:
      'Deep integration with Amazon, Shopify, WooCommerce, and other leading platforms based on your sales channels, with customized integration solutions for effortless multi-channel order management.',
    customizationTitle: 'Dedicated Services, Brand-Focused',
    customizationDesc:
      'Tailored to your brand identity and customer needs, we create custom labeling, packaging design, and other dedicated value-added services to support brand building and optimize end-customer experience.',
    caseStudyTitle: 'Kenable in Action',
    caseStudySubtitle:
      'Empowering DTC Beauty Innovation: Achieving Efficient Fulfillment During Explosive Order Growth',
    challengeTitle: 'Challenge & Solution',
    challenge: 'Challenge: ',
    challengeDesc:
      'After a social media viral moment triggered explosive order growth, the existing self-fulfillment system collapsed, requiring a professional warehousing and fulfillment partner.',
    solution: 'Solution: ',
    solutionDesc:
      'Based on client business characteristics, we designed a dual East-West Coast warehouse layout with WMS system direct connection to Shopify store, creating a custom automated order processing, premium packaging, and rapid fulfillment workflow.',
    effect: 'Results:',
    effectDesc: 'Order processing accuracy reaching 99.9%',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>
