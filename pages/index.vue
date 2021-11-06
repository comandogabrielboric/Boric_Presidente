<template lang="pug">
.rootIndex
	section.storytelling
		.filtroBlur
			img.noMovil(src="/imagenes/portadaWeb.webp", alt="Súmate a cambiar Chile")
			img.noCompu(src="/imagenes/portadaMovil.webp", alt="Súmate a cambiar Chile")
			//- img.imgTiny(v-if="!cargado" src="/imagenes/portadaMovilTiny.webp" alt="Súmate a cambiar Chile")
		.contenido
			.titulo Programa de
				.segundo Gobierno
				.tercero Apruebo Dignidad
			.contendorBoton
				nuxt-link.boton(to="/propuestas", @click.native="tag('propuestas')") VER PROGRAMA

	section.seccionCuna
		.curva.curvaSuperior

		.noCompu.sobreCurva
			.contenido
				.texto Nos dimos cuenta que el cambio es más potente cuando lo construimos entre todas y todos, cuando viene desde la diversidad de la gente, que nutre y aporta con nuevas ideas, sumándose y uniéndose para comenzar un nuevo proyecto de vida, nutriendo de manera colectiva la tierra y las raíces del árbol del Cambio.
		.noMovil.sobreCurva
			.contenido
				.texto Nos dimos cuenta que el cambio es más potente cuando lo construimos entre todas y todos, cuando viene desde la diversidad de la gente, que nutre y aporta con nuevas ideas, sumándose y uniéndose para comenzar un nuevo proyecto de vida, nutriendo de manera colectiva la tierra y las raíces del árbol del Cambio.

		//- a.btnparticipa.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'encuesta participa'})") Consulta ciudadana
		//- a.btnparticipa.bold(href='https://participa.boricpresidente.cl/' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa.boricpresidente.cl'})") Participa Aquí

		img.noMovil.imgSaludo(
			src="/imagenes/diversidad.webp",
			alt="Diversidad",
			v-if="cargado"
		)
		img.noCompu.imgSaludo(
			src="/imagenes/diversidadMovil.webp",
			alt="Diversidad",
			v-if="cargado"
		)
		img.imgTiny.imgSaludo(
			src="/imagenes/diversidadMovilTiny.webp",
			alt="Diversidad",
			v-if="!cargado"
		)

	.precarga(v-if="!cargado")
	.postcarga(v-if="cargado")
		section.seccionParticipa
			.curva.curvaSuperior
			.contenido
				.lado.lado1
					h2.titulo #[span.primero Inscríbete]
						div Únete a la campaña
					.texto
						p Las transformaciones que Chile necesita las hacemos entre todas y todos.
						P Déjanos tu mail y recibirás más información sobre la campaña.

				.lado.lado2
					.suscribirse
						participaant
			img.noMovil(src="/imagenes/participa.webp", alt="Participa")
			img.noCompu(src="/imagenes/participaMovil.webp", alt="Participa")

		section.seccionArmaTuCampana
			.curva.curvaSuperior

			mixin linkDescarga
				.kitGrafico
					.texto Descarga tu
					a.boton(
						href="https://drive.google.com/drive/folders/	1vwqqSnxHIyv9wI617h8pUers1OudaBo0",
						target="_blank",
						rel="noreferer noopener",
						@click="$gtm.push({ event: 'link-home', hacia: 'Decarga Kit grafico' })"
					) KIT GRÁFICO AQUÍ

			.contenido
				.lado.ladotitutlo
					.titulo Arma tu
						.segundo Campaña
					p.texto Descarga nuestro kit y crea tus propios insumos de campaña. #[br]¡De ti depende!
					.noMovil
						+linkDescarga

				.lado.ladoImagen
					.cajaHerramienta
						img(src="/imagenes/cajaHerramientas.webp", alt="Herramientas")
						.circulo

			.noCompu
				+linkDescarga

		section.seccionaporta
			mixin linkServel
				.linkservel
					a.boton(
						href="https://aportes.servel.cl/servel-aportes/	inicio.xhtml",
						target="_blank",
						rel="noreferer noopener",
						@click="$gtm.push({ event: 'link-home', hacia: 'Home Aportes Servel' })"
					) QUIERO APORTAR
					n-link.instrucciones(to="/aporta", @click.native="tag('instrucciones')") Ver instrucciones para donar

			.curva.curvaSuperior

			.contenido
				.lado
					.titulo Súmate
						.segundo y Aporta
					p El cambio lo financiamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia.
					.noMovil
						+linkServel
				.lado.ladoImagen
					Chanchito.chan
				.noCompu
					+linkServel

		section.propuestas
			.ondaonda
				wave.wave
			.zonaCombi
				Combi
			.curva.curvaSuperior

			.curva.curvaSuperior
			.contenido
				.textoseccion
					h2.titulo Propuesta
						.segundo Programática
					p Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera.
					p ¿Quieres conocer parte de nuestras propuestas?
				.link
					nuxt-link.linkpropuestas(to="/propuestas", @click.native="tag('Propuestas')") VER PROPUESTAS
