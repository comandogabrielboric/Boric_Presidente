<template>
  <div>
    <h1>holooo</h1>
    <!-- <div v-for="columna in columnas" :key="columna.id" class="columnas">
      <h1>{{ columna.title }}</h1> -->
    <!-- <img :src="`${process.env.apiURL}/`+columna.Media.url" alt=""> -->
    <!-- <p>Descripcion: {{ columna.description }}</p>
      <p>Categoria: {{ columna.category }} </p>
      <div />
      <div id="editor">
        <textarea :value="input" @input="contenido(columna.content)" />
        <div v-html="compiledMarkdown" />
      </div> -->
    <!-- </div> -->
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
		compiledMarkdown (md) {
			return marked(md, { sanitize: true })
		}
	}
// 	methods: {
// 		contenido (colco) {
// 			this.input = colco
// 		}
// 	}
}



</script>

<style scoped>
.columnas {
	width: 50vw;
}
html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
