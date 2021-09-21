<template lang="pug">
.main
	Navbar.header
	.cuerpo
		Nuxt
	Footer.footer
</template>

<style lang="sass">
@import '~/estilos/iconos'
@import '~/estilos/colores'
@import '~/estilos/paleta'

*
	margin: 0
	padding: 0
	font-family: "lexia", "Roboto Slab"

body
	min-height: 100vh
	color: $colorBody
	background-color: $fondoBody

.main
	min-height: 100vh
	// overflow-y: auto
	position: relative
	// border: 3px solid green
	display: flex
	flex-flow: column nowrap

	.header
		flex: auto 0 0
	.cuerpo
		flex: auto 1 0
		overflow-x: hidden
	.footer
		flex: auto 0 0

</style>
