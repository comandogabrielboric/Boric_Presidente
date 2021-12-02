<template lang="pug">
.propuestasRoot
	n-child(@montado="abrirPropuestaDeChild")
	//- code propuestaIdMostrada {{propuestaIdMostrada}}
	//- code mostrandoPropuesta {{mostrandoPropuesta}}
	//- code propuestaBruta.length {{propuestaBruta.length}}
	//- code {{propuestaBruta}}

	//- .links
		n-link(v-for="({titulo, slug}) in links" :key="`link-${slug}`" :to="`/propuestas/${slug}/${$route.hash}`") {{titulo}}

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

</style>

