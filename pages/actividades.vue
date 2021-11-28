<template lang="pug">
.root
	section.destacadas
		.cabecera
			.titulo Proximas actividades
		.contenedorActividades
			mapa(:marcadores="marcadores", controles)

	.filtros
		.contenedorPrimario
			.contenedorFiltros
				.filtroRegion
					a-select.input(
						aria-label="Región",
						@change="handleChange",
						placeholder="Región"
					)
						a-select-option(
							v-for="region in regiones",
							:key="`region-${region.value}`",
							:value="region.reg"
						) {{ region.label }}

				.filtroComuna
					a-select.input(
						v-if="!actividadesFiltradas",
						aria-label="Comuna",
						placeholder="Comuna",
						@change="handleComuna"
					)
						a-select-option(
							v-for="a in actividades",
							:key="`comuna-${a._id}`",
							:value="a.Comuna"
						) {{ a.Comuna }}

					a-select.input(
						v-else,
						aria-label="Comuna",
						placeholder="Comuna",
						@change="handleComuna"
					)
						a-select-option(
							v-for="a in actividadesFiltradas",
							:key="`comuna-${a._id}`",
							:value="a.Comuna"
						) {{ a.Comuna }}

				.filtroFecha
					.nombre.boton(@click="abrirCalendario = !abrirCalendario") fecha
					transition(:duration="300")
						.calendario(v-if="abrirCalendario")
							a-calendar(:fullscreen="false", @select="onPanelChange")
				//- .filtroHorario
				//- 	.nombre.boton horario

	section.act
		.contenedorActividades(v-if="!actividadesFiltradas")
			.cajaActividad(
				v-for="a in actividades",
				:key="a._id",
				@click="verActividad(a)"
			)
				.cajaInterior(:style="`background-image: url(${a.Imagen_principal.url})`")
					.contendorTitulo
						.fondo
						.titulo {{ a.Titulo }}
					.fondoHover
						.contenido
							.titulo {{ a.Titulo }}
							.descripcion
								.ql-editor.contenidoHTML(v-html="a.Descripcion")
							.contenedorFecha
								.fecha {{ a.Fecha_del_evento }}
								.hora {{ a.hora_del_evento }}

				.lugar {{ a.Lugar_del_evento }}

		.contenedorActividades(v-else)
			.cajaActividad(
				v-for="a in actividadesFiltradas",
				:key="a._id",
				@click="verActividad(a)"
			)
				.cajaInterior(:style="`background-image: url(${a.Imagen_principal.url})`")
					.contendorTitulo
						.fondo
						.titulo {{ a.Titulo }}
					.fondoHover
						.contenido
							.titulo {{ a.Titulo }}
							.descripcion
								.ql-editor.contenidoHTML(v-html="a.Descripcion")
							.contenedorFecha
								.fecha {{ a.Fecha_del_evento }}
								.hora {{ a.hora_del_evento }}

				.lugar {{ a.Lugar_del_evento }}

	a-modal.modal(
		:visible="visible",
		@ok="handleOk",
		@cancel="handleOk",
		:footer="null"
	)
		.contenidoModal(v-if="actividadSolicitada")
			.lado
				.titulo {{ actividadSolicitada.Titulo }}
				.descripcion
					.ql-editor.contenidoHTML(v-html="actividadSolicitada.Descripcion")
				.ubicacion
					.lugar {{ actividadSolicitada.Lugar_del_evento }}
					.direccion {{ actividadSolicitada.Direccion }}
						| | {{ actividadSolicitada.Comuna }}
					.region {{ actividadSolicitada.Regiones }}
				.contenedorFecha
					.fecha {{ actividadSolicitada.Fecha_del_evento }}
					.hora {{ actividadSolicitada.hora_del_evento }}
			.lado
</template>
<script>
import moment from 'moment-timezone'
import regionesComunas from '../regiones/regioneschile'

