import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// 简化的路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '可耐博达Kenable - 专业跨境物流服务商 | 美国仓储配送一站式解决方案',
      description:
        '20+年跨境物流经验，50万+平方英尺仓储网络，覆盖美国全境。为跨境电商、制造业提供仓储、运输、清关、配送一站式物流解决方案。专业团队24/7服务，助力您的全球贸易。',
      keywords: '跨境物流,美国仓储,国际运输,海外仓,电商物流,供应链管理,清关服务,最后一公里配送',
      ogType: 'website',
      ogImage: '/images/og-home.jpg',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '关于我们 - 可耐博达Kenable | 20年跨境物流专业经验',
      description:
        '成立于2004年，可耐博达（广州）供应链管理有限公司专注跨境物流20年，服务500+企业客户。拥有专业团队200+人，4大配送中心，98%客户满意度。了解我们的发展历程和核心价值。',
      keywords: '公司介绍,物流经验,企业历史,团队介绍,物流专家,行业经验',
      ogType: 'website',
      ogImage: '/images/og-about.jpg',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: '物流服务 - 可耐博达Kenable | 仓储运输清关配送全方位解决方案',
      description:
        '提供国际运输、仓储管理、清关服务、最后一公里配送、退货处理等全链条物流服务。智能WMS系统，实时跟踪，为您的业务提供强力支撑。',
      keywords: '国际运输,仓储管理,清关服务,最后一公里,退货处理,WMS系统,物流跟踪',
      ogType: 'website',
      ogImage: '/images/og-services.jpg',
    },
  },
  {
    path: '/services/air-freight',
    name: 'air-freight',
    component: () => import('@/views/services/AirFreightView.vue'),
    meta: {
      title: '空运服务 - 可耐博达Kenable | 快速安全的国际航空运输',
      description:
        '专业的航空货运服务，2-5天全球直达，紧急货物24小时加急处理，覆盖全球200+城市的一站式门到门服务。',
      keywords: '空运服务,航空货运,国际空运,紧急运输,快速物流',
      ogType: 'website',
    },
  },
  {
    path: '/services/sea-freight',
    name: 'sea-freight',
    component: () => import('@/views/services/SeaFreightView.vue'),
    meta: {
      title: '海运服务 - 可耐博达Kenable | 经济高效的海洋货运',
      description:
        '专业的海洋货运服务，支持整箱、拼箱多种运输方式，覆盖全球主要港口，定期班轮服务，成本优势明显。',
      keywords: '海运服务,海洋货运,整箱运输,拼箱运输,国际海运',
      ogType: 'website',
    },
  },
  {
    path: '/services/contract-logistics',
    name: 'contract-logistics',
    component: () => import('@/views/services/ContractLogisticsView.vue'),
    meta: {
      title: '合同物流 - 可耐博达Kenable | 定制化供应链管理服务',
      description:
        '专业的合同物流服务，提供仓储管理、配送服务、库存优化、订单处理等全方位供应链管理解决方案。',
      keywords: '合同物流,供应链管理,仓储管理,配送服务,库存优化',
      ogType: 'website',
    },
  },
  {
    path: '/services/integrated-intermodal-solutions',
    name: 'integrated-intermodal-solutions',
    component: () => import('@/views/services/IntegratedIntermodalSolutionsView.vue'),
    meta: {
      title: '一体化联运解决方案 | 可耐博达Kenable',
      description:
        '可耐博达提供含IPI在内的海、陆、空一体化联运解决方案，无缝衔接头程与内陆运输，为您优化成本与时效。',
      keywords: 'IPI联运,多式联运,海铁联运,一体化运输,内陆运输,头程联运',
      ogType: 'website',
    },
  },
  {
    path: '/services/global-local-presence',
    name: 'global-local-presence',
    component: () => import('@/views/services/GlobalLocalPresenceView.vue'),
    meta: {
      title: '全球化当地布局 | 可耐博达Kenable',
      description:
        '可耐博达在中国、越南、印尼设有本地化团队，扎根供应链源头，提供专业的报关、本地运输与客户服务。',
      keywords: '本地化服务,全球布局,亚洲团队,源头服务,本地报关,供应链管理',
      ogType: 'website',
    },
  },
  {
    path: '/services/supply-chain-solutions',
    name: 'supply-chain-solutions',
    component: () => import('@/views/services/SupplyChainSolutionsView.vue'),
    meta: {
      title: '供应链解决方案 | 可耐博达Kenable',
      description:
        '端到端供应链优化服务，整合全球资源，提升供应链效率，降低物流成本，助力企业全球化发展。',
      keywords: '供应链解决方案,供应链优化,全球物流,成本控制,企业全球化',
      ogType: 'website',
    },
  },
  {
    path: '/services/first-leg-logistics',
    name: 'first-leg-logistics',
    component: () => import('@/views/services/FirstLegLogisticsView.vue'),
    meta: {
      title: '头程物流 | 可耐博达Kenable',
      description:
        '专业的国际头程物流服务，覆盖海运、空运、快递等多种运输方式，为您的货物提供安全、快捷的跨境运输。',
      keywords: '头程物流,国际运输,海运头程,空运头程,跨境物流',
      ogType: 'website',
    },
  },
  {
    path: '/services/nationwide-delivery',
    name: 'nationwide-delivery',
    component: () => import('@/views/services/NationwideDeliveryView.vue'),
    meta: {
      title: '全国派送 | 可耐博达Kenable',
      description:
        '覆盖美国全境的配送网络，提供快速、可靠的最后一公里配送服务，确保您的货物安全及时送达。',
      keywords: '全国派送,美国配送,最后一公里,快递服务,配送网络',
      ogType: 'website',
    },
  },
  {
    path: '/services/overseas-warehouses',
    name: 'overseas-warehouses',
    component: () => import('@/views/services/OverseasWarehousesView.vue'),
    meta: {
      title: '海外仓储 | 可耐博达Kenable',
      description:
        '在美国设有多个海外仓储中心，提供存储、分拣、包装、配送等一站式仓储服务，助力您的跨境电商业务。',
      keywords: '海外仓储,美国仓库,跨境电商,仓储服务,货物存储',
      ogType: 'website',
    },
  },
  {
    path: '/services/value-added-services',
    name: 'value-added-services',
    component: () => import('@/views/services/ValueAddedServicesView.vue'),
    meta: {
      title: '增值服务 | 可耐博达Kenable',
      description: '提供包装、贴标、组装、质检等增值服务，为您的产品增加附加值，提升市场竞争力。',
      keywords: '增值服务,产品包装,贴标服务,质量检验,产品组装',
      ogType: 'website',
    },
  },
  {
    path: '/services/reverse-logistics',
    name: 'reverse-logistics',
    component: () => import('@/views/services/ReverseLogisticsView.vue'),
    meta: {
      title: '逆向物流 | 可耐博达Kenable',
      description:
        '专业的退货处理和逆向物流服务，帮助您高效处理退换货，提升客户满意度，降低运营成本。',
      keywords: '逆向物流,退货处理,退换货服务,客户满意度,运营优化',
      ogType: 'website',
    },
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: () => import('@/views/WarehousesView.vue'),
    meta: {
      title: '仓储网络 - 可耐博达Kenable | 美国50万+平方英尺仓储设施',
      description:
        '在美国设有多个现代化仓储设施，总面积超过50万平方英尺，配备先进WMS系统，为您提供专业的仓储管理服务。',
      keywords: '仓储网络,美国仓库,仓储设施,WMS系统,仓储管理',
      ogType: 'website',
      ogImage: '/images/og-warehouses.jpg',
    },
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component: () => import('@/views/CaseStudiesView.vue'),
    meta: {
      title: '客户案例 - 可耐博达Kenable | 成功的跨境物流合作案例',
      description:
        '展示我们与各行业客户的成功合作案例，了解我们的专业能力和服务质量，为您的业务提供参考和启发。',
      keywords: '客户案例,成功案例,合作案例,物流案例,行业经验',
      ogType: 'website',
      ogImage: '/images/og-case-studies.jpg',
    },
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('@/views/TechnologyView.vue'),
    meta: {
      title: '技术管理 - 可耐博达Kenable | 先进的物流技术和管理系统',
      description:
        '采用先进的物流技术和管理系统，包括WMS仓储管理系统、实时跟踪系统等，为您提供高效、透明的物流服务。',
      keywords: '物流技术,管理系统,WMS系统,实时跟踪,技术优势',
      ogType: 'website',
      ogImage: '/images/og-technology.jpg',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: '联系我们 - 可耐博达Kenable | 专业的跨境物流服务咨询',
      description:
        '联系我们获取专业的跨境物流服务咨询。我们的专业团队将为您提供个性化的物流解决方案和优质服务。',
      keywords: '联系我们,物流咨询,服务咨询,专业团队,解决方案',
      ogType: 'website',
      ogImage: '/images/og-contact.jpg',
    },
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: () => import('@/views/TrackingView.vue'),
    meta: {
      title: '货物跟踪 - 可耐博达Kenable | 实时查询您的货物状态',
      description:
        '实时跟踪您的货物运输状态，随时了解货物位置和配送进度，确保您对货物动态了如指掌。',
      keywords: '货物跟踪,实时跟踪,运输状态,配送进度,物流查询',
      ogType: 'website',
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: {
      title: '价格方案 - 可耐博达Kenable | 透明的物流服务定价',
      description: '了解我们透明、合理的物流服务定价方案，为您的业务选择最适合的服务套餐。',
      keywords: '价格方案,服务定价,物流费用,透明定价,服务套餐',
      ogType: 'website',
    },
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
    meta: {
      title: '行业资讯 - 可耐博达Kenable | 跨境物流行业动态',
      description: '关注跨境物流行业最新动态和发展趋势，了解行业政策变化和市场机会。',
      keywords: '行业资讯,物流新闻,行业动态,政策变化,市场趋势',
      ogType: 'website',
    },
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import('@/views/CareersView.vue'),
    meta: {
      title: '加入我们 - 可耐博达Kenable | 物流行业职业机会',
      description:
        '加入我们的专业团队，在跨境物流行业发展您的职业生涯。我们提供良好的工作环境和发展机会。',
      keywords: '招聘信息,职业机会,团队加入,物流职业,发展机会',
      ogType: 'website',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      title: '用户登录 - 可耐博达Kenable',
      description: '登录您的账户，管理您的物流订单和服务。',
      keywords: '用户登录,账户管理,订单管理',
      ogType: 'website',
    },
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: {
      title: '隐私政策 - 可耐博达Kenable',
      description: '了解我们如何保护您的个人信息和隐私',
      keywords: '隐私政策,个人信息保护,数据安全',
      ogType: 'website',
    },
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue'),
    meta: {
      title: '服务条款 - 可耐博达Kenable',
      description: '使用我们服务时需要遵守的条款和条件',
      keywords: '服务条款,使用条款,法律条款',
      ogType: 'website',
    },
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('@/views/CookiesView.vue'),
    meta: {
      title: 'Cookie政策 - 可耐博达Kenable',
      description: '我们如何使用Cookies来改善您的浏览体验',
      keywords: 'Cookie政策,浏览器设置,用户体验',
      ogType: 'website',
    },
  },
  // 404 错误页面
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '页面未找到 - 可耐博达Kenable',
      description: '抱歉，您访问的页面不存在。返回首页继续浏览我们的专业物流服务。',
      keywords: '404,页面未找到',
      ogType: 'website',
    },
  },
]

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
        top: 80, // 考虑固定头部的高度
      }
    }
    // 默认滚动到顶部
    return { top: 0, behavior: 'smooth' }
  },
  routes,
})

// 简化的路由前置守卫 - 只设置页面标题和元信息
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

  // 设置语言标签为默认中文
  document.documentElement.lang = 'zh'

  // 设置Open Graph标签
  const title = (to.meta.title as string) || '可耐博达Kenable'
  const description = (to.meta.description as string) || '专业跨境物流服务'

  setPropertyTag('og:title', title)
  setPropertyTag('og:description', description)
  setPropertyTag('og:type', (to.meta.ogType as string) || 'website')
  setPropertyTag('og:url', window.location.href)
  setPropertyTag('og:locale', 'zh_CN')

  if (to.meta.ogImage) {
    setPropertyTag('og:image', to.meta.ogImage as string)
  }

  // 设置Twitter Card标签
  setMetaTag('twitter:card', 'summary_large_image')
  setMetaTag('twitter:title', title)
  setMetaTag('twitter:description', description)

  if (to.meta.ogImage) {
    setMetaTag('twitter:image', to.meta.ogImage as string)
  }

  next()
})

export default router
