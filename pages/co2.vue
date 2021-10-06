<template lang="pug">
.root
	h1 Test
	button(@click="totalesdeemisiones()") totalesdeemisiones
</template>
<script>
export default {
	async asyncData ({ app }) {
		const respuesta = await app.$olicitar(`${process.env.apiURL}/totalCo2`)
		const totales = respuesta.co2
		const data = {
			totales
		}
		return data
	},
	data () {
		return {
			totales: null
		}
	},
	methods: {
		totalesdeemisiones () {
			const emisiones = this.totales
			console.log(emisiones[0])
		}
	}
}
</script>
<style lang="sass" scoped>
.root
	min-height: calc( 100vh - 100px  )
</style>
