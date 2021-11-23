<template lang="pug">
.rootError
	.zonaLogo
		a.logo(to="/")
			.trasLogo
				.iconoAprueboDignidad

	.mensaje
		h1 Ups!
		p Este contenido ahora está en otra ubicación
		.botones
			n-link.boton(to="/propuestas") Programa y Propuestas

</template>
<script>
export default {
	layout: 'error',
	// eslint-disable-next-line
	props: ['error']
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.rootError
	display: flex
	flex-flow: column nowrap
	justify-content: center
	align-items: center
	min-height: calc(100vh - 5em)

	// border: 1px solid white


.zonaLogo
	position: relative
	flex: auto 0 0
	margin-bottom: 6em
	.logo
		display: block
		background-color: currentColor
		mask-image: url('/logos/logo.svg')
		mask-size: contain
		mask-repeat: no-repeat
		mask-position: center
		height: 0.3965em
		width: 1em
		font-size: 24em
		+movil
			font-size: 24em

		.trasLogo
			height: 100%
			// opacity: 0
			transition: opacity .5s ease
			overflow: hidden
			.iconoAprueboDignidad
				+bgcon
				background-image: url('/logos/apruebo dignidad icono.svg')
				$lado: 3.8em
				height: $lado
				width: $lado
				position: relative
				top: 400%
				left: 50%
				transform: translateX(-50%, -50%)
				animation: rotar 30s linear infinite
				@keyframes rotar
					0%
						transform: translate(-50%, -50%) rotateZ(0deg)
					50%
						transform: translate(-50%, -50%) rotateZ(180deg)
					100%
						transform: translate(-50%, -50%) rotateZ(360deg)
		//&:hover
			.trasLogo
				opacity: 1

.mensaje
	text-align: center
	color: white
	h1
		color: white
		font-weight: 900

.botones
	display: flex
	justify-content: center

	.boton
		background-color: $verde3
		color: $azul2
</style>
