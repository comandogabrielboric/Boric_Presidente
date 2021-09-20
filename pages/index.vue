<template lang="pug">
.index
	.storytelling
		.filtroBlur
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/gabriel_boric_foto_header_Mesa_de_trabajo_1_copia_3_1_d8c6d632cb.png")
	.seccionCuna
		.curva
		.cuna
			h1 ¡Mesas ciudadanas
			h2  x Boric!
			p Te invitamos a aportar con tus ideas, opiniones y anhelos a un programa de Gobierno diverso, descentralizado y abierto de cara a la ciudadanía.
			p Súmate a una mesa ciudadana o contesta una consulta.
			.btnparticipa Participa Aquí
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/large_IMG_20210715_144542_145_1_1_e194f04db0.png").imgSaludo
	.seccionParticipa
		.curva
		.contenido
			.textoseccion
				h2.titulo #[span.primero ¡Lorem] &nbspIpsum
					div ipsum!
				.texto
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			.suscribirse
				participaant
	section
		p Propuesta programatica
		mostradorprop
	section
		p Participacion ciudadana
</template>

<script>
import mostradorprop from './-mostradorprop.vue'
export default {
	components: { mostradorprop }
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
	padding: 2em
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


</style>


