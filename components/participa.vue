<template lang="pug">
div
	form#mc-embedded-subscribe-form.validate(action='https://boricpresidente.us6.list-manage.com/subscribe/post?u=9f1dc4f56ef47d2a37e0340d3&id=cea6cdf0c4' method='post' name='mc-embedded-subscribe-form' target='_blank' novalidate='')
	#mc_embed_signup_scroll.formulariocontacto
		.mc-field-group
			input#mce-EMAIL.required.email(type='email' placeholder='Email' value='' name='EMAIL')
		.mc-field-group
			input#mce-FNAME.required(type='text' placeholder='Nombre' value='' name='FNAME')
		.mc-field-group.size1of2
			input#mce-PHONE(type='text' placeholder='Telefono' name='PHONE' value='')
		.mc-field-group
			input#mce-MMERGE10(type='text' placeholder='Comuna' value='' name='MMERGE10')
		#mce-responses.clear
			#mce-error-response.response(style='display:none')
			#mce-success-response.response(style='display:none')
		div(style='position: absolute; left: -5000px;' aria-hidden='true')
			input(type='text' name='b_9f1dc4f56ef47d2a37e0340d3_cea6cdf0c4' tabindex='-1' value='')
		.clear
			input#mc-embedded-subscribe.button(type='submit' value='Seguimos' name='subscribe')

</template>


<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.formulariocontacto
	display: flex
	flex-wrap: wrap
	justify-content: center
	padding: 2em
	max-width: 25em
	.mc-field-group
		display: flex
		align-items: center
		justify-content: space-between
		padding: .25em 0
		.mceinput
			-webkit-appearance: none
			margin-left: 1em
			width: 14em
	.button
		padding: .3em
		margin: .8em
		width: 14em

</style>
