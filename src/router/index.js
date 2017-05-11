import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import MarkerDemo from '@/views/demo/marker.vue'
import DrivingDistanceDemo from '@/views/demo/drivingDistance.vue'
import EventDemo from '@/views/demo/eventDemo.vue'
import SimpleMarkerDemo from '@/views/demo/simpleMarker.vue'
import ApiDemo from '@/views/demo/apiDemo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/markerDemo', name: 'MarkerDemo', component: MarkerDemo },
    { path: '/drivingDistanceDemo', name: 'DrivingDistanceDemo', component: DrivingDistanceDemo },
    { path: '/eventDemo', name: 'EventDemo', component: EventDemo },
    { path: '/simpleMarkerDemo', name: 'SimpleMarkerDemo', component: SimpleMarkerDemo },
    { path: '/apiDemo', name: 'ApiDemo', component: ApiDemo }
  ]
})
