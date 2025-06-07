import type { ValidationError } from '@/types'

// 延迟函数
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 格式化数字（添加千分位分隔符）
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US')
}

// 格式化百分比
export const formatPercentage = (value: number, decimal: number = 1): string => {
  return `${value.toFixed(decimal)}%`
}

// 验证邮箱格式
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 验证手机号码（美国格式）
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+1)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/
  return phoneRegex.test(phone)
}

// 生成唯一ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

// 截取文本
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// 首字母大写
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// 转换为URL友好的slug
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/[\s_-]+/g, '-') // 替换空格和下划线为连字符
    .replace(/^-+|-+$/g, '') // 移除开头和结尾的连字符
}

// 获取文件扩展名
export const getFileExtension = (filename: string): string => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2)
}

// 检查是否为移动设备
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

// 平滑滚动到元素
export const scrollToElement = (
  elementId: string, 
  offset: number = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.offsetTop - offset
    window.scrollTo({
      top,
      behavior
    })
  }
}

// 获取滚动进度（0-100）
export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  return Math.round((scrollTop / scrollHeight) * 100)
}

// 检查元素是否在视口中
export const isElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// 深拷贝对象
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as any
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any
  
  const clonedObj = {} as any
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key])
    }
  }
  return clonedObj
}

// 等待元素加载
export const waitForElement = (selector: string, timeout: number = 5000): Promise<Element> => {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector)
    if (element) {
      resolve(element)
      return
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector)
      if (element) {
        obs.disconnect()
        resolve(element)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    setTimeout(() => {
      observer.disconnect()
      reject(new Error(`Element ${selector} not found within ${timeout}ms`))
    }, timeout)
  })
}

// 表单验证辅助函数
export const validateForm = (data: Record<string, any>, rules: Record<string, (value: any) => string | null>): ValidationError[] => {
  const errors: ValidationError[] = []
  
  for (const field in rules) {
    const value = data[field]
    const error = rules[field](value)
    if (error) {
      errors.push({ field, message: error })
    }
  }
  
  return errors
}

// 格式化文件大小
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 获取随机颜色
export const getRandomColor = (): string => {
  const colors = [
    '#228B22', '#FF6B35', '#4F46E5', '#059669', '#DC2626', 
    '#7C3AED', '#DB2777', '#EA580C', '#0891B2', '#65A30D'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
} 