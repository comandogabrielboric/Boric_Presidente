<template lang="pug">
.rootParticipa
	.titulo Estimadas y estimados,
	.texto Iniciamos el proceso de acreditación para el comando presidencial del candidato Gabriel Boric, para el 19 de diciembre, día de la segunda vuelta de la elección presidencial de Chile.  #[br] Este proceso quedará abierto a partir de esta noche y  #[span.bold hasta las 23:59 del miércoles 15 de diciembre.]  #[br] Luego de llenar el formulario, recibirán un correo con el instructivo de funcionamiento de ese día. #[br] Las y los invitamos a acreditarse con anticipación, ya que por temas sanitarios tendremos un aforo restringido.#[br] En ese sentido, el pase de movilidad es requisito para cubrir las elecciones en el recinto que dispondremos para el trabajo de la prensa acreditada #[br] Muchas gracias

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

		a-form-model-item.contenedorbtn(:wrapper-col="{ span: 14, offset: 4 }")
			a-button.suscribirme(type="primary", @click="UsarPasaporte = !UsarPasaporte")
				div(v-if="!UsarPasaporte") Usar pasaporte
				div(v-else) Usar Rut

		a-form-model-item(v-if="!UsarPasaporte" has-feedback, prop="rut")
			a-input.input(v-model="formulario.rut", type="rut", placeholder="Rut")

		a-form-model-item(v-else prop="pasaporte")
			a-input.input(v-model="formulario.pasaporte", type="pasaporte", placeholder="Pasaporte")


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
		a-form-model-item(has-feedback, prop="medio")
			a-input.input(
				v-model="formulario.medio",
				type="medio",
				placeholder="Medio"
			)
		a-form-model-item(has-feedback, prop="cargo")
			a-input.input(
				v-model="formulario.cargo",
				type="cargo",
				placeholder="Cargo"
			)

		a-form-model-item(v-if="formulario.nombre && formulario.apellido && formulario.medio" has-feedback, prop="pase")
			.label Compartenos un screenshot de tu pase de movilidad
			.cargadorImagen
				cargaImagenS3.zonaCarga.mt-xs(:altura="700" :anchura="450"
					ref="cargadorImagen"
					:archivo="`prensa/${formulario.nombre}-${formulario.apellido}-${formulario.medio}.jpg`"
					value="PMprensa"
					:firmarCarga="firmarCarga"
					:modificandoAvatar="modificandoAvatar"
					@subido="guardarUrl($event)")
					.interior(slot-scope="{ value, cargar }")
						a-button.cambioImagen(@click="cargar" :disabled="bloquearBoton" title="")
							div(v-if="!bloquearBoton") Cargar pase de movilidad
							div(v-else) Pase cargado correctamente

		a-form-model-item.contenedorbtn(:wrapper-col="{ span: 14, offset: 4 }")
			a-button.suscribirme(type="primary", @click="executeCaptcha()" :disabled="Bloaquealo")
				| INSCRIBIRME

		p.terminosycondiciones(@click="showModal") #[span.primero Acepto] &nbspTérminos y Condiciones
		vue-recaptcha(
			ref="invisibleRecaptcha",
			sitekey="6LffuXQdAAAAAD5YAkWMEOlWDZU4505ZRcVE0Zup",
			badge="bottomright",
			size="invisible",
			@verify="onCaptchaVerified",
			:loadRecaptchaScript="true"
		)

	a-modal.modal(
		v-model="visible",
		title="Muchas gracias !!",
		centered,
		@ok="handleOk",
		:footer="null"
	)
		.procesando(v-if="!procesado")
			a-spin(size="large")
			p Estamos Procesando tu solicitud
		.procusandoCompleto(v-if="procesado")
			p(v-if="!errorMensaje") Gracias, te has registrado correctamente
			p(v-else) {{ errorMensaje }}

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
import VueRecaptcha from 'vue-recaptcha'
import isEmail from 'validator/lib/isEmail'
import { phone } from 'phone'
import { validate, format, clean } from 'rut.js'

