<template lang="pug">
.propuestasRoot
	.encabezado
		h1.titulo Programa en fácil

	.programaBook
		iframe(
			src="https://docs.google.com/viewer?srcid=1KD6OADNYMaC3rk3P29CP4h8UEEgrwctj&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
			width="100%",
			height="100%"
		)

	.plantas
		.lado.derecha
			img(src="/svg/plantas-09.svg")
		.lado.izquierda
			img(src="/svg/plantas-08.svg")
	.relleno
</template>

<script>
import alcaldes from '../alcaldes/alcaldes'

export default {
	data () {
		return {
			alcaldes,
			nFirmas: null
		}
	},
	// solicita info a cms
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(this.seo, ['titulo_pag'], 'inclusión')
		const descripcion = this._.get(
			this.seo,
			['descripcion_pag'],
			'Programa en fácil'
		)
		const imagen = '/imagenes/WEB-BANDERA.webp'
		const url = 'https://boricpresidente.cl/municipios'
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		obj.link = obj.link || []
		obj.link.push({
			hid: 'quill',
			rel: 'stylesheet',
			href: 'https://cdn.quilljs.com/1.0.0/quill.snow.css'
		})
		return obj
	},
	computed: {
		numeroFirmas () {
			return alcaldes.length
		},
		alcaldesSorted () {
			const as = this._.orderBy(alcaldes, a => a.Apellido)
			console.log(as)
			return as
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.firmantes
	font-size: 1.1em
	z-index: 100
	.texto
		padding: .5em
		color: $azul1
	.firmas
		height: 300px
		width: 300px
		padding: 1em
		text-transform: capitalize
		background-color: #fff
		overflow: auto
		.nombres
			list-style: none

.titulo
	+movil
		font-size: 2rem
	+compu
		font-size: 3rem
	+wide
		font-size: 4rem
	+ultra
		font-size: 5.4rem
.propuestasRoot
	background: linear-gradient(180deg, #119D88 0%, #16B6A1 55.21%, #19CBB5 100%)
	display: flex
	align-items: center
	flex-flow: column
	padding-bottom: 6em
.relleno
	width: 100vw
	height: 7em
.encabezado
	text-align: center
	font-style: italic
	font-size: 1rem
	.titulo
		padding: 1em 1em 0 1em
		line-height: 1.1
		color: $verde3
		font-weight: 900
		.sub
			color: #fff
			font-weight: 400
.programaBook
	width: 90vw
	// background-color: $petroleo1
	// max-height: 80vh
	height: 350px
	// padding: 1em
	z-index: 5
	iframe
		border-radius: 5px

.contenedorbtn
	padding-top: 1.5em
	display: flex
	justify-content: center
	.boton
		// transform: translateY(50%)
		display: flex
		margin: 0 auto
		cursor: pointer
		width: 100%
		max-height: 80px
		text-transform: uppercase
		text-align: center
		background-color: $petroleo1
		color: $verde3
		justify-content: center
		align-items: center
		border: 0
		border-radius: 5px
		margin-top: .5em
		z-index: 5
		font-size: 1.1rem
+compu
	.encabezado
		max-width: 1200px
		display: flex
		padding-bottom: 2em
	.titulo
		// font-size: 3.2rem
	.programaBook
		max-width: 1000px
		// max-height: 100vh
		height: 90vh
		padding: 1em 6em

	.contenedorbtn
		.boton
			font-size: 1.3rem
.plantas
	bottom: 22em
	position: absolute
	width: 100%
	// height: 300px
	display: flex
	flex-flow: row-reverse nowrap
	justify-content: space-between
	z-index: 0
	.lado
		margin: 0 -.5em
		img
			width: 100px
			transition: 1s all ease
	.izquierda > img
		width: 135px
	+compu
		bottom: 30em
		.lado
			margin: 0 -1em
			img
				width: 300px
		.izquierda > img
			width: 400px
	+wide
		bottom: 35em
	+ultra
		bottom: 42em
		.lado
			margin: 0 -1.5em
			img
				width: 320px
		.izquierda > img
			width: 435px
</style>

