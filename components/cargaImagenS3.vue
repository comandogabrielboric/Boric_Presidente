<template lang="pug">
.rootCargaImagen
	.oculto
		label.conBoton(ref="etiqueta")
			input(
				ref="cargador",
				type="file",
				@change="presetupCropper",
				accept="image/*;capture=camera"
			)

	slot(v-bind:src="value", v-bind:cargar="seleccionarImagen")
		a-button(color, @click="$refs.etiqueta.click()", dark) Seleccionar Pase movilidad

	a-modal(
		title="Cargar pase de movilidad",
		:visible="modal",
		@ok="cargarImagen",
		centered,
		:confirmLoading="subiendo || modificandoAvatar",
		:maskClosable="false",
		dialogClass="editorImagen",
		:okText="modificandoAvatar ? 'Guardando' : subiendo ? 'Subiendo Imagen' : 'subir Imagen'",
		:okButtonProps="{ props: { disabled: !objectUrl } }",
		@cancel="cancelar"
	)
		.contenido(:class="{ bloqueado: subiendo }")
			.mw-100.d-flex.justify-center(v-if="objectUrl")
				.image-container.elevation-4
					img.image-preview(ref="source", :src="objectUrl")

			.botonera(v-if="objectUrl")
				a-button-group
					a-button(icon, @click="resetCropper")
						.oicono.resetear
					a-button(icon, @click="girarX")
						.oicono.flipY
					a-button(icon, @click="girarY")
						.oicono.flipX
					a-button(icon, @click="rotateLeft")
						.oicono.girarIzq
					a-button(icon, @click="rotateRight")
						.oicono.girarDer
</template>


<script>
import Cropper from 'cropperjs'
import debounce from 'lodash/debounce'

export default {
	name: 'CargadorImagenS3',
	props: {
		altura: {
			type: Number,
			default: null
		},
		anchura: {
			type: Number,
			default: null
		},
		value: {
			type: String,
			default: null
		},
		firmarCarga: {
			type: Function,
			required: true
		},
		modificandoAvatar: {
			type: Boolean,
			required: false
		}
	},
	data () {
		return {
			valor: null,
			modal: null,

			cropper: null,
			objectUrl: null,
			previewCropped: null,
			selectedFile: null,
			debouncedUpdatePreview: debounce(this.updatePreview, 257),

			escalaX: 1,
			escalaY: 1,

			subiendo: null
		}
	},
	watch: {
		modal (v) {
			if (!v) this.$refs.cargador.value = null
		}
	},
	mounted () {
		const vm = this
		this.valor = this.value || null
		this.$on('guardado', () => {
			vm.cerrarModal()
		})
	},
	methods: {
		t (key) {
			return this.$t(`paginas.perfil.${key}`)
		},
		cerrarModal () {
			this.modal = false
		},
		seleccionarImagen () {
			this.$refs.etiqueta.click()
		},
		resetCropper () {
			this.cropper.reset()
		},
		rotateLeft () {
			this.cropper.rotate(-90)
		},
		rotateRight () {
			this.cropper.rotate(90)
		},
		girarX () {
			this.escalaX = this.escalaX * -1
			this.cropper.scaleX(this.escalaX)
		},
		girarY () {
			this.escalaY = this.escalaY * -1
			this.cropper.scaleY(this.escalaY)
		},
		presetupCropper (event) {
			this.$consolo.log('presetupCropper', event)
			const file = event.target && event.target.files[0]
			if (!file) return this.$consolo.log('Falta el archivo')
			this.modal = true
			this.setupCropper(file)
		},
		setupCropper (selectedFile) {
			if (this.cropper) {
				this.cropper.destroy()
			}

			if (this.objectUrl) {
				window.URL.revokeObjectURL(this.objectUrl)
			}

			if (!selectedFile) {
				this.cropper = null
				this.objectUrl = null
				this.previewCropped = null
				return
			}

			this.objectUrl = window.URL.createObjectURL(selectedFile)
			this.$nextTick(this.setupCropperInstance)
		},
		setupCropperInstance () {
			const opciones = {
				crop: this.debouncedUpdatePreview,
				viewMode: 1
			}
			if (this.anchura && this.altura) {
				opciones.aspectRatio = this.anchura / this.altura
			}
			this.cropper = new Cropper(this.$refs.source, opciones)
		},
		updatePreview (event) {
			const canvas = this.cropper.getCroppedCanvas()
			this.previewCropped = canvas.toDataURL('image/png')
		},
		blobear () {
			const canvas = this.cropper.getCroppedCanvas({
				width: this.anchura,
				height: this.altura,
				fillColor: '#fff',
				imageSmoothingEnabled: true,
				imageSmoothingQuality: 'high'
			})
			return new Promise(resolve => {
				canvas.toBlob(
					blob => {
						resolve(blob)
					},
					'image/jpeg',
					0.8
				)
			})
		},
		confirmarImagen () {
			console.log('confirmarImagen')
			if (!this.canvas) return console.error('No hay canvas')
			this.$emit('AwsReq', this)
		},
		descargarImagen () {
			this.$console.log('descargarImagen')
			return this.blobear().then(blob => {
				this.$downBlob(blob, 'imagen.jpg')
			})
		},
		async cargarImagen () {
			try {
				const blob = await this.blobear()
				if (!blob) throw 'Falta blob!'
				this.subiendo = true
				const url = await this.firmarCarga()
				if (!url) throw 'Falta url!'
				this.$consolo.log('URL de carga obtenida', url)
				return fetch(url, {
					method: 'put',
					headers: {
						'Content-Type': 'image/jpeg',
						'Cache-Control': 'max-age=604800'
					},
					body: blob
				})
					.then(r => {
						this.$consolo.log('respuesta del put', r)
						this.valor = `${new URL(url).origin}${
							new URL(url).pathname
						}?${Math.round(new Date().getTime() / 1000)}`
						this.$emit('subido', this.valor)

						this.subiendo = false
					})
					.catch(e => {
						throw e
					})
			} catch (e) {
				console.error('Error al cargar imagen')
				this.$consolo.log(e)
				this.subiendo = false
			}
		},
		cancelar () {
			this.modal = null
		}
	}
}
</script>
<style lang="sass" scoped>
.image-container
	display: block
	max-height: 50vh
	max-width: 100%
.image-preview
	display: block
	max-height: 50vh
	max-width: 100%
.contenido
	//border: 1px solid green
	display: flex
	flex-flow: column nowrap
	align-items: center
	justify-content: center
	&.bloqueado
		opacity: .5
		pointer-events: none
.rootCargaImagen
	//border: 1px solid magenta
	.oculto
		display: none
	.mw-100
		max-width: 100%
		overflow: hidden
.ant-modal-root
	::v-deep
		.editorImagen
			.botonera
				display: flex
				justify-content: center
				margin-top: 1em
				.oicono
					margin: 0
			.ant-modal-footer
				> div
					display: flex
					justify-content: space-between
//
</style>
<style>
@import "cropperjs/dist/cropper.css";
</style>
