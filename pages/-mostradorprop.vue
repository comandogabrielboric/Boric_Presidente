<template lang="pug">
.contenedor
	.contenedor-propuesta(v-for='propuesta in propuestas' :key='propuesta.id')
		.caja-propuesta
			img.img-propuesta(:src='propuesta.imagen.url' alt='')
			h2.titulo-propuesta {{ propuesta.titulo }}

</template>

<script>
export default {
	data () {
		return {
			propuestas: null
		}
	},

	async fetch () {
		console.log('cargar propuestas')
		const solicitud = await fetch(`${process.env.cmsURL}/seleccionhomes`).then(res =>
			res.json()
		)
		const propuestas = solicitud
		const props = propuestas[0]
		this.propuestas = props.propuestas
		console.log(this.propuestas)
	}
}
</script>
<style lang="sass" scoped>
//*
	border: 1px solid #aaa
.contenedor
	display: flex
	flex-flow: row wrap
	justify-content: space-around
	z-index: 1

	.contenedor-propuesta
		flex: 220px 0 0
		display: flex
		text-align: center
		justify-content: center
		padding: 1em

		.caja-propuesta
			display: flex
			flex-flow: column
			position: relative
			align-items: center

			.img-propuesta
				width: 180px

			.titulo-propuesta
				margin-top: 1rem
				font-size: 1.1rem

</style>