export default {
	data () {
		return {
			actividadSolicitada: null,
			visible: false,
			regionseleccionada: null,
			comunaSeleccionada: null,
			region: undefined,
			comuna: undefined,
			hoy: null,
			hora: null,
			momentoSeleccionado: null,
			abrirCalendario: null
		}
	},
	computed: {
		actividades () {
			return this.$store.state.actividades
		},
		marcadores () {
			// [{ id: 'a', imagen: false, latlon: [-33.429413, -70.627576] }, { id: 'b', imagen: false, latlon: [-33.425555, -70.620127] }]
			return this._.map(this.actividades, a => {
				const latlon = this._.map(a.coordenadas_geograficas.split(', '), l =>
					Number(l)
				)
				return {
					id: a._id,
					latlon,
					imagen: this._.get(a, ['Imagen_principal', 'url'])
				}
			})
		},
		regiones () {
			return regionesComunas.regionesComunas
		},
		comunas () {
			const re = this.regiones
			const com = this._.filter(re, ['reg', this.regionseleccionada])
			const comunas = com[0].children
			return comunas
		},
		comunasSelect () {
			const actividades = this._.cloneDeep(this.actividades)
			return actividades
		},
		actividadesFiltradas () {
			const _ = this._
			const actividades = this._.cloneDeep(this.actividades)
			const reg = this.regionseleccionada
			const pf = _.filter(actividades, { Regiones: reg })

			const com = this.comunaSeleccionada
			const cf = _.filter(actividades, { Comuna: com })

			const mS = this.momentoSeleccionado
			const monFormat = moment(mS).format('YYYY-MM-DD')
			const mF = _.filter(actividades, { Fecha_del_evento: monFormat })

			const filtradas = _.concat(pf, cf, mF)

			if (!filtradas[0]) return null

			return filtradas
		}
	},
	methods: {
		verActividad (a) {
			this.actividadSolicitada = a
			this.visible = true
		},
		handleOk (e) {
			this.visible = false
			setTimeout(() => {
				this.actividadSolicitada = null
			}, 200)
		},
		handleChange (value) {
			this.regionseleccionada = value
		},
		handleComuna (value) {
			this.comunaSeleccionada = value
		},
		onPanelChange (value, mode) {
			this.momentoSeleccionado = value._d
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.root
	background-color: $verde1
section
	min-height: 20vh
	width: 100%

.destacadas
	.cabecera
		width: 100%
		.titulo
			padding: .5em 1em 0 1em
			font-size: 2.5rem
	.contenedorActividades
		margin: 2em
		// padding: 1em
		overflow: hidden
		border-radius: 20px
		background-color: $petroleo1
		box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.62)
		// display: flex
		// flex-flow: row nowrap
		.mapa
			width: 100%
			height: 300px

.filtros

	display: flex
	justify-content: center
	position: relative
	.contenedorPrimario
		position: absolute
		top: -3.5em
		width: 80%
		border-radius: 50px
		padding: .5em
		background-color: #fff
		box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.62)
		.contenedorTitulo
			text-align: center
			width: 100%
		.contenedorFiltros
			display: flex
			justify-content: space-evenly
			.filtroRegion,
			.filtroComuna,
			.filtroFecha
				padding: 0 .3em
				width: 33.3%
				display: flex
				justify-content: center
			.input
				border-color: blue
				width: 100%
				border-radius: 2px
				margin-bottom: .1em
				&::placeholder
					font-size: 1.1rem
			.filtroFecha
				position: relative
				.nombre
					cursor: pointer
					border: 1px solid rgba(0, 0, 0, 0.25)
					width: 100%
					height: 32px
					padding: .47em 0 0 .5em
					border-radius: 4px
					background-color: #fff
					text-align: left
					color: $verde1
				.calendario
					position: absolute
					top: 100%
					left: -128px
					z-index: 5
					border-radius: 4px
					width: 300px
					transition: .3s all ease
					background-color: #d9d9d9
					+salir
						opacity: 0
						max-height: 0
					+saliendo
						max-height: 100vh
						overflow: hidden
.act
	margin-bottom: 3em
	.contenedorActividades
		display: flex
		justify-content: center
		padding: 1em
		display: flex
		flex-flow: row wrap
.cajaActividad
	margin: .5em
	.cajaInterior
		width: 150px
		height: 200px
		margin: 1em
		padding: 1em
		display: flex
		flex-flow: column nowrap
		justify-content: flex-end
		position: relative
		border-radius: 4px
		transition: .3s all ease
		.contendorTitulo
			.fondo
				margin-top: -2em
				display: flex
				align-items: center
				position: absolute
				background-color: transparentize(black, .6)
				mask-image: linear-gradient(transparent, rgba(0, 0, 0, 1))
				top: 75%
				bottom: 0
				left: 0
				right: 0
				z-index: 2
				border-radius: 4px
				backdrop-filter: blur(3px)
			.titulo
				position: relative
				padding-left: .5em
				z-index: 3
				text-transform: capitalize
				font-size: 1.3rem
		.fondoHover
			height: 0
			overflow: hidden
			position: absolute
			color: #000
			// top: 0
			bottom: 0
			left: 0
			right: 0
			border-radius: 4px
			background-color: rgba(240, 240, 240, 0.85)
			z-index: 6
			transition: .5s all ease
			box-shadow: -1px -5px 8px 0px rgba(255,255,255,0.75)
			box-shadow: -1px -5px 8px 0px rgba(255,255,255,0.75)
			box-shadow: -1px -5px 8px 0px rgba(255,255,255,0.75)
			.contenido
				height: 100%
				display: flex
				flex-flow: column nowrap
				justify-content: space-between
				padding: .5em
				opacity: 0
				transition: .5s all ease

		&:hover
			transform: scale(1.1)
			.fondoHover
				height: 100%
				box-shadow: unset
				backdrop-filter: blur(2px)
				>.contenido
					z-index: 6
					color: #000
					opacity: 1
					.descripcion
						max-height: 33%
						overflow: hidden
	.lugar
		font-style: italic
		font-style: 1rem
		padding: 0 1em
		max-width: 150px
		text-transform: lowercase
</style>
