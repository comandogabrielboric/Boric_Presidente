<template lang="pug">
.root
	.buscador(@click="abrirBuscador")
		.oicono.lupa-linea

	a-modal.modalBusqueda(
		:visible="buscar",
		:header="null",
		:footer="null",
		@close="buscar = false",
		@cancel="buscar = false",
		:width="null"
	)
		.buscadorDePropuestas
			.contenedorInput(v-if="buscar")
				.oicono.lupa-linea.lupa
				input(
					v-focus,
					v-model="matchPropuesta",
					type="text",
					placeholder="Que estas buscando?"
				)
				.lineaDelFocus

			transition(:duration="300")
				.mostradorBusqueda(
					v-if="!_.isEmpty(buscarPropuesta) && matchPropuesta.length >= 2"
				)
					.titulo Propuestas

					.propuestas
						.propuesta(
							v-for="(p, i) in buscarPropuesta",
							:class="p.clase",
							:key="p._id",
							@click="abrirPropuestaBuscada(p)"
						)
							.titulo.light {{ p.titulo }}

							.coincidencias
								.coincidencia(v-for="coincidencia in p.coincidencias")
									| ... {{ coincidencia.texto[0] }}
									span.destacado {{ coincidencia.texto[1] }}
									| {{ coincidencia.texto[2] }} ...
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import { sinCaracteresEspeciales } from '../plugins/utilidades/parametrizar'

const amplitudTexto = 80
export default {
	directives: {
		focus: {
			// Definición de directiva
			inserted (el) {
				// console.log('el', el)
				Vue.nextTick(() => el.focus())
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
		buscadoSinEspeciales () {
			return sinCaracteresEspeciales(this.matchPropuesta)
		},
		buscarPropuesta () {
			const _ = this._
			const buscar = this.matchPropuesta
			const buscadoSinEspeciales = sinCaracteresEspeciales(buscar)
			if (!buscar) return null

			const prop = this.setPropuestas
			// console.log('a buscar', buscar, prop)
			const coincidencia = _.pickBy(prop, p =>
				_.includes(sinCaracteresEspeciales(p.contenido), buscadoSinEspeciales)
			)
			// console.log('coincidencia', coincidencia)
			const arrayCoincidencias = _.map(coincidencia, c => {
				const trozos = sinCaracteresEspeciales(c.contenido).split(
					buscadoSinEspeciales
				)
				let longitud = 0
				c.posiciones = []

				_.forEach(trozos, (t, i) => {
					if (i > 0) {
						c.posiciones.push({
							inicio: longitud,
							fin: longitud + buscadoSinEspeciales.length,
							destacar: true
						})
						longitud = longitud + buscadoSinEspeciales.length
					}
					longitud = longitud + t.length
					// posiciones.push([longitud, longitud + t.length])
				})

				c.coincidencias = _.map(c.posiciones, ({ inicio, fin, destacar }) => ({
					texto: [
						c.contenido.slice(inicio - amplitudTexto, inicio),
						c.contenido.slice(inicio, fin),
						c.contenido.slice(fin, fin + amplitudTexto)
					],
					destacar
				}))
				return c
			})
			return arrayCoincidencias
		}
	},

	methods: {
		indexInicio (v, caracteresPrevios = 50) {
			// const propuestas = this.buscarPropuesta
			const buscar = this.matchPropuesta
			const index = sinCaracteresEspeciales(v).indexOf(
				sinCaracteresEspeciales(buscar)
			)
			const inicioCorte = index - caracteresPrevios
			if (inicioCorte <= 0) {
				return 0
			}
			// console.log('index inicio', inicioCorte, buscar)
			return inicioCorte
		},
		indexfinal (v, caracteresPosteriores = 50) {
			// const propuestas = this.buscarPropuesta
			const buscar = this.matchPropuesta
			const index = sinCaracteresEspeciales(v).indexOf(
				sinCaracteresEspeciales(buscar)
			)

			const finCorte = index + caracteresPosteriores + buscar.length
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
		},

		contenidoDestacado (texto) {
			// const destacable = this.matchPropuesta
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
$anchoMaximo: 800px
.buscador
	.oicono
		$lado: 25px
		width: $lado
		height: $lado

.modalBusqueda::v-deep
	.ant-modal-mask
		top: 5em
		backdrop-filter: blur(.5em)
	.ant-modal-wrap
		top: 5em
		padding: 5em
	.ant-modal
		top: 0
	.ant-modal-content
		background-color: transparent
		box-shadow: none
		max-height: 100vh
		max-width: $anchoMaximo
		margin: 0 auto
	.ant-modal-body
		text-align: center
		padding: 0
		color: #fff
		max-height: 100vh
	.ant-modal-close-x
		color: white
		$lado: 2.4em
		width: $lado
		height: $lado
		svg
			width: $lado
			height: $lado

.buscadorDePropuestas
	// overflow: auto
	$alturaBuscador: 5em
	$separacion: 3em

	.contenedorInput
		flex: auto 0 0
		height: $alturaBuscador
	.mostradorBusqueda
		flex: auto 1 1
		margin-top: 3em
		overflow-y: auto
		max-height: calc(100vh - #{$separacion} - #{$alturaBuscador})

	.contenedorInput
		display: flex
		align-items: center
		justify-content: center
		width: 100%
		position: relative
		min-height: 0

		.lupa
			flex: auto 0 0
			color: $verde2
			$lado: 3em
			width: $lado
			height: $lado
			+compu
				$lado: 4em
				width: $lado
				height: $lado

		input::placeholder
			color: transparentize(white, .3)
		input
			margin-left: 1em
			color: white
			background-color: transparent
			flex: auto 1 1
			border: none
			font-size: 1.4rem
			line-height: 1
			padding-bottom: .25em
			text-align: left
			position: relative
			transition: all .05s ease
			caret-shape: underscore
			caret-color: white
			+compu
				max-width: $anchoMaximo
				font-size: 2.8rem
		.lineaDelFocus
			position: absolute
			bottom: 0
			height: 0
			left: 0
			right: 0
			background-color: #fff
			transform: translate(0, 50%)
			transition: height .1s ease
		input:focus
			outline: none
			+ .lineaDelFocus
				height: 4px

	.mostradorBusqueda
		max-width: $anchoMaximo
		min-height: 0
		// max-height: 65vh
		padding: 0
		overflow: auto
		// background-color: $blanco
		transition: all 0.1s ease
		+salir
			opacity: 0
			max-height: 0
		+saliendo
			max-height: 100vh
			overflow: hidden
		> .titulo
			width: 100%
			text-align: left
			padding: 1em 0 0 0
			font-size: 2rem
			color: transparentize(white, .2)
		.propuesta
			margin: 1em 0
			display: flex
			flex-flow: column nowrap
			align-items: center
			justify-content: space-between
			text-align: center
			opacity: 1
			color: $azul1
			background-color: #fff
			border-radius: 5px

			font-size: 1.1rem
			.titulo
				font-size: 1.2em
				padding: 1rem
				line-height: 1.2
				width: 100%
				text-align: left
				color: $azul1
				border-bottom: 1px solid transparentize(black, .9)

			.coincidencias
				font-size: 1em
				text-align: left
				.coincidencia
					padding: 1rem 3rem
					color: $azul2
					.destacado
						color: $verde2
					+ .coincidencia
						position: relative
						&::before
							content: ''
							position: absolute
							top: 0
							left: 1em
							right: 1em
							border-top: 2px solid transparentize(black, .95)
					&:hover
						background-color: $verde1
						color: #fff
						.destacado
							color: $verde3
</style>
