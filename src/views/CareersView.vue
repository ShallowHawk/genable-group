<template>
  <PageLayout page-title="招聘信息" page-description="加入KENABLE GROUP，开启精彩物流职业生涯。">
    <!-- 公司优势区域 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            为什么选择KENABLE GROUP？
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            20年行业经验的专业团队，提供有竞争力的薪酬待遇和广阔的发展空间
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="trending-up" size="xl" class="text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">快速发展</h3>
            <p class="text-gray-600">年增长率30%+，提供无限发展机会</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="dollar-sign" size="xl" class="text-accent-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">竞争薪酬</h3>
            <p class="text-gray-600">高于行业平均水平的薪资福利</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="users" size="xl" class="text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">专业团队</h3>
            <p class="text-gray-600">与行业专家共同成长学习</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="globe" size="xl" class="text-green-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">国际视野</h3>
            <p class="text-gray-600">跨境业务，拓展国际经验</p>
          </div>
        </div>

        <!-- 员工福利 -->
        <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">员工福利</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex items-start space-x-3">
              <Icon name="shield" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">完善保险</h4>
                <p class="text-gray-600">五险一金 + 商业医疗保险</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <Icon name="calendar" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">灵活假期</h4>
                <p class="text-gray-600">年假15天起 + 带薪病假</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <Icon name="book" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">培训发展</h4>
                <p class="text-gray-600">专业培训 + 学历提升支持</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <Icon name="gift" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">节日福利</h4>
                <p class="text-gray-600">节日礼品 + 生日祝福</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <Icon name="home" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">住房补贴</h4>
                <p class="text-gray-600">租房补贴 + 购房优惠贷款</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <Icon name="coffee" size="sm" class="text-primary-500 mt-1" />
              <div>
                <h4 class="font-semibold text-gray-900">办公环境</h4>
                <p class="text-gray-600">免费下午茶 + 健身房</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 招聘职位 -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">热招职位</h2>
          <p class="text-xl text-gray-600">寻找有志于物流行业发展的优秀人才</p>
        </div>

        <!-- 职位筛选 -->
        <div class="flex flex-wrap gap-4 justify-center mb-12">
          <button
            v-for="department in departments"
            :key="department.id"
            @click="selectedDepartment = department.id"
            :class="[
              'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200',
              selectedDepartment === department.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200',
            ]"
          >
            {{ department.name }}
          </button>
        </div>

        <!-- 职位列表 -->
        <div class="space-y-8">
          <div v-for="job in filteredJobs" :key="job.id">
            <BaseCard
              variant="outlined"
              hoverable
              class="cursor-pointer"
              @click="openJobDetail(job)"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <h3 class="text-xl font-semibold text-gray-900 mr-3">{{ job.title }}</h3>
                    <span
                      v-if="job.urgent"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                    >
                      急招
                    </span>
                  </div>

                  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div class="flex items-center">
                      <Icon name="map-pin" size="xs" class="mr-1" />
                      {{ job.location }}
                    </div>
                    <div class="flex items-center">
                      <Icon name="briefcase" size="xs" class="mr-1" />
                      {{ job.experience }}
                    </div>
                    <div class="flex items-center">
                      <Icon name="graduation-cap" size="xs" class="mr-1" />
                      {{ job.education }}
                    </div>
                    <div class="flex items-center">
                      <Icon name="clock" size="xs" class="mr-1" />
                      {{ job.type }}
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="text-lg font-semibold text-primary-600">{{ job.salary }}</div>
                    <div class="text-sm text-gray-500">发布时间: {{ job.publishDate }}</div>
                  </div>
                </div>

                <div class="ml-6 flex-shrink-0">
                  <BaseButton variant="outline" size="sm"> 查看详情 </BaseButton>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>

        <!-- 暂无职位 -->
        <div v-if="filteredJobs.length === 0" class="text-center py-16">
          <Icon name="search" size="4xl" class="text-gray-300 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">暂无相关职位</h3>
          <p class="text-gray-600">请尝试其他部门或关注我们的招聘动态</p>
        </div>
      </div>
    </section>

    <!-- 应聘流程 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">应聘流程</h2>
          <p class="text-xl text-gray-600">简单4步，开启您的职业新征程</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            >
              <Icon name="file-text" size="xl" class="text-primary-600" />
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                1
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">投递简历</h3>
            <p class="text-gray-600">在线投递简历或发送至邮箱</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            >
              <Icon name="phone" size="xl" class="text-primary-600" />
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                2
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">初步筛选</h3>
            <p class="text-gray-600">HR电话沟通，了解基本情况</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            >
              <Icon name="users" size="xl" class="text-primary-600" />
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                3
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">面试环节</h3>
            <p class="text-gray-600">技术面试 + 综合面试</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            >
              <Icon name="check-circle" size="xl" class="text-primary-600" />
              <div
                class="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                4
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">入职报到</h3>
            <p class="text-gray-600">签订合同，开始新的职业旅程</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 统一CTA区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import Icon from '@/components/ui/Icon.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

