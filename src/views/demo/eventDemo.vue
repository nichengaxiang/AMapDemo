<!-- @author wangxiang -->
<template>
  <div class="page eventDemo">
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script>
  import { initMap } from '@/utils/AMap/amap.js'
  import AMap from 'amap'

  export default {
    data () {
      return {
        mapInstance: null,
        marker: null
      }
    },
    mounted () {
      this.mapInstance = initMap(this.$refs['mapContainer'])
      this.initMarker()
      this.initMarkerEvent()
    },
    destroyed () {
      this.mapInstance && this.mapInstance.destroy()
    },
    methods: {
      initMarker () {
        this.marker = new AMap.Marker({
          map: this.mapInstance,
          zIndex: 1011,
          draggable: true,
          position: [ 108.187512, 35.024929 ],
          icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
        })
      },
      initMarkerEvent () {
        this.marker.on('click', event => {
          const h = this.$createElement
          this.$msgbox({
            title: '标题',
            message: h('div', null, [
              h('p', `经纬度：${event.lnglat}`),
              h('p', `点：${event.pixel}`),
              h('p', `事件类型：${event.type}`)
            ])
          })
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page.eventDemo {

    .mapContainer {
      flex: 1;
    }

  }
</style>
