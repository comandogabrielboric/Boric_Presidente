<template lang="pug">
.main
	Navbar.header
	.cuerpo
		Nuxt
	Footer.footer
</template>

<style lang="sass">
@import '~/estilos/colores'
@import '~/estilos/paleta'


.main
	min-height: 100vh
	// overflow-y: auto
	position: relative
	// border: 3px solid green
	display: flex
	flex-flow: column nowrap
	font-display: swap
	.header
		flex: auto 0 0
	.cuerpo
		flex: auto 1 0
		overflow-x: hidden
	.footer
		flex: auto 0 0

</style>
