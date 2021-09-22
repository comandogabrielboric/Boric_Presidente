<template lang="pug">
.rootIndex

	section.storytelling
		.filtroBlur
			img.noMovil(src="/imagenes/portada.jpg" alt="Súmate a cambiar Chile")
			img.noCompu(src="/imagenes/portadaMovil.jpg" alt="Súmate a cambiar Chile")


	section.seccionCuna
		.curva.curvaSuperior

		.noCompu.sobreCurva
			.contenido
				div Aporta con tus ideas y anhelos a un programa de Gobierno descentralizado y abierto de cara a la ciudadanía.
				b Súmate a una mesa ciudadana o contesta una consulta.
		.noMovil.sobreCurva
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
			.lado
				h2.titulo #[span.primero Inscríbete]
					div Únete a la campaña
				.texto
					p Las transformaciones que Chile necesita las hacemos entre todas y todos.
					P Déjanos tu mail y recibirás más información sobre la campaña

			.lado
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
			.lado
				h2 Arma tu
				h3 Campaña
				p Descarga nuestro kit y crea tus propios insumos de campaña. #[br]¡De ti depende!
				.noMovil
					+linkDescarga


			.lado.ladoImagen
				.cajaHerramienta
					img(src="/imagenes/cajaHerramientas.png" alt="Herramientas")
					.circulo

		.noCompu
			+linkDescarga


	section.seccionaporta

		mixin linkServel
			.linkservel
				a.boton(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml" target="_blank") QUIERO APORTAR
				n-link.instrucciones(to="/aporta") Ver Instrucciones para donar

		.curva.curvaSuperior

		.contenido
			.bloque.lado
				h2 Súmate
				h3 y Aporta
				p El cambio lo financiamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia
				.noMovil
					+linkServel
			.lado.ladoImagen
				.bloque.chanchito
					img(src="/imagenes/chanchitoPomaire.png" alt="Chanchito de Pomaire")
					.circulo
			.bloque.noCompu
				+linkServel

	section.propuestas
		.ondaonda
			wave.wave
		.curva.curvaSuperior

		img(src="/imagenes/combiVerde.png" alt="Combi").combi
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
		//+movil
			height: 3em
			margin-top: -1.2em
		//+compu
			margin-top: -2em

	.contenido
		padding: 0 1em
		line-height: 1.3
		width: 400px
		max-width: 100%
		margin: 0 auto

		h1, h2
			font-style: italic
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
	.imgSaludo
		width: 100vw
		z-index: 0
		margin-top: -9vw

	+compu
		.contenido
			width: 600px
		.imgSaludo
			margin-top: -6vw



.seccionParticipa
	position: relative
	background-color: $verde2
	color: white
	.curva
		background-color: $verde2
	.contenido
		position: relative
		z-index: 3
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
			display: flex
			flex-flow: row nowrap
			text-align: left
			justify-content: space-around
			.lado
				flex: 350px 0 1



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
			// padding: 0 1em
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
			// padding: 0 .5em

	.cajaHerramienta
		$lado: 11em
		width: $lado
		height: $lado
		position: relative
		img
			position: relative
			height: 100%
			z-index: 1
			padding: 1em 0 1em 0
		.circulo
			position: absolute
			top: 50%
			left: 50%
			right: 0
			bottom: 0
			width: $lado
			height: $lado
			background: $petroleo3
			border-radius: 50%
			transform: translate(-25%, -50%) scale(.9)
		+compu
			$lado: 18em
			width: $lado
			height: $lado
			.circulo
				width: $lado
				height: $lado
			.circulo
				transform: translate(-30%, -50%) scale(.9)

	.kitGrafico
		display: flex
		flex-flow: column
		align-items: center
		text-align: center
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
			flex-flow: row nowrap
			justify-content: space-around
			text-align: left
			padding-top: 2em
			.lado
				flex: 250px 0 1
				&.ladoImagen
					order: -1
			.kitGrafico
				display: block
				text-align: left



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
		+compu
			align-items: unset
			justify-content: unset
			.boton
				margin: 0 auto 0 0

	.contenido
		display: flex
		flex-flow: column nowrap
		justify-content: center
		align-items: center
		text-align: center
		padding-bottom: 6em
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

		.chanchito
			$lado: 11em
			width: $lado
			height: $lado
			position: relative
			img
				position: relative
				height: 100%
				z-index: 5
			.circulo
				position: absolute
				top: 50%
				left: 50%
				width: $lado
				height: $lado
				background: rgba(38, 140, 175, 1)
				border-radius: 50%
				transform: translate(-63%, -63%) scale(.8)
			+compu
				$lado: 16em
				width: $lado
				height: $lado
				img
					transform: scaleX(-1)
				.circulo
					width: $lado
					height: $lado
					transform: translate(-65%, -65%) scale(.8)

	+compu
		.contenido
			display: flex
			flex-flow: row nowrap
			text-align: left
			justify-content: space-around
			padding-bottom: 14em
			.lado
				flex: 350px 0 1

section.propuestas
	position: relative
	background-color: rgba(249, 58, 121, 1)
	padding-bottom: 4em
	.curva
		background-color: rgba(249, 58, 121, 1)
	.ondaonda
		position: absolute
		background-color: #268CAF
		width: 100%
		height: 0
		bottom: 100%
		.wave
			display: flex
			position: absolute
			width: 100vw
			right: 0
			left: 0
			bottom: 100%
		+compu
			height: 6em

	.combi
		position: absolute
		width: 11em
		z-index: 6
		top: 0
		left: 50%
		transform: translate(-50%, -80%)
		bottom: 0
		+compu
			width: 22em

	.contenido
		display: flex row nowrap
		text-align: center
		justify-content: center
		width: 400
		max-width: 100%
		heigth: 10em
		background-color: rgba(249, 58, 121, 1)
		+movil
			padding-top: 1em
		+compu
			padding-bottom: 1em
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
	+compu
		.contenido
			width: 400px
			margin: 0 auto
</style>


