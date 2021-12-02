<template lang="pug">
.rootPropuestaID(v-if="propuestaMostrada")
	.cabecera
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
	.cuerpoPropuesta
		transition-group(mode="out-in")
			.html(v-show="modoVisualizacion === 'html'", key="html")
				.ql-editor.contenidoHTML(v-html="propuestaMostrada.html") {{propuestaMostrada.html}}

			.pdf(v-show="modoVisualizacion === 'pdf'", key="pdf")
				iframe(v-if="propuestaMostrada.pdfURL"
					:src="`https://docs.google.com/viewer?url=${propuestaMostrada.pdfURL}&embedded=true`",
					frameborder="0",
					height="500px",
					width="100%"
				)
</template>
<script>
export default {
	data () {
		const propuestaSlug = this.$route.params.propuestaSlug
		const setPropuestas = this.$store.state.propuestas
		const propuestaBruta = propuestaSlug && setPropuestas && this._.find(setPropuestas, p => p.Slug === propuestaSlug)
		const casiDescripcion = propuestaBruta.contenido.split('</h1>')[0]
		const descripcion = this._.replace(casiDescripcion, /<[^>]*>/g, '')
		const propuestaMostrada = {
			titulo: propuestaBruta.titulo,
			html: propuestaBruta.contenido,
			pdfURL: this._.get(propuestaBruta, ['archivoPDF', 'url']),
			imagen: propuestaBruta.imagen,
			descripcion
		}

		// console.log('propuestaSlug', propuestaSlug)
		// console.log('this.$route.params.propuestaSlug', this.$route.params.propuestaSlug)
		// console.log('setPropuestas', setPropuestas.length)
		// console.log('propuestaBruta', propuestaBruta)
		// console.log('propuestaBruta COOORTA', this._.replace(casiDescripcion, /<[^>]*>/g, ' '))
		const links = this._.map(setPropuestas, p => {
			const { titulo, Slug: slug } = p
			return { titulo, slug }
		})
		return {
			seo: null,
			links,
			propuestaBruta,
			modoVisualizacion: 'html',
			propuestaMostrada
		}
	},
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(this.propuestaMostrada, ['titulo'], 'Propuesta Programática')
		const descripcion = this._.get(this.propuestaMostrada, ['descripcion'], 'Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera. ¿Quieres conocer parte de nuestras propuestas?')
		const imagen = this._.get(this.propuestaMostrada, ['imagen', 'url'])
		const url = this.propuestaSlug ? `https://boricpresidente.cl/propuestas/${this.propuestaSlug}` : 'https://boricpresidente.cl/propuestas'
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
		}
	},
	watch: {
		'$route.params.propuestaSlug' (v, h) {
			this.$emit('montado', { propuestaSlug: v })
		}
	},
	mounted () {
		this.$emit('montado', {
			propuestaSlug: this.$route.params.propuestaSlug
		})
		// console.log('montado slug', this.$route)
		window.pSlug = this
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'


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
				.ant-modal-body
					flex: auto 1 1
					max-height: 100%
					overflow-y: auto
					padding: 0
					display: flex
					flex-flow: column nowrap
					width: 900px
					max-width: 100%



.cabecera
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
		color: #0E6B8B
	.titulo
		color: #fff
		font-weight: 900
		font-style: italic
		line-height: 1.4
		display: flex
		max-width: 95vw
		font-size: 2rem
	.modoVisualizacion
		color: rgba(23, 117, 150, 1)
		display: flex
		// margin-top: .5em
		.modo
			color: #0E6B8B
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


.cuerpoPropuesta
	margin-bottom: 14em
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

</style>
