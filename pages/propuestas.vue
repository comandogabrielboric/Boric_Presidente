<template>
  <div>
    <title>Propuestas Programaticas</title>
    <div class="pilares">
      <img :src="imgpilares" alt="" class="img-pilares">
      <p>Pilares / Puntos principales</p>
      <div v-html="pilaresMarkdown" />
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
        <transition name="contenidoprop">
          <div v-if="propuestaseleccionada !== null" class="contenido-propuesta">
            <div v-html="compiledMarkdown" />
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
</template>
<script>
import marked from 'marked'

export default {
	// components: {
	// 	pdf
	// },
	data () {
		return {
			propuestas: [],
			programa: null,
			src: null,
			propuestaseleccionada: null,
			contenido: null,
			pilares: null,
			imgpilares: null
		}
	},

	async fetch () {
		console.log('cargar propuestas y programa')
		const solicitud = await fetch(`${process.env.apiURL}/propuestas`).then(res =>
			res.json()
		)
		const propuestas = solicitud
		this.propuestas = propuestas

		const solicitud2 = await fetch(`${process.env.apiURL}/programa`).then(res =>
			res.json()
		)
		const programa = solicitud2.Propuesta
		this.programa = programa.url

		const solicitud3 = await fetch(`${process.env.apiURL}/pilares`).then(res =>
			res.json()
		)
		this.pilares = solicitud3
		const img = solicitud3.Imagen.url
		this.imgpilares = img

		// console.log('Pilares', this.pilares)
		// console.log('propuestas cargadas', propuestas)
		console.log('programa ', this.programa)
		console.log('img pilares ', img)
	},
	computed: {
		propuestasID () {
			return this.propuestas.map(a => a._id)
		},
		compiledMarkdown () {
			return marked(this.contenido, { sanitize: true })
		},
		pilaresMarkdown () {
			const contenido = this.pilares
			const cont = contenido.Contenido
			return marked(cont, { sanitize: true })
		}

	},
	mounted () {
		// const loadingtask = pdf.createLoadingTask('https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/Programa_Completo_8ff9270a64.pdf')
		// console.log(loadingtask)

		// this.src.promise.then(pdf => {
		// 	this.numPages = pdf.numPages
		// })
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
.img-propuesta {
	max-width: 100px;
	max-height: 100px;
}
.contenido-propuesta {
	width: 80vw;
	height: 80vh;
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

@media screen and (min-width: 1024px) {
.descargable-programa {
	width: 50vw;
	text-align: center;
}
}


</style>
