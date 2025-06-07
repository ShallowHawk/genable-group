<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '@/components/ui/BaseButton.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

// 发展历程数据
const timelineEvents = [
  {
    year: '2005',
    title: '奠定基石',
    description: '在洛杉矶亚速萨成立，启动仓储和卡车运输服务',
    details:
      'KENABLE GROUP在洛杉矶亚速萨正式成立，标志着我们在美国物流行业的征程开始。初期专注于本地仓储服务和卡车运输业务，为日后的全国性扩张奠定了坚实基础。',
  },
  {
    year: '2008-09',
    title: '初具规模',
    description: '在洛杉矶收购首个自有仓库，车队规模增至15辆卡车',
    details:
      '通过收购洛杉矶地区的首个自有仓库，我们实现了从租赁到自营的重要转变。同时，卡车车队规模扩展至15辆，服务能力和覆盖范围显著提升。',
  },
  {
    year: '2013-16',
    title: '全国布局',
    description: '建立全国物流网，收购佐治亚州和印第安纳州仓库，总面积超15,000平方米',
    details:
      '这一阶段是公司发展的重要里程碑，我们成功建立了跨越东西海岸的全国物流网络。通过战略性收购佐治亚州和印第安纳州的仓库设施，总仓储面积突破15,000平方米，为客户提供更加高效的全国分销服务。',
  },
  {
    year: '2017-20',
    title: '服务升级',
    description: '升级系统与设施，并正式启动亚马逊FBA头程服务',
    details:
      '投入大量资源对IT系统和仓储设施进行全面升级，提升作业效率和服务质量。同时正式推出亚马逊FBA头程服务，为跨境电商客户提供专业的一站式解决方案。',
  },
  {
    year: '2021-22',
    title: '链条延伸',
    description: '启动国际头程物流，与USPS、UPS达成官方合作，并扩展德州业务',
    details:
      '服务链条向国际头程延伸，实现了从中国到美国的全链路服务覆盖。与USPS、UPS等知名物流公司建立官方合作关系，进一步扩展德州业务版图，服务网络更加完善。',
  },
  {
    year: '2023',
    title: '全面整合',
    description: '聚焦海外仓储与全链条服务的深度整合与平台化发展',
    details:
      '进入新的发展阶段，专注于海外仓储与全链条服务的深度整合。通过平台化发展战略，为客户提供更加智能化、标准化的供应链管理服务，持续引领行业创新。',
  },
]

// 合作伙伴和认证
const partnerships = [
  { name: 'UPS', description: 'UPS Ready® Premier Partner 2023' },
  { name: 'USPS', description: '美国邮政官方合作伙伴' },
  { name: 'Amazon', description: '亚马逊FBA官方服务商' },
]

