// i18n类型定义
export type Locale = 'zh' | 'en'

export interface LocaleMessages {
  nav: {
    home: string
    about: string
    services: string
    warehouses: string
    caseStudies: string
    technology: string
    contact: string
  }
  common: {
    loading: string
    error: string
    success: string
    submit: string
    cancel: string
    confirm: string
    back: string
    next: string
    prev: string
    more: string
    less: string
    all: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  services: {
    title: string
    description: string
    airFreight: string
    seaFreight: string
    contractLogistics: string
    firstLegLogistics: string
    globalLocalPresence: string
    nationwideDelivery: string
    overseasWarehouses: string
    reverseLogistics: string
    integratedIntermodalSolutions: string
    supplyChainSolutions: string
    valueAddedServices: string
  }
  footer: {
    company: string
    services: string
    resources: string
    legal: string
    contact: string
    copyright: string
  }
}

// 声明模块类型
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends LocaleMessages {}
}
