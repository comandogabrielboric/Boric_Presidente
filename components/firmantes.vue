<template lang="pug">
.root
	.firmantes
		.texto Han firmado {{ nFirmas }} personas
			ul.firmas
				li.nombres Camila Vallejo
				li.nombres Rodrigo Oyarzun
				li.nombres Roberto Rojas
				li.nombres Daniel Stingo
				li.nombres Jorge Arrate
				li.nombres Marcela Mella
				li.nombres Marianela Jopia
				li.nombres Iona Rothfeld
				li.nombres Carolina Garrido
				li.nombres(v-for="firma in firmantes") {{ firma.nombre }} {{firma.apellido}}</template>
<script>
export default {
	data () {
		return {
			firmantes: [],
			nFirmas: null
		}
	},
	mounted () {
		window.vm = this
		this.solicitarFirmas()
	},
	methods: {
		async solicitarFirmas () {
			const respuesta = await this.$axios({ method: 'get', url: `${process.env.apiURL}/firmantes` }).then(r => r.data).catch(e => console.error('fallo respuesta', e))
			// console.log('Respuesta', respuesta)
			const numerofirmas = respuesta.firmas
			this.firmantes = this._.reverse(numerofirmas)
			this.nFirmas = numerofirmas.length
		}
	}
}
</script>

<style lang="sass" scoped>

.firmantes
	font-size: 1.1em
	.texto
		padding: .5em
	.firmas
		height: 300px
		width: 250px
		padding: 1em
		text-transform: capitalize
		background-color: #268CAF
		overflow: auto
		.nombres
			list-style: none

</style>
