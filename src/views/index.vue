<!-- @author wangxiang -->
<template>
  <div class="page index">
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script>
  import { initMap } from '@/utils/AMap/amap.js'

  export default {
    data () {
      return {
        mapInstance: null
      }
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
  .page.index {

    .mapContainer {
      flex: 1;
    }

  }
</style>
