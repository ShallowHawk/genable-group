<template>
  <div class="air-freight-page">
    <!-- Hero区域 -->
    <PageHero
      title="快速高效的全球空运服务"
      subtitle="依托强大的全球航空网络和专业团队，肯纳布尔为您提供快速、安全、可靠的空运解决方案。我们整合多国出口资源，通过门到门、机场到门等灵活服务模式，确保您的货物以最快速度到达目的地。"
      image-url="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=400&fit=crop&crop=center"
      label="全球航空货运专家"
    >
      <template #actions>
        <BaseButton
          variant="primary"
          size="lg"
          class="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-all"
        >
          获取空运报价
        </BaseButton>
        <BaseButton
          variant="outline"
          size="lg"
          class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 transition-all"
        >
          在线咨询
        </BaseButton>
      </template>
    </PageHero>

    <!-- 我们的空运服务 -->
    <Section background="white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center"
              alt="员工在工作台上为产品进行贴标或重新包装"
              class="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <!-- 左侧内容 -->
          <div class="order-1 lg:order-1">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">我们的空运服务</h2>

            <div class="space-y-6">
              <!-- 全球空运网络 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">全球空运网络</h3>
                  <p class="text-gray-600">
                    整合全球资源，管理多国出口。我们依据您的需求整合各地供货商，再装拆分销中心或店家，降低整体运输成本，提高经济效益。
                  </p>
                </div>
              </div>

              <!-- 门到门服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">门到门服务</h3>
                  <p class="text-gray-600">
                    一站式提货、报关、运输、派送。我们灵活运用超库作业帮您争取应供应商突发交货如生产、船期延误、塞港及海关检验所损失的宝贵时间，协助您推进货物配送决策以取得更充裕的时间收集市场动态，增加决策精准度。
                  </p>
                </div>
              </div>

              <!-- 机场到门服务 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">机场到门服务</h3>
                  <p class="text-gray-600">
                    货物落地后，利用自有卡车网络快速转运。针对超大尺寸（OOG-Out of
                    Gauge）及复杂的货物，我们的项目团队为您订制解决方案与详细计划，协调海运所有细节。
                  </p>
                </div>
              </div>

              <!-- 加急与优先处理 -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <div class="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">加急与优先处理</h3>
                  <p class="text-gray-600">
                    为高时效性货物提供优先保障。我们专业的信息团队为您高效处理系统对接。<a
                      href="#"
                      class="text-cyan-600 hover:text-cyan-800 font-medium"
                      >与我们的系统串联。</a
                    >
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
              为什么选择肯纳布尔的空运服务？
            </h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">多国出口网络</h3>
                  <p class="text-gray-600">
                    覆盖中国、泰国、越南等多个出口国，为您提供最灵活的供应链选择。
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">快速时效</h3>
                  <p class="text-gray-600">
                    与主要航空公司建立稳定合作关系，确保货物快速、准时到达。
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">地面运输整合</h3>
                  <p class="text-gray-600">货物落地后即刻由自有卡车网络接管，实现无缝空陆联运。</p>
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
                  <h3 class="text-xl font-bold text-gray-900 mb-2">专业服务团队</h3>
                  <p class="text-gray-600">
                    拥有丰富经验的专业团队，提供24/7跟踪服务和问题解决方案。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧图片 -->
          <div class="order-2 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop&crop=center"
              alt="机场货运站，工作人员正在用叉车转运航空集装板"
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
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">肯纳布尔在行动</h2>
              <h3 class="text-xl text-blue-600 font-semibold mb-6">
                助力北美亿级家居品牌Cushion Lab，构建多渠道、跨国一体化供应链
              </h3>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">挑战与解决方案</h4>
                <p class="text-gray-600 mb-4">
                  <strong>挑战：</strong
                  >如何高效整合来自中国、越南、泰国的多源头货运，并精准供给Amazon、TikTok、独立站等多个线上渠道？
                </p>
                <p class="text-gray-600">
                  <strong>解决方案：</strong
                  >通过海空联运的头程物流，及美国多仓联动的仓配网络，实现灵活履约。
                </p>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl">
                <h4 class="text-lg font-bold text-gray-900 mb-3">成效：</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    全美平均配送时效缩短至2-5天
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    大幅提升客户满意度
                  </li>
                  <li class="flex items-center text-gray-700">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    成功支撑年销售额超1亿美元的多平台运营
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 右侧图片组合 -->
          <div class="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&h=250&fit=crop&crop=center"
              alt="肯纳布尔仓库内码放整齐的枕头类产品"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=250&fit=crop&crop=center"
              alt="员工扫描包裹准备发货"
              class="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>

    <!-- CTA区域 -->
    <CtaSection
      title="选择快速空运服务，抢占市场先机"
      subtitle="专业的空运解决方案，让您的货物以最快速度到达目的地"
      primary-button-text="获取空运报价"
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
import CtaSection from '@/components/ui/CtaSection.vue'
</script>
