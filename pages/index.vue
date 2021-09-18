<template lang="pug">
.index
	.storytelling
		.filtroBlur
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/gabriel_boric_foto_header_Mesa_de_trabajo_1_copia_3_1_d8c6d632cb.png")
	.seccionCuna
		.curva
		.cuna
			p Aporta con tus ideas y anhelos a un programa de Gobierno descentralizado y abierto de cara a la ciudadanía.
			p Súmate a una mesa ciudadana o contesta una consulta.
			.btnparticipa Participa Aquí
	.seccionParticipa
		p Sumate
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
		// margin-top: -2em
		justify-content: center
		// opacity: .5
		clip-path: ellipse(65% 100% at 50% 100%)
		+movil
			height: 3em
			margin-top: -1.2em
		+compu
			margin-top: -2em
	.cuna
		display: flex
		flex-flow: column
		width: 80vw
		text-align: center
		align-items: center
		background-color: $verde1
		z-index: 2
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


.seccionParticipa
	background-color: $verde2
	min-height: 10em
	padding: 2em



</style>


