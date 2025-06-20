<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <!-- 服务体系页面Banner -->
    <ServicesHero />

    <!-- 服务概览 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('fiveCoreServices') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ getText('servicesOverviewDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="service.route"
            class="block group"
          >
            <BaseCard
              variant="elevated"
              hoverable
              class="h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
            >
              <template #header>
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors"
                  >
                    <Icon
                      :name="service.icon"
                      size="xl"
                      class="text-primary-500 group-hover:text-primary-600"
                    />
                  </div>
                  <h3
                    class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors"
                  >
                    {{ service.title }}
                  </h3>
                </div>
              </template>
              <p class="text-gray-600 mb-4 text-left">{{ service.description }}</p>
              <template #footer>
                <ul class="text-sm text-gray-500 space-y-1 mb-4 text-left">
                  <li v-for="feature in service.features" :key="feature" class="flex items-center">
                    <Icon name="check" size="xs" class="text-primary-500 mr-2" />
                    {{ feature }}
                  </li>
                </ul>
                <div
                  class="text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors text-left"
                >
                  {{ getText('learnDetails') }} →
                </div>
              </template>
            </BaseCard>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('transparentProcessTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('transparentProcessDesc') }}</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div v-for="(step, index) in processSteps" :key="step.title" class="text-center">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                >
                  {{ index + 1 }}
                </div>
                <Icon
                  v-if="index < processSteps.length - 1"
                  name="arrow-right"
                  size="md"
                  class="absolute top-8 left-1/2 transform translate-x-8 text-gray-400 hidden lg:block"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('threeReasonsTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('threeReasonsDesc') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div class="space-y-8">
              <div v-for="advantage in advantages" :key="advantage.title" class="flex gap-4">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon :name="advantage.icon" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ advantage.title }}</h3>
                  <p class="text-gray-600">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <div class="grid grid-cols-2 gap-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">22,000+</div>
                  <div class="text-sm text-gray-600">{{ getText('sqm') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">22</div>
                  <div class="text-sm text-gray-600">{{ getText('years') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">450+</div>
                  <div class="text-sm text-gray-600">{{ getText('trucks') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">4</div>
                  <div class="text-sm text-gray-600">{{ getText('warehouses') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 统一CTA区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import Icon from '@/components/ui/Icon.vue'
import ServicesHero from '@/components/sections/ServicesHero.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 服务概览
  | 'fiveCoreServices'
  | 'servicesOverviewDesc'
  // 服务流程
  | 'transparentProcessTitle'
  | 'transparentProcessDesc'
  // 服务优势
  | 'threeReasonsTitle'
  | 'threeReasonsDesc'
  // 通用文本
  | 'learnDetails'
  | 'years'
  | 'sqm'
  | 'trucks'
  | 'warehouses'
  // 服务项目
  | 'firstLegLogistics'
  | 'firstLegDesc'
  | 'nationwideDelivery'
  | 'nationwideDesc'
  | 'overseasWarehousing'
  | 'overseasDesc'
  | 'valueAddedServices'
  | 'valueAddedDesc'
  | 'reverseLogistics'
  | 'reverseDesc'
  // 服务特性
  | 'pickup'
  | 'exportCustoms'
  | 'destinationClearance'
  | 'fbaHeadhaul'
  | 'parcelExpress'
  | 'truckExpress'
  | 'deliveryNetwork'
  | 'warehouseArea'
  | 'dropShipping'
  | 'platformShipping'
  | 'warehouseManagement'
  | 'sorting'
  | 'labelReplacement'
  | 'assembly'
  | 'customizedSolutions'
  | 'returnProcessing'
  | 'returnInspection'
  | 'inventoryManagement'
  // 流程步骤
  | 'orderPickup'
  | 'orderPickupDesc'
  | 'internationalShipping'
  | 'internationalDesc'
  | 'customsClearance'
  | 'customsDesc'
  | 'warehouseReceiving'
  | 'warehouseReceivingDesc'
  | 'orderProcessing'
  | 'orderProcessingDesc'
  | 'lastMileDelivery'
  | 'lastMileDesc'
  // 优势内容
  | 'selfOperatedAdvantage'
  | 'selfOperatedDesc'
  | 'endToEndAdvantage'
  | 'endToEndDesc'
  | 'experienceAdvantage'
  | 'experienceDesc'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '端到端一体化服务体系',
    pageDescription: '我们提供从国际头程到美国末端派送的全链路解决方案，精准、高效、全程可控。',

    // 服务概览
    fiveCoreServices: '五大核心服务',
    servicesOverviewDesc: '覆盖跨境供应链全流程，为您提供一站式物流解决方案',

    // 服务流程
    transparentProcessTitle: '透明高效的服务流程',
    transparentProcessDesc: '标准化作业流程，确保服务质量和时效',

    // 服务优势
    threeReasonsTitle: '选择我们的三大理由',
    threeReasonsDesc: '行业领先的服务水平和技术能力',

    // 通用文本
    learnDetails: '了解详情',
    years: '年行业经验',
    sqm: '平方米自营仓库',
    trucks: '自有拖车卡车',
    warehouses: '大核心自营仓库',

    // 服务项目
    firstLegLogistics: '国际头程物流',
    firstLegDesc: '从中国到美国的国际运输、清关及头程配送服务',
    nationwideDelivery: '全国派送',
    nationwideDesc: '覆盖全美的自营及合作派送网络，灵活满足不同配送需求',
    overseasWarehousing: '海外仓储',
    overseasDesc: '多地自营仓库，总面积超22,000m²，提供专业仓储与库存管理',
    valueAddedServices: '增值服务',
    valueAddedDesc: '提供定制化的增值服务，满足多样化的客户需求',
    reverseLogistics: '逆向物流',
    reverseDesc: '专业的退货处理服务，完善的逆向物流解决方案',

    // 服务特性
    pickup: '揽收、订舱',
    exportCustoms: '出口报关',
    destinationClearance: '目的地清关与拆箱',
    fbaHeadhaul: 'FBA及指定仓库头程运输',
    parcelExpress: '"整票-包裹"专线派送',
    truckExpress: '"整票-卡车"专线派送',
    deliveryNetwork: '覆盖全美的自营及合作派送网络',
    warehouseArea: '多地自营仓库，总面积超22,000m²',
    dropShipping: '一件代发 (Drop-Shipping)',
    platformShipping: '指定渠道与平台发货',
    warehouseManagement: '专业仓储与库存管理',
    sorting: '库内分拣、质检',
    labelReplacement: '更换标签、更换包装',
    assembly: '产品组装与定制化处理',
    customizedSolutions: '满足多样化需求的定制方案',
    returnProcessing: '退货处理与接收',
    returnInspection: '退货质检与重新上架',
    inventoryManagement: '过剩库存管理与处置',

    // 流程步骤
    orderPickup: '下单/揽收',
    orderPickupDesc: '客户下单，1-2天内完成上门揽收及出口报关',
    internationalShipping: '国际运输',
    internationalDesc: 'Matson快船服务，12-15天完成跨国海运',
    customsClearance: '清关入仓',
    customsDesc: '1-3天完成清关，12-36小时完成卸货并送达洛杉矶仓库',
    warehouseReceiving: '收货上架',
    warehouseReceivingDesc: '12-36小时完成货物清点、质检并精准上架',
    orderProcessing: '订单处理',
    orderProcessingDesc: '系统即时同步订单，12-24小时内完成拣选、打包与派发',
    lastMileDelivery: '末端派送',
    lastMileDesc: '通过UPS/USPS等合作方，2-5天送达全美客户手中',

    // 优势内容
    selfOperatedAdvantage: '全自营仓储与车队',
    selfOperatedDesc:
      '在美国核心物流枢纽拥有超过22,000平方米的自营仓库和超过450辆拖车的自营车队，确保对货物操作、安全和时效的完全掌控。',
    endToEndAdvantage: '端到端全链路覆盖',
    endToEndDesc:
      '提供从国际货运、清关、仓储到末端派送和逆向物流的全链条服务，无需对接多个服务商，极大简化您的供应链管理。',
    experienceAdvantage: '深厚行业经验与权威合作',
    experienceDesc:
      '拥有近22年的美国本土物流经验，是UPS和USPS的官方合作伙伴，深刻理解行业法规与平台政策，为您规避风险。',
  },
  en: {
    // 页面基本信息 - 专业英文表达
    pageTitle: 'End-to-End Integrated Service System',
    pageDescription:
      'We provide comprehensive full-chain solutions from international shipping to US last-mile delivery - precise, efficient and fully controlled.',

    // 服务概览 - 简洁有力
    fiveCoreServices: 'Five Core Services',
    servicesOverviewDesc:
      'Complete cross-border supply chain coverage with one-stop logistics solutions',

    // 服务流程
    transparentProcessTitle: 'Transparent & Efficient Service Process',
    transparentProcessDesc:
      'Standardized operational procedures ensuring service quality and timeliness',

    // 服务优势
    threeReasonsTitle: 'Three Reasons to Choose Us',
    threeReasonsDesc: 'Industry-leading service levels and technical capabilities',

    // 通用文本 - 自然表达
    learnDetails: 'Learn More',
    years: 'Years of Experience',
    sqm: 'Sq Ft Self-Operated Warehouses',
    trucks: 'Fleet Vehicles',
    warehouses: 'Core Self-Operated Warehouses',

    // 服务项目 - 专业表达
    firstLegLogistics: 'International First-Mile Logistics',
    firstLegDesc:
      'International shipping, customs clearance, and first-mile delivery from China to US',
    nationwideDelivery: 'Nationwide Delivery',
    nationwideDesc:
      'Comprehensive self-operated and partner delivery network covering all US states',
    overseasWarehousing: 'Overseas Warehousing',
    overseasDesc:
      'Multi-location self-operated warehouses exceeding 22,000m² with professional storage management',
    valueAddedServices: 'Value-Added Services',
    valueAddedDesc: 'Customized value-added services meeting diverse client requirements',
    reverseLogistics: 'Reverse Logistics',
    reverseDesc: 'Professional returns processing with comprehensive reverse logistics solutions',

    // 服务特性 - 地道英文
    pickup: 'Pickup & Booking',
    exportCustoms: 'Export Customs Clearance',
    destinationClearance: 'Destination Customs & Deconsolidation',
    fbaHeadhaul: 'FBA & Designated Warehouse First-Mile',
    parcelExpress: 'LTL-to-Parcel Express Service',
    truckExpress: 'LTL-to-Truck Express Service',
    deliveryNetwork: 'Nationwide Self-Operated & Partner Delivery Network',
    warehouseArea: 'Multi-location Self-Operated Warehouses (22,000+ m²)',
    dropShipping: 'Drop-Shipping Services',
    platformShipping: 'Platform & Channel-Specific Fulfillment',
    warehouseManagement: 'Professional Warehousing & Inventory Management',
    sorting: 'In-House Sorting & Quality Control',
    labelReplacement: 'Label & Packaging Replacement',
    assembly: 'Product Assembly & Custom Processing',
    customizedSolutions: 'Tailored Solutions for Diverse Needs',
    returnProcessing: 'Returns Processing & Receiving',
    returnInspection: 'Returns Inspection & Restocking',
    inventoryManagement: 'Excess Inventory Management & Disposal',

    // 流程步骤 - 清晰简洁
    orderPickup: 'Order/Pickup',
    orderPickupDesc:
      'Customer order placement, door-to-door pickup and export clearance within 1-2 days',
    internationalShipping: 'International Shipping',
    internationalDesc: 'Matson express service, 12-15 days cross-Pacific shipping',
    customsClearance: 'Customs & Warehouse Entry',
    customsDesc: '1-3 days customs clearance, 12-36 hours unloading and delivery to LA warehouse',
    warehouseReceiving: 'Receiving & Shelving',
    warehouseReceivingDesc:
      '12-36 hours for goods inspection, quality control and accurate shelving',
    orderProcessing: 'Order Processing',
    orderProcessingDesc: 'Real-time order sync, 12-24 hours for picking, packing and dispatch',
    lastMileDelivery: 'Last-Mile Delivery',
    lastMileDesc: 'Through UPS/USPS partners, 2-5 days delivery to customers nationwide',

    // 优势内容 - 专业权威
    selfOperatedAdvantage: 'Fully Self-Operated Warehouses & Fleet',
    selfOperatedDesc:
      'Over 22,000 square meters of self-operated warehouses and 450+ trailers in key US logistics hubs, ensuring complete control over cargo operations, security, and delivery timing.',
    endToEndAdvantage: 'Complete End-to-End Chain Coverage',
    endToEndDesc:
      'Full-service coverage from international freight, customs clearance, warehousing to last-mile delivery and reverse logistics, eliminating the need for multiple service providers and greatly simplifying your supply chain management.',
    experienceAdvantage: 'Deep Industry Experience & Authoritative Partnerships',
    experienceDesc:
      'Nearly 22 years of US domestic logistics experience as official partners with UPS and USPS, with deep understanding of industry regulations and platform policies to help you mitigate risks.',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 响应式翻译的服务数据
const services = computed(() => [
  {
    id: '1',
    title: getText('firstLegLogistics'),
    description: getText('firstLegDesc'),
    icon: 'plane',
    route: '/services/first-leg-logistics',
    features: [
      getText('pickup'),
      getText('exportCustoms'),
      getText('destinationClearance'),
      getText('fbaHeadhaul'),
    ],
  },
  {
    id: '2',
    title: getText('nationwideDelivery'),
    description: getText('nationwideDesc'),
    icon: 'truck',
    route: '/services/nationwide-delivery',
    features: [getText('parcelExpress'), getText('truckExpress'), getText('deliveryNetwork')],
  },
  {
    id: '3',
    title: getText('overseasWarehousing'),
    description: getText('overseasDesc'),
    icon: 'warehouse',
    route: '/services/overseas-warehouses',
    features: [
      getText('warehouseArea'),
      getText('dropShipping'),
      getText('platformShipping'),
      getText('warehouseManagement'),
    ],
  },
  {
    id: '4',
    title: getText('valueAddedServices'),
    description: getText('valueAddedDesc'),
    icon: 'settings',
    route: '/services/value-added-services',
    features: [
      getText('sorting'),
      getText('labelReplacement'),
      getText('assembly'),
      getText('customizedSolutions'),
    ],
  },
  {
    id: '5',
    title: getText('reverseLogistics'),
    description: getText('reverseDesc'),
    icon: 'rotate-ccw',
    route: '/services/reverse-logistics',
    features: [
      getText('returnProcessing'),
      getText('returnInspection'),
      getText('inventoryManagement'),
    ],
  },
])

// 响应式翻译的服务流程数据
const processSteps = computed(() => [
  {
    title: getText('orderPickup'),
    description: getText('orderPickupDesc'),
    icon: 'computer-desktop',
  },
  {
    title: getText('internationalShipping'),
    description: getText('internationalDesc'),
    icon: 'truck',
  },
  {
    title: getText('customsClearance'),
    description: getText('customsDesc'),
    icon: 'building-office',
  },
  {
    title: getText('warehouseReceiving'),
    description: getText('warehouseReceivingDesc'),
    icon: 'archive-box',
  },
  {
    title: getText('orderProcessing'),
    description: getText('orderProcessingDesc'),
    icon: 'cog',
  },
  {
    title: getText('lastMileDelivery'),
    description: getText('lastMileDesc'),
    icon: 'truck',
  },
])

// 响应式翻译的服务优势数据
const advantages = computed(() => [
  {
    title: getText('selfOperatedAdvantage'),
    description: getText('selfOperatedDesc'),
    icon: 'warehouse',
  },
  {
    title: getText('endToEndAdvantage'),
    description: getText('endToEndDesc'),
    icon: 'link',
  },
  {
    title: getText('experienceAdvantage'),
    description: getText('experienceDesc'),
    icon: 'shield-check',
  },
])
</script>

<style scoped>
/* 组件特定样式 */
</style>
