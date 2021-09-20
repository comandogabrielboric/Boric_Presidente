<template lang="pug">
div
	a-form-model(ref='ruleForm' :model='ruleForm' :rules='rules' v-bind='layout').suscribirse
		a-form-model-item(has-feedback='' prop='nombre')
			a-input(v-model='ruleForm.nombre' type='nombre' placeholder="Nombre").input
		a-form-model-item(has-feedback='' prop='email')
			a-input(v-model='ruleForm.email' type='email' placeholder='Email').input
		a-form-model-item(has-feedback='' prop='telefono')
			a-input(v-model='ruleForm.telefono' type='tel' placeholder='+56 x xxxx xxxx').input
		a-form-model-item(has-feedback='' prop='comuna')
			a-input(v-model='ruleForm.comuna' type='comuna' placeholder='Comuna').input
		a-form-model-item(:wrapper-col='{ span: 14, offset: 4 }')
			a-button(type='primary' @click="suscribirse('ruleForm')")
				| SEGUIMOS

</template>

<script>
import isEmail from 'validator/lib/isEmail'
import { phone } from 'phone'

export default {
	data () {
		// let checkPending
		const validaTelefono = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('Ingresa tu telefono'))
			} if (!phone(value).isValid) {
				console.log('telefono', phone(value))
				callback(new Error('Utiliza formato +56 xxxxxxxxx'))
			} else {
				console.log('telefono ok', phone(value))
				callback()
			}
		}
		const validaNombre = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('Ingresa tu nombre'))
			} else {
				callback()
			}
		}
		const validaEmail = (rule, value, callback) => {
			if (!isEmail(value)) {
				callback(new Error('Debes ingresar un E mail valido'))
			} else {
				callback()
			}
		}
		const validaComuna = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('Ingresa tu comuna'))
			} else {
				callback()
			}
		}
		return {
			ruleForm: {
				nombre: '',
				email: '',
				telefono: '',
				comuna: ''
			},
			rules: {
				nombre: [{ validator: validaNombre, trigger: 'change' }],
				email: [{ validator: validaEmail, trigger: 'change' }],
				telefono: [{ validator: validaTelefono, trigger: 'change' }],
				comuna: [{ validator: validaComuna, trigger: 'change' }]
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 14 }
			}
		}
	},
	methods: {
		async suscribirse () {
			// const { nombre, email, telefono, comuna } = this
			// const data = { nombre, email, telefono, comuna }
			const config = {}
			const respuesta = await this.$axios.post(`${process.env.apiURL}/suscribirse`, this.ruleForm, config).then(r => r.json).catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
		}
	}
}
</script>

<style lang="sass" scoped>
.suscribirse
	display: flex
	flex-flow: column
	input
		width: 250px
		margin-top: 2px
</style>
