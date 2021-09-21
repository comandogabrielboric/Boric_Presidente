<template lang="pug">
.root
	.pasos
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/small_1_117a57e95e.png" alt="dona")
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/small_2_1835803185.png" alt="dona")
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/small_3_82f194a838.png" alt="dona")
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/small_4_4bac3fec41.png" alt="dona")

		a(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml" alt="dona" target="_blank") QUIERO APORTAR
	.relleno
</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
.root
	.pasos
		display: flex
		flex-flow: column
		align-items: center
		background-color: $petroleo1
		img
			height: 700px
			max-height: 100%
		a
			pading-bottom: -20em
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
	height: 200px
	background-color: $petroleo1

</style>
