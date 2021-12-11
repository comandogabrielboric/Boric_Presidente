<template lang="pug">
.cargadorImagen
	cargaImagenS3.zonaCarga.mt-xs(:altura="200" :anchura="200"
		ref="cargadorImagen"
		:archivo="`${$perfil.id}.jpg`"
		:value="$perfil.avatar"
		:firmarCarga="firmarCarga"
		:modificandoAvatar="modificandoAvatar"
		@subido="guardarUrlAvatar($event)")
		.interior(slot-scope="{ value, cargar }")
			a-button.cambioImagen(@click="cargar" shape="circle" icon="camera" title="Cambiar imagen")

</template>

<script>
// import cargaImagenS3 from '@components/cargaImagenS3'
export default {
	name: 'PerfilIndex',
	// components: { cargaImagenS3 },
	data () {
		return {
			modificandoAvatar: undefined
		}
	},
	methods: {
		async firmarCarga () {
			this.modificandoAvatar = true
			const url = await this.$api().usuario.urlCargaAvatar()
			this.modificandoAvatar = false
			return url
		},
		async guardarUrlAvatar (url) {
			try {
				this.modificandoAvatar = true
				await this.$api().usuario.editarPerfil({ avatar: url })
				this.modificandoAvatar = false
				this.$refs.cargadorImagen.$emit('guardado')
			} catch (e) {
				console.error('guardarUrlAvatar', e)
				this.modificandoAvatar = false
			}
		}
	}
}
</script>
