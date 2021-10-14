<template lang="pug">
.root

	button(@click='busca') bascaaaaa
	a-auto-complete(:data-source="titulos"
    style="width: 200px"
    placeholder="Propuestas"
    :filter-option="filterOption" v-model="buscar")

	.buscadorDePropuestas
		input(v-model="matchPropuesta").input
		select(v-if='buscarPropuesta' v-model='seleccionarPropuesta' placeholder='holoooo').input hola hola hola
			option(v-for='p in buscarPropuesta' v-bind:value='p.titulo').input {{ p.titulo }}
</template>

<script>
import parameterize from '../plugins/utilidades/parametrizar'

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
			buscar: '',
			matchPropuesta: null,
			buscarEnPropuestas: '',
			seleccionarPropuesta: undefined
		}
	},
	computed: {
		buscarPropuesta () {
			const _ = this._

			const buscar = parameterize(this.matchPropuesta)
			if (buscar) {
				const prop = this.propuestas
				console.log('a buscar', buscar)
				const coincidencia = _.pickBy(prop, p => _.includes(parameterize(p.titulo), buscar) || _.includes(parameterize(p.contenido), buscar))
				console.log('coincidencia', coincidencia)
				const array = _.map(coincidencia, c => c)
				console.log('array', array)

				// console.log('coincidenciawww', _.map(prop, p => _.includes(p.titulo, buscar)))
				return array
			}
			return null
		}
	},
	methods: {
		busca () {
			const titulobuscado = this.buscar
			const propuestas = this.propuestas
			const propuestabuscada = this._.filter(propuestas, ['titulo', titulobuscado])
			console.log('propuestabuscada', propuestabuscada)
			if (propuestabuscada) {
				console.log('buscarprop', this.buscarPropuesta)
				console.log('match', this.matchPropuesta)
				console.log('seleccionada', this.seleccionarPropuesta)
			} else {
				const slugPropuesta = propuestabuscada[0]
				console.log('slug', slugPropuesta)
			// this.$router.push(`/propuestas/${slugPropuesta}`)
			}
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
	width: 60vw
</style>
