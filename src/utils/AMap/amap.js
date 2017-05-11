/**
 * @author wangxiang
 */
import AMap from 'amap'
import { THEME as AMapTheme } from '@/config/AMapConfig/AMapConfig.js'

const ZOOM_DEFAULT = 7
const DEFAULT_POSITION = [ 108.187512, 35.024929 ]

export function initMap (mapContainerDOM) {
  return new AMap.Map(mapContainerDOM, {
    resizeEnable: true,
    mapStyle: AMapTheme,
    doubleClickZoom: false,
    center: DEFAULT_POSITION,
    zoom: ZOOM_DEFAULT
  })
}
