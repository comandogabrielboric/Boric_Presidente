<template lang="pug">
.rootReferencia
	//- h1 Referencia {{rID}}.

</template>
<script>
export default {
	computed: {
		rID () { return this.$route.query.rID }
	},
	mounted () {
		this.registrarReferencia()
	},
	methods: {
		async registrarReferencia () {
			const codigoReferencia = this.$route.query.rID
			const respuesta = await this.$axios.post(`${process.env.apiURL}/registrarReferencia`, { codigoReferencia })
				.then(r => r.data)
				.catch(e => console.error('fallo registrarReferencia', e))
			console.log('respuesta', respuesta)
			if (this.$gtm) this.$gtm.push({ event: 'referencia', codigoReferencia })
			this.$router.replace('/')
		}
	}
}
</script>
<style lang="sass" scoped></style>
