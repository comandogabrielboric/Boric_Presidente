<template lang="pug">
div
	section.participa
		.contenido
			.textoseccion
				h2.titulo #[span.primero ¡Lorem] &nbspIpsum
					div ipsum!
				.texto
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			.suscribirse
				participaant

	section
		p Donaciones
	section
		p Participacion ciudadan
</template>


<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

section
	background-color: rgba(0,0,0,.05)
	min-height: 10em
	padding: 2em
	&:nth-child(even)
		background-color: rgba(0,0,0,.1)
section.participa
	background-color: $verde2
	.contenido
		position: relative
		z-index: 3
		display: flex
		flex-flow: column nowrap
		align-items: center
		.textoseccion
			margin-top: -1em
			display: flex
			flex-wrap: wrap
			z-index: 5
			color: #fff
			justify-content: center
			width: 400px
			max-width: 100%
			.titulo
				max-width: 100%
				line-height: 1.2
				font-size: 3.3rem
				color: #fff
				font-weight: 900
				.primero
					font-size: 3rem
					font-weight: 400
					font-style: italic
					color: $verde3

			.texto
				font-style: italic
				padding: 1em 0 .8em 0
				font-size: 1.3em
		.suscribirse
			display: flex
			justify-content: center
	+movil
		.contenido
			.textoseccion
				margin: 2em 0
				text-align: center
				.texto
					width: 450px
					max-width: 100%
	+compu
		.contenido
			padding: 0 5vw
			flex-flow: row nowrap
			justify-content: space-around
			.textoseccion,
			.suscribirse
				flex: 400px 0 1
			.suscribirse
				margin-left: 4em
			.textoseccion
				justify-content: center
				align-content: center
				flex-flow: column
				.titulo
					text-align: left
					h2
						padding: 0 .5em
					h3
						padding: 0 .7em
				.texto
					width: 450px
					max-width: 100%




</style>
