<template>
  <section
    class="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
    }"
  >
    <div class="container-section text-center">
      <div class="space-y-8">
        <h1 class="text-white font-black text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
          赋能客户
          <span class="block text-primary-300 mt-2">共创成功</span>
        </h1>
        <div class="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
        <p class="text-gray-100 font-light text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          我们相信，客户的成功才是我们真正的成功。<br />
          每一个案例，都是我们专业能力与服务承诺的真实见证。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 这个组件不需要任何 props 或响应式数据
</script>

<style scoped>
/* 确保背景图片在所有设备上都能正确显示 */
section {
  background-attachment: fixed;
}

/* 在移动设备上禁用 fixed attachment 以提高性能 */
@media (max-width: 768px) {
  section {
    background-attachment: scroll;
  }
}
</style>