export default {
	components: {
		VueRecaptcha,
		VNodes: {
			functional: true,
			render: (h, ctx) => ctx.props.vnodes
		}
	},
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
		const validaCargo = (rule, value, callback) => {
			if (!value) {
				callback(new Error('Ingresa tu cargo'))
			} else {
				callback()
			}
		}
		const validaPase = (rule, value, callback) => {
			if (!this.bloquearBoton) {
				callback(new Error('Debes subir tu pase de movilidad registrarte'))
			} else {
				callback()
			}
		}

		const validaMedio = (rule, value, callback) => {
			if (!value) {
				callback(new Error('Ingresa tu Medio'))
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
				medio: undefined,
				cargo: undefined,
				urlPaseDeMovilidad: undefined,
				pasaporte: undefined,
				captcha: undefined
			},
			rules: {
				nombre: [{ validator: validaNombre, trigger: 'change' }],
				apellido: [{ validator: validaNombre, trigger: 'change' }],
				medio: [{ validator: validaMedio, trigger: 'change' }],
				cargo: [{ validator: validaCargo, trigger: 'change' }],
				email: [{ validator: validaEmail, trigger: 'change' }],
				telefono: [{ validator: validaTelefono, trigger: 'change' }],
				pase: [{ validator: validaPase, trigger: 'change' }],
				rut: [{ validator: validaRut, trigger: 'change' }]
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 14 }
			},
			visible: false,
			tyc: false,
			regionseleccionada: null,
			procesado: null,
			UsarPasaporte: null,

			modificandoAvatar: undefined,

			bloquearBoton: null,
			Bloaquealo: null,

			errorMensaje: null

			// regiones: this.re
		}
	},
	methods: {
		async firmarCarga () {
			this.modificandoAvatar = true
			const url = await this.$axios({
				method: 'get',
				url: `${process.env.apiURL}/signedUrl`
			})
				.then(r => r.data)
				.catch(e => console.error('fallo respuesta', e))

			this.modificandoAvatar = false
			return url
		},

		guardarUrl (url) {
			this.formulario.urlPaseDeMovilidad = url
			this.bloquearBoton = true
			this.$refs.cargadorImagen.$emit('guardado')
			console.log('guardarUrl', this.formulario.urlPaseDeMovilidad)
		},

		executeCaptcha () {
			this.$refs.formulario.validate(valid => {
				if (valid) {
					// this.$gtm.push({ event: 'Registro_mailing', nombre: 'Registro en Mailchimp', estado: 'completo' })
					this.$refs.invisibleRecaptcha.execute()
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		onCaptchaVerified (captchaResponse) {
			console.log('verificado')
			this.formulario.captcha = captchaResponse
			this.enviarDatos()
		},

		async enviarDatos () {
			// const { nombre, email, telefono, comuna } = this
			// const data = { nombre, email, telefono, comuna }

			this.visible = true
			const config = {}
			console.log('formulario', this.formulario)
			const respuesta = await this.$axios
				.post(`${process.env.apiURL}/registroPrensa`, this.formulario, config)
				.then(r => r.data)
				.catch(e => console.error('fallo suscribirse', e))
			console.log('Respuesta', respuesta)
			if (!respuesta || !respuesta.ok) {
				this.errorMensaje = respuesta.error
				this.procesado = true
			} else {
				this.Bloaquealo = true
				this.procesado = true
				this.formulario = {
					nombre: undefined,
					apellido: undefined,
					rut: undefined,
					email: undefined,
					telefono: undefined,
					medio: undefined,
					cargo: undefined,
					urlPaseDeMovilidad: undefined,
					captcha: undefined
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
.oculto
	display: none
.cargadorImagen
	width: 250px
.label
	width: 250px
	line-height: 1.2
	color: #fff

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
.contenedorBoton
	text-align: center
	.votoExtranjero
		width: 250px
		font-weight: 900
		font-size: 1.4em
		color: $petroleo1
		padding: 0
		padding-top: .25em
		background-color: $verde3

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
