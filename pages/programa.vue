<template lang="pug">
.propuestasRoot
	.encabezado
		h1.titulo Programa para un nuevo Chile
			.sub Cambios para vivir mejor

	.programaBook
		iframe(
			src="https://docs.google.com/viewer?srcid=1dyxLh6kl6-gS60lW1CPjHf7LV_QSOOr_&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
			width="100%",
			height="100%"
		)

	.contenedorbtn
		a.button.boton(
			href="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/programa/Plan+de+gobierno+AD+2022-2026+(1).pdf",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'descargar programa' })",
			download
		)
			.p DESCARGAR PROGRAMA
	.contenedorbtn
		a.button.boton(
			href="https://drive.google.com/file/d/1kKP7eIUIM_4KJMvsL4VZv8l2lp89PXlX/view?usp=sharing",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'Link informe Proceso Participativo' })",
			download
		) Informe proceso participativo

	.relleno
</template>

<script>
export default {
	data () {
		return {}
	},
	// solicita info a cms
	head () {
		// if (!this.seo) return {}
		const titulo = this._.get(
			this.seo,
			['titulo_pag'],
			'Propuesta Programática'
		)
		const descripcion = this._.get(
			this.seo,
			['descripcion_pag'],
			'Nuestro Gobierno impulsará grandes cambios, paso a paso, sin dejar a nadie fuera. ¿Quieres conocer parte de nuestras propuestas?'
		)
		const imagen = '/imagenes/portadaMovil.web'
		const url = 'https://boricpresidente.cl/propuestas'
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		obj.link = obj.link || []
		obj.link.push({
			hid: 'quill',
			rel: 'stylesheet',
			href: 'https://cdn.quilljs.com/1.0.0/quill.snow.css'
		})
		return obj
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.propuestasRoot
	background-color: $verde2
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
		// max-width: 400px
		padding: 1em 1em 0 1em
		line-height: 1.1
		color: $verde3
		font-weight: 900
		.sub
			color: #fff
			font-weight: 400
.programaBook
	width: 90vw
	background-color: $petroleo1
	// max-height: 80vh
	height: 350px
	// padding: 1em

.contenedorbtn
	padding-top: 1.5em
	display: flex
	justify-content: center
	.boton
		// transform: translateY(50%)
		display: flex
		margin: 0 auto
		cursor: pointer
		width: 100%
		height: 40px
		text-transform: uppercase
		background-color: $petroleo1
		color: $verde3
		justify-content: center
		align-items: center
		border: 0
		border-radius: 5px
		margin-top: .5em
		z-index: 5
		font-size: 1.1rem
+compu
	.encabezado
		width: 750px
		display: flex
	.titulo
		font-size: 3.2rem
	.programaBook
		height: 90vh
		padding: 2em 6em
	.contenedorbtn
		.boton
			font-size: 1.3rem
</style>

