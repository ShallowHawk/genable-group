import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（如浏览器后退），恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 如果有锚点，滚动到锚点
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // 考虑固定头部的高度
      }
    }
    // 默认滚动到顶部
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'KENABLE GROUP - 专业跨境物流服务商 | 美国仓储配送一站式解决方案',
        description: '20+年跨境物流经验，50万+平方英尺仓储网络，覆盖美国全境。为跨境电商、制造业提供仓储、运输、清关、配送一站式物流解决方案。专业团队24/7服务，助力您的全球贸易。',
        keywords: '跨境物流,美国仓储,国际运输,海外仓,电商物流,供应链管理,清关服务,最后一公里配送',
        ogType: 'website',
        ogImage: '/images/og-home.jpg'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: '关于我们 - KENABLE GROUP | 20年跨境物流专业经验',
        description: '成立于2004年，KENABLE GROUP专注跨境物流20年，服务500+企业客户。拥有专业团队200+人，4大配送中心，98%客户满意度。了解我们的发展历程和核心价值。',
        keywords: '公司介绍,物流经验,企业历史,团队介绍,物流专家,行业经验',
        ogType: 'website',
        ogImage: '/images/og-about.jpg'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: '物流服务 - KENABLE GROUP | 仓储运输清关配送全方位解决方案',
        description: '提供国际运输、仓储管理、清关服务、最后一公里配送、退货处理等全链条物流服务。智能WMS系统，实时跟踪，为您的业务提供强力支撑。',
        keywords: '国际运输,仓储管理,清关服务,最后一公里,退货处理,WMS系统,物流跟踪',
        ogType: 'website',
        ogImage: '/images/og-services.jpg'
      }
    },
    {
      path: '/warehouses',
      name: 'warehouses',
      component: () => import('@/views/WarehousesView.vue'),
      meta: {
        title: '仓储网络 - KENABLE GROUP | 美国4大配送中心50万平方英尺',
        description: '洛杉矶、芝加哥、纽约、达拉斯4大配送中心，总面积50万+平方英尺，日处理10万+包裹。智能仓储管理系统，99%库存准确率，为您提供高效仓储服务。',
        keywords: '美国仓储,配送中心,智能仓储,WMS系统,洛杉矶仓库,芝加哥仓库,纽约仓库,达拉斯仓库',
        ogType: 'website',
        ogImage: '/images/og-warehouses.jpg'
      }
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: () => import('@/views/CaseStudiesView.vue'),
      meta: {
        title: '客户案例 - KENABLE GROUP | 500+成功案例见证专业实力',
        description: '500+成功案例，覆盖跨境电商、制造业、零售业等15个行业。客户业务平均增长300%，98%满意度。查看真实案例，了解我们如何助力客户成功。',
        keywords: '客户案例,成功案例,跨境电商案例,制造业物流,零售物流,客户证言,行业解决方案',
        ogType: 'website',
        ogImage: '/images/og-cases.jpg'
      }
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('@/views/TechnologyView.vue'),
      meta: {
        title: '技术与精细管理 - KENABLE GROUP',
        description: '先进的物流技术系统和精细化管理能力'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: '联系我们 - KENABLE GROUP | 免费咨询24小时响应',
        description: '专业客服团队24/7在线服务，5分钟响应，24小时内提供专业方案。多种联系方式：电话、邮件、微信、上门服务。立即联系获取免费物流方案。',
        keywords: '联系我们,免费咨询,客服电话,在线客服,物流咨询,上门服务,24小时服务',
        ogType: 'website',
        ogImage: '/images/og-contact.jpg'
      }
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('@/views/TrackingView.vue'),
      meta: {
        title: '货物跟踪 - KENABLE GROUP | 实时物流跟踪查询系统',
        description: '24/7实时货物跟踪系统，输入运单号即可查询包裹位置、运输状态、预计到达时间。支持批量查询，短信/邮件通知，让您随时掌握货物动态。',
        keywords: '货物跟踪,包裹查询,运单查询,实时跟踪,物流状态,运输进度',
        ogType: 'website',
        ogImage: '/images/og-tracking.jpg'
      }
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/PricingView.vue'),
      meta: {
        title: '价格方案 - KENABLE GROUP | 透明定价无隐藏费用',
        description: '透明的物流定价体系，适合不同规模企业的价格方案。从初创企业到大型企业，提供灵活的计费方式。在线计算器，即时获取报价。',
        keywords: '物流价格,运输费用,仓储费用,价格计算器,定价方案,物流报价',
        ogType: 'website',
        ogImage: '/images/og-pricing.jpg'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue'),
      meta: {
        title: '新闻动态 - KENABLE GROUP | 行业资讯与公司动态',
        description: '最新的物流行业资讯、公司发展动态、合作伙伴新闻。了解跨境物流最新趋势，掌握行业发展方向，获取专业见解和分析。',
        keywords: '物流新闻,行业资讯,公司动态,跨境物流趋势,物流分析,行业报告',
        ogType: 'website',
        ogImage: '/images/og-news.jpg'
      }
    },
    {
      path: '/careers',
      name: 'careers',
      component: () => import('@/views/CareersView.vue'),
      meta: {
        title: '招聘信息 - KENABLE GROUP | 加入专业物流团队',
        description: '加入KENABLE GROUP专业团队，提供有竞争力的薪酬待遇和广阔的发展空间。招聘物流专员、仓储管理、客服代表等职位。投递简历，开启物流职业生涯。',
        keywords: '招聘信息,职业机会,物流工作,仓储工作,客服工作,简历投递',
        ogType: 'website',
        ogImage: '/images/og-careers.jpg'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: {
        title: '客户登录 - KENABLE GROUP | 客户门户系统',
        description: '客户专属登录入口，管理您的物流订单、查看账单、下载报告。安全便捷的客户门户系统，随时随地管理您的物流业务。',
        keywords: '客户登录,用户登录,客户门户,订单管理,账单查询',
        ogType: 'website',
        ogImage: '/images/og-login.jpg'
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/PrivacyView.vue'),
      meta: {
        title: '隐私政策 - KENABLE GROUP',
        description: '我们如何收集、使用和保护您的个人信息'
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('@/views/TermsView.vue'),
      meta: {
        title: '服务条款 - KENABLE GROUP',
        description: '使用我们服务时需要遵守的条款和条件'
      }
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: () => import('@/views/CookiesView.vue'),
      meta: {
        title: 'Cookie政策 - KENABLE GROUP',
        description: '我们如何使用Cookies来改善您的浏览体验'
      }
    },
    // 404 错误页面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        title: '页面未找到 - KENABLE GROUP',
        description: '抱歉，您访问的页面不存在。返回首页继续浏览我们的专业物流服务。',
        keywords: '404,页面未找到',
        ogType: 'website'
      }
    }
  ],
})

