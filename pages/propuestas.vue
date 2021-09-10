<template>
  <div>
    <title>Propuestas Programaticas</title>
    <div>
      <p>Pilares / Puntos principales</p>
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

      <p class="descargable-programa">
        descarga programa completo
      </p>
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
			mostrarpropuesta: null,
			propuestaseleccionada: null,
			contenido: null
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
		console.log('propuestas cargadas', propuestas)
		console.log('programa ', this.programa)
	},
	computed: {
		propuestasID () {
			return this.propuestas.map(a => a._id)
		},
		compiledMarkdown () {
			return marked(this.contenido, { sanitize: true })
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
				this.mostrarpropuesta = null
				this.contenido = null
				console.log('anulando', this.propuestaseleccionada, this.mostrarpropuesta)
			} else {
				this.mostrarpropuesta = true
				this.propuestaseleccionada = propuesta._id
				this.contenido = propuesta.contenido
				console.log('mostrando', this.propuestaseleccionada, this.mostrarpropuesta)
			}
			console.log('propuestasID', this.propuestasID)
			console.log('propuesta seleccionada', propuesta._id)
		}
	}




}
</script>

<style lang="scss" scoped>

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
	border-style: solid;
	border-color: crimson;
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
}
}


</style>
