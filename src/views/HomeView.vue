<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '@/components/ui/BaseButton.vue'

import BaseInput from '@/components/ui/BaseInput.vue'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 统计数据
const statistics = [
  {
    value: '12,000+',
    description: '集装箱处理量',
  },
  {
    value: '110+',
    description: '服务客户',
  },
  {
    value: '15,000+',
    description: '年度派送量',
  },
  {
    value: '380,000+',
    description: '包裹处理量',
  },
  {
    value: '450+',
    description: '自有拖车卡车',
  },
  {
    value: '22,000+',
    description: '平方米仓库面积',
  },
]

// 核心优势
const coreServices = [
  {
    id: 'end-to-end',
    title: '一站式全链路服务',
    description: '提供从跨境货运、清关到美国内陆运输和最后一公里派送的全方位解决方案。',
  },
  {
    id: 'warehouse-network',
    title: '全国自有仓储网络',
    description: '在加州、德州、佐治亚和印第安纳州拥有超22,000平米的自营仓库，确保高效分销。',
  },
  {
    id: 'industry-experience',
    title: '丰富的行业与清关经验',
    description: '近20年行业经验，精通美国法规和平台政策，高效解决复杂物流与清关挑战。',
  },
  {
    id: 'delivery-network',
    title: '高效的派送合作网络',
    description: '与UPS、USPS等官方合作，配合自营卡车车队，保障派送时效。',
  },
  {
    id: 'custom-solutions',
    title: '柔性定制化解决方案',
    description: '支持整箱、拆箱、代发货等模式，根据您的特定需求量身定制服务。',
  },
  {
    id: 'transparent-operations',
    title: '卓越声誉与透明运营',
    description: '提供全程可追溯的透明服务，是客户值得信赖的长期战略合作伙伴。',
  },
]

// 客户评价 - 真实客户案例
const mainTestimonial = {
  content:
    'KENABLE通过其专业的清关知识和端到端解决方案，帮助我们解决了高价值光伏产品进入美国市场的复杂物流难题，保障了货物的安全与时效。',
  author: '正泰集团',
  position: 'Chint Group 物流总监 王先生',
  logo: '⚡',
}

const secondaryTestimonial = {
  content:
    '作为年销售额超1亿美元的多平台销售商，面对多国出口、多渠道销售的复杂需求，KENABLE利用其覆盖全美的多仓网络和灵活的履行模式，为我们提供了稳定高效的仓储和分销服务。',
  author: 'Cushion Lab',
  position: '多平台电商品牌 运营总监 李先生',
  logo: '🪑',
}

// 合作伙伴
const partners = [
  { name: 'UPS', logo: '📦' },
  { name: 'USPS', logo: '📮' },
  { name: 'Amazon', logo: '🛒' },
  { name: 'Chint', logo: '⚡' },
  { name: 'Cushion Lab', logo: '🪑' },
  { name: 'Matson', logo: '🚢' },
]

// 常见问题解答
const faqItems = [
  {
    id: '1',
    question: '你们提供哪些主要服务？',
    answer:
      '我们提供一站式的供应链服务，包括国际头程物流、美国全国派送（包裹和卡车专线）、海外仓储、退货处理（逆向物流）以及分拣、换标等增值服务。',
    category: '服务范围',
  },
  {
    id: '2',
    question: '你们的仓库在美国哪些地方？',
    answer:
      '我们在美国的加利福尼亚州、德克萨斯州、佐治亚州和印第安纳州均设有战略布局的自营仓库，以支持高效的全国分销。',
    category: '仓储网络',
  },
  {
    id: '3',
    question: '从中国海运到美国派送大概需要多久？',
    answer:
      '完整流程时效：揽收/报关1-2天 → 国际海运（Matson快船）12-15天 → 海关清关1-3天 → 派送至洛杉矶仓12-36小时 → 收货上架12-36小时 → 末端派送2-5天。全程约20-28天，每个环节透明可控。',
    category: '时效说明',
  },
]

// 选项卡功能
const activeTab = ref('quote')

const tabs = [
  { id: 'quote', label: '获取报价' },
  { id: 'services', label: '物流解决方案' },
  { id: 'book', label: '预订服务' },
  { id: 'track', label: '货物追踪' },
]

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

