<template lang="pug">
.rootParticipa
	a-form-model(ref='ruleForm' :model='ruleForm' :rules='rules').suscribirse
		a-form-model-item(has-feedback='' prop='nombre')
			a-input(v-model='ruleForm.nombre' type='nombre' placeholder="Nombre").input
		a-form-model-item(has-feedback='' prop='email')
			a-input(v-model='ruleForm.email' type='email' placeholder='Email').input
		a-form-model-item(has-feedback='' prop='telefono')
			a-input(v-model='ruleForm.telefono' type='tel' placeholder='+56 x xxxx xxxx').input
		a-form-model-item(has-feedback='' prop='comuna')
			a-input(v-model='ruleForm.comuna' type='comuna' placeholder='Comuna').input
		a-form-model-item(:wrapper-col='{ span: 14, offset: 4 }').contenedorbtn
			a-button(type='primary' @click="submitForm('ruleForm')").suscribirme
				| SEGUIMOS
		p(@click='showModal').terminosycondiciones #[span.primero Acepto] &nbspTerminos y Condiciones
	a-modal(v-model="visible" title="Bienvenide !!" centered @ok="handleOk" :footer="null").modal
		p Pronto recibiras noticias de nosotros
	a-modal(:visible='tyc' title='Terminos y Condiciones' @ok='handleOk' @cancel="tyc = false" :footer="null").modal
		p El/la usuaria/o declara aceptar el uso de los datos solicitados para la campaña presidencial de Gabriel Boric en el marco de la Ley N° 19.628. Sólo podrán ser usados estos datos para los fines específicos que el usuario autorice, esto es, para la entrega de información de la campaña presidencial respectiva y de la difusión de sus actividades propias. Para estos efectos el usuario autoriza a que lo contacten a través de medios digitales tales como email, Facebook, mensajes de texto (SMS), WhatsApp u otras plataformas similares con las finalidades señaladas, a la casilla de correo electrónico y número de teléfono que haya indicado.

		p La permanencia en estas bases de datos tendrá siempre la posibilidad de que la/el usuaria/o pueda darse de baja o solicitar dejar de estar registrado en las mismas, pudiendo al efecto revocar su autorización, y disponiendo, en todo caso, de los derechos que confiere la Ley N° 19.628.

		p La campaña presidencial de Gabriel Boric no podrá, bajo ningún concepto, ceder o transferir dichas bases de datos a terceros sin contar con el consentimiento expreso del usuario titular de los datos privados.


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
			},
			visible: false,
			tyc: false
		}
	},
	methods: {
		submitForm (formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.suscribirse()
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		async suscribirse () {
			// const { nombre, email, telefono, comuna } = this
			// const data = { nombre, email, telefono, comuna }
			const config = {}
			const respuesta = await this.$axios.post(`${process.env.apiURL}/suscribirse`, this.ruleForm, config).then(r => r.data).catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
			if (!respuesta) {
				this.visible = false
			} else {
				this.visible = true
			}
			console.log('suscrito', this.visible)
		},
		showModal () {
			console.log('terminos')
			this.tyc = true
		},
		handleOk (e) {
			console.log(e)
			this.visible = false
			this.tyc = false
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.suscribirse
	display: flex
	flex-wrap: wrap
	justify-content: center
	max-width: 400px

	input
		width: 250px
		height: 2em
		border-radius: 2px
		&::placeholder
			font-size: .9em
.suscribirme
	// position: stycky
	width: 250px
	padding: 0
	right: 42px
	color: $petroleo1
	background-color: $verde3
	border-radius: 3px
	font-weight: 900
	font-size: 1.4em
.terminosycondiciones
	color: $verde3
	display: inline
	font-size: .9rem
	width: 400
	max-width: 100%
	font-weight: 900
	cursor: pointer
	.primero
		font-weight: 400

.modal
	height: 200px




.rootParticipa
	text-align: left

.rootParticipa::v-deep
	.ant-row
		margin-bottom: 1em
	.ant-form-explain
		margin-top: .25rem
		font-size: .8em
	.has-error .ant-form-explain,
	.has-error .ant-form-split
		color: #fff
.modal::v-deep
	.ant-modal-header
		text-align: center
		padding-top: 3em
		background-color: $verde1
	.ant-modal-title
		color: $verde3
		font-size: 2.5em
		font-weight: 700
		line-height: 1.5em
		+movil
			font-size: 1.5em
	.ant-modal-body
		text-align: center
		padding: 2em 1em
		background-color: $verde1
		color: #fff
		max-height: 60vh
		overflow: auto
		p
			font-size: 1.2em
	.ant-modal-mask
		backdrop-filter: blur(4px)




</style>
