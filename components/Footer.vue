<template lang="pug">
footer

	.capa.capaLinks
	.capa.capaFooter
		.logo
		p.textoFooter Por un Chile en el que nadie quede fuera.
		RedesSociales
		.logos
			.aprueboDignidad
				.iconoAprueboDignidad
				.textoAprueboDignidad

</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

footer
	background-color: $fondoFooter
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
		margin-top: -3em
		padding: 1em 3em
		background-color: $fondoFooter
		display: flex
		flex-flow: column
		.logo
			+bgcon
			background-color: currentColor
			mask-image: url('/logos/logo.svg')
			mask-size: contain
			mask-repeat: no-repeat
			mask-position: center
			height: 0.3965em
			width: 1em
			font-size: 10em
		.redesSociales
			font-size: 1.4em
			// padding: 1em 0 1em 0
		.textoFooter
			text-align: center
			margin-top: 2em

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
			height: 3em
			top: -1em
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
			padding: .25em 0 .5em 0
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



	@media screen and (max-width: 760px)
		flex-flow: column nowrap
		.redesSociales
			// margin-top: 2em
		.logos
			.aprueboDignidad
				font-size: 5em
		.capaLinks
			flex-flow: column nowrap
		.capaFooter
			flex-flow: column nowrap




</style>
