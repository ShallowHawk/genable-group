<template>
  <PageLayout page-title="客户案例" page-description="赋能客户，共创成功 - 真实故事见证专业实力">
    <!-- 模块一：顶部英雄区域 -->
    <CaseStudyHero />

    <!-- 模块二：案例详情展示区 -->
    <!-- 正泰集团案例 -->
    <CaseStudyDetail :case-data="chintCase" :reverse="false" background-color="bg-gray-50" />

    <!-- Cushion Lab案例 -->
    <CaseStudyDetail :case-data="cushionLabCase" :reverse="true" background-color="bg-white" />

    <!-- 模块三：行动号召区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/layout/PageLayout.vue'
import CaseStudyHero from '@/components/sections/CaseStudyHero.vue'
import CaseStudyDetail from '@/components/sections/CaseStudyDetail.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 正泰集团案例数据
const chintCase = {
  company: '正泰集团',
  industry: '新能源行业',
  title: '高价值，高难度：为新能源巨头定制全链条安全保障',
  description:
    '正泰集团 (CHINT) - 全球领先的储能与光伏产品品牌，致力于为世界提供清洁能源解决方案。',
  challenge:
    '作为全球出货的领导品牌，正泰在进军美国市场时，面临着其高价值、大规格、易碎品类在跨境运输、海关合规及资产安全方面的三重严峻挑战。',
  solutions: [
    {
      icon: 'shield-check',
      title: '合规清关专家',
      description: '凭借深厚的清关知识，为特种产品解决复杂的美国海关合规难题，规避风险。',
    },
    {
      icon: 'lock',
      title: '资产安全保障',
      description: '提供行业领先的全额价值补偿担保，确保高价值货物在仓储和运输中的绝对安全。',
    },
    {
      icon: 'workflow',
      title: '一站式履约服务',
      description: '提供从港口拆箱、分拣、换标到精准派送的无缝衔接服务，极大提升效率。',
    },
    {
      icon: 'warehouse',
      title: '专业仓储方案',
      description: '针对超大、易碎、高价值货物的特性，提供定制化的仓储与精细化操作方案。',
    },
    {
      icon: 'truck',
      title: '自营卡车派送',
      description: '通过强大的自营车队，确保B2B和B2C订单的及时与精准触达。',
    },
  ],
  testimonial: {
    content:
      '面对高价值产品的跨境难题，KENABLE提供的一站式解决方案和全额价值保障，让我们能真正安心地将市场重心放在美国，后顾无忧。',
    author: '张总',
    position: '供应链总监',
  },
  image:
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
  icon: 'zap',
  metrics: [
    { value: '99.5%', label: '准时交付率' },
    { value: '100%', label: '价值保障' },
    { value: '24小时', label: '响应时间' },
  ],
  highlights: ['全额价值保险', '专业设备操作', '海关合规专家', '实时跟踪监控'],
  results: [
    { value: '50%↓', metric: '物流成本' },
    { value: '99%', metric: '安全率' },
    { value: '3天', metric: '通关时效' },
    { value: '15个', metric: '服务城市' },
  ],
}

// Cushion Lab案例数据
const cushionLabCase = {
  company: 'Cushion Lab',
  industry: '家居用品',
  title: '多渠道，多国籍：高效整合全球供应链，驱动品牌高速增长',
  description: 'Cushion Lab - 年销售额过亿美金的美国知名DTC家居品牌，产品广受消费者喜爱。',
  challenge:
    'Cushion Lab需同时管理来自泰国、越南、中国的多个货源地，并满足Amazon、Temu、TikTok及独立站等多渠道、快节奏、高并发的复杂订单履行需求，对供应链的整合能力与灵活性要求极高。',
  solutions: [
    {
      icon: 'globe',
      title: '多国货源整合',
      description: '无缝管理从泰国、越南、中国等多个国家的出口货运，实现统一入仓。',
    },
    {
      icon: 'network',
      title: '全国分仓布局',
      description:
        '战略性利用美东、美西、美中仓库，优化库存分配，实现对全美各渠道订单的最高效响应与配送。',
    },
    {
      icon: 'git-branch',
      title: '柔性履约模型',
      description: '灵活支持FBA补仓、D2C一件代发、B2B批量批发等多种模式，极大提升库存周转效率。',
    },
    {
      icon: 'thermometer',
      title: '高标准仓储',
      description: '提供恒温、干燥、洁净的仓储环境，满足高品质家居产品的严苛存储要求。',
    },
    {
      icon: 'rotate-ccw',
      title: '逆向物流支持',
      description: '高效处理各渠道退货，通过快速质检与再处理，让产品重回销售链路，减少损失。',
    },
  ],
  testimonial: {
    content:
      'KENABLE覆盖全美的多仓布局和灵活的履约能力，是我们能够支撑多渠道高速增长的关键。他们真正理解我们业务的复杂性，并提供了超出预期的解决方案。',
    author: '王总',
    position: '运营总监',
  },
  image:
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80',
  icon: 'home',
  metrics: [
    { value: '95%', label: '人口覆盖' },
    { value: '2-3天', label: '配送时效' },
    { value: '50万+', label: '平方英尺' },
  ],
  highlights: ['多国货源管理', '柔性履约模式', '全国仓储网络', '逆向物流处理'],
  results: [
    { value: '300%↑', metric: '订单增长' },
    { value: '40%↓', metric: '配送成本' },
    { value: '98%', metric: '准确率' },
    { value: '5个', metric: '配送中心' },
  ],
}
</script>
