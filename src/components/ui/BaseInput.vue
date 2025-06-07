<script setup lang="ts">
import { computed, ref } from 'vue'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outlined' | 'filled'
  error?: boolean | string
  errorMessage?: string
  label?: string
  required?: boolean
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md',
  variant: 'default',
  error: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  input: [event: Event]
}>()

const inputRef = ref<HTMLInputElement>()

const inputClasses = computed(() => {
  const hasError = !!props.error
  return [
    'w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2',
    {
      // 尺寸
      'px-3 py-2 text-sm': props.size === 'sm',
      'px-4 py-3 text-base': props.size === 'md',
      'px-5 py-4 text-lg': props.size === 'lg',

      // 变体
      'border-gray-300 focus:border-primary-500 focus:ring-primary-200':
        props.variant === 'default' && !hasError,
      'border-2 border-gray-300 focus:border-primary-500':
        props.variant === 'outlined' && !hasError,
      'bg-gray-50 border-gray-200 focus:bg-white focus:border-primary-500':
        props.variant === 'filled' && !hasError,

      // 错误状态
      'border-red-500 focus:border-red-500 focus:ring-red-200': hasError,

      // 禁用状态
      'bg-gray-100 cursor-not-allowed': props.disabled,
      'bg-gray-50': props.readonly,
    },
  ]
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const focus = () => {
  inputRef.value?.focus()
}

defineExpose({
  focus,
  inputRef,
})
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <input
      ref="inputRef"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="inputClasses"
      @input="handleInput"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />

    <p v-if="error && (errorMessage || typeof error === 'string')" class="text-sm text-red-600">
      {{ typeof error === 'string' ? error : errorMessage }}
    </p>
  </div>
</template>
