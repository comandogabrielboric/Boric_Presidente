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
          <img :src="propuesta.imagen.url" alt="" class="img-propuesta">
          <h2 class="titulo-propuesta">
            {{ propuesta.titulo }}
          </h2>
          <div class="contenido-propuesta">
            {{ propuesta.contenido }}
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor-pdf">
      <object :data="programa" class="pdf-programa" />

      <p class="descargable-programa">
        descarga programa completo
      </p>
      <!-- <pdf src="https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/Programa_Completo_8ff9270a64.pdf" class="pdf-programa" /> -->
    </div>
  </div>
</template>
<script>
// import pdf from 'vue-pdf'

export default {
	// components: {
	// 	pdf
	// },
	data () {
		return {
			propuestas: [],
			programa: null,
			src: null
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
		console.log('propuestas cargadas', propuestas.length)
		console.log('programa ', this.programa)
	},
	mounted () {
		// const loadingtask = pdf.createLoadingTask('https://s3.amazonaws.com/cdn.boricpresidente.cl/archivos/Programa_Completo_8ff9270a64.pdf')
		// console.log(loadingtask)

		// this.src.promise.then(pdf => {
		// 	this.numPages = pdf.numPages
		// })
	}




}
</script>

<style scoped>

.propuestas{
	padding: 10px;
}
.caja-propuestas {
	display: flex;
}
.contenedor-propuesta {
	max-width: 250px;
	max-height: 250px;
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
	display: none;
	width: 0;
	height: 0;
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
