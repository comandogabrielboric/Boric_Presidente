<template>
  <div>
    <h1>holooo</h1>
    <div v-for="columna in columnas" :key="columna.id">
      <h1>{{ columna.nombre }}</h1>
      <img :src="'http://localhost:1337'+columna.Media.url" alt="">
      <p>{{ columna.contenido }}</p>
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
			const solicitud = await fetch('http://localhost:1337/columnas').then(res =>
				res.json()
			)
			const columnas = solicitud
			this.columnas = columnas

			console.log(this.columnas)
		}
	}
}
</script>
