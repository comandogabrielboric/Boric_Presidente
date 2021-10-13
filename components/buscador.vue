<template lang="pug">
.root
</template>
<script>
export default {
	async asyncData ({ app }) {
		// console.log('context keys', Object.keys(context))
		const _ = app.$lodash
		// console.log('asyncData')
		const respuesta = await app.$olicitar(`${process.env.cmsURL}/programa`)
		const propuestas = respuesta.propuestas // Array
		_.map(propuestas, p => {
			p.contenido = app.$sanitizar(p.contenido)
			return p
		})
		const titulos = _.map(propuestas, p => { p.titulo = p.titulo.normalize() })

		const data = {
			titulos
		}
		return data
	},
	data () {
		return {
			titulos: []
		}
	},
	mounted () {
		window.vm = this
		console.log(this.titulos)
	}

}
</script>

<style lang="sass" scoped></style>
