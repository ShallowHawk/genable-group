<template>
  <PageLayout
    page-title="头程物流"
    page-description="专业的国际货运服务，从揽收到目的地清关的全流程管理。我们提供一站式头程物流解决方案，将所有复杂环节交给我们，让您专注于核心业务。"
    :custom-breadcrumbs="[
      { label: '服务体系', href: '/services' },
      { label: '头程物流', href: '/services/first-leg-logistics' },
    ]"
  >
    <!-- Hero区域 -->
    <PageHero
      title="化繁为简，掌控您的国际头程物流"
      subtitle="专业的国际货运服务，从揽收到目的地清关的全流程管理。我们提供一站式头程物流解决方案，将所有复杂环节交给我们，让您专注于核心业务。"
      image-url="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
      label="头程物流专家"
    >
      <template #actions>
        <router-link to="/contact">
          <BaseButton
            variant="primary"
            size="lg"
            class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
          >
            获取头程报价
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

    <!-- 头程物流的核心挑战 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">头程物流的核心挑战</h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            从海外发货到抵达美国，头程物流充满了不确定性。高昂的运输成本、复杂的清关流程、不可控的延误风险，以及与多方供应商沟通的低效率，都是您在扩大业务时面临的现实挑战。
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 左侧视觉化图形 -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="国际货运物流挑战"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- 右侧挑战点列表 -->
          <div>
            <ul class="space-y-8">
              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-red-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">成本失控</h3>
                  <p class="text-gray-600">
                    难以获得有竞争力的运费，燃油、旺季等附加费不透明，预算难以控制。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-orange-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">清关风险</h3>
                  <p class="text-gray-600">
                    不熟悉美国海关法规，文件错漏导致货物被扣、产生高额罚款。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-yellow-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">时效不定</h3>
                  <p class="text-gray-600">
                    船期或航班延误，无法准确预估到货时间，影响后续销售计划。
                  </p>
                </div>
              </li>

              <li class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <span class="text-purple-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">沟通壁垒</h3>
                  <p class="text-gray-600">
                    需要同时与工厂、货代、报关行、船公司等多方沟通，耗费大量精力。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    <!-- 可耐博达的一站式解决方案 -->
    <Section background="gray">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            可耐博达Kenable的一站式解决方案
          </h2>
          <p class="text-xl text-gray-600">
            可耐博达（广州）供应链管理有限公司深刻理解您的痛点。我们提供一站式头程物流解决方案，将所有复杂环节交给我们，让您专注于核心业务。
          </p>
        </div>

        <div class="space-y-16">
          <!-- 提货与订舱 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">提货与订舱</h3>
              <p class="text-gray-600 mb-6">
                我们负责从您的指定工厂提货，并利用我们的行业网络，为您预定包括美森快船在内的最优航线和舱位。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  专业上门提货服务
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  美森快船优先舱位
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  最优航线规划
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop&crop=center"
                alt="集装箱货船在海上航行"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 专业出口与清关 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=400&fit=crop&crop=center"
                alt="海关检查货物"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">专业出口与清关</h3>
              <p class="text-gray-600 mb-6">
                我们的专家团队在起运地和目的地处理所有报关文件，凭借丰富的经验处理高价值或特殊品的复杂清关，确保全程合规。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  专业报关文件处理
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  高价值特殊品清关
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  全程合规保障
                </li>
              </ul>
            </div>
          </div>

          <!-- 全程追踪与管理 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-6">全程追踪与管理</h3>
              <p class="text-gray-600 mb-6">
                我们提供端到端的货物追踪系统，让您随时掌握从提货到交付的每一个动态。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  实时货物追踪
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  端到端可视化
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  智能预警提醒
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
                alt="物流管理系统界面"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <!-- 多国多式联运 -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
                alt="多式联运示意图"
                class="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">多国多式联运</h3>
              <p class="text-gray-600 mb-6">
                整合海运与空运，无缝管理您从中国、越南、泰国等多个产地的出口需求。
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  多国产地覆盖
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  海空联运整合
                </li>
                <li class="flex items-center text-gray-700">
                  <div class="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  灵活运输方案
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- 为您带来的价值 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">选择我们，您将立即获得</h2>
          <p class="text-xl text-gray-600">
            选择可耐博达Kenable，意味着您选择了一个能创造切实商业价值的合作伙伴。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 价值卡片 1 -->
          <div
            class="value-card bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group"
          >
            <div class="flex items-start space-x-6">
              <div class="highlight-element flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  01
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors"
                >
                  显著降低成本
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  通过优化物流路径和批量议价能力，有效控制您的运输成本，让每一分投入都产生最大价值。
                </p>
              </div>
            </div>
          </div>

          <!-- 价值卡片 2 -->
          <div
            class="value-card bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group"
          >
            <div class="flex items-start space-x-6">
              <div class="highlight-element flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  02
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                >
                  全面规避风险
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  专业的合规操作和清关知识，最大程度降低您的货物在海关遇到的风险，确保安全抵达。
                </p>
              </div>
            </div>
          </div>

          <!-- 价值卡片 3 -->
          <div
            class="value-card bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group"
          >
            <div class="flex items-start space-x-6">
              <div class="highlight-element flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  03
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                >
                  大幅提升效率
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  一站式服务简化了您的沟通流程，稳定可靠的运输时效保障了您的库存周转率。
                </p>
              </div>
            </div>
          </div>

          <!-- 价值卡片 4 -->
          <div
            class="value-card bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group"
          >
            <div class="flex items-start space-x-6">
              <div class="highlight-element flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                >
                  04
                </div>
              </div>
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors"
                >
                  增强业务焦点
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  将繁琐的物流事务外包给我们，让您能将宝贵的精力投入到产品、市场和客户服务中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择专业头程物流服务，开启成功之旅"
      subtitle="一站式解决方案，让您的货物安全、快速抵达美国"
      primary-button-text="获取头程报价"
      primary-button-href="/contact"
      secondary-button-text="下载服务手册"
      secondary-button-href="#"
      secondary-button-icon="download"
      :show-contact-info="true"
    />
  </PageLayout>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import PageHero from '@/components/ui/PageHero.vue'
import Section from '@/components/ui/Section.vue'
import CtaSection from '@/components/ui/CtaSection.vue'
</script>
