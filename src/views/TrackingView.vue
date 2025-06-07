<template>
  <PageLayout page-title="货物跟踪" page-description="24/7实时货物跟踪系统，随时掌握您的包裹动态。">
    <!-- 跟踪查询区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">实时货物跟踪</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            输入运单号即可查询包裹实时位置、运输状态和预计到达时间
          </p>
        </div>

        <!-- 跟踪查询表单 -->
        <div class="max-w-2xl mx-auto mb-16">
          <BaseCard variant="elevated">
            <form @submit.prevent="handleTracking" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"> 运单号码 * </label>
                <BaseInput
                  v-model="trackingNumber"
                  placeholder="请输入运单号，支持多个号码（用逗号分隔）"
                  :error="error"
                  :required="true"
                />
              </div>

              <div class="flex gap-4">
                <BaseButton
                  type="submit"
                  size="lg"
                  class="flex-1"
                  :loading="isLoading"
                  :disabled="!trackingNumber.trim()"
                >
                  <Icon name="search" size="sm" class="mr-2" />
                  {{ isLoading ? '查询中...' : '查询跟踪' }}
                </BaseButton>
                <BaseButton variant="outline" size="lg" @click="clearForm"> 清空 </BaseButton>
              </div>
            </form>
          </BaseCard>
        </div>

        <!-- 跟踪结果 -->
        <div v-if="trackingResults.length > 0" class="space-y-8">
          <div
            v-for="result in trackingResults"
            :key="result.trackingNumber"
            class="max-w-4xl mx-auto"
          >
            <BaseCard variant="outlined">
              <!-- 包裹基本信息 -->
              <div class="border-b border-gray-200 pb-6 mb-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-semibold text-gray-900">
                    运单号: {{ result.trackingNumber }}
                  </h3>
                  <span
                    :class="[
                      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                      getStatusColor(result.status),
                    ]"
                  >
                    {{ getStatusText(result.status) }}
                  </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span class="text-gray-500">发件地: </span>
                    <span class="font-medium">{{ result.origin }}</span>
                  </div>
                  <div>
                    <span class="text-gray-500">目的地: </span>
                    <span class="font-medium">{{ result.destination }}</span>
                  </div>
                  <div>
                    <span class="text-gray-500">预计到达: </span>
                    <span class="font-medium">{{ result.estimatedDelivery }}</span>
                  </div>
                </div>
              </div>

              <!-- 物流进度 -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-900 mb-4">物流轨迹</h4>
                <div class="space-y-4">
                  <div
                    v-for="(event, index) in result.events"
                    :key="index"
                    class="flex items-start space-x-4"
                  >
                    <div class="flex-shrink-0">
                      <div
                        :class="[
                          'w-3 h-3 rounded-full mt-1.5',
                          index === 0 ? 'bg-primary-500' : 'bg-gray-300',
                        ]"
                      ></div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">{{ event.description }}</p>
                        <p class="text-sm text-gray-500">{{ event.time }}</p>
                      </div>
                      <p class="text-sm text-gray-600">{{ event.location }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>

        <!-- 跟踪说明 -->
        <div class="max-w-4xl mx-auto mt-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">跟踪服务说明</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="clock" size="xl" class="text-primary-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">实时更新</h4>
              <p class="text-gray-600">货物状态每15分钟更新一次，确保信息准确及时</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="bell" size="xl" class="text-accent-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">消息通知</h4>
              <p class="text-gray-600">重要节点自动发送短信和邮件通知</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="smartphone" size="xl" class="text-blue-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">移动端优化</h4>
              <p class="text-gray-600">支持手机APP查询，随时随地掌握包裹动态</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-primary-500 to-primary-600">
      <div class="container-section">
        <div class="text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">需要更多帮助？</h2>
          <p class="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            如果您在跟踪过程中遇到任何问题，我们的客服团队随时为您提供帮助
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton variant="secondary" size="lg" @click="$router.push('/contact')">
              <Icon name="phone" size="sm" class="mr-2" />
              联系客服
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Icon name="help-circle" size="sm" class="mr-2" />
              查看帮助
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import Icon from '@/components/ui/Icon.vue'

interface TrackingEvent {
  time: string
  location: string
  description: string
}

interface TrackingResult {
  trackingNumber: string
  status: string
  origin: string
  destination: string
  estimatedDelivery: string
  events: TrackingEvent[]
}

// 表单数据
const trackingNumber = ref('')
const error = ref('')
const isLoading = ref(false)
const trackingResults = ref<TrackingResult[]>([])

// 模拟跟踪结果数据
const mockTrackingData = [
  {
    trackingNumber: 'KG123456789',
    status: 'in-transit',
    origin: '深圳, 中国',
    destination: '洛杉矶, 美国',
    estimatedDelivery: '2024-01-20',
    events: [
      {
        time: '2024-01-18 14:30',
        location: '洛杉矶配送中心',
        description: '包裹已到达目的地配送中心，正在安排配送',
      },
      {
        time: '2024-01-17 09:15',
        location: '洛杉矶机场',
        description: '包裹已通过海关检查，正在转运至配送中心',
      },
      {
        time: '2024-01-16 22:45',
        location: '洛杉矶机场',
        description: '包裹已抵达目的地机场',
      },
      {
        time: '2024-01-15 08:20',
        location: '深圳机场',
        description: '包裹已离开发货地，正在运输途中',
      },
      {
        time: '2024-01-14 16:00',
        location: '深圳仓库',
        description: '包裹已完成打包，准备发货',
      },
    ],
  },
]

// 处理跟踪查询
const handleTracking = async () => {
  if (!trackingNumber.value.trim()) {
    error.value = '请输入运单号'
    return
  }

  error.value = ''
  isLoading.value = true

  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // 模拟查询结果
    trackingResults.value = mockTrackingData
  } catch (err) {
    error.value = '查询失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}

// 清空表单
const clearForm = () => {
  trackingNumber.value = ''
  error.value = ''
  trackingResults.value = []
}

// 获取状态颜色
const getStatusColor = (status: string) => {
  const colors: Record<string, string> = {
    'in-transit': 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    exception: 'bg-red-100 text-red-800',
  }
  return colors[status] || 'bg-gray-100 text-gray-800'
}

// 获取状态文本
const getStatusText = (status: string) => {
  const texts: Record<string, string> = {
    'in-transit': '运输中',
    delivered: '已送达',
    pending: '待处理',
    exception: '异常',
  }
  return texts[status] || '未知状态'
}
</script>
