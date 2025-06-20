<template>
  <PageLayout :show-page-header="false">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://images.unsplash.com/photo-1625153979079-659514a98de5?q=80&w=2619&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZWVufDB8fHx8fA%3D%3D"
      :label="getText('heroLabel')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('quoteButton') }}
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

    <!-- 我们的一体化联运服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1625153979079-659514a98de5?q=80&w=2619&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZWVufDB8fHx8fA%3D%3D"
              :alt="getText('servicesImageAlt')"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('servicesTitle') }}
            </h2>

            <div class="space-y-6">
              <!-- IPI内陆点多式联运 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                    <path
                      d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0015.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('ipiTitle') }}</h3>
                  <p class="text-gray-600">
                    {{ getText('ipiDesc') }}
                  </p>
                </div>
              </div>

              <!-- 头程整合联运 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('firstMileTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('firstMileDesc') }}
                  </p>
                </div>
              </div>

              <!-- 全美卡车运输网络 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('trucksTitle') }}</h3>
                  <p class="text-gray-600">
                    {{ getText('trucksDesc') }}
                  </p>
                </div>
              </div>

              <!-- 定制化联运方案 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('customTitle') }}</h3>
                  <p class="text-gray-600">
                    {{ getText('customDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为什么选择我们 -->
    <WhyUsModule
      :title="getText('whyUsTitle')"
      image-url="https://images.unsplash.com/photo-1527314392553-2c7bded21b23?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :reverse="false"
      background-color="gray"
      :features="whyUsFeatures"
    />

    <!-- 应用案例 -->
    <CaseStudyModule_Documentary
      :project-name="getText('caseStudyTitle')"
      :challenge="getText('challenge')"
      :solution="getText('solution')"
      :results="getText('results')"
      :images="caseStudyImages"
      background-color="gray"
    />

    <!-- CTA区域 -->
    <CtaSection
      :title="getText('ctaTitle')"
      :subtitle="getText('ctaSubtitle')"
      :primary-button-text="getText('ctaPrimary')"
      primary-button-href="/contact"
      :secondary-button-text="getText('ctaSecondary')"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </PageLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import WhyUsModule from '@/components/sections/WhyUsModule.vue'
import CaseStudyModule_Documentary from '@/components/sections/CaseStudyModule_Documentary.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
import PageLayout from '@/components/layout/PageLayout.vue'

const { locale } = useI18n()

// Translation types
type TranslationKey =
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroLabel'
  | 'quoteButton'
  | 'consultButton'
  | 'servicesTitle'
  | 'servicesImageAlt'
  | 'ipiTitle'
  | 'ipiDesc'
  | 'firstMileTitle'
  | 'firstMileDesc'
  | 'trucksTitle'
  | 'trucksDesc'
  | 'customTitle'
  | 'customDesc'
  | 'whyUsTitle'
  | 'caseStudyTitle'
  | 'challenge'
  | 'solution'
  | 'results'
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimary'
  | 'ctaSecondary'
  | 'whyUs1Title'
  | 'whyUs1Desc'
  | 'whyUs2Title'
  | 'whyUs2Desc'
  | 'whyUs3Title'
  | 'whyUs3Desc'
  | 'whyUs4Title'
  | 'whyUs4Desc'

// Translation mappings - Professional English for B2B logistics
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    heroTitle: '海陆空联运，智慧链接全球',
    heroSubtitle:
      '可耐博达凭借22年经验，提供包含IPI（内陆点多式联运）在内的海、陆、空无缝衔接解决方案。智能组合运输方式，优化成本与时效平衡，助您实现供应链效益最大化。',
    heroLabel: '多式联运优化专家',
    quoteButton: '获取联运报价',
    consultButton: '在线咨询',
    servicesTitle: '我们的一体化联运服务',
    servicesImageAlt: '一体化联运解决方案',
    ipiTitle: 'IPI内陆点多式联运',
    ipiDesc:
      '核心优势服务。通过海铁、海卡等模式，将货物从美西港口高效、经济转运至芝加哥、达拉斯等内陆核心枢纽。',
    firstMileTitle: '头程整合联运',
    firstMileDesc: '设计空运+陆运或海运+陆运的无缝方案，从海外始发地规划最优头程与内陆派送全链路。',
    trucksTitle: '全美卡车运输网络',
    trucksDesc:
      '依托450+自有卡车，提供覆盖全美的FTL（整车）与LTL（零担）服务，保障长途干线及最后一公里精准送达。',
    customTitle: '定制化联运方案',
    customDesc: '针对超规货、特殊时效等需求，专家团队量身定制最具成本效益与可靠性的多式联运路径。',
    whyUsTitle: '为什么选择可耐博达联运方案？',
    caseStudyTitle: '海铁联运（IPI）助力欧洲建材商节省15%内陆成本',
    challenge: '货物需从洛杉矶港运往丹佛、盐湖城仓库。传统卡车模式成本高、旺季运力不稳。',
    solution: '设计海运+IPI海铁联运方案：港口→铁路枢纽→自有卡车短驳分拨。',
    results: '内陆运输成本降低15%，稳定性大幅提升，全程货物状态在线可追踪。',
    ctaTitle: '选择一体化联运，优化您的物流成本',
    ctaSubtitle: '专业的多式联运解决方案，为您实现成本与时效的最佳平衡',
    ctaPrimary: '获取联运报价',
    ctaSecondary: '下载服务手册',
    whyUs1Title: '单一窗口，全程负责',
    whyUs1Desc: '只需对接可耐博达，我们为您处理所有复杂环节，简化管理。',
    whyUs2Title: '成本时效，智能平衡',
    whyUs2Desc: '科学组合运输方式，根据您的优先级（成本/时效）优化整体效益。',
    whyUs3Title: '网络纵深，覆盖广阔',
    whyUs3Desc: '服务不仅覆盖主要港口，更通过IPI等模式深入美国内陆腹地。',
    whyUs4Title: '灵活应变，使命必达',
    whyUs4Desc: '无论是计划性运输还是紧急补货，我们都能提供弹性解决方案。',
  },
  en: {
    heroTitle: 'Integrated Sea-Land-Air Networks, Smart Global Connections',
    heroSubtitle:
      'Kenable leverages 22 years of experience to provide seamless sea, land, and air solutions including IPI (Inland Point Intermodal). Smart transport mode combinations optimize cost-efficiency balance, maximizing your supply chain value.',
    heroLabel: 'Intermodal Optimization Experts',
    quoteButton: 'Get Intermodal Quote',
    consultButton: 'Online Consultation',
    servicesTitle: 'Our Integrated Intermodal Solutions',
    servicesImageAlt: 'Integrated intermodal solutions',
    ipiTitle: 'IPI Inland Point Intermodal',
    ipiDesc:
      'Core advantage service. Through sea-rail and sea-truck modes, efficiently and economically transport cargo from West Coast ports to inland core hubs like Chicago and Dallas.',
    firstMileTitle: 'First-Mile Integrated Solutions',
    firstMileDesc:
      'Design seamless air+land or sea+land solutions, planning optimal first-mile and inland delivery full-chain routes from overseas origins.',
    trucksTitle: 'Nationwide Trucking Network',
    trucksDesc:
      'With 450+ owned trucks, provide comprehensive FTL (Full Truckload) and LTL (Less Than Truckload) services across the US, ensuring long-haul mainline and last-mile precision delivery.',
    customTitle: 'Customized Intermodal Solutions',
    customDesc:
      'For oversized cargo and special timing requirements, our expert team custom-designs the most cost-effective and reliable multimodal transport routes.',
    whyUsTitle: 'Why Choose Kenable Intermodal Solutions?',
    caseStudyTitle:
      'Sea-Rail Intermodal (IPI) Helps European Building Materials Merchant Save 15% on Inland Costs',
    challenge:
      'Cargo needed transport from LA port to Denver and Salt Lake City warehouses. Traditional trucking was costly with unstable peak season capacity.',
    solution:
      'Designed sea+IPI sea-rail intermodal solution: Port → Rail hub → Owned truck drayage distribution.',
    results:
      'Inland transportation costs reduced by 15%, stability significantly improved, full cargo status online tracking.',
    ctaTitle: 'Choose Integrated Intermodal to Optimize Your Logistics Costs',
    ctaSubtitle:
      'Professional multimodal solutions achieving the optimal balance between cost and timing',
    ctaPrimary: 'Get Intermodal Quote',
    ctaSecondary: 'Download Service Guide',
    whyUs1Title: 'Single Point of Contact, Full Accountability',
    whyUs1Desc:
      'Just interface with Kenable - we handle all complex processes, simplifying your management.',
    whyUs2Title: 'Smart Cost-Efficiency Balance',
    whyUs2Desc:
      'Scientific transport mode combinations optimized to your priorities (cost/timing) for maximum overall value.',
    whyUs3Title: 'Deep Network Coverage, Extensive Reach',
    whyUs3Desc:
      'Service covers not only major ports but reaches deep into US inland regions through IPI and other modes.',
    whyUs4Title: 'Flexible Adaptation, Mission Accomplished',
    whyUs4Desc:
      'Whether planned transportation or emergency restocking, we provide elastic solutions.',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// Why choose us features - responsive translation
const whyUsFeatures = computed(() => [
  {
    icon: 'user-check',
    title: getText('whyUs1Title'),
    description: getText('whyUs1Desc'),
  },
  {
    icon: 'trending-up',
    title: getText('whyUs2Title'),
    description: getText('whyUs2Desc'),
  },
  {
    icon: 'map',
    title: getText('whyUs3Title'),
    description: getText('whyUs3Desc'),
  },
  {
    icon: 'shuffle',
    title: getText('whyUs4Title'),
    description: getText('whyUs4Desc'),
  },
])

// 案例研究图片
const caseStudyImages = [
  {
    url: 'https://images.unsplash.com/photo-1601999007938-f584b47324ac?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '火车运输集装箱',
    caption: '通过海铁联运，货物从洛杉矶港高效转运至内陆城市',
  },
  {
    url: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '卡车装载货物',
    caption: '自有卡车网络完成最后一公里的精准送达',
  },
]
</script>
