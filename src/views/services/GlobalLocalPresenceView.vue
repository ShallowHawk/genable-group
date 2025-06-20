<template>
  <PageLayout :show-page-header="false">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://plus.unsplash.com/premium_photo-1664298313394-cdfdff0300a9?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :label="getText('heroLabel')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('getServiceButton') }}
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

    <!-- 我们的本地化服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <!-- 产地办公室与本地团队 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('feature1Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('feature1Desc') }}
                  </p>
                </div>
              </div>

              <!-- 源头报关与合规服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('feature2Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('feature2Desc') }}
                  </p>
                </div>
              </div>

              <!-- 本地化客户服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('feature3Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('feature3Desc') }}
                  </p>
                </div>
              </div>

              <!-- Local本地运输与操作 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('feature4Title') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('feature4Desc') }}
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
      image-url="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :image-alt="getText('whyUsImageAlt')"
      :reverse="true"
      background-color="gray"
      :features="whyUsFeatures"
    />

    <!-- 应用案例 -->
    <CaseStudyModule_Documentary
      :project-name="getText('caseStudyTitle')"
      :challenge="getText('caseStudyChallenge')"
      :solution="getText('caseStudySolution')"
      :results="getText('caseStudyResults')"
      :images="caseStudyImages"
      background-color="white"
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
  | 'getServiceButton'
  | 'consultButton'
  | 'servicesTitle'
  | 'servicesImageAlt'
  | 'feature1Title'
  | 'feature1Desc'
  | 'feature2Title'
  | 'feature2Desc'
  | 'feature3Title'
  | 'feature3Desc'
  | 'feature4Title'
  | 'feature4Desc'
  | 'whyUsTitle'
  | 'whyUsImageAlt'
  | 'caseStudyTitle'
  | 'caseStudyChallenge'
  | 'caseStudySolution'
  | 'caseStudyResults'
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

// Translation mappings - Professional English for global-local presence
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    heroTitle: '全球网络，本地服务',
    heroSubtitle:
      '可耐博达在中国、越南、印尼设立本地团队，扎根供应链源头。提供专业的产地报关、本地运输与无时差客户服务，以本地智慧赋能您的全球供应链，扫除沟通与执行障碍。',
    heroLabel: '源头服务，全球通达',
    getServiceButton: '获取本地服务',
    consultButton: '在线咨询',
    servicesTitle: '我们的本地化服务',
    servicesImageAlt: '全球化当地布局',
    feature1Title: '源头驻点，专业团队',
    feature1Desc:
      '在中国大陆、越南、印度尼西亚设立实体办公室与专业物流团队，深入产地，提供在地化支持。',
    feature2Title: '源头报关，合规护航',
    feature2Desc:
      '本地团队精通各国出口法规，提供专业报关、原产地证办理及合规咨询，从源头规避风险。',
    feature3Title: '无时差客服，沟通无忧',
    feature3Desc: '提供与您同语言、同时间的本地化客户服务，紧密跟进订单，快速响应需求。',
    feature4Title: '本地物流，全程掌控',
    feature4Desc:
      '提供从工厂提货（EXW）、内陆运输、仓储集货到港口/机场操作的全套本地物流解决方案。',
    whyUsTitle: '为什么选择可耐博达本地服务？',
    whyUsImageAlt: '全球网络地图',
    caseStudyTitle: '亚洲本地团队高效管理Cushion Lab多国供应商复杂出口',
    caseStudyChallenge: '供应商遍布中、越数十城市，如何统一协调交货、集货、报关？',
    caseStudySolution:
      '可耐博达中、越团队作为其"亚洲虚拟物流中心"，主动协调供应商交期，统一处理出口文件，本地集货拼箱。',
    caseStudyResults:
      '沟通效率提升70% (由对接数十家供应商简化为对接可耐博达团队)。通过源头集货优化，头程运费降低约10%。',
    ctaTitle: '选择全球化当地布局，提升供应链效率',
    ctaSubtitle: '本地化团队为您提供专业的源头服务，让全球供应链管理更简单',
    ctaPrimary: '获取本地服务',
    ctaSecondary: '下载服务手册',
    whyUs1Title: '沟通零障碍',
    whyUs1Desc: '本地团队使用您的语言，确保指令精准传达与执行。',
    whyUs2Title: '政策先知者',
    whyUs2Desc: '实时掌握当地政策动态，第一时间提供合规建议，预防延误与损失。',
    whyUs3Title: '源头品控，风险前置',
    whyUs3Desc: '在工厂端介入，进行质量抽检、数量核对与装运监装，保障货物出厂安全合规。',
    whyUs4Title: '多产地协同，敏捷响应',
    whyUs4Desc: '灵活支持您在多国的采购布局，高效协调不同产地的发货、集货与出口流程。',
  },
  en: {
    heroTitle: 'Global Network, Local Service',
    heroSubtitle:
      'Kenable establishes local teams in China, Vietnam, and Indonesia, rooted at supply chain origins. Providing professional origin customs clearance, local transportation, and same-timezone customer service, we empower your global supply chain with local expertise, eliminating communication and execution barriers.',
    heroLabel: 'Origin Service, Global Reach',
    getServiceButton: 'Get Local Service',
    consultButton: 'Online Consultation',
    servicesTitle: 'Our Localized Services',
    servicesImageAlt: 'Global local presence',
    feature1Title: 'Origin Presence, Professional Teams',
    feature1Desc:
      'Physical offices and professional logistics teams established in mainland China, Vietnam, and Indonesia, deeply rooted in production origins for localized support.',
    feature2Title: 'Origin Customs, Compliance Protection',
    feature2Desc:
      'Local teams proficient in export regulations provide professional customs clearance, certificate of origin processing, and compliance consulting, mitigating risks from the source.',
    feature3Title: 'Same-Timezone Service, Seamless Communication',
    feature3Desc:
      'Providing localized customer service in your language and timezone, closely tracking orders and responding rapidly to requirements.',
    feature4Title: 'Local Logistics, Full Control',
    feature4Desc:
      'Complete local logistics solutions from factory pickup (EXW), inland transport, warehouse consolidation to port/airport operations.',
    whyUsTitle: 'Why Choose Kenable Local Services?',
    whyUsImageAlt: 'Global network map',
    caseStudyTitle:
      'Asian Local Teams Efficiently Manage Cushion Lab Multi-Country Supplier Complex Exports',
    caseStudyChallenge:
      'Suppliers scattered across dozens of cities in China and Vietnam - how to coordinate delivery, consolidation, and customs clearance?',
    caseStudySolution:
      'Kenable China and Vietnam teams serve as their "Asian Virtual Logistics Hub," proactively coordinating supplier delivery schedules, unified export document processing, and local consolidation.',
    caseStudyResults:
      'Communication efficiency improved 70% (simplified from managing dozens of suppliers to single Kenable interface). First-mile freight costs reduced ~10% through origin consolidation optimization.',
    ctaTitle: 'Choose Global Local Presence to Enhance Supply Chain Efficiency',
    ctaSubtitle:
      'Localized teams provide professional origin services, making global supply chain management simpler',
    ctaPrimary: 'Get Local Service',
    ctaSecondary: 'Download Service Guide',
    whyUs1Title: 'Zero Communication Barriers',
    whyUs1Desc:
      'Local teams use your language, ensuring precise instruction delivery and execution.',
    whyUs2Title: 'Policy Early Warning',
    whyUs2Desc:
      'Real-time local policy monitoring with immediate compliance recommendations, preventing delays and losses.',
    whyUs3Title: 'Origin Quality Control, Risk Prevention',
    whyUs3Desc:
      'Factory-level intervention with quality sampling, quantity verification, and loading supervision, ensuring safe and compliant cargo departure.',
    whyUs4Title: 'Multi-Origin Coordination, Agile Response',
    whyUs4Desc:
      'Flexible support for your multi-country sourcing strategy, efficiently coordinating shipments, consolidation, and export processes across different origins.',
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
    icon: 'message-circle',
    title: getText('whyUs1Title'),
    description: getText('whyUs1Desc'),
  },
  {
    icon: 'eye',
    title: getText('whyUs2Title'),
    description: getText('whyUs2Desc'),
  },
  {
    icon: 'shield',
    title: getText('whyUs3Title'),
    description: getText('whyUs3Desc'),
  },
  {
    icon: 'zap',
    title: getText('whyUs4Title'),
    description: getText('whyUs4Desc'),
  },
])

// 案例研究图片
const caseStudyImages = [
  {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=center',
    alt: '亚洲团队沟通',
    caption: '可耐博达亚洲团队与客户协调供应商管理',
  },
  {
    url: 'https://images.unsplash.com/photo-1584681613380-1d42c1b21853?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '亚洲地图集货',
    caption: '覆盖中国、越南、印尼的本地化服务网络',
  },
]
</script>
