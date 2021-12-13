<template lang="pug">
.rootBiografia
	section.storytelling
		.filtroBlur
			img.noMovil(
				src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/header-escritorio-1.webp",
				alt="Súmate a cambiar Chile"
			)
			img.noCompu(
				src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/header-escritorio-2.webp",
				alt="Súmate a cambiar Chile"
			)
			.contenedorTitulo
				.tituloHeader Biografía
				.cajaNombre
					div Gabriel Boric
			.gradiente

	section.biografia
		.contenido.reversa
			span.linea
			.lado
				.titulo Inicios
					span.punto
				.texto #[span.bold Gabriel Boric Font,] nació en la ciudad de Punta Arenas (Región de Magallanes y la Antártica Chilena) en febrero de 1986. Hijo de Luis Javier Boric Scarpa y María Soledad Font Aguilera. Entre 1991 y 2003 cursó enseñanza básica y media en su ciudad natal, destacando su participación en 1999 - 2000 en el proceso de refundación de la Federación de Estudiantes Secundarios de Punta Arenas. #[br] #[span.bold Una vez finalizados sus estudios] escolares, en 2004 se trasladó a Santiago para comenzar sus estudios en la Facultad de Derecho de la Universidad de Chile.
			.lado.foto
				img(
					src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/Component+1.webp",
					alt="Infancia Gabriel Boric"
				)
		.contenido
			span.linea
			.lado.ladoReversa
				.titulo Política
					span.punto
				.texto #[span.bold En la Universidad de Chile,] En la Universidad de Chile, mientras cursaba la carrera de Derecho, siguió desarrollando su trayectoria como dirigente estudiantil, siendo elegido en 2009 presidente del Centro de Estudiantes de Derecho. Entre los años 2010 y 2011 se desempeñó como senador universitario de la U. Chile, para luego en 2012 asumir como presidente de la Fech, y liderar el movimiento estudiantil. #[br] #[span.bold En marzo de 2014,] asume como diputado por el Distrito 60 de Magallanes, siendo el único candidato independiente que logra un escaño por fuera del sistema binominal.

			.lado.foto
				img(
					src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/Component+2.webp",
					alt="Infancia Gabriel Boric"
				)
		.contenido.reversa
			.lado
				.titulo Acuerdos
					span.punto
				.texto #[span.bold Al día de hoy,] la labor parlamentaria de Gabriel Boric ha sido fundamental para avanzar en proyectos emblemáticos como el límite de reelección de autoridades o la reducción de dieta parlamentaria, entre muchos otros. Además, colaboró para lograr el "Acuerdo por la Paz Social y la Nueva Constitución" el 15 de noviembre del mismo año. #[span.bold Este compromiso transversal] dio inicio institucional al proceso histórico actualmente en desarrollo para escribir, por primera vez en la historia de Chile, una constitución paritaria, con incorporación de pueblos originarios e independientes.

			.lado.foto
				img(
					src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/Component+3.webp",
					alt="Infancia Gabriel Boric"
				)
</template>

<script>
export default {
	data () {
		return {
			cargado: null
		}
	},
	head () {
		const titulo = 'Biografia'
		const descripcion =
			'Votemos para hacer realidad un Chile en que nadie quede fuera. Votemos Gabriel Boric Presidente'
		const imagen =
			'https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/header-escritorio-1.webp'
		const url = 'https://boricpresidente.cl/biografia'
		const meta = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		meta.titleTemplate = '%s'
		return meta
	},
	mounted () {},
	methods: {}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.rootBiografia
	background: linear-gradient(0deg, #138994 29.1%, #10607F 67.01%, #094C68 100%)

section
	position: relative
	min-height: 50vh
.tituloHeader
	+movil
		font-size: 3rem
	+compu
		font-size: 4rem
	+wide
		font-size: 6rem
	+ultra
		font-size: 8em

.titulo
	+movil
		font-size: 3rem
	+compu
		font-size: 4rem
	+wide
		font-size: 4rem

.texto
	line-height: 1.2
	font-style: italic
	+movil
		font-size: 1rem
		font-weight: 300
	+compu
		font-size: 1.5rem
	+wide
		font-size: 1.9rem

.lado
	+compu
		flex: 600px 0 1
	+wide
		flex: 700px 0 1
	+ultra
		flex: 800px 0 1

.storytelling
	display: flex
	justify-content: center

	img
		width: 100%
		height: 100%
		max-width: 100%
		max-height: 100%
		z-index: 5
		object-fit: cover
	.filtroBlur
		position: relative
		// min-height: 200px
		width: 100vw
		display: flex
		flex-flow: column nowrap
		align-items: center
		justify-content: center
		z-index: 0
		.contenedorTitulo
			position: absolute
			display: flex
			flex-flow: column nowrap
			align-items: flex-end
			z-index: 6
			text-align: right
			right: 20%
			.tituloHeader
				font-weight: 900
				line-height: 1
				font-style: italic
			.cajaNombre
				display: flex
				background-color: rgba(199, 44, 38, 1)
				font-size: 2rem
				font-weight: 900
				// max-width: 300px
				padding: .2em 1em .1em 1em
			+movil
				right: unset
				bottom: 1em
				.titulo
					font-size: 3.8rem
				.cajaNombre
					font-size: 1.2rem
		.gradiente
			position: absolute
			width: 100vw
			height: 25%
			z-index: 10
			bottom: -1em
			background: linear-gradient(2.37deg, rgba(16, 96, 127, 0) 43.75%, #0D5875 71.79%)
			transform: rotate(180deg)
			+movil
				height: 15%

.biografia
	padding-bottom: 4em
	background: linear-gradient(0deg, rgba(19,137,148,1) 0%, rgba(13,88,117,1) 100%)
	.titulo
		position: relative
		font-weight: 900
		font-style: italic
		color: $petroleo3
		.punto
			position: absolute
			width: 20px
			height: 20px
			border-radius: 50%
			background-color: rgba(221, 49, 49, 1)
			top: .2em
			left: -35px
			// z-index: 15
	.lado
		flex: 320px 0 1
		padding: 1em 0
		padding-right: .5em
	.contenido
		position: relative
		display: flex
		flex-flow: column nowrap
		padding: 6em 2em 1em 5em
		.linea
			position: absolute
			height: 100%
			border-right: 6px dotted rgba(255, 255, 255, 0.5)
			top: 9em
			left: 3em
		.texto
			padding-bottom: 3em
		.foto
			display: flex
			justify-content: center
			img
				width: 100%
				height: 100%
				object-fit: contain

+wide
	.contenido
		width: 100vw
		flex-flow: row nowrap !important
		justify-content: center
		&.reversa
			flex-flow: row-reverse nowrap !important
		.linea
			left: 50% !important
			top: 14em !important
		.lado
			width: 100%
			flex: 600px 1 1
			padding: 5em
			.titulo
				.punto
					left: -1.53em
					top: .43em
			.texto
				padding-right: 20%
			&.ladoReversa
				text-align: right
				.texto
					padding-right: 0
					padding-left: 20%
				.punto
					left: unset
					right: -.98em
</style>


