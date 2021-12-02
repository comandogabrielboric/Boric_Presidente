<template lang="pug">
.root
	.firmantes
		.texto Han firmado {{ numeroFirmas }} Alcaldes
			ul.firmas
				li.nombres(v-for="alcalde in alcaldesFirmantes") {{ alcalde.Nombre }} {{ alcalde.Apellido }} {{ alcalde.Apellido2 }}, {{ alcalde.Comuna }}
</template>
<script>
import alcaldesFirmantes from '../static/csv/alcaldesFirmantes.json'
export default {
	data () {
		return {
			alcaldesFirmantes,
			nFirmas: null
		}
	},
	computed: {
		numeroFirmas () {
			return alcaldesFirmantes.length
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/utils'
@import '~/estilos/paleta'
.firmantes
	font-size: 1.1em
	.texto
		padding: .5em
		color: $azul1
	.firmas
		height: 300px
		width: 300px
		padding: 1em
		text-transform: capitalize
		background-color: #fff
		overflow: auto
		.nombres
			list-style: none
</style>
