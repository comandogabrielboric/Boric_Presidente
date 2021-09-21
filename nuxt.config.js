import path from 'path'
import webpack from 'webpack'
import antdVars from './antdvVars'

const dev = process.env.MODO === 'dev'

const titulo = 'Boric Presidente'
const descripcion = 'Votemos para hacer realidad un Chile en que nadie quede fuera. Votemos Gabriel Boric Presidente'

function titleTemplate (tituloLocal) {
	// If undefined or blank then we don't need the hyphen
	return tituloLocal ? `${tituloLocal} | Boric Presidente` : 'Boric Presidente'
}

export default {
	env: {
		cmsURL: dev ? 'http://localhost:1337' : 'https://gbcms.crishadad.cl',
		apiURL: dev ? 'http://localhost:3001' : 'https://bpapi.crishadad.cl'
	},
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: titulo,
		titleTemplate,
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
			{ hid: 'twitter:site', property: 'twitter:site', content: '@GabrielBoric' }
		],
		link: [
			{ hid: 'canonical', rel: 'canonical', href: 'https://boricpresidente.cl'	},

			{ hid: 'icon', rel: 'icon', href: '/favicon.svg' },
			{ hid: 'mask-icon', rel: 'mask-icon', color: '#3D895B', href: '/favicon.svg' },

			{ hid: 'googleapis', rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ hid: 'gstatic', rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
			{ hid: 'gfonts', rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700;900&display=swap' },
			{ hid: 'gfonts', rel: 'stylesheet', href: 'https://use.typekit.net/jem8rnn.css' },

			{ hid: 'quill', rel: 'stylesheet', href: 'https://cdn.quilljs.com/1.0.0/quill.snow.css' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		{ src: 'ant-design-vue/dist/antd.less', lang: 'less' },
		'~/estilos/base.sass'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/antd-ui',
		'@/plugins/axios',
		'@/plugins/sanitizador',
		'@/plugins/lodash'
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
		'nuxt-svg-loader'
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
			}),
			new webpack.NormalModuleReplacementPlugin(/node_modules\/ant-design-vue\/lib\/style\/index\.less/, path.join(__dirname, 'estilos/ant.less'))
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
