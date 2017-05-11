<!-- @author wangxiang -->
<template>
  <div class="page apiDemo">
    <div class="mapContainer" ref="mapContainer">
      <MapScaleControlTools :mapInstance="mapInstance"></MapScaleControlTools>
    </div>
  </div>
</template>

<script>
  import { initMap } from '@/utils/AMap/amap.js'
  import MapScaleControlTools from '@/components/componentsForAMap/mapScaleControlTools.vue'

  export default {
    data () {
      return {
        mapInstance: {}
      }
    },
    components: {
      MapScaleControlTools
    },
    mounted () {
      this.mapInstance = initMap(this.$refs['mapContainer'])
    },
    destroyed () {
      this.mapInstance && this.mapInstance.destroy()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page.apiDemo {

    .mapContainer {
      flex: 1;
    }

  }
</style>
