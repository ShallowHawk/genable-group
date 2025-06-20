<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import Icon from '@/components/ui/Icon.vue'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 统计数据
  | 'statisticsTitle'
  | 'containersHandled'
  | 'clientsServed'
  | 'annualDeliveries'
  | 'packagesProcessed'
  | 'ownTrucks'
  | 'warehouseSpace'
  // 核心服务
  | 'endToEndTitle'
  | 'endToEndDesc'
  | 'warehouseNetworkTitle'
  | 'warehouseNetworkDesc'
  | 'industryExperienceTitle'
  | 'industryExperienceDesc'
  | 'deliveryNetworkTitle'
  | 'deliveryNetworkDesc'
  | 'customSolutionsTitle'
  | 'customSolutionsDesc'
  | 'transparentOperationsTitle'
  | 'transparentOperationsDesc'
  // 客户评价
  | 'testimonialsTitle'
  | 'testimonialsSubtitle'
  | 'chintTestimonial'
  | 'cushionLabTestimonial'
  | 'chintAuthor'
  | 'chintPosition'
  | 'cushionLabAuthor'
  | 'cushionLabPosition'
  // Hero区域
  | 'heroTitle'
  | 'heroSubtitle'
  | 'heroDescription'
  | 'heroTitlePart1'
  | 'heroTitlePart2'
  | 'heroDescPart1'
  | 'heroDescPart2'
  | 'heroDescHighlight'
  | 'heroBadge'
  | 'heroCtaPrimary'
  | 'heroCtaSecondary'
  // 轮播图
  | 'airFreightTitle'
  | 'airFreightSubtitle'
  | 'airFreightDesc'
  | 'seaFreightTitle'
  | 'seaFreightSubtitle'
  | 'seaFreightDesc'
  | 'contractLogisticsTitle'
  | 'contractLogisticsSubtitle'
  | 'contractLogisticsDesc'
  | 'integratedIntermodalTitle'
  | 'integratedIntermodalSubtitle'
  | 'integratedIntermodalDesc'
  | 'globalLocalTitle'
  | 'globalLocalSubtitle'
  | 'globalLocalDesc'
  | 'supplyChainTitle'
  | 'supplyChainSubtitle'
  | 'supplyChainDesc'
  // CTA区域
  | 'ctaTitle'
  | 'ctaSubtitle'
  | 'ctaPrimary'
  | 'ctaSecondary'
  | 'ctaTertiary'
  // 通用按钮和文本
  | 'learnMore'
  | 'viewNetwork'
  | 'getQuote'
  | 'clientTestimonials'
  // 新增翻译键
  | 'kenableSolutionsTitle'
  | 'kenableSolutionsSubtitle'
  | 'whyChooseUsTitle'
  | 'partnersTitle'
  | 'viewMoreCasesText'
  | 'startCooperationButton'
  | 'downloadManualButton'
  | 'faqTitle'
  // 选项卡
  | 'tabGetQuote'
  | 'tabServices'
  | 'tabBook'
  | 'tabTrack'
  | 'tabQuoteTitle'
  | 'tabQuoteDesc'
  | 'tabServicesTitle'
  | 'tabServicesDesc'
  | 'tabBookTitle'
  | 'tabBookDesc'
  | 'tabTrackTitle'
  | 'tabTrackDesc'
  | 'selectServiceType'
  | 'serviceFirstMile'
  | 'serviceNationwideDelivery'
  | 'serviceCustomSolutions'
  | 'serviceValueAdded'
  | 'serviceReverseLogistics'
  | 'getQuoteButton'
  | 'logisticsSolutionQuote'
  | 'learnMoreLogistics'
  | 'newCustomerBooking'
  | 'existingCustomerLogin'
  | 'trackNowButton'
  | 'trackingSupportInfo'
  | 'testimonialSectionTitle'
  | 'testimonialSectionSubtitle'
  | 'solutionAirFreightTitle'
  | 'solutionAirFreightDesc'
  | 'solutionSeaFreightTitle'
  | 'solutionSeaFreightDesc'
  | 'solutionContractLogisticsTitle'
  | 'solutionContractLogisticsDesc'
  | 'solutionIntermodalTitle'
  | 'solutionIntermodalDesc'
  | 'solutionGlobalLocalTitle'
  | 'solutionGlobalLocalDesc'
  | 'solutionSupplyChainTitle'
  | 'solutionSupplyChainDesc'

