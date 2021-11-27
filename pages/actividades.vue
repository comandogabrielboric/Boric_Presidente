<template lang="pug">
.root
	section.destacadas Seccion actividades destacadas
	.filtros
		.filtroRegion
		.filtroComuna
		.filtroFecha
		.filtroHorario
	section.act
		.contenedorActividades
			.cajaActividad(
				v-for="a in actividades",
				:key="a._id",
				@click="verActividad(a)"
			)
				.cajaInterior(:style="`background-image: url(${a.Imagen_principal.url})`")
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
					.region {{ actividadSolicitada.Region }}
				.contenedorFecha
					.fecha {{ actividadSolicitada.Fecha_del_evento }}
					.hora {{ actividadSolicitada.hora_del_evento }}
			.lado
</template>
<script>
export default {
	data () {
		return {
			actividadSolicitada: null,
			visible: false
		}
	},
	computed: {
		actividades () {
			const a = this.$store.state.actividades
			return a
		}
	},
	methods: {
		verActividad (a) {
			this.actividadSolicitada = a
			// console.log(this.actividadSolicitada)
			this.visible = true
		},
		handleOk (e) {
			// console.log(e)
			this.visible = false
			setTimeout(() => {
				this.actividadSolicitada = null
			}, 200)
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
				.fondo
					position: absolute
					// border: 1px solid #fff
					background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7))
					top: 0
					bottom: 0
					left: 0
					right: 0
					overflow: hidden
					z-index: 2
					border-radius: 4px
					img
						border-radius: 4px
						height: 100%
				.fondoHover
					height: 0
					overflow: hidden
					position: absolute

					// top: 0
					bottom: 0
					left: 0
					right: 0
					border-radius: 4px
					background-color: rgba(255, 255, 255, 0.8)
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
				.titulo
					z-index: 3
					text-transform: capitalize
					font-size: 1.3rem
				&:hover
					transform: scale(1.1)
					.fondoHover
						height: 100%
						box-shadow: unset
						>.contenido
							padding: .5em
							z-index: 6
							color: #000
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
