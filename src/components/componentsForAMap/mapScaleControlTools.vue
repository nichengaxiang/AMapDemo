<!-- @author wangxiang -->
<template>
  <div class="mapScaleControlTools scaleController">
    <div class="container">
      <a href="javascript: void(0)" @click="handleAddClick" class="icon add">+</a>
      <a href="javascript: void(0)" @click="handleSubtractClick" class="icon subtract">-</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      mapInstance: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleAddClick () {
        this.mapInstance.zoomIn()
      },
      handleSubtractClick () {
        this.mapInstance.zoomOut()
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .mapScaleControlTools.scaleController {
    width: 50px;
    height: 80px;
    box-sizing: border-box;
    padding: 0 5px;
    display: inline-block;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 10;
    background: rgba(183, 32, 231, 0.4);
    border-radius: 4px;

    .container {
      display: flex;
      flex-direction: column;
    }

    .icon {
      line-height: 40px;
      color: #eceae0;
      cursor: pointer;
      font-size: 26px;

      &:nth-of-type(1) {
        box-sizing: border-box;
        border-bottom: 1px solid rgba(50, 125, 213, 0.7);
      }

    }

  }
</style>
