<template lang="pug">
.propuestasRoot
	.storytelling
		.filtroBlur
			img.noMovil(
				src="/imagenes/foto-cabecera.jpg",
				alt="Súmate a cambiar Chile"
			)
			img.noCompu(
				src="/imagenes/foto-cabecera-movil-06 1.jpg",
				alt="Súmate a cambiar Chile"
			)
			.tituloHead
				.tit Propuestas #[span.light para]
				.tit #[span.light un] nuevo Chile
				.sub Cambios para vivir mejor

	section.propuestas(v-if="setPropuestas")
		.curva.curvaSuperior

		.caja-propuestas
			n-link.propuesta(
				v-for="propuesta in setPropuestas"
				:key="propuesta.id"
				:alt="`Propuestas - ${propuesta.titulo}`"
				:to="`/propuestas/${propuesta.Slug}/${$route.hash}`"
			)
				.prop
					img.imagenDePropuesta(
						v-if="propuesta.imagen",
						:src="propuesta.imagen.url",
						:alt="propuesta.textoAlternativoImagen"
					)
					h2.tituloPropuesta {{ propuesta.titulo }}



	.contenedorbtn
		a.button.boton(
			href="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/programa/Plan+de+gobierno+AD+2022-2026+(1).pdf",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'descargar programa' })",
			download
		)
			.p DESCARGAR PROGRAMA
	//- .contenedorbtn
		a.button.boton(
			href="https://drive.google.com/file/d/1kKP7eIUIM_4KJMvsL4VZv8l2lp89PXlX/view?usp=sharing",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'Link informe Proceso Participativo' })",
			download
		) Informe proceso participativo

	.relleno
</template>

