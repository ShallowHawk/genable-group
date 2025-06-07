<template>
  <PageLayout
    page-title="端到端一体化服务体系"
    page-description="我们提供从国际头程到美国末端派送的全链路解决方案，精准、高效，全程可控。"
  >
    <!-- 服务概览 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">五大核心服务</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            覆盖跨境供应链全流程，为您提供一站式物流解决方案
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <BaseCard
            v-for="service in services"
            :key="service.id"
            variant="elevated"
            hoverable
            class="text-center"
          >
            <template #header>
              <div
                class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Icon :name="service.icon" size="xl" class="text-primary-500" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
            </template>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <template #footer>
              <ul class="text-sm text-gray-500 space-y-1">
                <li v-for="feature in service.features" :key="feature" class="flex items-center">
                  <Icon name="check" size="xs" class="text-primary-500 mr-2" />
                  {{ feature }}
                </li>
              </ul>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">透明高效的服务流程</h2>
          <p class="text-xl text-gray-600">标准化作业流程，确保服务质量和时效</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div v-for="(step, index) in processSteps" :key="step.title" class="text-center">
              <div class="relative">
                <div
                  class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                >
                  {{ index + 1 }}
                </div>
                <Icon
                  v-if="index < processSteps.length - 1"
                  name="arrow-right"
                  size="md"
                  class="absolute top-8 left-1/2 transform translate-x-8 text-gray-400 hidden lg:block"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">选择我们的三大理由</h2>
          <p class="text-xl text-gray-600">行业领先的服务水平和技术能力</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div class="space-y-8">
              <div v-for="advantage in advantages" :key="advantage.title" class="flex gap-4">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon :name="advantage.icon" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ advantage.title }}</h3>
                  <p class="text-gray-600">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <div class="grid grid-cols-2 gap-8">
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">22,000+</div>
                  <div class="text-sm text-gray-600">平方米自营仓库</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">22</div>
                  <div class="text-sm text-gray-600">年行业经验</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">450+</div>
                  <div class="text-sm text-gray-600">自有拖车卡车</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-2">4</div>
                  <div class="text-sm text-gray-600">大核心自营仓库</div>
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
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import Icon from '@/components/ui/Icon.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

const services = [
  {
    id: '1',
    title: '头程物流',
    description: '专业的国际货运服务，从揽收到目的地清关的全流程管理',
    icon: 'plane',
    features: ['揽收、订舱', '出口报关', '目的地清关与拆箱', 'FBA及指定仓库头程运输'],
  },
  {
    id: '2',
    title: '全国派送',
    description: '覆盖全美的自营及合作派送网络，灵活满足不同配送需求',
    icon: 'truck',
    features: ['"整票-包裹"专线派送', '"整票-卡车"专线派送', '覆盖全美的自营及合作派送网络'],
  },
  {
    id: '3',
    title: '海外仓储',
    description: '多地自营仓库，总面积超22,000m²，提供专业仓储与库存管理',
    icon: 'warehouse',
    features: [
      '多地自营仓库，总面积超22,000m²',
      '一件代发 (Drop-Shipping)',
      '指定渠道与平台发货',
      '专业仓储与库存管理',
    ],
  },
  {
    id: '4',
    title: '增值服务',
    description: '提供定制化的增值服务，满足多样化的客户需求',
    icon: 'settings',
    features: [
      '库内分拣、质检',
      '更换标签、更换包装',
      '产品组装与定制化处理',
      '满足多样化需求的定制方案',
    ],
  },
  {
    id: '5',
    title: '逆向物流',
    description: '专业的退货处理服务，完善的逆向物流解决方案',
    icon: 'arrow-path',
    features: ['退货处理与接收', '退货质检与重新上架', '过剩库存管理与处置'],
  },
]

const processSteps = [
  {
    title: '下单/揽收',
    description: '客户下单，1-2天内完成上门揽收及出口报关',
    icon: 'computer-desktop',
  },
  {
    title: '国际运输',
    description: 'Matson快船服务，12-15天完成跨国海运',
    icon: 'truck',
  },
  {
    title: '清关入仓',
    description: '1-3天完成清关，12-36小时完成卸货并送达洛杉矶仓库',
    icon: 'building-office',
  },
  {
    title: '收货上架',
    description: '12-36小时完成货物清点、质检并精准上架',
    icon: 'archive-box',
  },
  {
    title: '订单处理',
    description: '系统即时同步订单，12-24小时内完成拣选、打包与派发',
    icon: 'cog',
  },
  {
    title: '末端派送',
    description: '通过UPS/USPS等合作方，2-5天送达全美客户手中',
    icon: 'truck',
  },
]

const advantages = [
  {
    title: '全自营仓储与车队',
    description:
      '在美国核心物流枢纽拥有超过22,000平方米的自营仓库和超过450辆拖车的自营车队，确保对货物操作、安全和时效的完全掌控。',
    icon: 'building-office-2',
  },
  {
    title: '端到端全链路覆盖',
    description:
      '提供从国际货运、清关、仓储到末端派送和逆向物流的全链条服务，无需对接多个服务商，极大简化您的供应链管理。',
    icon: 'link',
  },
  {
    title: '深厚行业经验与权威合作',
    description:
      '拥有近22年的美国本土物流经验，是UPS和USPS的官方合作伙伴，深刻理解行业法规与平台政策，为您规避风险。',
    icon: 'shield-check',
  },
]
</script>

<style scoped>
/* 组件特定样式 */
</style>
