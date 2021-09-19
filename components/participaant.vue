<template lang="pug">
div
	a-form-model(ref='ruleForm' :model='ruleForm' :rules='rules' v-bind='layout')
		a-form-model-item(has-feedback='' label='nombre' prop='nombre')
			a-input(v-model='ruleForm.nombre' type='nombre')
		a-form-model-item(has-feedback='' label='email' prop='email')
			a-input(v-model='ruleForm.email' type='email')
		a-form-model-item(has-feedback='' label='telefono' prop='telefono')
			a-input(v-model='ruleForm.telefono' type='tel')
		a-form-model-item(has-feedback='' label='comuna' prop='comuna')
			a-input(v-model='ruleForm.comuna' type='comuna')
		a-form-model-item(:wrapper-col='{ span: 14, offset: 4 }')
			a-button(type='primary' @click="submitForm('ruleForm')")
				| Submit
			a-button(style='margin-left: 10px' @click="resetForm('ruleForm')")
				| Reset

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
		submitForm (formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm (formName) {
			this.$refs[formName].resetFields()
		}
	}
}
</script>
