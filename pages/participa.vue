<template lang="pug">
div
	section
		.formulariocontacto#mc_embed_signup
			form#mc-embedded-subscribe-form.validate(action='https://	boricpresidente.us6.list-manage.com/subscribe/post?	u=9f1dc4f56ef47d2a37e0340d3&id=cea6cdf0c4' method='post' 	name='mc-embedded-subscribe-form' target='_blank' novalidate='')
				.formSuscribirse#mc_embed_signup_scroll
					h2 Dejanos tu mail y recibe actualizaciones de la campaña
					.mc-field-group
						label(for='mce-EMAIL')
							| Email
							span.asterisk *
						input.mceinput#mce-EMAIL.required.email(type='email' value='' 	name='EMAIL')
					.mc-field-group
						label(for='mce-FNAME')
							| Nombre
							span.asterisk *
						input.mceinput#mce-FNAME.required(type='text' value='' 	name='FNAME')
					#mce-responses.clear
						#mce-error-response.response(style='display:none')
							#mce-success-response.response(style='display:none')
							div(style='position: absolute; left: -5000px;' 	aria-hidden='true')
								input(type='text' 	name='b_9f1dc4f56ef47d2a37e0340d3_cea6cdf0c4' tabindex='-1' 	value='')
							.clear
					button#mc-embedded-subscribe.button(type='submit' 	value='Subscribe' name='subscribe') Subscribirme
	section.kitgrafico
		h2.titulo Arma tu propia campaña!
		.maletin
			img(src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/maletin_d53cc2fc4a.png" alt="Kit grafico Boricpresidente").imgMaletin
		.descargable
			.linkDescargaKit
				a(target="_blank" rel="noreferer noopener"  href="https://drive.google.com/drive/folders/1fqjrBTIYRgQWJ-caAgD4U8xGK9sWgCBj")
				.dentro
					.oicono.descargar
					.texto Descargar tu kit aqui
	section
		p  Donacione
	section
		p  Participacion ciudadan
</template>


<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

section
	background-color: rgba(0,0,0,.05)
	min-height: 10em
	padding: 2em
	&:nth-child(even)
		background-color: rgba(0,0,0,.1)

.formulariocontacto
	display: flex
	justify-content: center
	padding: 2em
	.formSuscribirse
		display: flex
		flex-flow: column
		text-align: center
		align-items: center
		.asterisk
			color: red
		.mc-field-group
			display: flex
			align-items: center
			justify-content: space-between
			padding: 1em
			width: 360px
			+movil
				flex-flow: column
			.mceinput
				-webkit-appearance: none
				margin-left: 1em
		.button
			padding: .3em
			margin: .8em
			width: 8em

.kitgrafico
	display: flex
	flex-flow: column
	max-height: 90vh
	.titulo
		+movil
			text-align: center
	.maletin
		display: flex
		justify-content: center
		transform: translateX(-8vw)
		.imgMaletin
			font-size: 60vh
			display: flex
			max-width: 1.4em
			max-height: 1em
			+movil
				font-size: 50vw
	.descargable
		display: flex
		flex-flow: column
	.linkDescargaKit
		margin-top: 1.5em
		font-size: .7em
		display: flex
		justify-content: right
		color: red
		+movil
			justify-content: center
		.dentro
			display: flex
			align-items: center
			background-color: transparentize($colorBody, .9)
			.oicono
				flex: auto 0 0
				font-size: 2em
				margin: 2rem
			.texto
				font-size: 1.5em
				flex: auto 1 1
				margin: 2rem 2rem 2rem 0


</style>
