<template lang="pug">
.rootIndex
	section.storytelling
		.filtroBlur
			img(
				@click="unete",
				src="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/Biografia/header-escritorio-1.webp",
				alt="Súmate a cambiar Chile"
			)
			.contenedorTitulo
				.titulo Biografía
				.cajaNombre
					div Gabriel Boric

	section.seccionParticipa
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
		const imagen = '/imagenes/portadaMovil.webp'
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
</style>


