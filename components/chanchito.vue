<template lang="pug">
.rootChanchito
	.chanchito(@mouseover="animar" @click="animar" :class="{animando}")
		img(src="/imagenes/chanchitoPomaire.png" alt="Chanchito de Pomaire")
		.circulo
</template>
<script>
export default {
	data () {
		return {
			animando: null
		}
	},
	methods: {
		animar () {
			if (this.animando) return
			this.animando = true
			setTimeout(() => {
				this.animando = false
			}, 2000)
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/animaciones'
.chanchito
	$lado: 11em
	width: $lado
	height: $lado
	position: relative
	&.animando
		img
			animation: jalea 1s 1

	img
		position: relative
		height: 100%
		z-index: 5

	.circulo
		position: absolute
		top: 50%
		left: 50%
		width: $lado
		height: $lado
		background: rgba(38, 140, 175, 1)
		border-radius: 50%
		transform: translate(-63%, -63%) scale(.8)
	+compu
		$lado: 16em
		width: $lado
		height: $lado
		transform: scaleX(-1)
		//img
			transform: scaleX(-1)
		.circulo
			width: $lado
			height: $lado
			transform: translate(-65%, -65%) scale(.8)
</style>
