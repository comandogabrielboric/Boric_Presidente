<template lang="pug">
.index
	.storytelling
		.filtroBlur
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/recursos/boric-portada_Mesa+de+trabajo+1+copia+3+1-2.jpg" alt="Mesa de trbajo")
	.seccionCuna
		.curva
		.cuna
			h1 ¡Mesas ciudadanas
			h2  x Boric!
			p Te invitamos a aportar con tus ideas, opiniones y anhelos a un programa de Gobierno diverso, descentralizado y abierto de cara a la ciudadanía.
			p Súmate a una mesa ciudadana o contesta una consulta.
			.btnparticipa Participa Aquí
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/recursos/IMG_20210715_144542_145+(1)+1+(1).png" alt="Diversidad").imgSaludo
	.seccionParticipa
		.curva
		.contenido
			.textoseccion
				h2.titulo #[span.primero INSCRÍBETE]
					div ¡Únete a la campaña!
				.texto
					p Las transformaciones que Chile necesita las hacemos entre todas y todos.
					P Déjanos tu mail y recibirás más información sobre la campaña

			.suscribirse
				participaant
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/recursos/image+1.png" alt="Participa")
	.seccionArmaTuCampana
		mixin linkDescarga
			.kitGrafico
				h4 Descarga tu
				a(href="https://drive.google.com/drive/folders/1fqjrBTIYRgQWJ-caAgD4U8xGK9sWgCBj" target="_blank").descargaKit KIT GRÁFICO AQUÍ
		.contenido
			.texto
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
				a(href="https://aportes.servel.cl/servel-aportes/inicio.xhtml") QUIERO APORTAR
				p Ver Instrucciones para donar

		.contenido
			.bloque.texto
				h2 Sumate
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
		img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/combi_foto_1_5762a7cd72.svg" alt="Combi").combi
		.curva
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
	background-color: rgba(0,0,0,.05)
	min-height: 10em
	padding: 2em
	&:nth-child(even)
		background-color: rgba(0,0,0,.1)

.storytelling
	display: flex
	justify-content: center
	max-height: calc(100vh - 5em)
	+compu
		margin-top: -20px
		background-image: url(https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/small_gabriel_boric_foto_header_Mesa_de_trabajo_1_copia_3_1_1_10b2b4f538.png)
		background-size: cover
		background-repeat: no-repeat
		.filtroBlur
			display: flex
			width: 100%
			height: 100%
			backdrop-filter: blur(8px)
			justify-content: center
	img
		max-width: 100vw
		max-height: 100vh
		+compu
			margin-top: -2em

.seccionCuna
	position: relative
	background-color: $verde1
	width: 100vw
	min-height: 10em
	// padding: 2em
	display: flex
	justify-content: center
	background-color: $verde1
	.curva
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		height: 5em
		background-color: $verde1
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		+movil
			height: 3em
			margin-top: -1.2em
		+compu
			margin-top: -2em
	.cuna
		margin-top: 1.5em
		display: flex
		flex-flow: column
		width: 80vw
		text-align: center
		align-items: center
		background-color: $verde1
		z-index: 2
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

		p
			color: $blanco
			font-size: 1em
			padding: 0 2em 0 2em
			&:nth-child(1)
				padding-top: 2em
				font-weight: 200
			&:nth-child(2)
				font-weight: 700
			+compu
				max-width: 600px
		.btnparticipa
			cursor: pointer
			text-transform: uppercase
			background-color: $verde3
			padding: .5em 1.3em
			border-radius: 4px
			margin: 2em 0 3em 0
		.imgSaludo
			margin-top: -15%
			width: 100vw
			z-index: 0

.seccionParticipa
	position: relative
	background-color: $verde2
	min-height: 10em
	padding: 5em 0
	justify-content: center
	.curva
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		height: 5em
		background-color: $verde2
		justify-content: center
		clip-path: ellipse(65% 100% at 50% 100%)
		z-index: 2
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
				font-size: 2.8rem
				color: #fff
				font-weight: 900
				.primero
					font-size: 3.3rem
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
	img
		width: 100vw


	+movil
		.curva
			height: 2.5em
			margin-top: -1.2em
		.contenido
			.textoseccion
				margin: 2em 0
				text-align: center
				.texto
					width: 450px
					max-width: 100%
	+compu
		.curva
			margin-top: -2em
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

