<template lang="pug">
.redesSociales
	a.redSocial.facebook(target="_blank" rel="noreferer noopener" href="https://www.facebook.com/gabrielboric")
		.oicono.facebook
	a.redSocial.twitter(target="_blank" rel="noreferer noopener" href="https://twitter.com/gabrielboric")
		.oicono.twitter
	a.redSocial.instagram(target="_blank" rel="noreferer noopener" href="https://www.instagram.com/gabrielboric")
		.oicono.instagram
	a.redSocial.tiktok(target="_blank" rel="noreferer noopener" href="https://www.tiktok.com/gabrielboric")
		.oicono.tiktok
	a.redSocial.whatsapp(target="_blank" rel="noreferer noopener" href="/")
		.oicono.whatsapp

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
