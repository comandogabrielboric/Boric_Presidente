<template lang="pug">
.rootParticipa
	.header
		.noCompu
			img.imgHeader(src='/imagenes/headerParticipaMovil.webp')
		.noMovil
			img.imgHeader(src='/imagenes/headerParticipaWeb.webp')

	.seccion.mesasYConsulta
		.curva.curvaSuperior

		.contenido
			.imagen
				.foto
					.circulo
						img(src='/imagenes/Mesa.png')
			.tituloYBotones
				h1.titulo #[span.primero Mesas ciudadanas x Boric]
				.texto El nuevo Chile lo construimos entre todas y todos. Súmate a nuestros mecanismos de participación y sé parte de nuestro programa de gobierno.
				.botones
					a.btn.bold(href='https://participa.boricpresidente.cl/sign-in' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa.boricpresidente.cl/login'})") CREA UNA MESA
					a.btn.bold(href='https://participa.boricpresidente.cl/busca-tu-mesa' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ unete a una mesa'})") UNETE A UNA MESA
					a.btn.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})" ) Consulta ciudadana
					//- .s.noMovil(id='mesasdigitales')
	.seccion.mesasDigitales
		.curva.curvaSuperior
		.contenido
			.titulo(id='mesasdigitales') #[span.primero Mesas ]
							div ciudadanas digitales
			.movible
				.mac
					.circulo
						img(src='/imagenes/Mac.png')
			.texto ¡Únete a una mesa ciudadana de manera digital, fácil y segura! Solo debes elegir dentro del formulario que día y  hora te acomoda más y uno de nuestros coordinadores se contactará contigo. ¡Así de simple!
			a.btn.bold(href='https://docs.google.com/forms/d/1AT07ODbVjqKX9CupCjfcI8xH2ttG8lCWph698G0jMbo/edit' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") INSCRÍBETE ACÁ

	.seccion.consulta
		.curva.curvaSuperior
		.contenido
			.titulo #[span.primero Consulta]
				div ciudadana
			.texto El nuevo Chile lo construimos entre todas y todos. ¡Inscríbete y participa en la construcción de nuestro programa de gobierno!
			.boton
				a.btn.bold(href='https://tll5o6hb21g.typeform.com/to/gRt8fnSE' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") RESPONDE ACÁ
		.movible
			.mega
				.circulo
					img.noCompu(src='/imagenes/megafono.png')
					img.noMovil(src='/imagenes/megafonoReversa.png')

	.seccion.uneteAUnaMesa
		.curva.curvaSuperior
		.contenido
			.imagen
				.mesa
					.circulo
						img(src='/imagenes/Mesa.png')
			.textosYBoton
				h2.titulo #[span.primero Únete]
					div a una mesa
				.texto Súmate a las Mesas Ciudadanas que estamos desarrollando. Podrás elegir entre distintos temas, causas y territorios para conversar sobre el Chile del futuro.
				a.btn.bold(href='https://participa.boricpresidente.cl/busca-tu-mesa' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ unete a una mesa'})") UNETE A UNA MESA

	.seccion.contacto
		.curva.curvaSuperior
		.titulo ¿Tienes dudas?
		.texto Ponte en contacto con nosotros
		a.btn.bold(href='mailto:mesas@boricpresidente.cl' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'link-home', hacia: 'participa/ consulta ciudadana'})") CONTACTO

</template>
<script>
export default {
	router: {
		mode: 'hash'
	}
}
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
	min-height: 500px
	display: flex
	flex-wrap: wrap
	justify-content: center
	background-color: $azul2
	.curva
		background-color: inherit

	.contenido
		display: flex
		// flex-wrap: wrap-reverse
		width: 100vw
		align-items: center
		justify-content: space-evenly
		padding: 1em
		.imagen
			$lado: 18em
			width: 250px
			height: 300px
			.foto
				.circulo
					position: absolute
					top: 50%
					left: 10%
					right: 50%
					bottom: 0
					width: $lado
					height: $lado
					background: $verde3
					border-radius: 50%
					transform: translate(-25%, -50%) scale(.9)
					img
						position: relative
						width: 25em
						left: 15
						top: 0
						z-index: 1
						padding: 1em
		.tituloYBotones
			justify-content: right
			display: flex
			flex-wrap: wrap
			max-width: 700px
			// min-width: 400px
			text-align: right
			padding: 1em
			z-index: 2
			.titulo
				margin-top: -20px
				color: #fff
				font-size: 2.5rem
				// text-align: center
				font-weight: 900
				z-index: 5
				padding: 1em 1em 0 1em
				line-height: 1.3
				// font-style: italic
			.primero
				font-size: 3rem
				font-weight: 900
				font-style: italic
			.texto
				font-size: 1.2rem
				max-width: 700px
				padding: 0 1.5em
			.botones
				padding: 2em
				display: flex
				flex-wrap: wrap
				max-width: 650px
				.btn
					font-size: 1.2rem
					// display: flex
					margin: 0 auto
					cursor: pointer
					text-transform: uppercase
					background-color: $verde3
					color: $azul2
					padding: .5em 1.3em
					border-radius: 4px
					margin-bottom: 1em
					z-index: 5

.uneteAUnaMesa
	background-color: $petroleo2
	display: flex
	flex-wrap: wrap
	justify-content: center
	.curva
		background-color: inherit
	.contenido
		display: flex
		flex-flow: row-reverse
		align-items: center
		justify-content: space-evenly
		width: 100vw
		padding: 2em 3em
		.textosYBoton
			display: flex
			flex-wrap: wrap
			justify-content: left
			max-width: 800px
			.titulo
				color: $verde3
				font-size: 2.5rem
				text-align: left
				font-weight: 900
				line-height: 1.3
				z-index: 5
				padding: 1em 0 0 .5em
				font-style: italic
				.primero
					font-size: 3rem
					font-weight: 400
					font-style: italic
			.texto
				color: $azul2
				font-size: 1.8rem
				padding: 0 .5em 0 .5em
				text-align: left
				margin-bottom: 1em
			.btn
				font-size: 1.2rem
				max-width: 260px
				height: 45px
				display: block
				margin: 0 auto
				cursor: pointer
				text-transform: uppercase
				background-color: $azul2
				color: $verde3
				padding: .5em 1.3em
				border-radius: 4px
				margin: 0 0 2em 0
				z-index: 5
		.imagen
			width: 300px
			height: 200px
			.mesa
				$lado: 15em
				width: $lado
				height: $lado
				width: 100vw
				.circulo
					position: absolute
					left: 77%
					right: 0
					bottom: 45px
					width: $lado
					height: $lado
					background: $petroleo3
					border-radius: 50%
					transform: translate(-25%, -50%) scale(.9)
					img
						position: relative
						width: 21em
						left: -90px
						top: 15px
						z-index: 1
						padding: 1em 0 1em 0
	.btn
		font-size: 1.2rem
		max-width: 260px
		height: 45px
		display: block
		margin: 0 auto
		cursor: pointer
		text-transform: uppercase
		background-color: $azul2
		color: $verde3
		padding: .5em 1.3em
		border-radius: 4px
		margin: 0 0 2em 0
		z-index: 5

.consulta
	display: flex
	flex-flow: column
	justify-content: center
	background-color: $verde2
	.curva
		background-color: inherit
	.contenido
		padding: 1em
		margin-bottom: 2em
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
		.boton
			// width: 100%
			background-color: inherit
			text-align: center
			display: flex
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
				// margin: 0 0 2em 0
				z-index: 5

	.movible
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
				background: $azul2
				border-radius: 50%
				transform: translate(-25%, -50%) scale(.9)
				img
					position: relative
					width: 220px
					left: 10px
					top: -10px
					z-index: 1
					padding: 1em 0 1em 0
	.boton
		width: 100vw
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
			// margin: 0 0 2em 0
			z-index: 5

.mesasDigitales
	background-color: $azul1
	display: flex
	flex-wrap: wrap
	justify-content: center
	.curva
		background-color: inherit
	.contenido
		display: flex
		flex-flow: column
		align-items: center
		.titulo
			color: #fff
			font-size: 2.5rem
			text-align: center
			font-weight: 900
			z-index: 5
			padding: 1em 1em 0 1em
			font-style: italic
			line-height: 1.3
			position: relative
			margin-bottom: 50px
			.primero
				font-size: 3rem
				font-weight: 400
				font-style: italic
				color: $verde3
		.texto
			font-size: 1.8rem
			padding: 1em .5em
			max-width: 800px
			text-align: center
			margin-bottom: 1em
		.btn
				font-size: 1.2rem
				max-width: 260px
				margin: 0 auto
				cursor: pointer
				text-transform: uppercase
				background-color: $verde3
				color: $verde1
				padding: .5em 1.3em
				border-radius: 4px
				margin: 0 0 4em 0
				z-index: 5
	.movible
		display: flex
		justify-content: center
		flex-wrap: wrap
		position: absolute
		right: 0
		top: 0
		left: 70%
		bottom: 0
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
				background: $verde3
				border-radius: 50%
				transform: translate(-25%, -50%) scale(.9)
				img
					position: relative
					width: 250px
					left: -85px
					top: 10px
					// z-index: 1
					padding: 1em 0 1em 0


.contacto
	background-color: $azul2
	display: flex
	flex-flow: column
	align-items: center
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

+movil
	.mesasYConsulta
		.contenido
			flex-flow: column-reverse
			.tituloYBotones
				text-align: center
			.imagen
				.foto
					.circulo
						top: 75%
						left: 35%

	.mesasDigitales
		.contenido
			.movible
				position: unset
				padding: .5em 0 1em 0
			.titulo
				margin-bottom: 0
			.texto
				margin-top: 1em
	.uneteAUnaMesa
		.contenido
			flex-wrap: wrap
			padding: 0
			.textosYBoton
				padding: 1em .5em
				justify-content: center
				.titulo
					padding: 0
					text-align: center
				.texto
					text-align: center
					padding: 0
			.imagen
				.mesa
					.circulo
						left: 50%
						top: 120px
	.consulta
		padding-bottom: 3em
		.movible
			.mega
				.circulo
					top: 78%
					left: 47%
					right: 0
					bottom: 0

+compu
	// .mesasYConsulta
	// 	.contenido
	// 		.tituloYBotones
	// 			.botones
	// 				text-align: left

	.consulta
		flex-wrap: nowrap
		flex-flow: row-reverse
		justify-content: space-evenly
		.contenido
			max-width: 750px
			display: flex
			flex-wrap: wrap
			justify-content: right
			align-items: center
			padding: 2em
			.titulo
				text-align: right
				padding: 1em 1em 0 1em
			.texto
				// max-width: 400px
				text-align: right
				padding: 1em 1em
		.movible
			width: 300px
			z-index: 1
			position: relative
			.mega
				.circulo
					top: 37%
					bottom: 0
					left: 37%
					right: 0


</style>
