<template lang="pug">
.index
	section.storytelling

	.seccionCuna
		.cuna
			h1 ¡Activa tu
			h2 comando por Boric!
			p Necesitamos todas las manos, mentes y corazones para empujar este proyecto colectivo que cambiará Chile.
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
		height: 59vw
		background-image: url(https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/gabriel_boric_foto_header_Mesa_de_trabajo_1_copia_3_1_1_10b2b4f538.png)
		background-size: 100vw
		background-repeat: no-repeat
		background-position: center
.seccionCuna
		background-color: $verde2
		clip-path: ellipse(160% 100% at 50% 100%)
		transform: translateY(-20px)
		min-height: 10em
		padding: 2em
		display: flex
		justify-content: center
		margin-bottom: -20px
		+compu
			transform: translateY(-50px)
			clip-path: ellipse(100% 100% at 50% 100%)
			margin-bottom: -50px
		.cuna
				display: flex
				flex-flow: column
				width: 80vw
				text-align: center
				align-items: center
				h1
					font-size: 2.1em
					line-height: 0
					color: $verde3
				h2
					width: 60vw
					font-size: 2em
					color: $blanco
					line-height: 1
				p
					color: $blanco
					font-size: .9em
					+compu
					padding: 1.5em
					max-width: 450px

.seccionParticipa
		background-color: $verde2
		min-height: 10em
		padding: 2em



</style>


