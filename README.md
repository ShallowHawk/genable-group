# KENABLE GROUP 企业官网

> 专业跨境物流服务商官方网站 - 基于 Vue 3 + TypeScript + Vite 构建

## 📋 项目概览

KENABLE GROUP是一家专注跨境物流服务的专业公司，成立于2004年，拥有20+年行业经验。本项目是其企业官方网站，展示公司服务能力、仓储网络、客户案例等核心信息。

### 🎯 核心特色

- **🚀 现代化技术栈** - Vue 3 + TypeScript + Vite + TailwindCSS
- **📱 响应式设计** - 完美适配手机、平板、桌面端
- **🎨 专业UI设计** - 简洁现代的企业风格，绿色#228B22和橙色#FF6B35品牌色彩
- **⚡ 高性能优化** - 代码分割、懒加载、资源压缩
- **🔍 SEO友好** - 完整meta标签、结构化数据、网站地图
- **🌐 国际化准备** - 支持中英文多语言扩展

## 🛠️ 技术栈

### 前端框架
- **Vue 3** - 渐进式JavaScript框架
- **TypeScript** - 类型安全的JavaScript超集
- **Vite** - 下一代前端构建工具
- **Vue Router** - 官方路由管理器

### UI与样式
- **TailwindCSS** - 实用工具优先的CSS框架
- **Headless UI** - 无样式可访问组件库
- **Lucide Icons** - 美观简洁的图标库
- **GSAP** - 高性能动画库

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Vitest** - 单元测试框架
- **TypeScript** - 类型检查

## 📁 项目结构

```
KGWeb/
├── public/                 # 静态资源
│   ├── robots.txt         # 搜索引擎爬虫配置
│   └── sitemap.xml        # 网站地图
├── src/
│   ├── assets/            # 资源文件
│   │   └── main.css       # 全局样式
│   ├── components/        # 组件目录
│   │   ├── icons/         # 图标组件
│   │   ├── layout/        # 布局组件
│   │   ├── sections/      # 页面区块组件
│   │   └── ui/            # UI基础组件
│   ├── composables/       # 组合式函数
│   ├── router/            # 路由配置
│   ├── stores/            # 状态管理
│   ├── types/             # TypeScript类型定义
│   ├── utils/             # 工具函数
│   └── views/             # 页面组件
├── index.html             # HTML入口文件
├── package.json           # 项目依赖配置
├── tailwind.config.js     # TailwindCSS配置
├── tsconfig.json          # TypeScript配置
└── vite.config.ts         # Vite构建配置
```

## 🌟 主要功能

### 🏠 首页 (HomeView)
- Hero品牌展示区域
- 核心数据统计
- 服务体系展示
- 客户证言
- 合作伙伴
- 新闻动态

### 📖 关于我们 (AboutView)
- 公司发展历程
- 核心团队介绍
- 企业文化价值观
- 发展里程碑

### 🚚 服务体系 (ServicesView)
- 国际运输服务
- 仓储管理
- 清关服务
- 最后一公里配送
- 退货处理

### 🏭 仓储网络 (WarehousesView)
- 4大配送中心介绍
- 仓储管理系统(WMS)
- 服务流程展示
- 地理位置分布

### 📊 客户案例 (CaseStudiesView)
- 成功案例展示
- 行业解决方案
- 客户证言
- 业务数据分析

### 📞 联系我们 (ContactView)
- 多渠道联系方式
- 智能联系表单
- 办公地址信息
- 常见问题解答

### 🔍 其他页面
- 货物跟踪系统
- 价格方案
- 新闻动态
- 招聘信息
- 客户登录

## 🎨 设计系统

### 🎨 品牌色彩
- **主色调**: 绿色 `#228B22` (Forest Green)
- **辅助色**: 橙色 `#FF6B35` (Orange Red)
- **中性色**: 灰色系列

### 📐 响应式断点
- **Mobile**: `<768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `1024px - 1440px`
- **Large**: `>1440px`

### 🧩 核心组件
- **BaseButton** - 按钮组件 (5种变体)
- **BaseCard** - 卡片组件 (4种变体)
- **BaseInput** - 输入框组件
- **Icon** - 图标组件
- **StatCard** - 统计卡片

## 🚀 开发指南

### 环境要求
- Node.js 18+
- npm 9+ 或 yarn 1.22+

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发服务器
```bash
npm run dev
# 或
yarn dev
```

服务器将运行在 `http://localhost:5173`

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 预览生产版本
```bash
npm run preview
# 或
yarn preview
```

### 代码检查
```bash
npm run lint
# 或
yarn lint
```

### 类型检查
```bash
npm run type-check
# 或
yarn type-check
```

### 运行测试
```bash
npm run test
# 或
yarn test
```

## 📦 部署指南

### 静态部署

项目构建后会生成 `dist` 目录，可直接部署到以下平台：

- **Vercel** - 推荐用于快速部署
- **Netlify** - 静态网站托管
- **GitHub Pages** - 免费静态托管
- **Cloudflare Pages** - 全球CDN加速

### 服务器部署

1. 构建生产版本：
   ```bash
   npm run build
   ```

2. 将 `dist` 目录上传到服务器

3. 配置Nginx或Apache服务器

### Vercel部署示例

1. 安装Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 部署项目：
   ```bash
   vercel --prod
   ```

### Nginx配置示例

```nginx
server {
    listen 80;
    server_name www.kenablegroup.com;
    root /var/www/kgweb/dist;
    index index.html;

    # 单页应用路由配置
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## 🔧 配置文件说明

### `vite.config.ts`
- 构建优化配置
- 代码分割策略
- 资源处理规则

### `tailwind.config.js`
- 品牌色彩定义
- 响应式断点
- 自定义工具类

### `tsconfig.json`
- TypeScript编译选项
- 路径别名配置
- 类型检查规则

## 📈 性能优化

- ⚡ **代码分割**: Vue、UI组件、工具库分别打包
- 🗜️ **资源压缩**: Terser压缩，移除调试代码
- 💾 **缓存策略**: 文件名hash化，充分利用浏览器缓存
- 🖼️ **图片优化**: WebP格式，响应式图片
- 📦 **懒加载**: 路由和组件按需加载

## 🔍 SEO优化

- 📝 **Meta标签**: 每页面独立的标题、描述、关键词
- 🌐 **Open Graph**: 社交媒体分享优化
- 🔗 **结构化数据**: Schema.org组织信息
- 🗺️ **网站地图**: XML sitemap
- 🤖 **Robots.txt**: 搜索引擎爬虫指导

## 🐛 故障排除

### 常见问题

1. **CSS样式不生效**
   - 检查TailwindCSS配置
   - 确认CSS文件正确导入

2. **路由404错误**
   - 确认路由配置正确
   - 检查服务器配置支持SPA

3. **TypeScript错误**
   - 运行 `npm run type-check`
   - 检查类型定义是否正确

4. **构建失败**
   - 清理 `node_modules` 重新安装
   - 检查依赖版本兼容性

## 📞 技术支持

如有技术问题，请联系开发团队：

- **邮箱**: tech@kenablegroup.com
- **GitHub**: [项目仓库地址]
- **文档**: [在线文档地址]

## 📄 许可证

本项目为 KENABLE GROUP 企业私有项目，版权所有。

---

**© 2024 KENABLE GROUP. All rights reserved.**
