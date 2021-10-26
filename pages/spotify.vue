<template lang="pug">
.root
	.header
		img(src='/gif/PLAYLIST-EL-ARBOLGIF.gif' alt="")
		//- img.noCompu(src='' alt="")

	.Compromiso
		.curva.curvaSuperior

		.contenido
			.titulo #[span.primero El Árbol]
				div Ideas y Maquetas para un chile nuevo
			.listaSpotify
				<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZypDDXfbyfI?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			.subTitulo #[span.primero ¡Participa con una]
				div pieza musical!
			.texto
				p Envía tu aporte a: playlist@boricpresidente.cl directamente o a través de wetransfer o similar, a ese mail. Por favor, evitar compartir archivos en un drive, ya que las restricciones de acceso muchas veces no quedan liberadas.
		.CompromisoFeminista

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

	.listaSpotify
		width: 350px

</style>
