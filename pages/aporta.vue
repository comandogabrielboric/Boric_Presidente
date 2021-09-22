<template lang="pug">
.root
	.pasos
		img(src="/imagenes/donaciones1.png" alt="dona")
		img(src="/imagenes/donaciones2.png" alt="dona")
		img(src="/imagenes/donaciones3.png" alt="dona")
		img(src="/imagenes/donaciones4.png" alt="dona")
		.link
			a(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml" alt="dona" target="_blank") QUIERO APORTAR
	.relleno
</template>
<script>
export default {
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
				{ hid: 'og:type', property: 'og:type', content: 'Donaciones' },
				{ hid: 'og:url', property: 'og:type', content: 'http://boricpresidente.cl' },
				{ hid: 'og:description', property: 'og:description', content: descripcion },
				{ hid: 'og:image', property: 'og:image', content: '/imagenes/portada.jpg' },
				{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
				{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
				{ hid: 'twitter:image', property: 'twitter:image', content: '/imagenes/portada.jpg' }
			]

		}
		return obj
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'

.root
	.pasos
		display: flex
		flex-flow: row
		flex-wrap: wrap
		justify-content: center
		background-color: $petroleo2
		img
			// height: 700px
			// max-height: 100%
			width: 40vw
			+movil
				width: 80vw
				// height: 80vh
		.link
			display: flex
			padding-top: 2em
			justify-content: center
			a
				display: flex
				justify-content: center
				border-radius: 2px
				align-items: center
				width: 320px
				max-width: 70%
				height: 2em
				font-weight: 900
				color: $azul2
				background-color: $verde3
.relleno
	display: flex
	width: 100vw
	height: 100px
	background-color: $petroleo2

</style>