<script>
export default {
	data () {
		const propuestaSlug = this.$route.params.propuestaSlug
		const setPropuestas = this.$store.state.propuestas
		const propuestaBruta = propuestaSlug && setPropuestas && this._.find(setPropuestas, p => p.Slug === propuestaSlug)
		const mostrandoPropuesta = !!(propuestaSlug && setPropuestas && propuestaBruta)

		console.log('propuestaSlug', propuestaSlug)
		console.log('this.$route.params.propuestaSlug', this.$route.params.propuestaSlug)
		console.log('setPropuestas', setPropuestas.length)
		console.log('propuestaBruta', propuestaBruta)
		const links = this._.map(setPropuestas, p => {
			const { titulo, Slug: slug } = p
			return { titulo, slug }
		})
		return {
			propuestas: [],

			seo: null,
			links,

			imagen: null,
			altImg: null,
			// pilares: null,
			programaArchivo: null,

			propuestaIdMostrada: propuestaSlug || null,
			propuestaBruta,
			mostrandoPropuesta,
			modoVisualizacion: 'html'
		}
	},
	// solicita info a cms
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(
			this.seo,
			['titulo_pag'],
			'Propuesta Programática'
		)
		const descripcion = this._.get(
			this.seo,
			['descripcion_pag'],
			'Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera. ¿Quieres conocer parte de nuestras propuestas?'
		)
		const imagen = '/imagenes/portadaMovil.web'
		const url = 'https://boricpresidente.cl/propuestas'
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
		propuestaSlug () { return this.$route.params.propuestaSlug },
		setPropuestas () {
			const props = this.$store.state.propuestas
			// console.log('propscc 1', props)
			return props
		},
		propuestaMostrada () {
			if (!this.propuestaIdMostrada) return null
			const propuestaBruta = this._.find(
				this.setPropuestas,
				p => p.id === this.propuestaIdMostrada
			)
			if (!propuestaBruta) return null

			return {
				titulo: propuestaBruta.titulo,
				html: propuestaBruta.contenido,
				pdfURL: this._.get(propuestaBruta, ['archivoPDF', 'url'])
			}
		}
		// propuestaAbierta () {
		// 	const propuestaSlug = this.propuestaSlug
		// 	const propuestas = this.setPropuestas
		// 	const matches = this._.filter(propuestas, ['Slug', propuestaSlug])
		// 	return matches[0] && matches[0]._id
		// }
	},
	watch: {
		mostrandoPropuesta (v) {
			if (!v) {
				if (this.propuestaMostrada) this.$router.push('/propuestas')
				setTimeout(() => {
					this.propuestaIdMostrada = false
					this.modoVisualizacion = 'html'
				}, 400)
			}
		},
		propuestaIdMostrada (v) {
			if (v) this.mostrandoPropuesta = true
		}
	},
	mounted () {
		window.setPropuestas = this
	},
	methods: {
		abrirPropuesta (propuestaID, slug) {
			console.log('abrirPropuesta', propuestaID, slug)
			if (propuestaID === this.propuestaIdMostrada) return
			this.propuestaIdMostrada = propuestaID
			this.$nextTick(() => {
				// console.log('ruta', this.$route)
				if (this.propuestaMostrada) {
					this.$router.push(`/propuestas/${slug}/${this.$route.hash}`)
				}
			})
		},
		abrirPropuestaDeChild ({ propuestaSlug }) {
			const propuestas = this.setPropuestas
			const propuestaParaAbrir = this._.filter(propuestas, ['Slug', propuestaSlug])
			console.log('prop a abrir', propuestaParaAbrir, propuestas)
			if (propuestaSlug) {
				const propuestaID = propuestaParaAbrir[0]._id
				this.abrirPropuesta(propuestaID, propuestaSlug)
			}
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.propuestasRoot
	background-image: url('/imagenes/textura.webp')
	display: flex
	align-items: center
	flex-flow: column
.storytelling
	display: flex
	justify-content: center
	max-height: calc(100vh - 5em)
	background-image: url('/imagenes/header-propuestas-movil-boric.webp')
	background-size: cover
	background-repeat: no-repeat
	img
		width: 225.89%
		height: 100%
		max-width: 100%
		max-height: 100%
		z-index: 5
		object-fit: cover

	.filtroBlur
		position: relative
		min-height: 250px
		width: 100vw
		display: flex
		justify-content: center
		z-index: 0
		backdrop-filter: blur(4px)
		+movil
			img
				width: 100%
				height: 198.69%
				max-width: 375px
				max-height: 100%
	.tituloHead
		position: absolute
		bottom: 1.9em
		z-index: 10
		.tit
			text-align: center
			font-size: 2rem
			font-weight: 900
			font-style: italic
			line-height: 1.1
			.light
				font-weight: 400
		.sub
			text-align: center
			font-size: 1.5rem
			font-style: italic
			font-weight: 100
			line-height: 1.1
		+compu
			top: 30%
			bottom: 0
			left: 15%
			z-index: 100
			.tit
				text-align: left
				font-size: 2.5rem
			.sub
				text-align: left
				font-size: 1.8rem
		+wide
			.tit
				font-size: 3rem
			.sub
				font-size: 2rem
		+ultra
			.tit
				font-size: 4.5rem
			.sub
				font-size: 3rem
section
	position: relative
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100%
		background-color: $petroleo2
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		height: 4em
		margin-top: -1.5em
		+compu
			height: 5em
			margin-top: -2em
			z-index: 1
		+ *,
		~ .sobreCurva
			position: relative
			z-index: 2

.relleno
	width: 100vw
	height: 7em


.contenedorbtn
	padding: 1.5em 1em
	display: flex
	justify-content: center
	text-align: center
	.boton
		display: flex
		margin: 0 auto
		cursor: pointer
		width: 100%
		max-height: 80px
		text-transform: uppercase
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
	.contenedorbtn
		.boton
			font-size: 1.3rem

.propuestas
	z-index: 0
	cursor: pointer
	.caja-propuestas
		display: flex
		flex-flow: row wrap
		justify-content: center
		max-width: 1800px
		.propuesta
			margin: 10px
			text-align: center
			padding: 5px
			flex: 340px 0 1
			transform-style: preserve-3d

			.prop
				min-height: 340px
				display: flex
				flex-flow: column
				align-items: center
				justify-content: center
				perspective: 500px
				.imagenDePropuesta
					$lado: 400px
					padding: 1em
					max-width: $lado
					max-height: $lado
					transition: all .3s ease
					z-index: 1
				.tituloPropuesta
					margin-top: -1em
					font-size: 2.3rem
					font-weight: 700
					font-style: italic
					line-height: 1.1
					color: #fff

				+movil
					.tituloPropuesta
						padding: 0 .5em
					.imagenDePropuesta
						$lado: 350px
						max-width: $lado
						max-height: $lado
			&:hover
				.imagenDePropuesta
					padding: 0
					filter: brightness(1.2)

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

</style>

