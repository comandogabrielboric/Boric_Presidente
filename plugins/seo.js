import _ from 'lodash'


function seo ({ titulo, descripcion, url, imagen }) {
	const meta = {
		title: titulo,
		description: descripcion,

		htmlAttrs: {
			lang: 'es-cl'
		},
		meta: [
			{ charset: 'utf-8' },
			{ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			{ hid: 'description', name: 'description', content: descripcion },

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
			{ hid: 'twitter:image', property: 'twitter:image', content: imagen }
		],
		link: [
			{ hid: 'canonical', rel: 'canonical', href: url	}
		]
	}
	return meta
}

export default ({ app }, inject) => {
	inject('eo', seo)
}
