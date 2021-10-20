<template lang="pug">
.root
	.titulo
			h1 Únete a este compromiso
			p Hoy nos unimos por los cambios que Chile necesita. Hoy nos unimos por Boric, y te invitamos a unirte a ti también
	.contenido
		.contenedorCarta
			.ql-editor.contenidoHTML(v-html='carta')
		.contenedorfirmas
			formulario
			firmantes

</template>
<script>
import formulario from './unete/formulario.vue'
// import firmantes from '../components/firmantes.vue'
// import firmantes from './unete/firmantes.vue'
export default {
	components: { formulario },

	async asyncData ({ app }) {
		const textos = await app.$olicitar(`${process.env.cmsURL}/carta-nos-unimos-con-boric`)
		const carta = app.$sanitizar(textos.Carta)
		const textoIntroductorio = app.$sanitizar(textos.Texto_introductorio)
		const textoModal = app.$sanitizar(textos.Texto_modal)

		const data = {
			carta,
			textoIntroductorio,
			textoModal
		}
		return data
	},
	data () {
		return {
			carta: null,
			textoIntroductorio: null,
			textoModal: null
		}
	},
	head () {
		const titulo = 'Unete'
		const descripcion = 'El cambio lo realizamos las personas comunes. Aporta y construyamos un Chile donde el dinero no haga la diferencia'
		const imagen = '/imagenes/portadaMovil.webp'
		const url = 'https://boricpresidente.cl/unete'
		const obj = this.$eo({
			titulo,
			descripcion,
			imagen,
			url
		})
		return obj
	}

}
</script>
<style lang="sass" scoped>
@import '~/estilos/paleta'
@import '~/estilos/utils'
.root
	background-color: $azul2
	padding: 0 0 1em 0

.titulo
	padding: 3em 1em 1em 1em
	text-align: center
	h1
		color: $verde3
		font-size: 3em
		font-weight: 900
		font-style: italic
	p
		padding: 1em 0
		font-size: 1.5em
.contenido
	margin-bottom: 5em
	display: flex
	flex-wrap: wrap
	justify-content: center
	.contenedorCarta
		max-width: 740px
		height: 90vh
		max-height:800px
		overflow: auto
		background: #fff
		pading-bottom: 2em
		border: 1px solid orange
		margin-bottom: 2em
	.contenedorfirmas
		max-width: 320px
		display: flex
		flex-wrap: wrap
		justify-content: center
		align-items: center
		padding: 2em 1em 1em 1em
	+compu
		justify-content: space-evenly
	+movil
		padding: 0 .5em




.contenidoHTML
	width: 900px
	max-width: 100%
	margin: 0 auto
	height: 900px
	max-height: 100%
	// border: 3px dashed orangered
	background-color: #fff
	// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
	padding: 4rem
	+movil
		padding: 1rem
		font-size: .889em
	text-align: justify
	justify-content: justify
	::v-deep
		*
			font-family: lexia
			line-height: 1.4
		h1
			font-weight: 900
			font-style: italic
			margin-top: 2rem
			color: #19CBB5
		h2
			font-size: 1.4rem
			margin-bottom: 1em
			margin-top: 1.4rem
			font-weight: 900
			font-style: italic
			color: #094C67
		h1 + p
			margin-top: 2rem
		p,
		li
			font-size: 1rem
			line-height: 1.8
			margin-bottom: .8rem
			color: rgba(0,0,0,.7 )
			+movil
				line-height: 1.6
		strong
			font-weight: bold
			font-style: italic
		b
			font-weight: bold
		ol
			margin: 2em 0
		a
			all: revert
</style>
