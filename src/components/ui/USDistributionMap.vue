<template>
  <div class="us-distribution-map">
    <div ref="mapContainer" class="map-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 配送中心数据
interface DistributionCenter {
  id: string
  name: string
  state: string
  coordinates: [number, number]
  status: string
  description: string
}

const props = defineProps<{
  centers: DistributionCenter[]
}>()

const { locale } = useI18n()
const mapContainer = ref<HTMLElement>()
let map: L.Map | null = null

// 响应式颜色映射 - 支持多语言
const statusColors = computed(() => {
  const baseColors = {
    headquarters: '#2563eb',
    centralHub: '#059669',
    eastCoastCenter: '#dc2626',
    southCenter: '#ea580c',
  }

  if (locale.value === 'zh') {
    return {
      总部中心: baseColors.headquarters,
      中部枢纽: baseColors.centralHub,
      东海岸中心: baseColors.eastCoastCenter,
      南部中心: baseColors.southCenter,
    }
  } else {
    return {
      Headquarters: baseColors.headquarters,
      'Central Hub': baseColors.centralHub,
      'East Coast Center': baseColors.eastCoastCenter,
      'South Center': baseColors.southCenter,
    }
  }
})

// 自定义标记图标
const createCustomIcon = (status: string) => {
  const color = statusColors.value[status as keyof typeof statusColors.value] || '#6b7280'

  return L.divIcon({
    html: `
      <div class="custom-marker" style="
        width: 24px;
        height: 24px;
        background-color: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: -8px;
          left: -8px;
          width: 40px;
          height: 40px;
          background-color: ${color}20;
          border-radius: 50%;
          animation: pulse 2s infinite;
        "></div>
      </div>
    `,
    className: 'custom-div-icon',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  })
}

onMounted(() => {
  if (!mapContainer.value) return

  // 创建地图，中心设置在美国中部
  map = L.map(mapContainer.value, {
    center: [39.8283, -98.5795], // 美国地理中心
    zoom: 4,
    minZoom: 3,
    maxZoom: 10,
    scrollWheelZoom: false,
    dragging: true,
    zoomControl: true,
  })

  // 添加OpenStreetMap瓦片层
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map)

  // 添加配送中心标记
  props.centers.forEach((center) => {
    const marker = L.marker(center.coordinates, {
      icon: createCustomIcon(center.status),
    }).addTo(map!)

    // 添加弹窗信息
    const popupContent = `
      <div class="map-popup">
        <h3 class="font-semibold text-lg text-gray-900 mb-2">${center.name}</h3>
        <p class="text-sm text-gray-600 mb-2">${center.state}</p>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
          ${center.status}
        </span>
        <p class="text-sm text-gray-700 mt-2">${center.description}</p>
      </div>
    `

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'custom-popup',
    })
  })

  // 添加自定义CSS样式
  const style = document.createElement('style')
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.5; }
      100% { transform: scale(0.8); opacity: 1; }
    }

    .custom-popup .leaflet-popup-content-wrapper {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .map-popup {
      padding: 4px;
      min-width: 200px;
    }
  `
  document.head.appendChild(style)
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.us-distribution-map {
  @apply w-full h-full;
}

.map-container {
  @apply w-full h-96 rounded-lg overflow-hidden;
  min-height: 400px;
}

:deep(.leaflet-control-attribution) {
  @apply text-xs bg-white bg-opacity-80;
}

:deep(.leaflet-control-zoom) {
  @apply border-none;
}

:deep(.leaflet-control-zoom a) {
  @apply bg-white text-gray-700 border border-gray-300 hover:bg-gray-50;
}

:deep(.custom-div-icon) {
  @apply bg-transparent border-none;
}

:deep(.leaflet-popup-content) {
  @apply m-0;
}
</style>
