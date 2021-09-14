<template>
  <div>
    <div class="navbar">
      <div class="contenedor-logo">
        <nuxt-link to="/" class="ppal-link">
          <p>logo</p>
        </nuxt-link>
      </div>
      <transition name="entrar">
        <div class="contenedor-links link-interno" :class="{'activa': activa}">
          <nuxt-link to="/propuestas" class="nuxt-link">
            <p @click="activa = !activa">
              propuestas
            </p>
          </nuxt-link>
          <nuxt-link to="/sumate" class="nuxt-link">
            <p @click="activa = !activa">
              sumate
            </p>
          </nuxt-link>
          <p class="nuxt-link" @click="linkdona()">
            dona
          </p>
        </div>
      </transition>
      <div class="link-rrss">
        <div v-for="red in rrss" :key="red._id" class="cont-link">
          <a class="link-footer" :href="red.url"><img :src="red.icono.url" alt="" class="logorrss"></a>
        </div>
      </div>
      <span class="menu-icon__line" @click="activa = !activa" />
    </div>
    <transition name="entrar">
      <div>
        <dona class="modal-donacion" :class="{'activado' : quierodonar}" />
        <span v-if="quierodonar" class="x" @click="quierodonar = !quierodonar" />
      </div>
    </transition>
    <div class="espacio" />
  </div>
</template>

<script>
export default {
	data () {
		return {
			rrss: [],
			logosAD: null,
			activa: null,
			quierodonar: null
		}
	},
	async fetch () {
		const solicitud = await fetch(`${process.env.apiURL}/footer`).then(res =>
			res.json()
		)
		this.logosAD = solicitud.logosAD
		this.rrss = solicitud.RRSS
	},
	methods: {
		linkdona () {
			this.activa = !this.activa
			this.quierodonar = !this.quierodonar
		}
	}
}
</script>

<style lang="scss" scoped>
@import './scss/_colores.scss';
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
	position: fixed;
	justify-content: space-evenly;
	align-items: center;
	width: 100vw;
	height: 80px;
	background-color: $color10;
	opacity: .9;
}
.nuxt-link, .ppal-link {
	color: $color9;
	text-decoration: none;
	padding: 10px;
	border-radius: 4px;

	&:hover {
		color: $color12;
		opacity: .8;
		cursor: pointer;
	}
}
.link-rrss {
	display: flex;
	flex-flow: row;
	padding: 10px;
	z-index: 200;

}
.contenedor-links {
	display: flex;
	flex-flow: row;
	z-index: 200;
}
.menu-icon {
	&__line {
		position: fixed;
	}
}
.modal-donacion {
	width: 0;
	height: 0;
	transition: .5s;

}
.activado {
	top: 0;
	width: 100vw;
	height: 100vh;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.76);
	z-index: 90;
	backdrop-filter: blur(4px);
	overflow: hidden;
	transition: .5s;
}
.x {
	z-index: 300;
	position: fixed;
	right: 17%;
	top: 13%;
	width: 20px;
	&::before, &::after {
			color: #fff;
			z-index: 300;
			border: 2px solid #fff;
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			background: #fff;
			transition: background .8s ease;
	}
	&::before {
		transform: rotate(45deg);

	}
	&::after {
		transform: rotate(-45deg);
	}
}


.entrar-enter {
	height: 0;
	width: 0;
	opacity: 0;
}
.entrar-enter-to {
	opacity: 1;
}
.entrar-enter-active {
	transition: width 0.7s ease, opacity 0.7s ease;
}
.entrar-leave {
	opacity: 1;
}
.entrar-leave-to {
	height: 0;
	width: 0;
	top: 0;
	right: 0;
	opacity: 0;
}
.entrar-leave-active {
	transition: width 0.5s ease, height 0.5s ease, opacity 0.4s ease;
}
.espacio {
	display: flex;
	width: 100vw;
	height: 80px;
}

	@media screen and (max-width: 760px) {

		.contenedor-links {
			// display: none;
			width: 0;
			height: 0;
			position: fixed;
			transition: 0.8s;
			right: 10vw;
			top: 70px;
			overflow: hidden;
			text-align: center;
			justify-content: center;

				&.activa {
				display: flex;
				flex-flow: column;
				position: fixed;
				height: 200px;
				width: 150px;
				padding: 15px;
				border: 2px solid #fff;
				right: 10vw;
				transition: .8s;
				background: rgba(0, 0, 0, 0.664);
				backdrop-filter: blur(2px);
				border-radius: 4px;
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
