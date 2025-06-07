import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages部署配置
  base: process.env.NODE_ENV === 'production' ? '/genable-group/' : '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 开发服务器配置
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  // 构建优化配置
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 代码分割配置
    rollupOptions: {
      output: {
        // 手动代码分割
        manualChunks: {
          // Vue相关库
          vue: ['vue', 'vue-router'],
          // UI组件
          ui: ['@headlessui/vue'],
          // 工具库
          utils: ['zod'],
          // 动画库
          animations: ['gsap'],
        },
        // 文件命名规则
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || '')) {
            return 'assets/images/[name]-[hash].[ext]'
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return 'assets/fonts/[name]-[hash].[ext]'
          }
          if (ext === 'css') {
            return 'assets/css/[name]-[hash].[ext]'
          }
          return 'assets/[ext]/[name]-[hash].[ext]'
        },
      },
      // 外部依赖优化
      external: [],
    },
    // 文件大小警告阈值
    chunkSizeWarningLimit: 1000,
    // 资源内联阈值
    assetsInlineLimit: 4096,
  },
  // CSS配置
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  // 优化依赖
  optimizeDeps: {
    include: ['vue', 'vue-router', '@headlessui/vue', 'zod', 'gsap'],
    exclude: [],
  },
  // 静态资源处理
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  // 预览服务器配置
  preview: {
    host: true,
    port: 4173,
    open: true,
  },
  // 环境变量配置
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
})
