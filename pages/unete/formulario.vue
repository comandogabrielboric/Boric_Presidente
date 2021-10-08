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
			.button(@click="firmarahora('formulario')").boton
				.p FIRMAR
	a-modal(v-model="visible" centered @ok="handleOk" :footer="null").modal
		p.t Gracias por unirte
		p ¿Quieres sumarte a las mesas de participación programáticas?
		a.link(href='https://participa.boricpresidente.cl' target="_blank" rel="noreferer noopener" @click="$gtm.push({ event: 'nav-link', hacia: 'Unete - participa.boricpresidente.cl'})") Haz click aquí.
		p ¿Te gustaría apoyarnos un poco más?
		nuxt-link.link(to='/aporta' @click.native="tag('Unete - aporta')") Haz click aquí para para aportar a la campaña

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
		},
		tag (valor) {
			this.$gtm.push({ event: 'nav-link', hacia: valor })
		}
	}
}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'

.firmar
	padding: 1em
	width: 260px
.contenedorbtn
	display: flex
	justify-content: center
	.boton
		display: flex
		margin: 0 auto
		cursor: pointer
		width: 100%
		height: 38px
		text-transform: uppercase
		background-color: $verde3
		color: $verde1
		justify-content: center
		align-items: center
		border: 0
		border-radius: 5px
		margin-top: .5em
		z-index: 5
		font-size: 1.5em
.modal::v-deep
	.ant-modal-body
		text-align: center
		padding: 2em 1em 5em 1em
		background-color: $verde1
		// max-height: 80vh
		overflow: auto
		font-family: lexia
		.t
			color: $verde3
			font-size: 2.2em
			padding-bottom: .3em
		p
			font-size: 1.3em
			color: #fff
			padding: 1em 0 0 0
			&:nth-of-type(3)
				margin-top: 1em
		.link
			margin: 0 .3em
			padding: 0 .7em
			font-wegth: 700
			font-size: 1.2em
			color: #fff
			font-style: italic
			&.nuxt-link-active
				color: $colorPrincipalC3
		+compu
			padding: 2em 2em 5em 2em
			.t
				font-size: 3em
			p
				font-size: 1.8em
			.link
				font-size: 1.5em
	.ant-modal-mask
		backdrop-filter: blur(4px)
</style>
