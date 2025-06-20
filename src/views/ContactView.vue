<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
    <!-- 联系方式概览 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('contactWaysTitle') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ getText('contactWaysDesc') }}
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

            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ getText('phoneConsult') }}</h3>
            <p class="text-gray-600 mb-4">{{ getText('phoneDesc') }}</p>
            <div class="space-y-2">
              <p class="font-medium text-primary-600">+1 (626) 693-6579</p>
              <p class="text-sm text-gray-500">{{ getText('workdays') }}</p>
              <p class="text-sm text-gray-500">{{ getText('weekends') }}</p>
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

            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ getText('emailSupport') }}</h3>
            <p class="text-gray-600 mb-4">{{ getText('emailDesc') }}</p>
            <div class="space-y-2">
              <p class="font-medium text-accent-600">adam@kenablegroup.com</p>
              <p class="text-sm text-gray-500">{{ getText('replyTime') }}</p>
              <p class="text-sm text-gray-500">{{ getText('bilingualSupport') }}</p>
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

            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ getText('onlineService') }}</h3>
            <p class="text-gray-600 mb-4">{{ getText('onlineDesc') }}</p>
            <div class="space-y-2">
              <p class="font-medium text-green-600">微信: KENABLE2024</p>
              <p class="text-sm text-gray-500">{{ getText('workHoursReply') }}</p>
              <p class="text-sm text-gray-500">{{ getText('voiceSupport') }}</p>
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

            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ getText('visitService') }}</h3>
            <p class="text-gray-600 mb-4">{{ getText('visitDesc') }}</p>
            <div class="space-y-2">
              <p class="font-medium text-blue-600">{{ getText('vipService') }}</p>
              <p class="text-sm text-gray-500">{{ getText('freePlan') }}</p>
            </div>
          </BaseCard>
        </div>

        <!-- 快速响应承诺 -->
        <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ getText('quickResponseTitle') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">
                {{ getText('onlineResponse') }}
              </div>
              <p class="text-gray-600">{{ getText('onlineResponseDesc') }}</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent-600 mb-2">
                {{ getText('callbackConfirm') }}
              </div>
              <p class="text-gray-600">{{ getText('callbackConfirmDesc') }}</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary-600 mb-2">
                {{ getText('professionalSolution') }}
              </div>
              <p class="text-gray-600">{{ getText('professionalSolutionDesc') }}</p>
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
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ getText('messageConsult') }}
              </h2>
              <p class="text-xl text-gray-600">{{ getText('formDesc') }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- 联系人信息 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput
                  v-model="form.name"
                  :label="getText('name')"
                  :placeholder="getText('namePlaceholder')"
                  :error="errors.name"
                  :required="true"
                />
                <BaseInput
                  v-model="form.phone"
                  :label="getText('phone')"
                  :placeholder="getText('phonePlaceholder')"
                  :error="errors.phone"
                  :required="true"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BaseInput
                  v-model="form.email"
                  :label="getText('email')"
                  type="email"
                  :placeholder="getText('emailPlaceholder')"
                  :error="errors.email"
                  :required="true"
                />
                <BaseInput
                  v-model="form.company"
                  :label="getText('company')"
                  :placeholder="getText('companyPlaceholder')"
                />
              </div>

              <!-- 业务信息 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >{{ getText('businessType') }} *</label
                  >
                  <select
                    v-model="form.businessType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  >
                    <option value="">{{ getText('selectBusinessType') }}</option>
                    <option value="ecommerce">{{ getText('ecommerce') }}</option>
                    <option value="manufacturing">{{ getText('manufacturing') }}</option>
                    <option value="retail">{{ getText('retail') }}</option>
                    <option value="healthcare">{{ getText('healthcare') }}</option>
                    <option value="automotive">{{ getText('automotive') }}</option>
                    <option value="electronics">{{ getText('electronics') }}</option>
                    <option value="other">{{ getText('other') }}</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{
                    getText('monthlyVolume')
                  }}</label>
                  <select
                    v-model="form.monthlyVolume"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">{{ getText('selectVolume') }}</option>
                    <option value="small">{{ getText('small') }}</option>
                    <option value="medium">{{ getText('medium') }}</option>
                    <option value="large">{{ getText('large') }}</option>
                    <option value="enterprise">{{ getText('enterprise') }}</option>
                  </select>
                </div>
              </div>

              <!-- 服务需求 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">
                  {{ getText('serviceNeeds') }} ({{ getText('serviceNeedsDesc') }})
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
                <label class="block text-sm font-medium text-gray-700 mb-2">{{
                  getText('message')
                }}</label>
                <textarea
                  v-model="form.message"
                  :placeholder="getText('messagePlaceholder')"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              <!-- 联系偏好 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">{{
                  getText('preferredContact')
                }}</label>
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
                  :disabled="true"
                  :loading="false"
                >
                  {{ getText('submitBtn') }}
                </BaseButton>
                <p class="text-sm text-gray-500 mt-3 text-center">
                  * {{ getText('privacyPolicy') }}
                  <router-link to="/privacy" class="text-primary-600 hover:text-primary-700">{{
                    getText('privacyPolicyLink')
                  }}</router-link>
                </p>
              </div>
            </form>
          </div>

          <!-- 办公地址信息 -->
          <div>
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ getText('officeAddress') }}
              </h2>
              <p class="text-xl text-gray-600">{{ getText('officeAddressDesc') }}</p>
            </div>

            <div class="space-y-8">
              <!-- 办公地址 -->
              <BaseCard variant="outlined">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="building" size="lg" class="text-primary-600" />
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                      {{ getText('headquarters') }}
                    </h3>
                    <p class="text-gray-600 mb-3">
                      21908 Valley Blvd<br />
                      Walnut, California 91789
                    </p>
                    <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span class="flex items-center">
                        <Icon name="phone" size="xs" class="mr-1" />
                        +1 (626) 693-6579
                      </span>
                      <span class="flex items-center">
                        <Icon name="mail" size="xs" class="mr-1" />
                        adam@kenablegroup.com
                      </span>
                    </div>
                  </div>
                </div>
              </BaseCard>

              <!-- 地图占位符 -->
              <BaseCard variant="elevated" class="overflow-hidden">
                <div
                  class="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center"
                >
                  <div class="text-center text-gray-500">
                    <Icon name="map" size="4xl" class="mb-4" />
                    <p class="text-lg font-medium">{{ getText('interactiveMap') }}</p>
                    <p class="text-sm">{{ getText('clickForDetails') }}</p>
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
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ getText('faqTitle') }}
          </h2>
          <p class="text-xl text-gray-600">{{ getText('faqDesc') }}</p>
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


      </div>
    </section>

    <!-- CTA区域 -->
    <section class="py-16 lg:py-24 bg-gradient-to-br from-primary-500 to-primary-600">
      <div class="container-section">
        <div class="text-center text-white">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">{{ getText('readyToStart') }}</h2>
          <p class="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {{ getText('readyToStartDesc') }}
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 联系方式概览
  | 'contactWaysTitle'
  | 'contactWaysDesc'
  // 联系方式卡片
  | 'phoneConsult'
  | 'phoneDesc'
  | 'emailSupport'
  | 'emailDesc'
  | 'onlineService'
  | 'onlineDesc'
  | 'visitService'
  | 'visitDesc'
  // 工作时间
  | 'workdays'
  | 'weekends'
  | 'replyTime'
  | 'bilingualSupport'
  | 'workHoursReply'
  | 'voiceSupport'
  | 'vipService'
  | 'freePlan'
  // 快速响应承诺
  | 'quickResponseTitle'
  | 'onlineResponse'
  | 'onlineResponseDesc'
  | 'callbackConfirm'
  | 'callbackConfirmDesc'
  | 'professionalSolution'
  | 'professionalSolutionDesc'
  // 表单相关
  | 'messageConsult'
  | 'formDesc'
  | 'name'
  | 'namePlaceholder'
  | 'phone'
  | 'phonePlaceholder'
  | 'email'
  | 'emailPlaceholder'
  | 'company'
  | 'companyPlaceholder'
  | 'businessType'
  | 'monthlyVolume'
  | 'serviceNeeds'
  | 'serviceNeedsDesc'
  | 'message'
  | 'messagePlaceholder'
  | 'preferredContact'
  | 'submitBtn'
  // 表单选项
  | 'selectBusinessType'
  | 'selectVolume'
  | 'ecommerce'
  | 'manufacturing'
  | 'retail'
  | 'healthcare'
  | 'automotive'
  | 'electronics'
  | 'other'
  | 'small'
  | 'medium'
  | 'large'
  | 'enterprise'
  // 联系方式偏好
  | 'phoneMethod'
  | 'emailMethod'
  | 'wechatMethod'
  | 'visitMethod'
  // 隐私政策
  | 'privacyPolicy'
  | 'privacyPolicyLink'
  // 办公地址
  | 'officeAddress'
  | 'officeAddressDesc'
  | 'headquarters'
  | 'otherLocations'
  | 'chicago'
  | 'newYork'
  | 'dallas'
  | 'china'
  | 'interactiveMap'
  | 'clickForDetails'
  // FAQ
  | 'faqTitle'
  | 'faqDesc'
  | 'viewMoreFaq'
  // CTA
  | 'readyToStart'
  | 'readyToStartDesc'
  // FAQ 翻译键
  | 'faq1Question'
  | 'faq1Answer'
  | 'faq2Question'
  | 'faq2Answer'
  | 'faq3Question'
  | 'faq3Answer'
  | 'faq4Question'
  | 'faq4Answer'
  | 'faq5Question'
  | 'faq5Answer'
  | 'faq6Question'
  | 'faq6Answer'
  // 表单验证错误
  | 'phoneValidationError'
  | 'emailValidationError'
  | 'submitSuccess'
  | 'submitError'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '联系我们',
    pageDescription: '专业团队随时为您服务，多种联系方式任您选择。',

    // 联系方式概览
    contactWaysTitle: '多种方式，随时联系',
    contactWaysDesc: '20+年行业经验的专业团队，24/7为您提供最优质的物流服务支持',

    // 联系方式卡片
    phoneConsult: '电话咨询',
    phoneDesc: '专业客服随时在线',
    emailSupport: '邮件支持',
    emailDesc: '详细咨询优选方式',
    onlineService: '在线客服',
    onlineDesc: '即时响应解答疑问',
    visitService: '上门拜访',
    visitDesc: '面对面深度交流',

    // 工作时间
    workdays: '工作日: 8:00-18:00',
    weekends: '周末: 9:00-17:00',
    replyTime: '24小时内回复',
    bilingualSupport: '支持中英文',
    workHoursReply: '工作时间实时回复',
    voiceSupport: '支持语音通话',
    vipService: '大客户专享',
    freePlan: '免费方案设计',

    // 快速响应承诺
    quickResponseTitle: '快速响应承诺',
    onlineResponse: '在线客服响应',
    onlineResponseDesc: '15分钟内快速响应',
    callbackConfirm: '电话回访确认',
    callbackConfirmDesc: '2小时内电话确认',
    professionalSolution: '专业方案提供',
    professionalSolutionDesc: '24小时内专业方案',

    // 表单相关
    messageConsult: '留言咨询',
    formDesc: '填写下方表单，我们将在24小时内与您取得联系',
    name: '姓名',
    namePlaceholder: '请输入您的姓名',
    phone: '电话',
    phonePlaceholder: '请输入您的电话号码',
    email: '邮箱',
    emailPlaceholder: '请输入您的邮箱地址',
    company: '公司名称',
    companyPlaceholder: '请输入您的公司名称',
    businessType: '业务类型',
    monthlyVolume: '预计月发货量',
    serviceNeeds: '服务需求',
    serviceNeedsDesc: '可多选',
    message: '详细需求',
    messagePlaceholder: '请详细描述您的物流需求和期望...',
    preferredContact: '首选联系方式',
    submitBtn: '提交咨询',

    // 表单选项
    selectBusinessType: '请选择业务类型',
    selectVolume: '请选择发货量',
    ecommerce: '跨境电商',
    manufacturing: '制造业',
    retail: '零售业',
    healthcare: '医疗健康',
    automotive: '汽车配件',
    electronics: '电子产品',
    other: '其他',
    small: '100包裹以下',
    medium: '100-1000包裹',
    large: '1000-5000包裹',
    enterprise: '5000包裹以上',

    // 联系方式偏好
    phoneMethod: '电话',
    emailMethod: '邮件',
    wechatMethod: '微信',
    visitMethod: '上门拜访',

    // 隐私政策
    privacyPolicy: '我已阅读并同意',
    privacyPolicyLink: '隐私政策',

    // 办公地址
    officeAddress: '办公地址',
    officeAddressDesc: '我们的办公地址信息，欢迎您前来洽谈合作',
    headquarters: '办公地址',
    chicago: '芝加哥',
    newYork: '纽约',
    dallas: '达拉斯',
    china: '中国',
    interactiveMap: '交互式地图',
    clickForDetails: '点击查看详细信息',

    // FAQ
    faqTitle: '常见问题',
    faqDesc: '为您解答物流服务中的常见疑问',
    viewMoreFaq: '查看更多FAQ',

    // CTA
    readyToStart: '准备开始合作？',
    readyToStartDesc: '立即联系我们，获取专属物流解决方案',

    // FAQ
    faq1Question: '你们的服务覆盖哪些地区？',
    faq1Answer:
      '我们的服务网络覆盖美国全境，在洛杉矶、芝加哥、纽约、达拉斯设有配送中心，同时在中国深圳设有办事处，为跨境贸易提供端到端服务。',
    faq2Question: '如何计算物流费用？',
    faq2Answer:
      '物流费用根据货物重量、体积、运输距离、服务类型等因素综合计算。我们提供透明的定价体系，无隐藏费用，可根据您的具体需求提供个性化报价。',
    faq3Question: '货物运输过程中的安全如何保障？',
    faq3Answer:
      '我们拥有完善的货物保护体系，包括专业包装、实时跟踪、保险覆盖、温控运输等。所有仓库均配备先进的安防系统，确保货物安全。',
    faq4Question: '可以实时跟踪货物状态吗？',
    faq4Answer:
      '是的，我们提供24/7实时跟踪服务。您可以通过我们的在线平台或APP随时查看货物位置、运输状态和预计到达时间。',
    faq5Question: '支持哪些付款方式？',
    faq5Answer:
      '我们支持多种付款方式，包括银行转账、信用卡、PayPal、支付宝等。大客户还可以申请账期服务，享受更灵活的付款条件。',
    faq6Question: '如何处理货物损坏或丢失？',
    faq6Answer:
      '我们为所有货物提供保险保障。如发生损坏或丢失，我们会在24小时内启动理赔程序，并提供相应的赔偿或补发服务。',

    // 表单验证错误
    phoneValidationError: '请输入有效的电话号码',
    emailValidationError: '请输入有效的邮箱地址',
    submitSuccess: '提交成功！我们将在24小时内与您联系。',
    submitError: '提交失败，请稍后重试。',
  },
  en: {
    // 页面基本信息 - 专业商务表达
    pageTitle: 'Contact Us',
    pageDescription:
      'Our professional team is ready to serve you with multiple contact options available.',

    // 联系方式概览 - 简洁有力
    contactWaysTitle: 'Multiple Ways to Reach Us',
    contactWaysDesc:
      'Professional team with 20+ years of industry experience, providing 24/7 premium logistics service support',

    // 联系方式卡片 - 自然表达
    phoneConsult: 'Phone Consultation',
    phoneDesc: 'Professional customer service available',
    emailSupport: 'Email Support',
    emailDesc: 'Preferred method for detailed inquiries',
    onlineService: 'Live Chat',
    onlineDesc: 'Instant response to your questions',
    visitService: 'On-Site Visit',
    visitDesc: 'Face-to-face in-depth communication',

    // 工作时间 - 美国商务习惯
    workdays: 'Weekdays: 8:00 AM - 6:00 PM',
    weekends: 'Weekends: 9:00 AM - 5:00 PM',
    replyTime: 'Reply within 24 hours',
    bilingualSupport: 'English & Chinese support',
    workHoursReply: 'Real-time reply during business hours',
    voiceSupport: 'Voice call support available',
    vipService: 'Exclusive for enterprise clients',
    freePlan: 'Free solution design',

    // 快速响应承诺
    quickResponseTitle: 'Quick Response Guarantee',
    onlineResponse: 'Live chat response',
    onlineResponseDesc: 'Quick response within 15 minutes',
    callbackConfirm: 'Phone callback confirmation',
    callbackConfirmDesc: 'Phone confirmation within 2 hours',
    professionalSolution: 'Professional solution delivery',
    professionalSolutionDesc: 'Professional solution within 24 hours',

    // 表单相关 - 简洁明了
    messageConsult: 'Send Us a Message',
    formDesc: 'Fill out the form below and we will contact you within 24 hours',
    name: 'Name',
    namePlaceholder: 'Enter your name',
    phone: 'Phone',
    phonePlaceholder: 'Enter your phone number',
    email: 'Email',
    emailPlaceholder: 'Enter your email address',
    company: 'Company',
    companyPlaceholder: 'Enter your company name',
    businessType: 'Business Type',
    monthlyVolume: 'Monthly Shipping Volume',
    serviceNeeds: 'Service Requirements',
    serviceNeedsDesc: 'Multiple selections allowed',
    message: 'Detailed Requirements',
    messagePlaceholder: 'Please describe your logistics needs and expectations in detail...',
    preferredContact: 'Preferred Contact Method',
    submitBtn: 'Submit Inquiry',

    // 表单选项 - 标准英文
    selectBusinessType: 'Select business type',
    selectVolume: 'Select shipping volume',
    ecommerce: 'Cross-border E-commerce',
    manufacturing: 'Manufacturing',
    retail: 'Retail',
    healthcare: 'Healthcare',
    automotive: 'Automotive Parts',
    electronics: 'Electronics',
    other: 'Other',
    small: 'Under 100 packages',
    medium: '100-1,000 packages',
    large: '1,000-5,000 packages',
    enterprise: 'Over 5,000 packages',

    // 联系方式偏好
    phoneMethod: 'Phone',
    emailMethod: 'Email',
    wechatMethod: 'WeChat',
    visitMethod: 'On-site Visit',

    // 隐私政策
    privacyPolicy: 'I have read and agree to the',
    privacyPolicyLink: 'Privacy Policy',

    // 办公地址
    officeAddress: 'Office Address',
    officeAddressDesc: 'Our office location information, welcome to visit for business discussions',
    headquarters: 'Office Address',
    chicago: 'Chicago',
    newYork: 'New York',
    dallas: 'Dallas',
    china: 'China',
    interactiveMap: 'Interactive Map',
    clickForDetails: 'Click for details',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqDesc: 'Answers to common questions about our logistics services',
    viewMoreFaq: 'View More FAQ',

    // CTA
    readyToStart: 'Ready to Get Started?',
    readyToStartDesc: 'Contact us today for your customized logistics solution',

    // FAQ - 地道英文表达
    faq1Question: 'What regions do you serve?',
    faq1Answer:
      'Our service network covers the entire United States with distribution centers in Los Angeles, Chicago, New York, and Dallas. We also have offices in Shenzhen, China, providing end-to-end services for cross-border trade.',
    faq2Question: 'How do you calculate logistics costs?',
    faq2Answer:
      'Logistics costs are calculated based on cargo weight, volume, transportation distance, and service types. We provide transparent pricing with no hidden fees and can offer personalized quotes based on your specific requirements.',
    faq3Question: 'How do you ensure cargo safety during transportation?',
    faq3Answer:
      'We have a comprehensive cargo protection system including professional packaging, real-time tracking, insurance coverage, and temperature-controlled transportation. All warehouses are equipped with advanced security systems to ensure cargo safety.',
    faq4Question: 'Can I track my shipment in real-time?',
    faq4Answer:
      'Yes, we provide 24/7 real-time tracking services. You can check cargo location, transportation status, and estimated arrival time through our online platform or mobile app anytime.',
    faq5Question: 'What payment methods do you accept?',
    faq5Answer:
      'We support multiple payment methods including bank transfers, credit cards, PayPal, and Alipay. Large customers can also apply for credit terms for more flexible payment conditions.',
    faq6Question: 'How do you handle damaged or lost cargo?',
    faq6Answer:
      'We provide insurance coverage for all cargo. In case of damage or loss, we will initiate the claims process within 24 hours and provide appropriate compensation or replacement services.',

    // 表单验证错误
    phoneValidationError: 'Please enter a valid phone number',
    emailValidationError: 'Please enter a valid email address',
    submitSuccess: 'Submitted successfully! We will contact you within 24 hours.',
    submitError: 'Submission failed. Please try again later.',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 表单数据
const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  businessType: '',
  monthlyVolume: '',
  services: [] as string[],
  message: '',
  preferredContact: 'phone' as string,
})

