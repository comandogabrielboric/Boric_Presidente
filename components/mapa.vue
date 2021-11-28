<template lang="pug">
div.mapa
	.encima
		//- a-button(@click="reset") reset
		a-button(v-if="centrarEnMiBoton" @click="centrarEnMi" icon=" oicono mi-ubicacion")
		//a-button(v-if="centrarEnMiBoton" @click="centrarEnMi")
			.oicono.mi-ubicacion
	.zonaMapa
		VMap(v-if='montado && centroActivo' :zoom='zoom' :center='centroActivo' ref='mapa' @ready='mapReady')
			VTilelayer(:url='tileConfig.url' :tileSize="tileConfig.tileSize" :options="tileConfig.options")

			VMarker(v-for="marcador in marcadores" :key="`marcador-${marcador.id}`"
				:latLng='marcador.latlon'
				:icon='crearPointerMarcador(marcador.imagen)'
				@click="marcadorClickado(marcador)"

				:draggable='marcadorMovible'
				@update:latLng='alMoverMarcador')

</template>

<script>
export default {
	props: {
		marcadorMovible: { type: Boolean, default: false },
		mapaMovible: { type: Boolean, default: true },
		ruedaMouse: { type: Boolean, default: true },
		controles: { type: Boolean, default: false },

		centrarEnMiBoton: { type: Boolean, default: false },

		centro: { type: Array, required: false, default () { return [-33.4253156, -70.6332509] } },
		// marcadores: { type: Array, required: false, default () { return [{ id: 'a', imagen: false, latlon: [-33.429413, -70.627576] }, { id: 'b', imagen: false, latlon: [-33.425555, -70.620127] }] } }
		marcadores: { type: Array, required: true }
	},
	data () {
		return {
			zoom: 6,
			centroActivo: null,
			montado: false
		}
	},
	computed: {
		tileConfigx () {
			return {
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				tileSize: 256,
				options: {
				}
			}
		},
		tileConfig () {
			const oscuro = this._.get(this.$temaOscuro, 'isActive')
			const styleID = oscuro ? 'dark-v10' : 'outdoors-v11'
			const accessToken = 'pk.eyJ1IjoiZGFuaWJveG1hZ2ljIiwiYSI6ImNrb2NiODhwNTBnbTUybnVoZ2JycWh6ajUifQ.UTQ3eRgd2WH7IuVR5Ftw5Q'
			return {
				url: `https://api.mapbox.com/styles/v1/mapbox/${styleID}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
				// url: `https://api.mapbox.com/styles/v1/daniboxmagic/ckokklewq1d7t17pkj3gdlip0/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
				tileSize: 512,
				options: {
					attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
					accessToken,
					maxZoom: 18,
					zoomOffset: -1
				}
			}
		},
		map () { return this._.get(this.$refs, 'mapa.mapObject') }
	},
	watch: {
		'$temaOscuro.isActive' () {
			console.log('Tema cambió')
			this.inicializarMapa()
		},
		centro (v) {
			console.log('Centro cambió')
			this.centroActivo = v
			this.inicializarMapa()
		}
	},
	mounted () {
		console.log('%cMAPA' + '%c mounted', 'color: yellow', 'color: white')
		this.montado = true
		this.centroActivo = this.centro
		this.$nextTick(() => {
			this.inicializarMapa()
		})
	},
	methods: {
		mapReady () {
			console.log('mapReady')
			this.inicializarMapa()
		},
		inicializarMapa () {
			console.log('inicializarMapa')
			this.$nextTick(() => {
				if (!this.$refs.mapa) setTimeout(() => { this.inicializarMapa() }, 3000)
				else this.configurarMapa()
			})
		},
		configurarMapa () {
			console.log('configurarMapa')
			if (!this.mapaMovible) this.$refs.mapa.mapObject.dragging.disable()
			if (!this.ruedaMouse) this.$refs.mapa.mapObject.scrollWheelZoom.disable()
			if (!this.controles) this.$refs.mapa.mapObject.zoomControl.remove()

			setTimeout(() => { this.$refs.mapa.mapObject.invalidateSize() }, 500)
		},
		reset () {
			setTimeout(() => { this.$refs.mapa.mapObject.invalidateSize() }, 500)
		},
		crearPointerMarcador (imagen) {
			const vm = this
			let elemento = '<div class="contenido">'
			if (imagen) elemento += '<div class="imagen" style="background-image: url(' + imagen + ')"></div>'
			else elemento += '<div class="imagen"></div>'
			elemento += '</div>'
			return new vm.$leaflet.DivIcon({
				className: 'marcadorPointer',
				html: elemento,
				iconSize: [10, 10],
				iconAnchor: [5, 10]
			})
		},

		marcadorClickado (marcador) {
			console.log('marcadorClickado', marcador)
			this.$emit('clickMarcador', marcador)
		},
		alMoverMarcador () {
			if (!this.$refs.marcador) return
			console.log('alMoverMarcador', this.$refs.marcador.mapObject.getLatLng())
			this.$emit('latLgnChange', this.$refs.marcador.mapObject.getLatLng())
		},

		centrarEnMi () {
			console.log('centrarEnMi')
			if (navigator.geolocation) navigator.geolocation.getCurrentPosition(pos => this.centrarEn([pos.coords.latitude, pos.coords.longitude]))
			else console.log('centrarEnMi NO UTILIZABLE')
		},
		centrarEn (latlon) {
			console.log('centrarEn', latlon)
			this.map.panTo(latlon)
		}
	}
}
</script>

<style lang="sass" scoped>
.mapa
	min-height: 200px
	height: 100%
	//border: 1px solid cyan
	display: flex
	flex-flow: column nowrap
	position: relative
	.encima
		position: absolute
		z-index: 200
		// border: 1px solid red
		margin: 1em
	.zonaMapa
		height: 100%
.vue2leaflet-map
	z-index: 0
	width: 100%
	flex: auto 1 0
	min-height: 100px
	//::v-deep .leaflet-control-attribution
		display: none
	::v-deep .leaflet-bar a
		color: #000
	::v-deep
		.marcadorPointer
			position: relative
			// background-color: red
			&:focus
				outline: none
				-webkit-tap-highlight-color: transparent
			.contenido
				position: absolute
				left: 50%
				bottom: 0
				transform: translateX(-50%)

				$alturaPalito: 1rem
				$colorBordeyPalito: black
				.imagen
					$lado: 6em
					width: $lado
					height: $lado
					border-radius: $lado
					border-radius: .5em
					background-position: center
					background-size: cover
					background-repeat: no-repeat
					background-color: #fff
					position: relative
					bottom: $alturaPalito
					z-index: 0
					border: 1px solid #333
					&::after
						content: ''
						display: block
						height: $alturaPalito
						width: 2px
						background-color: $colorBordeyPalito
						position: absolute
						left: 50%
						top: 100%
						z-index: -1
						transform: translateX(-50%)
				.imagen
					border-color: black
					&::after
						background-color: black

// Colores
body.dark .marcadorPointer
	.imagen
		border-color: white
		&::after
			background-color: white
</style>
