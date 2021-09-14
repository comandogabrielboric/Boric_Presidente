<template lang="pug">
.propuestasRoot

	.zonaImagen
		img.imagenPrograma(:src='imagen' alt='')

	a-button asdfafsd

	section.pilares(v-if="pilares")
		.contenidosHTML(v-for="(pilar, index) in pilares")
			.contenidoHTML(v-html='pilar.contenido1')


	//section.propuestas(v-if="propuestas")
		h1 Propuestas

		.caja-propuestas
			.contenedor-propuesta(v-for='propuesta in propuestas' :key='propuesta.id')
				div(@click='mostrar(propuesta)')
					img.img-propuesta(:src='propuesta.imagen.url' alt='')
					h2.titulo-propuesta
						| {{ propuesta.titulo }}

			transition(name='entrar')
				.contenido-propuesta(v-if='propuestaseleccionada !== null')
					div(v-html='Markdownpropuesta')


	.zonaDescargas
		a.descargable(:href='programa' target="_blank" download)
			.dentro
				.oicono.descargar
				.texto Descargar programa completo
</template>

<script>
export default {
	data () {
		return {
			propuestas: [],
			programa: null,
			imagen: null,
			seoimg: null,
			propuestaseleccionada: null,
			contenido: null,
			pilares: null
		}
	},
	// solicita info a cms
	async fetch () {
		console.log('cargar pagina')
		const programa = await fetch(`${process.env.apiURL}/programa`).then(res =>
			res.json()
		)
		this.propuestas = programa.propuestas
		this.programa = programa.Propuesta.url
		const imagen = programa.imagen[0]
		const imagen1 = imagen.imagen[0]
		this.imagen = imagen1.url
		this.seoimg = imagen.descripcionSEO

		const pilares = programa.pilares.contenido
		this._.forEach(pilares, (pilar, pindex) => {
			pilares[pindex].contenido1 = this.$demarcar(pilar.contenido1)
		})
		this.pilares = pilares

		console.log('%c PILARES', 'color: yellow', JSON.parse(JSON.stringify(pilares)))
	},

	computed: {
		// retorna id de propuestas
		propuestasID () {
			return this.propuestas.map(a => a._id)
		},
		// porcesa markdown contenido propuestas
		Markdownpropuesta () {
			return this.$demarcar(this.contenido)
		}
	},
	methods: {
		// metodo para seleccionar una propuesta y renderizas su contenido
		mostrar (propuesta) {
			console.log('mostrando', this.mostrarpropuesta)
			if (this.propuestaseleccionada === propuesta._id) {
				this.propuestaseleccionada = null
				this.contenido = null
				console.log('anulando', this.propuestaseleccionada)
			} else {
				this.propuestaseleccionada = propuesta._id
				this.contenido = propuesta.contenido
				console.log('mostrando', this.propuestaseleccionada)
			}
			console.log('propuestasID', this.propuestasID)
			console.log('propuesta seleccionada', propuesta._id)
		}
	}
}



</script>

<style lang="sass" scoped>
@import '~/sass/utils'
.propuestasRoot
	section
		padding: 2em

// CONTENIDO HTML
.contenidoHTML
	max-width: 900px
	margin: 0 auto
	border: 3px dashed orangered
	padding: 2em
	text-align: justify
	justify-content: justify
	::v-deep
		line-height: 1.4
		h1 + p
			margin-top: 2rem
		p
			line-height: 1.8
		strong
			font-weight: bold
		b
			font-weight: bold
		ol
			margin: 2em 0

.zonaImagen
	.imagenPrograma
		min-width: 100%
		min-height: 230px
		position: relative
		left: 50%
		transform: translateX(-50%)

.zonaDescargas
	display: flex
	justify-content: center
	padding: 1em
	.descargable
		border: 1px solid red
		padding: 2em
		.dentro
			display: flex
			align-items: center
			.oicono +.texto
				margin-left: 1em

// PILARES

// PROPUESTAS
.propuestas
	padding: 10px
	z-index: 1

	.caja-propuestas
		display: flex
		flex-wrap: wrap
		position: relative
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-content: center
		align-items: center

		.contenedor-propuesta
			max-width: 150px
			height: 200px
			display: flex
			flex-wrap: wrap
			justify-content: center
			border-width: 5px
			margin: 10px
			text-align: center
			padding: 5px

			.img-propuesta
				max-width: 100px
				max-height: 100px
				z-index: 1


		.contenido-propuesta
			width: 80vw
			height: 40vh
			overflow-y: scroll
			transition: .5s
			top: 50%
			background: rgb(255, 255, 255)
			padding: 20px
			+salir
				max-height: 0
				opacity: 0
			+saliendo
				max-height: 100vh
				overflow: hidden




@media screen and (min-width: 1024px)
	.descargable-programa
		width: 50vw
		text-align: center




</style>

