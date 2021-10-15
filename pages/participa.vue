<template lang="pug">
.rootParticipa
	.header
		img.imgHeader(src='/imagenes/homeParticipaMovil.webp')
		h1.titulo Construyamos juntos el nuevo Chile
	.seccion.mesasYConsulta
		.curva.curvaSuperior

	.seccion.uneteAUnaMesa
		.curva.curvaSuperior

	.seccion.contacto
		.curva.curvaSuperior

</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
@import '~/estilos/animaciones'

.seccion
	position: relative
	// min-height: 50vh
	.contenido
		width: 100%
		max-width: 100%
		padding-left: 1em
		padding-right: 1em
		+compu
			padding-top: 2em
			padding-left: 4em
			padding-right: 4em
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: black
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		height: 3em
		margin-top: -1.2em
		+compu
			height: 5em
			margin-top: -2em
		z-index: 1
		+ *,
		~ .sobreCurva
			position: relative
			z-index: 2


.seccion
	min-height: 400px
.header
	width: 100vw
	position: relative
	border: 1px solid orange
	.imgHeader
		width: 100%
	.titulo
		color: #fff
		display: flex
		font-size: 1.8rem
		max-width: 450px
		justify-content: center
		font-weight: 700
		position: absolute
		z-index: 5
		top: 83%
		left: 20px
		opacity: .85
.mesasYConsulta
	background-color: $azul2

</style>
