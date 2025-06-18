<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <!-- 模块一：顶部英雄区域 -->
    <CaseStudyHero />

    <!-- 模块二：案例详情展示区 - 选项卡式 -->
    <CaseStudyTabs :cases="[chintCase, cushionLabCase]" />

    <!-- 模块三：行动号召区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'
import CaseStudyHero from '@/components/sections/CaseStudyHero.vue'
import CaseStudyTabs from '@/components/sections/CaseStudyTabs.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 正泰案例
  | 'chintCompany'
  | 'chintIndustry'
  | 'chintTitle'
  | 'chintDescription'
  | 'chintChallenge'
  | 'chintSolution1Title'
  | 'chintSolution1Desc'
  | 'chintSolution2Title'
  | 'chintSolution2Desc'
  | 'chintSolution3Title'
  | 'chintSolution3Desc'
  | 'chintSolution4Title'
  | 'chintSolution4Desc'
  | 'chintSolution5Title'
  | 'chintSolution5Desc'
  | 'chintTestimonial'
  | 'chintAuthor'
  | 'chintPosition'
  | 'chintMetric1Label'
  | 'chintMetric2Label'
  | 'chintMetric3Label'
  | 'chintHighlight1'
  | 'chintHighlight2'
  | 'chintHighlight3'
  | 'chintHighlight4'
  | 'chintResult1Metric'
  | 'chintResult2Metric'
  | 'chintResult3Metric'
  | 'chintResult4Metric'
  // Cushion Lab案例
  | 'cushionCompany'
  | 'cushionIndustry'
  | 'cushionTitle'
  | 'cushionDescription'
  | 'cushionChallenge'
  | 'cushionSolution1Title'
  | 'cushionSolution1Desc'
  | 'cushionSolution2Title'
  | 'cushionSolution2Desc'
  | 'cushionSolution3Title'
  | 'cushionSolution3Desc'
  | 'cushionSolution4Title'
  | 'cushionSolution4Desc'
  | 'cushionSolution5Title'
  | 'cushionSolution5Desc'
  | 'cushionTestimonial'
  | 'cushionAuthor'
  | 'cushionPosition'
  | 'cushionMetric1Label'
  | 'cushionMetric2Label'
  | 'cushionMetric3Label'
  | 'cushionHighlight1'
  | 'cushionHighlight2'
  | 'cushionHighlight3'
  | 'cushionHighlight4'
  | 'cushionResult1Metric'
  | 'cushionResult2Metric'
  | 'cushionResult3Metric'
  | 'cushionResult4Metric'
  // 数值翻译键
  | 'chintResponseTime'
  | 'chintClearanceTime'
  | 'chintServiceCities'
  | 'cushionDeliveryTime'
  | 'cushionWarehouseSpace'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '客户案例',
    pageDescription: '赋能客户，共创成功 - 真实故事见证专业实力',

    // 正泰案例
    chintCompany: '正泰集团',
    chintIndustry: '新能源行业',
    chintTitle: '高价值，高难度：为新能源巨头定制全链条安全保障',
    chintDescription:
      '正泰集团 (CHINT) - 全球领先的储能与光伏产品品牌，致力于为世界提供清洁能源解决方案。',
    chintChallenge:
      '作为全球出货的领导品牌，正泰在进军美国市场时，面临着其高价值、大规格、易碎品类在跨境运输、海关合规及资产安全方面的三重严峻挑战。',
    chintSolution1Title: '合规清关专家',
    chintSolution1Desc: '凭借深厚的清关知识，为特种产品解决复杂的美国海关合规难题，规避风险。',
    chintSolution2Title: '资产安全保障',
    chintSolution2Desc: '提供行业领先的全额价值补偿担保，确保高价值货物在仓储和运输中的绝对安全。',
    chintSolution3Title: '一站式履约服务',
    chintSolution3Desc: '提供从港口拆箱、分拣、换标到精准派送的无缝衔接服务，极大提升效率。',
    chintSolution4Title: '专业仓储方案',
    chintSolution4Desc: '针对超大、易碎、高价值货物的特性，提供定制化的仓储与精细化操作方案。',
    chintSolution5Title: '自营卡车派送',
    chintSolution5Desc: '通过强大的自营车队，确保B2B和B2C订单的及时与精准触达。',
    chintTestimonial:
      '面对高价值产品的跨境难题，可耐博达提供的一站式解决方案和全额价值保障，让我们能真正安心地将市场重心放在美国，后顾无忧。',
    chintAuthor: '张总',
    chintPosition: '供应链总监',
    chintMetric1Label: '准时交付率',
    chintMetric2Label: '价值保障',
    chintMetric3Label: '响应时间',
    chintHighlight1: '全额价值保险',
    chintHighlight2: '专业设备操作',
    chintHighlight3: '海关合规专家',
    chintHighlight4: '实时跟踪监控',
    chintResult1Metric: '物流成本',
    chintResult2Metric: '安全率',
    chintResult3Metric: '通关时效',
    chintResult4Metric: '服务城市',
    // 数值翻译
    chintResponseTime: '24小时',
    chintClearanceTime: '3天',
    chintServiceCities: '15个',
    cushionDeliveryTime: '2-3天',
    cushionWarehouseSpace: '50万+',

    // Cushion Lab案例
    cushionCompany: 'Cushion Lab',
    cushionIndustry: '家居用品',
    cushionTitle: '多渠道，多国籍：高效整合全球供应链，驱动品牌高速增长',
    cushionDescription: 'Cushion Lab - 年销售额过亿美金的美国知名DTC家居品牌，产品广受消费者喜爱。',
    cushionChallenge:
      'Cushion Lab需同时管理来自泰国、越南、中国的多个货源地，并满足Amazon、Temu、TikTok及独立站等多渠道、快节奏、高并发的复杂订单履行需求，对供应链的整合能力与灵活性要求极高。',
    cushionSolution1Title: '多国货源整合',
    cushionSolution1Desc: '无缝管理从泰国、越南、中国等多个国家的出口货运，实现统一入仓。',
    cushionSolution2Title: '全国分仓布局',
    cushionSolution2Desc:
      '战略性利用美东、美西、美中仓库，优化库存分配，实现对全美各渠道订单的最高效响应与配送。',
    cushionSolution3Title: '柔性履约模型',
    cushionSolution3Desc:
      '灵活支持FBA补仓、D2C一件代发、B2B批量批发等多种模式，极大提升库存周转效率。',
    cushionSolution4Title: '高标准仓储',
    cushionSolution4Desc: '提供恒温、干燥、洁净的仓储环境，满足高品质家居产品的严苛存储要求。',
    cushionSolution5Title: '逆向物流支持',
    cushionSolution5Desc:
      '高效处理各渠道退货，通过快速质检与再处理，让产品重回销售链路，减少损失。',
    cushionTestimonial:
      '可耐博达覆盖全美的多仓布局和灵活的履约能力，是我们能够支撑多渠道高速增长的关键。他们真正理解我们业务的复杂性，并提供了超出预期的解决方案。',
    cushionAuthor: '王总',
    cushionPosition: '运营总监',
    cushionMetric1Label: '人口覆盖',
    cushionMetric2Label: '配送时效',
    cushionMetric3Label: '平方英尺',
    cushionHighlight1: '多国货源管理',
    cushionHighlight2: '柔性履约模式',
    cushionHighlight3: '全国仓储网络',
    cushionHighlight4: '逆向物流处理',
    cushionResult1Metric: '订单增长',
    cushionResult2Metric: '配送成本',
    cushionResult3Metric: '准确率',
    cushionResult4Metric: '配送中心',
  },
  en: {
    // 页面基本信息 - 专业营销表达
    pageTitle: 'Case Studies',
    pageDescription:
      'Empowering Clients, Creating Success Together - Real Stories Demonstrate Professional Excellence',

    // 正泰案例 - 专业B2B表达
    chintCompany: 'CHINT Group',
    chintIndustry: 'Renewable Energy',
    chintTitle:
      'High-Value, High-Complexity: Customized End-to-End Security Solutions for New Energy Giant',
    chintDescription:
      'CHINT Group - Global leading energy storage and solar products brand, committed to providing clean energy solutions for the world.',
    chintChallenge:
      'As a global shipping leader, CHINT faced triple severe challenges in cross-border transportation, customs compliance, and asset security for high-value, large-format, fragile products when entering the US market.',
    chintSolution1Title: 'Customs Compliance Expertise',
    chintSolution1Desc:
      'Leveraging deep customs knowledge to solve complex US customs compliance challenges for specialized products and mitigate risks.',
    chintSolution2Title: 'Asset Security Guarantee',
    chintSolution2Desc:
      'Providing industry-leading full-value compensation guarantee, ensuring absolute security for high-value goods during warehousing and transportation.',
    chintSolution3Title: 'One-Stop Fulfillment Service',
    chintSolution3Desc:
      'Providing seamless services from port deconsolidation, sorting, relabeling to precise delivery, greatly improving efficiency.',
    chintSolution4Title: 'Professional Warehousing Solutions',
    chintSolution4Desc:
      'Providing customized warehousing and precision operation solutions tailored to oversized, fragile, high-value cargo characteristics.',
    chintSolution5Title: 'Self-Operated Fleet Delivery',
    chintSolution5Desc:
      'Through our powerful self-operated fleet, ensuring timely and precise delivery for both B2B and B2C orders.',
    chintTestimonial:
      "Facing cross-border challenges with high-value products, Kenable's one-stop solutions and full-value guarantee allow us to truly focus on the US market with peace of mind.",
    chintAuthor: 'Mr. Zhang',
    chintPosition: 'Supply Chain Director',
    chintMetric1Label: 'On-Time Delivery Rate',
    chintMetric2Label: 'Value Protection',
    chintMetric3Label: 'Response Time',
    chintHighlight1: 'Full Value Insurance',
    chintHighlight2: 'Professional Equipment Handling',
    chintHighlight3: 'Customs Compliance Expert',
    chintHighlight4: 'Real-Time Tracking & Monitoring',
    chintResult1Metric: 'Logistics Cost',
    chintResult2Metric: 'Safety Rate',
    chintResult3Metric: 'Customs Clearance',
    chintResult4Metric: 'Service Cities',

    // Cushion Lab案例 - DTC电商表达
    cushionCompany: 'Cushion Lab',
    cushionIndustry: 'Home & Living',
    cushionTitle:
      'Multi-Channel, Multi-Origin: Efficiently Integrating Global Supply Chain to Drive Brand High-Speed Growth',
    cushionDescription:
      'Cushion Lab - Renowned US DTC home brand with over $100M annual revenue, products beloved by consumers.',
    cushionChallenge:
      'Cushion Lab needs to simultaneously manage multiple sourcing locations from Thailand, Vietnam, and China, while fulfilling complex order requirements across Amazon, Temu, TikTok, and independent sites with fast-paced, high-concurrency demands, requiring extremely high supply chain integration and flexibility.',
    cushionSolution1Title: 'Multi-Origin Integration',
    cushionSolution1Desc:
      'Seamlessly managing export freight from multiple countries including Thailand, Vietnam, and China, achieving unified warehousing.',
    cushionSolution2Title: 'Nationwide Warehouse Network',
    cushionSolution2Desc:
      'Strategically utilizing East, West, and Central US warehouses to optimize inventory allocation and achieve most efficient response and delivery for nationwide multi-channel orders.',
    cushionSolution3Title: 'Flexible Fulfillment Model',
    cushionSolution3Desc:
      'Flexibly supporting FBA replenishment, D2C dropshipping, B2B bulk wholesale and other models, greatly improving inventory turnover efficiency.',
    cushionSolution4Title: 'High-Standard Warehousing',
    cushionSolution4Desc:
      'Providing temperature-controlled, dry, clean warehousing environment to meet strict storage requirements for high-quality home products.',
    cushionSolution5Title: 'Reverse Logistics Support',
    cushionSolution5Desc:
      'Efficiently processing multi-channel returns through rapid inspection and reprocessing, returning products to sales channels and reducing losses.',
    cushionTestimonial:
      "Kenable's nationwide multi-warehouse layout and flexible fulfillment capabilities are key to our ability to support multi-channel high-speed growth. They truly understand our business complexity and provided solutions beyond expectations.",
    cushionAuthor: 'Mr. Wang',
    cushionPosition: 'Operations Director',
    cushionMetric1Label: 'Population Coverage',
    cushionMetric2Label: 'Delivery Time',
    cushionMetric3Label: 'Square Feet',
    cushionHighlight1: 'Multi-Origin Management',
    cushionHighlight2: 'Flexible Fulfillment Model',
    cushionHighlight3: 'Nationwide Warehouse Network',
    cushionHighlight4: 'Reverse Logistics Processing',
    cushionResult1Metric: 'Order Growth',
    cushionResult2Metric: 'Delivery Cost',
    cushionResult3Metric: 'Accuracy Rate',
    cushionResult4Metric: 'Distribution Centers',
    // 数值翻译 - 地道英文表达
    chintResponseTime: '24 hours',
    chintClearanceTime: '3 days',
    chintServiceCities: '15 cities',
    cushionDeliveryTime: '2-3 days',
    cushionWarehouseSpace: '500,000+ sqft',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 正泰集团案例数据 - 响应式翻译
const chintCase = computed(() => ({
  company: getText('chintCompany'),
  industry: getText('chintIndustry'),
  title: getText('chintTitle'),
  description: getText('chintDescription'),
  challenge: getText('chintChallenge'),
  solutions: [
    {
      icon: 'shield-check',
      title: getText('chintSolution1Title'),
      description: getText('chintSolution1Desc'),
    },
    {
      icon: 'lock',
      title: getText('chintSolution2Title'),
      description: getText('chintSolution2Desc'),
    },
    {
      icon: 'workflow',
      title: getText('chintSolution3Title'),
      description: getText('chintSolution3Desc'),
    },
    {
      icon: 'warehouse',
      title: getText('chintSolution4Title'),
      description: getText('chintSolution4Desc'),
    },
    {
      icon: 'truck',
      title: getText('chintSolution5Title'),
      description: getText('chintSolution5Desc'),
    },
  ],
  testimonial: {
    content: getText('chintTestimonial'),
    author: getText('chintAuthor'),
    position: getText('chintPosition'),
  },
  image:
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  icon: 'zap',
  metrics: [
    { value: '99.5%', label: getText('chintMetric1Label') },
    { value: '100%', label: getText('chintMetric2Label') },
    { value: getText('chintResponseTime'), label: getText('chintMetric3Label') },
  ],
  highlights: [
    getText('chintHighlight1'),
    getText('chintHighlight2'),
    getText('chintHighlight3'),
    getText('chintHighlight4'),
  ],
  results: [
    { value: '50%↓', metric: getText('chintResult1Metric') },
    { value: '99%', metric: getText('chintResult2Metric') },
    { value: getText('chintClearanceTime'), metric: getText('chintResult3Metric') },
    { value: getText('chintServiceCities'), metric: getText('chintResult4Metric') },
  ],
}))

// Cushion Lab案例数据 - 响应式翻译
const cushionLabCase = computed(() => ({
  company: getText('cushionCompany'),
  industry: getText('cushionIndustry'),
  title: getText('cushionTitle'),
  description: getText('cushionDescription'),
  challenge: getText('cushionChallenge'),
  solutions: [
    {
      icon: 'globe',
      title: getText('cushionSolution1Title'),
      description: getText('cushionSolution1Desc'),
    },
    {
      icon: 'network',
      title: getText('cushionSolution2Title'),
      description: getText('cushionSolution2Desc'),
    },
    {
      icon: 'git-branch',
      title: getText('cushionSolution3Title'),
      description: getText('cushionSolution3Desc'),
    },
    {
      icon: 'thermometer',
      title: getText('cushionSolution4Title'),
      description: getText('cushionSolution4Desc'),
    },
    {
      icon: 'rotate-ccw',
      title: getText('cushionSolution5Title'),
      description: getText('cushionSolution5Desc'),
    },
  ],
  testimonial: {
    content: getText('cushionTestimonial'),
    author: getText('cushionAuthor'),
    position: getText('cushionPosition'),
  },
  image:
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80',
  icon: 'home',
  metrics: [
    { value: '95%', label: getText('cushionMetric1Label') },
    { value: getText('cushionDeliveryTime'), label: getText('cushionMetric2Label') },
    { value: getText('cushionWarehouseSpace'), label: getText('cushionMetric3Label') },
  ],
  highlights: [
    getText('cushionHighlight1'),
    getText('cushionHighlight2'),
    getText('cushionHighlight3'),
    getText('cushionHighlight4'),
  ],
  results: [
    { value: '300%↑', metric: getText('cushionResult1Metric') },
    { value: '40%↓', metric: getText('cushionResult2Metric') },
    { value: '98%', metric: getText('cushionResult3Metric') },
    { value: '5个', metric: getText('cushionResult4Metric') },
  ],
}))
</script>
