<template>
  <div class="language-switcher" ref="switcherRef">
    <!-- 触发按钮 -->
    <button
      @click="toggleDropdown"
      class="language-switcher__trigger"
      :class="{ 'is-active': isOpen }"
      :aria-label="`切换语言，当前语言：${currentLanguage.name}`"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <!-- 地球图标 -->
      <svg
        class="language-switcher__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          stroke-width="2"
        />
        <path d="M2 12h20" stroke="currentColor" stroke-width="2" />
      </svg>

      <!-- 当前语言显示 - 移动端简化 -->
      <span class="language-switcher__current">
        <span class="hidden md:inline">{{ currentLanguage.name }}</span>
        <span class="md:hidden">{{ currentLanguage.code === 'zh' ? '中' : 'EN' }}</span>
      </span>

      <!-- 箭头图标 -->
      <svg
        class="language-switcher__arrow"
        :class="{ 'is-rotated': isOpen }"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- 下拉菜单 -->
    <transition name="dropdown" @enter="onEnter" @leave="onLeave">
      <div
        v-show="isOpen"
        class="language-switcher__dropdown"
        role="menu"
        :aria-labelledby="'language-switcher-button'"
      >
        <div class="language-switcher__menu">
          <button
            v-for="lang in availableLocales"
            :key="lang.code"
            @click="selectLanguage(lang.code)"
            class="language-switcher__option"
            :class="{ 'is-current': lang.code === currentLocale }"
            role="menuitem"
            :aria-label="`切换到${lang.name}`"
          >
            <span class="language-switcher__option-name">
              {{ lang.name }}
            </span>
            <span
              v-if="lang.code === currentLocale"
              class="language-switcher__check"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/i18n/types'
import { setStoredLocale } from '@/i18n'

const { locale } = useI18n()

// 响应式状态
const isOpen = ref(false)
const switcherRef = ref<HTMLElement>()

// 当前语言
const currentLocale = computed(() => locale.value as Locale)

// 可用语言列表
const availableLocales = [
  { code: 'zh' as Locale, name: '中文' },
  { code: 'en' as Locale, name: 'English' },
]

// 当前语言对象
const currentLanguage = computed(
  () => availableLocales.find((lang) => lang.code === currentLocale.value) || availableLocales[0],
)

// 切换下拉菜单
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// 选择语言
const selectLanguage = (newLocale: Locale) => {
  // 更新i18n locale
  locale.value = newLocale

  // 保存到localStorage
  setStoredLocale(newLocale)

  // 关闭下拉菜单
  isOpen.value = false
}

// 处理点击外部关闭
const handleClickOutside = (event: Event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// 处理 ESC 键关闭
const handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

// 动画进入回调
const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.offsetHeight // 强制重排
  element.style.height = element.scrollHeight + 'px'
}

// 动画离开回调
const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.scrollHeight + 'px'
  element.offsetHeight // 强制重排
  element.style.height = '0'
}

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscKey)
})
</script>

<style scoped>
.language-switcher {
  @apply relative inline-block;
}

.language-switcher__trigger {
  @apply flex items-center gap-2 px-3 py-2 text-sm font-medium;
  @apply text-gray-700 hover:text-blue-600 hover:bg-gray-50;
  @apply border border-gray-200 rounded-lg;
  @apply transition-all duration-200 ease-in-out;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1;
  @apply cursor-pointer;
  min-width: 120px;
  min-height: 44px;
}

.language-switcher__trigger.is-active {
  @apply text-blue-600 bg-blue-50 border-blue-200;
}

.language-switcher__trigger:hover {
  @apply shadow-sm;
}

.language-switcher__icon {
  @apply text-gray-500 flex-shrink-0;
  transition: color 0.2s ease;
}

.language-switcher__trigger.is-active .language-switcher__icon,
.language-switcher__trigger:hover .language-switcher__icon {
  @apply text-blue-600;
}

.language-switcher__current {
  @apply flex-1 text-left;
}

.language-switcher__arrow {
  @apply text-gray-400 flex-shrink-0;
  @apply transition-transform duration-200 ease-in-out;
}

.language-switcher__arrow.is-rotated {
  @apply rotate-180;
}

.language-switcher__dropdown {
  @apply absolute top-full left-0 right-0 z-50;
  @apply mt-1 overflow-hidden;
  @apply bg-white border border-gray-200 rounded-lg shadow-lg;
  @apply min-w-full;
}

.language-switcher__menu {
  @apply py-1;
}

.language-switcher__option {
  @apply w-full flex items-center justify-between px-3 py-2;
  @apply text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50;
  @apply transition-colors duration-150 ease-in-out;
  @apply cursor-pointer;
  @apply focus:outline-none focus:bg-blue-50 focus:text-blue-600;
}

.language-switcher__option.is-current {
  @apply text-blue-600 bg-blue-50;
}

.language-switcher__option-name {
  @apply flex-1 text-left;
}

.language-switcher__check {
  @apply text-blue-600 flex-shrink-0;
}

/* 下拉动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-200 ease-in-out;
  transform-origin: top;
}

.dropdown-enter-from {
  @apply opacity-0;
  transform: scaleY(0.95) translateY(-4px);
}

.dropdown-leave-to {
  @apply opacity-0;
  transform: scaleY(0.95) translateY(-4px);
}

/* 移动端适配 - 大厂标准 */
@media (max-width: 1023px) {
  .language-switcher__trigger {
    @apply px-3 py-3 text-sm border-0 bg-transparent hover:bg-gray-100;
    min-width: 44px;
    min-height: 44px;
    /* 大厂标准：44px最小触摸目标 */
  }

  .language-switcher__trigger:hover .language-switcher__current {
    @apply text-gray-700;
  }

  .language-switcher__icon,
  .language-switcher__arrow {
    @apply hidden;
  }

  .language-switcher__current {
    @apply text-center font-medium text-gray-600;
    font-size: 14px;
  }

  .language-switcher__trigger.is-active {
    @apply bg-blue-50 text-blue-700;
  }

  .language-switcher__trigger.is-active .language-switcher__current {
    @apply text-blue-700;
  }

  .language-switcher__dropdown {
    @apply right-0 left-auto;
    min-width: 120px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .language-switcher__trigger {
    @apply bg-gray-800 border-gray-600 text-gray-200;
    @apply hover:bg-gray-700 hover:text-white;
  }

  .language-switcher__trigger.is-active {
    @apply bg-blue-900 border-blue-700 text-blue-300;
  }

  .language-switcher__dropdown {
    @apply bg-gray-800 border-gray-600;
  }

  .language-switcher__option {
    @apply text-gray-200 hover:text-white hover:bg-gray-700;
  }

  .language-switcher__option.is-current {
    @apply text-blue-300 bg-blue-900;
  }
}
</style>
