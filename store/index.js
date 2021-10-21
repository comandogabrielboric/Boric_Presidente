import axios from 'axios'
// import * as sanitizeHtml from 'sanitize-html'
// import _ from 'lodash'

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
		// _.map(propuestas, p => {
		// 	p.contenido = mutations.sanitizar(p.contenido)
		// 	return p
		// })
		commit('propuestas', propuestas)
		// return propuestas
	}
}

export const mutations = {
	propuestas (state, value) {
		state.propuestas = value.propuestas
	}
}

