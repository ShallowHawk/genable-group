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
    <section class="py-16 lg:py-24 bg-gray-50" id="service-process">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('transparentProcessTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('transparentProcessDesc') }}</p>
        </div>

        <div class="max-w-7xl mx-auto">
          <!-- 桌面端：水平流程布局 -->
          <div class="hidden lg:flex items-center justify-center process-flow">
            <template v-for="(step, index) in processSteps" :key="step.title">
              <div class="process-step-item group" :style="{ animationDelay: `${index * 150}ms` }">
                <div class="step-content">
                  <div class="step-icon-wrapper">
                    <div class="step-icon">
                      {{ index + 1 }}
                    </div>
                  </div>
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>

              <!-- 连接箭头 -->
              <div v-if="index < processSteps.length - 1" class="process-arrow">
                <div class="arrow-line"></div>
                <div class="arrow-head"></div>
              </div>
            </template>
          </div>

          <!-- 平板端：2x3 网格布局 -->
          <div class="hidden md:grid lg:hidden grid-cols-3 gap-8 process-grid-tablet">
            <template v-for="(step, index) in processSteps" :key="step.title">
              <div class="process-step-item group" :style="{ animationDelay: `${index * 150}ms` }">
                <div class="step-content">
                  <div class="step-icon-wrapper">
                    <div class="step-icon">
                      {{ index + 1 }}
                    </div>
                  </div>
                  <h3 class="step-title">{{ step.title }}</h3>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>

              <!-- 第3步到第4步的向下箭头 -->
              <div v-if="index === 2" class="col-span-3 flex justify-center py-4">
                <div class="vertical-arrow">
                  <Icon name="chevron-down" size="lg" class="text-primary-500" />
                </div>
              </div>
            </template>
          </div>

          <!-- 移动端：垂直堆叠布局 -->
          <div class="md:hidden space-y-8 process-mobile">
            <template v-for="(step, index) in processSteps" :key="step.title">
              <div class="process-step-item group" :style="{ animationDelay: `${index * 150}ms` }">
                <div class="step-content mobile-layout">
                  <div class="step-icon-wrapper">
                    <div class="step-icon">
                      {{ index + 1 }}
                    </div>
                  </div>
                  <div class="step-text">
                    <h3 class="step-title">{{ step.title }}</h3>
                    <p class="step-description">{{ step.description }}</p>
                  </div>
                </div>
              </div>

              <!-- 移动端连接线 -->
              <div v-if="index < processSteps.length - 1" class="flex justify-center">
                <div class="mobile-connector">
                  <Icon name="chevron-down" size="md" class="text-primary-400" />
                </div>
              </div>
            </template>
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
import { computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import Icon from '@/components/ui/Icon.vue'
import ServicesHero from '@/components/sections/ServicesHero.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

const { locale } = useI18n()

// 滚动触发动画的逻辑
let observer: IntersectionObserver | null = null

onMounted(() => {
  // 创建 Intersection Observer 来检测服务流程模块何时进入视窗
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 当模块进入视窗时，添加动画触发类
          entry.target.classList.add('animate-in')
        }
      })
    },
    {
      // 当模块顶部露出30%时开始触发动画
      threshold: 0.3,
      // 提前50px开始检测
      rootMargin: '50px 0px -50px 0px',
    },
  )

  // 开始观察服务流程模块
  const processSection = document.getElementById('service-process')
  if (processSection) {
    observer.observe(processSection)
  }
})

onUnmounted(() => {
  // 清理 Observer
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

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
/* ===== 服务流程模块样式优化 ===== */

/* 基础动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 流程步骤基础样式 */
.process-step-item {
  /* 初始状态 - 用于动画 */
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;

  /* 交互准备 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* === 桌面端布局样式 === */
.process-flow {
  padding: 2rem 0;
}

.process-flow .process-step-item {
  flex: 0 0 auto;
  width: 200px;
  text-align: center;
}

.process-flow .step-content {
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 步骤图标样式 */
.step-icon-wrapper {
  margin-bottom: 1rem;
}

.step-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #1e40af);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.step-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}

/* 步骤标题和描述 */
.step-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.step-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  transition: color 0.3s ease;
}

/* === 桌面端连接箭头样式 === */
.process-arrow {
  flex: 1;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #1e40af);
  position: relative;
  margin: 0 1.5rem;
  max-width: 120px;
  border-radius: 2px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.process-arrow::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  border-top: 3px solid #1e40af;
  border-right: 3px solid #1e40af;
  background: white;
}

/* === 悬停效果 === */
.process-step-item:hover {
  transform: translateY(-8px);
}

.process-step-item:hover .step-content {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.process-step-item:hover .step-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
}

.process-step-item:hover .step-icon::before {
  transform: scale(1);
}

.process-step-item:hover .step-title {
  color: #3b82f6;
}

.process-step-item:hover .step-description {
  color: #4b5563;
}

/* 相邻箭头高亮效果 */
.process-step-item:hover + .process-arrow,
.process-arrow:has(+ .process-step-item:hover) {
  opacity: 1;
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
}

/* === 平板端样式 === */
.process-grid-tablet .process-step-item {
  text-align: center;
}

.process-grid-tablet .step-content {
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  height: 100%;
}

.vertical-arrow {
  padding: 0.5rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
}

/* === 移动端样式 === */
.process-mobile .step-content.mobile-layout {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
  text-align: left;
}

.mobile-layout .step-icon-wrapper {
  margin-bottom: 0;
  flex-shrink: 0;
}

.mobile-layout .step-icon {
  width: 3rem;
  height: 3rem;
  font-size: 1.25rem;
}

.mobile-layout .step-text {
  flex: 1;
}

.mobile-layout .step-title {
  margin-bottom: 0.5rem;
}

.mobile-connector {
  padding: 0.5rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  margin: 0.5rem 0;
}

/* === 响应式微调 === */
@media (max-width: 1023px) and (min-width: 768px) {
  .process-grid-tablet {
    gap: 2rem;
  }

  .process-grid-tablet .step-content {
    min-height: 200px;
  }
}

@media (max-width: 767px) {
  .process-mobile .process-step-item {
    margin-bottom: 0;
  }

  .mobile-layout .step-content {
    margin-bottom: 0;
  }
}

/* === 滚动触发动画增强 === */
@media (prefers-reduced-motion: no-preference) {
  .process-step-item {
    animation-play-state: paused;
  }

  /* 当模块进入视窗时触发动画 */
  #service-process.animate-in .process-step-item {
    animation-play-state: running;
  }
}

/* === 无障碍和性能优化 === */
@media (prefers-reduced-motion: reduce) {
  .process-step-item,
  .step-icon,
  .step-content,
  .process-arrow {
    animation: none !important;
    transition: none !important;
  }

  .process-step-item {
    opacity: 1;
    transform: none;
  }
}

/* === 高DPI屏幕优化 === */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .step-icon {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
  }

  .process-arrow::after {
    border-width: 2px;
  }
}
</style>
