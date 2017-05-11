<template>
  <div id="app">
    <nav class="pageSideMenu">
      <el-menu :router="true" :default-active="defaultActive">
        <el-menu-item index="/">初始化地图</el-menu-item>
        <el-menu-item index="/markerDemo">AMap.Marker</el-menu-item>
        <el-menu-item index="/drivingDistanceDemo">获取驾车距离</el-menu-item>
        <el-menu-item index="/eventDemo">事件</el-menu-item>
        <el-menu-item index="/apiDemo">API的应用</el-menu-item>
        <el-menu-item index="/simpleMarkerDemo">SimpleMarker</el-menu-item>
      </el-menu>
    </nav>
    <div class="pageContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: '/'
      }
    },
    mounted () {
      this.defaultActive = this.$route.path
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;

  .pageSideMenu {
    flex: 0 0 200px;
    padding-top: 40px;
  }

  .pageContainer {
    flex: 1;
    display: flex;
    padding-left: 20px;

    & > .page {
      flex: 1;
      display: flex;
    }

  }


}
</style>
