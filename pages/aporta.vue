<template lang="pug">
.root
	.pasos
		img(src="/imagenes/donaciones1.webp" alt="dona")
		img(src="/imagenes/donaciones2.webp" alt="dona")
		img(src="/imagenes/donaciones3.webp" alt="dona")
		img(src="/imagenes/donaciones4.webp" alt="dona")
	.link
		a(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml" alt="dona" target="_blank") QUIERO APORTAR
	.relleno
</template>
<script>
export default {
	head () {
		const titulo = 'Aporta'
		const descripcion = 'El cambio lo financiamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia'
		const imagen = '/imagenes/portadaMovil.webp'
		const url = 'https://boricpresidente.cl/aporta'
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
@import '~/estilos/paleta'
@import '~/estilos/utils'

.root
	background-color: $petroleo2

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
		background-color: $petroleo2

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
