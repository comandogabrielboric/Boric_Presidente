<template lang="pug">
.rootIndex
	section.storytelling
		.filtroBlur
			img(
				@click="unete",
				src="/imagenes/Foto-Primera-Seccio204129n.webp",
				alt="Súmate a cambiar Chile"
			)

	section.seccionParticipa
		.curva.curvaSuperior
		.contenido(id="uneteALaCampaña")
			.lado.lado1
				h2.titulo #[span.primero Inscríbete]
					div Únete a la campaña
				.texto
					div Las transformaciones que Chile necesita las hacemos entre todas y todos.
					div Déjanos tu mail y recibirás más información sobre la campaña.

			.lado.lado2
				.suscribirse
					participaant

		img.imgSaludo(
			src="/imagenes/Foto-tercera-Seccio204129n.webp",
			alt="Diversidad",
			v-if="cargado"
		)
		//- img.noCompu.imgSaludo(
		//- 	src="/imagenes/diversidadMovil.webp",
		//- 	alt="Diversidad",
		//- 	v-if="cargado"
		//- )
		//- img.imgTiny.imgSaludo(
		//- 	src="/imagenes/diversidadMovilTiny.webp",
		//- 	alt="Diversidad",
		//- 	v-if="!cargado"
		//- )

	.precarga(v-if="!cargado")
	.postcarga(v-if="cargado")
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
				.kitGrafico
					a.boton(
						href="https://drive.google.com/drive/folders/1Y_c8X0tCuK5hzUeyLeY_fif_YlWU5a6I",
						target="_blank",
						rel="noreferer noopener",
						@click="$gtm.push({ event: 'link-home', hacia: 'Decarga Kit grafico' })"
					) APORTES CIUDADANOS

			.contenido
				.lado.ladotitutlo
					.titulo Arma tu
						.segundo Campaña
					.texto Descarga nuestro kit y crea tus propios insumos de campaña. #[br]¡De ti depende!
					.noMovil
						+linkDescarga

				.lado.ladoImagen
					.cajaHerramienta
						img(src="/imagenes/cajaHerramientas.webp", alt="Herramientas")
						.circulo

			.noCompu
				+linkDescarga

			//- img.noCompu.imgP(src="/imagenes/participaMovil.webp", alt="Participa")

		section.seccion1mPuertas
			.curva.curvaSuperior

			.header
				img.noMovil(
					src="/imagenes/landingCampaña/header1mPuertas-web.png",
					alt="1 millon de puertas x Boric"
				)
				img.noCompu(
					src="/imagenes/landingCampaña/headerMovil.webp",
					alt="1 millon de puertas x Boric"
				)
			.contadorDePuertas
				.contenido
					img.noCompu(
						src="/imagenes/landingCampaña/mapaMovil.webp",
						alt="1 millon de puertas x Boric"
					)
					.contenedor
						.contenedorContador
							.conteo 772.614
						.contenderoTexto
							.texto puertas abiertas
							.texto.bold reportadas
			.footer
				img.noCompu(
					src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/apoderadosFooter.webp",
					alt="grupo"
				)
				img.noMovil(
					src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Component_1_1_.webp",
					alt="grupo"
				)

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
				.lado.lado1
					.titulo Súmate
						.segundo y Aporta
					.texto El cambio lo financiamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia.
					.noMovil
						+linkServel
				.lado.ladoImagen
					Chanchito.chan
				.noCompu
					+linkServel
			img.imgP(
				src="/imagenes/FOTO-GABRIEL-WEB-3-SECCION (1).webp",
				alt="Participa"
			)
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
		// this.cuantasPuertasLlevamos()
	},
	methods: {
		async cuantasPuertasLlevamos () {
			const respuesta = await this.$axios({
				method: 'get',
				url: `${process.env.apiURL}/puertasAbiertas`
			})
				.then(r => r.data)
				.catch(e => console.error('fallo respuesta', e))
			console.log('Respuesta', respuesta)
		},
		unete () {
			this.$router.replace('/#uneteALaCampaña')
		},
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

.precarga
	height: 100vh
	width: 100vw
	background-color: #1488b2
.seccionParticipa
	position: relative
	background-color: #1488b2
	color: white
	.curva
		background-color: #1488b2
	.contenido
		position: relative
		z-index: 3
		text-align: center
		// max-width: 1300px
		.titulo
			max-width: 100%
			line-height: 1.2
			color: #fff
			font-weight: 400
			.primero
				// font-size: 3rem
				font-weight: 900
				font-style: italic
				color: $verde3

		.texto
			font-style: italic
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
			.lado2
				display: flex
				align-items: center
				justify-content: center
			.lado1
				padding-left: 2em
	+wide
		.contenido
			.titulo
				line-height: 1.1
				// .primero
					// font-size: 3.4rem
			.texto
				padding-right: 1em
	+ultra
		.contenido
			padding-bottom: 3em

.seccionArmaTuCampana
	background-color: #60ad6a
	display: flex
	flex-flow: column
	align-items: center
	position: relative
	justify-content: center
	padding-bottom: 3em
	.curva
		background-color: #60ad6a
	.contenido
		text-align: center

		.texto
			display: flex
			flex-flow: column
			// font-weight: 300
			// padding: 0 1em
		.titulo,
		.segundo
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
			background: $azul1
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
		padding-top: .7em
		> .texto
			font-size: 1.5rem
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
				padding: 0 0 3em 0
				&.ladoImagen
					order: -1
					padding-right: 15em
				&.ladotitutlo
					z-index: 5
				.texto
					padding: .5em 0
					// line-height: 1.3
			.kitGrafico
				display: block
				width: 350px
				.texto
					margin-top: -.8em
					text-align: left
				.boton
					font-size: 1.5rem
					padding: .3em 0 .1em 0
					width: 100%
					// height: 45px
	+wide
		.contenido
			.lado
				&.ladoImagen
					order: -1
					padding-right: 6em
				&.ladotitutlo
					z-index: 5
			.kitGrafico
				width: 350px
				.boton
					font-size: 1.5rem
					padding: 12px 0 .1em 0
					width: 100%
					height: 56px
		.cajaHerramienta
			$lado: 28em
			width: $lado
			height: $lado
			img
				width: 100.13%
				height: 100%
				padding: 1em 0 1em 0
			.circulo
				top: 50%
				left: 40%
				right: 0
				bottom: 0
				width: $lado
				height: $lado
				transform: translate(-25%, -50%) scale(.9)

.seccion1mPuertas
	background: linear-gradient(180deg, #2ABADC 0%, #B2EA91 195.02%)
	.curva
		background: rgba(42, 186, 220, 1)
	.header
		display: flex
		justify-content: center
		padding: 3em 8em 0
		img
			width: 100%
	.contadorDePuertas
		display: flex
		padding: 2em
		.contenido
			.contenedor
				display: flex
				justify-content: center
				flex-flow: column nowrap
				align-items: center
				padding: 1em
				.contenedorContador
					background-color: rgba(244, 58, 108, 1)
					// max-width: 280px
					text-align: center
					border-radius: 12px
					.conteo
						padding: .2em .3em 0 .3em
						font-size: 4rem
						line-height: 1
						font-weight: 900
						font-style: italic
						+compu
							font-size: 9rem
		.contenderoTexto
			padding: 1em
	.footer
		img
			position: relative
			width: 100%
			z-index: 10
			margin-bottom: -3.5em
	+movil
		.header
			padding: 1em
		.contadorDePuertas
			.contenido
				display: flex
				flex-flow: row nowrap !important
				justify-content: center
				>img
					width: 40%
					margin-right: -3em
				.contenedor
					.contenedorContador
						.conteo
							font-size: 3rem

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
		padding-top: 6em
		.titulo,
		.segundo
			margin: 0
			line-height: 1
			font-style: italic
		.titulo
			color: $verde3
		.segundo
			font-weight: 900
			color: #fff
		.texto
			margin: 1em 0
			font-style: italic
			// font-size: 1.2rem

	+compu
		.contenido
			display: flex
			flex-flow: row nowrap
			text-align: left
			justify-content: center
			// padding-bottom: 14em
		.lado1
			padding-left: 2em
		.lado
			.titulo
				display: flex
				flex-flow: row nowrap
				.segundo
					padding-left: .3em

			p
				font-size: 1.5rem
		.linkservel
			.boton
				font-size: 1.4rem
				padding: .4em 1em .3em 1em
			.instrucciones
				font-size: 1.1rem
	+wide
		.contenido
			min-height: 900px
			// border: 1px solid green
			.titulo
				.segundo
					font-size: 4.1rem
			p
				font-size: 2.2rem
				line-height: 1.2
			.linkservel
				.boton
					font-size: 1.5rem
					padding: .6em 1em .3em 1em
				.instrucciones
					font-size: 1.2rem

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
				p
					font-size: 1.5rem
					line-height: 1.2
			.link
				.linkpropuestas
					width: 350px
					font-size: 1.4rem
					padding: .5em 1em .3em 1em
	+wide
		.contenido
			.titulo
				.segundo
					font-size: 3.4rem
			.textoseccion
				p
					font-size: 2rem
		.link
			.linkpropuestas
				width: 350px
				font-size: 1.5rem
</style>


