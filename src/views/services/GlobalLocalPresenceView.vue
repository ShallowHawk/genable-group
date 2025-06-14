<template>
  <div class="global-local-presence-page">
    <!-- Hero区域 -->
    <PageHero
      title="全球网络，本地服务"
      subtitle="可耐博达在中国、越南、印尼设立本地团队，扎根供应链源头。提供专业的产地报关、本地运输与无时差客户服务，以本地智慧赋能您的全球供应链，扫除沟通与执行障碍。"
      image-url="https://plus.unsplash.com/premium_photo-1664298313394-cdfdff0300a9?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      label="源头服务，全球通达"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            获取本地服务
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton
            variant="outline"
            size="lg"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
          >
            在线咨询
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
              alt="全球化当地布局"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 右侧内容 -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">我们的本地化服务</h2>

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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">源头驻点，专业团队</h3>
                  <p class="text-gray-600">
                    在中国大陆、越南、印度尼西亚设立实体办公室与专业物流团队，深入产地，提供在地化支持。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">源头报关，合规护航</h3>
                  <p class="text-gray-600">
                    本地团队精通各国出口法规，提供专业报关、原产地证办理及合规咨询，从源头规避风险。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">无时差客服，沟通无忧</h3>
                  <p class="text-gray-600">
                    提供与您同语言、同时间的本地化客户服务，紧密跟进订单，快速响应需求。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">本地物流，全程掌控</h3>
                  <p class="text-gray-600">
                    提供从工厂提货（EXW）、内陆运输、仓储集货到港口/机场操作的全套本地物流解决方案。
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
      title="为什么选择可耐博达本地服务？"
      image-url="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      image-alt="全球网络地图"
      :reverse="true"
      background-color="gray"
      :features="whyUsFeatures"
    />

    <!-- 应用案例 -->
    <CaseStudyModule_Documentary
      project-name="亚洲本地团队高效管理Cushion Lab多国供应商复杂出口"
      challenge="供应商遍布中、越数十城市，如何统一协调交货、集货、报关？"
      solution="可耐博达中、越团队作为其'亚洲虚拟物流中心'，主动协调供应商交期，统一处理出口文件，本地集货拼箱。"
      results="沟通效率提升70% (由对接数十家供应商简化为对接可耐博达团队)。通过源头集货优化，头程运费降低约10%。"
      :images="caseStudyImages"
      background-color="white"
    />

    <!-- CTA区域 -->
    <CtaSection
      title="选择全球化当地布局，提升供应链效率"
      subtitle="本地化团队为您提供专业的源头服务，让全球供应链管理更简单"
      primary-button-text="获取本地服务"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import WhyUsModule from '@/components/sections/WhyUsModule.vue'
import CaseStudyModule_Documentary from '@/components/sections/CaseStudyModule_Documentary.vue'
import CtaSection from '@/components/ui/CtaSection.vue'

// 为什么选择我们的特性
const whyUsFeatures = [
  {
    icon: 'message-circle',
    title: '沟通零障碍',
    description: '本地团队使用您的语言，确保指令精准传达与执行。',
  },
  {
    icon: 'eye',
    title: '政策先知者',
    description: '实时掌握当地政策动态，第一时间提供合规建议，预防延误与损失。',
  },
  {
    icon: 'shield',
    title: '源头品控，风险前置',
    description: '在工厂端介入，进行质量抽检、数量核对与装运监装，保障货物出厂安全合规。',
  },
  {
    icon: 'zap',
    title: '多产地协同，敏捷响应',
    description: '灵活支持您在多国的采购布局，高效协调不同产地的发货、集货与出口流程。',
  },
]

// 案例研究图片
const caseStudyImages = [
  {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&crop=center',
    alt: '亚洲团队沟通',
    caption: '可耐博达亚洲团队与客户协调供应商管理',
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
    alt: '亚洲地图集货',
    caption: '覆盖中国、越南、印尼的本地化服务网络',
  },
]
</script>
