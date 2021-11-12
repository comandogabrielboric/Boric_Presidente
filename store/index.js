import axios from 'axios'
// import * as sanitizeHtml from 'sanitize-html'
import _ from 'lodash'
import sanitizar from './sanitizador'

export const state = () => {
	return {
		propuestas: []
	}
}



export const actions = {
	async nuxtServerInit ({ commit }) {
		console.log('get propuestas')
		const p = await axios.get(`${process.env.cmsURL}/programa`)
		const propuestas = p.data // Array
		commit('sanitizado', propuestas)
		// return propuestas
	}
}

export const mutations = {
	propuestas (state, value) {
		state.propuestas = value.propuestas
	},
	sanitizado (state, value) {
		const propuestas = value.propuestas
		// console.log('p', propuestas)
		const html = _.map(propuestas, pr => {
			pr.contenido = sanitizar(pr.contenido)
			return pr
		})
		// console.log('propuestas sanitizador', html)
		state.propuestas = html
	}
}

