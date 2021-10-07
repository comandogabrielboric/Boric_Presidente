<template lang="pug">
.root
	.titulo
			h1 Únete a este compromiso
			p firma esta carta y lero lero
	.contenido
		.contenedorCarta
		.contenedorfirmas
			formulario
			firmantes
</template>
<script>
import formulario from './unete/formulario.vue'
import firmantes from './unete/firmantes.vue'
export default {
	components: { formulario, firmantes }
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.root
	background-color: $azul2
	padding: 0 0 1em 0

.titulo
	padding: 2em 1em 1em 1em
	text-align: center
	h1
		color: $verde3
		font-size: 2rem
		font-weight: 900
		font-style: italic
.contenido
	padding-bottom: 5em
	display: flex
	flex-wrap: wrap
	justify-content: center
	.contenedorCarta
		width: 95vw
		height: 500px
		border: 1px solid orange
	.contenedorfirmas
		max-width: 320px
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-items: center
		border: 1px solid red
		padding: 1em

	+compu
		.contenedorCarta
			width: 70vw
			max-width: 700px
</style>
