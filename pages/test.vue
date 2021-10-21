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
			option(v-for='p in buscarPropuesta').input {{ p.titulo }}
		.mostradorBusqueda
			.propuesta(v-for='p in buscarPropuesta')
				.titulo {{ p.titulo }}
</template>

<script>
import axios from 'axios'
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
		setPropuestas () {
			const props = this.$store.state.propuestas
			console.log('props 1', props)

			return props
		},
		buscarPropuesta () {
			const _ = this._

			const buscar = this.matchPropuesta
			if (buscar) {
				const prop = this.propuestas
				console.log('a buscar', buscar)
				const coincidencia = _.pickBy(prop, p => _.includes(parameterize(p.titulo), parameterize(buscar)) || _.includes(parameterize(p.contenido), parameterize(buscar)))
				console.log('coincidencia', coincidencia)
				const arrayCoincidencias = _.map(coincidencia, c => c)
				console.log('arrayCoincidencias', arrayCoincidencias)
				// console.log('coincidenciawww', _.map(prop, p => _.includes(p.titulo, buscar)))
				const index = _.map(arrayCoincidencias, p => _.lowerCase(p.contenido).indexOf(_.lowerCase(buscar)))
				console.log('index', index)
				return arrayCoincidencias
			}
			return null
		}

	},
	mounted () {
		console.log('props', this.setPropuestas)
	},
	actions: {
		async nuxtServerInit ({ commit }) {
			const p = await axios.get(`${process.env.cmsURL}/programa`)
			const propuestas = p.propuestas // Array
			commit('propuestas', propuestas)
		}
	},
	methods: {
		buscarIndex (p) {
			console.log(p)
		},
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
