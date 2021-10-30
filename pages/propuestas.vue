<template lang="pug">
.propuestasRoot
	.encabezado
		h1.titulo Propuesta #[span programatica]
				div.sub para un nuevo Chile

	.programaBook
		iframe(src="https://docs.google.com/viewer?srcid=1et5iqq8FRzHY7co-RorVHoomzgKqFVOV&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="100%")

	.contenedorbtn
		.button(@click="descargar").boton
			.p DESCARGAR PROGRAMA

	.relleno

</template>

<script>
export default {

	data () {
		return {

		}
	},
	// solicita info a cms
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(this.seo, ['titulo_pag'], 'Propuesta Programática')
		const descripcion = this._.get(this.seo, ['descripcion_pag'], 'Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera. ¿Quieres conocer parte de nuestras propuestas?')
		const imagen = '/imagenes/portadaMovil.web'
		const url = 'https://boricpresidente.cl/propuestas'
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		obj.link = obj.link || []
		obj.link.push({ hid: 'quill', rel: 'stylesheet', href: 'https://cdn.quilljs.com/1.0.0/quill.snow.css' })
		return obj
	}



}

</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.propuestasRoot
	background-color: $azul2
	display: flex
	align-items: center
	flex-flow: column
.relleno
	width: 100vw
	height: 7em
.encabezado
	text-align: center
	font-style: italic
	font-size: 1rem
	.titulo
		padding: 1em 1em 0 1em
		line-height: 1.1
		color: $verde3
		font-weight: 900
		.sub
			color: #fff
			font-weight: 400
.programaBook
	width: 90vw
	background-color: $azul1
	// max-height: 80vh
	height: 350px
	// padding: 1em

.contenedorbtn
	padding-top: 1.5em
	display: flex
	justify-content: center
	.boton
		display: flex
		margin: 0 auto
		cursor: pointer
		width: 100%
		height: 40px
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		justify-content: center
		align-items: center
		border: 0
		border-radius: 5px
		margin-top: .5em
		z-index: 5
		font-size: 1.1rem
+compu
	.titulo
		font-size: 3.2rem
	.programaBook
		height: 90vh
		padding: 2em 6em
	.contenedorbtn
		.boton
			font-size: 1.3rem
</style>

