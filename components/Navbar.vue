<template lang="pug">
.navbar

	nuxt-link.alHome.zonaLogo(to='/')
		.logo
			.trasLogo
				.iconoAprueboDignidad
		.logo.trasero

	mixin links
		.links.contenedor-links.link-interno
			nuxt-link.link(to='/propuestas') Propuestas
			nuxt-link.link(to='/participa') participa
			nuxt-link.link(to='/donar') Dona

	.menuCompu
		+links

	transition(:duration='300')
		.menuMovil(v-if="activa")
			+links

	RedesSociales

	.triggerMenu(@click="activa = !activa")
		.oicono(:class="activa ? 'cruz' : 'menu-relleno'")


</template>

<script>
import logo from '@/static/logos/logo.svg'
export default {
	components: { logo },
	data () {
		return {
			activa: null
		}
	},
	watch: {
		$route () {
			this.activa = false
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

$alturaMenu: 5em

.navbar
	position: sticky
	top: 0
	z-index: 1000
	display: flex
	align-items: center
	justify-content: space-between
	line-height: 0

	color: $colorHeader

	height: $alturaMenu
	padding: 0 2em
	+movil
		padding: 0 1em
	&::before
		content: ''
		display: block
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		background-color: transparentize($fondoHeader, 0)
		backdrop-filter: blur(.5em)

	.zonaLogo
		position: relative
		// filter: drop-shadow(0 1px 1px transparentize(white, .5)) drop-shadow(0 -.5em .5em transparentize(white, .35)) drop-shadow(0 1em .5em transparentize(black, .65))
	.logo
		background-color: currentColor
		mask-image: url('/logos/logo.svg')
		mask-size: contain
		mask-repeat: no-repeat
		mask-position: center
		height: 0.3965em
		width: 1em
		font-size: 8em
		+movil
			font-size: 6em
		&.trasero
			position: absolute
			top: -1px
			left: -1px
			right: -1px
			bottom: -1px
			z-index: -1
			background-color: #fff

		.trasLogo
			height: 100%
			opacity: 0
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
		&:hover
			.trasLogo
				opacity: 1

	.redesSociales
		display: flex
		.redSocial
			color: inherit
			margin: 0.5em
			line-height: 0
			.oicono
				font-size: 1.4em

	.links
		.link
			text-transform: uppercase
			margin: .3em
			padding: .7em

	.menuCompu
		z-index: inherit
		@media screen and (max-width: 760px)
			display: none

	.menuMovil
		position: fixed
		z-index: 10
		top: $alturaMenu
		left: 0
		right: 0
		bottom: 0
		padding: 2em
		background-color: white
		display: flex
		flex-flow: column nowrap
		justify-content: center

		color: $colorMenu
		background-color: transparentize($fondoMenu, .5)
		backdrop-filter: blur(.5em)

		@media screen and (min-width: 760px)
			display: none

		transition: all 0.1s ease
		+salir
			opacity: 0
			max-height: 0
		+saliendo
			max-height: 100vh
			overflow: hidden

		.barra
			display: flex
			justify-content: flex-end
		.links
			display: flex
			flex-flow: column nowrap
			justify-content: center
			align-items: center
			.link
				display: block
				text-align: center
				font-size: 1.4em
				margin: 1.2em 0


	.triggerMenu
		@media screen and (min-width: 760px)
			display: none


</style>
