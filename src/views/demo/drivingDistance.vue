<!-- @author wangxiang -->
<template>
  <div class="page drivingDistance">
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
      let startLngLat = new AMap.LngLat(113.935567, 22.53377) // 深圳大学
      let endLngLat = new AMap.LngLat(113.980542, 22.541856) // 欢乐谷
      this.getDrivingDistance('深圳', startLngLat, endLngLat).then(distance => {
        this.$msgbox({
          title: '查询结果',
          message: this.$createElement('div', `深圳大学到欢乐谷的距离驾车距离为：${distance}米`)
        })
      })
    },
    destroyed () {
      this.mapInstance && this.mapInstance.destroy()
    },
    methods: {
      getDrivingDistance (city, startLngLat, endLngLat) {
        return new Promise((resolve, reject) => {
          AMap.service('AMap.Driving', () => {
            let trans = new AMap.Driving({ city })
            trans.search(startLngLat, endLngLat, (status, result) => {
              if (status === 'complete') {
                resolve(result.routes[0].distance)
              } else {
                reject('error')
              }
            })
          })
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page.drivingDistance {

    .mapContainer {
      flex: 1;
    }

  }
</style>
