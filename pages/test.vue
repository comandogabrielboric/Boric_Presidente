<template>
  <div>
    <h1>holooo</h1>
    <div v-for="columna in columnas" :key="columna.id">
      <h1>{{ columna.title }}</h1>
      <!-- <img :src="`${process.env.apiURL}/`+columna.Media.url" alt=""> -->
      <p>Descripcion: {{ columna.description }}</p>
      <p>Categoria: {{ columna.category }} </p>
      <div />
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			columnas: []
		}
	},
	mounted () {
		window.vm = this
		this.cargarcolumnas()
	},
	methods: {
		async cargarcolumnas () {
			console.log('cargar columa')
			const solicitud = await fetch('https://gbcms.crishadad.cl/articles').then(res =>
				res.json()
			)
			const columnas = solicitud
			this.columnas = columnas

			console.log(this.columnas)
		}
	}
}
</script>
