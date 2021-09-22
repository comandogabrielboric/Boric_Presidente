<template lang="pug">
.navbar

	nuxt-link.alHome.zonaLogo(to='/')
		.logo
			.trasLogo
				.iconoAprueboDignidad

	mixin links
		.links.contenedor-links.link-interno
			a.link.bold(href='https://participa.boricpresidente.cl/como-participar' target="_blank") participa Aquí
			nuxt-link.link.bold(to='/aporta') aporta
			nuxt-link.link.bold(to='/propuestas') Propuestas

	.menuCompu
		+links

	transition(:duration='300')
		.menuMovil(v-if="activa")
			+links

	//- RedesSocialesnav

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
	color: $colorHeader
	background-color: $fondoHeader
	height: $alturaMenu
	box-shadow: 0 -3em 0 $fondoHeader

	padding: 0 2em
	+movil
		padding: 0 1em

	.zonaLogo
		position: relative
		flex: auto 0 0
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
			.oicono
				font-size: 1.4em

	.links
		.link
			text-transform: uppercase
			margin: 0 .3em
			padding: 0 .7em
			&.nuxt-link-active
				color: $colorPrincipalC3

	.menuCompu
		flex: auto 1 1
		position: relative
		z-index: 0
		+movil
			display: none
		.links
			display: flex
			flex-flow: row-reverse
			align-items: center
			z-index: inherit
			width: 100%
			.link
				display: block
				flex: auto 0 1
				text-align: center

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

		color: $verde3
		background-color: transparentize($azul1, .3)
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
