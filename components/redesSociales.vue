<template lang="pug">
.redesSociales
	a.redSocial.instagram(target="_blank" rel="noreferer noopener" href="https://www.instagram.com/gabrielboric/")
		.oicono.instagram
	a.redSocial.twitter(target="_blank" rel="noreferer noopener" href="https://twitter.com/gabrielboric")
		.oicono.twitter
	a.redSocial.facebook(target="_blank" rel="noreferer noopener" href="https://www.facebook.com/gabrielboric")
		.oicono.facebook
</template>
<script>
export default {
	name: 'RedesSociales'
}
</script>
<style lang="sass" scoped>

.redesSociales
	display: flex
	.redSocial
		color: inherit
		margin: 0.5em
		line-height: 0
		.oicono
			font-size: 1.4em
</style>
