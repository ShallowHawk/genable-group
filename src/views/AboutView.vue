<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLayout from '@/components/layout/PageLayout.vue'
import AboutHero from '@/components/sections/AboutHero.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 使命愿景
  | 'missionTitle'
  | 'missionDescription'
  | 'badge1'
  | 'badge2'
  | 'badge3'
  | 'badge4'
  // 发展历程
  | 'historyTitle'
  | 'historySubtitle'
  // 创始人部分
  | 'founderTitle'
  | 'founderName'
  | 'founderPosition'
  | 'founderDescription1'
  | 'founderDescription2'
  | 'achievementBadge1'
  | 'achievementBadge2'
  | 'achievementBadge3'
  | 'achievementBadge4'
  // 团队部分
  | 'coreTeamTitle'
  | 'operationsDirector'
  | 'techDirector'
  | 'businessDirector'
  | 'comingSoon'
  // 合作伙伴部分
  | 'partnershipsTitle'
  | 'partnershipsSubtitle'
  | 'upsAwardTitle'
  | 'upsAwardDesc'
  // 发展历程事件
  | 'timeline2005Title'
  | 'timeline2005Desc'
  | 'timeline2005Details'
  | 'timeline2008Title'
  | 'timeline2008Desc'
  | 'timeline2008Details'
  | 'timeline2013Title'
  | 'timeline2013Desc'
  | 'timeline2013Details'
  | 'timeline2017Title'
  | 'timeline2017Desc'
  | 'timeline2017Details'
  | 'timeline2021Title'
  | 'timeline2021Desc'
  | 'timeline2021Details'
  | 'timeline2023Title'
  | 'timeline2023Desc'
  | 'timeline2023Details'
  // 合作伙伴
  | 'upsPartnerDesc'
  | 'uspsPartnerDesc'
  | 'amazonPartnerDesc'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '关于我们',
    pageDescription:
      '可耐博达（广州）供应链管理有限公司是一家领先的端到端供应链服务企业，致力于为全球客户提供高效、可靠的美国市场准入解决方案。凭借近22年的行业深耕和遍布全美的自营仓储与物流网络，我们提供从国际头程运输、美国仓储、本土派送到订单履行的无缝服务。',

    // 使命愿景
    missionTitle: '连接全球商业，驱动美国市场',
    missionDescription:
      '作为您值得信赖的供应链管理合作伙伴，我们通过高效的流程和卓越的声誉，帮助客户简化物流、优化成本，在美国市场不断取得成功。',
    badge1: '近22年行业深耕',
    badge2: '全美自营仓储网络',
    badge3: '端到端供应链服务',
    badge4: '卓越服务声誉',

    // 发展历程
    historyTitle: '发展历程',
    historySubtitle: '近22年的稳健发展，见证我们从本土仓储服务商成长为全美领先的供应链管理企业',

    // 创始人部分
    founderTitle: '领航者风采',
    founderName: '曾宇星 (Yuxing Zeng)',
    founderPosition: '可耐博达Kenable 创始人 & CEO',
    founderDescription1:
      '可耐博达的创始人曾宇星先生是北美物流领域的资深专家。作为北美卡车协会的重要代表，曾先生曾于2017年5月受邀在美国交通部活动上发表主旨演讲，并获得了时任交通部长赵小兰女士的亲切接见。',
    founderDescription2:
      '他的远见卓识和深厚行业影响力，是可耐博达不断发展的核心驱动力。在他的领导下，公司从洛杉矶的一家本土仓储服务商，发展成为覆盖全美四州、服务全球客户的综合性供应链管理企业。',
    achievementBadge1: '北美卡车协会代表',
    achievementBadge2: '美国交通部演讲嘉宾',
    achievementBadge3: '22年行业经验',
    achievementBadge4: '行业影响力专家',

    // 团队部分
    coreTeamTitle: '核心管理团队',
    operationsDirector: '运营总监',
    techDirector: '技术总监',
    businessDirector: '业务总监',
    comingSoon: '即将公布',

    // 合作伙伴部分
    partnershipsTitle: '权威认证与合作',
    partnershipsSubtitle: '行业权威认证，实力合作伙伴',
    upsAwardTitle: '荣获2023年UPS Ready® Premier Partner称号',
    upsAwardDesc: '极具含金量的行业认可，彰显我们在物流服务领域的卓越表现',

    // 发展历程事件
    timeline2005Title: '奠定基石',
    timeline2005Desc: '在洛杉矶亚速萨成立，启动仓储和卡车运输服务',
    timeline2005Details:
      '可耐博达供应链管理有限公司在洛杉矶亚速萨正式成立，标志着我们在美国物流行业的征程开始。初期专注于本地仓储服务和卡车运输业务，为日后的全国性扩张奠定了坚实基础。',
    timeline2008Title: '初具规模',
    timeline2008Desc: '在洛杉矶收购首个自有仓库，车队规模增至15辆卡车',
    timeline2008Details:
      '通过收购洛杉矶地区的首个自有仓库，我们实现了从租赁到自营的重要转变。同时，卡车车队规模扩展至15辆，服务能力和覆盖范围显著提升。',
    timeline2013Title: '全美布局',
    timeline2013Desc: '建立全美物流网，收购佐治亚州和印第安纳州仓库，总面积超15,000平方米',
    timeline2013Details:
      '这一阶段是公司发展的重要里程碑，我们成功建立了跨越东西海岸的全国物流网络。通过战略性收购佐治亚州和印第安纳州的仓库设施，总仓储面积突破15,000平方米，为客户提供更加高效的全国分销服务。',
    timeline2017Title: '服务升级',
    timeline2017Desc: '升级系统与设施，并正式启动亚马逊FBA头程服务',
    timeline2017Details:
      '投入大量资源对IT系统和仓储设施进行全面升级，提升作业效率和服务质量。同时正式推出亚马逊FBA头程服务，为跨境电商客户提供专业的一站式解决方案。',
    timeline2021Title: '链条延伸',
    timeline2021Desc: '启动国际头程物流，与USPS、UPS达成官方合作，并扩展德州业务',
    timeline2021Details:
      '服务链条向国际头程延伸，实现了从中国到美国的全链路服务覆盖。与USPS、UPS等知名物流公司建立官方合作关系，进一步扩展德州业务版图，服务网络更加完善。',
    timeline2023Title: '全面整合',
    timeline2023Desc: '聚焦海外仓储与全链条服务的深度整合与平台化发展',
    timeline2023Details:
      '进入新的发展阶段，专注于海外仓储与全链条服务的深度整合。通过平台化发展战略，为客户提供更加智能化、标准化的供应链管理服务，持续引领行业创新。',

    // 合作伙伴
    upsPartnerDesc: 'UPS Ready® 顶级合作伙伴 2023',
    uspsPartnerDesc: '美国邮政官方合作伙伴',
    amazonPartnerDesc: '亚马逊FBA认证服务商',
  },
  en: {
    // 页面基本信息 - 专业商务英文
    pageTitle: 'About Us',
    pageDescription:
      'Kenable Group Corp is a leading end-to-end supply chain service provider dedicated to delivering efficient and reliable US market access solutions for global clients. With nearly 22 years of industry expertise and a comprehensive self-operated warehousing and logistics network across America, we provide seamless services from international freight, US warehousing, and local delivery to order fulfillment.',

    // 使命愿景 - 简洁有力
    missionTitle: 'Connecting Global Commerce, Driving US Market Success',
    missionDescription:
      'As your trusted supply chain management partner, we help clients streamline logistics, optimize costs, and achieve continued success in the US market through efficient processes and our proven track record.',
    badge1: 'Nearly 22 Years of Industry Expertise',
    badge2: 'Nationwide Self-Operated Network',
    badge3: 'End-to-End Supply Chain Services',
    badge4: 'Proven Service Excellence',

    // 发展历程 - 专业表达
    historyTitle: 'Our Journey',
    historySubtitle:
      'Nearly 22 years of steady growth, witnessing our evolution from a local warehousing provider to a leading supply chain management enterprise across America',

    // 创始人部分 - 尊重和专业
    founderTitle: 'Leadership Excellence',
    founderName: 'Yuxing Zeng',
    founderPosition: 'Founder & CEO, Kenable Group',
    founderDescription1:
      'Mr. Yuxing Zeng, founder of Kenable, is a seasoned expert in North American logistics. As a key representative of the North American Trucking Association, Mr. Zeng was invited to deliver a keynote speech at a US Department of Transportation event in May 2017, where he was warmly received by then-Secretary Elaine Chao.',
    founderDescription2:
      "His visionary leadership and deep industry influence are the core driving forces behind Kenable's continuous growth. Under his guidance, the company has evolved from a local warehousing service provider in Los Angeles to a comprehensive supply chain management enterprise serving global clients across four US states.",
    achievementBadge1: 'North American Trucking Association Representative',
    achievementBadge2: 'US Department of Transportation Speaker',
    achievementBadge3: '22 Years of Industry Experience',
    achievementBadge4: 'Industry Thought Leader',

    // 团队部分 - 专业英文
    coreTeamTitle: 'Core Management Team',
    operationsDirector: 'Operations Director',
    techDirector: 'Technology Director',
    businessDirector: 'Business Director',
    comingSoon: 'Coming Soon',

    // 合作伙伴部分 - 权威表达
    partnershipsTitle: 'Certifications & Partnerships',
    partnershipsSubtitle: 'Authoritative certifications and strategic partnerships',
    upsAwardTitle: 'UPS Ready® Premier Partner 2023 Award',
    upsAwardDesc:
      'Prestigious industry recognition showcasing our excellence in logistics services',

    // 发展历程事件 - 专业编年史
    timeline2005Title: 'Foundation Established',
    timeline2005Desc: 'Founded in Azusa, Los Angeles, launching warehousing and trucking services',
    timeline2005Details:
      'Kenable Group Corp was officially established in Azusa, Los Angeles, marking the beginning of our journey in the American logistics industry. Initially focused on local warehousing services and trucking operations, laying a solid foundation for future nationwide expansion.',
    timeline2008Title: 'Initial Growth',
    timeline2008Desc:
      'Acquired first self-owned warehouse in Los Angeles, expanded fleet to 15 trucks',
    timeline2008Details:
      'Through the acquisition of our first self-owned warehouse in the Los Angeles area, we achieved a significant transition from leasing to self-operation. Simultaneously, our truck fleet expanded to 15 vehicles, significantly enhancing our service capacity and coverage.',
    timeline2013Title: 'Nationwide Expansion',
    timeline2013Desc:
      'Established nationwide logistics network, acquired warehouses in Georgia and Indiana with total area exceeding 15,000 sqm',
    timeline2013Details:
      'This phase marked a crucial milestone in our company development as we successfully established a nationwide logistics network spanning both coasts. Through strategic acquisitions of warehouse facilities in Georgia and Indiana, our total warehousing area exceeded 15,000 square meters, providing customers with more efficient nationwide distribution services.',
    timeline2017Title: 'Service Enhancement',
    timeline2017Desc:
      'Upgraded systems and facilities, officially launched Amazon FBA first-mile services',
    timeline2017Details:
      'We invested substantial resources in comprehensive upgrades to IT systems and warehousing facilities, improving operational efficiency and service quality. Simultaneously, we officially launched Amazon FBA first-mile services, providing professional one-stop solutions for cross-border e-commerce clients.',
    timeline2021Title: 'Supply Chain Extension',
    timeline2021Desc:
      'Launched international first-mile logistics, established official partnerships with USPS and UPS, expanded Texas operations',
    timeline2021Details:
      'Our service chain extended to international first-mile logistics, achieving full-chain service coverage from China to the United States. We established official partnerships with renowned logistics companies like USPS and UPS, further expanding our Texas operations footprint for a more comprehensive service network.',
    timeline2023Title: 'Comprehensive Integration',
    timeline2023Desc:
      'Focused on deep integration of overseas warehousing and full-chain services with platform-based development',
    timeline2023Details:
      'Entering a new development phase, we focus on deep integration of overseas warehousing and full-chain services. Through platform-based development strategies, we provide customers with more intelligent and standardized supply chain management services, continuously leading industry innovation.',

    // 合作伙伴 - 专业认证
    upsPartnerDesc: 'UPS Ready® Premier Partner 2023',
    uspsPartnerDesc: 'Official USPS Partner',
    amazonPartnerDesc: 'Certified Amazon FBA Service Provider',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 发展历程数据
const timelineEvents = [
  {
    year: '2005',
    title: getText('timeline2005Title'),
    description: getText('timeline2005Desc'),
    details: getText('timeline2005Details'),
    icon: '🏢',
  },
  {
    year: '2008-09',
    title: getText('timeline2008Title'),
    description: getText('timeline2008Desc'),
    details: getText('timeline2008Details'),
    icon: '🏭',
  },
  {
    year: '2013-16',
    title: getText('timeline2013Title'),
    description: getText('timeline2013Desc'),
    details: getText('timeline2013Details'),
    icon: '🗺️',
  },
  {
    year: '2017-20',
    title: getText('timeline2017Title'),
    description: getText('timeline2017Desc'),
    details: getText('timeline2017Details'),
    icon: '⚡',
  },
  {
    year: '2021-22',
    title: getText('timeline2021Title'),
    description: getText('timeline2021Desc'),
    details: getText('timeline2021Details'),
    icon: '🌐',
  },
  {
    year: '2023',
    title: getText('timeline2023Title'),
    description: getText('timeline2023Desc'),
    details: getText('timeline2023Details'),
    icon: '🚀',
  },
]

// 合作伙伴和认证
const partnerships = [
  { name: 'UPS', description: getText('upsPartnerDesc') },
  { name: 'USPS', description: getText('uspsPartnerDesc') },
  { name: 'Amazon', description: getText('amazonPartnerDesc') },
]

// 初始化滚动动画
const initScrollAnimations = () => {
  // 发展历程动画 - 简洁效果
  gsap.fromTo(
    '.history-item',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 创始人区域动画
  gsap.fromTo(
    '.founder-content',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.founder-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 认证合作区域动画
  gsap.fromTo(
    '.partnership-item',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partnerships-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )
}

onMounted(() => {
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <!-- 关于我们页面Banner -->
    <AboutHero />

    <!-- 公司使命与愿景 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {{ getText('missionTitle') }}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed mb-8">
            {{ getText('missionDescription') }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {{ getText('badge1') }}
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
            >
              {{ getText('badge2') }}
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {{ getText('badge3') }}
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
            >
              {{ getText('badge4') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="py-16 lg:py-24 bg-gray-50 history-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {{ getText('historyTitle') }}
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              {{ getText('historySubtitle') }}
            </p>
          </div>

          <!-- 发展历程列表 -->
          <div class="space-y-16">
            <div v-for="(event, index) in timelineEvents" :key="index" class="history-item">
              <div
                :class="[
                  'flex flex-col gap-8',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                ]"
              >
                <!-- 图片区域 -->
                <div class="lg:w-1/3">
                  <div class="relative">
                    <!-- 图片区域，2023年显示qmzh.jpg，其他年份显示图标 -->
                    <div
                      class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden shadow-lg"
                    >
                      <!-- 2023年显示qmzh.jpg图片 -->
                      <template v-if="event.year === '2023'">
                        <img
                          src="/qmzh.jpg"
                          :alt="locale === 'zh' ? '全面整合' : 'Comprehensive Integration'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 2005年显示mdjs.jpg图片 -->
                      <template v-else-if="event.year === '2005'">
                        <img
                          src="/mdjs.jpg"
                          :alt="locale === 'zh' ? '奠定基石' : 'Foundation'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 2008-09年显示cjgm.jpg图片 -->
                      <template v-else-if="event.year === '2008-09'">
                        <img
                          src="/cjgm.jpg"
                          :alt="locale === 'zh' ? '初具规模' : 'Initial Scale'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 2013-16年显示qmbj.jpg图片 -->
                      <template v-else-if="event.year === '2013-16'">
                        <img
                          src="/qmbj.jpg"
                          :alt="locale === 'zh' ? '全美布局' : 'Nationwide Expansion'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 2017-20年显示fwsj.jpg图片 -->
                      <template v-else-if="event.year === '2017-20'">
                        <img
                          src="/fwsj.jpg"
                          :alt="locale === 'zh' ? '服务升级' : 'Service Upgrade'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 2021-22年显示ltys.jpg图片 -->
                      <template v-else-if="event.year === '2021-22'">
                        <img
                          src="/ltys.jpg"
                          :alt="locale === 'zh' ? '链条延伸' : 'Chain Extension'"
                          class="w-full h-full object-cover"
                        />
                      </template>
                      <!-- 其他年份显示图标 -->
                      <template v-else>
                        <div class="flex items-center justify-center">
                          <div class="text-center p-6">
                            <div class="text-4xl text-blue-600 mb-4">
                              <!-- 根据不同阶段显示不同图标 -->
                              <template v-if="event.year === '2005'">🏢</template>
                              <template v-else-if="event.year === '2008-09'">🏭</template>
                              <template v-else-if="event.year === '2013-16'">🗺️</template>
                              <template v-else-if="event.year === '2017-20'">⚡</template>
                              <template v-else-if="event.year === '2021-22'">🌐</template>
                              <template v-else>🚀</template>
                            </div>
                            <div class="text-sm text-gray-500">{{ event.year }}</div>
                          </div>
                        </div>
                      </template>
                    </div>

                    <!-- 蓝色标签区域 -->
                    <div
                      class="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                      <div class="text-sm font-semibold">{{ event.year }}</div>
                    </div>
                  </div>
                </div>

                <!-- 内容区域 -->
                <div class="lg:w-2/3">
                  <div class="bg-white rounded-lg shadow-lg p-8 h-full">
                    <!-- 标题 -->
                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {{ event.title }}
                    </h3>

                    <!-- 描述 -->
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                      {{ event.description }}
                    </p>

                    <!-- 详细信息 -->
                    <p class="text-gray-700 leading-relaxed">
                      {{ event.details }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模块三：创始人和管理团队简介 -->
    <section class="py-16 lg:py-24 bg-white founder-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {{ getText('founderTitle') }}
            </h2>
          </div>

          <!-- 创始人介绍 -->
          <div class="founder-content">
            <div class="lg:flex lg:items-center lg:space-x-12">
              <!-- 创始人照片 -->
              <div class="lg:w-1/3 mb-8 lg:mb-0">
                <div class="relative">
                  <!-- 使用实际的创始人照片 -->
                  <div
                    class="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden shadow-xl"
                  >
                    <img
                      src="/123.jpg"
                      :alt="locale === 'zh' ? '创始人演讲照片' : 'Founder Speaking'"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <!-- 装饰元素 -->
                  <div
                    class="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
                  ></div>
                  <div
                    class="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
                  ></div>
                </div>
              </div>

              <!-- 创始人信息 -->
              <div class="lg:w-2/3">
                <div class="space-y-6">
                  <!-- 姓名和职位 -->
                  <div>
                    <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {{ getText('founderName') }}
                    </h3>
                    <p class="text-xl text-blue-600 font-semibold mb-4">
                      {{ getText('founderPosition') }}
                    </p>
                  </div>

                  <!-- 介绍内容 -->
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 leading-relaxed mb-6">
                      {{ getText('founderDescription1') }}
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                      {{ getText('founderDescription2') }}
                    </p>
                  </div>

                  <!-- 核心成就标签 -->
                  <div class="flex flex-wrap gap-3 pt-4">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {{ getText('achievementBadge1') }}
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                    >
                      {{ getText('achievementBadge2') }}
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {{ getText('achievementBadge3') }}
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                    >
                      {{ getText('achievementBadge4') }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 核心管理团队预留区域 -->
            <div class="mt-16 pt-16 border-t border-gray-200">
              <h4 class="text-2xl font-bold text-gray-900 mb-8 text-center">
                {{ getText('coreTeamTitle') }}
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- 预留的团队成员卡片 -->
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👨‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">
                    {{ getText('operationsDirector') }}
                  </h5>
                  <p class="text-sm text-gray-600">{{ getText('comingSoon') }}</p>
                </div>
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👩‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">{{ getText('techDirector') }}</h5>
                  <p class="text-sm text-gray-600">{{ getText('comingSoon') }}</p>
                </div>
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👨‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">
                    {{ getText('businessDirector') }}
                  </h5>
                  <p class="text-sm text-gray-600">{{ getText('comingSoon') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 权威认证与合作 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 partnerships-section"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              {{ getText('partnershipsTitle') }}
            </h2>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              {{ getText('partnershipsSubtitle') }}
            </p>
          </div>

          <!-- 重要奖项突出展示 -->
          <div class="text-center mb-12 partnership-item">
            <div
              class="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30 mb-4"
            >
              <span class="text-2xl mr-3">🏆</span>
              <span class="text-yellow-300 font-semibold text-lg">
                {{ getText('upsAwardTitle') }}
              </span>
            </div>
            <p class="text-gray-300 text-sm">
              {{ getText('upsAwardDesc') }}
            </p>
          </div>

          <!-- 官方合作伙伴 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="partner in partnerships"
              :key="partner.name"
              class="text-center group partnership-item"
            >
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <!-- 合作伙伴Logo占位符 -->
                <div
                  class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl group-hover:bg-white/30 transition-colors"
                >
                  📦
                </div>
                <h4 class="text-xl font-bold text-white mb-2">{{ partner.name }}</h4>
                <p class="text-gray-300 text-sm">{{ partner.description }}</p>
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

<style scoped>
/* 容器样式 */
.container {
  max-width: 1200px;
}

/* 创始人照片容器 */
.aspect-w-3 {
  position: relative;
  width: 100%;
  height: 400px;
}

.aspect-h-4 {
  height: 400px;
}

/* 发展历程图片容器 */
.aspect-w-4 {
  position: relative;
  width: 100%;
  height: 200px;
}

.aspect-h-3 {
  height: 200px;
}
</style>
