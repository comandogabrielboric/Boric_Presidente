<template lang="pug">
.root
	section.destacadas
		.cabecera
			.titulo.noCompu Proximas actividades
			.contenedorActividades
				mapa.mapa(
					:marcadores="marcadores",
					controles,
					@clickMarcador="clickEnMarcador"
				)

			.filtros
				.contenedorPrimario(:class="Verfiltros ? 'mostrandoFiltros' : 'no'")
					img.noCompu(src="/svg/filtro.svg", @click="Verfiltros = !Verfiltros")
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
									:key="`comuna2-${a._id}`",
									:value="a.Comuna"
								) {{ a.Comuna }}
						.filtroFecha
							.nombre.boton(@click="abrirCalendario = !abrirCalendario") fecha
							transition(:duration="300")
								.calendario(v-if="abrirCalendario")
									a-calendar(
										:fullscreen="false",
										@select="onPanelChange",
										valueFormat="DD-MM-YYYY"
									)
						//- .filtroHorario
						//- 	.nombre.boton horario
				.reset
					.ResetarFiltro(@click="resetFiltros") Resetear filtros

	section.act
		.titulo.noMovil Proximas actividades
		.contenedorActividades(v-if="!actividadesFiltradas")
			.cajaActividad(
				v-for="a in actividades",
				:key="`actividades-${a._id}`",
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
				:key="`actividadesFiltradas-${a._id}`",
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
				.cima
					.principio
						.titulo {{ actividadSolicitada.Titulo }}
						.descripcion
							.ql-editor.contenidoHTML(v-html="actividadSolicitada.Descripcion")
					.contenedorFecha
						.fecha {{ actividadSolicitada.Fecha_del_evento }}
						.hora {{ actividadSolicitada.hora_del_evento }}
				.cima
					.tipo {{ actividadSolicitada.Lugar_del_evento }}
					.tipo {{ actividadSolicitada.Direccion }}, {{ actividadSolicitada.Comuna }}
					.tipo Región {{ actividadSolicitada.Regiones }}

			.lado
				mapa(
					:marcadores="[marcadorSeleccionado]",
					controles,
					:centro="marcadorSeleccionado.latlon",
					@clickMarcador="clickEnMarcador"
				)
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
			abrirCalendario: null,
			marcadorSeleccionado: null,
			Verfiltros: null,
			fechaSel: null
		}
	},
	computed: {
		actividades () {
			const act = this._.cloneDeep(this.$store.state.actividades)
			const activi = this._.map(act, a => {
				a.Fecha_del_evento = moment(a.Fecha_del_evento).format('DD-MM-YYYY')
				return a
			})
			const actividad = this._.map(activi, a => {
				a.hora_del_evento = a.hora_del_evento.slice(0, 5)
				return a
			})
			const sortedArray = actividad.sort(
				(a, b) =>
					moment(a.Fecha_del_evento, 'DD-MM').unix() -
					moment(b.Fecha_del_evento, 'DD-MM').unix()
			)
			// const actividades = this._.map(activi, a => {
			// 	a.hora_del_evento = moment(a.hora_del_evento)
			// 	return a
			// })
			return sortedArray
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
			const monFormat = moment(mS).format('DD-MM-YYYY')
			const mF = _.filter(actividades, { Fecha_del_evento: monFormat })
			console.log(mF)

			const filtradas = _.concat(pf, cf, mF)

			if (!filtradas[0]) return null

			return filtradas
		}
	},
	methods: {
		verActividad (a) {
			this.marcadorSeleccionado = this._.find(this.marcadores, { id: a._id })
			console.log(a.hora_del_evento)

			this.actividadSolicitada = a
			this.visible = true
		},
		clickEnMarcador ({ id }) {
			const act = this._.find(this.actividades, { _id: id })
			this.verActividad(act)
		},
		resetFiltros () {
			this.regionseleccionada = null
			this.comunaSeleccionada = null
			this.momentoSeleccionado = null
			this.region = undefined
			this.comuna = undefined
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
			console.log(value)
			this.momentoSeleccionado = value._d
			this.fechaSel = true
			this.abrirCalendario = null
			this.fechaSel = true
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
		+movil
			height: 420px
			.mapa
				height: 420px

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
					color: rgba(0, 0, 0, 0.25)
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
	.reset
		display: flex
		width: 100%
		justify-content: center
		padding-top: .5em
		.ResetarFiltro
			color: #d9d9d9

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
			box-shadow: -1px 9px 25px -5px rgba(0,0,0,0.62)
			.contendorTitulo
				.fondo
					margin-top: -2em
					display: flex
					align-items: center
					position: absolute
					background-color: transparentize(black, .6)
					mask-image: linear-gradient(transparent, rgba(0, 0, 	0, 1))
					top: 75%
					bottom: 0
					left: 0
					right: 0
					z-index: 2
					border-radius: 4px
					backdrop-filter: blur(3px)
				>.titulo
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

.modal
	.contenidoModal
		display: flex
		flex-flow: column nowrap
		// height: 50vh
		.lado
			width: 100%
			padding: 1em
			display: flex
			flex-flow: column nowrap
			justify-content: space-between
			>.mapa
				width: 100%
				height: 350px
			.cima
				display: flex
				flex-flow: column nowrap
				justify-content: space-between
				width: 100%
				.principio
					.titulo
						font-size: 1.7rem
						color: $verde2
						&::first-letter
							text-transform: capitalize
					.descripcion
						font-size: 1.1rem
				.contenedorFecha,
				.tipo
					font-size: 1.1rem
					padding: .2em 0
					&::first-letter
						text-transform: capitalize
			+compu
				.cima
					flex-flow: row nowrap
					justify-content: space-between
					&:first-child
						padding-bottom: 1em
					.principio
						.descripcion
							padding-right: 2em
					.tipo:nth-child(2)
						padding: 0 .2em
						margin: 0 .2em

+movil
	.filtros
		.contenedorPrimario
			width: 50px
			height: 50px
			left: 3em
			transition: all .3s ease
			overflow: hidden
			img
				padding: 5px
				width: 35px
			.contenedorFiltros
				display: none
			&.mostrandoFiltros
				height: 220px
				top: -220px
				width: 250px
				border-radius: 10px
				overflow: unset
				img
					width: 35px
				.contenedorFiltros
					display: flex
					flex-flow: column nowrap
					width: 100%
					overflow: unset
					.filtroRegion,
					.filtroComuna,
					.filtroFecha
						width: 100%
						padding: .5em
					.calendario
						left: 0

+compu
	.root
		display: flex
		flex-flow: row nowrap
		.destacadas
			padding-top: 2em
			height: 90vh
			max-width: 40vw
			.cabecera
				height: 75vh
				>.contenedorActividades
					height: 100%
					.mapa
						width: 100%
						height: 100%
		.act
			>.titulo
				font-size: 3rem
				text-align: right
				padding: .5em 2em 0 0
			.contenedorActividades
				padding-top: 0
				height: 100vh
				overflow: auto
</style>
