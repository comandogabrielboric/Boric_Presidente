<template>
  <div class="contenedor-footer">
    <div class="footer">
      <div class=" contenedor">
        <nuxt-link class="link-footer" to="/storytelling">
          <p>storytelling</p>
        </nuxt-link>
        <nuxt-link class="link-footer" to="/sumate">
          <p>sumate</p>
        </nuxt-link>
        <nuxt-link class="link-footer" to="/dona">
          <p>dona</p>
        </nuxt-link>
      </div>
      <div class="link-rrss">
        <div v-for="red in rrss" :key="red._id" class="cont-link">
          <a class="link-footer" :href="red.url"><img :src="red.icono.url" alt="" class="logorrss"></a>
        </div>
      </div>

      <div class="part-ciudadana contenedor">
        <nuxt-link class="link-footer" to="#">
          participacion ciudadana
        </nuxt-link>
      </div>
    </div>

    <div v-for="logo in logosAD" :key="logo._id" class="logos contenedor-logos">
      <img :src="logo.formats.thumbnail.url" alt="">
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			rrss: [],
			logosAD: null
		}
	},
	async fetch () {
		// console.log('cargar footer')
		const solicitud = await fetch(`${process.env.apiURL}/footer`).then(res =>
			res.json()
		)
		this.logosAD = solicitud.logosAD
		this.rrss = solicitud.RRSS
	}
}
</script>

<style scoped>
.contenedor-footer {
	margin: 5px;
}
.footer {
	display: flex;
	flex-flow: row;
	width: 100vw;
	justify-content: space-around;
	align-items: center;
}
.link-footer {
	color: #fff;
	text-decoration: none;
}

.logos {
	display: flex;
	flex-flow: row;
	color: #fff;
	justify-content: center;
	align-items: center;
	padding-bottom: 10px;
	padding-top: 10px;
}
.logorrss {
	width: 35px;
}
.link-rrss {
	padding: 10px;
	display: flex;
	flex-flow: row;
}
.cont-link {
	padding: 7px;
}

.link-footer {
	text-align: center;
	padding: 5px;
}
@media screen and (max-width: 760px) {

	.footer {
		flex-flow: column;
	}
	.contenedor {
		padding: 8px;
	}
	.contenedor-logos {
		margin-top: 15px;
	}
}

</style>
