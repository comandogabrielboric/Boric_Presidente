<template lang="pug">
.root
	.emisiones
		.emisionesContenedor
			.contenedorContador
				.contador 0
				.texto     kg/co2
			.barra(id='barraDeProgreso')
	button(@click="activarBarra()") activar
</template>

<script>
import { gsap } from 'gsap'

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
		}
	},
	methods: {
		totalesdeemisiones () {
			const emisiones = this.consumototal
			console.log(emisiones)
		},
		activarBarra () {
			console.log('activando barra')
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
		border: 2px solid red
		display: flex
		flex-wrap: wrap
		// align-items: center
		.barra
			height: 40px
			width: 0
			border: 2px solid red
			border-radius: 10px
			background: linear-gradient(90deg, $colorSecundariosB2 0%, $colorSecundariosA1 100%)
		.contenedorContador
			width: 100%
			font-size: 2.5em
			display: flex
			justify-content: center
			align-items: center
			.contador
				// display: block
				border: 2px solid red
				text-align: center
				margin-right: .3em
			.texto
				text-align: center

</style>
