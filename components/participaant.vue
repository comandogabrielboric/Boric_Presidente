<template lang="pug">
.rootParticipa
	a-form-model.suscribirse(
		ref="formulario",
		:model="formulario",
		:rules="rules"
	)
		a-form-model-item(has-feedback, prop="nombre")
			a-input.input(
				v-model="formulario.nombre",
				type="nombre",
				placeholder="Nombre"
			)

		a-form-model-item(has-feedback, prop="email")
			a-input.input(
				v-model="formulario.email",
				type="email",
				placeholder="Email"
			)

		a-form-model-item(has-feedback, prop="telefono")
			a-input.input(
				v-model="formulario.telefono",
				type="tel",
				placeholder="+56 x xxxx xxxx"
			)

		a-form-model-item(has-feedback, prop="region")
			a-select.input(
				v-model="formulario.region",
				@change="handleChange",
				placeholder="Región"
			)
				a-select-option.option(
					v-for="region in regiones",
					:key="region.label",
					:value="region.label"
				) {{ region.label }}

		a-form-model-item(v-if="regionseleccionada", has-feedback="", prop="comuna")
			a-select.input(
				v-model="formulario.comuna",
				placeholder="Comuna",
				@change="handleComuna"
			)
				a-select-option(
					v-for="comuna in comunas",
					:key="comuna.label",
					:value="comuna.label"
				) {{ comuna.label }}

		a-form-model-item.contenedorbtn(:wrapper-col="{ span: 14, offset: 4 }")
			a-button.suscribirme(type="primary", @click="submitForm('formulario')")
				| SEGUIMOS

		p.terminosycondiciones(@click="showModal") #[span.primero Acepto] &nbspTérminos y Condiciones

	a-modal.modal(
		v-model="visible",
		title="Muchas gracias !!",
		centered,
		@ok="handleOk",
		:footer="null"
	)
		p Pronto recibiras noticias de nosotros

	a-modal.modal(
		:visible="tyc",
		title="Terminos y Condiciones",
		@ok="handleOk",
		@cancel="tyc = false",
		:footer="null"
	)
		p El/la usuaria/o declara aceptar el uso de los datos solicitados para la campaña presidencial de Gabriel Boric en el marco de la Ley N° 19.628. Sólo podrán ser usados estos datos para los fines específicos que el usuario autorice, esto es, para la entrega de información de la campaña presidencial respectiva y de la difusión de sus actividades propias. Para estos efectos el usuario autoriza a que lo contacten a través de medios digitales tales como email, Facebook, mensajes de texto (SMS), WhatsApp u otras plataformas similares con las finalidades señaladas, a la casilla de correo electrónico y número de teléfono que haya indicado.

		p La permanencia en estas bases de datos tendrá siempre la posibilidad de que la/el usuaria/o pueda darse de baja o solicitar dejar de estar registrado en las mismas, pudiendo al efecto revocar su autorización, y disponiendo, en todo caso, de los derechos que confiere la Ley N° 19.628.

		p La campaña presidencial de Gabriel Boric no podrá, bajo ningún concepto, ceder o transferir dichas bases de datos a terceros sin contar con el consentimiento expreso del usuario titular de los datos privados.
</template>

<script>
import isEmail from 'validator/lib/isEmail'
import { phone } from 'phone'
import regionesComunas from '../regiones/regioneschile'

