<template lang="pug">
.rootCombi
	.espacioCompi(@mouseover="animar" @click="animar" :class="{animando}")
		img(src="/imagenes/combiVerde.png" alt="Combi").combi
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
			}, 4000)
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/animaciones'


@keyframes avanzar
	0%
		left: 50%
		transform: translate(-50%, 0%)
	48%
		opacity: 1
	49%
		left: 100%
		transform: translate(25%, 25%) rotateZ(5deg)
		opacity: 0
	51%
		opacity: 0
		left: 0%
		transform: translate(-100%, 25%) rotateZ(-5deg)
	52%
		opacity: 1
	100%
		left: 50%
		transform: translate(-50%, 0%)
.rootCombi
	position: relative
	.espacioCompi
		position: absolute
		bottom: 100%
		left: 50%
		transform: translate(-50%, 0%)
		.combi
			width: 11em
			z-index: 6
			+compu
				width: 22em

		&.animando
			animation: avanzar 3s linear 1
			.combi
				animation: vibrar 2s infinite

</style>
