<template>
  <PageLayout :page-title="getText('pageTitle')" :page-description="getText('pageDescription')">
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
                {{ getText('smartBrainTitle') }}<br />
                <span class="text-primary-600">{{ getText('smartBrain') }}</span>
              </h2>
              <div class="w-20 h-1 bg-primary-500"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ getText('techDescription') }}
              </p>
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">99.8%</div>
                  <div class="text-sm text-gray-600">{{ getText('orderAccuracy') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">24/7</div>
                  <div class="text-sm text-gray-600">{{ getText('realtimeMonitoring') }}</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600">
                    {{ getText('avgResponseValue') }}
                  </div>
                  <div class="text-sm text-gray-600">{{ getText('avgResponseTime') }}</div>
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
                  <div class="flex-1 text-center text-gray-300 text-sm">
                    {{ getText('scmSystem') }}
                  </div>
                </div>
              </div>
              <div class="bg-white border-2 border-t-0 border-gray-200 rounded-b-lg p-6 shadow-2xl">
                <!-- 模拟Dashboard界面 -->
                <div class="space-y-4">
                  <!-- 顶部KPI指标 -->
                  <div class="grid grid-cols-4 gap-3">
                    <div class="bg-blue-50 p-3 rounded-lg">
                      <div class="text-xs text-blue-600 font-semibold">
                        {{ getText('activeOrders') }}
                      </div>
                      <div class="text-lg font-bold text-blue-900">
                        {{ getText('dashboardValue2847') }}
                      </div>
                    </div>
                    <div class="bg-green-50 p-3 rounded-lg">
                      <div class="text-xs text-green-600 font-semibold">
                        {{ getText('cargoInTransit') }}
                      </div>
                      <div class="text-lg font-bold text-green-900">
                        {{ getText('dashboardValue1234') }}
                      </div>
                    </div>
                    <div class="bg-purple-50 p-3 rounded-lg">
                      <div class="text-xs text-purple-600 font-semibold">
                        {{ getText('inventorySku') }}
                      </div>
                      <div class="text-lg font-bold text-purple-900">
                        {{ getText('dashboardValue15678') }}
                      </div>
                    </div>
                    <div class="bg-orange-50 p-3 rounded-lg">
                      <div class="text-xs text-orange-600 font-semibold">
                        {{ getText('transportVehicles') }}
                      </div>
                      <div class="text-lg font-bold text-orange-900">
                        {{ getText('dashboardValue456') }}
                      </div>
                    </div>
                  </div>

                  <!-- 实时状态图表区域 -->
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                      <div class="text-sm font-semibold text-gray-700">
                        {{ getText('realtimeStatus') }}
                      </div>
                      <div class="flex space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div class="text-xs text-green-600">{{ getText('systemNormal') }}</div>
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
                    <div class="text-xs font-semibold text-gray-700">
                      {{ getText('latestOperations') }}
                    </div>
                    <div class="space-y-1 text-xs">
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">{{ getText('sampleOrder1') }}</span>
                        <span class="text-green-600">✓</span>
                      </div>
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">{{ getText('sampleOrder2') }}</span>
                        <span class="text-blue-600">•</span>
                      </div>
                      <div class="flex justify-between items-center py-1">
                        <span class="text-gray-600">{{ getText('sampleOrder3') }}</span>
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
                    <h4 class="text-lg font-bold text-gray-900 mb-2">
                      {{ getText('digitalBillTitle') }}
                    </h4>
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
                        <div class="font-semibold text-gray-900">
                          {{ getText('shipperSubmit') }}
                        </div>
                        <div class="text-sm text-gray-600">{{ getText('autoEntry') }}</div>
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
                        <div class="font-semibold text-gray-900">
                          {{ getText('customsReview') }}
                        </div>
                        <div class="text-sm text-gray-600">{{ getText('smartClearance') }}</div>
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
                        <div class="font-semibold text-gray-900">
                          {{ getText('carrierConfirm') }}
                        </div>
                        <div class="text-sm text-gray-600">{{ getText('etdEtaSync') }}</div>
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
                        <div class="font-semibold text-gray-900">
                          {{ getText('destinationDelivery') }}
                        </div>
                        <div class="text-sm text-gray-600">{{ getText('deliveryComplete') }}</div>
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
                {{ getText('freightForwardingTitle') }}：<br />
                <span class="text-primary-600">{{ getText('freightForwardingSubtitle') }}</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                {{ getText('freightDescription') }}
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">
                  {{ getText('coreCapabilitiesTitle') }}
                </h4>
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
                      <div class="font-semibold text-gray-900">{{ getText('omsModuleTitle') }}</div>
                      <div class="text-gray-600">
                        {{ getText('omsModuleDesc') }}
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
                      <div class="font-semibold text-gray-900">{{ getText('tmsModuleTitle') }}</div>
                      <div class="text-gray-600">
                        {{ getText('tmsModuleDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('customsSystemTitle') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('customsSystemDesc') }}
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
                {{ getText('overseasWarehouseTitle') }}：<br />
                <span class="text-blue-600">{{ getText('precisionEfficiencySubtitle') }}</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                {{ getText('warehouseDescription') }}
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">
                  {{ getText('wmsCoreFeaturesTitle') }}
                </h4>
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('smartInboundTitle') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('smartInboundDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('realtimeInventoryTitle') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('realtimeInventoryDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('smartOrderTitle') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('smartOrderDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('dataTrackingTitle') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('dataTrackingDesc') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 关键数据展示 -->
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">22,000+</div>
                  <div class="text-sm text-blue-700">{{ getText('warehouseAreaLabel') }}</div>
                </div>
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">99.5%</div>
                  <div class="text-sm text-green-700">{{ getText('pickingAccuracyLabel') }}</div>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ getText('avgOutboundTimeValue') }}
                  </div>
                  <div class="text-sm text-purple-700">{{ getText('avgOutboundTimeLabel') }}</div>
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
                    <h4 class="text-lg font-bold text-gray-900 mb-2">
                      {{ getText('smartWarehouseCenterTitle') }}
                    </h4>
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
                          <div class="font-semibold text-gray-900">
                            {{ getText('agvSystemTitle') }}
                          </div>
                          <div class="text-sm text-gray-600">{{ getText('agvSystemDesc') }}</div>
                        </div>
                      </div>

                      <!-- 模拟路径图 -->
                      <div class="relative h-24 bg-gray-50 rounded-lg overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="grid grid-cols-4 gap-2 w-full px-4">
                            <div
                              class="h-8 bg-blue-200 rounded flex items-center justify-center text-xs"
                            >
                              {{ getText('agvShelfA') }}
                            </div>
                            <div
                              class="h-8 bg-green-200 rounded flex items-center justify-center text-xs"
                            >
                              {{ getText('agvPickingArea') }}
                            </div>
                            <div
                              class="h-8 bg-yellow-200 rounded flex items-center justify-center text-xs"
                            >
                              {{ getText('agvPackingArea') }}
                            </div>
                            <div
                              class="h-8 bg-purple-200 rounded flex items-center justify-center text-xs"
                            >
                              {{ getText('agvShippingDock') }}
                            </div>
                          </div>
                        </div>
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
                          <div class="font-semibold text-gray-900">
                            {{ getText('sortingSystemTitle') }}
                          </div>
                          <div class="text-sm text-gray-600">
                            {{ getText('sortingSystemDesc') }}
                          </div>
                        </div>
                      </div>

                      <!-- 分拣效率指标 -->
                      <div class="grid grid-cols-3 gap-3 text-center">
                        <div class="bg-green-50 p-2 rounded">
                          <div class="text-sm font-bold text-green-700">1,200</div>
                          <div class="text-xs text-green-600">{{ getText('packagesPerHour') }}</div>
                        </div>
                        <div class="bg-blue-50 p-2 rounded">
                          <div class="text-sm font-bold text-blue-700">99.8%</div>
                          <div class="text-xs text-blue-600">{{ getText('accuracyRate') }}</div>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                          <div class="text-sm font-bold text-purple-700">24/7</div>
                          <div class="text-xs text-purple-600">{{ getText('operationTime') }}</div>
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
                    {{ getText('fleetManagementTitle') }}
                  </div>
                </div>
              </div>

              <div class="bg-white border-2 border-t-0 border-gray-200 rounded-b-xl shadow-2xl">
                <!-- 车队管理控制台 -->
                <div class="space-y-4 p-6">
                  <!-- 运输效率折线图 -->
                  <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                      <div class="text-sm font-semibold text-gray-700">
                        {{ getText('todayEfficiencyTitle') }}
                      </div>
                      <div class="text-xs text-green-600">{{ getText('efficiencyIncrease') }}</div>
                    </div>

                    <!-- 简单折线图 -->
                    <div class="relative h-24">
                      <div class="absolute inset-0 flex items-end justify-between px-2">
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-400 rounded-t mb-1" style="height: 30px"></div>
                          <span class="text-xs text-gray-600">{{ getText('timeLabel0600') }}</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-500 rounded-t mb-1" style="height: 45px"></div>
                          <span class="text-xs text-gray-600">{{ getText('timeLabel0900') }}</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-green-500 rounded-t mb-1" style="height: 60px"></div>
                          <span class="text-xs text-gray-600">{{ getText('timeLabel1200') }}</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-green-600 rounded-t mb-1" style="height: 75px"></div>
                          <span class="text-xs text-gray-600">{{ getText('timeLabel1500') }}</span>
                        </div>
                        <div class="flex flex-col items-center">
                          <div class="w-8 bg-blue-500 rounded-t mb-1" style="height: 50px"></div>
                          <span class="text-xs text-gray-600">{{ getText('timeLabel1800') }}</span>
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
                          <div class="text-lg font-bold text-green-700">
                            {{ getText('fleetValue342') }}
                          </div>
                          <div class="text-xs text-green-600">
                            {{ getText('vehiclesInTransitLabel') }}
                          </div>
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
                          <div class="text-lg font-bold text-orange-700">
                            {{ getText('fleetValue108') }}
                          </div>
                          <div class="text-xs text-orange-600">
                            {{ getText('pendingScheduleLabel') }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 关键路线状态 -->
                  <div class="bg-gray-50 rounded-lg p-4">
                    <div class="text-sm font-semibold text-gray-700 mb-3">
                      {{ getText('keyTransportRoutes') }}
                    </div>
                    <div class="space-y-2">
                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-green-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">
                              {{ getText('routeLaToVegas') }}
                            </div>
                            <div class="text-xs text-gray-600">
                              {{ getText('estimatedArrival2h') }}
                            </div>
                          </div>
                        </div>
                        <div class="text-xs text-green-600 font-medium">
                          {{ getText('routeStatusNormal') }}
                        </div>
                      </div>

                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-blue-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">
                              {{ getText('routeLaToPhoenix') }}
                            </div>
                            <div class="text-xs text-gray-600">
                              {{ getText('estimatedArrival4h') }}
                            </div>
                          </div>
                        </div>
                        <div class="text-xs text-blue-600 font-medium">
                          {{ getText('routeStatusInTransit') }}
                        </div>
                      </div>

                      <div
                        class="flex items-center justify-between p-2 bg-white rounded border-l-4 border-orange-500"
                      >
                        <div class="flex items-center space-x-3">
                          <div class="text-xs">🚛</div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">
                              {{ getText('routeSdToLa') }}
                            </div>
                            <div class="text-xs text-gray-600">{{ getText('slightDelay') }}</div>
                          </div>
                        </div>
                        <div class="text-xs text-orange-600 font-medium">
                          {{ getText('routeStatusDelayed') }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 系统控制面板 -->
                <div class="p-6 border-t border-gray-200">
                  <!-- 实时车辆状态 -->
                  <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="bg-green-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-green-700">
                        {{ getText('fleetValue342') }}
                      </div>
                      <div class="text-xs text-green-600">
                        {{ getText('vehiclesInTransitLabel') }}
                      </div>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-blue-700">
                        {{ getText('utilizationValue89') }}
                      </div>
                      <div class="text-xs text-blue-600">{{ getText('capacityUtilization') }}</div>
                    </div>
                    <div class="bg-orange-50 p-3 rounded-lg text-center">
                      <div class="text-lg font-bold text-orange-700">
                        {{ getText('avgDelayValue') }}
                      </div>
                      <div class="text-xs text-orange-600">{{ getText('avgDelay') }}</div>
                    </div>
                  </div>

                  <!-- 最新运输记录 -->
                  <div class="space-y-2">
                    <div class="text-sm font-semibold text-gray-700 mb-3">
                      {{ getText('realtimeTransportStatus') }}
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span class="text-gray-600">{{ getText('transportRecord1') }}</span>
                        </div>
                        <span class="text-green-600 font-medium">{{
                          getText('statusArrived')
                        }}</span>
                      </div>
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span class="text-gray-600">{{ getText('transportRecord2') }}</span>
                        </div>
                        <span class="text-blue-600 font-medium">{{
                          getText('statusInTransit')
                        }}</span>
                      </div>
                      <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center space-x-2">
                          <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span class="text-gray-600">{{ getText('transportRecord3') }}</span>
                        </div>
                        <span class="text-orange-600 font-medium">{{
                          getText('statusLoading')
                        }}</span>
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
                {{ getText('shippingTransportTitle') }}：<br />
                <span class="text-green-600">{{ getText('shippingTransportSubtitle') }}</span>
              </h3>

              <p class="text-lg text-gray-700 leading-relaxed">
                {{ getText('transportDescription') }}
              </p>

              <!-- 核心技术点 -->
              <div class="space-y-4">
                <h4 class="text-xl font-semibold text-gray-900">
                  {{ getText('coreCapabilitiesTitle') }}
                </h4>
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('smartTransportScheduling') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('smartTransportSchedulingDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('realtimeFleetManagement') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('realtimeFleetManagementDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('carrierIntegration') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('carrierIntegrationDesc') }}
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
                      <div class="font-semibold text-gray-900">
                        {{ getText('multiPlatformFulfillment') }}
                      </div>
                      <div class="text-gray-600">
                        {{ getText('multiPlatformFulfillmentDesc') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 关键指标展示 -->
              <div class="grid grid-cols-3 gap-4 pt-4">
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <div class="text-2xl font-bold text-green-600">
                    {{ getText('ownTrucksCount') }}
                  </div>
                  <div class="text-sm text-green-700">{{ getText('ownTrucksLabel') }}</div>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <div class="text-2xl font-bold text-blue-600">
                    {{ getText('onTimeDeliveryRate') }}
                  </div>
                  <div class="text-sm text-blue-700">{{ getText('onTimeDeliveryLabel') }}</div>
                </div>
                <div class="text-center p-4 bg-orange-50 rounded-lg">
                  <div class="text-2xl font-bold text-orange-600">24/7</div>
                  <div class="text-sm text-orange-700">
                    {{ getText('realtimeMonitoringLabel') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 统一CTA区域 -->
    <UnifiedCtaSection />
  </PageLayout>
</template>

<script setup lang="ts">
// computed import removed as no longer needed
import { useI18n } from 'vue-i18n'
import PageLayout from '@/components/layout/PageLayout.vue'
import TechnologyHero from '@/components/sections/TechnologyHero.vue'
import UnifiedCtaSection from '@/components/sections/UnifiedCtaSection.vue'

const { locale } = useI18n()

// 定义翻译键的类型
type TranslationKey =
  // 页面基本信息
  | 'pageTitle'
  | 'pageDescription'
  // 核心技术平台
  | 'smartBrainTitle'
  | 'smartBrain'
  | 'techDescription'
  | 'orderAccuracy'
  | 'realtimeMonitoring'
  | 'avgResponseTime'
  | 'avgResponseValue'
  | 'scmSystem'
  // Dashboard指标
  | 'activeOrders'
  | 'cargoInTransit'
  | 'inventorySku'
  | 'transportVehicles'
  | 'realtimeStatus'
  | 'systemNormal'
  | 'latestOperations'
  // 示例订单和数据
  | 'sampleOrder1'
  | 'sampleOrder2'
  | 'sampleOrder3'
  // 区块一：国际货代 & 头程物流
  | 'digitalBillTitle'
  | 'freightForwardingTitle'
  | 'freightForwardingSubtitle'
  | 'freightDescription'
  | 'shipperSubmit'
  | 'autoEntry'
  | 'customsReview'
  | 'smartClearance'
  | 'carrierConfirm'
  | 'etdEtaSync'
  | 'destinationDelivery'
  | 'deliveryComplete'
  | 'coreCapabilitiesTitle'
  | 'omsModuleTitle'
  | 'omsModuleDesc'
  | 'tmsModuleTitle'
  | 'tmsModuleDesc'
  | 'customsSystemTitle'
  | 'customsSystemDesc'
  // 区块二：海外仓储与管理
  | 'overseasWarehouseTitle'
  | 'precisionEfficiencySubtitle'
  | 'warehouseDescription'
  | 'wmsCoreFeaturesTitle'
  | 'smartInboundTitle'
  | 'smartInboundDesc'
  | 'realtimeInventoryTitle'
  | 'realtimeInventoryDesc'
  | 'smartOrderTitle'
  | 'smartOrderDesc'
  | 'dataTrackingTitle'
  | 'dataTrackingDesc'
  | 'warehouseAreaLabel'
  | 'pickingAccuracyLabel'
  | 'avgOutboundTimeLabel'
  | 'avgOutboundTimeValue'
  | 'smartWarehouseCenterTitle'
  | 'agvSystemTitle'
  | 'agvSystemDesc'
  | 'agvShelfA'
  | 'agvPickingArea'
  | 'agvPackingArea'
  | 'agvShippingDock'
  | 'sortingSystemTitle'
  | 'sortingSystemDesc'
  | 'packagesPerHour'
  | 'accuracyRate'
  | 'operationTime'
  // 区块三：发货运输的精准化
  | 'shippingTransportTitle'
  | 'shippingTransportSubtitle'
  | 'transportDescription'
  | 'fleetManagementTitle'
  | 'todayEfficiencyTitle'
  | 'efficiencyIncrease'
  | 'vehiclesInTransitLabel'
  | 'pendingScheduleLabel'
  | 'keyTransportRoutes'
  | 'routeLaToVegas'
  | 'routeLaToPhoenix'
  | 'routeSdToLa'
  | 'estimatedArrival2h'
  | 'estimatedArrival4h'
  | 'slightDelay'
  | 'routeStatusNormal'
  | 'routeStatusInTransit'
  | 'routeStatusDelayed'
  | 'realtimeTransportStatus'
  | 'capacityUtilization'
  | 'avgDelay'
  | 'avgDelayValue'
  | 'smartTransportScheduling'
  | 'smartTransportSchedulingDesc'
  | 'realtimeFleetManagement'
  | 'realtimeFleetManagementDesc'
  | 'carrierIntegration'
  | 'carrierIntegrationDesc'
  | 'multiPlatformFulfillment'
  | 'multiPlatformFulfillmentDesc'
  | 'ownTrucksCount'
  | 'ownTrucksLabel'
  | 'onTimeDeliveryRate'
  | 'onTimeDeliveryLabel'
  | 'realtimeMonitoringLabel'
  // 运输记录和状态
  | 'transportRecord1'
  | 'transportRecord2'
  | 'transportRecord3'
  | 'statusArrived'
  | 'statusInTransit'
  | 'statusLoading'
  // 新增的时间和系统标签
  | 'timeLabel0600'
  | 'timeLabel0900'
  | 'timeLabel1200'
  | 'timeLabel1500'
  | 'timeLabel1800'
  | 'efficiencyChartTitle'
  | 'systemStatus'
  // 新增数值显示
  | 'dashboardValue2847'
  | 'dashboardValue1234'
  | 'dashboardValue15678'
  | 'dashboardValue456'
  // AGV和仓储系统
  | 'agvStatusActive'
  | 'sortingStatusActive'
  // 车队具体数值
  | 'fleetValue342'
  | 'fleetValue108'
  | 'utilizationValue89'

// 翻译映射 - 地道英文表达
const translations: Record<'zh' | 'en', Record<TranslationKey, string>> = {
  zh: {
    // 页面基本信息
    pageTitle: '技术与精细管理',
    pageDescription: '先进的物流技术系统和精细化管理能力，为您提供智能化的供应链解决方案。',

    // 核心技术平台
    smartBrainTitle: '一体化的供应链',
    smartBrain: '"智慧大脑"',
    techDescription:
      '在可耐博达，技术不只是工具，而是我们服务的核心驱动力。我们通过自研的、集成的SCM（供应链管理）和WMS（仓库管理）系统，打通了从订单、运输、仓储到派送的全链路信息流，实现前所未有的效率、透明度和精准度。',
    orderAccuracy: '订单准确率',
    realtimeMonitoring: '实时监控',
    avgResponseTime: '平均响应时间',
    avgResponseValue: '15分钟',
    scmSystem: '供应链管理系统',

    // Dashboard指标
    activeOrders: '活跃订单',
    cargoInTransit: '在途货物',
    inventorySku: '库存SKU',
    transportVehicles: '运输车辆',
    realtimeStatus: '实时运营状态',
    systemNormal: '系统运行正常',
    latestOperations: '最新操作记录',

    // 示例订单和数据
    sampleOrder1: '订单 #KNB-2024-001 已发货',
    sampleOrder2: '仓库 LA-01 库存更新',
    sampleOrder3: '车辆 T-456 已到达配送点',

    // 区块一：国际货代 & 头程物流
    digitalBillTitle: '电子提单数字化流转',
    freightForwardingTitle: '国际货代 & 头程物流',
    freightForwardingSubtitle: '透明与掌控',
    freightDescription:
      '我们通过数字化平台，将传统繁琐的国际运输预订、文件处理和状态追踪流程进行简化与整合。客户可以通过我们的系统平台下单并获取从起运地到目的地的关键节点信息，实现对头程物流的精准掌控。',
    shipperSubmit: '发货方提交',
    autoEntry: '订单信息自动录入系统',
    customsReview: '海关审核',
    smartClearance: '智能清关系统预处理',
    carrierConfirm: '船公司确认',
    etdEtaSync: 'ETD/ETA实时同步',
    destinationDelivery: '目的港交付',
    deliveryComplete: '全程追踪完成',
    coreCapabilitiesTitle: '核心技术能力',
    omsModuleTitle: '订单管理模块 (OMS)',
    omsModuleDesc: '支持客户在线下单及处理定制化订单，自动同步亚马逊FBA等多平台需求',
    tmsModuleTitle: '运输与关务模块 (TMS & Customs)',
    tmsModuleDesc: '实时追踪集装箱号、提单号、ETD/ETA，与船公司系统直连获取一手信息',
    customsSystemTitle: '智能清关系统',
    customsSystemDesc: '专业清关知识库，高效处理特殊产品复杂清关流程，降低合规风险',

    // 区块二：海外仓储与管理
    overseasWarehouseTitle: '海外仓储',
    precisionEfficiencySubtitle: '精准与效率',
    warehouseDescription:
      '我们的核心竞争力在于完全自营的仓储网络和驱动这一切的仓库管理系统（WMS）。通过WMS，我们对超过22,000平方米的仓储空间进行精细化管理，实现从货物入库、存储、拣选到出库的全流程自动化与数据化。',
    wmsCoreFeaturesTitle: 'WMS系统核心功能',
    smartInboundTitle: '智能入库管理',
    smartInboundDesc: '扫描货物条码快速收货，系统自动分配货位，12-36小时内完成收货和上架',
    realtimeInventoryTitle: '实时库存控制',
    realtimeInventoryDesc: 'SKU级别的实时库存可视化管理，支持FIFO等多种库存策略',
    smartOrderTitle: '智能订单处理',
    smartOrderDesc: '通过波次拣选、路径优化算法，智能生成最优拣货任务',
    dataTrackingTitle: '全程数据追踪',
    dataTrackingDesc: '实时库存量、库龄分析、出入库记录、操作准确率等数据节点',
    warehouseAreaLabel: '平方米仓储面积',
    pickingAccuracyLabel: '拣货准确率',
    avgOutboundTimeLabel: '平均出库时间',
    avgOutboundTimeValue: '2小时',
    smartWarehouseCenterTitle: '智能仓储操作中心',
    agvSystemTitle: 'AGV自动导引车',
    agvSystemDesc: '24小时无人运转',
    agvShelfA: '货架A',
    agvPickingArea: '拣货区',
    agvPackingArea: '包装区',
    agvShippingDock: '出货口',
    sortingSystemTitle: '高速分拣系统',
    sortingSystemDesc: '每小时处理1200件包裹',
    packagesPerHour: '件/小时',
    accuracyRate: '准确率',
    operationTime: '运行',

    // 区块三：发货运输的精准化
    shippingTransportTitle: '发货运输',
    shippingTransportSubtitle: '智能与可靠',
    transportDescription:
      '我们不仅拥有超过450辆卡车的自营车队，更通过技术平台实现了对运输资源的高效调度与整合。我们与UPS、USPS等快递巨头建立了官方合作伙伴关系并实现了系统集成，确保无论是大批量卡车运输还是海量包裹派送，都能精准、高效地完成。',
    fleetManagementTitle: '车队管理系统 - 实时监控',
    todayEfficiencyTitle: '今日运输效率',
    efficiencyIncrease: '↗ +12.5%',
    vehiclesInTransitLabel: '在途车辆',
    pendingScheduleLabel: '待调度',
    keyTransportRoutes: '关键运输路线',
    routeLaToVegas: '洛杉矶 → 拉斯维加斯',
    routeLaToPhoenix: '洛杉矶 → 菲尼克斯',
    routeSdToLa: '圣地亚哥 → 洛杉矶',
    estimatedArrival2h: '预计2小时到达',
    estimatedArrival4h: '预计4小时到达',
    slightDelay: '轻微延误',
    routeStatusNormal: '正常',
    routeStatusInTransit: '运输中',
    routeStatusDelayed: '延误',
    realtimeTransportStatus: '实时运输状态',
    capacityUtilization: '运力利用率',
    avgDelay: '平均延误',
    smartTransportScheduling: '智能运输调度',
    smartTransportSchedulingDesc:
      '基于地理位置、时间要求和货物尺寸，智能规划最优运输路线和模式（整车/零担）',
    realtimeFleetManagement: '实时车队管理',
    realtimeFleetManagementDesc: '端到端追踪车辆GPS位置、在途状态、预估交付时间和送达证明（POD）',
    carrierIntegration: '承运商深度集成',
    carrierIntegrationDesc:
      '通过API与UPS和USPS系统无缝集成，自动生成运单、标签打印和"最后一公里"追踪',
    multiPlatformFulfillment: '多平台销售履约',
    multiPlatformFulfillmentDesc: '支持亚马逊、Temu、TikTok和独立网站的物流履约服务',
    ownTrucksCount: '450+',
    ownTrucksLabel: '自营卡车',
    onTimeDeliveryRate: '95%',
    onTimeDeliveryLabel: '准时送达率',
    realtimeMonitoringLabel: '实时监控',

    // 运输记录和状态
    avgDelayValue: '1.2小时',
    transportRecord1: '车辆T-2023 → 洛杉矶仓库',
    transportRecord2: '车辆T-2024 → 拉斯维加斯',
    transportRecord3: '车辆T-2025 → 菲尼克斯',
    statusArrived: '已到达',
    statusInTransit: '运输中',
    statusLoading: '装载中',

    // 新增的时间和系统标签
    timeLabel0600: '06:00',
    timeLabel0900: '09:00',
    timeLabel1200: '12:00',
    timeLabel1500: '15:00',
    timeLabel1800: '18:00',
    efficiencyChartTitle: '效率图表',
    systemStatus: '系统状态',

    // 新增数值显示
    dashboardValue2847: '2,847',
    dashboardValue1234: '1,234',
    dashboardValue15678: '15,678',
    dashboardValue456: '456',

    // AGV和仓储系统
    agvStatusActive: '运行中',
    sortingStatusActive: '高速运行',

    // 车队具体数值
    fleetValue342: '342',
    fleetValue108: '108',
    utilizationValue89: '89%',
  },
  en: {
    // 页面基本信息 - 专业技术表达
    pageTitle: 'Technology & Precision Management',
    pageDescription:
      'Advanced logistics technology systems and precision management capabilities, providing intelligent supply chain solutions.',

    // 核心技术平台 - 简洁有力
    smartBrainTitle: 'Integrated Supply Chain',
    smartBrain: '"Smart Brain"',
    techDescription:
      'At Kenable, technology is not just a tool, but the core driving force of our services. Through our self-developed, integrated SCM (Supply Chain Management) and WMS (Warehouse Management) systems, we have connected the entire information flow from orders, transportation, warehousing to delivery, achieving unprecedented efficiency, transparency and precision.',
    orderAccuracy: 'Order Accuracy',
    realtimeMonitoring: 'Real-time Monitoring',
    avgResponseTime: 'Avg Response Time',
    avgResponseValue: '15 min',
    scmSystem: 'Supply Chain Management System',

    // Dashboard指标 - 专业术语
    activeOrders: 'Active Orders',
    cargoInTransit: 'Cargo in Transit',
    inventorySku: 'Inventory SKUs',
    transportVehicles: 'Transport Vehicles',
    realtimeStatus: 'Real-time Operations Status',
    systemNormal: 'System Running Normally',
    latestOperations: 'Latest Operations Log',

    // 示例订单和数据
    sampleOrder1: 'Order #KNB-2024-001 shipped',
    sampleOrder2: 'Warehouse LA-01 inventory updated',
    sampleOrder3: 'Vehicle T-456 arrived at delivery point',

    // 区块一：国际货代 & 头程物流 - 标准流程术语
    digitalBillTitle: 'Digital Bill of Lading Process',
    freightForwardingTitle: 'International Freight & First-Mile Logistics',
    freightForwardingSubtitle: 'Transparency & Control',
    freightDescription:
      'Through our digital platform, we simplify and integrate the traditionally complex international shipping booking, document processing, and status tracking processes. Customers can place orders through our system platform and obtain key milestone information from origin to destination, achieving precise control over first-mile logistics.',
    shipperSubmit: 'Shipper Submission',
    autoEntry: 'Order information auto-entry',
    customsReview: 'Customs Review',
    smartClearance: 'Smart clearance pre-processing',
    carrierConfirm: 'Carrier Confirmation',
    etdEtaSync: 'ETD/ETA real-time sync',
    destinationDelivery: 'Destination Port Delivery',
    deliveryComplete: 'End-to-end tracking complete',
    coreCapabilitiesTitle: 'Core Technology Capabilities',
    omsModuleTitle: 'Order Management System (OMS)',
    omsModuleDesc:
      'Support online ordering and customized order processing, auto-sync with Amazon FBA and other multi-platform requirements',
    tmsModuleTitle: 'Transportation & Customs Module (TMS & Customs)',
    tmsModuleDesc:
      'Real-time tracking of container numbers, bill of lading numbers, ETD/ETA, direct integration with carrier systems for first-hand information',
    customsSystemTitle: 'Intelligent Customs Clearance System',
    customsSystemDesc:
      'Professional customs knowledge base, efficient handling of complex clearance processes for special products, reducing compliance risks',

    // 区块二：海外仓储与管理 - 专业仓储术语
    overseasWarehouseTitle: 'Overseas Warehousing',
    precisionEfficiencySubtitle: 'Precision & Efficiency',
    warehouseDescription:
      'Our core competitive advantage lies in our fully self-operated warehouse network and the Warehouse Management System (WMS) that drives it all. Through WMS, we manage over 22,000 square meters of warehouse space with precision, achieving full-process automation and digitization from goods inbound, storage, picking to outbound.',
    wmsCoreFeaturesTitle: 'WMS Core System Features',
    smartInboundTitle: 'Smart Inbound Management',
    smartInboundDesc:
      'Rapid goods receiving through barcode scanning, automatic slot allocation, completing receiving and shelving within 12-36 hours',
    realtimeInventoryTitle: 'Real-time Inventory Control',
    realtimeInventoryDesc:
      'SKU-level real-time inventory visualization management, supporting FIFO and other inventory strategies',
    smartOrderTitle: 'Smart Order Processing',
    smartOrderDesc:
      'Intelligent generation of optimal picking tasks through wave picking and path optimization algorithms',
    dataTrackingTitle: 'End-to-end Data Tracking',
    dataTrackingDesc:
      'Real-time inventory levels, aging analysis, inbound/outbound records, operational accuracy and other data points',
    warehouseAreaLabel: 'Sq M Warehouse Area',
    pickingAccuracyLabel: 'Picking Accuracy',
    avgOutboundTimeLabel: 'Avg Outbound Time',
    avgOutboundTimeValue: '2 hours',
    smartWarehouseCenterTitle: 'Smart Warehouse Operations Center',
    agvSystemTitle: 'AGV Automated Guided Vehicles',
    agvSystemDesc: '24-hour unmanned operation',
    agvShelfA: 'Shelf A',
    agvPickingArea: 'Picking Zone',
    agvPackingArea: 'Packing Zone',
    agvShippingDock: 'Shipping Dock',
    sortingSystemTitle: 'High-Speed Sorting System',
    sortingSystemDesc: 'Processing 1,200 packages per hour',
    packagesPerHour: 'pcs/hour',
    accuracyRate: 'Accuracy',
    operationTime: 'Operation',

    // 区块三：发货运输的精准化 - 运输管理术语
    shippingTransportTitle: 'Shipping & Transportation',
    shippingTransportSubtitle: 'Smart & Reliable',
    transportDescription:
      'We not only own a self-operated fleet of over 450 trucks, but also achieve efficient scheduling and integration of transportation resources through our technology platform. We have established official partnerships and system integration with logistics giants like UPS and USPS, ensuring precise and efficient completion of both bulk truck transportation and massive parcel delivery.',
    fleetManagementTitle: 'Fleet Management System - Real-time Monitoring',
    todayEfficiencyTitle: "Today's Transportation Efficiency",
    efficiencyIncrease: '↗ +12.5%',
    vehiclesInTransitLabel: 'In Transit',
    pendingScheduleLabel: 'Pending Schedule',
    keyTransportRoutes: 'Key Transportation Routes',
    routeLaToVegas: 'Los Angeles → Las Vegas',
    routeLaToPhoenix: 'Los Angeles → Phoenix',
    routeSdToLa: 'San Diego → Los Angeles',
    estimatedArrival2h: 'ETA 2 hours',
    estimatedArrival4h: 'ETA 4 hours',
    slightDelay: 'Slight delay',
    routeStatusNormal: 'Normal',
    routeStatusInTransit: 'In Transit',
    routeStatusDelayed: 'Delayed',
    realtimeTransportStatus: 'Real-time Transport Status',
    capacityUtilization: 'Capacity Utilization',
    avgDelay: 'Avg Delay',
    smartTransportScheduling: 'Smart Transportation Scheduling',
    smartTransportSchedulingDesc:
      'Intelligent planning of optimal transport routes and modes (FTL/LTL) based on geographic location, time requirements, and cargo dimensions',
    realtimeFleetManagement: 'Real-time Fleet Management',
    realtimeFleetManagementDesc:
      'End-to-end tracking of vehicle GPS location, in-transit status, estimated delivery time, and proof of delivery (POD)',
    carrierIntegration: 'Deep Carrier Integration',
    carrierIntegrationDesc:
      'Seamless integration with UPS and USPS systems through APIs, automatic waybill generation, label printing, and "last mile" tracking',
    multiPlatformFulfillment: 'Multi-Platform Sales Fulfillment',
    multiPlatformFulfillmentDesc:
      'Supporting logistics fulfillment for Amazon, Temu, TikTok, and independent websites',
    ownTrucksCount: '450+',
    ownTrucksLabel: 'Self-Operated Trucks',
    onTimeDeliveryRate: '95%',
    onTimeDeliveryLabel: 'On-Time Delivery Rate',
    realtimeMonitoringLabel: 'Real-time Monitoring',

    // 运输记录和状态
    avgDelayValue: '1.2 hours',
    transportRecord1: 'Vehicle T-2023 → LA Warehouse',
    transportRecord2: 'Vehicle T-2024 → Las Vegas',
    transportRecord3: 'Vehicle T-2025 → Phoenix',
    statusArrived: 'Arrived',
    statusInTransit: 'In Transit',
    statusLoading: 'Loading',

    // 新增的时间和系统标签
    timeLabel0600: '06:00',
    timeLabel0900: '09:00',
    timeLabel1200: '12:00',
    timeLabel1500: '15:00',
    timeLabel1800: '18:00',
    efficiencyChartTitle: 'Efficiency Chart',
    systemStatus: 'System Status',

    // 新增数值显示
    dashboardValue2847: '2,847',
    dashboardValue1234: '1,234',
    dashboardValue15678: '15,678',
    dashboardValue456: '456',

    // AGV和仓储系统
    agvStatusActive: 'Active',
    sortingStatusActive: 'High-Speed Operation',

    // 车队具体数值
    fleetValue342: '342',
    fleetValue108: '108',
    utilizationValue89: '89%',
  },
}

// 获取翻译文本的帮助函数
const getText = (key: TranslationKey): string => {
  const currentLang = locale.value as 'zh' | 'en'
  return translations[currentLang]?.[key] || translations.zh[key]
}

// 注释：技术特色和系统优势数据已移到模板中直接使用
</script>