// 翻译映射 - 优化后的地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 统计数据
    statisticsTitle: '卓越成就，一目了然',
    containersHandled: '集装箱处理量',
    clientsServed: '服务客户',
    annualDeliveries: '年度派送量',
    packagesProcessed: '包裹处理量',
    ownTrucks: '自有拖车卡车',
    warehouseSpace: '平方米仓库面积',

    // 核心服务
    endToEndTitle: '一站式全链路服务',
    endToEndDesc: '提供从跨境货运、清关到美国内陆运输和最后一公里派送的全方位解决方案。',
    warehouseNetworkTitle: '全国自有仓储网络',
    warehouseNetworkDesc:
      '在加州、德州、佐治亚和印第安纳州拥有超22,000平米的自营仓库，确保高效分销。',
    industryExperienceTitle: '丰富的行业与清关经验',
    industryExperienceDesc: '近20年行业经验，精通美国法规和平台政策，高效解决复杂物流与清关挑战。',
    deliveryNetworkTitle: '高效的派送合作网络',
    deliveryNetworkDesc: '与UPS、USPS等官方合作，配合自营卡车车队，保障派送时效。',
    customSolutionsTitle: '柔性定制化解决方案',
    customSolutionsDesc: '支持整箱、拆箱、代发货等模式，根据您的特定需求量身定制服务。',
    transparentOperationsTitle: '卓越声誉与透明运营',
    transparentOperationsDesc: '提供全程可追溯的透明服务，是客户值得信赖的长期战略合作伙伴。',

    // 客户评价
    testimonialsTitle: '客户评价',
    testimonialsSubtitle: '听听我们客户的真实声音',
    chintTestimonial:
      '面对高价值产品的跨境难题，可耐博达提供的一站式解决方案和全额价值保障，让我们能真正安心地将市场重心放在美国，后顾无忧。',
    cushionLabTestimonial:
      '作为年销售额超1亿美元的多平台销售商，可耐博达利用其覆盖全美的多仓网络和灵活的履行模式，为我们提供了稳定高效的仓储和分销服务。',
    chintAuthor: '张总',
    chintPosition: '供应链总监',
    cushionLabAuthor: '李总',
    cushionLabPosition: '运营总监',

    // Hero区域
    heroTitle: '您值得信赖的美国供应链管理合作伙伴',
    heroSubtitle: '一站式跨境物流解决方案',
    heroDescription:
      '一站式提供国际头程、全美仓储、本土派送及订单履行服务，助您轻松立足美国市场。99%货物24小时内被取件',
    heroTitlePart1: '您值得信赖的',
    heroTitlePart2: '美国供应链管理合作伙伴',
    heroDescPart1: '一站式提供国际头程、全美仓储、本土派送及订单履行服务，',
    heroDescPart2: '助您轻松立足美国市场。',
    heroDescHighlight: '99%货物24小时内被取件',
    heroBadge: '美国领先的跨境物流服务商',
    heroCtaPrimary: '开始合作',
    heroCtaSecondary: '了解更多',

    // 轮播图服务
    airFreightTitle: '空运服务',
    airFreightSubtitle: '快速、安全的国际航空运输解决方案',
    airFreightDesc: '提供高效的航空货运服务，确保您的货物安全、快速地到达目的地',
    seaFreightTitle: '海运服务',
    seaFreightSubtitle: '经济高效的海洋货运解决方案',
    seaFreightDesc: '依托Matson等知名船公司，提供稳定可靠的跨太平洋海运服务',
    contractLogisticsTitle: '个性化定制方案',
    contractLogisticsSubtitle: '定制化的供应链管理服务',
    contractLogisticsDesc: '根据您的业务需求，量身定制专属的物流解决方案',
    integratedIntermodalTitle: '一体化联运解决方案',
    integratedIntermodalSubtitle: '含IPI在内的海、陆、空一体化联运解决方案',
    integratedIntermodalDesc: '整合多种运输方式，提供无缝衔接的综合物流服务',
    globalLocalTitle: '全球化当地布局',
    globalLocalSubtitle: '扎根供应链源头的本地化团队服务',
    globalLocalDesc: '依托全球网络和本地化团队，提供贴近市场的专业服务',
    supplyChainTitle: '供应链解决方案',
    supplyChainSubtitle: '端到端的供应链优化服务',
    supplyChainDesc: '从采购到配送，提供全链条的供应链管理和优化服务',

    // CTA区域
    ctaTitle: '携手可耐博达，共创美国市场新机遇',
    ctaSubtitle: '专业团队24小时在线，为您量身打造最优物流解决方案',
    ctaPrimary: '获取专业报价',
    ctaSecondary: '预约专属顾问',
            ctaTertiary: '+1 (626) 693-6579',

    // 通用
    learnMore: '了解更多',
    viewNetwork: '查看我们的全球网络',
    getQuote: '获取报价',
    clientTestimonials: '客户评价',

    // 新增翻译
    kenableSolutionsTitle: '可耐博达Kenable解决方案',
    kenableSolutionsSubtitle: '整合运输、仓储、报关、和贸易合规，提供一站式国际物流解决方案。',
    whyChooseUsTitle: '为什么选择我们',
    partnersTitle: '携手共赢的合作伙伴',
    viewMoreCasesText: '查看更多客户案例',
    startCooperationButton: '立即开始合作',
    downloadManualButton: '下载服务手册',
    faqTitle: '常见问题解答',

    // 选项卡
    tabGetQuote: '获取报价',
    tabServices: '物流解决方案',
    tabBook: '预订服务',
    tabTrack: '货物追踪',
    tabQuoteTitle: '专业报价，量身定制',
    tabQuoteDesc: '告诉我们您的服务需求，我们将为您提供最具竞争力的解决方案',
    tabServicesTitle: '智慧物流解决方案',
    tabServicesDesc: '深入了解我们的全链路服务体系，找到最适合您业务的定制化方案',
    tabBookTitle: '便捷服务预订',
    tabBookDesc: '一键预订，省心省力：立即开启您的物流服务之旅',
    tabTrackTitle: '智能货物追踪',
    tabTrackDesc: '一键查询，全程透明：输入追踪号码，实时掌握货物运输状态',
    selectServiceType: '选择服务类型',
    serviceFirstMile: '头程物流（揽收、报关、清关、FBA运输）',
    serviceNationwideDelivery: '全国派送（包裹与卡车专线服务）',
    serviceCustomSolutions: '个性化定制方案（储存、指定货件处理、代发货）',
    serviceValueAdded: '增值服务（分拣、换标、重包装、定制）',
    serviceReverseLogistics: '逆向物流（退货、重新上架、库存处置）',
    getQuoteButton: '获取报价',
    logisticsSolutionQuote: '物流解决方案报价',
    learnMoreLogistics: '了解更多物流解决方案',
    newCustomerBooking: '新客户预订',
    existingCustomerLogin: '现有客户登录',
    trackNowButton: '立即追踪',
    trackingSupportInfo: '支持：空运提单号、海运提单号、集装箱号、客户参考号',
    testimonialSectionTitle: '口碑见证',
    testimonialSectionSubtitle: '真实客户案例，见证我们的专业实力',
    solutionAirFreightTitle: '空运服务',
    solutionAirFreightDesc: '快速、安全的国际航空运输解决方案',
    solutionSeaFreightTitle: '海运服务',
    solutionSeaFreightDesc: '经济高效的海洋货运解决方案',
    solutionContractLogisticsTitle: '个性化定制方案',
    solutionContractLogisticsDesc: '定制化的供应链管理服务',
    solutionIntermodalTitle: '一体化联运解决方案',
    solutionIntermodalDesc: '含IPI在内的海、陆、空一体化联运解决方案',
    solutionGlobalLocalTitle: '全球化当地布局',
    solutionGlobalLocalDesc: '扎根供应链源头的本地化团队服务',
    solutionSupplyChainTitle: '供应链解决方案',
    solutionSupplyChainDesc: '端到端的供应链优化服务',
  },
  en: {
    // 统计数据 - 地道英文表达
    statisticsTitle: 'Our Track Record Speaks for Itself',
    containersHandled: 'Containers Handled',
    clientsServed: 'Satisfied Clients',
    annualDeliveries: 'Annual Deliveries',
    packagesProcessed: 'Packages Processed',
    ownTrucks: 'Fleet Vehicles',
    warehouseSpace: 'Sq Ft Warehouse Space',

    // 核心服务 - 更自然的英文表达
    endToEndTitle: 'Complete End-to-End Solutions',
    endToEndDesc:
      'From international freight and customs clearance to inland transportation and last-mile delivery across America.',
    warehouseNetworkTitle: 'Nationwide Self-Operated Network',
    warehouseNetworkDesc:
      'Over 240,000 sq ft of self-operated warehouses strategically located in California, Texas, Georgia, and Indiana for optimal distribution.',
    industryExperienceTitle: 'Deep Industry & Regulatory Expertise',
    industryExperienceDesc:
      'Nearly two decades of experience navigating US regulations and platform requirements, solving complex logistics challenges efficiently.',
    deliveryNetworkTitle: 'Reliable Delivery Partnership',
    deliveryNetworkDesc:
      'Official partnerships with UPS and USPS combined with our own fleet ensure consistent delivery performance.',
    customSolutionsTitle: 'Flexible, Tailored Solutions',
    customSolutionsDesc:
      'Full container, LCL, and drop-shipping options customized to meet your specific business requirements.',
    transparentOperationsTitle: 'Trusted Partnership & Transparency',
    transparentOperationsDesc:
      'Full end-to-end visibility and transparent operations make us your reliable long-term strategic partner.',

    // 客户评价 - 自然英文表达
    testimonialsTitle: 'What Our Clients Say',
    testimonialsSubtitle: 'Real feedback from satisfied customers',
    chintTestimonial:
      "With high-value products and complex cross-border challenges, Kenable's comprehensive solutions and full value protection give us complete peace of mind to focus on the US market.",
    cushionLabTestimonial:
      "As a multi-platform seller with over $100M in annual sales, Kenable's nationwide multi-warehouse network and flexible fulfillment options provide us with the stability and efficiency we need.",
    chintAuthor: 'Mr. Zhang',
    chintPosition: 'Supply Chain Director',
    cushionLabAuthor: 'Mr. Li',
    cushionLabPosition: 'Operations Director',

    // Hero区域 - 地道表达
    heroTitle: 'Your Trusted US Supply Chain Partner',
    heroSubtitle: 'Complete Cross-Border Logistics Solutions',
    heroDescription:
      'From international shipping and nationwide warehousing to local delivery and order fulfillment - helping you succeed in the US market. 99% of shipments picked up within 24 hours.',
    heroTitlePart1: 'Your Trusted',
    heroTitlePart2: 'US Supply Chain Partner',
    heroDescPart1:
      'From international shipping and nationwide warehousing to local delivery and order fulfillment -',
    heroDescPart2: 'helping you succeed in the US market.',
    heroDescHighlight: '99% pickup within 24 hours',
    heroBadge: 'Leading Cross-Border Logistics Provider in America',
    heroCtaPrimary: 'Start Partnership',
    heroCtaSecondary: 'Learn More',

    // 轮播图服务 - 简洁有力的英文
    airFreightTitle: 'Air Freight Services',
    airFreightSubtitle: 'Fast, secure international air transport',
    airFreightDesc:
      'Efficient air cargo services ensuring your goods reach their destination safely and quickly',
    seaFreightTitle: 'Ocean Freight Services',
    seaFreightSubtitle: 'Cost-effective ocean shipping solutions',
    seaFreightDesc: 'Reliable trans-Pacific shipping through trusted carriers like Matson',
    contractLogisticsTitle: 'Custom Logistics Solutions',
    contractLogisticsSubtitle: 'Tailored supply chain management',
    contractLogisticsDesc:
      'Logistics solutions designed specifically for your unique business needs',
    integratedIntermodalTitle: 'Integrated Multimodal Solutions',
    integratedIntermodalSubtitle: 'Seamless sea, land, and air transport including IPI',
    integratedIntermodalDesc:
      'Multiple transport modes integrated for comprehensive logistics efficiency',
    globalLocalTitle: 'Global Network, Local Expertise',
    globalLocalSubtitle: 'On-ground teams at supply chain origins',
    globalLocalDesc:
      'Local expertise and global reach providing market-focused professional services',
    supplyChainTitle: 'Supply Chain Optimization',
    supplyChainSubtitle: 'End-to-end supply chain solutions',
    supplyChainDesc:
      'Complete supply chain management and optimization from procurement to final delivery',

    // CTA区域 - 有说服力的英文
    ctaTitle: 'Partner with Kenable for US Market Success',
    ctaSubtitle:
      'Our expert team is available 24/7 to create the perfect logistics solution for your business',
    ctaPrimary: 'Get Professional Quote',
    ctaSecondary: 'Schedule Consultation',
    ctaTertiary: 'Call Now: +1-800-KENABLE',

    // 通用
    learnMore: 'Learn More',
    viewNetwork: 'View Our Global Network',
    getQuote: 'Get Quote',
    clientTestimonials: 'Client Testimonials',

    // 新增翻译
    kenableSolutionsTitle: 'Kenable Solutions',
    kenableSolutionsSubtitle:
      'Integrated transportation, warehousing, customs clearance, and trade compliance for comprehensive international logistics solutions.',
    whyChooseUsTitle: 'Why Choose Us',
    partnersTitle: 'Trusted Partners',
    viewMoreCasesText: 'View More Case Studies',
    startCooperationButton: 'Start Partnership',
    downloadManualButton: 'Download Service Guide',
    faqTitle: 'Frequently Asked Questions',

    // 选项卡
    tabGetQuote: 'Get Quote',
    tabServices: 'Logistics Solutions',
    tabBook: 'Book Service',
    tabTrack: 'Track Shipment',
    tabQuoteTitle: 'Professional Quote, Tailored for You',
    tabQuoteDesc:
      "Tell us your service requirements, and we'll provide the most competitive solution",
    tabServicesTitle: 'Smart Logistics Solutions',
    tabServicesDesc:
      'Explore our comprehensive service portfolio to find the perfect customized solution for your business',
    tabBookTitle: 'Convenient Service Booking',
    tabBookDesc: 'One-click booking, hassle-free: Start your logistics journey today',
    tabTrackTitle: 'Smart Shipment Tracking',
    tabTrackDesc:
      'One-click inquiry, full transparency: Enter tracking number for real-time shipment status',
    selectServiceType: 'Select Service Type',
    serviceFirstMile: 'First-Mile Logistics (Pickup, Customs, Clearance, FBA Transport)',
    serviceNationwideDelivery: 'Nationwide Delivery (Parcel & FTL Services)',
    serviceCustomSolutions: 'Custom Solutions (Storage, Designated Handling, Drop-shipping)',
    serviceValueAdded: 'Value-Added Services (Sorting, Relabeling, Repackaging, Customization)',
    serviceReverseLogistics: 'Reverse Logistics (Returns, Restocking, Inventory Disposal)',
    getQuoteButton: 'Get Quote',
    logisticsSolutionQuote: 'Logistics Solution Quote',
    learnMoreLogistics: 'Learn More Logistics Solutions',
    newCustomerBooking: 'New Customer Booking',
    existingCustomerLogin: 'Existing Customer Login',
    trackNowButton: 'Track Now',
    trackingSupportInfo: 'Supports: Air waybill, Ocean B/L, Container number, Customer reference',
    testimonialSectionTitle: 'Customer Testimonials',
    testimonialSectionSubtitle:
      'Real customer success stories showcasing our professional excellence',
    solutionAirFreightTitle: 'Air Freight Services',
    solutionAirFreightDesc: 'Fast, secure international air transport',
    solutionSeaFreightTitle: 'Ocean Freight Services',
    solutionSeaFreightDesc: 'Cost-effective ocean shipping solutions',
    solutionContractLogisticsTitle: 'Custom Logistics Solutions',
    solutionContractLogisticsDesc: 'Tailored supply chain management',
    solutionIntermodalTitle: 'Integrated Multimodal Solutions',
    solutionIntermodalDesc: 'Seamless sea, land, and air transport including IPI',
    solutionGlobalLocalTitle: 'Global Network, Local Expertise',
    solutionGlobalLocalDesc:
      'Local expertise and global reach providing market-focused professional services',
    solutionSupplyChainTitle: 'Supply Chain Optimization',
    solutionSupplyChainDesc: 'End-to-end supply chain solutions',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 响应式翻译的统计数据
const statistics = computed(() => [
  {
    value: '12,000+',
    description: getText('containersHandled'),
  },
  {
    value: '110+',
    description: getText('clientsServed'),
  },
  {
    value: '15,000+',
    description: getText('annualDeliveries'),
  },
  {
    value: '380,000+',
    description: getText('packagesProcessed'),
  },
  {
    value: '450+',
    description: getText('ownTrucks'),
  },
  {
    value: '22,000+',
    description: getText('warehouseSpace'),
  },
])

// 响应式翻译的核心服务
const coreServices = computed(() => [
  {
    id: 'end-to-end',
    title: getText('endToEndTitle'),
    description: getText('endToEndDesc'),
  },
  {
    id: 'warehouse-network',
    title: getText('warehouseNetworkTitle'),
    description: getText('warehouseNetworkDesc'),
  },
  {
    id: 'industry-experience',
    title: getText('industryExperienceTitle'),
    description: getText('industryExperienceDesc'),
  },
  {
    id: 'delivery-network',
    title: getText('deliveryNetworkTitle'),
    description: getText('deliveryNetworkDesc'),
  },
  {
    id: 'custom-solutions',
    title: getText('customSolutionsTitle'),
    description: getText('customSolutionsDesc'),
  },
  {
    id: 'transparent-operations',
    title: getText('transparentOperationsTitle'),
    description: getText('transparentOperationsDesc'),
  },
])

// 响应式翻译的客户评价
const testimonials = computed(() => [
  {
    id: 'chint',
    company: 'Chint Group',
    industry: locale.value === 'zh' ? '光伏新能源' : 'Solar Energy',
    logo: '⚡',
    content: getText('chintTestimonial'),
    author: getText('chintAuthor'),
    position: getText('chintPosition'),
    rating: 5,
  },
  {
    id: 'cushion-lab',
    company: 'Cushion Lab',
    industry: locale.value === 'zh' ? '电商零售' : 'E-commerce',
    logo: '🪑',
    content: getText('cushionLabTestimonial'),
    author: getText('cushionLabAuthor'),
    position: getText('cushionLabPosition'),
    rating: 5,
  },
])

// 响应式翻译的轮播图数据
const carouselSlides = computed(() => [
  {
    id: 'main-hero',
    title: getText('heroTitle'),
    subtitle: getText('heroSubtitle'),
    description: getText('heroDescription'),
    image: '',
    link: '/services',
    isMainHero: true,
  },
  {
    id: 'air-freight',
    title: getText('airFreightTitle'),
    subtitle: getText('airFreightSubtitle'),
    description: getText('airFreightDesc'),
    image:
      'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&h=1080&fit=crop&crop=center',
    link: '/services/air-freight',
  },
  {
    id: 'sea-freight',
    title: getText('seaFreightTitle'),
    subtitle: getText('seaFreightSubtitle'),
    description: getText('seaFreightDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1661881251976-9fc9bbb90c4e?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/sea-freight',
  },
  {
    id: 'contract-logistics',
    title: getText('contractLogisticsTitle'),
    subtitle: getText('contractLogisticsSubtitle'),
    description: getText('contractLogisticsDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1661559046208-0cef1cbf7b0b?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/contract-logistics',
  },
  {
    id: 'integrated-intermodal-solutions',
    title: getText('integratedIntermodalTitle'),
    subtitle: getText('integratedIntermodalSubtitle'),
    description: getText('integratedIntermodalDesc'),
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&h=1080&fit=crop&crop=center',
    link: '/services/integrated-intermodal-solutions',
  },
  {
    id: 'global-local-presence',
    title: getText('globalLocalTitle'),
    subtitle: getText('globalLocalSubtitle'),
    description: getText('globalLocalDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1664298313394-cdfdff0300a9?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/global-local-presence',
  },
  {
    id: 'supply-chain-solutions',
    title: getText('supplyChainTitle'),
    subtitle: getText('supplyChainSubtitle'),
    description: getText('supplyChainDesc'),
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center',
    link: '/services/supply-chain-solutions',
  },
])

// 合作伙伴
const partners = [
  { name: 'UPS', logo: '📦' },
  { name: 'USPS', logo: '📮' },
  { name: 'Amazon', logo: '🛒' },
  { name: 'Chint', logo: '⚡' },
  { name: 'Cushion Lab', logo: '🪑' },
  { name: 'Matson', logo: '🚢' },
]

// 轮播图状态
const currentSlide = ref(0)
const isAutoPlay = ref(true)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

// 轮播图方法
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.value.length
}

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? carouselSlides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  autoPlayTimer = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// 核心服务解决方案数据 - 响应式翻译
const coreServicesSolutions = computed(() => [
  {
    id: 'air-freight',
    title: getText('solutionAirFreightTitle'),
    description: getText('solutionAirFreightDesc'),
    image:
      'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&h=400&fit=crop&crop=center',
    link: '/services/air-freight',
  },
  {
    id: 'sea-freight',
    title: getText('solutionSeaFreightTitle'),
    description: getText('solutionSeaFreightDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1661881251976-9fc9bbb90c4e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/sea-freight',
  },
  {
    id: 'contract-logistics',
    title: getText('solutionContractLogisticsTitle'),
    description: getText('solutionContractLogisticsDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1661559046208-0cef1cbf7b0b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/contract-logistics',
  },
  {
    id: 'integrated-intermodal-solutions',
    title: getText('solutionIntermodalTitle'),
    description: getText('solutionIntermodalDesc'),
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop&crop=center',
    link: '/services/integrated-intermodal-solutions',
  },
  {
    id: 'global-local-presence',
    title: getText('solutionGlobalLocalTitle'),
    description: getText('solutionGlobalLocalDesc'),
    image:
      'https://plus.unsplash.com/premium_photo-1664298313394-cdfdff0300a9?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services/global-local-presence',
  },
  {
    id: 'supply-chain-solutions',
    title: getText('solutionSupplyChainTitle'),
    description: getText('solutionSupplyChainDesc'),
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop&crop=center',
    link: '/services/supply-chain-solutions',
  },
])

// 常见问题解答
// 响应式FAQ数据
const faqItems = computed(() => {
  const currentLang = locale.value as 'zh' | 'en'

  if (currentLang === 'en') {
    return [
      {
        id: '1',
        question: 'What are your main services?',
        answer:
          'We provide comprehensive supply chain services including international first-mile logistics, US nationwide delivery (parcel and FTL services), overseas warehousing, returns processing (reverse logistics), and value-added services such as sorting and relabeling.',
        category: 'Service Scope',
      },
      {
        id: '2',
        question: 'Where are your warehouses located in the US?',
        answer:
          'We operate strategically located self-operated warehouses in California, Texas, Georgia, and Indiana to support efficient nationwide distribution.',
        category: 'Warehouse Network',
      },
      {
        id: '3',
        question: 'How long does sea freight from China to US delivery take?',
        answer:
          'Complete process timeline: Pickup/customs clearance 1-2 days → International shipping (Matson express) 12-15 days → US customs clearance 1-3 days → Delivery to LA warehouse 12-36 hours → Receiving and shelving 12-36 hours → Last-mile delivery 2-5 days. Total: approximately 20-28 days with full transparency at each stage.',
        category: 'Transit Time',
      },
    ]
  }

  return [
    {
      id: '1',
      question: '你们提供哪些主要服务？',
      answer:
        '我们提供一站式的供应链服务，包括国际头程物流、美国全国派送（包裹和卡车专线）、海外仓储、退货处理（逆向物流）以及分拣、换标等增值服务。',
      category: '服务范围',
    },
    {
      id: '2',
      question: '你们的仓库在美国哪些地方？',
      answer:
        '我们在美国的加利福尼亚州、德克萨斯州、佐治亚州和印第安纳州均设有战略布局的自营仓库，以支持高效的全国分销。',
      category: '仓储网络',
    },
    {
      id: '3',
      question: '从中国海运到美国派送大概需要多久？',
      answer:
        '完整流程时效：揽收/报关1-2天 → 国际海运（Matson快船）12-15天 → 海关清关1-3天 → 派送至洛杉矶仓12-36小时 → 收货上架12-36小时 → 末端派送2-5天。全程约20-28天，每个环节透明可控。',
      category: '时效说明',
    },
  ]
})

// 选项卡功能
const activeTab = ref('quote')

// 响应式选项卡
const tabs = computed(() => [
  { id: 'quote', label: getText('tabGetQuote') },
  { id: 'services', label: getText('tabServices') },
  { id: 'book', label: getText('tabBook') },
  { id: 'track', label: getText('tabTrack') },
])

const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}

// 初始化滚动动画
const initScrollAnimations = () => {
  // 核心服务解决方案动画
  gsap.fromTo(
    '.solution-item',
    {
      y: 80,
      opacity: 0,
      scale: 0.9,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.core-solutions-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 统计数据动画
  gsap.fromTo(
    '.stat-item',
    {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.statistics-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 服务项目动画
  gsap.fromTo(
    '.service-item',
    {
      y: 80,
      opacity: 0,
      rotationX: 15,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 客户评价动画
  gsap.fromTo(
    '.testimonial-content',
    {
      x: -100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 合作伙伴动画
  gsap.fromTo(
    '.partner-item',
    {
      y: 40,
      opacity: 0,
      scale: 0.8,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.partners-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // FAQ列表动画
  gsap.fromTo(
    '.news-item',
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // CTA 区域动画
  gsap.fromTo(
    '.cta-content',
    {
      y: 60,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    },
  )

  // 选项卡内容区域动画
  gsap.fromTo(
    '.tab-content-section',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.tab-content-section',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    },
  )
}

onMounted(() => {
  // 延迟初始化动画，确保DOM已完全渲染
  setTimeout(() => {
    initScrollAnimations()
  }, 100)

  // 启动轮播图自动播放
  if (isAutoPlay.value) {
    startAutoPlay()
  }
})

onBeforeUnmount(() => {
  // 清理 ScrollTrigger 实例
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

  // 清理轮播图定时器
  stopAutoPlay()
})
</script>

<template>
  <div class="home">
    <!-- 轮播图Hero区域 -->
    <section class="relative overflow-hidden">
      <!-- 轮播图容器 -->
      <div class="relative h-screen lg:h-[80vh] min-h-[600px]">
        <!-- 轮播图内容 -->
        <div
          v-for="(slide, index) in carouselSlides"
          :key="slide.id"
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }"
        >
          <!-- 背景图片或科技背景 -->
          <div
            v-if="slide.isMainHero"
            class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          >
            <!-- 网络科技背景 -->
            <div class="absolute inset-0 opacity-20">
              <!-- 动态网络节点 -->
              <div
                class="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              ></div>
              <div
                class="absolute top-32 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"
              ></div>
              <div
                class="absolute bottom-20 left-32 w-2 h-2 bg-blue-300 rounded-full animate-pulse"
              ></div>
              <div
                class="absolute bottom-40 right-40 w-3 h-3 bg-cyan-300 rounded-full animate-ping"
              ></div>
              <div
                class="absolute top-20 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              ></div>

              <!-- 连接线 -->
              <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 0.6" />
                    <stop offset="100%" style="stop-color: #06b6d4; stop-opacity: 0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 80 Q200 120 350 100 T650 80"
                  stroke="url(#line-gradient)"
                  stroke-width="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M100 200 Q300 160 500 180 T800 200"
                  stroke="url(#line-gradient)"
                  stroke-width="2"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M150 120 Q400 80 650 120"
                  stroke="url(#line-gradient)"
                  stroke-width="1"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>

            <!-- 光线效果 -->
            <div
              class="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"
            ></div>
            <div
              class="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl"
            ></div>
          </div>
          <div
            v-else
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <!-- 渐变遮罩 -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"
            ></div>
          </div>

          <!-- 内容 -->
          <div
            class="relative z-10 flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8"
          >
            <div class="text-center max-w-4xl mx-auto">
              <!-- 服务标签 -->
              <div
                class="inline-flex items-center bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-8 border border-blue-400/30"
              >
                {{ getText('heroBadge') }}
              </div>

              <!-- 主标题 -->
              <h1
                v-if="slide.isMainHero"
                class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {{ getText('heroTitlePart1') }}
                <br class="hidden lg:block" />
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  >{{ getText('heroTitlePart2') }}</span
                >
              </h1>
              <h1
                v-else
                class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {{ slide.title }}
              </h1>

              <!-- 副标题 -->
              <h2
                v-if="!slide.isMainHero"
                class="text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 font-semibold"
              >
                {{ slide.subtitle }}
              </h2>

              <!-- 描述 -->
              <p
                v-if="slide.isMainHero"
                class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                {{ getText('heroDescPart1') }}
                <br class="hidden lg:block" />
                {{ getText('heroDescPart2') }}
                <span class="font-semibold text-cyan-400">{{ getText('heroDescHighlight') }}</span>
              </p>
              <p
                v-else
                class="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                {{ slide.description }}
              </p>

              <!-- 按钮组 -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <router-link :to="slide.link">
                  <BaseButton
                    variant="primary"
                    size="lg"
                    class="bg-blue-600 hover:bg-blue-700 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {{ getText('learnMore') }}
                  </BaseButton>
                </router-link>
                <router-link to="/contact">
                  <BaseButton
                    variant="outline"
                    size="lg"
                    class="border-2 border-white text-white hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-300 px-8 py-3 font-semibold transition-all duration-300 backdrop-blur-sm"
                  >
                    {{ getText('getQuote') }}
                  </BaseButton>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 导航箭头 -->
        <button
          @click="prevSlide"
          @mouseover="stopAutoPlay"
          @mouseleave="startAutoPlay"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <Icon name="chevron-left" size="md" class="text-white group-hover:text-gray-100" />
        </button>
        <button
          @click="nextSlide"
          @mouseover="stopAutoPlay"
          @mouseleave="startAutoPlay"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <Icon name="chevron-right" size="md" class="text-white group-hover:text-gray-100" />
        </button>

        <!-- 指示器 -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div class="flex space-x-3">
            <button
              v-for="(slide, index) in carouselSlides"
              :key="`indicator-${slide.id}`"
              @click="goToSlide(index)"
              @mouseover="stopAutoPlay"
              @mouseleave="startAutoPlay"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="{
                'bg-white scale-125': index === currentSlide,
                'bg-white/50 hover:bg-white/75': index !== currentSlide,
              }"
            />
          </div>
        </div>

        <!-- 核心优势标签 - 固定显示 -->
        <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
          <div class="flex flex-wrap gap-4 justify-center">
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 backdrop-blur-sm text-blue-200 border border-blue-400/30"
            >
              99% 取件率保证
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 backdrop-blur-sm text-cyan-200 border border-cyan-400/30"
            >
              东西海岸运输5-7天
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 backdrop-blur-sm text-blue-200 border border-blue-400/30"
            >
              近20年行业经验
            </span>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/20 backdrop-blur-sm text-cyan-200 border border-cyan-400/30"
            >
              全美4州自营仓库
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心服务与解决方案区域 -->
    <section class="py-16 lg:py-24 bg-gray-50 core-solutions-section">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <!-- 标题区域 -->
          <div class="text-center mb-16 lg:mb-20">
            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ getText('kenableSolutionsTitle') }}
            </h2>
            <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {{ getText('kenableSolutionsSubtitle') }}
              <!-- <a href="#" class="text-blue-600 hover:text-blue-800 font-medium ml-2">{{ getText('learnMore') }}</a> -->
            </p>
          </div>

          <!-- 服务网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <router-link
              v-for="service in coreServicesSolutions"
              :key="service.id"
              :to="service.link"
              class="group text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl solution-item"
            >
              <!-- 服务图片 -->
              <div class="mb-6 lg:mb-8">
                <div class="relative mx-auto">
                  <img
                    :src="service.image"
                    :alt="service.title"
                    class="w-44 h-44 lg:w-52 lg:h-52 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- 服务标题 -->
              <h3
                class="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
              >
                {{ service.title }}
              </h3>

              <!-- 服务描述（可选显示） -->
              <p class="text-gray-600 leading-relaxed hidden lg:block">
                {{ service.description }}
              </p>
            </router-link>
          </div>

          <!-- 底部了解更多按钮 -->
          <div class="text-center mt-16">
            <router-link to="/services">
              <BaseButton
                variant="primary"
                size="lg"
                class="bg-blue-600 hover:bg-blue-700 px-8 py-3 shadow-md hover:shadow-lg transition-all"
              >
                {{ getText('learnMore') }}
              </BaseButton>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计数据区域 - DSV风格 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden statistics-section"
    >
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>

      <div class="container-section relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            {{ getText('statisticsTitle') }}
          </h2>
        </div>

        <!-- 统计数字 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center mb-12"
        >
          <div v-for="(stat, index) in statistics" :key="index" class="text-white stat-item">
            <div class="text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-white">
              {{ stat.value }}
            </div>
            <div class="text-lg lg:text-xl text-gray-300 font-light leading-relaxed">
              {{ stat.description }}
            </div>
          </div>
        </div>

        <!-- 底部按钮 -->
        <div class="text-center">
          <router-link to="/warehouses">
            <BaseButton
              variant="outline"
              size="lg"
              class="border-2 border-white text-white hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-300 px-8 py-3 font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              {{ getText('viewNetwork') }}
            </BaseButton>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 核心服务解决方案区域 - 简洁风格 -->
    <section class="py-16 lg:py-24 bg-gray-100 services-section">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16 lg:mb-20">
            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {{ getText('whyChooseUsTitle') }}
            </h2>
          </div>

          <!-- 服务网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <div v-for="service in coreServices" :key="service.id" class="text-center service-item">
              <!-- 简洁图标 -->
              <div class="mb-8">
                <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <!-- 使用简洁的SVG图标或文字 -->
                  <div class="text-4xl text-gray-700">
                    <template v-if="service.id === 'end-to-end'">🔗</template>
                    <template v-else-if="service.id === 'warehouse-network'">🏭</template>
                    <template v-else-if="service.id === 'industry-experience'">📋</template>
                    <template v-else-if="service.id === 'delivery-network'">🚛</template>
                    <template v-else-if="service.id === 'custom-solutions'">⚙️</template>
                    <template v-else-if="service.id === 'transparent-operations'">🤝</template>
                  </div>
                </div>

                <!-- 服务标题 -->
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  {{ service.title }}
                </h3>
              </div>

              <!-- 服务描述 -->
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 选项卡组件区域 -->
    <section class="py-12 bg-gray-50">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <!-- 选项卡导航 - 居中设计 -->
          <div class="tabs-centered-container">
            <div class="tabs-fullwidth-container">
              <div class="tabs-list">
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="setActiveTab(tab.id)"
                  :class="['tab-item', activeTab === tab.id ? 'active' : '']"
                >
                  {{ tab.label }}
                </button>
              </div>
            </div>

            <!-- 选项卡内容 -->
            <div class="tab-content-container">
              <div class="pt-20 pb-16 px-12 tab-content-section">
                <transition
                  name="tab-content"
                  mode="out-in"
                  enter-active-class="transition-all duration-300 ease-out"
                  leave-active-class="transition-all duration-300 ease-in"
                  enter-from-class="opacity-0 transform translate-y-4"
                  enter-to-class="opacity-100 transform translate-y-0"
                  leave-from-class="opacity-100 transform translate-y-0"
                  leave-to-class="opacity-0 transform -translate-y-4"
                >
                  <!-- 统一的内容容器 -->
                  <div
                    :key="activeTab"
                    class="text-center text-lg"
                    style="min-height: 400px; max-width: 1200px; margin: 0 auto"
                  >
                    <!-- 获取报价选项卡 -->
                    <div v-if="activeTab === 'quote'" class="flex flex-col justify-center h-full">
                      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {{ getText('tabQuoteTitle') }}
                      </h2>
                      <p class="text-xl text-gray-600 mb-10 leading-relaxed">
                        {{ getText('tabQuoteDesc') }}
                      </p>
                      <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <select
                          class="px-6 py-4 border border-gray-300 rounded-lg text-lg min-w-64 bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
                        >
                          <option>{{ getText('selectServiceType') }}</option>
                          <option>{{ getText('serviceFirstMile') }}</option>
                          <option>{{ getText('serviceNationwideDelivery') }}</option>
                          <option>{{ getText('serviceCustomSolutions') }}</option>
                          <option>{{ getText('serviceValueAdded') }}</option>
                          <option>{{ getText('serviceReverseLogistics') }}</option>
                        </select>
                        <router-link to="/contact">
                          <BaseButton
                            variant="primary"
                            size="lg"
                            class="bg-blue-600 hover:bg-blue-700 px-8 shadow-md hover:shadow-lg transition-shadow"
                          >
                            {{ getText('getQuoteButton') }}
                          </BaseButton>
                        </router-link>
                      </div>
                    </div>

                    <!-- 物流解决方案选项卡 -->
                    <div
                      v-else-if="activeTab === 'services'"
                      class="flex flex-col justify-center h-full"
                    >
                      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {{ getText('tabServicesTitle') }}
                      </h2>
                      <p class="text-xl text-gray-600 mb-10 leading-relaxed">
                        {{ getText('tabServicesDesc') }}
                      </p>
                      <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <router-link to="/contact">
                          <BaseButton
                            variant="primary"
                            size="lg"
                            class="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-shadow"
                          >
                            {{ getText('logisticsSolutionQuote') }}
                          </BaseButton>
                        </router-link>
                        <router-link to="/services">
                          <BaseButton
                            variant="outline"
                            size="lg"
                            class="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all"
                          >
                            {{ getText('learnMoreLogistics') }}
                          </BaseButton>
                        </router-link>
                      </div>
                    </div>

                    <!-- 预订服务选项卡 -->
                    <div
                      v-else-if="activeTab === 'book'"
                      class="flex flex-col justify-center h-full"
                    >
                      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {{ getText('tabBookTitle') }}
                      </h2>
                      <p class="text-xl text-gray-600 mb-10 leading-relaxed">
                        {{ getText('tabBookDesc') }}
                      </p>
                      <div class="flex justify-center">
                        <router-link to="/contact">
                          <BaseButton
                            variant="primary"
                            size="lg"
                            class="bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-shadow px-12"
                          >
                            联系我们
                          </BaseButton>
                        </router-link>
                      </div>
                    </div>

                    <!-- 货物追踪选项卡 -->
                    <div
                      v-else-if="activeTab === 'track'"
                      class="flex flex-col justify-center h-full"
                    >
                      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {{ getText('tabTrackTitle') }}
                      </h2>
                      <p class="text-xl text-gray-600 mb-10 leading-relaxed">
                        {{ getText('tabTrackDesc') }}<br /><span class="text-base text-gray-500">{{
                          getText('trackingSupportInfo')
                        }}</span>
                      </p>

                      <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div class="flex-1 max-w-md">
                          <BaseInput
                            :placeholder="
                              locale === 'zh'
                                ? '请输入您的追踪号码...'
                                : 'Enter your tracking number...'
                            "
                            size="lg"
                            class="w-full shadow-sm"
                          />
                        </div>
                        <BaseButton
                          variant="primary"
                          size="lg"
                          :disabled="true"
                          class="bg-gray-400 cursor-not-allowed px-12 shadow-md opacity-50"
                        >
                          {{ getText('trackNowButton') }}
                        </BaseButton>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价区域 - 选项卡风格 -->
    <section class="py-16 lg:py-24 bg-gray-100 testimonial-section">
      <div class="container-section">
        <div class="max-w-6xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {{ getText('testimonialSectionTitle') }}
            </h2>
            <p class="text-lg text-gray-600">{{ getText('testimonialSectionSubtitle') }}</p>
          </div>

          <!-- 客户评价卡片 - 竖向排列 -->
          <div class="testimonial-content">
            <!-- 评价内容 -->
            <div class="max-w-4xl mx-auto space-y-16">
              <!-- 客户评价卡片 -->
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 rounded-2xl shadow-2xl relative overflow-hidden testimonial-card"
              >
                <!-- 装饰性引号 -->
                <div class="absolute top-6 right-6 opacity-10">
                  <Icon name="quote" size="4xl" class="text-white" />
                </div>

                <!-- 背景闪光效果 -->
                <div class="absolute inset-0 opacity-20">
                  <div class="shine-effect"></div>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center mb-8">
                    <div
                      class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                    >
                      <Icon name="star" size="md" class="text-white" />
                    </div>
                    <h4 class="font-black text-white text-2xl">
                      {{ getText('clientTestimonials') }}
                    </h4>
                  </div>

                  <blockquote
                    class="text-gray-100 italic leading-relaxed mb-8 text-xl lg:text-2xl font-light"
                  >
                    "{{ testimonial.content }}"
                  </blockquote>

                  <footer class="flex items-center justify-between">
                    <div>
                      <div class="font-bold text-white text-xl mb-1">
                        {{ testimonial.author }}
                      </div>
                      <div class="text-gray-300 text-lg mb-1">{{ testimonial.position }}</div>
                      <div class="text-blue-300 text-lg font-medium">{{ testimonial.company }}</div>
                    </div>

                    <!-- 五星评价 -->
                    <div class="flex items-center space-x-1">
                      <Icon
                        v-for="i in testimonial.rating"
                        :key="i"
                        name="star"
                        size="md"
                        class="text-yellow-400 fill-current"
                      />
                    </div>
                  </footer>
                </div>

                <!-- 背景装饰效果 -->
                <div
                  class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
                ></div>
                <div
                  class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
                ></div>
              </div>
            </div>

            <!-- 底部链接 -->
            <div class="text-center mt-12 lg:mt-16">
              <router-link
                to="/case-studies"
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors group"
              >
                {{ getText('viewMoreCasesText') }}
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴区域 - DSV风格 -->
    <section class="py-16 lg:py-24 bg-gray-50 partners-section">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 标题 -->
          <div class="text-center mb-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {{ getText('partnersTitle') }}
            </h2>
          </div>

          <!-- 合作伙伴标志 -->
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center"
          >
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="text-center opacity-60 hover:opacity-100 transition-opacity duration-300 partner-item"
            >
              <div class="text-3xl lg:text-4xl text-gray-600">{{ partner.logo }}</div>
              <div class="text-sm font-medium text-gray-600 mt-2">{{ partner.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ区域 - DSV风格 -->
    <section class="py-16 lg:py-24 bg-white faq-section">
      <div class="container-section">
        <div class="max-w-4xl mx-auto">
          <!-- 头部 -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div class="mb-8 lg:mb-0">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ getText('faqTitle') }}
              </h2>
            </div>
            <!--
            <router-link
              to="/faq"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors group"
            >
              查看全部问题
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>
            -->
          </div>

          <!-- FAQ列表 -->
          <div class="space-y-12">
            <article v-for="item in faqItems" :key="item.id" class="group cursor-pointer news-item">
              <!-- 分类 -->
              <div class="flex items-center space-x-4 mb-4">
                <span class="text-sm font-medium text-blue-600">{{ item.category }}</span>
              </div>

              <!-- 问题 -->
              <h3
                class="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight"
              >
                {{ item.question }}
              </h3>

              <!-- 回答 -->
              <p class="text-lg text-gray-600 leading-relaxed font-light">
                {{ item.answer }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 - DSV风格 -->
    <section
      class="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden cta-section"
    >
      <!-- 背景装饰效果 -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse"
        ></div>
      </div>

      <div class="container-section relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white cta-content">
          <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
            {{ getText('ctaTitle') }}
          </h2>
          <p class="text-xl lg:text-2xl mb-12 text-gray-300 font-light leading-relaxed">
            {{ getText('ctaSubtitle') }}
          </p>

          <!-- CTA按钮 -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <router-link
              to="/contact"
              class="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 group"
            >
              {{ getText('startCooperationButton') }}
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </router-link>

            <a
              href="/First‑Leg (Origin) Logistics Service Handbook.docx"
              download
              class="inline-flex items-center text-white hover:text-gray-300 font-medium text-lg transition-colors group"
            >
              {{ getText('downloadManualButton') }}
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 居中选项卡样式 - 底栏导航设计 */
.tabs-centered-container {
  max-width: 56rem; /* 设置最大宽度 896px (4xl) */
  margin: 0 auto; /* 居中对齐 */
  width: 100%;
}

.tabs-fullwidth-container {
  width: 100%;
  border-bottom: 3px solid #e5e7eb; /* 增加分割线粗细，与整体设计更协调 */
  margin-bottom: 8px; /* 增加与下方内容的间距 */
}

.tabs-list {
  display: flex;
  justify-content: center; /* 选项卡列表居中 */
  align-items: center;
  overflow-x: auto; /* 移动设备上允许水平滚动 */
  -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */
  scrollbar-width: none; /* Firefox 隐藏滚动条 */
  -ms-overflow-style: none; /* IE 隐藏滚动条 */
  min-height: 60px; /* 确保选项卡有足够的高度 */
}

.tabs-list::-webkit-scrollbar {
  display: none; /* Chrome/Safari 隐藏滚动条 */
}

.tab-item {
  padding: 16px 32px; /* 增加内边距，与lg按钮保持一致的视觉重量 */
  font-size: 18px; /* 增加字体大小到lg级别 */
  font-weight: 500;
  color: #4b5563; /* 未激活状态的深灰色 */
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  white-space: nowrap; /* 防止文字换行 */
  flex-shrink: 0; /* 防止在小屏幕上压缩 */
  /* 核心：为激活状态预留边框位置，并通过负外边距与父级边框对齐 */
  border-bottom: 4px solid transparent;
  margin-bottom: -3px; /* 负值等于父级border-bottom的宽度，实现无缝效果 */
  transition:
    color 0.3s ease,
    border-color 0.3s ease,
    font-weight 0.3s ease;
}

/* 移动设备上的选项卡调整 */
@media (max-width: 768px) {
  .tabs-centered-container {
    max-width: 100%; /* 移动端占满宽度 */
    padding: 0 1rem; /* 添加左右内边距 */
  }

  .tabs-list {
    justify-content: flex-start; /* 移动端左对齐，避免过度居中 */
    gap: 4px; /* 移动设备上选项卡之间的间距 */
  }

  .tab-item {
    padding: 14px 20px; /* 移动端略小但保持合理比例 */
    font-size: 16px; /* 移动端字体稍小 */
  }
}

/* 悬停状态 */
.tab-item:not(.active):hover {
  color: #2563eb; /* 品牌主蓝色 */
  border-bottom-color: #93c5fd; /* 悬停时显示淡蓝色下划线 */
}

/* 焦点状态 - 移除轮廓线，只改变颜色 */
.tab-item:focus {
  color: #2563eb;
  outline: none; /* 移除轮廓线 */
}

/* 激活状态 */
.tab-item.active {
  color: #2563eb; /* 品牌主蓝色 */
  font-weight: 600; /* 加粗 */
  border-bottom: 4px solid #2563eb; /* 使用4px的品牌色边框，比父级3px更突出 */
}

/* 激活状态的焦点样式 - 移除轮廓线 */
.tab-item.active:focus {
  outline: none; /* 移除激活状态的轮廓线 */
}

/* 选项卡内容区域样式 */
.tab-content-container {
  background-color: #f9fafb; /* bg-gray-50 */
  width: 100%;
}

/* 内容区域尺寸控制 */
.tab-content-section {
  /* 可以在这里添加自定义的间距和尺寸 */
}

/* 响应式内容区域调整 */
@media (max-width: 768px) {
  .tab-content-section {
    padding-top: 3rem; /* pt-12 */
    padding-bottom: 2.5rem; /* pb-10 */
    padding-left: 1.5rem; /* px-6 */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .tab-content-section {
    padding-top: 5rem; /* pt-20 */
    padding-bottom: 4rem; /* pb-16 */
    padding-left: 3rem; /* px-12 */
    padding-right: 3rem;
  }
}
/* 选项卡过渡动画 */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.3s ease;
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

/* 组件特定样式 */

/* 客户评价过渡动画 */
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.5s ease;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 选项卡按钮悬停效果 */
.testimonial-tab-button {
  transition: all 0.3s ease;
}

.testimonial-tab-button:hover {
  transform: translateY(-2px);
}

/* 星星填充效果 */
.fill-current {
  fill: currentColor;
}

/* 背景闪光效果 */
.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: skewX(-25deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 客户评价卡片悬停效果 */
.testimonial-card:hover .shine-effect {
  animation-duration: 1.5s;
}

/* 轮播图样式 */
.carousel-slide {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

/* 轮播图导航按钮样式 */
.carousel-nav-button {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.carousel-nav-button:hover {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* 轮播图指示器动画 */
.carousel-indicator {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-indicator:hover {
  transform: scale(1.2);
}

/* 背景图片预加载和优化 */
.carousel-bg {
  background-attachment: fixed;
  will-change: background-image;
}

@media (max-width: 768px) {
  .carousel-bg {
    background-attachment: scroll;
  }
}
</style>
