<template lang="pug">
.rootCombi
	.espacioCompi(
		@mouseover="animar",
		v-observe-visibility="animar",
		@click="animar",
		:class="{ animando }"
	)
		img.combi(src="/imagenes/combiVerde.webp", alt="Combi")
</template>
<script>
import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)
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
			+wide
				width: 33em

		&.animando
			animation: avanzar 3s linear 1
			.combi
				animation: vibrar 1.5s 2
</style>
