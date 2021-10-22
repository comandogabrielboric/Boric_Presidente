<template lang="pug">
.root
	.buscador(@click='buscar = !buscar')
		.oicono.lupa-linea

	.buscadorDePropuestas(v-if='buscar')
		input(v-model="matchPropuesta" type="text" placeholder="Que estas buscando?").input
		//- select(v-if='buscarPropuesta' v-model='seleccionarPropuesta' placeholder='holoooo').input hola hola hola
		//- 	option(v-for='p in buscarPropuesta').input {{ p.titulo }}
		.mostradorBusqueda
			.propuesta(v-for='p in buscarPropuesta' :key='p._id' @click='abrirPropuestaBuscada(p)')
				.imagen.noMovil
					img(:src="p.imagen.url")
				.contenidoBuscado
					.titulo {{ p.titulo }}
					.contenido {{ p.contenido }}
</template>

<script>
// import axios from 'axios'
import parameterize from '../plugins/utilidades/parametrizar'
export default {
	data () {
		return {
			propuestas: [],
			buscar: null,
			matchPropuesta: '',
			buscarEnPropuestas: '',
			seleccionarPropuesta: undefined
		}
	},
	computed: {
		setPropuestas () {
			const props = this.$store.state.propuestas
			// console.log('propscc 1', props)
			const propuestas = this._.cloneDeep(props)
			const propuestaslimpias = this._.map(propuestas, c => {
				c.contenido = this.limpiarHTML(c.contenido)
				return c
			})
			// console.log('propscc 1', propuestas)

			return propuestaslimpias
		},
		titulos () {
			const propuestas = this.setPropuestas
			// console.log('ouon', propuestas)
			const titulos = this._.map(propuestas, p => p.titulo)
			return titulos
		},
		buscarPropuesta () {
			const _ = this._
			const buscar = this.matchPropuesta
			if (buscar) {
				const prop = this.setPropuestas
				// console.log('a buscar', buscar, prop)
				const coincidencia = _.pickBy(prop, p => _.includes(parameterize(p.contenido), parameterize(buscar)))
				// console.log('coincidencia', coincidencia)
				const arrayCoincidencias = _.map(coincidencia, c => c)
				// console.log('arrayCoincidencias', arrayCoincidencias)
				const propuestaCortada = _.map(_.cloneDeep(arrayCoincidencias), c => {
					c.contenido = c.contenido.slice(this.indexInicio(c.contenido), this.indexfinal(c.contenido))
					return c
				})
				// console.log('propuesta recortadas', propuestaCortada)
				// const index = _.map(arrayCoincidencias, p => _.lowerCase(p.contenido).indexOf(_.lowerCase(buscar)))
				// console.log('index', index)
				return propuestaCortada
			}
			return null
		}
	},
	watch: {
		abrirPropuestaDelBuscador () {
			const ruta = this.$nuxt.$route
			console.log(ruta)
			return null
		}
	},
	// mounted: {
	// 	titulos () {
	// 		console.log('props', this.setPropuestas)
	// 		const propuestas = this.setPropuestas
	// 		const titulos = this._.map(propuestas, p => p.titulo)
	// 		return titulos
	// 	}
	// },
	methods: {
		indexInicio (v) {
			// const propuestas = this.buscarPropuesta
			const buscar = this.matchPropuesta
			const index = this._.lowerCase(v).indexOf(this._.lowerCase(buscar))
			const inicioCorte = index - 60
			if (inicioCorte <= 0) { return 0 }
			// console.log('index inicio', inicioCorte, buscar)
			return inicioCorte
		},
		indexfinal (v) {
			// const propuestas = this.buscarPropuesta
			const buscar = this.matchPropuesta
			const index = this._.lowerCase(v).indexOf(this._.lowerCase(buscar))
			const finCorte = index + 60 + buscar.length
			// console.log('index fin', finCorte, buscar.length)
			return finCorte
		},
		limpiarHTML (html) {
			const temporalDivElement = document.createElement('div')
			temporalDivElement.innerHTML = html
			return temporalDivElement.textContent || temporalDivElement.innerText
		},
		abrirPropuestaBuscada (p) {
			// console.log(p)
			this.$router.push('/propuestas/' + p.Slug)
			this.$nuxt.refresh()
			this.buscar = null
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'

.input
	color: #000
	width: 60vw
.buscadorDePropuestas
	display: flex
	flex-flow: column
	width: 100vw
	max-height: calc(100vh - 5em)
	min-height: 100px
	overflow: auto
	position: fixed
	align-items: center
	top: 5em
	left: 0
	right: 0
	// bottom: 0
	background-color: rgba(255,255,255,.8)
	// opacity: .5
	border: 1px solid orange
	padding: 2em .5em
	.mostradorBusqueda
		max-width: 800px
		width: 100vw
		padding: 1em
		// background-color: $blanco
		.propuesta
			margin: 1em 0
			display: flex
			flex-flow: row
			align-items: center
			justify-content: space-between
			text-align: center
			border: 1px solid red
			background-color: $azul2
			opacity: 1
			.imagen
				width: 150px
				padding: .5em
			.contenidoBuscado
				.titulo
					font-size: 1.2rem
					padding: .5em
					line-height: 1.2
				.contenido
					font-size: 1rem
					padding: .5em
					text-align: center
					color: #fff
+compu
	.buscadorDePropuestas
		padding: 2em 3em
		.buscadorDePropuestas
			padding: 2em 3em
			.mostradorBusqueda
				padding: 2em 3em


</style>
