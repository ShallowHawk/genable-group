<template>
  <div class="supply-chain-solutions-page">
    <!-- Hero区域 -->
    <PageHero
      :title="getText('title')"
      :subtitle="getText('subtitle')"
      image-url="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop&crop=center"
      :label="getText('label')"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            {{ getText('getSolution') }}
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
          >
            {{ getText('consultation') }}
          </BaseButton>
        </router-link>
      </template>
    </PageHero>

    <!-- 我们的供应链解决方案 -->
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
              {{ getText('ourSolutionsTitle') }}
            </h2>

            <div class="space-y-6">
              <!-- 供应链设计与优化 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('designTitle') }}</h3>
                  <p class="text-gray-600">
                    {{ getText('designDesc') }}
                  </p>
                </div>
              </div>

              <!-- 技术集成 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('technologyTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('technologyDesc') }}
                  </p>
                </div>
              </div>

              <!-- 风险管理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('projectTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('projectDesc') }}
                  </p>
                </div>
              </div>

              <!-- 定制化服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('integrationTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('integrationDesc') }}
                    <a href="#" class="text-cyan-600 hover:text-cyan-800 font-medium">{{
                      getText('connectWithUs')
                    }}</a>
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
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ getText('costOptTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('costOptDesc') }}
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
                    {{ getText('efficiencyTitle') }}
                  </h3>
                  <p class="text-gray-600">{{ getText('efficiencyDesc') }}</p>
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
                    {{ getText('agilityTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('agilityDesc') }}
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
                    {{ getText('innovationTitle') }}
                  </h3>
                  <p class="text-gray-600">
                    {{ getText('innovationDesc') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
              alt="工作人员在电脑前分析供应链数据的场景"
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
                  {{ getText('challengesTitle') }}
                </h4>
                <p class="text-gray-600 mb-4">
                  <strong>{{ getText('challenges') }}</strong
                  >{{ getText('challengesDesc') }}
                </p>
                <p class="text-gray-600">
                  <strong>{{ getText('solutions') }}</strong
                  >{{ getText('solutionsDesc') }}
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">{{ getText('results') }}</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {{ getText('resultsDesc') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=250&fit=crop&crop=center"
              alt="展示供应链管理系统（SCM）后台的Dashboard截图，包含地图追踪和库存水平图表"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=250&fit=crop&crop=center"
              alt="现代化的无尘电子车间或仓库"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="打造智能供应链，赋能业务增长"
      subtitle="专业的供应链解决方案，助您实现成本优化和效率提升"
      primary-button-text="获取解决方案"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  | 'title'
  | 'subtitle'
  | 'label'
  | 'getSolution'
  | 'consultation'
  | 'ourSolutionsTitle'
  | 'designTitle'
  | 'designDesc'
  | 'technologyTitle'
  | 'technologyDesc'
  | 'projectTitle'
  | 'projectDesc'
  | 'integrationTitle'
  | 'integrationDesc'
  | 'connectWithUs'
  | 'whyChooseTitle'
  | 'costOptTitle'
  | 'costOptDesc'
  | 'efficiencyTitle'
  | 'efficiencyDesc'
  | 'agilityTitle'
  | 'agilityDesc'
  | 'innovationTitle'
  | 'innovationDesc'
  | 'caseStudyTitle'
  | 'caseStudySubtitle'
  | 'challengesTitle'
  | 'challenges'
  | 'challengesDesc'
  | 'solutions'
  | 'solutionsDesc'
  | 'results'
  | 'resultsDesc'

// 翻译映射 - 使用地道商业英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    title: '端到端供应链优化，驱动业务增长',
    subtitle:
      '依托22年行业洞察，可耐博达提供从设计优化、技术集成、风险管理到定制服务的全链路供应链解决方案。通过专业SCM/WMS系统集成，助力您实现成本优化、效率提升、敏捷响应与持续创新。',
    label: '智能供应链架构师',
    getSolution: '获取解决方案',
    consultation: '在线咨询',
    ourSolutionsTitle: '我们的供应链解决方案',
    designTitle: '供应链设计与优化',
    designDesc:
      '分析业务模式，设计最优物流路径与库存策略。我们依据您的需求整合各地供货商，再装拆分销中心或店家，降低整体运输成本，提高经济效益。',
    technologyTitle: '技术集成',
    technologyDesc:
      '对接ERP/WMS系统，实现全链路数据可视化。我们灵活运用超库作业帮您争取应供应商突发交货如生产、船期延误、塞港及海关检验所损失的宝贵时间，协助您推进货物配送决策以取得更充裕的时间收集市场动态，增加决策精准度。',
    projectTitle: '项目物流',
    projectDesc:
      '针对超大尺寸（OOG-Out of Gauge）及复杂的货物，我们的项目团队为您订制解决方案与详细计划，协调海运所有细节。',
    integrationTitle: '支持EDI/API快速整合信息',
    integrationDesc: '我们专业的信息团队为您高效处理系统对接。',
    connectWithUs: '与我们的系统串联。',
    whyChooseTitle: '为什么选择可耐博达供应链方案？',
    costOptTitle: '显著成本优化',
    costOptDesc: '通过智能规划与库存优化，实现物流与运营成本的持续降低。',
    efficiencyTitle: '卓越履约效率',
    efficiencyDesc: '先进系统与精益流程结合，保障订单处理的高效与精准。',
    agilityTitle: '敏捷市场响应',
    agilityDesc: '构建灵活供应链架构，快速适应市场需求变化与客户新要求。',
    innovationTitle: '持续创新动力',
    innovationDesc: '不断引入前沿技术与优化模型，保持您供应链的竞争优势。',
    caseStudyTitle: '可耐博达在行动',
    caseStudySubtitle: '为B2B精密电子制造商实现供应链可视化与成本优化',
    challengesTitle: '挑战与解决方案',
    challenges: '挑战：',
    challengesDesc: '需准时向全美数十家工厂供料，对库存可视性与运输时效要求极高，避免产线停工。',
    solutions: '解决方案：',
    solutionsDesc:
      '集成其ERP系统，部署实时追踪的供应商管理库存（VMI），并通过数据分析优化安全库存与补货策略。',
    results: '成效：',
    resultsDesc: '库存持有成本降低18%',
  },
  en: {
    title: 'End-to-End Supply Chain Optimization That Drives Growth',
    subtitle:
      'Drawing on 22 years of industry insight, Kenable delivers comprehensive supply chain solutions from design optimization, technology integration, and risk management to customized services. Through professional SCM/WMS system integration, we help you achieve cost optimization, efficiency improvements, agile response, and continuous innovation.',
    label: 'Supply Chain Architects',
    getSolution: 'Get Supply Chain Solution',
    consultation: 'Get Started',
    ourSolutionsTitle: 'Our Supply Chain Solutions',
    designTitle: 'Supply Chain Design & Optimization',
    designDesc:
      'We analyze your business model to design optimal logistics pathways and inventory strategies. Based on your requirements, we integrate suppliers from multiple locations, consolidate through distribution centers, reducing overall transportation costs and improving economic efficiency.',
    technologyTitle: 'Technology Integration',
    technologyDesc:
      'Connect ERP/WMS systems for end-to-end data visibility. We flexibly leverage cross-docking operations to help you recover valuable time lost due to supplier delivery changes like production delays, shipping delays, port congestion, and customs inspections, providing you more time to collect market intelligence and improve decision-making precision.',
    projectTitle: 'Project Logistics',
    projectDesc:
      'For oversized (OOG-Out of Gauge) and complex cargo, our project team creates customized solutions and detailed plans, coordinating all shipping details.',
    integrationTitle: 'EDI/API Rapid Information Integration Support',
    integrationDesc: 'Our specialized IT team efficiently handles system connectivity.',
    connectWithUs: 'Connect with our systems.',
    whyChooseTitle: 'Why Choose Kenable Supply Chain Solutions?',
    costOptTitle: 'Significant Cost Optimization',
    costOptDesc:
      'Through intelligent planning and inventory optimization, we achieve continuous reduction in logistics and operational costs.',
    efficiencyTitle: 'Exceptional Fulfillment Efficiency',
    efficiencyDesc:
      'Advanced systems combined with lean processes ensure high-efficiency and precise order processing.',
    agilityTitle: 'Agile Market Response',
    agilityDesc:
      'Build flexible supply chain architecture to quickly adapt to market demand changes and new customer requirements.',
    innovationTitle: 'Continuous Innovation Drive',
    innovationDesc:
      'Continuously introducing cutting-edge technology and optimization models to maintain your supply chain competitive advantage.',
    caseStudyTitle: 'Kenable in Action',
    caseStudySubtitle:
      'Achieving Supply Chain Visibility & Cost Optimization for B2B Precision Electronics Manufacturer',
    challengesTitle: 'Challenge & Solution',
    challenges: 'Challenge: ',
    challengesDesc:
      'Need to supply dozens of factories across the US on time, with extremely high requirements for inventory visibility and transportation timeliness to avoid production line shutdowns.',
    solutions: 'Solution: ',
    solutionsDesc:
      'Integrated their ERP system, deployed real-time tracking Vendor Managed Inventory (VMI), and optimized safety stock and replenishment strategies through data analysis.',
    results: 'Results:',
    resultsDesc: '18% reduction in inventory holding costs',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}
</script>

<style scoped>
/* 供应链特色样式 */
.supply-chain-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 数据可视化效果 */
.data-card {
  position: relative;
  overflow: hidden;
}

.data-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.data-card:hover::before {
  left: 100%;
}

/* 流程连接线 */
@media (min-width: 768px) {
  .process-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 32px;
    right: -50%;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    z-index: -1;
  }
}

/* 行业卡片悬停效果 */
.industry-card {
  transition: all 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
