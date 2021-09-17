<template>
	<div>
		<div>
			<title>Propuestas Programaticas</title>
			<div class="pilares">
				<img :src="imagen" alt="" class="img-pilares">
				<p>Pilares / Puntos principales</p>
				<div v-html="pilaresMarkdown" />
				<a class="descargable" :href="programa">
					<p class="descargable-programa">
						descarga programa completo
					</p>
				</a>
				<div v-html="pilaresMarkdown2" />
			</div>
			<div class="propuestas">
				<p class="titulo">
					Propuestas programaticas
				</p>
				<div class="caja-propuestas">
					<div v-for=" propuesta in propuestas" :key="propuesta.id" class="contenedor-propuesta">
						<div @click="mostrar(propuesta)">
							<img :src="propuesta.imagen.url" alt="" class="img-propuesta">
							<h2 class="titulo-propuesta">
								{{ propuesta.titulo }}
							</h2>
						</div>
						<!-- <transition name="contenidoprop">
						<div class="contenido-propuesta" :class="{'mostrando': _.includes(propuestaseleccionada, propuesta._id)}">
							{{ propuesta.contenido }}
							<span class="palito" />
						</div>
					</transition> -->
					</div>
					<transition name="entrar">
						<div v-if="propuestaseleccionada !== null" class="contenido-propuesta">
							<div v-html="Markdownpropuesta" />
						</div>
					</transition>
				</div>
			</div>
			<div class="contenedor-pdf">
				<!-- <object :data="programa" class="pdf-programa" /> -->


				<a :href="programa">
					<p class="descargable-programa">
						descarga programa completo
					</p>
				</a>
				<!-- <pdf src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/Programa_Completo_8ff9270a64.pdf" class="pdf-programa" /> -->
			</div>
		</div>
	</div>
</template>

<script>
// import _ from 'lodash'
import marked from 'marked'
// import _ from 'lodash'

export default {
	data () {
		return {
			propuestas: [],
			programa: null,
			imagen: null,
			seoimg: null,
			propuestaseleccionada: null,
			contenido: null,
			pilares: []
		}
	},

	async fetch () {
		console.log('cargar pagina')
		const solicitud = await fetch(`${process.env.apiURL}/programa`).then(res =>
			res.json()
		)
		const pag = solicitud
		this.propuestas = pag.propuestas
		this.programa = pag.Propuesta.url
		const imagen = pag.imagen[0]
		const imagen1 = imagen.imagen[0]
		this.imagen = imagen1.url
		this.seoimg = imagen.descripcionSEO
		this.pilares = pag.pilares.contenido

		console.log('pagina cargada', this.pilares)
	},

	computed: {
		propuestasID () {
			return this.propuestas.map(a => a._id)
		},
		pilaresMarkdown () {
			const pilar = this.pilares[0]
			return marked(pilar.contenido1, { sanitize: true })
		},
		pilaresMarkdown2 () {
			const pilar = this.pilares[1]
			return marked(pilar.contenido1, { sanitize: true })
		},
		Markdownpropuesta () {
			return marked(this.contenido, { sanitize: true })
		}
	},
	methods: {
		mostrar (propuesta) {
			console.log('mostrando', this.mostrarpropuesta)
			if (this.propuestaseleccionada === propuesta._id) {
				this.propuestaseleccionada = null
				this.contenido = null
				console.log('anulando', this.propuestaseleccionada)
			} else {
				this.propuestaseleccionada = propuesta._id
				this.contenido = propuesta.contenido
				console.log('mostrando', this.propuestaseleccionada)
			}
			console.log('propuestasID', this.propuestasID)
			console.log('propuesta seleccionada', propuesta._id)
		}
	}
}



</script>

<style lang="scss" scoped>

.img-pilares{
	width: 100vw;
}
.propuestas{
	padding: 10px;
}
.caja-propuestas {
	display: flex;
	flex-wrap: wrap;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	align-items: center;

}
.contenedor-propuesta {
	max-width: 150px;
	height: 200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border-width: 5px;
	margin: 10px;
	text-align: center;
	padding: 5px;
}
h2 {
	font-size: 1rem;
}
.descargable	{
	text-decoration: none;
	color: #fff;
}
.img-propuesta {
	max-width: 100px;
	max-height: 100px;
}
.contenido-propuesta {
	width: 80vw;
	height: 40vh;
	overflow-y: scroll;
	transition: .5s;
	top: 50%;
	background: rgb(255, 255, 255);
	padding: 20px;
}
.mostrando {
	width: 80vw;
	height: 80vh;
	border: 2px solid rgba(54, 54, 54, 0.863);
	transition: .5s;
	display: block;
	position: relative;
	left: 8vw;
	right: 8vw;
	top: 50%;
}
.pilares {
	text-align: center;
	justify-content: center;
	// color: rgba(255, 255, 255, 0.986);
	&#propuestas {
		color: rgb(255, 108, 194);
	}
}
h1, #propuestas {
	color: rgb(255, 108, 194);
}


.contenedor-pdf {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.pdf-programa {
	width: 80vw;
	height: 80vh;
}
.contenedor-pdf {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.pdf-programa {
	width: 80vw;
	height: 80vh;
}

.entrar-enter {
	height: 0;
	width: 80vw;
	opacity: 0;
}
.entrar-enter-to,
.entrar-leave {
	opacity: 1;
}
.entrar-enter-active {
	transition: width 0.7s ease, opacity 0.7s ease;
}
.entrar-leave-to {
	height: 0;
	width: 80vw;
	top: 0;
	right: 0;
	opacity: 0;
}
.entrar-leave-active {
	transition: width 0.5s ease, height 0.5s ease, opacity 0.4s ease;
}

@media screen and (min-width: 1024px) {
	.descargable-programa {
		width: 50vw;
		text-align: center;
}
}


</style>

