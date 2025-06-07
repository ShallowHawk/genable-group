<template>
  <PageLayout
    page-title="价格方案"
    page-description="透明定价，灵活方案，适合不同规模企业的物流需求。"
  >
    <!-- 价格概览区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">透明定价，无隐藏费用</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            根据您的业务规模和需求，选择最适合的价格方案。所有费用透明公开，让您清楚知道每一分钱的用途。
          </p>
        </div>

        <!-- 价格方案 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- 基础方案 -->
          <BaseCard variant="outlined" class="h-full">
            <template #header>
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">基础方案</h3>
                <p class="text-gray-600">适合小型企业和初创公司</p>
                <div class="mt-4">
                  <span class="text-4xl font-bold text-gray-900">$299</span>
                  <span class="text-gray-500">/月</span>
                </div>
              </div>
            </template>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">100包裹/月免费额度</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">基础仓储服务</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">标准配送时效</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">邮件客服支持</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">基础跟踪服务</span>
              </div>
            </div>

            <template #footer>
              <BaseButton variant="outline" size="lg" class="w-full"> 选择基础方案 </BaseButton>
            </template>
          </BaseCard>

          <!-- 专业方案 -->
          <BaseCard variant="outlined" class="h-full border-primary-500 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                推荐方案
              </span>
            </div>

            <template #header>
              <div class="text-center mb-6 pt-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">专业方案</h3>
                <p class="text-gray-600">适合成长型企业</p>
                <div class="mt-4">
                  <span class="text-4xl font-bold text-primary-600">$899</span>
                  <span class="text-gray-500">/月</span>
                </div>
              </div>
            </template>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">500包裹/月免费额度</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">高级仓储管理</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">快速配送时效</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">电话+邮件客服</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">实时跟踪服务</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">免费退货处理</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">专属客户经理</span>
              </div>
            </div>

            <template #footer>
              <BaseButton variant="primary" size="lg" class="w-full"> 选择专业方案 </BaseButton>
            </template>
          </BaseCard>

          <!-- 企业方案 -->
          <BaseCard variant="outlined" class="h-full">
            <template #header>
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">企业方案</h3>
                <p class="text-gray-600">适合大型企业和集团公司</p>
                <div class="mt-4">
                  <span class="text-4xl font-bold text-gray-900">定制</span>
                  <span class="text-gray-500">价格</span>
                </div>
              </div>
            </template>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">无限包裹额度</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">定制仓储解决方案</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">极速配送保障</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">24/7专线客服</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">API接口集成</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">数据分析报告</span>
              </div>
              <div class="flex items-center">
                <Icon name="check" size="sm" class="text-green-500 mr-3" />
                <span class="text-gray-700">专属团队服务</span>
              </div>
            </div>

            <template #footer>
              <BaseButton variant="outline" size="lg" class="w-full"> 联系销售 </BaseButton>
            </template>
          </BaseCard>
        </div>

        <!-- 价格计算器 -->
        <div class="max-w-4xl mx-auto">
          <BaseCard variant="elevated">
            <template #header>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">价格计算器</h3>
              <p class="text-gray-600">根据您的具体需求，计算预估费用</p>
            </template>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- 计算器表单 -->
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> 月发货量 </label>
                  <select
                    v-model="calculator.volume"
                    @change="calculatePrice"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="100">100包裹以下</option>
                    <option value="500">100-500包裹</option>
                    <option value="1000">500-1000包裹</option>
                    <option value="5000">1000-5000包裹</option>
                    <option value="10000">5000包裹以上</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> 服务类型 </label>
                  <div class="space-y-2">
                    <label v-for="service in services" :key="service.id" class="flex items-center">
                      <input
                        v-model="calculator.services"
                        :value="service.id"
                        @change="calculatePrice"
                        type="checkbox"
                        class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">{{ service.name }}</span>
                      <span class="ml-auto text-sm text-gray-500">${{ service.price }}/月</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> 配送时效要求 </label>
                  <select
                    v-model="calculator.shipping"
                    @change="calculatePrice"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="standard">标准配送 (5-7天)</option>
                    <option value="fast">快速配送 (3-5天) +$100</option>
                    <option value="express">极速配送 (1-3天) +$200</option>
                  </select>
                </div>
              </div>

              <!-- 价格预估 -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">价格预估</h4>

                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">基础费用</span>
                    <span class="font-medium">${{ calculator.result.base }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">包裹费用</span>
                    <span class="font-medium">${{ calculator.result.volume }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">增值服务</span>
                    <span class="font-medium">${{ calculator.result.services }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">配送费用</span>
                    <span class="font-medium">${{ calculator.result.shipping }}</span>
                  </div>
                  <div class="border-t border-gray-200 pt-3">
                    <div class="flex justify-between text-lg font-semibold">
                      <span class="text-gray-900">月费总计</span>
                      <span class="text-primary-600">${{ calculator.result.total }}</span>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <BaseButton variant="primary" size="lg" class="w-full"> 获取详细报价 </BaseButton>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 附加费用说明 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">附加费用说明</h2>
          <p class="text-xl text-gray-600">透明收费，无隐藏费用，所有额外服务费用均明码标价</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseCard variant="outlined" class="text-center">
            <Icon name="package" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">包装服务</h3>
            <p class="text-gray-600 mb-4">专业包装，保护货物安全</p>
            <div class="text-xl font-bold text-primary-600">$2-5/件</div>
          </BaseCard>

          <BaseCard variant="outlined" class="text-center">
            <Icon name="shield" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">保险服务</h3>
            <p class="text-gray-600 mb-4">货物损坏丢失全额赔付</p>
            <div class="text-xl font-bold text-primary-600">货值0.5%</div>
          </BaseCard>

          <BaseCard variant="outlined" class="text-center">
            <Icon name="clock" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">加急处理</h3>
            <p class="text-gray-600 mb-4">24小时内优先处理</p>
            <div class="text-xl font-bold text-primary-600">$10/件</div>
          </BaseCard>

          <BaseCard variant="outlined" class="text-center">
            <Icon name="repeat" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">退货处理</h3>
            <p class="text-gray-600 mb-4">专业退货检查和处理</p>
            <div class="text-xl font-bold text-primary-600">$8/件</div>
          </BaseCard>

          <BaseCard variant="outlined" class="text-center">
            <Icon name="camera" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">开箱验货</h3>
            <p class="text-gray-600 mb-4">开箱检查并拍照记录</p>
            <div class="text-xl font-bold text-primary-600">$3/件</div>
          </BaseCard>

          <BaseCard variant="outlined" class="text-center">
            <Icon name="truck" size="2xl" class="text-primary-500 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">上门取件</h3>
            <p class="text-gray-600 mb-4">专车上门收取货物</p>
            <div class="text-xl font-bold text-primary-600">$50起</div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- 统一CTA区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 服务选项
const services = [
  { id: 'warehouse', name: '仓储管理', price: 50 },
  { id: 'customs', name: '清关服务', price: 100 },
  { id: 'insurance', name: '货物保险', price: 30 },
  { id: 'returns', name: '退货处理', price: 80 },
  { id: 'packaging', name: '专业包装', price: 40 },
]

// 价格计算器
const calculator = reactive({
  volume: '500',
  services: [] as string[],
  shipping: 'standard',
  result: {
    base: 0,
    volume: 0,
    services: 0,
    shipping: 0,
    total: 0,
  },
})

// 计算价格
const calculatePrice = () => {
  const volume = parseInt(calculator.volume)

  // 基础费用
  let base = 0
  if (volume <= 100) base = 299
  else if (volume <= 500) base = 899
  else if (volume <= 1000) base = 1599
  else if (volume <= 5000) base = 2999
  else base = 4999

  // 包裹费用 (超出免费额度的部分)
  let volumeCost = 0
  const freeQuota = volume <= 100 ? 100 : volume <= 500 ? 500 : volume <= 1000 ? 1000 : 5000
  if (volume > freeQuota) {
    volumeCost = (volume - freeQuota) * 2
  }

  // 增值服务费用
  const servicesCost = calculator.services.reduce((total, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return total + (service ? service.price : 0)
  }, 0)

  // 配送费用
  let shippingCost = 0
  if (calculator.shipping === 'fast') shippingCost = 100
  else if (calculator.shipping === 'express') shippingCost = 200

  calculator.result = {
    base,
    volume: volumeCost,
    services: servicesCost,
    shipping: shippingCost,
    total: base + volumeCost + servicesCost + shippingCost,
  }
}

// 初始化计算
calculatePrice()
</script>
