<template>
  <PageLayout :show-page-header="false">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=400&fit=crop&crop=center"
      :label="getText('heroLabel')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('getQuoteButton') }}
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

    <!-- 我们的空运服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661551212697-1a6937afdd62?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 左侧内容 -->
          <div class="order-1 lg:order-1">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('servicesTitle') }}
            </h2>

            <div class="space-y-6">
              <!-- 全球空运网络 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('globalNetworkTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('globalNetworkDesc') }}
                  </p>
                </div>
              </div>

              <!-- 门到门服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('doorToDoorTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('doorToDoorDesc') }}
                  </p>
                </div>
              </div>

              <!-- 机场到门服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('airportToDoorTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('airportToDoorDesc') }}
                  </p>
                </div>
              </div>

              <!-- 加急与优先处理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('expeditedTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('expeditedDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为什么选择我们 - 右图左文布局 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧文案 -->
          <div class="order-1 lg:order-1">
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
                    {{ getText('multiCountryTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('multiCountryDesc') }}
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
                    {{ getText('reliableScheduleTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('reliableScheduleDesc') }}
                  </p>
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
                    {{ getText('airGroundTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('airGroundDesc') }}
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
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('professionalTeamTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('professionalTeamDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1501623021299-5a9e5f95960b?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="机场货运站，工作人员正在用叉车转运航空集装板"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
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
                  <strong>挑战：</strong>{{ getText('challengeText') }}
                </p>
                <p class="text-gray-600">
                  <strong>解决方案：</strong>{{ getText('solutionText') }}
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">{{ getText('resultsTitle') }}</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {{ getText('result1') }}
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {{ getText('result2') }}
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {{ getText('result3') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="可耐博达仓库内码放整齐的枕头类产品"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1486556813609-9a827fdc306f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="员工扫描包裹准备发货"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
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
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
import PageLayout from '@/components/layout/PageLayout.vue'

// I18n setup
const { locale } = useI18n()

// Define translation keys for type safety
type TranslationKey =
  | 'pageTitle'
  | 'pageDescription'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroLabel'
  | 'getQuoteButton'
  | 'consultButton'
  | 'breadcrumbServices'
  | 'breadcrumbAirFreight'
  | 'servicesTitle'
  | 'globalNetworkTitle'
  | 'globalNetworkDesc'
  | 'doorToDoorTitle'
  | 'doorToDoorDesc'
  | 'airportToDoorTitle'
  | 'airportToDoorDesc'
  | 'expeditedTitle'
  | 'expeditedDesc'
  | 'whyChooseTitle'
  | 'multiCountryTitle'
  | 'multiCountryDesc'
  | 'reliableScheduleTitle'
  | 'reliableScheduleDesc'
  | 'airGroundTitle'
  | 'airGroundDesc'
  | 'professionalTeamTitle'
  | 'professionalTeamDesc'
  | 'caseStudyTitle'
  | 'caseStudySubtitle'
  | 'challengeTitle'
  | 'challengeText'
  | 'solutionText'
  | 'resultsTitle'
  | 'result1'
  | 'result2'
  | 'result3'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimaryButton'
  | 'ctaSecondaryButton'

// Translation mappings
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    pageTitle: '空运服务',
    pageDescription:
      '依托覆盖全球的航空网络与专业团队，可耐博达提供高效、安全、可靠的空运解决方案。整合多国出口资源，灵活提供门到门、机场到门等模式，确保您的货物以最快速度精准送达。',
    heroTitle: '全球空运，极速通达',
    heroSubtitle:
      '依托覆盖全球的航空网络与专业团队，可耐博达提供高效、安全、可靠的空运解决方案。整合多国出口资源，灵活提供门到门、机场到门等模式，确保您的货物以最快速度精准送达。',
    heroLabel: '全球空运专家',
    getQuoteButton: '获取空运报价',
    consultButton: '在线咨询',
    breadcrumbServices: '服务体系',
    breadcrumbAirFreight: '空运服务',
    servicesTitle: '我们的空运服务',
    globalNetworkTitle: '全球网络，灵活调度',
    globalNetworkDesc:
      '整合全球航空资源，高效管理多国出口。我们根据您的需求协调各地供应商，优化集货与分流路径，显著降低运输成本，提升供应链效率。',
    doorToDoorTitle: '门到门，全程无忧',
    doorToDoorDesc:
      '提供提货、报关、空运、派送一站式服务。我们灵活应对供应商突发状况（如生产延误、船期变更、港口拥堵、海关查验），为您抢回宝贵时间，确保配送决策更从容、更精准。',
    airportToDoorTitle: '机场到门，无缝衔接',
    airportToDoorDesc:
      '货物落地即启动，利用自有卡车网络快速转运。针对超大尺寸（OOG - Out of Gauge，即超规货物）及特殊货物，专业项目团队为您定制专属运输方案与执行计划。',
    expeditedTitle: '加急专线，优先保障',
    expeditedDesc:
      '为高时效性货物开辟绿色通道。专业IT团队高效实现系统对接，信息全程可视，保障急件优先处理。',
    whyChooseTitle: '为什么选择可耐博达空运？',
    multiCountryTitle: '多国出口网络',
    multiCountryDesc: '深耕中国、泰国、越南等核心出口国，提供最具弹性的供应链起点选择。',
    reliableScheduleTitle: '时效精准可靠',
    reliableScheduleDesc:
      '与全球主要航司深度合作，锁定舱位与优先通道，确保货物准时起飞、快速抵达。',
    airGroundTitle: '空地无缝联动',
    airGroundDesc: '货物落地即由自有卡车网络接管，实现高效的空陆联运，最后一公里同样迅捷。',
    professionalTeamTitle: '专业团队护航',
    professionalTeamDesc: '经验丰富的团队提供7x24小时全程跟踪与应急响应，问题即时解决。',
    caseStudyTitle: '可耐博达在行动',
    caseStudySubtitle: '助力北美家居巨头Cushion Lab构建多渠道跨国供应链',
    challengeTitle: '挑战与解决方案',
    challengeText: '如何高效整合中、越、泰三国货源，精准配送至Amazon、TikTok、独立站等多渠道？',
    solutionText: '采用海空联运头程+美国多仓协同网络，实现灵活履约。',
    resultsTitle: '成效：',
    result1: '全美平均配送时效缩短至2-5天',
    result2: '大幅提升客户满意度',
    result3: '成功支撑年销售额超1亿美元的多平台运营',
    ctaTitle: '选择快速空运服务，抢占市场先机',
    ctaSubtitle: '专业的空运解决方案，让您的货物以最快速度到达目的地',
    ctaPrimaryButton: '获取空运报价',
    ctaSecondaryButton: '下载服务手册',
  },
  en: {
    pageTitle: 'Air Freight Services',
    pageDescription:
      'Leveraging our global aviation network and professional team, Kenable provides efficient, secure, and reliable air freight solutions. We integrate multi-country export resources and offer flexible door-to-door and airport-to-door services to ensure your cargo reaches its destination with maximum speed and precision.',
    heroTitle: 'Global Air Freight, Express Connectivity Worldwide',
    heroSubtitle:
      'Leveraging our global aviation network and professional team, Kenable provides efficient, secure, and reliable air freight solutions. We integrate multi-country export resources and offer flexible door-to-door and airport-to-door services to ensure your cargo reaches its destination with maximum speed and precision.',
    heroLabel: 'Global Air Freight Expert',
    getQuoteButton: 'Get Air Freight Quote',
    consultButton: 'Online Consultation',
    breadcrumbServices: 'Services',
    breadcrumbAirFreight: 'Air Freight',
    servicesTitle: 'Our Air Freight Services',
    globalNetworkTitle: 'Global Network, Flexible Scheduling',
    globalNetworkDesc:
      'Integrating global aviation resources for efficient multi-country export management. We coordinate suppliers across regions based on your needs, optimizing consolidation and distribution routes to significantly reduce transportation costs and enhance supply chain efficiency.',
    doorToDoorTitle: 'Door-to-Door, Complete Peace of Mind',
    doorToDoorDesc:
      'Providing one-stop services including pickup, customs clearance, air freight, and delivery. We flexibly handle supplier contingencies (such as production delays, schedule changes, port congestion, customs inspections), helping you recover precious time and ensuring more confident and precise delivery decisions.',
    airportToDoorTitle: 'Airport-to-Door, Seamless Connection',
    airportToDoorDesc:
      'Operations commence immediately upon cargo arrival, utilizing our proprietary truck network for rapid transshipment. For oversized (OOG - Out of Gauge) and special cargo, our professional project team creates customized transportation solutions and execution plans.',
    expeditedTitle: 'Express Lane, Priority Guarantee',
    expeditedDesc:
      'Creating green channels for high-priority cargo. Our professional IT team efficiently implements system integration with full visibility throughout the process, ensuring priority handling for urgent shipments.',
    whyChooseTitle: 'Why Choose Kenable Air Freight?',
    multiCountryTitle: 'Multi-Country Export Network',
    multiCountryDesc:
      'Deep presence in core export countries including China, Thailand, and Vietnam, providing the most flexible supply chain origin options.',
    reliableScheduleTitle: 'Precise and Reliable Schedule',
    reliableScheduleDesc:
      'Deep partnerships with major global airlines, securing cargo space and priority channels to ensure on-time departure and rapid arrival.',
    airGroundTitle: 'Seamless Air-Ground Integration',
    airGroundDesc:
      'Upon cargo arrival, our proprietary truck network takes over immediately, achieving efficient air-ground intermodal transport with equally swift last-mile delivery.',
    professionalTeamTitle: 'Professional Team Escort',
    professionalTeamDesc:
      'Experienced teams provide 24/7 full tracking and emergency response with immediate problem resolution.',
    caseStudyTitle: 'Kenable In Action',
    caseStudySubtitle:
      'Empowering North American Home Furnishing Giant Cushion Lab to Build Multi-Channel Cross-Border Supply Chain',
    challengeTitle: 'Challenge & Solution',
    challengeText:
      'How to efficiently integrate cargo sources from China, Vietnam, and Thailand for precise delivery to multiple channels including Amazon, TikTok, and independent websites?',
    solutionText:
      'Adopting sea-air multimodal first-mile + US multi-warehouse collaborative network for flexible fulfillment.',
    resultsTitle: 'Results:',
    result1: 'US-wide average delivery time reduced to 2-5 days',
    result2: 'Significantly improved customer satisfaction',
    result3: 'Successfully supported multi-platform operations exceeding $100M in annual sales',
    ctaTitle: 'Choose Express Air Freight Services to Seize Market Opportunities',
    ctaSubtitle:
      'Professional air freight solutions to get your cargo to destination at maximum speed',
    ctaPrimaryButton: 'Get Air Freight Quote',
    ctaSecondaryButton: 'Download Service Manual',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// Note: breadcrumbs can be added here if needed for navigation
</script>
