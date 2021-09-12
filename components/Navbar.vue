<template>
  <div class="navbar" @scroll="!activa">
    <div class="contenedor-logo">
      <nuxt-link to="/" class="nuxt-link">
        <p>logo</p>
      </nuxt-link>
    </div>
    <transition name="links">
      <div class="contenedor-links link-interno" :class="{'activa': activa}">
        <nuxt-link to="/propuestas" class="nuxt-link">
          <p>propuestas</p>
        </nuxt-link>
        <nuxt-link to="/sumate" class="nuxt-link">
          <p>sumate</p>
        </nuxt-link>
        <nuxt-link to="/" class="nuxt-link">
          <p>dona</p>
        </nuxt-link>
      </div>
    </transition>
    <div class="link-rrss">
      <div v-for="red in rrss" :key="red._id" class="cont-link">
        <a class="link-footer" :href="red.url"><img :src="red.icono.url" alt="" class="logorrss"></a>
      </div>
    </div>
    <span class="menu-icon__line" @click="activa = !activa" />
  </div>
</template>

<script>
export default {
	data () {
		return {
			rrss: [],
			logosAD: null,
			activa: null
		}
	},
	async fetch () {
		console.log('cargar footer')
		const solicitud = await fetch(`${process.env.apiURL}/footer`).then(res =>
			res.json()
		)
		this.logosAD = solicitud.logosAD
		this.rrss = solicitud.RRSS
		// console.log('footer: ', solicitud)
		// console.log('logooooooos: ', this.logosAD)
		console.log('rrss: ', this.rrss)
	}
}
</script>

<style lang="scss" scoped>
p {
	font-size: 1.3rem;
	text-transform: uppercase;
}
.logorrss {
	width: 30px;
	padding: 7px;
}
.navbar {
	display: flex;
	flex-flow: row;
	justify-content: space-evenly;
	align-items: center;
	height: 80px;
}
.nuxt-link {
	color: #fff;
	text-decoration: none;
	padding: 10px;
}
.link-rrss {
	display: flex;
	flex-flow: row;
	padding: 10px;
}
.contenedor-links {
	display: flex;
	flex-flow: row;
	transition: .8s;
}
.menu-icon {
	&__line {
		position: fixed;
	}
}

	@media screen and (max-width: 760px) {

		.contenedor-links {
			display: none;
			transition: 0.8s;
				&.activa {
				display: flex;
				flex-flow: column;
				position: fixed;
				right: 10vw;
				top: 70px;
				padding: 15px;
				border: 2px solid #fff;
				transition: .8s;
				background: rgba(0, 0, 0, 0.664);
			}
		}

	// crea icono de menu hamburgesa
		.menu-icon {
			position: relative;
			padding: 26px 10px;
			cursor: pointer;
			z-index: 100;
			// display: none;

			// crea la primera linea
			&__line {
				// display: none;
				position: relative;
				background: #000;
				height: 2px;
				width: 20px;
				border-radius: 4px;
				transition: background .8s ease;
			// crea la segunda y tercera linea
				&::before, &::after {
					content: '';
					position: absolute;
					height: 100%;
					width: 100%;
					border-radius: 4px;
					background: #000;
					transition: background .8s ease;
				}
				// posiciona la segunda y tercera linea
				&::before {
					transform: translateY(-5px);
				}
				&::after {
					transform: translateY(5px);
				}
			}
		}


}
</style>
