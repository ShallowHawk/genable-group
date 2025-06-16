<template>
  <PageLayout
    page-title="技术与精细管理"
    page-description="先进的物流技术系统和精细化管理能力，为您提供智能化的供应链解决方案。"
  >
    <!-- 技术管理页面Banner -->
    <TechnologyHero />

    <!-- 核心技术平台展示 -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- 左侧文案 -->
            <div class="space-y-6">
              <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                一体化的供应链<br />
                <span class="text-primary-600">"智慧大脑"</span>
              </h2>
              <div class="w-20 h-1 bg-primary-500"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                在可耐博达，技术不只是工具，而是我们服务的核心驱动力。我们通过自研的、集成的
                <strong class="text-primary-600">SCM（供应链管理）</strong> 和
                <strong class="text-primary-600">WMS（仓库管理）</strong> 系统，
                打通了从订单、运输、仓储到派送的全链路信息流，实现前所未有的效率、透明度和精准度。
              </p>
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">99.8%</div>
                  <div class="text-sm text-gray-600">订单准确率</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">24/7</div>
                  <div class="text-sm text-gray-600">实时监控</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">15分钟</div>
                  <div class="text-sm text-gray-600">平均响应时间</div>
                </div>
              </div>
            </div>

            <!-- 右侧系统Dashboard -->
            <div class="relative">
              <div class="bg-gray-900 rounded-t-lg p-3">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div class="flex-1 text-center text-gray-300 text-sm">供应链管理系统</div>
                </div>
              </div>
              <div class="bg-white border-2 border-t-0 border-gray-200 rounded-b-lg p-6 shadow-2xl">
                <!-- 模拟Dashboard界面 -->
                <div class="space-y-4">
                  <!-- 顶部KPI指标 -->
                  <div class="grid grid-cols-4 gap-3">
                    <div class="bg-blue-50 p-3 rounded-lg">
                      <div class="text-xs text-blue-600 font-semibold">活跃订单</div>
                      <div class="text-lg font-bold text-blue-900">2,847</div>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg">
                      <div class="text-xs text-green-600 font-semibold">在途货物</div>
                      <div class="text-lg font-bold text-green-900">1,234</div>
                    </div>
                    <div class="bg-purple-50 p-3 rounded-lg">
                      <div class="text-xs text-purple-600 font-semibold">库存SKU</div>
                      <div class="text-lg font-bold text-purple-900">15,678</div>
                    </div>
                    <div class="bg-orange-50 p-3 rounded-lg">
                      <div class="text-xs text-orange-600 font-semibold">运输车辆</div>
                      <div class="text-lg font-bold text-orange-900">456</div>
                    </div>
                  </div>

                  <!-- 实时状态图表区域 -->
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                      <div class="text-sm font-semibold text-gray-700">实时运营状态</div>
                      <div class="flex space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div class="text-xs text-green-600">系统运行正常</div>
                      </div>
                    </div>
                    <!-- 模拟图表 -->
                    <div
                      class="h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded relative overflow-hidden"
                    >
                      <div class="absolute inset-0 flex items-end justify-around p-2">
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 60%"></div>
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 80%"></div>
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 45%"></div>
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 95%"></div>
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 70%"></div>
                        <div class="w-3 bg-blue-500 rounded-t" style="height: 55%"></div>
                      </div>
                    </div>
                  </div>

                  <!-- 最新操作记录 -->
                  <div class="space-y-2">
                    <div class="text-xs font-semibold text-gray-700">最新操作记录</div>
                    <div class="space-y-1 text-xs">
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">订单 #KNB-2024-001 已发货</span>
                        <span class="text-green-600">✓</span>
                      </div>
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">仓库 LA-01 库存更新</span>
                        <span class="text-blue-600">•</span>
                      </div>
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">车辆 T-456 已到达配送点</span>
                        <span class="text-orange-600">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 装饰性阴影 -->
              <div
                class="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl -z-10 blur-xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 区块一：国际货代 & 头程物流的数字化 -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- 左侧信息图 -->
            <div class="relative">
              <div class="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <!-- 电子提单流转信息图 -->
                <div class="space-y-6">
                  <div class="text-center">
                    <h4 class="text-lg font-bold text-gray-900 mb-2">电子提单数字化流转</h4>
                    <div class="w-16 h-0.5 bg-primary-500 mx-auto"></div>
                  </div>

                  <!-- 流程步骤 -->
                  <div class="space-y-4">
                    <!-- 步骤1 -->
                    <div
                      class="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                    >
                      <div
                        class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        1
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-gray-900">发货方提交</div>
                        <div class="text-sm text-gray-600">订单信息自动录入系统</div>
                      </div>
                      <div class="text-green-600">✓</div>
                    </div>

                    <!-- 连接线 -->
                    <div class="flex justify-center">
                      <div class="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    <!-- 步骤2 -->
                    <div
                      class="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500"
                    >
                      <div
                        class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        2
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-gray-900">海关审核</div>
                        <div class="text-sm text-gray-600">智能清关系统预处理</div>
                      </div>
                      <div class="text-green-600">✓</div>
                    </div>

                    <!-- 连接线 -->
                    <div class="flex justify-center">
                      <div class="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    <!-- 步骤3 -->
                    <div
                      class="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500"
                    >
                      <div
                        class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        3
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-gray-900">船公司确认</div>
                        <div class="text-sm text-gray-600">ETD/ETA实时同步</div>
                      </div>
                      <div class="text-orange-500 animate-pulse">●</div>
                    </div>

                    <!-- 连接线 -->
                    <div class="flex justify-center">
                      <div class="w-0.5 h-6 bg-gray-300"></div>
                    </div>

                    <!-- 步骤4 -->
                    <div
                      class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400"
                    >
                      <div
                        class="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold"
                      >
                        4
                      </div>
                      <div class="flex-1">
                        <div class="font-semibold text-gray-900">目的港交付</div>
                        <div class="text-sm text-gray-600">全程追踪完成</div>
                      </div>
                      <div class="text-gray-400">○</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧文案 -->
            <div class="space-y-6">
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                国际货代 & 头程物流：<br />
                <span class="text-primary-600">透明与掌控</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                我们通过数字化平台，将传统繁琐的国际运输预订、文件处理和状态追踪流程进行简化与整合。客户可以通过我们的系统平台下单并获取从起运地到目的地的关键节点信息，实现对头程物流的精准掌控。
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">核心技术能力</h4>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">订单管理模块 (OMS)</div>
                      <div class="text-gray-600">
                        支持客户在线下单及处理定制化订单，自动同步亚马逊FBA等多平台需求
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">运输与关务模块 (TMS & Customs)</div>
                      <div class="text-gray-600">
                        实时追踪集装箱号、提单号、ETD/ETA，与船公司系统直连获取一手信息
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">智能清关系统</div>
                      <div class="text-gray-600">
                        专业清关知识库，高效处理特殊产品复杂清关流程，降低合规风险
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 区块二：海外仓储与管理的智能化 -->
    <section class="py-20 lg:py-28 bg-white">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- 左侧文案 -->
            <div class="space-y-6">
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                海外仓储：<br />
                <span class="text-blue-600">精准与效率</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                我们的核心竞争力在于完全自营的仓储网络和驱动这一切的仓库管理系统（WMS）。通过WMS，我们对超过22,000平方米的仓储空间进行精细化管理，实现从货物入库、存储、拣选到出库的全流程自动化与数据化。
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">WMS系统核心功能</h4>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">智能入库管理</div>
                      <div class="text-gray-600">
                        扫描货物条码快速收货，系统自动分配货位，12-36小时内完成收货和上架
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">实时库存控制</div>
                      <div class="text-gray-600">
                        SKU级别的实时库存可视化管理，支持FIFO等多种库存策略
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">智能订单处理</div>
                      <div class="text-gray-600">
                        通过波次拣选、路径优化算法，智能生成最优拣货任务
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">全程数据追踪</div>
                      <div class="text-gray-600">
                        实时库存量、库龄分析、出入库记录、操作准确率等数据节点
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 关键数据展示 -->
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">22,000+</div>
                  <div class="text-sm text-blue-700">平方米仓储面积</div>
                </div>
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">99.5%</div>
                  <div class="text-sm text-green-700">拣货准确率</div>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">2小时</div>
                  <div class="text-sm text-purple-700">平均出库时效</div>
                </div>
              </div>
            </div>

            <!-- 右侧仓库自动化设备图 -->
            <div class="relative">
              <div
                class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl border border-blue-100"
              >
                <!-- 现代化仓库场景 -->
                <div class="space-y-6">
                  <div class="text-center">
                    <h4 class="text-lg font-bold text-gray-900 mb-2">智能仓储操作中心</h4>
                    <div class="w-16 h-0.5 bg-blue-500 mx-auto"></div>
                  </div>

                  <!-- 自动化设备展示 -->
                  <div class="space-y-4">
                    <!-- AGV机器人区域 -->
                    <div class="bg-white rounded-xl p-6 border border-blue-200">
                      <div class="flex items-center space-x-4 mb-4">
                        <div
                          class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
                        >
                          <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div class="font-semibold text-gray-900">AGV自动导引车</div>
                          <div class="text-sm text-gray-600">24小时无人运转</div>
                        </div>
                        <div class="ml-auto">
                          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      <!-- 模拟路径图 -->
                      <div class="relative h-24 bg-gray-50 rounded-lg overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="grid grid-cols-4 gap-2 w-full px-4">
                            <div
                              class="h-8 bg-blue-200 rounded flex items-center justify-center text-xs"
                            >
                              货架A
                            </div>
                            <div
                              class="h-8 bg-green-200 rounded flex items-center justify-center text-xs"
                            >
                              拣货区
                            </div>
                            <div
                              class="h-8 bg-yellow-200 rounded flex items-center justify-center text-xs"
                            >
                              包装区
                            </div>
                            <div
                              class="h-8 bg-purple-200 rounded flex items-center justify-center text-xs"
                            >
                              出货口
                            </div>
                          </div>
                        </div>
                        <!-- 移动路径 -->
                        <div
                          class="animate-[pulse_2s_ease-in-out_infinite] absolute top-1/2 left-2 w-2 h-2 bg-blue-500 rounded-full"
                        ></div>
                      </div>
                    </div>

                    <!-- 自动分拣线 -->
                    <div class="bg-white rounded-xl p-6 border border-green-200">
                      <div class="flex items-center space-x-4 mb-4">
                        <div
                          class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <svg
                            class="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div class="font-semibold text-gray-900">高速分拣系统</div>
                          <div class="text-sm text-gray-600">每小时处理1200件包裹</div>
                        </div>
                        <div class="ml-auto">
                          <div class="flex space-x-1">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                            <div
                              class="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                              style="animation-delay: 0.1s"
                            ></div>
                            <div
                              class="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                              style="animation-delay: 0.2s"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <!-- 分拣效率指标 -->
                      <div class="grid grid-cols-3 gap-3 text-center">
                        <div class="bg-green-50 p-2 rounded">
                          <div class="text-sm font-bold text-green-700">1,200</div>
                          <div class="text-xs text-green-600">件/小时</div>
                        </div>
                        <div class="bg-blue-50 p-2 rounded">
                          <div class="text-sm font-bold text-blue-700">99.8%</div>
                          <div class="text-xs text-blue-600">准确率</div>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                          <div class="text-sm font-bold text-purple-700">24/7</div>
                          <div class="text-xs text-purple-600">运行</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 区块三：发货运输的精准化 -->
    <section class="py-20 lg:py-28 bg-gray-50">
      <div class="container-section">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- 左侧车队管理系统UI界面 -->
            <div class="relative">
              <div class="bg-gray-900 rounded-t-xl p-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div class="flex-1 text-center text-gray-300 text-sm font-medium">
                    车队管理系统 - 实时监控
                  </div>
                </div>
              </div>

              <div class="bg-white border-2 border-t-0 border-gray-200 rounded-b-xl shadow-2xl">
                <!-- 车队管理控制台 -->
                <div class="space-y-4 p-6">
                  <!-- 运输效率折线图 -->
                  <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                      <div class="text-sm font-semibold text-gray-700">今日运输效率</div>
                      <div class="text-xs text-green-600">↗ +12.5%</div>
                    </div>

                    <!-- 简单折线图 -->
                    <div class="relative h-24">
                      <div class="absolute inset-0 flex items-end justify-between px-2">
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-400 rounded-t mb-1" style="height: 30px"></div>
                          <span class="text-xs text-gray-600">06:00</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-500 rounded-t mb-1" style="height: 45px"></div>
                          <span class="text-xs text-gray-600">09:00</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-green-500 rounded-t mb-1" style="height: 60px"></div>
                          <span class="text-xs text-gray-600">12:00</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-green-600 rounded-t mb-1" style="height: 75px"></div>
                          <span class="text-xs text-gray-600">15:00</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-500 rounded-t mb-1" style="height: 50px"></div>
                          <span class="text-xs text-gray-600">18:00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 车辆状态监控 -->
                  <div class="grid grid-cols-2 gap-3">
                    <!-- 在途车辆 -->
                    <div class="bg-white border border-green-200 rounded-lg p-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                        >
                          <svg
                            class="w-5 h-5 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div class="text-lg font-bold text-green-700">342</div>
                          <div class="text-xs text-green-600">在途运行</div>
                        </div>
                      </div>
                    </div>

                    <!-- 待调度车辆 -->
                    <div class="bg-white border border-orange-200 rounded-lg p-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center"
                        >
                          <svg
                            class="w-5 h-5 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div class="text-lg font-bold text-orange-700">108</div>
                          <div class="text-xs text-orange-600">待调度</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 关键路线状态 -->
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-sm font-semibold text-gray-700 mb-3">关键运输路线</div>
                    <div class="space-y-2">
                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-green-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">洛杉矶 → 拉斯维加斯</div>
                            <div class="text-xs text-gray-600">预计2小时到达</div>
                          </div>
                        </div>
                        <div class="text-xs text-green-600 font-medium">正常</div>
                      </div>

                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-blue-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">洛杉矶 → 凤凰城</div>
                            <div class="text-xs text-gray-600">预计4小时到达</div>
                          </div>
                        </div>
                        <div class="text-xs text-blue-600 font-medium">运行中</div>
                      </div>

                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-orange-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">圣地亚哥 → 洛杉矶</div>
                            <div class="text-xs text-gray-600">轻微延误</div>
                          </div>
                        </div>
                        <div class="text-xs text-orange-600 font-medium">延误</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 系统控制面板 -->
                <div class="p-6 border-t border-gray-200">
                  <!-- 实时车辆状态 -->
                  <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="bg-green-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-green-700">342</div>
                      <div class="text-xs text-green-600">在途车辆</div>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-blue-700">89%</div>
                      <div class="text-xs text-blue-600">运力利用率</div>
                    </div>
                    <div class="bg-orange-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-orange-700">1.2小时</div>
                      <div class="text-xs text-orange-600">平均延误</div>
                    </div>
                  </div>

                  <!-- 最新运输记录 -->
                  <div class="space-y-2">
                    <div class="text-sm font-semibold text-gray-700 mb-3">实时运输状态</div>
                    <div class="space-y-2">
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span class="text-gray-600">T-2023 → 洛杉矶仓库</span>
                        </div>
                        <span class="text-green-600 font-medium">已到达</span>
                      </div>
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span class="text-gray-600">T-2024 → 拉斯维加斯</span>
                        </div>
                        <span class="text-blue-600 font-medium">运输中</span>
                      </div>
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span class="text-gray-600">T-2025 → 凤凰城</span>
                        </div>
                        <span class="text-orange-600 font-medium">装载中</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 装饰性阴影 -->
              <div
                class="absolute -inset-6 bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-2xl -z-10 blur-xl"
              ></div>
            </div>

            <!-- 右侧文案 -->
            <div class="space-y-6">
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                发货运输：<br />
                <span class="text-green-600">智能与可靠</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                我们不仅拥有超过450辆卡车的自营车队，更通过技术平台实现了对运输资源的高效调度与整合。我们与UPS、USPS等快递巨头建立了官方合作伙伴关系并实现了系统集成，确保无论是大批量卡车运输还是海量包裹派送，都能精准、高效地完成。
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">核心技术能力</h4>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">智能运输调度</div>
                      <div class="text-gray-600">
                        基于地理位置、时效要求和货物尺寸，智能规划最优运输路线和方式（FTL/LTL）
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">实时车队管理</div>
                      <div class="text-gray-600">
                        车辆GPS定位、在途状态、预计送达时间、签收凭证（POD）全程追踪
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">承运商深度集成</div>
                      <div class="text-gray-600">
                        通过API与UPS、USPS系统无缝对接，自动获取运单号、打印面单、追踪"最后一公里"
                      </div>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div
                      class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <svg
                        class="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">多平台销售履约</div>
                      <div class="text-gray-600">
                        支持亚马逊、Temu、TikTok及独立站等多个销售渠道的物流履约
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 关键指标展示 -->
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">450+</div>
                  <div class="text-sm text-green-700">自营卡车</div>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">95%</div>
                  <div class="text-sm text-blue-700">准时送达率</div>
                </div>
                <div class="text-center p-4 bg-orange-50 rounded-lg">
                  <div class="text-2xl font-bold text-orange-600">24/7</div>
                  <div class="text-sm text-orange-700">实时监控</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页面总结/结尾部分 -->
    <section class="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-800">
      <div class="container-section">
        <div class="text-center max-w-4xl mx-auto">
          <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">持续创新，与您共赢</h3>
          <p class="text-lg text-primary-100 leading-relaxed mb-8">
            我们深知，技术创新永无止境。可耐博达始终保持与客户的紧密沟通，将您的反馈作为我们服务和系统迭代的第一驱动力。我们致力于通过持续的技术投入和数据分析，不断优化我们的服务，帮助您在瞬息万变的市场中保持领先，与您共同成长。
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            联系我们，开启合作
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/layout/PageLayout.vue'
import TechnologyHero from '@/components/sections/TechnologyHero.vue'
</script>
