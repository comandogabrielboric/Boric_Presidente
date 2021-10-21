// import axios from 'axios'

export const state = () => {
	return {
		propuestas: []
	}
}



export const actions = {
	async getPropuestas ({ commit }) {
		const p = await fetch(`${process.env.cmsURL}/programa`)
		const propuestas = p.propuestas // Array
		commit('propuestas', propuestas)
		return propuestas
	}


}

export const mutations = {
	propuestas (state, value) {
		state.propuestas = value.propuestas
	}
}

