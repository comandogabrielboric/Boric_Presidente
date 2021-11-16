<template lang="pug">
.rootParticipa
	.titulo Inscripciones Apoderados de mesa
	.texto Este 21 de noviembre ponemos en juego las transformaciones que empujamos desde hace años. Para defender estos cambios, necesitamos much@s apoderad@s de mesa que velen por nuestra democracia en este proceso histórico. ¡Súmate!

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
		a-form-model-item(has-feedback, prop="apellido")
			a-input.input(
				v-model="formulario.apellido",
				type="apellido",
				placeholder="Apellido"
			)
		a-form-model-item(has-feedback, prop="rut")
			a-input.input(v-model="formulario.rut", type="rut", placeholder="Rut")
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

		.texto En que comuna deseas participar?
		a-form-model-item(has-feedback, prop="region")
			a-select.input(
				v-model="formulario.region",
				@change="handleChange",
				placeholder="Región"
			)
				a-select-option(
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

		a-form-model-item(has-feedback, prop="local")
			a-input.input(
				v-model="formulario.local",
				type="local",
				placeholder="Local de votacion"
			)

		a-form-model-item.pre ¿has sido vocal de mesa antes? #[span]
			a-switch(v-model="formulario.hazSidoVocalAntes")
		//- a-form-model-item(has-feedback prop='militancia')
		//- 	a-input(v-model='formulario.milita' type='checkbox').input
		//- 	div eres militante?
		a-form-model-item.contenedorbtn(:wrapper-col="{ span: 14, offset: 4 }")
			a-button.suscribirme(type="primary", @click="submitForm('formulario')")
				| INSCRIBIRME
		a-form-model-item.contenedorbtn(:wrapper-col="{ span: 14, offset: 7 }") #[span.pre ¿Votar en el extranjero?]
			a-button.suscribirme(
				type="primary",
				to="https://docs.google.com/forms/d/e/1FAIpQLSe3bTgWo9CWLZGSQcYMSW625ssbK6TmL0WcuO49cx48rqY24Q/viewform"
			)
				| Inscríbete aquí

		p.terminosycondiciones(@click="showModal") #[span.primero Acepto] &nbspTérminos y Condiciones

	.imgFooter
		img(src="/imagenes/apoderadosFooter.webp", alt="grupo")

	a-modal.modal(
		v-model="visible",
		title="Muchas gracias !!",
		centered,
		@ok="handleOk",
		:footer="null"
	)
		.procesando(v-if="!procesado")
			a-spin(size="large")
		.procusandoCompleto(v-if="procesado")
			p Pronto recibiras noticias

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

	.relleno
</template>

<script>
import isEmail from 'validator/lib/isEmail'
import { phone } from 'phone'
import { validate, format, clean } from 'rut.js'
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
		const validaRut = (rule, value, callback) => {
			if (!value) {
				callback(new Error('Ingresa tu rut'))
			}
			if (value.length < 8) {
				callback(new Error('Ingresa un rut valido'))
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
				callback(new Error('ingresa un rut valido'))
			}
		}
		return {
			formulario: {
				nombre: undefined,
				apellido: undefined,
				rut: undefined,
				email: undefined,
				telefono: undefined,
				comuna: undefined,
				region: undefined,
				distrito: undefined,
				hazSidoVocalAntes: false,
				local: undefined
			},
			rules: {
				nombre: [{ validator: validaNombre, trigger: 'change' }],
				apellido: [{ validator: validaNombre, trigger: 'change' }],
				email: [{ validator: validaEmail, trigger: 'change' }],
				telefono: [{ validator: validaTelefono, trigger: 'change' }],
				region: [{ validator: validaRegion }],
				comuna: [{ validator: validaComuna, trigger: 'change' }],
				rut: [{ validator: validaRut, trigger: 'change' }]
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 14 }
			},
			visible: false,
			tyc: false,
			regionseleccionada: null,
			comunaSeleccionada: null,
			procesado: null
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
					// this.$gtm.push({ event: 'Registro_mailing', nombre: 'Registro en Mailchimp', estado: 'completo' })
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

			this.visible = true
			const config = {}
			const respuesta = await this.$axios
				.post(`${process.env.apiURL}/apoderados`, this.formulario, config)
				.then(r => r.data)
				.catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
			if (!respuesta) {
				this.visible = false
			} else {
				this.procesado = true
				this.formulario = {
					nombre: undefined,
					email: undefined,
					telefono: undefined,
					comuna: undefined,
					region: undefined,
					distrito: undefined,
					milita: null
				}
			}
			console.log('suscrito', this.visible)
		},
		showModal () {
			this.tyc = true
			// this.$gtm.push({ event: 'gtm.linkClick', hacia: 'terminos y condiciones' })
		},
		handleOk (e) {
			console.log(e)
			this.visible = false
			this.tyc = false
			this.procesado = false
		}
	}
}
</script>

<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.imgFooter
	img
		width: 100vw
.titulo
	padding: 1em .5em .5em .5em
	text-align: center
	font-size: 3rem
	color: $verde3
	font-style: italic
	line-height: 1.1
	max-width: 450px
.texto
	padding: 0 1em 1em 1em
	max-width: 730px
	text-align: center
	font-size: 1.3rem
.suscribirse
	display: flex
	flex-wrap: wrap
	justify-content: center
	max-width: 400px
	.pre
		color: #fff
		font-size: 1rem
	.texto
		align-items: center
		font-size: 1rem
		color: #fff
	.contenedorbtn
		color: #fff
	.input
		width: 250px
		border-radius: 2px
		margin-bottom: .1em
		&::placeholder
			font-size: 1em
	::v-deep
		.ant-form
			padding-bottom: 2em
		.ant-form-item
			.ant-form-item-label
				color: $verde3

.suscribirme
	// position: stycky
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
	font-size: .9rem
	width: 400
	max-width: 100%
	font-weight: 900
	cursor: pointer
	.primero
		font-weight: 400

.modal
	// height: 200px

.relleno
	width: 90vw
	height: 5em

.rootParticipa
	text-align: left
	display: flex
	flex-flow: column
	justify-content: center
	align-items: center
	background-color: #19CBB5

.suscribirse::v-deep

	.ant-row
		margin-bottom: .6em
	.ant-form-explain
		margin-top: .25rem
		font-size: .8em
	.has-error .ant-form-explain,
	.has-error .ant-form-split
		color: #fff
.modal::v-deep
	.ant-modal-header
		text-align: center
		padding: 3em
		background-color: $verde1
	.ant-modal-title
		color: $verde3
		font-size: 2.5rem
		font-weight: 700
		line-height: 1.5em
		+movil
			font-size: 1.5rem
	.ant-modal-body
		text-align: center
		padding: 2em 1em .5em 1em
		background-color: #fff
		color: $azul2
		font-size: 1.5rem
		max-height: 60vh
		overflow: auto
		p
			font-size: 1.2em
	.ant-modal-mask
		backdrop-filter: blur(4px)
</style>