// 定义Job接口
interface Job {
  id: string
  title: string
  department: string
  location: string
  experience: string
  education: string
  type: string
  salary: string
  publishDate: string
  urgent: boolean
}

// 选中的部门
const selectedDepartment = ref('all')

// 部门分类
const departments = [
  { id: 'all', name: '全部' },
  { id: 'operations', name: '运营部' },
  { id: 'customer', name: '客服部' },
  { id: 'warehouse', name: '仓储部' },
  { id: 'tech', name: '技术部' },
  { id: 'finance', name: '财务部' },
  { id: 'hr', name: '人事部' },
]

// 职位数据
const jobs = [
  {
    id: '1',
    title: '高级物流专员',
    department: 'operations',
    location: '洛杉矶',
    experience: '3-5年',
    education: '本科',
    type: '全职',
    salary: '$60,000 - $80,000',
    publishDate: '2024-01-15',
    urgent: true,
  },
  {
    id: '2',
    title: '客服代表',
    department: 'customer',
    location: '洛杉矶/远程',
    experience: '1-3年',
    education: '大专',
    type: '全职',
    salary: '$45,000 - $55,000',
    publishDate: '2024-01-14',
    urgent: false,
  },
  {
    id: '3',
    title: '仓储管理员',
    department: 'warehouse',
    location: '芝加哥',
    experience: '2-4年',
    education: '高中',
    type: '全职',
    salary: '$40,000 - $50,000',
    publishDate: '2024-01-13',
    urgent: true,
  },
  {
    id: '4',
    title: '前端开发工程师',
    department: 'tech',
    location: '洛杉矶',
    experience: '3-5年',
    education: '本科',
    type: '全职',
    salary: '$80,000 - $100,000',
    publishDate: '2024-01-12',
    urgent: false,
  },
  {
    id: '5',
    title: '财务分析师',
    department: 'finance',
    location: '洛杉矶',
    experience: '2-4年',
    education: '本科',
    type: '全职',
    salary: '$65,000 - $75,000',
    publishDate: '2024-01-10',
    urgent: false,
  },
  {
    id: '6',
    title: 'HR专员',
    department: 'hr',
    location: '洛杉矶',
    experience: '1-3年',
    education: '本科',
    type: '全职',
    salary: '$50,000 - $60,000',
    publishDate: '2024-01-08',
    urgent: false,
  },
]

// 筛选职位
const filteredJobs = computed(() => {
  if (selectedDepartment.value === 'all') {
    return jobs
  }
  return jobs.filter((job) => job.department === selectedDepartment.value)
})

// 打开职位详情
const openJobDetail = (job: Job) => {
  // 这里可以实现跳转到职位详情页面或打开模态框
  alert(`查看职位详情: ${job.title}`)
}
</script>
