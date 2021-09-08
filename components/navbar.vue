<template>
  <div>
    <div
      id="nav"
      class="navbar-responsive"
    >
      <div class="logo nuxtlink">
        <a href="/principal">
          ppp
        </a>
      </div>

      <input id="menu-btn" type="checkbox" class="menu-btn">
      <label for="menu-btn" class="menu-icon">
        <span class="menu-icon__line" />
      </label>
      <ul class="nav-links">
        <li class="nav-link" @click="cerrarMenu">
          <nuxt-link class="nuxtlink" to="/" @click="cerrarMenu">
            link
          </nuxt-link>
        </li>
        <li class="nav-link" @click="cerrarMenu">
          <nuxt-link class="nuxtlink" to="/" @click="cerrarMenu">
            link
          </nuxt-link>
        </li>
        <li class="nav-link" @click="cerrarMenu">
          <nuxt-link class="nuxtlink" to="/" @click="cerrarMenu">
            link
          </nuxt-link>
        </li>
        <li class="nav-link" @click="cerrarMenu">
          <nuxt-link class="nuxtlink" to="/" @click="cerrarMenu">
            link
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

	computed: {
		usuario () {
			return this.$store.state.usuario
		}
	},
	// selecciona checkbox para cerrar menú
	methods: {
		cerrarMenu (e) {
			const checkbox = document.getElementById('menu-btn')
			console.log(checkbox.value)
			const nocheck = checkbox.checked = false
			console.log(nocheck)
		}
	}

}
</script>


<style lang="scss" scoped>

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	}

	p {
		background: saddlebrown;
	}

//oculta en checkbox
.menu-btn {
		display: none;
	}
	//estilos del navbar
.navbar-responsive {
	position: fixed;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 80px;
	width: 90vw;
	padding: auto;
	margin: auto;
	background: #7DE2D1;
	opacity: .8;
	z-index: 100;
	transition: .4s ease-out;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
//estilos de nuxt-link
.nuxtlink {
text-decoration: none;
color: inherit;
text-transform: uppercase;
}
//estilos links
.nav-links {
	display: flex;
	list-style: none;

	.nav-link {
		margin: .2rem;
		padding: 1rem .5rem;
		color: #1f2020ec;
	}
	// crea sombra blanca cuando el mouse pasa por el link
	.nav-link:hover {
		background: #7DE2D1
		opacity .5;
	}
}
// crea icono de menu hamburgesa
.menu-icon {
	position: relative;
	padding: 26px 10px;
	cursor: pointer;
	z-index: 100;
	display: none;

	// crea la primera linea
	&__line {
		display: block;
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

	.menu-btn {
		display: none;
	}


}
//visualizacion en pantallas moviles
@media screen and (max-width: 770px) {
.navbar-responsive {

	.menu-btn {
		display: none;
	}
	.menu-icon {
		display: block;
		transition: .4s;
	}
	//estilos y posicion links
	.nav-links {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: rem 0;
		width: 100vw;
		height: 100vh;
		font-size: 2rem;
		color: #fff;
		background: rgba(110, 143, 135, 0.8);

		transition:
			opacity .8s .5,
			clip-path 1s .5;
		clip-path: circle(200px at top right);

		.nav-link {
			opacity: 0;
			transform: translateX(100%);
			width: 100%;
			height: 100%;
			text-align: center;

			.nav-link:hover {
				background: #7DE2D1,
				opacity .5;
			}

			.nuxtlink {
				display: block;
				padding: 2rem 0;
			}
		}
	}
	.menu-btn:checked ~ .nav-links {
		opacity: 1;
		clip-path: circle(100% at center);
		transition: .8s;


		.nav-link {
			opacity: 1;
			transform: translateX(0);
			transition:

				opacity .4s ease-in-out,
				transform .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

			&:nth-of-type(1) {
				transition-delay: .7s;
			}
			&:nth-of-type(2) {
				transition-delay: .8s;
			}
			&:nth-of-type(3) {
				transition-delay: .9s;
			}
			&:nth-of-type(4) {
				transition-delay: 1s;

			}
			.nav-link:hover {
				background: #7DE2D1,
				opacity .5;

				transition:
				opacity .4s easy-in-out;
			}
		}
	}

	.menu-btn:checked ~ .menu-icon {
		.menu-icon {
			border-radius: 50%;
			// animation: pulse 1s;
		}
		.menu-icon__line {
			background:  #fff;

			&::before {
				background: #fff;
			}
			&::after {
				background: #fff;
			}
		}
	}
}

}


</style>
