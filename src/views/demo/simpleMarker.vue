<!-- @author wangxiang -->
<template>
  <div class="page simpleMarker">
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script>
  import { initMap } from '@/utils/AMap/amap.js'
  import AMapUI from 'amapUI'

  export default {
    data () {
      return {
        mapInstance: null
      }
    },
    mounted () {
      this.mapInstance = initMap(this.$refs['mapContainer'])
      AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
        /* eslint-disable no-new */
        new SimpleMarker({
          zIndex: 1011,
          iconLabel: {
            innerHTML: `<div class="MYMarker">我是SimpleMarker</div>`,
            style: {}
          },
          iconStyle: '<div class="MYLabelBg"></div>',
          map: this.mapInstance,
          position: [ 108.187512, 35.024929 ]
        })
      })
    },
    destroyed () {
      this.mapInstance && this.mapInstance.destroy()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page.simpleMarker {

    .mapContainer {
      flex: 1;

      .MYMarker {
        display: inline-block;
        width: 160px;
        height: 160px;
        line-height: 160px;
        color: #FFF;
        border-radius: 80px;
        background-color: #cd43fd;

        &:hover {
          background-color: #fd3232;
        }

      }

    }

  }
</style>
