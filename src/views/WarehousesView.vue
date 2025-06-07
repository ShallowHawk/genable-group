<template>
  <PageLayout
    page-title="仓储网络"
    page-description="覆盖全美4大配送中心的智能仓储网络，为您提供高效的仓储和配送服务。"
  >
    <!-- 网络概览区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- 左侧内容 -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              战略布局全美的智能仓储网络
            </h2>
            <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                KENABLE GROUP在美国战略性布局了4大配送中心，覆盖东西海岸及中部地区，
                确保为客户提供最快速、最经济的仓储和配送服务。
              </p>
              <p>
                每个配送中心都配备了先进的WMS仓储管理系统，实现智能分拣、自动化库存管理
                和实时订单跟踪，确保99%的包裹能在24小时内完成提货。
              </p>
              <p>
                总仓储面积超过50万平方英尺，日处理能力达10万个包裹，
                为跨境电商客户提供从入库到出库的全流程专业服务。
              </p>
            </div>

            <!-- 核心优势 -->
            <div class="mt-8 grid grid-cols-2 gap-6">
              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="zap" size="lg" class="text-primary-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">智能自动化</div>
                  <div class="text-sm text-gray-600">WMS系统管理</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="clock" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">快速响应</div>
                  <div class="text-sm text-gray-600">24小时内提货</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="shield-check" size="lg" class="text-primary-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">安全可靠</div>
                  <div class="text-sm text-gray-600">24/7安防监控</div>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <Icon name="trending-up" size="lg" class="text-accent-500" />
                </div>
                <div>
                  <div class="font-semibold text-gray-900">高效运营</div>
                  <div class="text-sm text-gray-600">99.8%准确率</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧网络地图 -->
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">全美配送网络覆盖</h3>

              <!-- 模拟美国地图 -->
              <div class="relative bg-white rounded-lg p-8 shadow-inner">
                <div class="text-center text-gray-500 mb-6">
                  <Icon name="map" size="4xl" class="mx-auto mb-2" />
                  <p class="text-lg font-medium">美国配送中心分布图</p>
                </div>

                <!-- 配送中心标记点 -->
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="center in distributionCenters"
                    :key="center.id"
                    class="flex items-center p-3 bg-primary-50 rounded-lg"
                  >
                    <div class="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                    <div>
                      <div class="font-semibold text-gray-900 text-sm">{{ center.name }}</div>
                      <div class="text-xs text-gray-600">{{ center.state }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 覆盖统计 -->
              <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-primary-600">95%</div>
                  <div class="text-sm text-gray-600">人口覆盖</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-accent-600">2-3天</div>
                  <div class="text-sm text-gray-600">配送时效</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-primary-600">50万+</div>
                  <div class="text-sm text-gray-600">平方英尺</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 配送中心详情 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">四大配送中心详情</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            每个配送中心都经过精心选址，确保最佳的地理位置和运营效率
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BaseCard
            v-for="center in distributionCenters"
            :key="center.id"
            variant="elevated"
            hoverable
          >
            <template #header>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4"
                  >
                    <Icon :name="center.icon" size="lg" class="text-primary-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-900">{{ center.name }}</h3>
                    <p class="text-gray-600">{{ center.state }}</p>
                  </div>
                </div>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {{ center.status }}
                </span>
              </div>

              <!-- 配送中心图片区域 -->
              <div
                class="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center mb-4"
              >
                <div class="text-center text-gray-500">
                  <Icon name="building" size="3xl" class="mb-2" />
                  <p class="text-sm">{{ center.name }}实景</p>
                </div>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600">{{ center.description }}</p>

              <!-- 配送中心参数 -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm text-gray-500">仓储面积</div>
                  <div class="font-semibold text-gray-900">{{ center.area }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">日处理能力</div>
                  <div class="font-semibold text-gray-900">{{ center.capacity }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">服务半径</div>
                  <div class="font-semibold text-gray-900">{{ center.radius }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-500">配送时效</div>
                  <div class="font-semibold text-gray-900">{{ center.delivery }}</div>
                </div>
              </div>

              <!-- 服务特色 -->
              <div>
                <h4 class="font-medium text-gray-900 mb-2">服务特色</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in center.features"
                    :key="feature"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 智能仓储系统 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">智能仓储管理系统</h2>
          <p class="text-xl text-gray-600">先进的WMS系统，实现全流程自动化管理</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard
            v-for="system in wmsFeatures"
            :key="system.id"
            variant="outlined"
            class="text-center h-full"
          >
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon :name="system.icon" size="xl" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ system.title }}</h3>
            </template>
            <p class="text-gray-600 mb-4">{{ system.description }}</p>
            <template #footer>
              <ul class="text-sm text-gray-500 space-y-1">
                <li v-for="benefit in system.benefits" :key="benefit" class="flex items-center">
                  <Icon name="check" size="xs" class="text-primary-500 mr-2" />
                  {{ benefit }}
                </li>
              </ul>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 仓储服务流程 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">仓储服务流程</h2>
          <p class="text-xl text-gray-600">标准化作业流程，确保每个环节的精确执行</p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, index) in serviceProcess"
              :key="step.title"
              class="relative text-center"
            >
              <div class="flex flex-col items-center">
                <!-- 步骤圆圈 -->
                <div
                  class="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold relative z-10"
                >
                  {{ index + 1 }}
                </div>

                <!-- 连接线 -->
                <div
                  v-if="index < serviceProcess.length - 1"
                  class="absolute top-8 left-1/2 w-full h-0.5 bg-primary-200 transform translate-x-8 hidden lg:block"
                ></div>

                <!-- 步骤图标 -->
                <div
                  class="w-12 h-12 bg-white border-2 border-primary-200 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon :name="step.icon" size="lg" class="text-primary-500" />
                </div>

                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm">{{ step.description }}</p>

                <!-- 时间指标 -->
                <div
                  class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
                >
                  <Icon name="clock" size="xs" class="mr-1" />
                  {{ step.time }}
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
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 配送中心数据
const distributionCenters = [
  {
    id: '1',
    name: '洛杉矶配送中心',
    state: '加利福尼亚州',
    status: '总部中心',
    icon: 'building-2',
    description:
      '位于洛杉矶港口附近，是我们最大的配送中心，主要服务西海岸地区，拥有最先进的自动化设备和最大的仓储面积。',
    area: '20万平方英尺',
    capacity: '4万包裹/日',
    radius: '500英里',
    delivery: '1-2天',
    features: ['自动化分拣', '温控仓储', '危险品存储', '24/7运营'],
  },
  {
    id: '2',
    name: '芝加哥配送中心',
    state: '伊利诺伊州',
    status: '中部枢纽',
    icon: 'warehouse',
    description:
      '战略位置优越，连接东西海岸，是中部地区的物流枢纽，专门处理大批量订单和快速中转业务。',
    area: '15万平方英尺',
    capacity: '3万包裹/日',
    radius: '600英里',
    delivery: '1-3天',
    features: ['快速中转', '大批量处理', '铁路直达', 'B2B专区'],
  },
  {
    id: '3',
    name: '纽约配送中心',
    state: '纽约州',
    status: '东海岸中心',
    icon: 'building',
    description: '服务美国东海岸及东北部地区，靠近纽约港，为高价值商品提供专业的仓储和配送服务。',
    area: '12万平方英尺',
    capacity: '2.5万包裹/日',
    radius: '400英里',
    delivery: '1-2天',
    features: ['高价值商品', '快递专线', '港口直达', '精品仓储'],
  },
  {
    id: '4',
    name: '达拉斯配送中心',
    state: '德克萨斯州',
    status: '南部中心',
    icon: 'truck',
    description:
      '新建的现代化配送中心，采用最新的智能仓储技术，主要服务德州及南部各州，发展潜力巨大。',
    area: '18万平方英尺',
    capacity: '3.5万包裹/日',
    radius: '550英里',
    delivery: '1-3天',
    features: ['最新技术', '智能机器人', '绿色环保', '快速扩展'],
  },
]

// WMS系统特性
const wmsFeatures = [
  {
    id: '1',
    title: '智能入库管理',
    description: '自动识别商品信息，智能分配存储位置，优化仓储空间利用率',
    icon: 'scan',
    benefits: ['条码自动识别', '智能库位分配', '批次管理', '质检自动化'],
  },
  {
    id: '2',
    title: '实时库存追踪',
    description: '24/7实时监控库存状态，提供精确的库存报告和预警功能',
    icon: 'monitor',
    benefits: ['实时库存更新', '安全库存预警', '移动盘点', '多维度报表'],
  },
  {
    id: '3',
    title: '订单智能处理',
    description: '自动接收订单，智能分配拣货任务，优化拣货路径，提升效率',
    icon: 'zap',
    benefits: ['订单自动接收', '波次智能规划', '路径优化', '批量处理'],
  },
  {
    id: '4',
    title: '数据分析洞察',
    description: '深度分析仓储数据，提供业务洞察和优化建议',
    icon: 'bar-chart-3',
    benefits: ['效率分析', '成本优化', '趋势预测', '决策支持'],
  },
  {
    id: '5',
    title: '多平台集成',
    description: '无缝对接各大电商平台和ERP系统，实现数据同步',
    icon: 'link',
    benefits: ['API接口', '数据同步', '平台对接', '系统集成'],
  },
  {
    id: '6',
    title: '移动作业终端',
    description: '移动设备支持，随时随地进行仓储作业和管理',
    icon: 'smartphone',
    benefits: ['移动端操作', '离线作业', '语音指导', '设备管理'],
  },
]

// 服务流程
const serviceProcess = [
  {
    title: '货物接收',
    description: '验收入库，条码扫描，质量检查',
    icon: 'package-check',
    time: '2-4小时',
  },
  {
    title: '智能存储',
    description: '自动分配库位，上架存储，系统更新',
    icon: 'database',
    time: '1-2小时',
  },
  {
    title: '订单处理',
    description: '订单接收，智能分拣，包装确认',
    icon: 'clipboard-list',
    time: '0.5-1小时',
  },
  {
    title: '出库配送',
    description: '货物出库，运输安排，配送跟踪',
    icon: 'truck',
    time: '1-3天',
  },
]
</script>
