<template lang="pug">
.root
	section.destacadas Seccion actividades destacadas
	.filtros
		.contenedorTitulo
			.tituloF Filtros de busqueda
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

			.filtroFecha fecha
				a-calendar(:fullscreen="false", @select="onPanelChange")
			.filtroHorario horario
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
			momentoSeleccionado: null
		}
	},
	computed: {
		actividades () {
			const a = this.$store.state.actividades
			return a
		},
		regiones () {
			const re = regionesComunas.regionesComunas
			// const arrayregiones = this._.map(re, 'label')
			return re
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
			this.hoyMetodo()
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

section
	min-height: 20vh
	width: 100%

.filtros
	border: 1px solid red
	padding: 1em
	.contenedorTitulo
		text-align: center
		width: 100%
	.contenedorFiltros
		display: flex
		justify-content: space-evenly
		.input
			width: 120px
			border-radius: 2px
			margin-bottom: .1em
			&::placeholder
				font-size: 1.1rem
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
