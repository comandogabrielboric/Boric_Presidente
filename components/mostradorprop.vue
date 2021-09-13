<template>
  <div class="contenedor">
    <div v-for=" propuesta in propuestas" :key="propuesta.id" class="contenedor-propuesta">
      <div class="caja-propuesta">
        <img :src="propuesta.imagen.url" alt="" class="img-propuesta">
        <h2 class="titulo-propuesta">
          {{ propuesta.titulo }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			propuestas: null
		}
	},

	async fetch () {
		console.log('cargar propuestas')
		const solicitud = await fetch(`${process.env.apiURL}/seleccionhomes`).then(res =>
			res.json()
		)
		const propuestas = solicitud
		const props = propuestas[0]
		this.propuestas = props.propuestas
		console.log(this.propuestas)
	}
}
</script>

<style lang="scss" scoped>
.contenedor {
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	border: 2px solid #fff;
}
.contenedor-propuesta {
	display: flex;
	width: 150px;
	text-align: center;
	justify-content: center;
}
.caja-propuesta {
	display: flex;
	flex-flow: column;
	position: relative;
	justify-content: center;
	align-content: center;
	align-items: center;
	max-width: 100px;

}
.titulo-propuesta {
	font-size: 1.1rem;
}
.img-propuesta {
	max-width: 100px;
}
</style>
