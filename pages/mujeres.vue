<template lang="pug">
.root
	.header
		img.noMovil(src='/imagenes/compromiso-feminista-header-web.webp' alt="Compromiso Feminista")
		img.noCompu(src='/imagenes/compromiso-feminista-header-movil.webp' alt="Compromiso Feminista")

	.Compromiso
		.curva.curvaSuperior

		.contenido
			.titulo #[span.primero Compromiso]
				div para un futuro feminista
			.texto  Por primera vez en décadas una coalición con clara vocación transformadora puede ser gobierno, y las feministas asumimos la responsabilidad histórica que tenemos por delante. Las mujeres y disidencias de Apruebo Dignidad, nos comprometemos a #[span.Bold “Construir un Futuro Feminista”].

		.CompromisoFeminista
			.contenedorCarta
				.ql-editor.contenidoHTML(v-html='carta')
</template>
<script>
export default {
	async asyncData ({ app }) {
		const textos = await app.$olicitar(`${process.env.cmsURL}/compromiso-feminista`)
		const carta = app.$sanitizar(textos.cartaCompromiso)
		const textoIntroductorio = app.$sanitizar(textos.texto_introductorio)
		const data = {
			carta,
			textoIntroductorio
		}
		return data
	},
	data () {
		return {
			carta: null,
			textoIntroductorio: null,
			seo: null
		}
	},
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(this.seo, ['titulo_pag'], 'Compromiso feminista')
		const descripcion = this._.get(this.seo, ['descripcion_pag'], 'Las mujeres y disidencias de Apruebo Dignidad aquí reunidas, nos comprometemos a “Construir un Futuro Feminista”.')
		const imagen = '/imagenes/compromiso-feminista-header-web.webp'
		const url = 'https://boricpresidente.cl/mujeres'
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		obj.link = obj.link || []
		obj.link.push({ hid: 'quill', rel: 'stylesheet', href: 'https://cdn.quilljs.com/1.0.0/quill.snow.css' })
		return obj
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.header
	img
		width: 100%
		height: 67.18%
.Compromiso
	padding-bottom: 5em
	position: relative
	background-color: $verde1
	min-height: 80vh
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: $verde1
		// opacity: .5
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		height: 3em
		margin-top: -1.2em
		+compu
			height: 5em
			margin-top: -2em
		// z-index: 1
		~ .sobreCurva
			position: relative
			// z-index: 2

.contenido
	text-align: center
	display: flex
	flex-flow: column
	padding-bottom: 1.5em
	.titulo
		padding: .5em 0 .5em 0
		font-size: 2.5rem
		font-style: italic
		z-index: 3
		line-height: 1.2
		// padding: 0 0.5em
		.primero
			font-size: 3rem
			font-weight: 900
			color: $verde3
	.texto
		font-size: 1.2rem
		padding: 1em
		line-height: 1.2
		.Bold
			font-size: 1.3rem
			font-weight: 900

.CompromisoFeminista
	display: flex
	justify-content: center
	padding: 1em
	.contenedorCarta
		max-width: 740px
		height: 90vh
		max-height:750px
		overflow: auto
		background: #fff
		pading-bottom:2em
		margin-bottom: 2em
		border: 1px solid orange
.contenidoHTML
	width: 900px
	max-width: 100%
	margin: 0 auto
	height: 900px
	max-height: 100%
	// border: 3px dashed orangered
	background-color: #fff
	// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
	padding: 4rem
	+movil
		padding: 1rem
		font-size: .889em
	text-align: justify
	justify-content: justify
	::v-deep
		*
			font-family: lexia
			line-height: 1.4
		h1
			text-align: center
			font-weight: 900
			font-style: italic
			margin-top: 2rem
			color: $verde1
		h2
			text-align: center
			font-size: 1.4rem
			margin-bottom: 1em
			margin-top: 1.4rem
			font-weight: 900
			font-style: italic
			color: $verde2
		h1 + p
			margin-top: 2rem
		p,
		li
			font-size: 1rem
			line-height: 1.8
			margin-bottom: .8rem
			color: rgba(0,0,0,.7 )
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
</style>
