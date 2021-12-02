// import path from 'path'
// import webpack from 'webpack'
// import antdVars from './antdvVars'

const dev = process.env.MODO === 'dev'
const remoto = !!process.env.REMOTO

const titulo = 'Boric Presidente'
const descripcion = 'Súmate a Cambiar Chile junto a Gabriel Boric'
const imagen = '/imagenes/portadaMovil.webp'
const url = 'https://boricpresidente.cl'

function titleTemplate (tituloLocal) {
	// If undefined or blank then we don't need the hyphen
	return tituloLocal ? `${tituloLocal} | Boric Presidente` : 'Boric Presidente'
}

const nuxtConfig = {
	env: {
		cmsURL: (dev && !remoto) ? 'http://localhost:1337' : 'https://gbcms.crishadad.cl',
		apiURL: (dev && !remoto) ? 'http://localhost:3001' : 'https://bpapi.crishadad.cl'
	},
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: titulo,
		titleTemplate,
		description: descripcion,

		htmlAttrs: {
			lang: 'es-cl'
		},
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			{ hid: 'description', name: 'description', content: descripcion },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'theme-color', content: '#ffffff' },


			{ hid: 'iprop:name', itemprop: 'name', content: titulo },
			{ hid: 'iprop:description', itemprop: 'description', content: descripcion },
			{ hid: 'iprop:image', itemprop: 'image', content: imagen },

			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:title', property: 'og:title', content: titulo },
			{ hid: 'og:description', property: 'og:description', content: descripcion },
			{ hid: 'og:image', property: 'og:image', content: imagen },
			{ hid: 'og:url', property: 'og:url', content: url },

			{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
			{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
			{ hid: 'twitter:image', property: 'twitter:image', content: imagen },
			{ hid: 'twitter:site', property: 'twitter:site', content: '@GabrielBoric' }
		],
		link: [
			{ hid: 'canonical', rel: 'canonical', href: url	},

			{ hid: 'icon', rel: 'icon', href: '/favicon.svg' },
			{ hid: 'mask-icon', rel: 'mask-icon', color: '#3D895B', href: '/favicon.svg' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'ant-design-vue/dist/antd.css',
		'~/estilos/base.sass'
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/antd-ui',
		'@/plugins/axios',
		'@/plugins/consolo',
		{ src: '@/plugins/leaflet', mode: 'client' },
		'@/plugins/lodash',
		'@/plugins/sanitizador',
		'@/plugins/seo',
		'@/plugins/tagManager'
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/eslint-module',
		'nuxt-font-loader'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				'postcss-discard-comments': { comments: { removeAll: true } },
				'postcss-preset-env': {}
			}
		}
	},
	telemetry: false,
	render: {
		static: {
			maxAge: 1000 * 60 * 60 * 24 * 7
		}
	},

	fontLoader: {
		url: 'https://use.typekit.net/jem8rnn.css',
		prefetch: true,
		preconnect: true
	}
}


// Tag Manager
const gTagManager = 'GTM-TG9JT2J'
if (gTagManager) {
	nuxtConfig.head.script = nuxtConfig.head.script || []
	nuxtConfig.head.script.push(
		{ hid: 'gtm', async: true, src: `https://www.googletagmanager.com/gtm.js?id=${gTagManager}`, body: true }
	)
	nuxtConfig.head.script.push(
		{ hid: 'gtmJS', pbody: true, innerHTML: "window.dataLayer = window.dataLayer || [];window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })", body: true }
	)
	nuxtConfig.head.noscript = nuxtConfig.head.noscript || []
	nuxtConfig.head.noscript.push(
		{ hid: 'gtmNoScript', pbody: true, innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gTagManager}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`, body: true }
	)
	nuxtConfig.head.__dangerouslyDisableSanitizersByTagID = {
		gtmJS: ['innerHTML'],
		gtmNoScript: ['innerHTML']
	}
}

export default nuxtConfig
