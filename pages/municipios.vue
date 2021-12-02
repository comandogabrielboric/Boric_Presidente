<template lang="pug">
.propuestasRoot
	.encabezado
		h1.titulo Municipios x Boric
	//- .programaBook.noMovil
		a.fbo-embed(
			href="https://online.flippingbook.com/view/447789273/",
			data-fbo-id="447789273",
			data-fbo-ratio="16:9",
			data-fbo-width="100%",
			data-fbo-height="auto",
			data-fbo-version="1",
			style="max-width: 1000px"
		) Plan de gobierno AD 2022-2026
			script(
				async="",
				defer="",
				src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=447789273"
			)

	.programaBook
		iframe(
			src="https://docs.google.com/viewer?srcid=18FtiXWZ18jtkEmm1F_7a4fGzLkKJd2fH&pid=explorer&efh=false&a=v&chrome=false&embedded=true",
			width="100%",
			height="100%"
		)

	//- .contenedorbtn
		a.button.boton(
			href="https://s3.amazonaws.com/cdn.boricpresidente.cl/web/programa/Plan+de+gobierno+AD+2022-2026+(1).pdf",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'descargar programa' })",
			download
		)
			.p DESCARGAR PROGRAMA
	//- .contenedorbtn
		a.button.boton(
			href="https://drive.google.com/file/d/1kKP7eIUIM_4KJMvsL4VZv8l2lp89PXlX/view?usp=sharing",
			target="_blank",
			@click="$gtm.push({ event: 'link-home', hacia: 'Link informe Proceso Participativo' })",
			download
		) Informe proceso participativo
	.plantas
		.lado.derecha
			img(src="/svg/plantas-09.svg")
		.lado.izquierda
			img(src="/svg/plantas-08.svg")
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
		const titulo = this._.get(this.seo, ['titulo_pag'], 'Municipios x Boric')
		const descripcion = this._.get(
			this.seo,
			['descripcion_pag'],
			'18FtiXWZ18jtkEmm1F_7a4fGzLkKJd2fH'
		)
		const imagen = '/imagenes/WEB-BANDERA.webp'
		const url = 'https://boricpresidente.cl/municipios'
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
.titulo
	+movil
		font-size: 2rem
	+compu
		font-size: 3rem
	+wide
		font-size: 4rem
	+ultra
		font-size: 5.4rem
.propuestasRoot
	background: linear-gradient(180deg, #119D88 0%, #16B6A1 55.21%, #19CBB5 100%)
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
	// background-color: $petroleo1
	// max-height: 80vh
	height: 350px
	// padding: 1em
	z-index: 5
	iframe
		border-radius: 5px

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
		max-height: 80px
		text-transform: uppercase
		text-align: center
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
		max-width: 1200px
		display: flex
	.titulo
		// font-size: 3.2rem
	.programaBook
		max-width: 1000px
		height: 1200px
		padding: 1em 6em
	.contenedorbtn
		.boton
			font-size: 1.3rem
.plantas
	bottom: 22em
	position: absolute
	width: 100%
	// height: 300px
	display: flex
	flex-flow: row-reverse nowrap
	justify-content: space-between
	z-index: 0
	.lado
		margin: 0 -.5em
		img
			width: 100px
			transition: 1s all ease
	.izquierda > img
		width: 135px
	+compu
		bottom: 30em
		.lado
			margin: 0 -1em
			img
				width: 300px
		.izquierda > img
			width: 400px
	+wide
		bottom: 35em
	+ultra
		bottom: 42em
		.lado
			margin: 0 -1.5em
			img
				width: 320px
		.izquierda > img
			width: 435px
</style>

