<template lang="pug">
footer

	.capa.capaLinks
		nuxt-link.link-footer(to='/storytelling') Storytelling
		nuxt-link.link-footer(to='/sumate') Sumate
		nuxt-link.link-footer(to='/dona') Dona
		nuxt-link.link-footer(to='#') Participación ciudadana
	.capa.capaFooter
		.logos
			.aprueboDignidad
				.iconoAprueboDignidad
				.textoAprueboDignidad
		RedesSociales

</template>

<script>
export default {
	data () {
		return {
			rrss: [],
			logosAD: null
		}
	},
	async fetch () {
		// console.log('cargar footer')
		const solicitud = await fetch(`${process.env.apiURL}/footer`).then(res =>
			res.json()
		)
		this.logosAD = solicitud.logosAD
		this.rrss = solicitud.RRSS
	}
}
</script>

<style lang="sass" scoped>
@import '~/scss/utils'
@import '~/scss/paleta'

footer
	background-color: white
	color: $colorFooter
	a
		&, &:visited, &:active, &:hover
			color: inherit
			text-decoration: none
	.capa
		padding: 2em
		display: flex
		align-items: center
	.capaFooter
		background-color: $fondoFooter

	.capaLinks
		display: flex
		align-items: center
		justify-content: space-around
		position: relative
		z-index: 0
		text-transform: uppercase
		> *
			z-index: 1
		&::before
			content: ''
			display: block
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: 0
			background-color: $fondoFooter
			opacity: .5
		.link-footer
			padding: .25em
			margin: .25em
	.logos
		.aprueboDignidad
			font-size: 5em
			display: flex
			align-items: center
			.iconoAprueboDignidad
				+bgcon
				background-image: url('/logos/apruebo dignidad icono.svg')
				height: 1em
				width: 1em
			.textoAprueboDignidad
				+micon
				background-color: currentColor
				mask-image: url('/logos/apruebo dignidad texto.svg')
				height: 1em
				width: 1.458em

	@media screen and (min-width: 760px)
		.capaFooter
			justify-content: space-around

	@media screen and (max-width: 760px)
		flex-flow: column nowrap
		.redesSociales
			margin-top: 2em
		.logos
			.aprueboDignidad
				font-size: 5em
		.capaLinks
			flex-flow: column nowrap
		.capaFooter
			flex-flow: column nowrap



</style>