.seccionArmaTuCampana
	background-color: $petroleo2
	min-height: 10em
	align-items: center
	position: relative
	display: flex
	flex-flow: column
	justify-content: center
	margin-top: -2em
	padding-bottom: 3em
	&::before
		content: ''
		display: block
		position: absolute
		height: auto
		top: -7em
		left: 0
		right: 0
		bottom: 100%
		clip-path: ellipse(60% 100% at 50% 100%)
		background-color: $petroleo2
		+compu
			clip-path: ellipse(55% 100% at 50% 100%)
			top: -3em
			margin-top: -6em

		// opacity: .5
	.contenido
		text-align: center
		// justify-content: center
		padding-bottom: 5em
		.texto
			display: flex
			flex-flow: column
			width: 320px
			max-width: 100%
			padding: 1em
			h2,
			h3
				font-size: 3.2rem
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
				font-size: 1.3rem
		.cajaHerramienta
			img
				position: relative
				width: 200px
				z-index: 5
				padding: 1.5em 0 1em 0
			.circulo
				position: absolute
				left: 43%
				right: 0
				bottom: 0
				top: 15em
				width: 9em
				height: 9em
				background: $petroleo3
				border-radius: 50%
	.kitGrafico
		display: flex
		flex-flow: column
		align-items: center
		padding: 3em 0
		h4
			font-style: italic
			color: $azul2
		.descargaKit
			display: flex
			flex-flow: column nowrap
			align-items: center
			background-color: $verde3
			justify-content: center
			border-radius: 2px
			padding: .2em
			width: 320px
			max-width: 90%
			font-weight: 900
			color: $azul2
			background-color: $verde3
	+compu
		.contenido
			display: flex
			flex-flow: row-reverse
			justify-content: space-evenly
			width: 100vw
			max-width: 100%
			height: 450px
			// background-color: $verde2
			.texto
				position: relative
			.cajaHerramienta
				display: flex
				align-items: center
				img
					width: 300px
				.circulo
					width: 250px
					height: 250px
					right: 0
					top: 2em
					bottom: 0
					left: 25%
		.kitGrafico
				height: 7em






section.seccionaporta
	background-color: $azul2
	position: relative
	&::before
		content: ''
		display: block
		position: absolute
		height: auto
		top: -1.5em
		left: 0
		right: 0
		bottom: 100%
		clip-path: ellipse(60% 100% at 50% 100%)
		background-color: $azul2
		+compu
			clip-path: ellipse(55% 100% at 50% 100%)
			top: -3em
	.linkservel
		display: flex
		flex-flow: column nowrap
		align-items: center
		padding: 2em 0
		a
			display: flex
			justify-content: center
			border-radius: 2px
			align-items: center
			width: 320px
			max-width: 70%
			height: 2em
			font-weight: 900
			color: $azul2
			background-color: $verde3
		p
			color: $verde3
			font-size: .8em
			font-style: italic
			padding-top: .7em
	.contenido
		display: flex
		flex-flow: column nowrap
		justify-content: center
		align-items: center
		text-align: center
		padding-bottom: 4em
		.bloque
			width: 400px
			max-width: 100%
		+compu
			text-align: left
			flex-flow: row nowrap
			justify-content: space-around
			.bloque + .bloque
				margin-left: 4em
			.bloque
				flex: 400px 0 1
			.linkservel
				align-items: start
		.texto
			h2,
			h3
				font-size: 3rem
				line-height: 1.4rem
				font-style: italic
			h2
				color: $verde3
			h3
				font-weight: 900
				color: #fff
			p
				padding: 1em 0
				font-size: 1rem
				color: #fff
				font-style: italic
		.chanchito
			img
				position: relative
				width: 8em
				z-index: 5
				+compu
					width: 200px
			.circulo
				position: absolute
				// left: 0
				right: 35%
				bottom: 16em
				width: 9em
				height: 9em
				background: rgba(38, 140, 175, 1)
				border-radius: 50%
				+compu
					right: 30%
					bottom: 13em
					width: 200px
					height: 200px

section.propuestas
	position: relative
	padding: 0
	background-color: rgba(249, 58, 121, 1)
	padding-bottom: 6em
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
		top: -8em
		right: 30vw
		bottom: 0
		+compu
			top: -10em
			right: 45vw
			width: 300px
	.curva
		display: flex
		position: absolute
		top: -2.5em
		left: 0
		right: 0
		width: 100vw
		height: 3em
		background-color: rgba(249, 58, 121, 1)
		justify-content: center
		clip-path: ellipse(60% 100% at 50% 100%)
	.contenido
		display: flex row nowrap
		text-align: center
		justify-content: center
		width: 400
		max-width: 100%
		heigth: 10em
		background-color: rgba(249, 58, 121, 1)
		padding: 1em 2em
		.textoseccion
			h2,
			h3
				font-size: 3rem
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
					padding-top: 2em

		.link
			padding: 2em 1em
			display: flex
			justify-content: center
			.linkpropuestas
				display: flex
				justify-content: center
				border-radius: 2px
				align-items: center
				width: 320px
				max-width: 70%
				height: 2em
				font-weight: 900
				color: $azul2
				background-color: $verde3

</style>


