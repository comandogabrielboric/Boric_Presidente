<template lang="pug">
.root
	a-form-model(ref='formulario' :model='formulario' :rules='rules').firmar

		a-form-model-item(has-feedback prop='nombre')
			a-input(v-model='formulario.nombre' type='nombre' placeholder="Nombre").input

		a-form-model-item(has-feedback prop='apellido')
			a-input(v-model='formulario.apellido' type='apellido' placeholder="Apellido").input

		a-form-model-item(has-feedback prop='rut')
			a-input(v-model='formulario.rut' type='tel' placeholder='Rut').input

		a-form-model-item(has-feedback prop='email')
			a-input(v-model='formulario.email' type='email' placeholder='Email').input

		a-form-model-item(:wrapper-col='{ span: 24 }').contenedorbtn
			a-button(@click="firmarahora('formulario')").boton FIRMAR
	a-modal(v-model="visible" title="Gracias !!" centered @ok="handleOk" :footer="null").modal
		p Firmaste exitosamente

</template>
<script>
import isEmail from 'validator/lib/isEmail'
import { validate, format, clean } from 'rut.js'

export default {
	data () {
		const validaNombre = (rule, value, callback) => {
			if (!value) {
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
		const validaRut = (rule, value, callback) => {
			if (!value) {
				callback(new Error('Ingresa tu rut'))
			}
			if (value) {
				const limpio = clean(value)
				const rutformateado = format(limpio)
				const validado = validate(rutformateado)
				console.log(validado)
				if (validado) {
					callback()
				}
				if (!validado) {
					callback(new Error('Ingresa un rut valido'))
				}
			} else {
				callback()
			}
		}
		return {
			formulario: {
				nombre: undefined,
				email: undefined,
				apellido: undefined,
				rut: undefined
			},
			rules: {
				nombre: [{ validator: validaNombre, trigger: 'change' }],
				apellido: [{ validator: validaNombre, trigger: 'change' }],
				email: [{ validator: validaEmail, trigger: 'change' }],
				rut: [{ validator: validaRut, trigger: 'change' }]
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 14 }
			},
			visible: false

		}
	},
	methods: {
		handleOk (e) {
			console.log(e)
			this.visible = false
		},
		async firmarahora () {
			const formulario = this.formulario
			const rutlimpio = clean(formulario.rut)
			const form = {
				nombre: formulario.nombre,
				apellido: formulario.apellido,
				rut: format(rutlimpio),
				email: formulario.email
			}
			console.log('form', form)
			const config = {}
			const respuesta = await this.$axios.post(`${process.env.apiURL}/unete`, this.formulario, config).then(r => r.data).catch(e => console.error('fallo firma', e))
			console.log('Respuesta', respuesta)
			if (respuesta.error) {
				this.visible = false
			} else {
				this.visible = true
			}
			console.log('suscrito', this.visible)
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'

.firmar
	padding: 1em
	width: 260px
.contenedorbtn
	display: flex
	justify-content: center
	.boton
		// margin-left: -.8em
		width: 100%
		padding: .2em 0 0 0
		color: $petroleo1
		background-color: $verde3
		border-radius: 3px
		font-weight: 900
		font-size: 1.4em
</style>
