<template lang="pug">
.rootIndex
	section.storytelling
		.filtroBlur
			img(
				@click="unete",
				src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/landingapoderades/headerCampa%C3%B1a.webp",
				alt="Súmate a cambiar Chile"
			)

	section.seccionParticipa
		.curva.curvaSuperior
		.contenido(id="uneteALaCampaña")
			.pre.texto Desde el norte al sur de Chile queremos agradecer a todas y todos los que han permitido que tengamos una voz y campaña llena de creatividad para transmitir un mensaje de esperanza y construcción de un futuro mejor.
			.cabecera
				h2.titulo #[span.primero Camino al 19 de diciembre, llegó el momento de reforzar la campaña con]
					div #1MillondePuertasxBoric

			.segundo
				.lado
					.imagen
						img(src="/imagenes/capturavideo.webp", alt="#1MillondePuertasxBoric")
				.lado
					.texto Nos pusimos el desafío de abrir un millón de puertas para #[span.bold conversar con personas de todas las regiones de Chile,] escuchar sus deseos para un construir un Chile que nos incluya a todos. No te quedes fuera y haz campaña.

	section.seccionHacerCampana
		.fondo
			img(src="/svg/curvalanding.svg")
		.cajaHerramientas
			img(src="/imagenes/cajaHerramientas.webp")
		.contenedortitulo
			.titulo ¿Cómo puedo hacer campaña?
		.contenedor
			.contenedorPasos
				.imagen
					img(src="/imagenes/landingCampaña/Group 40.webp")
				.imagen
					img(src="/imagenes/landingCampaña/Group 41.webp")
				.imagen
					img(src="/imagenes/landingCampaña/Group 42.webp")
				.imagen
					img(src="/imagenes/landingCampaña/Group 43.webp")
				.imagen
					img(src="/imagenes/landingCampaña/Group 44.webp")
				.contenedorTexto
					.texto Comparte y difunde la campaña con el hashtag #[span.bold #1MillondePuertasxBoric]
					.contenedorBoton
						a.boton(
							href="https://drive.google.com/drive/folders/		1vwqqSnxHIyv9wI617h8pUers1OudaBo0",
							target="_blank",
							rel="noreferer noopener",
							@click="$gtm.push({ event: 'link-home', hacia: 'Decarga 	Kit grafico' })"
						) DESCARGAR KIT COMPLETO

	section.seccionCuna
		.curva.curvaSuperior
		.contenido
			.titulo Este 19 de diciembre te necesitamos
				.bold Apoderades x Boric
			.contenedorBoton
				nuxt-link.boton(
					to="/apoderados",
					@click="$gtm.push({ event: 'link-home', hacia: 'Decarga Kit grafico' })"
				) INSCRÍBETE AQUÍ

	section.seccionSumate
		.curva.curvaSuperior
		.contenido
			Chanchito2.chan
			.titulo Súmate #[span.segundo y Aporta]
			.contenedorBoton
				a.boton(
					href="https://aportes.servel.cl/servel-aportes/inicio.xhtml",
					target="_blank",
					rel="noreferer noopener",
					@click="$gtm.push({ event: 'link-home', hacia: 'Aportes servel' })"
				) HAZ TU DONACIÓN
</template>

