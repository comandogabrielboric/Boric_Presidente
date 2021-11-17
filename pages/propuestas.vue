<template lang="pug">
.propuestasRoot
	n-child(@montado="verSiHayQueAbrirUnaPropuesta")
	.storytelling
		.filtroBlur
			img.noMovil(
				src="/imagenes/header-boric-1920x850.jpg",
				alt="Súmate a cambiar Chile"
			)
			img.noCompu(
				src="/imagenes/header-propuestas-movil-boric.webp",
				alt="Súmate a cambiar Chile"
			)
		.tituloHead.noCompu
			.tit Propuestas #[span.light para]
			.tit #[span.light un] nuevo Chile
			.sub Cambios para vivir mejor

	section.propuestas(v-if="setPropuestas")
		.curva.curvaSuperior

		.caja-propuestas
			.propuesta(
				v-for="propuesta in setPropuestas",
				:key="propuesta.id",
				@click="abrirPropuesta(propuesta.id, propuesta.Slug)"
			)
				.prop
					img.imagenDePropuesta(
						v-if="propuesta.imagen",
						:src="propuesta.imagen.url",
						:alt="propuesta.textoAlternativoImagen"
					)
					h2.tituloPropuesta {{ propuesta.titulo }}

			a-modal.modalPropuesta(
				:visible="mostrandoPropuesta",
				:footer="null",
				@close="mostrandoPropuesta = false",
				@cancel="mostrandoPropuesta = false",
				centered,
				:width="null"
			)
				div(slot="title")
					.pretitulo Propuestas programáticas
					.titulo {{ propuestaMostrada && propuestaMostrada.titulo }}
					.modoVisualizacion
						a.modo(
							href="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/programa/Plan+de+gobierno+AD+2022-2026+(1).pdf",
							target="_blank",
							@click="$gtm.push({ event: 'link-home', hacia: 'descargar programa' })",
							download
						) Ver programa completo
						//- .modo(@click="modoVisualizacion = 'pdf'" :class="{activo: modoVisualizacion === 'pdf'}") Ver en PDF
						//- a.modo(:href="propuestaMostrada.pdfURL" download target="_blank" rel="noreferer noopener") Descargar PDF
				.cuerpoPropuesta(v-if="propuestaMostrada")
					transition-group(mode="out-in")
						.pdf(v-show="modoVisualizacion === 'pdf'", key="pdf")
							iframe(
								:src="`https://docs.google.com/viewer?url=${propuestaMostrada.pdfURL}&embedded=true`",
								frameborder="0",
								height="500px",
								width="100%"
							)
						.html(v-show="modoVisualizacion === 'html'", key="html")
							.ql-editor.contenidoHTML(v-html="propuestaMostrada.html")

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
		return {
			propuestas: [],

			seo: null,

			imagen: null,
			altImg: null,
			// pilares: null,
			programaArchivo: null,

			propuestaIdMostrada: this.propuestaSlug,
			mostrandoPropuesta: null,
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
		propuestaSlug () {
			return this.$route.params.propuestaSlug
		},
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
			console.log(this.prop)
			this.propuestaIdMostrada = propuestaID
			this.$nextTick(() => {
				// console.log('ruta', this.$route)
				if (this.propuestaMostrada) {
					this.$router.push(`/propuestas/${slug}/${this.$route.hash}`)
				}
			})
		},
		verSiHayQueAbrirUnaPropuesta ({ propuestaSlug }) {
			const propuestas = this.setPropuestas
			const propuestaParaAbrir = this._.filter(propuestas, [
				'Slug',
				propuestaSlug
			])
			// console.log('prop a abrir', propuestaParaAbrir, propuestas)
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
	background-color: $petroleo2
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
				max-width: 350px
				max-height: 100%
	.tituloHead
		position: absolute
		top: 1.9em
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
		+movil
			top: 6.5em
section
	position: relative
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: $petroleo2
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)

		height: 3em
		margin-top: -1.2em
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

.contenidoHTML
	width: 900px
	max-width: 100%
	margin: 0 auto
	background-color: #fff
	padding: 4rem
	+movil
		padding: 1rem
		font-size: .889em
	text-align: justify
	justify-content: justify
	::v-deep
		*
			font-family: lexia, Lucida Sans, Lucida Grande, sans-serif
			line-height: 1.4
		h1
			font-weight: 900
			font-style: italic
			margin-top: 2rem
			color: #19CBB5
		h2
			font-size: 1.4rem
			margin-bottom: 1em
			margin-top: 1.4rem
			font-weight: 900
			font-style: italic
			color: #094C67
		h1 + p
			margin-top: 2rem
		p,
		li
			font-size: 1rem
			line-height: 1.8
			margin-bottom: .8rem
			+movil
				line-height: 1.6
		strong
			font-weight: bold
			font-style: italic
		b
			font-weight: bold
		ol
			margin: 2em 0
		a
			all: revert

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

.modalPropuesta
	::v-deep
		.ant-modal-mask
			backdrop-filter: blur(.5em)
		.ant-modal
			width: auto
			max-width: 100%
			margin: 0
			// color: inherit
			.ant-modal-content
				height: 80vh
				background-color: transparent
				+movil
					height: 100vh
				// background-color: red
				display: flex
				flex-flow: column nowrap
				.ant-modal-header
					flex: auto 0 0
					padding: 2em
					background-color: transparentize($fondoBody, .2)
					backdrop-filter: blur(1em)
					width: 900px
					background-color: #19CBB5
					.pretitulo
						color: rgba(219, 248, 123, 1)
						font-weight: 900
						margin-bottom: .5em
						opacity: .6
					.titulo
						color: #fff
						font-weight: 900
						font-style: italic
						line-height: 1.4
						display: flex
						max-width: 95vw
					.modoVisualizacion
						color: rgba(23, 117, 150, 1)
						display: flex
						// margin-top: .5em

						.modo
							color: #fff
							text-decoration: underline
							cursor: pointer
							// font-size: .8em
							transition: opacity .15s ease
							&.activo
								// opacity: 1
								color: lighten(rgba(23, 117, 150, 1),10%)
						.modo + .modo
							margin-left: 1rem
					+movil
						padding: 1em
						.pretitulo
							font-size: .8em
						.titulo
							font-size: 1em
				.ant-modal-body
					flex: auto 1 1
					max-height: 100%
					overflow-y: auto
					padding: 0
					display: flex
					flex-flow: column nowrap
					width: 900px
					max-width: 100%
					.cuerpoPropuesta
						&,
						& > span,
						& > span > div,
						& > span > div > iframe
							flex: auto 1 1
							display: flex
							flex-flow: column nowrap
					.pdf,
					.html
						flex: auto 1 1
						width: 900px
						max-width: 100%
					+salir
						opacity: 0
</style>

