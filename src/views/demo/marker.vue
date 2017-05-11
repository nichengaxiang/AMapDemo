<!-- @author wangxiang -->
<template>
  <div class="page marker">
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script>
  import { initMap } from '@/utils/AMap/amap.js'
  import AMap from 'amap'

  export default {
    data () {
      return {
        mapInstance: null
      }
    },
    mounted () {
      this.mapInstance = initMap(this.$refs['mapContainer'])
      /* eslint-disable no-new */
      new AMap.Marker({
        map: this.mapInstance,
        zIndex: 1011,
        draggable: true,
        position: [ 108.187512, 35.024929 ],
        content: `<div class="MYMarker">我是标记点</div>`
      })
    },
    destroyed () {
      this.mapInstance && this.mapInstance.destroy()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page.marker {

    .mapContainer {
      flex: 1;

      .MYMarker {
        display: inline-block;
        width: 160px;
        height: 60px;
        line-height: 60px;
        color: #FFF;
        border-radius: 30px;
        background-color: #cd43fd;

        &:hover {
          background-color: #fd3232;
        }

      }

    }

  }
</style>