<script>
import wave from '~/static/svg/wave.svg'
export default {
	components: { wave },
	data () {
		return {}
	},
	head () {
		const titulo = 'Apoderados x Boric - Campaña'
		const descripcion =
			'Votemos para hacer realidad un Chile en que nadie quede fuera. Votemos Gabriel Boric Presidente'
		const imagen = '/imagenes/portadaMovil.webp'
		const url = 'https://boricpresidente.cl/apoderadosxboric'
		const meta = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		meta.titleTemplate = '%s'
		return meta
	},
	methods: {
		tag (valor) {
			console.log('tag')
			this.$gtm.push({ event: 'link-home', hacia: valor })
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
@import '~/estilos/animaciones'

section
	position: relative
	// min-height: 50vh
	.contenido
		width: 100%
		max-width: 100%
		padding-left: 1em
		padding-right: 1em
		+compu
			padding-top: 2em
			padding-left: 4em
			padding-right: 4em
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: black
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)

		height: 3em
		margin-top: -1.2em
		+compu
			height: 5em
			margin-top: -2em
		z-index: 1
		+ *,
		~ .sobreCurva
			position: relative
			z-index: 2

	.ladoImagen
		display: flex
		justify-content: center
		align-items: center

.titulo
	+movil
		font-size: 2rem
	+compu
		font-size: 3rem
	+wide
		font-size: 4rem
	+ultra
		font-size: 6em
.texto
	line-height: 1.2
	+movil
		font-size: 1.3rem
	+compu
		font-size: 1.5rem
	+wide
		font-size: 2rem
	+ultra
		font-size: 3rem
.lado
	+compu
		flex: 600px 0 1
	+wide
		flex: 700px 0 1
	+ultra
		flex: 800px 0 1
.bold
	font-weight: 900
.boton
	font-size: 1rem
	+compu
		font-size: 1.5rem
	+wide
		font-size: 2rem

.imgP
	margin-top: 3em
	width: 100%
.storytelling
	display: flex
	justify-content: center
	max-height: calc(100vh - 5em)
	background-image: url('/imagenes/WEB-BANDERA.webp')
	filter: blur()
	background-size: cover
	background-repeat: no-repeat
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
		justify-content: center
		z-index: 0
		+movil
			img
				width: 100%
				height: 100%
				max-width: 100%
				max-height: 100%

		.contenido
			display: flex
			flex-flow: column
			position: absolute
			width: 50vw
			right: 0
			top: 0
			bottom: 0
			display: flex
			padding-left: 1em
			// align-items: center
			text-align: left
			justify-content: center
			.contendorBoton
				width: 290px
				.boton
					height: 50px
					width: 290px
					font-size: 1.4rem

.seccionParticipa
	position: relative
	background-image: url('/imagenes/textura.webp')
	color: white
	padding-bottom: 6em
	.curva
		background-image: url('/imagenes/textura.webp')
	.pre
		text-align: center
		font-weight: 400
		font-style: italic
		padding: 1em 0
	.contenido
		position: relative
		z-index: 3
		display: flex
		flex-flow: column
		// max-width: 1300px
		.titulo
			padding: .5em 0
			max-width: 100%
			line-height: 1.2
			color: $verde3
			font-weight: 400
			text-align: center
			.primero
				// font-size: 3rem
				font-weight: 400
				font-style: italic
				color: $azul1
		.segundo
			display: flex
			flex-flow: row wrap
			justify-content: center
			.lado
				flex: 500px 0 1
				padding: 1em
				.imagen
					display: flex
					justify-content: center
					width: 100%
					img
						width: 300px
						heigth: 300px
		.texto
			padding: .5em 0
			font-style: italic
			line-height: 1.2
			text-align: center
			.bold
				font-weight: 700

.seccionHacerCampana
	background-image: url('/imagenes/textura.webp')
	// position: absolute
	.fondo
		position: absolute
		overflow: hidden
		height: 100%
		> img
			width: 100vw
	.cajaHerramientas
		position: relative
		top: -5em
		left: calc( 50% - 100px )
		width: 200px
		> img
			width: 200px
			+compu
				width: 300px
			+wide
				width: 400px
	.contenedortitulo
		position: relative
		text-align: center
		top: -2.5em
		color: $verde3
		z-index: 10
		display: flex
		justify-content: center
		width: 100%
		.titulo
			max-width: 800px
	.contenedor
		width: 100%
		display: flex
		flex-flow: column nowrap
		align-items: center
		.contenedorPasos
			background-color: $azul2
			position: relative
			max-width: 1300px
			// height: 500px
			top: 0
			left: 0
			right: 0
			bottom: 0
			display: flex
			flex-flow: row wrap
			justify-content: center
			.imagen
				img
					padding: 1em
					width: 300px
					+compu
						width: 300px
					+wide
						width: 400px
			.contenedorTexto
				padding: 1em 0
				padding-bottom: 4em
				width: 100vw
				display: flex
				flex-flow: column
				align-items: center
				.texto
					text-align: center
					max-width: 800px
					padding: 1em 0
					+wide
						padding: 2em 0
				.contenedorBoton
					padding: 1em
					text-align: center
					+compu
						padding: 2em 1em

					.boton
						background-color: $verde3
						color: $azul2

.seccionCuna
	// min-height: 400px
	background-color: rgba(112, 231, 211, 1)
	.curva
		background-color: rgba(112, 231, 211, 1)
	.contenido
		display: flex
		flex-flow: column nowrap
		align-items: center
		text-align: center
		padding: 2em 1em
		+compu
			padding: 3em 1em
		+wide
			padding: 4em 1em
		.titulo
			color: rgba(86, 55, 137, 1)
		.contenedorBoton
			padding: 2em
			text-align: center
			.boton
				background-color: $verde3
				color: $azul2

.seccionSumate
	background-color: rgba(25, 203, 181, 1)
	min-height: 400px
	.curva
		background-color: rgba(25, 203, 181, 1)
	.contenido
		padding: 2em 1em 6em 1em
		display: flex
		flex-flow: column nowrap
		align-items: center
		.titulo
			padding: 1em 0
			color: $verde3
			font-style: italic
			.segundo
				color: #fff
		.contenedorBoton
			.boton
				background: $verde3
				color: $azul2
</style>


