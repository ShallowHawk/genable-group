<template>
  <PageLayout page-title="联系我们" page-description="专业团队随时为您服务，多种联系方式任您选择。">
    <!-- 联系方式概览 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">多种方式，随时联系</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            20+年行业经验的专业团队，24/7为您提供最优质的物流服务支持
          </p>
        </div>

        <!-- 联系方式卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <BaseCard variant="elevated" hoverable class="text-center h-full">
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="phone" size="xl" class="text-white" />
              </div>
            </template>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">电话咨询</h3>
            <p class="text-gray-600 mb-4">专业客服随时在线</p>
            <div class="space-y-2">
              <p class="font-medium text-primary-600">+1 (555) 123-4567</p>
              <p class="text-sm text-gray-500">工作日: 8:00-18:00</p>
              <p class="text-sm text-gray-500">周末: 9:00-17:00</p>
            </div>
          </BaseCard>

          <BaseCard variant="elevated" hoverable class="text-center h-full">
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="mail" size="xl" class="text-white" />
              </div>
            </template>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">邮件支持</h3>
            <p class="text-gray-600 mb-4">详细咨询优选方式</p>
            <div class="space-y-2">
              <p class="font-medium text-accent-600">info@kenablegroup.com</p>
              <p class="text-sm text-gray-500">24小时内回复</p>
              <p class="text-sm text-gray-500">支持中英文</p>
            </div>
          </BaseCard>

          <BaseCard variant="elevated" hoverable class="text-center h-full">
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="message-circle" size="xl" class="text-white" />
              </div>
            </template>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">在线客服</h3>
            <p class="text-gray-600 mb-4">即时响应解答疑问</p>
            <div class="space-y-2">
              <p class="font-medium text-green-600">微信: KENABLE2024</p>
              <p class="text-sm text-gray-500">工作时间实时回复</p>
              <p class="text-sm text-gray-500">支持语音通话</p>
            </div>
          </BaseCard>

          <BaseCard variant="elevated" hoverable class="text-center h-full">
            <template #header>
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <Icon name="map-pin" size="xl" class="text-white" />
              </div>
            </template>

            <h3 class="text-lg font-semibold text-gray-900 mb-2">上门拜访</h3>
            <p class="text-gray-600 mb-4">面对面深度交流</p>
            <div class="space-y-2">
              <p class="font-medium text-blue-600">预约上门服务</p>
              <p class="text-sm text-gray-500">大客户专享</p>
              <p class="text-sm text-gray-500">免费方案设计</p>
            </div>
          </BaseCard>
        </div>

        <!-- 快速响应承诺 -->
        <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">快速响应承诺</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">5分钟</div>
              <p class="text-gray-600">在线客服响应</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent-600 mb-2">2小时</div>
              <p class="text-gray-600">电话回访确认</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">24小时</div>
              <p class="text-gray-600">专业方案提供</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- 表单区域 -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">留言咨询</h2>
              <p class="text-xl text-gray-600">填写下方表单，我们将在24小时内与您取得联系</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- 联系人信息 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput
                  v-model="form.name"
                  label="姓名 *"
                  placeholder="请输入您的姓名"
                  :error="errors.name"
                  :required="true"
                />
                <BaseInput
                  v-model="form.phone"
                  label="电话 *"
                  placeholder="请输入联系电话"
                  :error="errors.phone"
                  :required="true"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput
                  v-model="form.email"
                  label="邮箱 *"
                  type="email"
                  placeholder="请输入邮箱地址"
                  :error="errors.email"
                  :required="true"
                />
                <BaseInput v-model="form.company" label="公司名称" placeholder="请输入公司名称" />
              </div>

              <!-- 业务信息 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> 业务类型 * </label>
                  <select
                    v-model="form.businessType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  >
                    <option value="">请选择业务类型</option>
                    <option value="ecommerce">跨境电商</option>
                    <option value="manufacturing">制造业</option>
                    <option value="retail">零售业</option>
                    <option value="healthcare">医疗健康</option>
                    <option value="automotive">汽车配件</option>
                    <option value="electronics">电子产品</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> 预计月发货量 </label>
                  <select
                    v-model="form.monthlyVolume"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">请选择发货量</option>
                    <option value="small">100包裹以下</option>
                    <option value="medium">100-1000包裹</option>
                    <option value="large">1000-5000包裹</option>
                    <option value="enterprise">5000包裹以上</option>
                  </select>
                </div>
              </div>

              <!-- 服务需求 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  服务需求 (可多选)
                </label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label
                    v-for="service in services"
                    :key="service.value"
                    class="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      v-model="form.services"
                      :value="service.value"
                      type="checkbox"
                      class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span class="text-sm text-gray-700">{{ service.label }}</span>
                  </label>
                </div>
              </div>

              <!-- 详细需求 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"> 详细需求描述 </label>
                <textarea
                  v-model="form.message"
                  placeholder="请详细描述您的物流需求，我们将为您量身定制解决方案..."
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <!-- 联系偏好 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3"> 首选联系方式 </label>
                <div class="flex flex-wrap gap-4">
                  <label
                    v-for="contact in contactMethods"
                    :key="contact.value"
                    class="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      v-model="form.preferredContact"
                      :value="contact.value"
                      type="radio"
                      class="border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span class="text-sm text-gray-700">{{ contact.label }}</span>
                  </label>
                </div>
              </div>

              <!-- 提交按钮 -->
              <div class="pt-4">
                <BaseButton
                  type="submit"
                  size="lg"
                  class="w-full"
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                >
                  {{ isSubmitting ? '提交中...' : '提交咨询' }}
                </BaseButton>
                <p class="text-sm text-gray-500 mt-3 text-center">
                  * 提交表单即表示您同意我们的
                  <a href="#" class="text-primary-600 hover:text-primary-700">隐私政策</a>
                </p>
              </div>
            </form>
          </div>

          <!-- 办公地址信息 -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">办公地址</h2>
              <p class="text-xl text-gray-600">欢迎预约参观我们的仓储设施和办公环境</p>
            </div>

            <div class="space-y-8">
              <!-- 总部地址 -->
              <BaseCard variant="outlined">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="building" size="lg" class="text-primary-600" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">总部 - 洛杉矶</h3>
                    <p class="text-gray-600 mb-3">
                      1234 Logistics Blvd, Suite 500<br />
                      Los Angeles, CA 90015
                    </p>
                    <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <Icon name="phone" size="xs" class="mr-1" />
                        +1 (555) 123-4567
                      </span>
                      <span class="flex items-center">
                        <Icon name="mail" size="xs" class="mr-1" />
                        la@kenablegroup.com
                      </span>
                    </div>
                  </div>
                </div>
              </BaseCard>

              <!-- 分部地址 -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-900">其他办公地点</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BaseCard variant="outlined" class="p-4">
                    <h4 class="font-medium text-gray-900 mb-2">芝加哥办事处</h4>
                    <p class="text-sm text-gray-600 mb-2">
                      5678 Commerce St<br />
                      Chicago, IL 60601
                    </p>
                    <p class="text-sm text-gray-500">+1 (555) 234-5678</p>
                  </BaseCard>

                  <BaseCard variant="outlined" class="p-4">
                    <h4 class="font-medium text-gray-900 mb-2">纽约办事处</h4>
                    <p class="text-sm text-gray-600 mb-2">
                      9012 Trade Ave<br />
                      New York, NY 10001
                    </p>
                    <p class="text-sm text-gray-500">+1 (555) 345-6789</p>
                  </BaseCard>

                  <BaseCard variant="outlined" class="p-4">
                    <h4 class="font-medium text-gray-900 mb-2">达拉斯办事处</h4>
                    <p class="text-sm text-gray-600 mb-2">
                      3456 Freight Way<br />
                      Dallas, TX 75201
                    </p>
                    <p class="text-sm text-gray-500">+1 (555) 456-7890</p>
                  </BaseCard>

                  <BaseCard variant="outlined" class="p-4">
                    <h4 class="font-medium text-gray-900 mb-2">中国办事处</h4>
                    <p class="text-sm text-gray-600 mb-2">
                      深圳市南山区科技园<br />
                      创新大厦8楼
                    </p>
                    <p class="text-sm text-gray-500">+86 755 1234 5678</p>
                  </BaseCard>
                </div>
              </div>

              <!-- 地图占位符 -->
              <BaseCard variant="elevated" class="overflow-hidden">
                <div
                  class="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center"
                >
                  <div class="text-center text-gray-500">
                    <Icon name="map" size="4xl" class="mb-4" />
                    <p class="text-lg font-medium">交互式地图</p>
                    <p class="text-sm">点击查看详细位置信息</p>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">常见问题</h2>
          <p class="text-xl text-gray-600">快速找到您关心的问题答案</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <BaseCard v-for="faq in faqs" :key="faq.id" variant="outlined" class="h-full">
            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-start">
              <Icon
                name="help-circle"
                size="sm"
                class="text-primary-500 mr-2 mt-0.5 flex-shrink-0"
              />
              {{ faq.question }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </BaseCard>
        </div>

        <div class="text-center mt-12">
          <BaseButton variant="outline" size="lg">
            <Icon name="message-circle" size="sm" class="mr-2" />
            查看更多FAQ
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-primary-500 to-primary-600">
      <div class="container-section">
        <div class="text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">准备好开始合作了吗？</h2>
          <p class="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            无论您的物流需求多么复杂，我们都有专业的解决方案。联系我们，开启高效物流合作之旅！
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton variant="secondary" size="lg">
              <Icon name="phone" size="sm" class="mr-2" />
              立即致电咨询
            </BaseButton>
            <BaseButton
              variant="outline"
              size="lg"
              class="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Icon name="calendar" size="sm" class="mr-2" />
              预约上门服务
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import Icon from '@/components/ui/Icon.vue'

interface ContactForm {
  name: string
  phone: string
  email: string
  company: string
  businessType: string
  monthlyVolume: string
  services: string[]
  message: string
  preferredContact: string
}

interface FormErrors {
  name: string
  phone: string
  email: string
}

// 表单数据
const form = reactive<ContactForm>({
  name: '',
  phone: '',
  email: '',
  company: '',
  businessType: '',
  monthlyVolume: '',
  services: [],
  message: '',
  preferredContact: 'phone',
})

// 表单错误
const errors = reactive<FormErrors>({
  name: '',
  phone: '',
  email: '',
})

// 提交状态
const isSubmitting = ref(false)

// 服务选项
const services = [
  { value: 'warehousing', label: '仓储管理' },
  { value: 'shipping', label: '国际运输' },
  { value: 'distribution', label: '配送服务' },
  { value: 'customs', label: '清关服务' },
  { value: 'packaging', label: '包装服务' },
  { value: 'returns', label: '退货处理' },
]

// 联系方式偏好
const contactMethods = [
  { value: 'phone', label: '电话' },
  { value: 'email', label: '邮件' },
  { value: 'wechat', label: '微信' },
  { value: 'visit', label: '上门拜访' },
]

// FAQ数据
const faqs = [
  {
    id: '1',
    question: '你们的服务覆盖哪些地区？',
    answer:
      '我们的服务网络覆盖美国全境，在洛杉矶、芝加哥、纽约、达拉斯设有配送中心，同时在中国深圳设有办事处，为跨境贸易提供端到端服务。',
  },
  {
    id: '2',
    question: '如何计算物流费用？',
    answer:
      '物流费用根据货物重量、体积、运输距离、服务类型等因素综合计算。我们提供透明的定价体系，无隐藏费用，可根据您的具体需求提供个性化报价。',
  },
  {
    id: '3',
    question: '货物运输过程中的安全如何保障？',
    answer:
      '我们拥有完善的货物保护体系，包括专业包装、实时跟踪、保险覆盖、温控运输等。所有仓库均配备先进的安防系统，确保货物安全。',
  },
  {
    id: '4',
    question: '可以实时跟踪货物状态吗？',
    answer:
      '是的，我们提供24/7实时跟踪服务。您可以通过我们的在线平台或APP随时查看货物位置、运输状态和预计到达时间。',
  },
  {
    id: '5',
    question: '支持哪些付款方式？',
    answer:
      '我们支持多种付款方式，包括银行转账、信用卡、PayPal、支付宝等。大客户还可以申请账期服务，享受更灵活的付款条件。',
  },
  {
    id: '6',
    question: '如何处理货物损坏或丢失？',
    answer:
      '我们为所有货物提供保险保障。如发生损坏或丢失，我们会在24小时内启动理赔程序，并提供相应的赔偿或补发服务。',
  },
]

// 表单验证
const validateForm = () => {
  let isValid = true

  // 重置错误
  Object.keys(errors).forEach((key) => {
    ;(errors as any)[key] = ''
  })

  if (!form.name.trim()) {
    errors.name = '请输入姓名'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = '请输入联系电话'
    isValid = false
  } else if (!/^[+]?[\d\s\-()]+$/.test(form.phone)) {
    errors.phone = '请输入有效的电话号码'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = '请输入邮箱地址'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    isValid = false
  }

  return isValid
}

// 表单提交
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 提交成功后的处理
    alert('提交成功！我们将在24小时内与您联系。')

    // 重置表单
    Object.keys(form).forEach((key) => {
      if (Array.isArray((form as any)[key])) {
        ;(form as any)[key] = []
      } else {
        ;(form as any)[key] = ''
      }
    })
    form.preferredContact = 'phone'
  } catch (error) {
    alert('提交失败，请稍后重试。')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* 组件特定样式 */
</style>
