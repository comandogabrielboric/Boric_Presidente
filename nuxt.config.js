import path from 'path'
import webpack from 'webpack'
import antdVars from './antdvVars'

const dev = process.env.MODO === 'dev'

const titulo = 'Boric Presidente'
const descripcion = 'PENDIENTE'

export default {
	env: {
		apiURL: dev ? 'https://gbcms.crishadad.cl' : 'http://localhost:1337'
	},
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: titulo,
		description: descripcion,

		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: descripcion },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'theme-color', content: '#ffffff' },


			{ hid: 'iprop:name', itemprop: 'name', content: titulo },
			{ hid: 'iprop:description', itemprop: 'description', content: descripcion },
			{ hid: 'iprop:image', itemprop: 'image', content: '/imagenes/portada.jpg' },

			{ hid: 'og:title', property: 'og:title', content: titulo },
			{ hid: 'og:description', property: 'og:description', content: descripcion },
			{ hid: 'og:image', property: 'og:image', content: '/imagenes/portada.jpg' },

			{ hid: 'twitter:title', property: 'twitter:title', content: titulo },
			{ hid: 'twitter:description', property: 'twitter:description', content: descripcion },
			{ hid: 'twitter:image', property: 'twitter:image', content: '/imagenes/portada.jpg' },
			{ hid: 'twitter:site', property: 'twitter:image', content: '@GabrielBoric' }
		],
		link: [
			{ hid: 'icon', rel: 'icon', href: '/favicon.svg' },
			{ hid: 'mask-icon', rel: 'mask-icon', color: '#3D895B', href: '/favicon.svg' },

			{ hid: 'googleapis', rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ hid: 'gstatic', rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
			{ hid: 'gfonts', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/sass/base.sass',
		{ src: 'ant-design-vue/dist/antd.less', lang: 'less' }
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/antd-ui',
		'plugins/demarcador',
		'plugins/lodash'
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/svg'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		babel: {
			plugins: [
				['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]
			]
		},
		loaders: {
			less: {
				lessOptions: {
					modifyVars: antdVars,
					javascriptEnabled: true
				}
			}
		},
		plugins: [
			new webpack.IgnorePlugin({
				resourceRegExp: /^\.\/locale$/,
				contextRegExp: /moment$/
			})
		],
		postcss: {
			plugins: {
				'postcss-discard-comments': { comments: { removeAll: true } },
				'postcss-preset-env': {}
			}
		}
	},
	telemetry: false
}
