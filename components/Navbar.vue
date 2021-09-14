<template lang="pug">
div
	.navbar

		.contenedor-logo
			nuxt-link.ppal-link(to='/')
				.logo

		mixin links
			.links.contenedor-links.link-interno
				nuxt-link.link(to='/propuestas') Propuestas
				nuxt-link.link(to='/sumate') Sumate
				nuxt-link.link(to='/donar') Dona

		.menuCompu
			+links

		transition(:duration='300')
			.menuMovil(v-if="activa")
				//.barra
					.oicono.cruz(@click="activa=false")
				+links
				//.barra
					.oicono.nada
				//.oicono.cruz(@click="activa=false")

		//.link-rrss
			.cont-link(v-for='red in rrss' :key='red._id')
				a.link-footer(:href='red.url')
					img.logorrss(:src='red.icono.url' alt='')

		.redesSociales
			a.redSocial.instagram(target="_blank" rel="noreferer noopener" href="https://www.instagram.com/gabrielboric/")
				.oicono.instagram
			a.redSocial.twitter(target="_blank" rel="noreferer noopener" href="https://twitter.com/gabrielboric")
				.oicono.twitter
			a.redSocial.facebook(target="_blank" rel="noreferer noopener" href="https://www.facebook.com/gabrielboric")
				.oicono.facebook


		.triggerMenu(@click="activa = !activa")
			.oicono(:class="activa ? 'cruz' : 'menu-relleno'")

	.espacio

</template>

<script>
import logo from '@/static/logos/logo.svg'
export default {
	components: { logo },
	data () {
		return {
			rrss: [],
			logosAD: null,
			activa: true,
			quierodonar: null
		}
	},
	async fetch () {
		const solicitud = await fetch(`${process.env.apiURL}/footer`).then(res =>
			res.json()
		)
		this.logosAD = solicitud.logosAD
		this.rrss = solicitud.RRSS
	},
	watch: {
		$route () {
			this.activa = false
		}
	},
	methods: {
		linkdona () {
			this.activa = !this.activa
			this.quierodonar = !this.quierodonar
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/scss/utils.sass'
.navbar
	position: sticky
	z-index: 1000
	display: flex
	align-items: center
	justify-content: space-between
	padding: 0 2em
	height: 5em
	line-height: 0

	color: #333
	a
		&, &:visited, &:active, &:hover
			color: inherit
			text-decoration: none
	.logo
		background-color: currentColor
		mask-image: url('/logos/logo.svg')
		mask-size: contain
		mask-repeat: no-repeat
		mask-position: center
		height: 0.3965em
		width: 1em
		font-size: 6em


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
		@media screen and (max-width: 760px)
			display: none
	.menuMovil
		position: fixed
		z-index: 10
		top: 5em
		left: 0
		right: 0
		bottom: 0
		padding: 2em
		background-color: white
		display: flex
		flex-flow: column nowrap
		justify-content: center

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