// 全局前置守卫 - 设置页面标题和元信息
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // 设置meta标签
  const setMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
    if (!element) {
      element = document.createElement('meta')
      element.name = name
      document.head.appendChild(element)
    }
    element.content = content
  }
  
  const setPropertyTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('property', property)
      document.head.appendChild(element)
    }
    element.content = content
  }
  
  // 设置基础meta标签
  if (to.meta.description) {
    setMetaTag('description', to.meta.description as string)
  }
  
  if (to.meta.keywords) {
    setMetaTag('keywords', to.meta.keywords as string)
  }
  
  // 设置Open Graph标签
  setPropertyTag('og:title', to.meta.title as string || 'KENABLE GROUP')
  setPropertyTag('og:description', to.meta.description as string || '专业跨境物流服务')
  setPropertyTag('og:type', to.meta.ogType as string || 'website')
  setPropertyTag('og:url', window.location.href)
  
  if (to.meta.ogImage) {
    setPropertyTag('og:image', to.meta.ogImage as string)
  }
  
  // 设置Twitter Card标签
  setMetaTag('twitter:card', 'summary_large_image')
  setMetaTag('twitter:title', to.meta.title as string || 'KENABLE GROUP')
  setMetaTag('twitter:description', to.meta.description as string || '专业跨境物流服务')
  
  if (to.meta.ogImage) {
    setMetaTag('twitter:image', to.meta.ogImage as string)
  }
  
  next()
})

export default router
