<template lang="pug">
.root
	.header
		.fondo
			img(src='/gif/fondoPortada.gif' alt="")
			//- img(src='/gif/frameFondo.webp' alt="")
		.portadaPlaylist
			img(src='/gif/portadaPlaylist.webp' alt="")

	.Compromiso
		.curva.curvaSuperior

		.contenido
			.titulo #[span.primero El Árbol]
				div Ideas y Maquetas para un Chile nuevo
			.listaSpotify
				<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZypDDXfbyfI?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			.subTitulo #[span.primero ¡Participa con una]
				div pieza musical!
			.texto
				p Envía tu aporte a: #[a.link(href="mailto:playlist@boricpresidente.cl") playlist@boricpresidente.cl] de forma directa o a través de un link de spotify, wetransfer o similar.
					div Difunde e invita a otros músicos del país a formar parte de este playlist.
			.btn.bold( @click="mostrarInstrucciones = !mostrarInstrucciones") REVISA LAS INSTRUCCIONES

		a-modal.modalInstrucciones(:visible="mostrarInstrucciones" :footer="null" @close="mostrarInstrucciones = false" @cancel="mostrarInstrucciones = false" centered :width="null")
			div(slot="title")
				.pretitulo El Árbol
				h2.titulo  Ideas & Maquetas para un nuevo Chile – Gabriel Boric Presidente
			.cuerpoInstrucciones
				.ql-editor.contenidoHTML(v-html='instrucciones')
</template>
<script>
export default {
	async asyncData ({ app }) {
		const textos = await app.$olicitar(`${process.env.cmsURL}/llamado-musicos`)
		const instrucciones = app.$sanitizar(textos.instrucciones)
		const data = {
			instrucciones
		}
		return data
	},
	data () {
		return {
			instrucciones: null,
			textoIntroductorio: null,
			seo: null,
			mostrarInstrucciones: null
		}
	},
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(this.seo, ['titulo_pag'], '')
		const descripcion = this._.get(this.seo, ['descripcion_pag'], '')
		const imagen = '/imagenes/compromiso-feminista-header-web.webp'
		const url = ''
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		return obj
	},
	mounted () {
		window.vm = this
		console.log(this.instrucciones)
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.header
	.fondo
		position: absolute
		width: 100vw
		min-height: 450px
		img
			width: 100%
			height: 67.18%
	.portadaPlaylist
		position: relative
		display: flex
		justify-content: center
		img
			width: 45%
.Compromiso
	padding-bottom: 5em
	position: relative
	background-color: $petroleo1
	min-height: 80vh
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: $petroleo1
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
	align-items: center
	padding-bottom: 1.5em
	.titulo
		padding: .5em .5em
		font-size: 2.3rem
		font-style: italic
		z-index: 3
		line-height: 1.2
		// padding: 0 0.5em
		.primero
			font-size: 3rem
			font-weight: 900
			color: $verde3
		.Bold
			font-size: 1.3rem
			font-weight: 900
	.subTitulo
		padding: .5em .2em
		font-size: 2.3rem
		font-style: italic
		z-index: 3
		line-height: 1.1
		color: $verde3
		font-weight: 900
		// padding: 0 0.5em
		.primero
			// font-size: 2.4rem
			font-weight: 400
			// color: $verde3
	.texto
		font-size: 1.2rem
		padding: 0 1em
		line-height: 1.2
		font-style: italic
		.link
			font-weight: 700
	.listaSpotify
		width: 300px
		height: 380px
		border-radius: 4px
		overflow: hidden

	.btn
		font-size: 1.2em
		// display: flex
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $petroleo1
		padding: .5em .5em
		border-radius: 4px
		margin-bottom: 1em
		z-index: 5
.modalInstrucciones
	::v-deep
		.ant-modal-content
			margin: 0
			+compu
				margin: 0 2em
				max-width: 1300px
		.ant-modal-header
			text-align: start
			padding-top: 1.5em
			background-color: $petroleo1
		.ant-modal-title
			color: #fff
			font-size: 2.5em
			font-weight: 700
			line-height: 1.5
			+movil
				font-size: 2em
			.titulo
				color: $verde3
				font-size: 1rem
		.ant-modal-body
			text-align: justify
			padding: 2em 1em
			max-height: 80vh
			overflow: auto
			p
				font-size: 1.2em
				a
					color: $verde2
			h3
				font-size: 1.5rem
				color: $verde1
			+compu
				padding: 2em 3em
		.ant-modal-mask
			backdrop-filter: blur(4px)
		.ant-modal-close-icon
			svg
				border: 1px solid orange
				border-radius: 50%
				padding: .1em
				color: $petroleo1
				background-color: $verde3
				width: 1.5em
				height: 1.5em

+compu
	.contenido
		.subTitulo
			font-size: 3.3rem
		.texto
			font-size: 1.5rem
			max-width: 700px
		.listaSpotify
			width: 400px
			height: 400px
		.btn
			font-size: 1.5rem
+movil
	.header
		.portadaPlaylist
			top: -8px
			img
				width: 42%
</style>
