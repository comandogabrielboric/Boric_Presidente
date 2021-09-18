<template lang="pug">
footer

	.capa.capaLinks
	.capa.capaFooter
		.logo
		p Por un Chile en el que nadie quede fuera.
		RedesSociales

		.logos
			.aprueboDignidad
				.iconoAprueboDignidad
				.textoAprueboDignidad

</template>

<script>
import logo from '@/static/logos/logo.svg'

export default {
	components: { logo },
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
@import '~/estilos/utils'
@import '~/estilos/paleta'

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
		padding: 1em 3em
		background-color: $fondoFooter
		.redesSociales
			font-size: 1.4em
			padding-bottom: 1em

	.capaLinks
		display: flex
		align-items: center
		justify-content: space-around
		position: relative
		z-index: 0
		text-transform: uppercase
		margin-top: -2em
		> *
			z-index: 1
		&::before
			content: ''
			display: block
			position: absolute
			top: -20px
			left: 0
			right: 0
			bottom: 0
			clip-path: ellipse(60% 100% at 50% 100%)
			background-color: $fondoFooter


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
