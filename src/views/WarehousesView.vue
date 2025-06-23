<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <!-- 仓储网络页面Banner -->
    <WarehousesHero />

    <!-- 网络概览区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- 左侧内容 -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {{ getText('networkTitle') }}
            </h2>
            <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {{ getText('networkDesc1') }}
              </p>
              <p>
                {{ getText('networkDesc2') }}
              </p>
              <p>
                {{ getText('networkDesc3') }}
              </p>
            </div>

            <!-- 核心优势 -->
            <div class="mt-8 grid grid-cols-2 gap-6">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="zap" size="lg" class="text-primary-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ getText('smartAutomation') }}</div>
                  <div class="text-sm text-gray-600">{{ getText('wmsManagement') }}</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="clock" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ getText('quickResponse') }}</div>
                  <div class="text-sm text-gray-600">{{ getText('pickupTime') }}</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="shield-check" size="lg" class="text-primary-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ getText('safeReliable') }}</div>
                  <div class="text-sm text-gray-600">{{ getText('securityMonitoring') }}</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="trending-up" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">{{ getText('efficientOperation') }}</div>
                  <div class="text-sm text-gray-600">{{ getText('accuracyRate') }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧网络地图 -->
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                {{ getText('networkCoverageTitle') }}
              </h3>

              <!-- 真实美国地图 -->
              <div class="relative bg-white rounded-lg p-4 shadow-inner">
                <USDistributionMap :centers="mapCenters" />
              </div>

              <!-- 覆盖统计 -->
              <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-primary-600">95%</div>
                  <div class="text-sm text-gray-600">{{ getText('populationCoverage') }}</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-accent-600">
                    {{ getText('deliveryDays') }}
                  </div>
                  <div class="text-sm text-gray-600">{{ getText('deliveryTime') }}</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-primary-600">
                    {{ getText('warehouseSpaceValue') }}
                  </div>
                  <div class="text-sm text-gray-600">{{ getText('sqFeet') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 配送中心详情 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('centerDetailsTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ getText('centerDetailsDesc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BaseCard
            v-for="center in distributionCenters"
            :key="center.id"
            variant="elevated"
            hoverable
          >
            <template #header>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Icon :name="center.icon" size="lg" class="text-primary-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900">{{ center.name }}</h3>
                    <p class="text-gray-600">{{ center.state }}</p>
                  </div>
                </div>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {{ center.status }}
                </span>
              </div>

              <!-- 配送中心图片区域 -->
              <div class="rounded-lg h-48 mb-4 overflow-hidden">
                <img
                  v-if="center.image"
                  :src="center.image"
                  :alt="center.name"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center"
                >
                  <div class="text-center text-gray-500">
                    <Icon name="building" size="3xl" class="mb-2" />
                    <p class="text-sm">{{ center.name }} {{ getText('facility') }}</p>
                  </div>
                </div>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600">{{ center.description }}</p>

              <!-- 配送中心参数 -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-500">{{ getText('warehouseArea') }}</div>
                  <div class="font-semibold text-gray-900">{{ center.area }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">{{ getText('dailyCapacity') }}</div>
                  <div class="font-semibold text-gray-900">{{ center.capacity }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">{{ getText('serviceRadius') }}</div>
                  <div class="font-semibold text-gray-900">{{ center.radius }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">{{ getText('deliveryTimeframe') }}</div>
                  <div class="font-semibold text-gray-900">{{ center.delivery }}</div>
                </div>
              </div>

              <!-- 服务特色 -->
              <div>
                <h4 class="font-medium text-gray-900 mb-2">{{ getText('serviceFeatures') }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in center.features"
                    :key="feature"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 智能仓储系统 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('warehouseSystemTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('warehouseSystemDesc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="system in wmsFeatures"
            :key="system.id"
            variant="outlined"
            class="text-center h-full"
          >
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon :name="system.icon" size="xl" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ system.title }}</h3>
            </template>
            <p class="text-gray-600 mb-4">{{ system.description }}</p>
            <template #footer>
              <ul class="text-sm text-gray-500 space-y-1">
                <li v-for="benefit in system.benefits" :key="benefit" class="flex items-center">
                  <Icon name="check" size="xs" class="text-primary-500 mr-2" />
                  {{ benefit }}
                </li>
              </ul>
            </template>
          </BaseCard>
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
import WarehousesHero from '@/components/sections/WarehousesHero.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'
import USDistributionMap from '@/components/ui/USDistributionMap.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 网络概览
  | 'networkTitle'
  | 'networkDesc1'
  | 'networkDesc2'
  | 'networkDesc3'
  // 核心优势
  | 'smartAutomation'
  | 'wmsManagement'
  | 'quickResponse'
  | 'pickupTime'
  | 'safeReliable'
  | 'securityMonitoring'
  | 'efficientOperation'
  | 'accuracyRate'
  // 地图覆盖
  | 'networkCoverageTitle'
  | 'populationCoverage'
  | 'deliveryTime'
  | 'sqFeet'
  | 'deliveryDays'
  | 'facility'
  | 'warehouseSpaceValue'
  // 配送中心
  | 'centerDetailsTitle'
  | 'centerDetailsDesc'
  | 'warehouseArea'
  | 'dailyCapacity'
  | 'serviceRadius'
  | 'deliveryTimeframe'
  | 'serviceFeatures'
  | 'operational'
  // 仓储系统标题
  | 'warehouseSystemTitle'
  | 'warehouseSystemDesc'
  // WMS功能特性
  | 'smartInboundManagementTitle'
  | 'smartInboundManagementDesc'
  | 'realtimeInventoryTrackingTitle'
  | 'realtimeInventoryTrackingDesc'
  | 'smartOrderProcessingTitle'
  | 'smartOrderProcessingDesc'
  | 'dataAnalyticsTitle'
  | 'dataAnalyticsDesc'
  | 'multiPlatformIntegrationTitle'
  | 'multiPlatformIntegrationDesc'
  | 'mobileTerminalTitle'
  | 'mobileTerminalDesc'
  // WMS功能收益
  | 'barcodeAutoRecognition'
  | 'smartSlotAllocation'
  | 'batchManagement'
  | 'qualityInspectionAutomation'
  | 'realtimeInventoryUpdate'
  | 'safetyStockAlert'
  | 'mobileInventory'
  | 'multiDimensionalReports'
  | 'autoOrderReceiving'
  | 'waveIntelligentPlanning'
  | 'pathOptimization'
  | 'batchProcessing'
  | 'efficiencyAnalysis'
  | 'costOptimization'
  | 'trendForecasting'
  | 'decisionSupport'
  | 'apiInterface'
  | 'dataSync'
  | 'platformDocking'
  | 'systemIntegration'
  | 'mobileOperation'
  | 'offlineOperation'
  | 'voiceGuidance'
  | 'deviceManagement'
  // 地图状态标签
  | 'headquarters'
  | 'centralHub'
  | 'eastCoastCenter'
  | 'southCenter'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '仓储网络',
    pageDescription: '覆盖全美4大配送中心的智能仓储网络，为您提供高效的仓储和配送服务。',

    // 网络概览
    networkTitle: '战略布局全美的智能仓储网络',
    networkDesc1:
      '可耐博达战略性布局4大配送中心：洛杉矶综合性总部依托美国最大港口群优势，亚特兰大东部枢纽连接东岸港口与内陆市场，印第安纳波利斯中西部枢纽保障美国腹地货物流转，达拉斯南部枢纽覆盖墨西哥湾港口及南部各州。',
    networkDesc2:
      '每个配送中心都配备了先进的WMS仓储管理系统，实现智能分拣、自动化库存管理和实时订单跟踪。从港口提柜拆柜到跨州转运，从一件代发到卡车派送(FTL/LTL)，全链条专业服务确保99%的包裹能在24小时内完成处理。',
    networkDesc3:
      '总仓储面积超过50万平方英尺，日处理能力达10万个包裹，为跨境电商及传统贸易客户提供从港口到门店的全程供应链解决方案。',

    // 核心优势
    smartAutomation: '智能自动化',
    wmsManagement: 'WMS系统管理',
    quickResponse: '快速响应',
    pickupTime: '24小时内提货',
    safeReliable: '安全可靠',
    securityMonitoring: '24/7安防监控',
    efficientOperation: '高效运营',
    accuracyRate: '99.8%准确率',

    // 地图覆盖
    networkCoverageTitle: '全美配送网络覆盖',
    populationCoverage: '人口覆盖',
    deliveryTime: '配送时效',
    sqFeet: '平方英尺',
    deliveryDays: '配送天数',
    facility: '设施',
    warehouseSpaceValue: '50万+',

    // 配送中心
    centerDetailsTitle: '四大配送中心详情',
    centerDetailsDesc: '每个配送中心都经过精心选址，确保最佳的地理位置和运营效率',
    warehouseArea: '仓储面积',
    dailyCapacity: '日处理能力',
    serviceRadius: '服务半径',
    deliveryTimeframe: '配送时效',
    serviceFeatures: '服务特色',
    operational: '运营中',

    // 仓储系统标题
    warehouseSystemTitle: '智能仓储系统',
    warehouseSystemDesc: '先进的WMS系统管理，优化仓储空间利用率',

    // WMS功能特性
    smartInboundManagementTitle: '智能入库管理',
    smartInboundManagementDesc: '自动识别商品信息，智能分配存储位置，优化仓储空间利用率',
    realtimeInventoryTrackingTitle: '实时库存追踪',
    realtimeInventoryTrackingDesc: '24/7实时监控库存状态，提供精确的库存报告和预警功能',
    smartOrderProcessingTitle: '订单智能处理',
    smartOrderProcessingDesc: '自动接收订单，智能分配拣货任务，优化拣货路径，提升效率',
    dataAnalyticsTitle: '数据分析洞察',
    dataAnalyticsDesc: '深度分析仓储数据，提供业务洞察和优化建议',
    multiPlatformIntegrationTitle: '多平台集成',
    multiPlatformIntegrationDesc: '无缝对接各大电商平台和ERP系统，实现数据同步',
    mobileTerminalTitle: '移动作业终端',
    mobileTerminalDesc: '移动设备支持，随时随地进行仓储作业和管理',

    // WMS功能收益
    barcodeAutoRecognition: '条码自动识别',
    smartSlotAllocation: '智能库位分配',
    batchManagement: '批次管理',
    qualityInspectionAutomation: '质检自动化',
    realtimeInventoryUpdate: '实时库存更新',
    safetyStockAlert: '安全库存预警',
    mobileInventory: '移动盘点',
    multiDimensionalReports: '多维度报表',
    autoOrderReceiving: '自动接收订单',
    waveIntelligentPlanning: '波次智能规划',
    pathOptimization: '路径优化',
    batchProcessing: '批量处理',
    efficiencyAnalysis: '效率分析',
    costOptimization: '成本优化',
    trendForecasting: '趋势预测',
    decisionSupport: '决策支持',
    apiInterface: 'API接口',
    dataSync: '数据同步',
    platformDocking: '平台对接',
    systemIntegration: '系统集成',
    mobileOperation: '移动端操作',
    offlineOperation: '离线作业',
    voiceGuidance: '语音指导',
    deviceManagement: '设备管理',

    // 地图状态标签
    headquarters: '总部中心',
    centralHub: '东南枢纽',
    eastCoastCenter: '中西部中心',
    southCenter: '南部中心',
  },
  en: {
    // 页面基本信息 - 专业表达
    pageTitle: 'Warehouse Network',
    pageDescription:
      'Intelligent warehousing network covering 4 major distribution centers across America, providing efficient warehousing and distribution services.',

    // 网络概览 - 简洁有力
    networkTitle: 'Strategically Positioned Intelligent Warehouse Network Across America',
    networkDesc1:
      "Kenable strategically positions 4 major distribution centers: Los Angeles comprehensive headquarters leverages America's largest port complex, Atlanta eastern hub connects East Coast ports with inland markets, Indianapolis midwest hub ensures cargo flow throughout America's heartland, and Dallas southern hub covers Gulf Coast ports and Southern states.",
    networkDesc2:
      'Each distribution center is equipped with advanced WMS warehouse management systems for intelligent sorting, automated inventory management, and real-time order tracking. From port container services to interstate transit, from dropshipping to truck delivery (FTL/LTL), our end-to-end professional services ensure 99% of packages are processed within 24 hours.',
    networkDesc3:
      'With total warehouse space exceeding 500,000 square feet and daily processing capacity of 100,000 packages, we provide comprehensive supply chain solutions from port to storefront for cross-border e-commerce and traditional trade clients.',

    // 核心优势 - 专业术语
    smartAutomation: 'Smart Automation',
    wmsManagement: 'WMS System Management',
    quickResponse: 'Quick Response',
    pickupTime: 'Pickup within 24 hours',
    safeReliable: 'Safe & Reliable',
    securityMonitoring: '24/7 Security Monitoring',
    efficientOperation: 'Efficient Operations',
    accuracyRate: '99.8% Accuracy Rate',

    // 地图覆盖
    networkCoverageTitle: 'Nationwide Distribution Network Coverage',
    populationCoverage: 'Population Coverage',
    deliveryTime: 'Delivery Time',
    sqFeet: 'Sq Ft',
    deliveryDays: 'Delivery Days',
    facility: 'Facility',
    warehouseSpaceValue: '500,000+ sqft',

    // 配送中心
    centerDetailsTitle: 'Four Major Distribution Centers',
    centerDetailsDesc:
      'Each distribution center is carefully selected to ensure optimal geographic location and operational efficiency',
    warehouseArea: 'Warehouse Area',
    dailyCapacity: 'Daily Capacity',
    serviceRadius: 'Service Radius',
    deliveryTimeframe: 'Delivery Timeframe',
    serviceFeatures: 'Service Features',
    operational: 'Operational',

    // 仓储系统标题
    warehouseSystemTitle: 'Smart Warehouse System',
    warehouseSystemDesc: 'Advanced WMS System Management, Optimizing Warehouse Space Utilization',

    // WMS功能特性
    smartInboundManagementTitle: 'Smart Inbound Management',
    smartInboundManagementDesc:
      'Automatically Recognize Product Information, Smartly Allocate Storage Locations, Optimize Warehouse Space Utilization',
    realtimeInventoryTrackingTitle: 'Real-time Inventory Tracking',
    realtimeInventoryTrackingDesc:
      '24/7 Real-time Monitoring of Inventory Status, Providing Precise Inventory Reports and Warning Functions',
    smartOrderProcessingTitle: 'Smart Order Processing',
    smartOrderProcessingDesc:
      'Automatically Receive Orders, Smartly Allocate Picking Tasks, Optimize Picking Paths, Improve Efficiency',
    dataAnalyticsTitle: 'Data Analytics Insight',
    dataAnalyticsDesc:
      'Deep Analysis of Warehouse Data, Providing Business Insight and Optimization Suggestions',
    multiPlatformIntegrationTitle: 'Multi-platform Integration',
    multiPlatformIntegrationDesc:
      'Seamlessly Connect to Major E-commerce Platforms and ERP Systems, Implement Data Synchronization',
    mobileTerminalTitle: 'Mobile Terminal Operation',
    mobileTerminalDesc: 'Mobile Device Support, Warehouse Operation and Management Anywhere',

    // WMS功能收益
    barcodeAutoRecognition: 'Barcode Auto Recognition',
    smartSlotAllocation: 'Smart Slot Allocation',
    batchManagement: 'Batch Management',
    qualityInspectionAutomation: 'Quality Inspection Automation',
    realtimeInventoryUpdate: 'Real-time Inventory Update',
    safetyStockAlert: 'Safety Stock Alert',
    mobileInventory: 'Mobile Inventory',
    multiDimensionalReports: 'Multi-dimensional Reports',
    autoOrderReceiving: 'Auto Order Receiving',
    waveIntelligentPlanning: 'Wave Intelligent Planning',
    pathOptimization: 'Path Optimization',
    batchProcessing: 'Batch Processing',
    efficiencyAnalysis: 'Efficiency Analysis',
    costOptimization: 'Cost Optimization',
    trendForecasting: 'Trend Forecasting',
    decisionSupport: 'Decision Support',
    apiInterface: 'API Interface',
    dataSync: 'Data Sync',
    platformDocking: 'Platform Docking',
    systemIntegration: 'System Integration',
    mobileOperation: 'Mobile Operation',
    offlineOperation: 'Offline Operation',
    voiceGuidance: 'Voice Guidance',
    deviceManagement: 'Device Management',

    // 地图状态标签 - 专业标识
    headquarters: 'Headquarters',
    centralHub: 'Southeast Hub',
    eastCoastCenter: 'Midwest Center',
    southCenter: 'South Center',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 地图中心点数据 - 响应式翻译
const mapCenters = computed(() => [
  {
    id: '1',
    name: 'Los Angeles',
    state: 'California',
    coordinates: [34.0522, -118.2437] as [number, number],
    status: getText('headquarters'),
    description: 'West Coast distribution hub',
  },
  {
    id: '2',
    name: 'Atlanta',
    state: 'Georgia',
    coordinates: [33.749, -84.388] as [number, number],
    status: getText('centralHub'),
    description: 'Southeast distribution center',
  },
  {
    id: '3',
    name: 'Indianapolis',
    state: 'Indiana',
    coordinates: [39.7684, -86.1581] as [number, number],
    status: getText('eastCoastCenter'),
    description: 'Midwest distribution hub',
  },
  {
    id: '4',
    name: 'Dallas',
    state: 'Texas',
    coordinates: [32.7767, -96.797] as [number, number],
    status: getText('southCenter'),
    description: 'Southern distribution hub',
  },
])

// 响应式翻译的配送中心数据
const distributionCenters = computed(() => [
  {
    id: 1,
    name: locale.value === 'zh' ? '洛杉矶配送中心' : 'Los Angeles Distribution Center',
    state:
      locale.value === 'zh'
        ? '加利福尼亚州 (综合性总部)'
        : 'California (Comprehensive Headquarters)',
    status: getText('operational'),
    icon: 'building',
    image: '/lsjpszx.jpg',
    description:
      locale.value === 'zh'
        ? '作为我们的多功能综合类总部仓库，洛杉矶中心依托邻近美国最大港口群的地理优势，提供最全面的"一站式"供应链解决方案，是您进入美国市场的理想起点。'
        : 'As our multi-functional comprehensive headquarters warehouse, the Los Angeles center leverages its proximity to America\'s largest port complex to provide the most comprehensive "one-stop" supply chain solutions, serving as your ideal gateway to the US market.',
    area: locale.value === 'zh' ? '20万平方英尺' : '200,000 sq ft',
    capacity: locale.value === 'zh' ? '4万包裹/天' : '40,000 packages/day',
    radius: locale.value === 'zh' ? '500英里' : '500 miles',
    delivery: locale.value === 'zh' ? '1-2天' : '1-2 days',
    features:
      locale.value === 'zh'
        ? ['港口提柜与拆柜', '一件代发与订单履行', '长期/短期仓储', '转运与卡车派送', '一站式服务']
        : [
            'Port Container Services',
            'Dropshipping & Order Fulfillment',
            'Short/Long-term Storage',
            'Transshipment & Trucking',
            'One-stop Solutions',
          ],
  },
  {
    id: 2,
    name: locale.value === 'zh' ? '亚特兰大配送中心' : 'Atlanta Distribution Center',
    state: locale.value === 'zh' ? '乔治亚州 (东部枢纽)' : 'Georgia (Eastern Hub)',
    status: getText('operational'),
    icon: 'building',
    image: '/zjgpszx.jpg',
    description:
      locale.value === 'zh'
        ? '坐落于美国东南部的交通要道，亚特兰大中心是连接东岸港口和内陆市场的关键卡车货运仓库，专注于提供高效快捷的货物中转服务。'
        : 'Located at the transportation hub of the American Southeast, the Atlanta center serves as a key truck freight warehouse connecting East Coast ports and inland markets, focusing on efficient and rapid cargo transit services.',
    area: locale.value === 'zh' ? '15万平方英尺' : '150,000 sq ft',
    capacity: locale.value === 'zh' ? '3万包裹/天' : '30,000 packages/day',
    radius: locale.value === 'zh' ? '400英里' : '400 miles',
    delivery: locale.value === 'zh' ? '1-3天' : '1-3 days',
    features:
      locale.value === 'zh'
        ? ['港口提柜与拆柜', '拆柜与跨州转运', '卡车派送(FTL/LTL)', '萨凡纳港口服务']
        : [
            'Port Container Services',
            'Deconsolidation & Interstate Transit',
            'Truck Delivery (FTL/LTL)',
            'Savannah Port Services',
          ],
  },
  {
    id: 3,
    name: locale.value === 'zh' ? '印第安纳波利斯配送中心' : 'Indianapolis Distribution Center',
    state: locale.value === 'zh' ? '印第安纳州 (中西部枢纽)' : 'Indiana (Midwest Hub)',
    status: getText('operational'),
    icon: 'building',
    image: '/nypszx.jpg',
    description:
      locale.value === 'zh'
        ? '作为美国中西部的核心物流节点，印第安纳波利斯中心专注于卡车货运服务，是保障货物在美国腹地快速流转的关键一环。'
        : "As the core logistics node in the American Midwest, the Indianapolis center focuses on truck freight services, serving as a crucial link ensuring rapid cargo flow throughout America's heartland.",
    area: locale.value === 'zh' ? '12万平方英尺' : '120,000 sq ft',
    capacity: locale.value === 'zh' ? '2.5万包裹/天' : '25,000 packages/day',
    radius: locale.value === 'zh' ? '300英里' : '300 miles',
    delivery: locale.value === 'zh' ? '1-2天' : '1-2 days',
    features:
      locale.value === 'zh'
        ? ['港口提柜与拆柜', '拆柜与跨州转运', '卡车派送(FTL/LTL)', '中西部陆路网络']
        : [
            'Port Container Services',
            'Deconsolidation & Interstate Transit',
            'Truck Delivery (FTL/LTL)',
            'Midwest Ground Network',
          ],
  },
  {
    id: 4,
    name: locale.value === 'zh' ? '达拉斯配送中心' : 'Dallas Distribution Center',
    state: locale.value === 'zh' ? '德克萨斯州 (南部枢纽)' : 'Texas (Southern Hub)',
    status: getText('operational'),
    icon: 'building',
    image: '/dlspszx.jpg',
    description:
      locale.value === 'zh'
        ? '达拉斯中心位于美国南部的战略要地，是连接墨西哥湾港口及南部各州的重要卡车货运仓库，为您的货物进入南部市场提供强大支持。'
        : 'The Dallas center is strategically located in the American South, serving as an important truck freight warehouse connecting Gulf Coast ports and Southern states, providing strong support for your cargo entering Southern markets.',
    area: locale.value === 'zh' ? '10万平方英尺' : '100,000 sq ft',
    capacity: locale.value === 'zh' ? '2万包裹/天' : '20,000 packages/day',
    radius: locale.value === 'zh' ? '350英里' : '350 miles',
    delivery: locale.value === 'zh' ? '2-3天' : '2-3 days',
    features:
      locale.value === 'zh'
        ? ['港口提柜与拆柜', '拆柜与跨州转运', '卡车派送(FTL/LTL)', '休斯顿港口服务']
        : [
            'Port Container Services',
            'Deconsolidation & Interstate Transit',
            'Truck Delivery (FTL/LTL)',
            'Houston Port Services',
          ],
  },
])

// WMS系统特性
const wmsFeatures = computed(() => [
  {
    id: '1',
    title: getText('smartInboundManagementTitle'),
    description: getText('smartInboundManagementDesc'),
    icon: 'scan',
    benefits: [
      getText('barcodeAutoRecognition'),
      getText('smartSlotAllocation'),
      getText('batchManagement'),
      getText('qualityInspectionAutomation'),
    ],
  },
  {
    id: '2',
    title: getText('realtimeInventoryTrackingTitle'),
    description: getText('realtimeInventoryTrackingDesc'),
    icon: 'monitor',
    benefits: [
      getText('realtimeInventoryUpdate'),
      getText('safetyStockAlert'),
      getText('mobileInventory'),
      getText('multiDimensionalReports'),
    ],
  },
  {
    id: '3',
    title: getText('smartOrderProcessingTitle'),
    description: getText('smartOrderProcessingDesc'),
    icon: 'zap',
    benefits: [
      getText('autoOrderReceiving'),
      getText('waveIntelligentPlanning'),
      getText('pathOptimization'),
      getText('batchProcessing'),
    ],
  },
  {
    id: '4',
    title: getText('dataAnalyticsTitle'),
    description: getText('dataAnalyticsDesc'),
    icon: 'bar-chart-3',
    benefits: [
      getText('efficiencyAnalysis'),
      getText('costOptimization'),
      getText('trendForecasting'),
      getText('decisionSupport'),
    ],
  },
  {
    id: '5',
    title: getText('multiPlatformIntegrationTitle'),
    description: getText('multiPlatformIntegrationDesc'),
    icon: 'link',
    benefits: [
      getText('apiInterface'),
      getText('dataSync'),
      getText('platformDocking'),
      getText('systemIntegration'),
    ],
  },
  {
    id: '6',
    title: getText('mobileTerminalTitle'),
    description: getText('mobileTerminalDesc'),
    icon: 'smartphone',
    benefits: [
      getText('mobileOperation'),
      getText('offlineOperation'),
      getText('voiceGuidance'),
      getText('deviceManagement'),
    ],
  },
])
</script>
