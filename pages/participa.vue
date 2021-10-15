<template lang="pug">
.rootParticipa
	.header
		.noCompu
			img.imgHeader(src='/imagenes/headerParticipaMovill.webp')
		.noMovil
			img.imgHeader(src='/imagenes/headerParticipaWeb.webp')

	.seccion.mesasYConsulta
		.curva.curvaSuperior
		.contenido
			h1.titulo #[span.primero Mesas]
				div ciudadanas
			.texto Este un espacio de participación donde tod@s 	podemos compartir ideas, propuestas, anhelos y opiniones 	para construir, junt@s el gobierno del cambio.
		.noCompu
			.movible
				.mesas
					.circulo
						img(src='/imagenes/Mesa.png')
				a.btn.bold(href='https://participa.boricpresidente.cl/sign-in' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa.boricpresidente.cl/login'})") CREA UNA MESA
		.noMovil
			.movible
				.mesas
					.circulo
						img(src='/imagenes/Mesa.png')
				a.btn.bold(href='https://participa.boricpresidente.cl/sign-in' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa.boricpresidente.cl/login'})") CREA UNA MESA
	.seccion.uneteAUnaMesa
		.curva.curvaSuperior
		.contenido
			h2.titulo #[span.primero Únete]
				div a una mesa
			.texto Súmate a las Mesas Ciudadanas que estamos desarrollando. Podrás elegir entre distintos temas, causas y territorios para conversar sobre el Chile del futuro.
		a.btn.bold(href='https://participa.boricpresidente.cl/busca-tu-mesa' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ unete a una mesa'})") UNETE A UNA MESA

	.seccion.consulta
		.curva.curvaSuperior
		.contenido
			.titulo #[span.primero Consulta]
				div ciudadana
			.texto El nuevo Chile lo construimos entre todas y todos. ¡Inscríbete y participa en la construcción de nuestro programa de gobierno!
		.movible
			.mega
				.circulo
					img.noCompu(src='/imagenes/megafono.png')
					img.noMovil(src='/imagenes/megafonoReversa.png')

			a.btn.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") RESPONDE ACÁ

	.seccion.mesasDigitales
		.curva.curvaSuperior
		.contenido
			.titulo #[span.primero Mesas]
							div Digitales
			.texto ¡Únete a una mesa ciudadana de manera digital, fácil y segura! Solo debes elegir dentro del formulario que día y  hora te acomoda más y uno de nuestros coordinadores se contactará contigo. ¡Así de simple!
		.movible
			.mac
				.circulo
					img(src='/imagenes/Mac.png')
			a.btn.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") INSCRÍBETE ACÁ

	.seccion.contacto
		.curva.curvaSuperior
		.titulo ¿Tienes dudas?
		.texto Ponte en contacto con nosotros
		a.btn.bold(href='mailto:mesas@boricpresidente.cl' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") CONTACTO

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
		// opacity: .5
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
	.imgHeader
		width: 100%

.mesasYConsulta
	width: 100vw
	display: flex
	flex-wrap: wrap
	justify-content: center
	background-color: $azul2
	.curva
		background-color: inherit
	.titulo
		margin-top: -20px
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 1em 1em 0 1em
		line-height: 1.3
		// font-style: italic
		.primero
			font-size: 3rem
			font-weight: 400
			font-style: italic
			color: $verde3
	.movible
		display: flex
		flex-wrap: wrap
		justify-content: center
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
	background-color: $azul1
	display: flex
	flex-wrap: wrap
	justify-content: center
	.curva
		background-color: inherit
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		line-height: 1.3
		z-index: 5
		padding: 1em 1em 0 1em
		font-style: italic
		.primero
			font-size: 3rem
			font-weight: 400
			font-style: italic
			color: $verde3
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
	background-color: $azul2
	.curva
		background-color: inherit
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 0 1em 0 1em
		font-style: italic
		line-height: 1.3
		.primero
			font-size: 3rem
			font-weight: 400
			font-style: italic
			color: $verde3
	.texto
		font-size: 1.8rem
		padding: .7em .5em 0 .5em
		text-align: center
		margin-bottom: 1em
	.movible
		display: flex
		flex-wrap: wrap
		justify-content: center
		.mega
			$lado: 13em
			width: $lado
			height: $lado
			width: 100vw
			.circulo
				position: absolute
				left: 50%
				right: 50%
				bottom: 45px
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
			margin: 3.5em 0 2em 0
			z-index: 5

.mesasDigitales
	background-color: $azul1
	display: flex
	flex-wrap: wrap
	justify-content: center
	.curva
		background-color: inherit
	.titulo
		color: #fff
		font-size: 2.5rem
		text-align: center
		font-weight: 900
		z-index: 5
		padding: 0 1em 0 1em
		font-style: italic
		line-height: 1.3
		.primero
			font-size: 3rem
			font-weight: 400
			font-style: italic
			color: $verde3
	.texto
		font-size: 1.8rem
		padding: .7em .5em 0 .5em
		text-align: center
		margin-bottom: 1em
	.movible
		display: flex
		justify-content: center
		flex-wrap: wrap
		.mac
			$lado: 13em
			width: $lado
			height: $lado
			width: 100vw
			position: relative
			.circulo
				position: absolute
				top: 60%
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
					width: 250px
					left: -85px
					top: 10px
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
			margin: 3em 0 3em 0
			z-index: 5

.contacto
	background-color: $azul2
	display: flex
	flex-wrap: wrap
	justify-content: center
	.curva
		background-color: inherit
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
		padding: 1em .5em .5em .5em
		text-align: center
		margin-bottom: 1em
	.btn
		font-size: 1.5rem
		max-width: 260px
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		padding: .3em 1.3em
		border-radius: 4px
		margin: 0 0 3em 0
		z-index: 5

+compu
	.mesasYConsulta
		flex-wrap: nowrap
		justify-content: space-between
		.contenido
			width: 50vw
			.titulo
				margin-top: -30px
				font-size: 3rem
				.primero
					font-size: 3.8rem
			.texto
				text-align: left
				padding: 0 1em 0 1.5em
		.movible
			width: 50vw
			display: flex
			height: 100%
			.mesas
				z-index: 1
				.circulo
					top: 28%
					left: 75%
			.btn
				height: 45px

	.consulta
		flex-wrap: nowrap
		flex-flow: row-reverse
		.contenido
			display: flex
			flex-wrap: wrap
			justify-content: center
			width: 50vw
			.texto
				text-align: right
				padding: 1em 2em
		.movible
			width: 50vw
			z-index: 1
			.mega
				.circulo
					left: 20%
					top: 30%
			.btn
				height: 45px

	.uneteAUnaMesa
		display: flex
		flex-wrap: wrap
		.contenido
			display: flex
			flex-wrap: wrap
			justify-content: center
			.titulo
				margin-top: -30px
				width: 100vw
				font-size: 3rem
			.primero
				font-size: 3.3rem

			.texto
				text-align: center
				padding: 0 3em
				max-width: 1000px
		.btn
			display: block
			margin-bottom: 4em

	.mesasDigitales
		flex-wrap: nowrap
		.contenido
			width: 50vw
			.titulo
				font-size: 3rem
				.primero
					font-size: 3.3rem
			.texto
				padding: 1em 2em
				text-align: left
		.movible
			z-index: 1
			width: 50vw
			.btn
				height: 45px

	.contacto
		display: flex
		flex-flow: column
		align-items: center

</style>
