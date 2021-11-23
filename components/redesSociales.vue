<template lang="pug">
.redesSociales
	a.redSocial.facebook(
		target="_blank",
		rel="noreferer noopener",
		href="https://www.facebook.com/gabrielboric",
		@click="$gtm.push({ event: 'nav-link', hacia: 'facebook footer' })"
	)
		.oicono.facebook
	a.redSocial.twitter(
		target="_blank",
		rel="noreferer noopener",
		href="https://twitter.com/gabrielboric",
		@click="$gtm.push({ event: 'nav-link', hacia: 'twitter footer' })"
	)
		.oicono.twitter
	a.redSocial.instagram(
		target="_blank",
		rel="noreferer noopener",
		href="https://www.instagram.com/gabrielboric",
		@click="$gtm.push({ event: 'nav-link', hacia: 'instagram footer' })"
	)
		.oicono.instagram
	a.redSocial.tiktok(
		target="_blank",
		rel="noreferer noopener",
		href="https://www.tiktok.com/@gabrielboric",
		@click="$gtm.push({ event: 'nav-link', hacia: 'tiktok footer' })"
	)
		.oicono.tiktok
	a.redSocial.whatsapp(
		target="_blank",
		rel="noreferer noopener",
		href="https://api.whatsapp.com/send?phone=56957603153",
		@click="$gtm.push({ event: 'nav-link', hacia: 'whatsapp footer' })"
	)
		.oicono.whatsapp
	a.redSocial.github(
		target="_blank",
		rel="noreferer noopener",
		href="https://github.com/comandogabrielboric/Boric_Presidente",
		@click="$gtm.push({ event: 'nav-link', hacia: 'GitHub footer' })"
	)
		.oicono.github
</template>
<script>
export default {
	name: 'RedesSociales'
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.redesSociales
	display: flex
	.redSocial
		// color: inherit
		margin: 0.5em
		line-height: 0
		.oicono
			font-size: 1.4em
			+compu
				font-size: 2.5em
			// +wide
			// 	font-size: 3em
</style>
