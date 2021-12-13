<template lang="pug">
.rootPropuestaID(v-if="propuestaMostrada")
	.cabecera
		nuxt-link.pretitulo(to="/propuestas") Propuestas programáticas
		.titulo {{ propuestaMostrada && propuestaMostrada.titulo }}
		.modoVisualizacion
			a.modo(
				href="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/programa/Plan+de+gobierno+AD+2022-2026+(2).pdf",
				target="_blank",
				@click="$gtm.push({ event: 'link-home', hacia: 'descargar programa' })",
				download
			) Ver programa completo
			//- .modo(@click="modoVisualizacion = 'pdf'" :class="{activo: modoVisualizacion === 'pdf'}") Ver en PDF
			//- a.modo(:href="propuestaMostrada.pdfURL" download target="_blank" rel="noreferer noopener") Descargar PDF
	.cuerpoPropuesta
		.html(v-show="modoVisualizacion === 'html'", key="html")
			.ql-editor.contenidoHTML(v-html="propuestaDestacadaHTML")
	.contendorBoton
		nuxt-link.boton(to="/propuestas") Volver a ver todas las propuestas
</template>
<script>
import Mark from 'mark.js'

export default {
	components: {},
	scrollToTop: true,
	data () {
		const propuestaSlug = this.$route.params.propuestaSlug
		const setPropuestas = this.$store.state.propuestas
		const propuestaBruta =
			propuestaSlug &&
			setPropuestas &&
			this._.find(setPropuestas, p => p.Slug === propuestaSlug)
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
			propuestaMostrada,
			propuestaDestacadaHTML: propuestaMostrada.html
		}
	},
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(
			this.propuestaMostrada,
			['titulo'],
			'Propuesta Programática'
		)
		const descripcion = this._.get(
			this.propuestaMostrada,
			['descripcion'],
			'Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera. ¿Quieres conocer parte de nuestras propuestas?'
		)
		const imagen = this._.get(this.propuestaMostrada, ['imagen', 'url'])
		const url = this.propuestaSlug
			? `https://boricpresidente.cl/propuestas/${this.propuestaSlug}`
			: 'https://boricpresidente.cl/propuestas'
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
		$route (to, from) {
			// Fix revisit of template:
			const propuestaSlug = this.$route.params.propuestaSlug
			this.setPropuestas = this.$store.state.propuestas
			this.propuestaBruta =
				propuestaSlug &&
				this.setPropuestas &&
				this._.find(this.setPropuestas, p => p.Slug === propuestaSlug)
			this.casiDescripcion = this.propuestaBruta.contenido.split('</h1>')[0]
			this.descripcion = this._.replace(this.casiDescripcion, /<[^>]*>/g, '')
			this.propuestaMostrada = {
				titulo: this.propuestaBruta.titulo,
				html: this.propuestaBruta.contenido,
				pdfURL: this._.get(this.propuestaBruta, ['archivoPDF', 'url']),
				imagen: this.propuestaBruta.imagen,
				descripcion: this.descripcion
			}

			this.links = this._.map(this.setPropuestas, p => {
				const { titulo, Slug: slug } = p
				return { titulo, slug }
			})

			this.destacarTextoBuscado(to)
		},
		propuestaDestacadaHTML () {
			window.setTimeout(this.saltarAPrimerElementoDestacado, 500) // Ugly Hack, but it works!
		}
	},
	mounted () {
		this.$root.$on('buscaPropuesta', () => {
			this.destacarTextoBuscado(this.$route)
		})
		this.destacarTextoBuscado(this.$route)
	},
	methods: {
		destacarTextoBuscado (url) {
			let queries = []
			url.hash.split(':').forEach(item => {
				const kv = item.split('=')
				if (kv.length >= 2 && kv[0] === 'text') {
					queries = decodeURIComponent(kv.slice(1).join('=')).split(' ')
				}
			})
			if (queries.length > 0) {
				const id = 'id' + new Date().getTime()
				const doc = document.createElement('div')
				const body = document.getElementsByTagName('html')[0]
				doc.id = id
				doc.classList.add('hidden')
				doc.innerHTML = this.propuestaMostrada.html
				body.appendChild(doc)
				const markInstance = new Mark('#' + id)
				markInstance.markRegExp(new RegExp(queries, 'gmi'), {
					done: () => {
						this.propuestaDestacadaHTML = document.getElementById(id).innerHTML
						body.removeChild(body.lastChild)
					},
					acrossElements: true,
					diacritics: false,
					ignoreJoiners: true,
					ignorePunctuation: '\':;.,-–—‒_(){}[]!"+='.split(''),
					className: 'highlighted'
				})
			}
		},
		saltarAPrimerElementoDestacado () {
			const destacados = document.getElementsByClassName('highlighted')
			if (destacados.length > 0) {
				window.scrollTo({
					top: destacados[0].offsetTop,
					behavior: 'smooth'
				})
			}
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.rootPropuestaID
	width: 100vw
	display: flex
	flex-flow: column nowrap
	align-items: center
	padding-bottom: 7em

.contenidoHTML
	width: 900px
	max-width: 100%
	margin: 0 auto
	background-color: #fff
	padding: 4rem
	+movil
		width: 100vw
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
		p
			color: #000
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
		mark
			color: $blanco
			background-color: $verde2
			border-radius: 3px

.cabecera
	padding: 2em
	background-color: transparentize($fondoBody, .2)
	backdrop-filter: blur(1em)
	width: 100%
	max-width: 900px
	background-image: url('/imagenes/textura.webp')
	.pretitulo
		color: rgba(219, 248, 123, 1)
		font-size: 1rem
		font-weight: 900
		margin-bottom: .5em
		color: #0E6B8B
		text-decoration: none
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

.contendorBoton
	padding: 2em .5em
	text-align: center
	.boton
		background-color: $verde3
		color: $petroleo1
		font-size: 1.2rem
		padding-top: .9em
.hidden
	display: none
</style>
