<template lang="pug">
.rootIndex

	section.storytelling
		.filtroBlur
			img.noMovil(src="/imagenes/portada.jpg" alt="Súmate a cambiar Chile")
			img.noCompu(src="/imagenes/portadaMovil.jpg" alt="Súmate a cambiar Chile")


	section.seccionCuna
		.curva.curvaSuperior

		.noCompu
			.contenido
				div Aporta con tus ideas y anhelos a un programa de Gobierno descentralizado y abierto de cara a la ciudadanía.
				b Súmate a una mesa ciudadana o contesta una consulta.
		.noMovil
			.contenido
				h1 Mesas ciudadanas
				h2 x Boric
				div Te invitamos a aportar con tus ideas, opiniones y anhelos a un programa de Gobierno diverso, descentralizado y abierto de cara a la ciudadanía. #[b Súmate a una mesa ciudadana o contesta una consulta, y sé parte de un proyecto transformador que construimos juntas y juntos.]


		a.btnparticipa.bold(href='https://participa.boricpresidente.cl/' target="_blank") Participa Aquí

		img.noMovil(src="/imagenes/diversidad.png" alt="Diversidad").imgSaludo
		img.noCompu(src="/imagenes/diversidadMovil.png" alt="Diversidad").imgSaludo



	section.seccionParticipa
		.curva.curvaSuperior
		.contenido
			h2.titulo #[span.primero ¡Inscríbete]
				div Únete a la campaña!
			.texto
				p Las transformaciones que Chile necesita las hacemos entre todas y todos.
				P Déjanos tu mail y recibirás más información sobre la campaña

			.suscribirse
				participaant
		img.noMovil(src="/imagenes/participa.png" alt="Participa")
		img.noCompu(src="/imagenes/participaMovil.png" alt="Participa")


	section.seccionArmaTuCampana
		.curva.curvaSuperior

		mixin linkDescarga
			.kitGrafico
				.texto Descarga tu
				a(href="https://drive.google.com/drive/folders/1fqjrBTIYRgQWJ-caAgD4U8xGK9sWgCBj" target="_blank").boton KIT GRÁFICO AQUÍ

		.contenido
			h2 ¡Arma tu
			h3 Campaña!
			p Descarga nuestro kit y crea tus propios insumos de campaña. ¡De ti depende!
			.noMovil
				+linkDescarga


		.cajaHerramienta
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/caja_herramientas_transparente_1_c066b0a32e.svg" alt="Herramientas")
			.circulo

		.noCompu
			+linkDescarga


	section.seccionaporta

		mixin linkServel
			.linkservel
				a.boton(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml" target="_blank") QUIERO APORTAR
				n-link.instrucciones(to="/donar") Ver Instrucciones para donar

		.curva.curvaSuperior

		.contenido
			.bloque
				h2 Súmate
				h3 y Aporta
				p El cambio lo financiamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia
				.noMovil
					+linkServel
			.bloque.chanchito
				img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/chanchito_pomaire_1_01e5c4d5b1.svg" alt="Chanchito de Pomaire")
				.circulo
			.bloque.noCompu
				+linkServel

	section.propuestas
		wave.wave
		.curva.curvaSuperior

		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/combi_foto_1_5762a7cd72.svg" alt="Combi").combi
		.curva.curvaSuperior
		.contenido
			.textoseccion
				h2.titulo Propuesta
				h3 Programática
				p Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera.
				p ¿Quieres conocer parte de nuestras propuestas?
			.link
				nuxt-link(to="/propuestas").linkpropuestas VER PROPUESTAS

</template>

<script>
import mostradorprop from './-mostradorprop.vue'
import wave from '~/static/svg/wave.svg'
export default {
	components: { mostradorprop, wave },

	head () {
		if (!this.seo) return {}
		const titulo = this.seo.titulo_pag
		const descripcion = this.seo.descripcion_pag
		const obj = {
			title: titulo,
			description: descripcion,
			meta: [
				{ hid: 'iprop:name', itemprop: 'name', content: titulo },
				{ hid: 'iprop:description', itemprop: 'description', content: descripcion },
				{ hid: 'iprop:image', itemprop: 'image', content: '/imagenes/portada.jpg' },
				{ hid: 'og:title', property: 'og:title', content: titulo },
				{ hid: 'og:type', property: 'og:type', content: 'website' },
				{ hid: 'og:url', property: 'og:type', content: 'http://boricpresidente.cl' },
				{ hid: 'og:description', property: 'og:description', content: descripcion },
				{ hid: 'og:image', property: 'og:image', content: '/imagenes/portada.jpg' },
				{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
				{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
				{ hid: 'twitter:image', property: 'twitter:image', content: '/imagenes/portada.jpg' }
			]

		}
		return obj
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

section
	position: relative
	// border: 1px solid red
	.contenido
		// border: 1px solid cyan
		max-width: 100%
		padding-left: 1em
		padding-right: 1em
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		height: 5em
		background-color: black
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		+movil
			height: 3em
			margin-top: -1.2em
		z-index: 1
		+ *
			position: relative
			z-index: 2


.storytelling
	display: flex
	justify-content: center
	max-height: calc(100vh - 5em)
	img
		max-width: 100%
		//max-height: 50vh
	+compu
		background-image: url('/imagenes/portada.jpg')
		background-size: cover
		background-repeat: no-repeat
		.filtroBlur
			display: flex
			width: 100%
			height: 100%
			backdrop-filter: blur(8px)
			justify-content: center
		img
			margin: 0 0 -2.5em 0
			max-width: 100vw

.seccionCuna
	position: relative
	background-color: $verde1
	min-height: 10em
	display: flex
	flex-flow: column nowrap
	justify-content: center
	background-color: $verde1
	color: white
	text-align: center
	.curva
		background-color: $verde1
		+movil
			height: 3em
			margin-top: -1.2em
		+compu
			margin-top: -2em

	.contenido
		padding: 0 1em
		max-width: 600px
		line-height: 1.3
		h1
			font-size: 2.5em
			font-weight: 900
			color: #fff
			line-height: 1.3em
		h2
			color: $verde3
			font-size: 2.5em
			font-weight: 900
			margin-top: -.7em

	.btnparticipa
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		padding: .5em 1.3em
		border-radius: 4px
		margin-top: .5em
		margin-bottom: -2rem
	.imgSaludo
		width: 100vw
		z-index: 0



.seccionParticipa
	position: relative
	background-color: $verde2
	color: white
	.curva
		background-color: $verde2
	.contenido
		position: relative
		z-index: 3
		padding: 0 1em
		text-align: center
		.titulo
			max-width: 100%
			line-height: 1.2
			font-size: 2rem
			color: #fff
			font-weight: 900
			.primero
				font-size: 2.8rem
				font-weight: 400
				font-style: italic
				color: $verde3

		.texto
			font-style: italic
			font-size: 1.2rem
		.suscribirse
			padding: 0 .5em
			display: flex
			justify-content: center
	img
		width: 100%

	+compu
		.contenido
			padding: 2em 6em 0 6em
			flex-flow: row nowrap
			justify-content: space-around
			.textoseccion,
			.suscribirse
				flex: 400px 0 1
			.suscribirse
				margin-left: 1em
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
					width: 400px
					max-width: 100%

.seccionArmaTuCampana
	background-color: $petroleo2
	display: flex
	flex-flow: column
	align-items: center
	position: relative
	justify-content: center
	padding-bottom: 3em
	.curva
		background-color: $petroleo2
	.contenido
		text-align: center
		.texto
			display: flex
			flex-flow: column
			padding: 0 1em
		h2,
		h3
			font-size: 2.5rem
			line-height: .7em
		h2
			color: $verde3
			font-style: italic
		h3
			font-weight: 900
			color: #fff
		p
			color: #fff
			font-style: italic
			font-size: 1rem
			padding: 0 .5em
	.cajaHerramienta
		// border: 1px solid red
		img
			position: relative
			height: 200px
			z-index: 5
			padding: 1em 0 1em 0
		.circulo
			position: absolute
			top: 50%
			left: 50%
			right: 0
			bottom: 0
			width: 9em
			height: 9em
			background: $petroleo3
			border-radius: 50%
			transform: translate(-25%, -50%)

	.kitGrafico
		display: flex
		flex-flow: column
		align-items: center
		text-align: center
		padding: 0
		color: $azul2
		font-weight: 700
		.texto
			font-size: 1.2em
			font-style: italic
		.boton
			background-color: $verde3
			color: $azul2
			&:visited
				color: $azul2

	+compu
		.contenido
			display: flex
			flex-flow: row-reverse
			justify-content: space-around
			width: 100vw
			align-items: center
			max-width: 100%
			height: 450px
			margin: -6em 0 -3.5em 0
			.texto
				h2,
				h3,
				p
					text-align: left
			.cajaHerramienta
				display: flex
				align-items: center
				img
					width: 300px
				.circulo
					width: 250px
					height: 250px
					right: 0
					top: -1em
					bottom: 0
					left: 20%
		.kitGrafico
				height: 7em






section.seccionaporta
	background-color: $azul2
	position: relative
	.curva
		background-color: $azul2

	.linkservel
		display: flex
		flex-flow: column nowrap
		align-items: center
		justify-content: center
		padding: 1em 0


		.boton
			color: $azul2
			background-color: $verde3

		.instrucciones
			color: $verde3
			font-style: italic
			padding: .5em 0

	.contenido
		display: flex
		flex-flow: column nowrap
		justify-content: center
		align-items: center
		text-align: center
		padding-bottom: 6em
		.bloque
			h2,
			h3
				font-size: 2.5rem
				margin: 0
				line-height: 1
				font-style: italic
			h2
				color: $verde3
			h3
				font-weight: 900
				color: #fff
			p
				margin: 1em 0
				font-style: italic
		// +compu
		// 	text-align: left
		// 	flex-flow: row nowrap
		// 	justify-content: space-around
		// 	.bloque + .bloque
		// 		margin-left: 4em
		// 	.bloque
		// 		flex: 400px 0 1
		// 	.linkservel
		// 		align-items: start
		// 	.texto
		// 		h2,
		// 		h3
		// 			font-size: 3rem
		// 			line-height: 1.4rem
		// 			font-style: italic
		// 		p
		// 			padding: 1em 0
		// 			font-size: 1rem
		// 			color: #fff
		// 			font-style: italic
		.chanchito
			$lado: 11em
			width: $lado
			height: $lado
			overflow: hidden
			+compu
				$lado: 11em
				width: $lado
				height: $lado
			img
				position: relative
				height: 100%
				z-index: 5
			.circulo
				position: absolute
				top: 50%
				left: 50%
				$lado: 9.3em
				width: $lado
				height: $lado
				background: rgba(38, 140, 175, 1)
				border-radius: 50%
				transform: translate(-65%, -65%)
				+compu
					width: 200px
					height: 200px



section.propuestas
	position: relative
	padding: 0
	background-color: rgba(249, 58, 121, 1)
	padding-bottom: 6em
	.curva
		background-color: rgba(249, 58, 121, 1)
	.wave
		display: flex
		position: absolute
		width: 100vw
		// height: 5em
		right: 0
		left: 0
		bottom: 0
		top: -8em

	.combi
		position: absolute
		width: 200px
		z-index: 6
		top: -6.5em
		right: 30vw
		bottom: 0
		+compu
			top: -10em

	.contenido
		display: flex row nowrap
		text-align: center
		justify-content: center
		width: 400
		max-width: 100%
		heigth: 10em
		background-color: rgba(249, 58, 121, 1)
		padding: 1em 1em
		margin-bottom: -3em
		.textoseccion
			h2,
			h3
				font-size: 2.3rem
				line-height: 1.5rem
				font-weight: 900
				font-style: italic
				color: $verde3
			h2
				font-weight: 400
				color: #fff
			p
				// padding: 1.5em 0
				color: #fff
				font-style: italic
				font-size: 1rem
				&:nth-of-type(1)
					padding-top: .5em

		.link
			padding: 1em 0
			display: flex
			justify-content: center
			.linkpropuestas
				display: flex
				padding-top: .2em
				justify-content: center
				border-radius: 2px
				align-items: center
				width: 250px
				max-width: 85%
				height: 2em
				font-weight: 900
				color: $azul2
				background-color: $verde3

</style>