</template>

<script>
import wave from '~/static/svg/wave.svg'
export default {
	components: { wave },
	data () {
		return {
			cargado: null
		}
	},
	head () {
		const titulo = 'Boric Presidente'
		const descripcion =
			'Votemos para hacer realidad un Chile en que nadie quede fuera. Votemos Gabriel Boric Presidente'
		const imagen = '/imagenes/portadaMovil.webp'
		const url = 'https://boricpresidente.cl'
		const meta = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		meta.titleTemplate = '%s'
		return meta
	},
	mounted () {
		this.cargado = true
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

.storytelling
	display: flex
	justify-content: center
	max-height: calc(100vh - 5em)
	background-image: url('/imagenes/portadaMovil.webp')
	background-size: cover
	background-repeat: no-repeat
	img
		width: 119.45%
		height: 100%
		max-width: 100%
		max-height: 100%
		z-index: 5
	.imgTiny
		width: 100vw
		height: 90%
		filter: blur(4px)
	.filtroBlur
		position: relative
		min-height: 250px
		width: 100vw
		display: flex
		justify-content: center
		z-index: 0
		+movil
			img
				width: 100%
				height: 198.69%
				max-width: 376px
				// max-height: 600px
	.contenido
		// background-image: url('/imagenes/portadaMovil.webp')
		// background-size: cover
		// background-repeat: no-repeat
		position: absolute
		display: flex
		width: 100%
		top: 0
		bottom: 0
		flex-flow: column
		justify-content: space-between
		padding: 3em 0
		text-align: center
		.titulo
			font-size: 2rem
			line-height: 1
			font-style: italic
			font-weight: 700
			.segundo
				font-size: 3.4rem
				padding-left: 4px
				font-weight: 900
			.tercero
				font-size: 1.5rem
				font-weight: 400
		.contendorBoton
			padding-top: .5em
			display: flex
			justify-content: flex-start
			.boton
				display: flex
				margin: 0 auto
				cursor: pointer
				width: 260px
				height: 42px
				text-transform: uppercase
				background-color: $verde3
				color: $verde1
				justify-content: center
				align-items: center
				padding-top: .8em
				border: 0
				border-radius: 5px
				margin-top: .5em
				z-index: 5
				font-size: 1.2rem
	+compu
		background-image: url('/imagenes/portadaWeb.webp')
		background-size: cover
		background-repeat: no-repeat
		.filtroBlur
			position: relative
			display: flex
			width: 100%
			height: 100%
			backdrop-filter: blur(8px)
			justify-content: center
		img
			margin: 0 0 -2.5em 0
			width: 100%
			height: 53.4%
			max-width: 100vw
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

.seccionCuna
	position: relative
	background-color: $verde1
	min-height: 20em
	display: flex
	flex-flow: column nowrap
	justify-content: center
	background-color: $verde1
	color: white
	text-align: center
	.curva
		background-color: $verde1
		+compu
		// +movil
			height: 3em
			margin-top: -1.2em
		// +compu
			margin-top: -2em

	.contenido
		padding: 1em 1em .5em 1em
		display: flex
		line-height: 1.3
		// width: 400px
		max-width: 100%
		margin: 0 auto
		font-size: 1.2rem
		font-style: italic
		align-items: center
		.texto
			padding: 1em
	.imgSaludo
		width: 100%
		height: 66.55%
		min-height: 10em
		// width: 100vw
		z-index: 0
		margin-top: -9vw

	+compu
		.contenido
			max-width: 1100px
			font-size: 2rem
		.imgSaludo
			margin-top: -6vw

.precarga
	height: 100vh
	width: 100vw
	background-color: $verde2
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
		// max-width: 1300px
		.titulo
			max-width: 100%
			line-height: 1.2
			font-size: 2.3rem
			color: #fff
			font-weight: 400
			.primero
				font-size: 3rem
				font-weight: 900
				font-style: italic
				color: $verde3

		.texto
			font-style: italic
			font-size: 1.2rem
			line-height: 1.2
		.suscribirse
			padding: 0 .5em
			display: flex
			justify-content: center
	img
		width: 100%
		height: 51.82%
	+compu
		.contenido
			display: flex
			flex-flow: row nowrap
			text-align: left
			justify-content: center
			.lado
				flex: 600px 0 1
			.lado2
				display: flex
				align-items: center
				justify-content: center
			.titulo
				font-size: 3rem
			.texto
				font-size: 1.5rem

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
		.titulo,
		.segundo
			font-size: 3rem
			line-height: 1
		.titulo
			color: $verde3
			font-style: italic
		.segundo
			font-weight: 900
			color: #fff
		p
			color: #fff
			font-style: italic
			font-size: 1.2rem
			// padding: 0 .5em

	.cajaHerramienta
		$lado: 11em
		width: $lado
		height: $lado
		position: relative
		img
			position: relative
			width: 100.13%
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
			$lado: 22em
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
			font-size: 1em
			font-style: italic
		.boton
			background-color: $verde3
			color: $azul2
			font-size: 1.1rem
			padding: .5em 1.5em
			&:visited
				color: $azul2
	+compu
		.contenido
			display: flex
			flex-flow: row nowrap
			justify-content: center
			text-align: left
			padding-top: 2em
			.lado
				flex: 600px 0 1
				padding: 0 0 3em 0
				&.ladoImagen
					order: -1
					padding-right: 15em
				&.ladotitutlo
					z-index: 5
				.titulo
					font-size: 3.4rem
				.texto
					padding-top: .5em
					font-size: 1.5rem
					line-height: 1.3
			.kitGrafico
				display: block
				width: 300px
				.texto
					margin-top: -.8em
					text-align: left
					font-size: 2rem
				.boton
					font-size: 1.5rem
					padding: .3em 0 .1em 0
					width: 100%
					// height: 45px

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
		padding: .5em 0
		.boton
			color: $azul2
			background-color: $verde3
			font-size: 1.1rem
			padding: .4em 1.5em
		.instrucciones
			color: $verde3
			font-style: italic
			padding: .5em 0
		+compu
			align-items: unset
			justify-content: unset
			.boton
				margin: 0 auto 0 0
		+movil
			padding-bottom: 2em

	.contenido
		display: flex
		flex-flow: column nowrap
		justify-content: center
		align-items: center
		text-align: center
		padding-bottom: 6em
		.titulo,
		.segundo
			font-size: 3rem
			margin: 0
			line-height: 1
			font-style: italic
		.titulo
			color: $verde3
		.segundo
			font-weight: 900
			color: #fff
		p
			margin: 1em 0
			font-style: italic
			font-size: 1.2rem

	+compu
		.contenido
			display: flex
			flex-flow: row nowrap
			text-align: left
			justify-content: center
			padding-bottom: 14em
		.lado
			flex: 600px 0 1
			.titulo
				font-size: 3.3rem
			p
				font-size: 1.5rem
		.linkservel
			.boton
				font-size: 1.4rem
				padding: .4em 1em .3em 1em
			.instrucciones
				font-size: 1.1rem

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
			height: 2em
			.wave
				height: auto

	.zonaCombi
		position: relative
		z-index: 3

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
			.titulo,
			.segundo
				font-size: 3rem
				line-height: 1
				font-weight: 900
				font-style: italic
				color: $verde3
			.titulo
				font-weight: 400
				color: #fff
			p
				color: #fff
				font-style: italic
				font-size: 1.2rem
				&:nth-of-type(1)
					padding-top: .5em

		.link
			padding: 1em 0
			display: flex
			justify-content: center
			.linkpropuestas
				font-size: 1.1rem
				display: flex
				padding-top: .2em
				justify-content: center
				border-radius: 5px
				align-items: center
				width: 250px
				max-width: 85%
				height: 2em
				font-weight: 900
				color: $azul2
				background-color: $verde3
	+compu
		.contenido
			width: 600px
			margin: 0 auto
			.textoseccion
				.titulo
					font-size: 3.4rem
				p
					font-size: 1.5rem
					line-height: 1.2
			.link
				.linkpropuestas
					width: 350px
					font-size: 1.4rem
					padding: .5em 1em .3em 1em
</style>