// 初始化滚动动画
const initScrollAnimations = () => {
  // 发展历程动画 - 简洁效果
  gsap.fromTo(
    '.history-item',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 创始人区域动画
  gsap.fromTo(
    '.founder-content',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.founder-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 认证合作区域动画
  gsap.fromTo(
    '.partnership-item',
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partnerships-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )
}

onMounted(() => {
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <PageLayout
    page-title="关于我们"
    page-description="KENABLE GROUP 是一家领先的端到端供应链服务企业，致力于为全球客户提供高效、可靠的美国市场准入解决方案。凭借近22年的行业深耕和遍布全美的自营仓储与物流网络，我们提供从国际头程运输、美国仓储、本土派送到订单履行的无缝服务。"
  >
    <!-- 公司使命与愿景 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            连接全球商业，驱动美国市场
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed mb-8">
            作为您值得信赖的供应链管理合作伙伴，我们通过高效的流程和卓越的声誉，
            帮助客户简化物流、优化成本，在美国市场不断取得成功。
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              近22年行业深耕
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
            >
              全美自营仓储网络
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              端到端供应链服务
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
            >
              卓越服务声誉
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="py-16 lg:py-24 bg-gray-50 history-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">发展历程</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              近20年的稳健发展，见证我们从本土仓储服务商成长为全美领先的供应链管理企业
            </p>
          </div>

          <!-- 发展历程列表 -->
          <div class="space-y-16">
            <div v-for="(event, index) in timelineEvents" :key="index" class="history-item">
              <div
                :class="[
                  'flex flex-col gap-8',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
                ]"
              >
                <!-- 图片区域 -->
                <div class="lg:w-1/3">
                  <div class="relative">
                    <!-- 占位图片区域，可以后续替换为真实图片 -->
                    <div
                      class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden shadow-lg"
                    >
                      <div class="flex items-center justify-center">
                        <div class="text-center p-6">
                          <div class="text-4xl text-blue-600 mb-4">
                            <!-- 根据不同阶段显示不同图标 -->
                            <template v-if="event.year === '2005'">🏢</template>
                            <template v-else-if="event.year === '2008-09'">🏭</template>
                            <template v-else-if="event.year === '2013-16'">🗺️</template>
                            <template v-else-if="event.year === '2017-20'">⚡</template>
                            <template v-else-if="event.year === '2021-22'">🌐</template>
                            <template v-else>🚀</template>
                          </div>
                          <div class="text-sm text-gray-500">{{ event.year }}</div>
                        </div>
                      </div>
                    </div>

                    <!-- 蓝色标签区域 -->
                    <div
                      class="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                      <div class="text-sm font-semibold">{{ event.year }}</div>
                    </div>
                  </div>
                </div>

                <!-- 内容区域 -->
                <div class="lg:w-2/3">
                  <div class="bg-white rounded-lg shadow-lg p-8 h-full">
                    <!-- 标题 -->
                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {{ event.title }}
                    </h3>

                    <!-- 描述 -->
                    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                      {{ event.description }}
                    </p>

                    <!-- 详细信息 -->
                    <p class="text-gray-700 leading-relaxed">
                      {{ event.details }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模块三：创始人和管理团队简介 -->
    <section class="py-16 lg:py-24 bg-white founder-section">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">领航者风采</h2>
          </div>

          <!-- 创始人介绍 -->
          <div class="founder-content">
            <div class="lg:flex lg:items-center lg:space-x-12">
              <!-- 创始人照片 -->
              <div class="lg:w-1/3 mb-8 lg:mb-0">
                <div class="relative">
                  <!-- 这里使用一个占位符，实际项目中可替换为真实照片 -->
                  <div
                    class="aspect-w-3 aspect-h-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg overflow-hidden shadow-xl"
                  >
                    <div class="flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-6xl text-blue-600 mb-4">👨‍💼</div>
                        <div class="text-sm text-gray-500">创始人演讲照片</div>
                      </div>
                    </div>
                  </div>

                  <!-- 装饰元素 -->
                  <div
                    class="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
                  ></div>
                  <div
                    class="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
                  ></div>
                </div>
              </div>

              <!-- 创始人信息 -->
              <div class="lg:w-2/3">
                <div class="space-y-6">
                  <!-- 姓名和职位 -->
                  <div>
                    <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      曾宇星 (Yuxing Zeng)
                    </h3>
                    <p class="text-xl text-blue-600 font-semibold mb-4">
                      KENABLE GROUP 创始人 & CEO
                    </p>
                  </div>

                  <!-- 介绍内容 -->
                  <div class="prose prose-lg max-w-none">
                    <p class="text-gray-700 leading-relaxed mb-6">
                      KENABLE集团的创始人曾宇星先生是北美物流领域的资深专家。作为北美卡车协会的重要代表，
                      曾先生曾于<span class="font-semibold text-blue-600"
                        >2017年5月受邀在美国交通部活动上发表主旨演讲</span
                      >， 并获得了时任交通部长赵小兰女士的亲切接见。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                      他的远见卓识和深厚行业影响力，是KENABLE不断发展的核心驱动力。在他的领导下，
                      公司从洛杉矶的一家本土仓储服务商，发展成为覆盖全美四州、服务全球客户的综合性供应链管理企业。
                    </p>
                  </div>

                  <!-- 核心成就标签 -->
                  <div class="flex flex-wrap gap-3 pt-4">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      北美卡车协会代表
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                    >
                      美国交通部演讲嘉宾
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      22年行业经验
                    </span>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                    >
                      行业影响力专家
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 核心管理团队预留区域 -->
            <div class="mt-16 pt-16 border-t border-gray-200">
              <h4 class="text-2xl font-bold text-gray-900 mb-8 text-center">核心管理团队</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- 预留的团队成员卡片 -->
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👨‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">运营总监</h5>
                  <p class="text-sm text-gray-600">即将公布</p>
                </div>
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👩‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">技术总监</h5>
                  <p class="text-sm text-gray-600">即将公布</p>
                </div>
                <div class="text-center opacity-60">
                  <div
                    class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span class="text-2xl">👨‍💼</span>
                  </div>
                  <h5 class="font-semibold text-gray-900 mb-1">业务总监</h5>
                  <p class="text-sm text-gray-600">即将公布</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 权威认证与合作 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 partnerships-section"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">权威认证与合作</h2>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">行业权威认证，实力合作伙伴</p>
          </div>

          <!-- 重要奖项突出展示 -->
          <div class="text-center mb-12 partnership-item">
            <div
              class="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30 mb-4"
            >
              <span class="text-2xl mr-3">🏆</span>
              <span class="text-yellow-300 font-semibold text-lg">
                荣获2023年UPS Ready® Premier Partner称号
              </span>
            </div>
            <p class="text-gray-300 text-sm">
              极具含金量的行业认可，彰显我们在物流服务领域的卓越表现
            </p>
          </div>

          <!-- 官方合作伙伴 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="partner in partnerships"
              :key="partner.name"
              class="text-center group partnership-item"
            >
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
                <!-- 合作伙伴Logo占位符 -->
                <div
                  class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center text-2xl group-hover:bg-white/30 transition-colors"
                >
                  📦
                </div>
                <h4 class="text-xl font-bold text-white mb-2">{{ partner.name }}</h4>
                <p class="text-gray-300 text-sm">{{ partner.description }}</p>
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

<style scoped>
/* 容器样式 */
.container {
  max-width: 1200px;
}

/* 创始人照片容器 */
.aspect-w-3 {
  position: relative;
  width: 100%;
  height: 400px;
}

.aspect-h-4 {
  height: 400px;
}

/* 发展历程图片容器 */
.aspect-w-4 {
  position: relative;
  width: 100%;
  height: 200px;
}

.aspect-h-3 {
  height: 200px;
}
</style>