// 初始化滚动动画
const initScrollAnimations = () => {
  // 统计数据动画
  gsap.fromTo(
    '.stat-item',
    {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.statistics-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 服务项目动画
  gsap.fromTo(
    '.service-item',
    {
      y: 80,
      opacity: 0,
      rotationX: 15,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 客户评价动画
  gsap.fromTo(
    '.testimonial-content',
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 合作伙伴动画
  gsap.fromTo(
    '.partner-item',
    {
      y: 40,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partners-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // FAQ列表动画
  gsap.fromTo(
    '.news-item',
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // CTA 区域动画
  gsap.fromTo(
    '.cta-content',
    {
      y: 60,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 选项卡内容区域动画
  gsap.fromTo(
    '.tab-content-section',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.tab-content-section',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    },
  )
}

onMounted(() => {
  // 延迟初始化动画，确保DOM已完全渲染
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onBeforeUnmount(() => {
  // 清理 ScrollTrigger 实例
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <div class="home">
    <!-- Enhanced Hero区域 - 参考DIMERCO和DSV设计 -->
    <section
      class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 lg:py-32 overflow-hidden"
    >
      <!-- 网络科技背景 -->
      <div class="absolute inset-0 opacity-20">
        <!-- 动态网络节点 -->
        <div class="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div class="absolute top-32 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
        <div
          class="absolute bottom-20 left-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute bottom-40 right-40 w-3 h-3 bg-cyan-300 rounded-full animate-ping"
        ></div>
        <div class="absolute top-20 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>

        <!-- 连接线 -->
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.6" />
              <stop offset="100%" style="stop-color: #06b6d4; stop-opacity: 0.2" />
            </linearGradient>
          </defs>
          <path
            d="M50 80 Q200 120 350 100 T650 80"
            stroke="url(#line-gradient)"
            stroke-width="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M100 200 Q300 160 500 180 T800 200"
            stroke="url(#line-gradient)"
            stroke-width="2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M150 120 Q400 80 650 120"
            stroke="url(#line-gradient)"
            stroke-width="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <!-- 光线效果 -->
      <div
        class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl"
      ></div>

      <div class="container-section relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- 标签 -->
          <div
            class="inline-flex items-center bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-8 border border-blue-400/30"
          >
            美国领先的跨境物流服务商
          </div>

          <!-- 主标题 -->
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            您值得信赖的美国
            <br class="hidden lg:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              >供应链管理合作伙伴</span
            >
          </h1>

          <!-- 描述 -->
          <p class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            一站式提供国际头程、全美仓储、本土派送及订单履行服务，
            <br class="hidden lg:block" />
            助您轻松立足美国市场。
            <span class="font-semibold text-cyan-400">99%货物24小时内被取件</span>
          </p>

          <!-- 核心优势标签 -->
          <div class="flex flex-wrap gap-4 justify-center mb-16">
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30"
            >
              99% 取件率保证
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-200 border border-cyan-400/30"
            >
              东西海岸运输5-7天
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30"
            >
              近19年行业经验
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-200 border border-cyan-400/30"
            >
              全美4州自营仓库
            </span>
          </div>
        </div>
      </div>

      <!-- 选项卡导航 - 嵌入在hero底部 -->
      <div class="absolute bottom-0 left-0 right-0">
        <div class="container-section">
          <div class="flex justify-center">
            <div class="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="setActiveTab(tab.id)"
                :class="[
                  'relative px-4 py-4 text-center font-medium text-sm transition-all duration-300 rounded-t-lg focus:outline-none transform tab-button',
                  activeTab === tab.id
                    ? 'text-gray-700 shadow-lg scale-105 z-10 tab-active'
                    : 'text-gray-700 hover:scale-102 tab-inactive',
                ]"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 选项卡内容区域 -->
    <section class="py-16 tab-content-section" style="background-color: #eaebec">
      <div class="container-section">
        <transition
          name="tab-content"
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-300 ease-in"
          enter-from-class="opacity-0 transform translate-y-4"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-from-class="opacity-100 transform translate-y-0"
          leave-to-class="opacity-0 transform -translate-y-4"
        >
          <!-- 统一的内容容器 -->
          <div :key="activeTab" class="text-center max-w-4xl mx-auto" style="min-height: 200px">
            <!-- 获取报价选项卡 -->
            <div v-if="activeTab === 'quote'" class="flex flex-col justify-center h-full">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">专业报价，量身定制</h2>
              <p class="text-gray-600 mb-8">
                告诉我们您的服务需求，我们将为您提供最具竞争力的解决方案
              </p>
              <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                <select
                  class="px-6 py-4 border border-gray-300 rounded-lg text-lg min-w-64 bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option>选择服务类型</option>
                  <option>头程物流（揽收、报关、清关、FBA运输）</option>
                  <option>全国派送（包裹与卡车专线服务）</option>
                  <option>海外仓储（储存、指定货件处理、代发货）</option>
                  <option>增值服务（分拣、换标、重包装、定制）</option>
                  <option>逆向物流（退货、重新上架、库存处置）</option>
                </select>
                <BaseButton
                  variant="primary"
                  size="lg"
                  class="bg-blue-600 hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  获取报价
                </BaseButton>
              </div>
            </div>

            <!-- 物流解决方案选项卡 -->
            <div v-else-if="activeTab === 'services'" class="flex flex-col justify-center h-full">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">智慧物流解决方案</h2>
              <p class="text-gray-600 mb-8">
                深入了解我们的全链路服务体系，找到最适合您业务的定制化方案
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <BaseButton
                  variant="primary"
                  size="lg"
                  class="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  物流解决方案报价
                </BaseButton>
                <BaseButton
                  variant="outline"
                  size="lg"
                  class="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all"
                >
                  了解更多物流解决方案
                </BaseButton>
              </div>
            </div>

            <!-- 预订服务选项卡 -->
            <div v-else-if="activeTab === 'book'" class="flex flex-col justify-center h-full">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">便捷服务预订</h2>
              <p class="text-gray-600 mb-8">一键预订，省心省力：立即开启您的物流服务之旅</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <BaseButton
                  variant="primary"
                  size="lg"
                  class="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  新客户预订
                </BaseButton>
                <BaseButton
                  variant="primary"
                  size="lg"
                  class="bg-gray-600 hover:bg-gray-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  现有客户登录
                </BaseButton>
              </div>
            </div>

            <!-- 货物追踪选项卡 -->
            <div v-else-if="activeTab === 'track'" class="flex flex-col justify-center h-full">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">智能货物追踪</h2>
              <p class="text-gray-600 mb-8">
                一键查询，全程透明：输入追踪号码，实时掌握货物运输状态<br /><span
                  class="text-sm text-gray-500"
                  >支持：空运提单号、海运提单号、集装箱号、客户参考号</span
                >
              </p>

              <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div class="flex-1 max-w-md">
                  <BaseInput
                    placeholder="请输入您的追踪号码..."
                    size="lg"
                    class="w-full shadow-sm"
                  />
                </div>
                <BaseButton
                  variant="primary"
                  size="lg"
                  class="bg-blue-600 hover:bg-blue-700 px-12 shadow-md hover:shadow-lg transition-shadow"
                >
                  立即追踪
                </BaseButton>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- 统计数据区域 - DSV风格 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden statistics-section"
    >
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>

      <div class="container-section relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">卓越成就，一目了然</h2>
        </div>

        <!-- 统计数字 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center mb-12"
        >
          <div v-for="(stat, index) in statistics" :key="index" class="text-white stat-item">
            <div class="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white">
              {{ stat.value }}
            </div>
            <div class="text-lg lg:text-xl text-gray-300 font-light leading-relaxed">
              {{ stat.description }}
            </div>
          </div>
        </div>

        <!-- 底部按钮 -->
        <div class="text-center">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 font-semibold transition-all duration-300"
          >
            查看我们的全球网络
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- 核心服务解决方案区域 - 简洁风格 -->
    <section class="py-16 lg:py-24 bg-gray-100 services-section">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16 lg:mb-20">
            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              为什么选择我们
            </h2>
          </div>

          <!-- 服务网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <div v-for="service in coreServices" :key="service.id" class="text-center service-item">
              <!-- 简洁图标 -->
              <div class="mb-8">
                <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <!-- 使用简洁的SVG图标或文字 -->
                  <div class="text-4xl text-gray-700">
                    <template v-if="service.id === 'end-to-end'">🔗</template>
                    <template v-else-if="service.id === 'warehouse-network'">🏭</template>
                    <template v-else-if="service.id === 'industry-experience'">📋</template>
                    <template v-else-if="service.id === 'delivery-network'">🚛</template>
                    <template v-else-if="service.id === 'custom-solutions'">⚙️</template>
                    <template v-else-if="service.id === 'transparent-operations'">🤝</template>
                  </div>
                </div>

                <!-- 服务标题 -->
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {{ service.title }}
                </h3>
              </div>

              <!-- 服务描述 -->
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价区域 - DSV风格 -->
    <section class="py-16 lg:py-24 bg-gray-100 testimonial-section">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">口碑见证</h2>
            <p class="text-lg text-gray-600">真实客户案例，见证我们的专业实力</p>
          </div>

          <!-- 客户评价列表 -->
          <div class="space-y-16 lg:space-y-24 testimonial-content">
            <!-- 正泰集团案例 -->
            <div class="relative">
              <!-- 大引号 -->
              <div
                class="text-6xl lg:text-8xl text-blue-200 font-serif leading-none mb-8 text-left"
              >
                "
              </div>

              <!-- 评价内容 -->
              <div class="relative -mt-16 lg:-mt-20">
                <blockquote
                  class="text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed mb-12 lg:mb-16 font-light"
                >
                  {{ mainTestimonial.content }}
                </blockquote>

                <!-- 客户信息 -->
                <div class="text-right">
                  <div class="flex items-center justify-end space-x-3 mb-1">
                    <div class="text-lg lg:text-xl font-semibold text-gray-900">
                      {{ mainTestimonial.author }}
                    </div>
                    <div class="text-2xl">
                      {{ mainTestimonial.logo }}
                    </div>
                  </div>
                  <div class="text-base lg:text-lg text-gray-600">
                    {{ mainTestimonial.position }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 分隔线 -->
            <div class="flex items-center justify-center">
              <div
                class="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              ></div>
            </div>

            <!-- Cushion Lab案例 -->
            <div class="relative">
              <!-- 大引号 -->
              <div
                class="text-6xl lg:text-8xl text-cyan-200 font-serif leading-none mb-8 text-left"
              >
                "
              </div>

              <!-- 评价内容 -->
              <div class="relative -mt-16 lg:-mt-20">
                <blockquote
                  class="text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed mb-12 lg:mb-16 font-light"
                >
                  {{ secondaryTestimonial.content }}
                </blockquote>

                <!-- 客户信息 -->
                <div class="text-right">
                  <div class="flex items-center justify-end space-x-3 mb-1">
                    <div class="text-lg lg:text-xl font-semibold text-gray-900">
                      {{ secondaryTestimonial.author }}
                    </div>
                    <div class="text-2xl">
                      {{ secondaryTestimonial.logo }}
                    </div>
                  </div>
                  <div class="text-base lg:text-lg text-gray-600">
                    {{ secondaryTestimonial.position }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 底部链接 -->
            <div class="text-center mt-12 lg:mt-16">
              <a
                href="#"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors group"
                @click="$router.push('/cases')"
              >
                查看更多客户案例
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴区域 - DSV风格 -->
    <section class="py-16 lg:py-24 bg-gray-50 partners-section">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">携手共赢的合作伙伴</h2>
          </div>

          <!-- 合作伙伴标志 -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center"
          >
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="text-center opacity-60 hover:opacity-100 transition-opacity duration-300 partner-item"
            >
              <div class="text-3xl lg:text-4xl text-gray-600">{{ partner.logo }}</div>
              <div class="text-sm font-medium text-gray-600 mt-2">{{ partner.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ区域 - DSV风格 -->
    <section class="py-16 lg:py-24 bg-white faq-section">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 头部 -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div class="mb-8 lg:mb-0">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">常见问题解答</h2>
            </div>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors group"
              @click="$router.push('/faq')"
            >
              查看全部问题
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>

          <!-- FAQ列表 -->
          <div class="space-y-12">
            <article v-for="item in faqItems" :key="item.id" class="group cursor-pointer news-item">
              <!-- 分类 -->
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-sm font-medium text-blue-600">{{ item.category }}</span>
              </div>

              <!-- 问题 -->
              <h3
                class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight"
              >
                {{ item.question }}
              </h3>

              <!-- 回答 -->
              <p class="text-lg text-gray-600 leading-relaxed font-light">
                {{ item.answer }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 - DSV风格 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden cta-section"
    >
      <!-- 背景装饰效果 -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>

      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white cta-content">
          <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
            携手KENABLE，共创美国市场新机遇
          </h2>
          <p class="text-xl lg:text-2xl mb-12 text-gray-300 font-light leading-relaxed">
            专业团队24小时在线，为您量身打造最优物流解决方案
          </p>

          <!-- CTA按钮 -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 group"
              @click="$router.push('/contact')"
            >
              立即开始合作
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              class="inline-flex items-center text-white hover:text-gray-300 font-medium text-lg transition-colors group"
            >
              下载服务手册
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 选项卡样式 */
.tab-button.tab-active {
  background-color: #eaebec;
}

.tab-button.tab-inactive {
  background-color: #bac1c7;
}

.tab-button.tab-inactive:hover {
  background-color: #a8b0b6;
}

/* 组件特定样式 */
</style>
