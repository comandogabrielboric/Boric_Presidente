<template lang="pug">
.propuestasRoot

	.zonaImagen(v-if="imagen")
		img.imagenPrograma(:src='imagen.url' :alt='altImg')

	section.pilares(v-if="pilares")
		.ql-editor.contenidoHTML(v-html='pilares')


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
		a.descargable(v-if="programaArchivo" :href='programaArchivo.url' target="_blank" download :name="programaArchivo.name" :title="programaArchivo.alternativeText")
			.dentro
				.oicono.descargar
				.texto Descargar programa completo
</template>

<script>
export default {
	data () {
		return {
			propuestas: [],

			seo: null,

			imagen: null,
			altImg: null,
			pilares: null,
			programaArchivo: null,


			propuestaseleccionada: null,
			contenido: null
		}
	},
	// solicita info a cms
	async fetch () {
		const _ = this._
		console.log('FETCH')
		const respuesta = await this.$olicitar(`${process.env.apiURL}/programa`)
		// console.log('respuesta', respuesta)
		// const ejemplo = {
		// 	_id: '61413ba1ca5342206a85774f',
		// 	titulo: 'Transición Energética Justa, Democrática y Popular',
		// 	contenido: '<p>NERGÍA EN LA BASE DE',
		// 	pag_ubicacion: 44,
		// 	published_at: '2021-09-15T00:17:48.042Z',
		// 	createdAt: '2021-09-15T00:17:37.045Z',
		// 	updatedAt: '2021-09-15T00:17:48.577Z',
		// 	__v: 0,
		// 	imagen: {
		// 		_id: '613a0919812a3c33c826bad7',
		// 		name: 'https://i.ibb.co/1Xbg5qN/energiaymineria.png',
		// 		alternativeText: '',
		// 		caption: '',
		// 		hash: 'energiaymineria_e801693e29',
		// 		ext: '.png',
		// 		mime: 'image/png',
		// 		size: 4.14,
		// 		width: 250,
		// 		height: 250,
		// 		url: 'https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/energiaymineria_e801693e29.png',
		// 		formats: {
		// 			thumbnail: {
		// 				name: 'thumbnail_https://i.ibb.co/1Xbg5qN/energiaymineria.png',
		// 				hash: 'thumbnail_energiaymineria_e801693e29',
		// 				ext: '.png',
		// 				mime: 'image/png',
		// 				width: 156,
		// 				height: 156,
		// 				size: 6.89,
		// 				path: null,
		// 				url: 'https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/thumbnail_energiaymineria_e801693e29.png'
		// 			}
		// 		},
		// 		provider: 'aws-s3',
		// 		related: [
		// 			'61413ba1ca5342206a85774f'
		// 		],
		// 		createdAt: '2021-09-09T13:16:09.674Z',
		// 		updatedAt: '2021-09-15T00:17:37.310Z',
		// 		__v: 0,
		// 		id: '613a0919812a3c33c826bad7'
		// 	},
		// 	id: '61413ba1ca5342206a85774f'
		// }
		this.propuestas = respuesta.propuestas // Array


		// SEO
		// const ejemploSEO = {
		// 	_id: '6141409e6322394f5721fc7e',
		// 	titulo_pag: 'boricpresidente pilares',
		// 	descripcion_pag: 'Programa y propuestas Gabriel Boric',
		// 	__v: 0,
		// 	id: '6141409e6322394f5721fc7e'
		// }
		this.seo = respuesta.SEO


		// IMAGEN
		// console.log('respuesta.imagen', respuesta.imagen)
		const componenteImagen = respuesta.componenteImagen
		this.imagen = componenteImagen.imagen
		this.altImg = componenteImagen.textoAlternativoImagen


		// PILARES
		this.pilares = this.$sanitizar(respuesta.Texto_pilares)


		this.programaArchivo = _.get(respuesta, ['Archivo_programa'])
	},
	head () {
		if (!this.seo) return {}
		const titulo = this.seo.titulo_pag
		const descripcion = this.seo.descripcion_pag
		const obj = {
			title: titulo,
			description: descripcion,
			meta: [
				{ hid: 'iprop:name', itemprop: 'name', content: titulo },
				{ hid: 'iprop:description', itemprop: 'description', content: descripcion },
				{ hid: 'iprop:image', itemprop: 'image', content: '/imagenes/portada.jpg' },
				{ hid: 'og:title', property: 'og:title', content: titulo },
				{ hid: 'og:description', property: 'og:description', content: descripcion },
				{ hid: 'og:image', property: 'og:image', content: '/imagenes/portada.jpg' },
				{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
				{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
				{ hid: 'twitter:image', property: 'twitter:image', content: '/imagenes/portada.jpg' }
			]
		}
		return obj
	},

	computed: {
		// retorna id de propuestas
		propuestasID () {
			return this.propuestas.map(a => a._id)
		},
		// porcesa markdown contenido propuestas
		Markdownpropuesta () {
			return this.$sanitizar(this.contenido)
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
@import '~/estilos/utils'
.propuestasRoot
	background-color: #eee
	section
		padding: 2em

// CONTENIDO HTML
.contenidoHTML
	max-width: 900px
	margin: 0 auto
	// border: 3px dashed orangered
	background-color: #fff
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
	padding: 4em
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

