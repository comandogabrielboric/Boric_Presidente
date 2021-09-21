<template lang="pug">
div
	section.participa
		.contenido
			.textoseccion
				h2.titulo #[span.primero ¿como]
					div participar?
				.texto
					p Tenemos dos mecanismos de participación abiertos a toda la ciudadanía para que creemos, juntos y juntas, el futuro Gobierno de Gabriel Boric.

	section.mesasCiudadanas
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
	background-image: url('https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/comp/bg-participar.header.png')
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
					font-size: 4rem
					font-weight: 400
					font-style: italic
					color: $verde3

			.texto
				font-style: italic
				padding: 1em 0 .8em 0
				font-size: 1.3em

	+movil
		.contenido
			.textoseccion
				margin: 2em 0
				text-align: center
				.texto
					width: 450px
					max-width: 100%
				.titulo
					font-size: 3rem
	+compu
		.contenido
			padding: 0 5vw
			flex-flow: row nowrap
			justify-content: space-around

			.textoseccion
				flex: 400px 0 1
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