export default {
	data () {
		// let checkPending
		const validaTelefono = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('Ingresa tu telefono'))
			}
			if (!phone(value).isValid) {
				console.log('telefono', phone(value))
				callback(new Error('Utiliza formato +56 xxxxxxxxx'))
			} else {
				console.log('telefono ok', phone(value))
				callback()
			}
		}
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
		const validaRegion = (rule, value, callback) => {
			if (this._.isEmpty(value)) {
				callback(new Error('Ingresa tu region'))
			} else {
				callback()
			}
		}
		const validaComuna = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('Ingresa tu region'))
			} else {
				callback()
			}
		}
		return {
			formulario: {
				nombre: undefined,
				email: undefined,
				telefono: undefined,
				comuna: undefined,
				region: undefined,
				distrito: undefined
			},
			rules: {
				nombre: [{ validator: validaNombre, trigger: 'change' }],
				email: [{ validator: validaEmail, trigger: 'change' }],
				telefono: [{ validator: validaTelefono, trigger: 'change' }],
				region: [{ validator: validaRegion }],
				comuna: [{ validator: validaComuna, trigger: 'change' }]
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 14 }
			},
			visible: false,
			tyc: false,
			regionseleccionada: null,
			comunaSeleccionada: null
			// regiones: this.re
		}
	},
	computed: {
		regiones () {
			const re = regionesComunas.regionesComunas
			// const arrayregiones = this._.map(re, 'label')
			return re
		},
		comunas () {
			const re = this.regiones
			const com = this._.filter(re, ['value', this.regionseleccionada])
			const comunas = com[0].children
			if (this.regionseleccionada) {
				// console.log(this.regionseleccionada)
				// console.log('comunas', comunas)
				// console.log('formulario', this.formulario)
			}
			return comunas
		},
		distrito () {
			const comunaSeleccionada = this.comunaSeleccionada
			if (this.comunaSeleccionada) {
				const com = this.comunas
				const comuna = this._.filter(com, ['value', comunaSeleccionada])
				const distrito = comuna[0].distrito
				// console.log('distrito', distrito)
				this.defineDistrito(distrito)
				return distrito
			}
			return null
		}
	},
	methods: {
		submitForm (formName) {
			// console.log(this.formulario)
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.suscribirse()
					this.$gtm.push({
						event: 'Registro_mailing',
						nombre: 'Registro en Mailchimp',
						estado: 'completo'
					})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		defineDistrito (d) {
			this.formulario.distrito = d
		},
		handleChange (value) {
			console.log(`Selectedd: ${value}`)
			this.regionseleccionada = value
			console.log('seleccion', this.regionseleccionada)
		},
		handleComuna (value) {
			console.log(`Selected: ${value}`)
			this.comunaSeleccionada = value
			console.log('distri', this.distrito)
		},
		async suscribirse () {
			// const { nombre, email, telefono, comuna } = this
			// const data = { nombre, email, telefono, comuna }
			const config = {}
			const respuesta = await this.$axios
				.post(`${process.env.apiURL}/suscribirse`, this.formulario, config)
				.then(r => r.data)
				.catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
			if (!respuesta) {
				this.visible = false
			} else {
				this.visible = true
			}
			console.log('suscrito', this.visible)
		},
		showModal () {
			this.tyc = true
			this.$gtm.push({
				event: 'gtm.linkClick',
				hacia: 'terminos y condiciones'
			})
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

	.input
		width: 250px
		border-radius: 2px
		margin-bottom: .1em
		&::placeholder
			font-size: 1.1rem
	.ant-form-item
		.ant-form-item-label
			color: $verde3

.suscribirme
	position: stycky
	width: 250px
	padding: .2em 0 0 0
	right: 42px
	color: $petroleo1
	background-color: $verde3
	border-radius: 3px
	font-weight: 900
	font-size: 1.4em
.terminosycondiciones
	color: $verde3
	display: inline
	margin-top: -.5em
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

+compu

	.suscribirme
		width: 300px
		height: 40px
		right: 50px
		font-size: 1.5rem

	.suscribirse
		.input
			width: 300px
	.rootParticipa::v-deep
		.ant-input
			height: 45px
		.ant-select-selection--single
			height: 45px
		.ant-select-selection__rendered
			position: unset
		.ant-select-selection__placeholder
			padding-left: 1em
			font-size: 1.1rem
		.ant-select-selection-selected-value
			font-size: 1.1rem
			padding-top: 8px
		.has-success.has-feedback .ant-form-item-children-icon
			height: 31px

+wide
	.suscribirme
		width: 400px
		height: 60px
		right: 67px
		font-size: 1.5rem
	.terminosycondiciones
		font-size: 1.1rem
		padding-top: .2em
	.suscribirse
		.input
			width: 400px
	.rootParticipa::v-deep
		.ant-input
			height: 55px
		.ant-select-selection--single
			height: 55px
		.ant-select-selection__rendered
			position: unset
		.ant-select-selection__placeholder
			padding-left: 1em
			font-size: 1.1rem
		.ant-select-selection-selected-value
			font-size: 1.1rem
			padding-top: 8px
		.has-success.has-feedback .ant-form-item-children-icon
			height: 31px
+ultra
	.suscribirme
		width: 550px
		height: 70px
		right: 92px
		font-size: 1.5rem
	.terminosycondiciones
		font-size: 1.2rem
		padding-top: .2em
	.suscribirse
		.input
			width: 550px
	.rootParticipa::v-deep
		.ant-input
			height: 65px
			font-size: 2rem
		.ant-select-selection--single
			height: 65px
		.ant-select-selection__rendered
			position: unset
		.ant-select-selection__placeholder
			// padding-left: 1em
			// font-size: 2rem
		.ant-select-selection-selected-value
			font-size: 2rem
			padding-top: 20px
		.has-success.has-feedback .ant-form-item-children-icon
			height: 31px
</style>
