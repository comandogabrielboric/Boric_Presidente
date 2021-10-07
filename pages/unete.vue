<template lang="pug">
.root
	.titulo
			h1 Únete a este compromiso
			p firma esta carta y lero lero
	.contenido
		.contenedorCarta
		.contenedorfirmas
			formulario
			.firmantes
				.texto Han firmado {{ nFirmas }} personas
				ul.firmas(v-for="firma in firmantes")
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}
					li.nombres {{ firma.nombre }} {{firma.apellido}}

</template>
<script>
import formulario from './unete/formulario.vue'
// import firmantes from './unete/firmantes.vue'
export default {
	components: { formulario },

	async asyncData ({ app }) {
		const respuesta = await app.$olicitar(`${process.env.apiURL}/firmantes`)
		const firmantes = respuesta.firmas
		const nFirmas = firmantes.length

		const data = {
			firmantes,
			nFirmas
		}
		return data
	},
	data () {
		return {
			firmantes: [],
			nFirmas: null
		}
	}

}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.root
	background-color: $azul2
	padding: 0 0 1em 0

.titulo
	padding: 2em 1em 1em 1em
	text-align: center
	h1
		color: $verde3
		font-size: 2rem
		font-weight: 900
		font-style: italic
.contenido
	padding-bottom: 5em
	display: flex
	flex-wrap: wrap
	justify-content: center
	.contenedorCarta
		width: 95vw
		height: 500px
	.contenedorfirmas
		max-width: 320px
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-items: center
		padding: 1em
		.firmantes
			font-size: 1.1em
			.texto
				padding: .5em
			.firmas
				height: 300px
				width: 250px
				padding: .5em
				text-transform: capitalize
				background-color: #268CAF
				overflow: auto
	+compu
		.contenedorCarta
			width: 70vw
			max-width: 700px


</style>
