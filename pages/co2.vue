<template lang="pug">
.root
	.emisiones
		.emisionesContenedor(v-observe-visibility="activarBarra")
			.barra(id='barraDeProgreso' )
				.contenedorContador
					.contador 0
					.texto     kg/co2
		//- button(@click="activarBarra()") activar
</template>

<script>
import { gsap } from 'gsap'
// import Vue from 'vue'
// import { ObserveVisibility } from 'vue-observe-visibility'
// Vue.directive('observe-visibility', ObserveVisibility)

export default {
	async asyncData ({ app }) {
		const respuesta = await app.$olicitar(`${process.env.apiURL}/totalCo2`)
		const totales = respuesta.co2
		const consumototal = totales[0]
		const data = {
			consumototal
		}
		return data
	},
	data () {
		return {
			consumototal: null
			// isVisible: null
		}
	},
	methods: {
		totalesdeemisiones () {
			const emisiones = this.consumototal
			console.log(emisiones)
		},
		activarBarra (isVisible, entry) {
			console.log('activando barra', isVisible)
			const emisiones = this.consumototal
			const inicio = 0

			gsap.fromTo('.barra', { width: inicio }, { width: '100%', duration: 2 })
			gsap.fromTo('.contador', { textContent: inicio }, { textContent: emisiones[1], snap: { textContent: 1 }, duration: 2 })
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
.root
	min-height: calc( 100vh - 100px  )

.emisiones
	display: flex
	justify-content: center
	width: 100vw
	border: 2px solid white
	.emisionesContenedor
		height: 200px
		width: 80vw
		display: flex
		flex-wrap: wrap
		align-items: center
		.barra
			height: 55px
			width: 0
			border-radius: 10px
			background: linear-gradient(90deg, $colorSecundariosB2 0%, $colorSecundariosA1 100%)
			overflow: hidden
			display: flex
			align-items: center
		.contenedorContador
			width: 100%
			font-size: 2.3em
			display: flex
			justify-content: center
			align-items: center
			.contador
				// display: block
				text-align: center
				margin-right: .3em
			.texto
				text-align: center

</style>
