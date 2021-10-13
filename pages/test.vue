<template lang="pug">
.root

	button(@click='busca') bascaaaaa
	a-auto-complete(:data-source="titulos"
    style="width: 200px"
    placeholder="Propuestas"
    :filter-option="filterOption" v-model="buscar")


</template>
<script>
export default {
	async asyncData ({ app }) {
		const _ = app.$lodash
		const respuesta = await app.$olicitar(`${process.env.cmsURL}/programa`)
		const propuestas = respuesta.propuestas // Array
		const titulos = _.map(propuestas, p => p.titulo)

		const data = {
			propuestas,
			titulos
		}
		return data
	},
	data () {
		return {
			propuestas: [],
			titulos: [],
			buscar: ''
		}
	},

	methods: {
		busca () {
			const titulobuscado = this.buscar
			const propuestas = this.propuestas
			const propuestabuscada = this._.filter(propuestas, ['titulo', titulobuscado])
			const slugPropuesta = propuestabuscada[0].Slug

			this.$router.push(`/propuestas/${slugPropuesta}`)
		},
		filterOption (input, option) {
			return (
				option.componentOptions.children[0].text.toUpperCase().includes(input.toUpperCase())
			)
		}
	}
}
</script>

<style lang="sass" scoped>
.input
	color: #000
</style>
