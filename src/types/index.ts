// 基础类型定义
export interface BaseEntity {
  id: string
  createdAt?: Date
  updatedAt?: Date
}

// 导航菜单类型
export interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
  icon?: string
}

// 服务类型
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  imageUrl?: string
}

// 仓库位置类型
export interface WarehouseLocation {
  id: string
  name: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  capacity: string
  services: string[]
  coverageArea: string[]
  imageUrls: string[]
}

// 客户案例类型
export interface CaseStudy {
  id: string
  customerName: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
  }[]
  testimonial?: string
  imageUrl?: string
  tags: string[]
}

// 团队成员类型
export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  imageUrl: string
  linkedin?: string
  email?: string
}

// 统计数据类型
export interface Statistic {
  label: string
  value: string
  suffix?: string
  description?: string
  icon?: string
}

// 联系表单类型
export interface ContactForm {
  name: string
  email: string
  company: string
  phone?: string
  service: string
  message: string
  agreeToPrivacy: boolean
}

// FAQ类型
export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

// 时间轴事件类型
export interface TimelineEvent {
  year: string
  title: string
  description: string
  imageUrl?: string
  highlight?: boolean
}

// 合作伙伴类型
export interface Partner {
  id: string
  name: string
  logoUrl: string
  websiteUrl?: string
  category: string
}

// 技术能力类型
export interface TechCapability {
  id: string
  name: string
  description: string
  features: string[]
  systemUrl?: string
  screenshotUrls: string[]
}

// 响应式断点类型
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// 优先级类型
export type Priority = 'low' | 'medium' | 'high'

// 状态类型
export type Status = 'pending' | 'in-progress' | 'completed' | 'cancelled'

// 动画配置类型
export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
  trigger?: 'load' | 'scroll' | 'hover' | 'click'
}

// API响应类型
export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  errors?: string[]
}

// 表单验证错误类型
export interface ValidationError {
  field: string
  message: string
}

// SEO Meta类型
export interface SEOMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
} 