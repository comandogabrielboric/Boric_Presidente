// import {Map, TileLayer, Marker} from 'vue2-leaflet'
import Vue from 'vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import leaflet from 'leaflet'
require('leaflet/dist/leaflet.css')

Vue.component('VMap', LMap)
Vue.component('VTilelayer', LTileLayer)
Vue.component('VMarker', LMarker)

const leafletPlugin = {
	install () {
		if ((process.env.NODE_ENV === 'production') && Vue.__nuxt_leaflet_installed__) {
			return
		}
		Vue.__nuxt_leaflet_installed__ = true
		if (!Vue.prototype.$leaflet) {
			Vue.prototype.$leaflet = leaflet
		}
	}
}

Vue.use(leafletPlugin)

export default ctx => {
	const { app, store } = ctx

	app.$leaflet = Vue.prototype.$leaflet
	ctx.$leaflet = Vue.prototype.$leaflet
	if (store) {
		store.$leaflet = Vue.prototype.$leaflet
	}
}

export {
	leaflet
}
