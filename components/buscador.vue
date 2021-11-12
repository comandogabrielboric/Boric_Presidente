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
		centered,
		:width="null"
	)
		.buscadorDePropuestas
			.contenedorInput(v-if="buscar")
				input.input(
					v-focus,
					v-model="matchPropuesta",
					type="text",
					placeholder="Que estas buscando?"
				)
				.oicono.lupa-linea.lupa

			//- osoCoder.oso(v-if="_.isEmpty(buscarPropuesta)")
				//- img.lupa(src="/iconos/lupa-linea.svg")
			transition(:duration="300")
				.mostradorBusqueda(v-if="!_.isEmpty(buscarPropuesta)")
					.titulo Propuestas
					.propuesta(
						v-for="(p, i) in buscarPropuesta",
						v-observe-visibility="{callback: activarBarra, once: true}",
						:class="p.clase",
						:key="p._id",
						@click="abrirPropuestaBuscada(p)"
					)

						//- .imagen.noMovil
						//- 	img(
						//- 		v-if="p.imagen",
						//- 		:src="p.imagen.url",
						//- 		:alt="p.textoAlternativoImagen"
						//- 	)
						.contenidoBuscado
							.titulo {{ p.titulo }}
							.contenido
								| ... {{ p.contenidoDestacado[0] }}
								span.destacado {{ p.contenidoDestacado[1] }}
								| {{ p.contenidoDestacado[2] }} ...
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import { gsap } from 'gsap'
import { sinCaracteresEspeciales } from '../plugins/utilidades/parametrizar'

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
		buscarPropuesta () {
			const _ = this._
			const buscar = this.matchPropuesta
			if (buscar) {
				const prop = this.setPropuestas
				// console.log('a buscar', buscar, prop)
				const coincidencia = _.pickBy(prop, p =>
					_.includes(
						sinCaracteresEspeciales(p.contenido),
						sinCaracteresEspeciales(buscar)
					)
				)
				// console.log('coincidencia', coincidencia)
				const arrayCoincidencias = _.map(coincidencia, c => c)
				// console.log('arrayCoincidencias', arrayCoincidencias)
				const propuestaCortada = _.map(_.cloneDeep(arrayCoincidencias), c => {
					c.contenidoAMostrar = c.contenido.slice(
						this.indexInicio(c.contenido, 0),
						this.indexfinal(c.contenido, 0)
					)
					c.contenidoDestacado = [
						c.contenido.slice(
							this.indexInicio(c.contenido, 50),
							this.indexInicio(c.contenido, 0)
						),
						c.contenido.slice(
							this.indexInicio(c.contenido, 0),
							this.indexfinal(c.contenido, 0)
						),
						c.contenido.slice(
							this.indexfinal(c.contenido, 0),
							this.indexfinal(c.contenido, 50)
						)
					]
					console.log(propuestaCortada, buscar.length)
					return c
				})

				const claseEntrando = _.map(propuestaCortada, c => {
					c.clase = 'entrando'
					return c
				})
				console.log('clase', propuestaCortada)
				// console.log('propuesta recortadas', propuestaCortada)
				// const index = _.map(arrayCoincidencias, p => _.lowerCase(p.contenido).indexOf(_.lowerCase(buscar)))
				// console.log('index', index)
				return claseEntrando
			}
			return null
		}
	},

	methods: {
		activarBarra (isVisible, entry, i) {
			// console.log('activando barra', isVisible, entry, i)
			// const emisiones = this.consumototal
			// const inicio = 0

			gsap.fromTo('.entrando', { x: 3000 }, { x: 0, duration: 0.8 })
			// gsap.fromTo(
			// 	'.contador',
			// 	{ textContent: inicio },
			// 	{ textContent: emisiones[1], snap: { textContent: 1 }, duration: 2 }
			// )
		},
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
.buscador
	.oicono
		width: 25px
		height: 25px
.buscadorDePropuestas
	// max-height: 90vh
	overflow: auto
	.contenedorInput
		display: flex
		align-items: center
		justify-content: center
		width: 100%
		height: 80px
		min-height: 0
		.input
			color: rgba(20,20,20,.9)
			background-color: rgba(255,255,255,.1)
			width: 90vw
			height: 72px
			border: none
			border-bottom: 1px solid $verde2
			font-size: 1.5rem
			padding: .5em 1em 0 2.3em
			text-align: left
			position: relative
			+compu
				padding-left: 1.5em
				max-width: 800px
				font-size: 3rem
			&:focus
				outline: none
				border-bottom: 3px solid $verde2
				transition: all .3s

		.lupa
			position: absolute
			width: 30px
			height: 30px
			left: 2em
			top: 4em
			color: $verde2
			+compu
				width: 40px
				height: 35px
				left: 5em
				top: 6em

	.mostradorBusqueda
		max-width: 800px
		// width: 100vw
		// height: 100%
		max-height: 65vh
		padding: 1em
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
			padding: 1em 0 0 .3em
			font-size: 2rem
			color: $verde1
		.propuesta
			margin: 1em 0
			display: flex
			flex-flow: column nowrap
			align-items: center
			justify-content: space-between
			text-align: center
			opacity: 1
			color: $azul1
			.contenidoBuscado
				background-color: #fff
				border-radius: 5px
				padding: 1rem
				font-size: 1.1rem
				.titulo
					font-size: 1.2em
					// padding: .5em
					line-height: 1.2
					width: 100%
					text-align: left
					color: $verde2
					// +compu
						// padding: 1em
				.contenido
					font-size: 1em
					padding-top: .5em
					text-align: left
					.destacado
						color: $verde2
			&:hover
				.contenidoBuscado
					background-color: $verde2
					.titulo,
					.contenido
						color: #fff
						.destacado
							color: $verde3
+compu
	.buscadorDePropuestas
		padding: 2em 3em
		.mostradorBusqueda
			padding: 2em 3em

.modalBusqueda
	::v-deep
		.ant-modal-mask
			backdrop-filter: blur(4px)
		.ant-modal-body
			text-align: center
			padding: 2em 1em
			color: #fff
			max-height: 85vh
			overflow: hidden
		.ant-modal-wrap
			top: 5em
			bottom: unset
		.ant-modal-content
			background-color: rgba(255, 255, 255, 0.93)
</style>
