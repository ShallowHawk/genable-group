<template>
  <PageLayout :show-page-header="false">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('heroTitle')"
      :subtitle="getText('heroSubtitle')"
      image-url="https://plus.unsplash.com/premium_photo-1661881251976-9fc9bbb90c4e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

    <!-- 我们的海运服务 - 新设计规范 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661881251976-9fc9bbb90c4e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="海运货运代理服务"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('servicesTitle') }}
            </h2>

            <div class="space-y-6">
              <!-- 整箱运输 (FCL) -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('fclTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('fclDesc') }}
                  </p>
                </div>
              </div>

              <!-- 拼箱运输 (LCL) -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('lclTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('lclDesc') }}
                  </p>
                </div>
              </div>

              <!-- 专业清关服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('customsClearanceTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('customsClearanceDesc') }}
                  </p>
                </div>
              </div>

              <!-- 亚马逊FBA头程 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('fbaExpressTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('fbaExpressDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为什么选择我们 - 左图右文布局 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧图片 -->
          <div class="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="港口集装箱堆场"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧文案 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {{ getText('whyChooseTitle') }}
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('experienceTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('experienceDesc') }}
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
                    {{ getText('timelinessTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('timelinessDesc') }}
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('endToEndTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('endToEndDesc') }}
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
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('securityTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('securityDesc') }}
                  </p>
                </div>
              </div>
            </div>
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
                  {{ getText('challengeSolutionTitle') }}
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
              src="https://images.unsplash.com/photo-1706499856012-14f062c72b49?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="大型光伏设备被吊装上船"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRyYW5zcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
              alt="可耐博达卡车运输设备"
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

const { locale } = useI18n()

// Translation types
type TranslationKey =
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroLabel'
  | 'getQuoteButton'
  | 'consultButton'
  | 'servicesTitle'
  | 'fclTitle'
  | 'fclDesc'
  | 'lclTitle'
  | 'lclDesc'
  | 'customsClearanceTitle'
  | 'customsClearanceDesc'
  | 'fbaExpressTitle'
  | 'fbaExpressDesc'
  | 'whyChooseTitle'
  | 'experienceTitle'
  | 'experienceDesc'
  | 'timelinessTitle'
  | 'timelinessDesc'
  | 'endToEndTitle'
  | 'endToEndDesc'
  | 'securityTitle'
  | 'securityDesc'
  | 'caseStudyTitle'
  | 'caseStudySubtitle'
  | 'challengeSolutionTitle'
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
    heroTitle: '全球海运，值得托付',
    heroSubtitle:
      '深耕行业近22载，可耐博达提供灵活、高效、经济的全方位海运服务。年操作超12,000TEU，无论整箱（FCL）或拼箱（LCL），我们确保您的货物安全、准时跨越重洋，顺利进入美国市场。',
    heroLabel: '专业海运合作伙伴',
    getQuoteButton: '获取海运报价',
    consultButton: '在线咨询',
    servicesTitle: '我们的海运服务',
    fclTitle: '整箱运输 (FCL - Full Container Load)',
    fclDesc:
      '提供稳定船期、优先航线，覆盖全球主要港口。根据您的需求整合供应商资源，优化集拼与分拨策略，有效降低综合物流成本。',
    lclTitle: '拼箱运输 (LCL - Less than Container Load)',
    lclDesc:
      '灵活拼装，成本优化，专为中小批量货物设计。我们敏捷应对供应链波动（生产延误、船期变更、港口拥堵、查验延长），为您争取时间窗口，提升决策效率。',
    customsClearanceTitle: '专业清关，畅行无忧',
    customsClearanceDesc:
      '精通中美贸易法规，提供高效清关服务。针对超大尺寸（OOG）及复杂货物，专业项目团队定制专属解决方案，协调全程海运细节。',
    fbaExpressTitle: '亚马逊FBA头程专线',
    fbaExpressDesc:
      '定制最优航线，无缝衔接亚马逊运营中心（FBA仓库）。专业IT团队确保系统高效对接，信息流畅通。',
    whyChooseTitle: '为什么选择可耐博达海运？',
    experienceTitle: '深厚经验，值得信赖',
    experienceDesc: '22年行业积淀，强大网络资源，年操作超12,000TEU，经验丰富可靠。',
    timelinessTitle: '时效稳定，承诺必达',
    timelinessDesc: '依托美森快船等核心航线，保障12-15天稳定海运时效，配合1-3天快速清关。',
    endToEndTitle: '端到端服务，无缝覆盖',
    endToEndDesc: '服务链条完整：港口操作、拆箱、仓储、本地派送，真正实现门到门。',
    securityTitle: '资产安全，全程保障',
    securityDesc: '为高价值货物提供足额保险，全程监控，确保运输与仓储安全无虞。',
    caseStudyTitle: '可耐博达在行动',
    caseStudySubtitle: '护航全球光伏龙头"正泰集团"高价值特种设备赴美',
    challengeSolutionTitle: '挑战与解决方案',
    challengeText: '如何安全、合规运输高价值、超尺寸精密光伏设备，并解决复杂清关难题？',
    solutionText:
      '提供特殊加固包装、全程高额保险、专家清关服务，并利用自营卡车网络实现港口至工厂的精准直达派送。',
    resultsTitle: '成效：',
    result1: '实现零货损交付',
    result2: '清关时间比预估缩短20%',
    result3: '为客户项目按时启动提供了有力保障',
    ctaTitle: '选择专业海运服务，开启美国市场之旅',
    ctaSubtitle: '让我们为您提供最具性价比的海运解决方案，专业团队24小时在线服务',
    ctaPrimaryButton: '获取海运报价',
    ctaSecondaryButton: '下载服务手册',
  },
  en: {
    heroTitle: 'Global Sea Freight, Trustworthy Service',
    heroSubtitle:
      'With nearly 22 years of industry experience, Kenable provides flexible, efficient, and economical comprehensive sea freight services. Handling over 12,000 TEU annually, whether FCL or LCL, we ensure your goods safely and punctually cross the ocean to enter the US market successfully.',
    heroLabel: 'Professional Sea Freight Partner',
    getQuoteButton: 'Get Sea Freight Quote',
    consultButton: 'Online Consultation',
    servicesTitle: 'Our Sea Freight Services',
    fclTitle: 'Full Container Load (FCL)',
    fclDesc:
      'Providing stable schedules and priority routes covering major global ports. Integrating supplier resources according to your needs, optimizing consolidation and distribution strategies to effectively reduce overall logistics costs.',
    lclTitle: 'Less than Container Load (LCL)',
    lclDesc:
      'Flexible consolidation and cost optimization designed for small to medium volume shipments. We respond agilely to supply chain fluctuations (production delays, schedule changes, port congestion, extended inspections) to secure time windows and improve decision-making efficiency.',
    customsClearanceTitle: 'Professional Customs Clearance, Smooth Journey',
    customsClearanceDesc:
      'Proficient in China-US trade regulations, providing efficient customs clearance services. For oversized (OOG) and complex cargo, our professional project team customizes exclusive solutions and coordinates full sea freight details.',
    fbaExpressTitle: 'Amazon FBA First-Mile Express',
    fbaExpressDesc:
      'Customized optimal routes with seamless connection to Amazon fulfillment centers (FBA warehouses). Professional IT team ensures efficient system integration and smooth information flow.',
    whyChooseTitle: 'Why Choose Kenable Sea Freight?',
    experienceTitle: 'Deep Experience, Trustworthy',
    experienceDesc:
      '22 years of industry expertise, strong network resources, handling over 12,000 TEU annually, experienced and reliable.',
    timelinessTitle: 'Stable Transit Time, Committed Delivery',
    timelinessDesc:
      'Relying on core routes like Matson Express, ensuring stable 12-15 day sea freight transit times with 1-3 day rapid customs clearance.',
    endToEndTitle: 'End-to-End Service, Seamless Coverage',
    endToEndDesc:
      'Complete service chain: port operations, unpacking, warehousing, local delivery, truly achieving door-to-door service.',
    securityTitle: 'Asset Security, Full Protection',
    securityDesc:
      'Providing adequate insurance for high-value cargo with full monitoring to ensure safe transportation and warehousing.',
    caseStudyTitle: 'Kenable in Action',
    caseStudySubtitle:
      'Safeguarding Global Solar Leader "Chint Group\'s" High-Value Special Equipment to the US',
    challengeSolutionTitle: 'Challenge & Solution',
    challengeText:
      'How to safely and compliantly transport high-value, oversized precision solar equipment while solving complex customs clearance challenges?',
    solutionText:
      'Providing special reinforcement packaging, full high-value insurance, expert customs clearance services, and utilizing our self-operated truck network for precise direct delivery from port to factory.',
    resultsTitle: 'Results:',
    result1: 'Achieved zero cargo damage delivery',
    result2: 'Customs clearance time reduced by 20% compared to estimate',
    result3: 'Provided strong support for timely project launch',
    ctaTitle: 'Choose Professional Sea Freight Services to Start Your US Market Journey',
    ctaSubtitle:
      'Let us provide you with the most cost-effective sea freight solutions with 24/7 professional team service',
    ctaPrimaryButton: 'Get Sea Freight Quote',
    ctaSecondaryButton: 'Download Service Manual',
  },
}

// Get translated text helper function
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>