// 表单验证错误
const errors = reactive({
  name: false as boolean | string,
  phone: false as boolean | string,
  email: false as boolean | string,
})

// 实时验证字段
const validateField = (field: keyof typeof errors) => {
  switch (field) {
    case 'name':
      errors.name = form.name.trim() ? false : errors.name
      break
    case 'phone':
      if (form.phone.trim()) {
        if (!/^[+]?[\d\s\-()]+$/.test(form.phone)) {
          errors.phone = getText('phoneValidationError')
        } else {
          errors.phone = false
        }
      }
      break
    case 'email':
      if (form.email.trim()) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
          errors.email = getText('emailValidationError')
        } else {
          errors.email = false
        }
      }
      break
  }
}

// 监听表单字段变化并实时验证
watch(() => form.name, () => validateField('name'))
watch(() => form.phone, () => validateField('phone'))
watch(() => form.email, () => validateField('email'))

// 提交状态
const isSubmitting = ref(false)

// 服务选项 - 响应式翻译
const services = computed(() => [
  {
    value: 'warehousing',
    label: locale.value === 'zh' ? '海外仓储' : 'Overseas Warehousing',
  },
  {
    value: 'shipping',
    label: locale.value === 'zh' ? '国际运输' : 'International Shipping',
  },
  {
    value: 'customs',
    label: locale.value === 'zh' ? '清关服务' : 'Customs Clearance',
  },
  {
    value: 'delivery',
    label: locale.value === 'zh' ? '本土配送' : 'Local Delivery',
  },
  {
    value: 'fulfillment',
    label: locale.value === 'zh' ? '订单履行' : 'Order Fulfillment',
  },
  {
    value: 'reverse',
    label: locale.value === 'zh' ? '逆向物流' : 'Reverse Logistics',
  },
])

