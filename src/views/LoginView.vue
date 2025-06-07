<template>
  <PageLayout
    page-title="客户登录"
    page-description="客户专属登录入口，管理您的物流订单和账户信息。"
  >
    <!-- 登录区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-md mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">客户登录</h2>
            <p class="text-gray-600">登录您的账户，管理订单和查看报告</p>
          </div>

          <BaseCard variant="elevated">
            <form @submit.prevent="handleLogin" class="space-y-6">
              <BaseInput
                v-model="form.email"
                label="邮箱地址"
                type="email"
                placeholder="请输入您的邮箱地址"
                :error="errors.email"
                :required="true"
              />

              <BaseInput
                v-model="form.password"
                label="密码"
                type="password"
                placeholder="请输入您的密码"
                :error="errors.password"
                :required="true"
              />

              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input
                    v-model="form.rememberMe"
                    type="checkbox"
                    class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span class="ml-2 text-sm text-gray-700">记住我</span>
                </label>
                <a href="#" class="text-sm text-primary-600 hover:text-primary-700"> 忘记密码？ </a>
              </div>

              <BaseButton
                type="submit"
                size="lg"
                class="w-full"
                :loading="isLoading"
                :disabled="!form.email || !form.password"
              >
                {{ isLoading ? '登录中...' : '登录' }}
              </BaseButton>
            </form>

            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                还不是客户？
                <a href="#" class="font-medium text-primary-600 hover:text-primary-700">
                  申请开户
                </a>
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- 登录帮助 -->
        <div class="max-w-4xl mx-auto mt-16">
          <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">需要帮助？</h3>
            <p class="text-gray-600">常见登录问题和解决方法</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BaseCard variant="outlined" class="text-center">
              <Icon name="key" size="2xl" class="text-primary-500 mx-auto mb-4" />
              <h4 class="text-lg font-semibold text-gray-900 mb-2">忘记密码</h4>
              <p class="text-gray-600 mb-4">点击"忘记密码"链接，我们将发送重置邮件到您的邮箱</p>
              <BaseButton variant="outline" size="sm"> 重置密码 </BaseButton>
            </BaseCard>

            <BaseCard variant="outlined" class="text-center">
              <Icon name="user-plus" size="2xl" class="text-primary-500 mx-auto mb-4" />
              <h4 class="text-lg font-semibold text-gray-900 mb-2">申请开户</h4>
              <p class="text-gray-600 mb-4">新客户可以在线申请开户，享受专业物流服务</p>
              <BaseButton variant="outline" size="sm"> 申请开户 </BaseButton>
            </BaseCard>

            <BaseCard variant="outlined" class="text-center">
              <Icon name="phone" size="2xl" class="text-primary-500 mx-auto mb-4" />
              <h4 class="text-lg font-semibold text-gray-900 mb-2">联系客服</h4>
              <p class="text-gray-600 mb-4">遇到登录问题？我们的客服团队随时为您提供帮助</p>
              <BaseButton variant="outline" size="sm"> 联系客服 </BaseButton>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户门户功能介绍 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">客户门户功能</h2>
          <p class="text-xl text-gray-600">登录后即可享受的便捷服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="package" size="xl" class="text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">订单管理</h3>
            <p class="text-gray-600">实时查看订单状态，管理发货信息，跟踪包裹动态</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="credit-card" size="xl" class="text-accent-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">账单查询</h3>
            <p class="text-gray-600">查看历史账单，下载发票，在线支付物流费用</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="bar-chart-3" size="xl" class="text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">数据报告</h3>
            <p class="text-gray-600">详细的物流数据分析报告，帮助优化供应链</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="settings" size="xl" class="text-green-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">账户设置</h3>
            <p class="text-gray-600">管理个人信息，设置通知偏好，修改联系方式</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="headphones" size="xl" class="text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">在线客服</h3>
            <p class="text-gray-600">专属客服通道，优先处理您的问题和需求</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="file-text" size="xl" class="text-indigo-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">文档下载</h3>
            <p class="text-gray-600">下载运单、合同、证书等重要文档</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 安全保障 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">安全保障</h2>
          <p class="text-xl text-gray-600">多重安全措施，保护您的账户和数据安全</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="shield-check" size="xl" class="text-green-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">SSL加密</h3>
            <p class="text-gray-600">全站SSL加密传输，保护数据安全</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="lock" size="xl" class="text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">双重验证</h3>
            <p class="text-gray-600">支持短信和邮箱双重验证</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="eye-off" size="xl" class="text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">隐私保护</h3>
            <p class="text-gray-600">严格的隐私政策，数据不外泄</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="clock" size="xl" class="text-orange-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">定期备份</h3>
            <p class="text-gray-600">数据定期备份，永不丢失</p>
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

// 表单数据
const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
})

// 表单错误
const errors = reactive({
  email: '',
  password: '',
})

// 登录状态
const isLoading = ref(false)

// 表单验证
const validateForm = () => {
  let isValid = true

  // 重置错误
  errors.email = ''
  errors.password = ''

  if (!form.email.trim()) {
    errors.email = '请输入邮箱地址'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    isValid = false
  }

  if (!form.password.trim()) {
    errors.password = '请输入密码'
    isValid = false
  } else if (form.password.length < 6) {
    errors.password = '密码长度至少6位'
    isValid = false
  }

  return isValid
}

// 处理登录
const handleLogin = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 登录成功后的处理
    alert('登录成功！')

    // 这里可以跳转到客户门户页面
    // this.$router.push('/dashboard')
  } catch (error) {
    alert('登录失败，请检查邮箱和密码')
  } finally {
    isLoading.value = false
  }
}
</script>
