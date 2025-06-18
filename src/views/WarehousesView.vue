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
              <div
                class="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center mb-4"
              >
                <div class="text-center text-gray-500">
                  <Icon name="building" size="3xl" class="mb-2" />
                  <p class="text-sm">{{ center.name }} {{ getText('facility') }}</p>
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

    <!-- 仓储服务流程 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('serviceProcessTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('serviceProcessDesc') }}</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in serviceProcess"
              :key="step.title"
              class="relative text-center"
            >
              <div class="flex flex-col items-center">
                <!-- 步骤圆圈 -->
                <div
                  class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold relative z-10"
                >
                  {{ index + 1 }}
                </div>

                <!-- 连接线 -->
                <div
                  v-if="index < serviceProcess.length - 1"
                  class="absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 transform translate-x-8 hidden lg:block"
                ></div>

                <!-- 步骤图标 -->
                <div
                  class="w-12 h-12 bg-white border-2 border-primary-200 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon :name="step.icon" size="lg" class="text-primary-500" />
                </div>

                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm">{{ step.description }}</p>

                <!-- 时间指标 -->
                <div
                  class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
                >
                  <Icon name="clock" size="xs" class="mr-1" />
                  {{ step.time }}
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
  | 'serviceProcessTitle'
  | 'serviceProcessDesc'
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
  // 服务流程
  | 'cargoReceivingTitle'
  | 'cargoReceivingDesc'
  | 'cargoReceivingTime'
  | 'smartStorageTitle'
  | 'smartStorageDesc'
  | 'smartStorageTime'
  | 'orderProcessingTitle'
  | 'orderProcessingDesc'
  | 'orderProcessingTime'
  | 'outboundDeliveryTitle'
  | 'outboundDeliveryDesc'
  | 'outboundDeliveryTime'
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
      '可耐博达在美国战略性布局了4大配送中心，覆盖东西海岸及中部地区，确保为客户提供最快速、最经济的仓储和配送服务。',
    networkDesc2:
      '每个配送中心都配备了先进的WMS仓储管理系统，实现智能分拣、自动化库存管理和实时订单跟踪，确保99%的包裹能在24小时内完成提货。',
    networkDesc3:
      '总仓储面积超过50万平方英尺，日处理能力达10万个包裹，为跨境电商客户提供从入库到出库的全流程专业服务。',

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
    serviceProcessTitle: '仓储服务流程',
    serviceProcessDesc: '高效、安全的仓储服务流程',

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

    // 服务流程
    cargoReceivingTitle: '货物接收',
    cargoReceivingDesc: '验收入库，条码扫描，质量检查',
    cargoReceivingTime: '2-4小时',
    smartStorageTitle: '智能存储',
    smartStorageDesc: '自动分配库位，上架存储，系统更新',
    smartStorageTime: '1-2小时',
    orderProcessingTitle: '订单处理',
    orderProcessingDesc: '订单接收，智能分拣，包装确认',
    orderProcessingTime: '0.5-1小时',
    outboundDeliveryTitle: '出库配送',
    outboundDeliveryDesc: '货物出库，运输安排，配送跟踪',
    outboundDeliveryTime: '1-3天',
    // 地图状态标签
    headquarters: '总部中心',
    centralHub: '中部枢纽',
    eastCoastCenter: '东海岸中心',
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
      'Kenable has strategically positioned 4 major distribution centers across America, covering East and West coasts as well as central regions, ensuring the fastest and most cost-effective warehousing and distribution services for our clients.',
    networkDesc2:
      'Each distribution center is equipped with advanced WMS warehouse management systems, enabling intelligent sorting, automated inventory management, and real-time order tracking, ensuring 99% of packages are picked within 24 hours.',
    networkDesc3:
      'With total warehouse space exceeding 500,000 square feet and daily processing capacity of 100,000 packages, we provide comprehensive professional services from inbound to outbound for cross-border e-commerce clients.',

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
    serviceProcessTitle: 'Warehouse Service Process',
    serviceProcessDesc: 'Efficient and Secure Warehouse Service Process',

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

    // 服务流程
    cargoReceivingTitle: 'Cargo Receiving',
    cargoReceivingDesc: 'Receiving Goods, Scanning Barcode, Quality Inspection',
    cargoReceivingTime: '2-4 Hours',
    smartStorageTitle: 'Smart Storage',
    smartStorageDesc: 'Automatically Allocate Storage Locations, Shelf Storage, System Update',
    smartStorageTime: '1-2 Hours',
    orderProcessingTitle: 'Order Processing',
    orderProcessingDesc: 'Order Receiving, Smart Sorting, Packaging Confirmation',
    orderProcessingTime: '0.5-1 Hour',
    outboundDeliveryTitle: 'Outbound Delivery',
    outboundDeliveryDesc: 'Goods Outbound, Transportation Arrangement, Delivery Tracking',
    outboundDeliveryTime: '1-3 Days',
    // 地图状态标签 - 专业标识
    headquarters: 'Headquarters',
    centralHub: 'Central Hub',
    eastCoastCenter: 'East Coast Center',
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
    name: 'Chicago',
    state: 'Illinois',
    coordinates: [41.8781, -87.6298] as [number, number],
    status: getText('centralHub'),
    description: 'Midwest distribution center',
  },
  {
    id: '3',
    name: 'New York',
    state: 'New York',
    coordinates: [40.7128, -74.006] as [number, number],
    status: getText('eastCoastCenter'),
    description: 'Northeast distribution hub',
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
    state: locale.value === 'zh' ? '加利福尼亚州' : 'California',
    status: getText('operational'),
    icon: 'building',
    description:
      locale.value === 'zh'
        ? '西海岸核心配送中心，覆盖加州、内华达州、亚利桑那州等地区，是我们最大的配送中心。'
        : 'West Coast core distribution center covering California, Nevada, Arizona and surrounding regions, our largest distribution facility.',
    area: locale.value === 'zh' ? '20万平方英尺' : '200,000 sq ft',
    capacity: locale.value === 'zh' ? '4万包裹/天' : '40,000 packages/day',
    radius: locale.value === 'zh' ? '500英里' : '500 miles',
    delivery: locale.value === 'zh' ? '1-2天' : '1-2 days',
    features:
      locale.value === 'zh'
        ? ['FBA头程', '亚马逊配送', '海外仓储', '退货处理']
        : ['FBA First Mile', 'Amazon Fulfillment', 'Overseas Warehousing', 'Returns Processing'],
  },
  {
    id: 2,
    name: locale.value === 'zh' ? '芝加哥配送中心' : 'Chicago Distribution Center',
    state: locale.value === 'zh' ? '伊利诺伊州' : 'Illinois',
    status: getText('operational'),
    icon: 'building',
    description:
      locale.value === 'zh'
        ? '中部地区核心枢纽，覆盖中西部各州，地理位置优越，是连接东西海岸的重要节点。'
        : 'Central region core hub covering Midwest states, strategically located as a key connection point between East and West coasts.',
    area: locale.value === 'zh' ? '15万平方英尺' : '150,000 sq ft',
    capacity: locale.value === 'zh' ? '3万包裹/天' : '30,000 packages/day',
    radius: locale.value === 'zh' ? '400英里' : '400 miles',
    delivery: locale.value === 'zh' ? '1-3天' : '1-3 days',
    features:
      locale.value === 'zh'
        ? ['中转分拣', '库存管理', '订单履行', '包装服务']
        : ['Transit Sorting', 'Inventory Management', 'Order Fulfillment', 'Packaging Services'],
  },
  {
    id: 3,
    name: locale.value === 'zh' ? '纽约配送中心' : 'New York Distribution Center',
    state: locale.value === 'zh' ? '纽约州' : 'New York',
    status: getText('operational'),
    icon: 'building',
    description:
      locale.value === 'zh'
        ? '东海岸主要配送中心，服务纽约、新泽西、宾州等东北部地区，人口密集，市场需求旺盛。'
        : 'East Coast major distribution center serving New York, New Jersey, Pennsylvania and Northeast regions, high population density with strong market demand.',
    area: locale.value === 'zh' ? '12万平方英尺' : '120,000 sq ft',
    capacity: locale.value === 'zh' ? '2.5万包裹/天' : '25,000 packages/day',
    radius: locale.value === 'zh' ? '300英里' : '300 miles',
    delivery: locale.value === 'zh' ? '1-2天' : '1-2 days',
    features:
      locale.value === 'zh'
        ? ['快速配送', '当日达', '冷链仓储', '高价值商品']
        : ['Express Delivery', 'Same-Day Delivery', 'Cold Chain Storage', 'High-Value Goods'],
  },
  {
    id: 4,
    name: locale.value === 'zh' ? '达拉斯配送中心' : 'Dallas Distribution Center',
    state: locale.value === 'zh' ? '德克萨斯州' : 'Texas',
    status: getText('operational'),
    icon: 'building',
    description:
      locale.value === 'zh'
        ? '南部地区重要配送节点，覆盖德州、路易斯安那州、俄克拉荷马州等南部各州。'
        : 'Important distribution node in the South, covering Texas, Louisiana, Oklahoma and other Southern states.',
    area: locale.value === 'zh' ? '10万平方英尺' : '100,000 sq ft',
    capacity: locale.value === 'zh' ? '2万包裹/天' : '20,000 packages/day',
    radius: locale.value === 'zh' ? '350英里' : '350 miles',
    delivery: locale.value === 'zh' ? '2-3天' : '2-3 days',
    features:
      locale.value === 'zh'
        ? ['大件商品', '汽配仓储', 'B2B配送', '定制包装']
        : ['Large Items', 'Auto Parts Storage', 'B2B Distribution', 'Custom Packaging'],
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

// 服务流程
const serviceProcess = computed(() => [
  {
    title: getText('cargoReceivingTitle'),
    description: getText('cargoReceivingDesc'),
    icon: 'package-check',
    time: getText('cargoReceivingTime'),
  },
  {
    title: getText('smartStorageTitle'),
    description: getText('smartStorageDesc'),
    icon: 'database',
    time: getText('smartStorageTime'),
  },
  {
    title: getText('orderProcessingTitle'),
    description: getText('orderProcessingDesc'),
    icon: 'clipboard-list',
    time: getText('orderProcessingTime'),
  },
  {
    title: getText('outboundDeliveryTitle'),
    description: getText('outboundDeliveryDesc'),
    icon: 'truck',
    time: getText('outboundDeliveryTime'),
  },
])
</script>
