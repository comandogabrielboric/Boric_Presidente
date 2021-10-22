<template lang="pug">
.root
	.buscador(@click='abrirBuscador')
		.oicono.lupa-linea

	a-modal(:visible="buscar" :header="null" :footer="null" @close="buscar = false" @cancel="buscar = false" centered :width="null")
		.buscadorDePropuestas
			.contenedorInput(v-if='buscar')
				input(v-focus v-model="matchPropuesta" type="text" 	placeholder="Que estas buscando?").input

			.mostradorBusqueda(v-if='buscarPropuesta')
				.propuesta(v-for='p in buscarPropuesta' :key='p._id' 	@click='abrirPropuestaBuscada(p)')
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
	directives: {
		focus: {
			// Definición de directiva
			inserted (el) {
				el.focus()
			}
		}
	},
	data () {
		return {
			propuestas: [],
			buscar: false,
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
		abrirBuscador () {
			if (!this.buscar) {
				this.buscar = true
			} else this.buscar = false
		},
		abrirPropuestaBuscada (p) {
			// console.log(p)
			this.$router.push('/propuestas/' + p.Slug)
			this.$nuxt.refresh()
			this.matchPropuesta = null
			this.buscar = null
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.buscador
	.oicono
		width: 25px
		height: 25px
.buscadorDePropuestas
	max-height: 90vh
	overflow: auto
	.contenedorInput
		display: flex
		align-items: center
		justify-content: center
		width: 100%
		height: 100px
		min-height: 0
		.input
			color: rgba(20,20,20,.9)
			background-color: rgba(255,255,255,.1)
			width: 90vw
			height: 72px
			border: none
			border-bottom: 1px solid rgba(20,20,20,.8)
			font-size: 1.5rem
			padding: .5em 1em 0 1em
			text-align: center
			+compu
				max-width: 800px
				font-size: 3rem
			&:focus
				outline: none
	.mostradorBusqueda
		max-width: 800px
		width: 100vw
		// height: 100%
		max-height: 90vh
		padding: 1em
		overflow: auto
		// background-color: $blanco
		.propuesta
			margin: 1em 0
			display: flex
			flex-flow: row
			align-items: center
			justify-content: space-between
			text-align: center
			background-color: #fff
			opacity: 1
			color: $azul1
			box-shadow: 2px 7px 7px 1px rgba(0, 0, 0, 0.2)
			.imagen
				display: flex
				justify-content: center
				align-items: center
				width: 150px
				padding: .5em
				background-color: $azul2
				+movil
					display: none
				img
					width: 150px
			.contenidoBuscado
				.titulo
					font-size: 1.2rem
					padding: .5em
					line-height: 1.2
					+compu
						padding: 1em
				.contenido
					font-size: 1rem
					padding: .5em
					text-align: center
					+compu
						padding: .5em 1em
+compu
	.buscadorDePropuestas
		padding: 2em 3em
		.mostradorBusqueda
			padding: 2em 3em


</style>