// 联系方式偏好 - 响应式翻译
const contactMethods = computed(() => [
  { value: 'phone', label: getText('phoneMethod') },
  { value: 'email', label: getText('emailMethod') },
  { value: 'wechat', label: getText('wechatMethod') },
  { value: 'visit', label: getText('visitMethod') },
])

// FAQ数据 - 响应式翻译
const faqs = computed(() => [
  {
    id: '1',
    question: getText('faq1Question'),
    answer: getText('faq1Answer'),
  },
  {
    id: '2',
    question: getText('faq2Question'),
    answer: getText('faq2Answer'),
  },
  {
    id: '3',
    question: getText('faq3Question'),
    answer: getText('faq3Answer'),
  },
  {
    id: '4',
    question: getText('faq4Question'),
    answer: getText('faq4Answer'),
  },
  {
    id: '5',
    question: getText('faq5Question'),
    answer: getText('faq5Answer'),
  },
  {
    id: '6',
    question: getText('faq6Question'),
    answer: getText('faq6Answer'),
  },
])

// 表单验证
const validateForm = () => {
  let isValid = true

  // 重置错误
  Object.keys(errors).forEach((key) => {
    ;(errors as any)[key] = false
  })

  if (!form.name.trim()) {
    errors.name = getText('name') + ' ' + '为必填项'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = getText('phone') + ' ' + '为必填项'
    isValid = false
  } else if (!/^[+]?[\d\s\-()]+$/.test(form.phone)) {
    errors.phone = getText('phoneValidationError')
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = getText('email') + ' ' + '为必填项'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = getText('emailValidationError')
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
    alert(getText('submitSuccess'))

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
    alert(getText('submitError'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* 组件特定样式 */
</style>
