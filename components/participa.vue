<template lang="pug">
div
	.form
		a-input(v-model="nombre" type="text" label="nombre" placeholder="Nombre")
		a-input(v-model="email" type="email" placeholder="Email")
		a-input(v-model="telefono" type="tel" placeholder="Teléfono")
		a-input(v-model="comuna" placeholder="Comuna")
		a-button(@click="suscribirse") SEGUIMOS

</template>

<script>
import isEmail from 'validator/lib/isEmail'

export default {
	data () {
		return {
			nombre: null,
			email: null,
			telefono: null,
			comuna: null
		}
	},
	computed: {
		emailEsValido () {
			return !this._.isEmpty(this.email) && isEmail(this.email)
		}
	},
	methods: {
		async suscribirse () {
			const { nombre, email, telefono, comuna } = this
			const data = { nombre, email, telefono, comuna }
			const config = {}
			if (!this.emailEsValido) {
				console.error('email invalido')
				return
			}
			const respuesta = await this.$axios.post(`${process.env.apiURL}/suscribirse`, data, config).then(r => r.json).catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
		}
	}
}
</script>

<style lang="sass" scoped>
.form
	max-width: 100%
	width: 400px
</style>
