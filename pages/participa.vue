<template lang="pug">
.rootParticipa
	.header
		img.imgHeader(src='/imagenes/headerParticipaMovill.webp')

	.seccion.mesasYConsulta
		.curva.curvaSuperior

		h1.titulo Mesas ciudadanas
		.texto Este un espacio de participación donde tod@s podemos compartir ideas, propuestas, anhelos y opiniones para construir, junt@s el gobierno del cambio.
		.mesas
			.circulo
				img(src='/imagenes/Mesa.png')
		a.btn.bold(href='https://participa.boricpresidente.cl/sign-in' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa.boricpresidente.cl/login'})") CREA UNA MESA

	.seccion.uneteAUnaMesa
		.curva.curvaSuperior
		h2.titulo Únete a una mesa
		.texto Súmate a las Mesas Ciudadanas que estamos desarrollando. Podrás elegir entre distintos temas, causas y territorios para conversar sobre el Chile del futuro.
		a.btn.bold(href='https://participa.boricpresidente.cl/sign-in' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ unete a una mesa'})") UNETE A UNA MESA

	.seccion.consulta
		.curva.curvaSuperior
		h2.titulo Consulta ciudadana
		.mega
			.circulo
				img(src='/imagenes/megafono.png')
		a.btn.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") RESPONDE ACÁ

	.seccion.mesasDigitales
		.curva.curvaSuperior
		h2.titulo Mesas ciudadanas digitales
		.texto ¡Únete a una mesa ciudadana de manera digital, fácil y segura! Solo debes elegir dentro del formulario que día y  hora te acomoda más y uno de nuestros coordinadores se contactará contigo. ¡Así de simple!

	.seccion.contacto
		.curva.curvaSuperior

</template>
<script>
export default {}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
@import '~/estilos/animaciones'

.seccion
	position: relative
	// min-height: 50vh
	.curvaSuperior
		display: flex
		position: absolute
		top: 0
		left: 0
		right: 0
		width: 100vw
		background-color: black
		opacity: .5
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


.seccion
	min-height: 400px
	width: 100vw
.header
	width: 100vw
	position: relative
	border: 1px solid orange
	.imgHeader
		width: 100%

.mesasYConsulta
	width: 100vw
	display: flex
	flex-wrap: wrap
	justify-content: center
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 1em 1em 0 1em
		font-style: italic
	.mesas
		$lado: 13em
		width: $lado
		height: $lado
		width: 100vw
		.circulo
			position: absolute
			top: 73%
			left: 50%
			right: 50%
			bottom: 0
			width: $lado
			height: $lado
			background: $petroleo3
			border-radius: 50%
			transform: translate(-25%, -50%) scale(.9)
			img
				position: relative
				width: 220px
				left: -60px
				top: 30px
				z-index: 1
				padding: 1em 0 1em 0
	.texto
		font-size: 1.8rem
		padding: 0 .5em 0 .5em
		text-align: center
		position: relative
		margin-bottom: 2.2em
	.btn
		font-size: 1.2rem
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		padding: .5em 1.3em
		border-radius: 4px
		margin: 1em 0 2em 0
		z-index: 5

.uneteAUnaMesa
	display: flex
	flex-wrap: wrap
	justify-content: center
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 1em 1em 0 1em
		font-style: italic
	.texto
		font-size: 1.8rem
		padding: 0 .5em 0 .5em
		text-align: center
		position: relative
		margin-bottom: 1em
	.btn
		font-size: 1.2rem
		max-width: 260px
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		padding: .5em 1.3em
		border-radius: 4px
		margin: 0 0 2em 0
		z-index: 5

.consulta
	display: flex
	flex-wrap: wrap
	justify-content: center
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 1em 1em 0 1em
		font-style: italic
	.mega
		$lado: 13em
		width: $lado
		height: $lado
		width: 100vw
		.circulo
			position: absolute
			top: 56%
			left: 50%
			right: 50%
			bottom: 0
			width: $lado
			height: $lado
			background: $petroleo3
			border-radius: 50%
			transform: translate(-25%, -50%) scale(.9)
			img
				position: relative
				width: 220px
				left: -50px
				top: -10px
				z-index: 1
				padding: 1em 0 1em 0
	.btn
		font-size: 1.2rem
		max-width: 260px
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		padding: .5em 1.3em
		border-radius: 4px
		margin: 2.5em 0 2em 0
		z-index: 5

.mesasDigitales
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 1em 1em 0 1em
		font-style: italic
</style>
